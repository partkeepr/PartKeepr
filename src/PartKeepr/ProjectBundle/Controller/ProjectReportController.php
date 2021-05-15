<?php

namespace PartKeepr\ProjectBundle\Controller;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Api\ResourceInterface;
use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\ProjectBundle\Entity\ProjectPart;
use PartKeepr\ProjectBundle\Entity\Report;
use Symfony\Component\HttpFoundation\Request;

class ProjectReportController extends FOSRestController
{
//    use ActionUtilTrait;

    /**
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "PartKeeprProjectBundle:ProjectReport:createReport"         # Controller
    /**
     * @Route(
     *     name="ProjectReportPost",
     *     path="/reports",
     *     defaults={"_api_resource_class"=Report::class, "_api_collection_operation_name"="custom_post"}
     * )
     * @Method("POST")
     **/
    public function createReportAction(Request $request)
    {
        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = RequestAttributesExtractor::extractAttributes($request);
        $report = $this->get("api_platform.serializer")->deserialize(
            $request->getContent(),
            $resourceType->getEntityClass(),
            $format,
            $resourceType->getDenormalizationContext()
        );

        /**
         * @var $report Report
         */
        foreach ($report->getReportProjects() as $reportProject) {
            foreach ($reportProject->getProject()->getParts() as $projectPart) {
                if ($projectPart->getOverageType() === ProjectPart::OVERAGE_TYPE_PERCENT) {
                    $overage = $reportProject->getQuantity() * $projectPart->getQuantity() * ($projectPart->getOverage(
                            ) / 100);
                } else {
                    $overage = $projectPart->getOverage();
                }

                $quantity = $reportProject->getQuantity() * $projectPart->getQuantity() + $overage;
                $report->addPartQuantity($projectPart->getPart(), $projectPart, $quantity);
            }
        }

        $this->get("doctrine.orm.default_entity_manager")->persist($report);
        $this->get("doctrine.orm.default_entity_manager")->flush();

        $response = new \Symfony\Component\HttpFoundation\Response(
            $this->get('serializer')->serialize(
                $report,
                'jsonld'
            )
        );

        $response->headers->set("Content-Type", "text/json");

        return $response;
    }

    /**
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "PartKeeprProjectBundle:ProjectReport:getReport"         # Controller
    /**
     * @Route(
     *     name="ProjectReportGet",
     *     path="/reports/{id}",
     *     defaults={"_api_resource_class"=Report::class, "_api_item_operation_name"="custom_get"}
     * )
     * @Method("GET")
     **/
    public function getReportAction(Request $request, $id)
    {
        /**
         * @var $report Report
         */
        $report = $this->get("doctrine.orm.default_entity_manager")->getRepository(
            "PartKeeprProjectBundle:Report"
        )->find($id);
        $this->calculateMissingParts($report);
        $this->prepareMetaPartInformation($report);

        $response = new \Symfony\Component\HttpFoundation\Response(
            $this->get('serializer')->serialize(
                $report,
                'jsonld'
            )
        );

        $response->headers->set("Content-Type", "text/json");

        return $response;
    }

    public function calculateMissingParts(Report $report)
    {
        foreach ($report->getReportParts() as $reportPart) {
            $missing = $reportPart->getQuantity() - $reportPart->getPart()->getStockLevel();

            if ($missing < 0) {
                $missing = 0;
            }

            $reportPart->setMissing($missing);
        }
    }

    public function prepareMetaPartInformation(Report $report)
    {
        foreach ($report->getReportParts() as $reportPart) {
            $subParts = [];

            if ($reportPart->getPart()->isMetaPart()) {
                $matchingParts = $this->container->get("partkeepr.part_service")->getMatchingMetaParts(
                    $reportPart->getPart()
                );
                foreach ($matchingParts as $matchingPart) {
                    $subParts[] = $this->get('serializer')->normalize(
                        $matchingPart,
                        'jsonld'
                    );
                }
                $reportPart->setMetaPart(true);
                $reportPart->setSubParts($subParts);
            }
        }
    }
}
