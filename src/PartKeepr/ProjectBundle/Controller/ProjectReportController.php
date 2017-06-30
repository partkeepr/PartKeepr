<?php

namespace PartKeepr\ProjectBundle\Controller;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\IriConverter;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\JsonLd\Response;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\ProjectBundle\Entity\Project;
use PartKeepr\ProjectBundle\Entity\ProjectPart;
use PartKeepr\ProjectBundle\Entity\Report;
use PartKeepr\ProjectBundle\Entity\ReportProject;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ProjectReportController extends FOSRestController
{
    use ActionUtilTrait;

    /**
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     *
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function createReportAction(Request $request)
    {
        /**
         * @var ResourceInterface
         */
        list($resourceType, $format) = $this->extractAttributes($request);
        $report = $this->get("api.serializer")->deserialize(
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
                    $overage = $reportProject->getQuantity() * $projectPart->getQuantity() * ($projectPart->getOverage() / 100);
                } else {
                    $overage = $projectPart->getOverage();
                }

                $quantity = $reportProject->getQuantity() * $projectPart->getQuantity() + $overage;
                $report->addPartQuantity($projectPart->getPart(), $projectPart, $quantity);
            }
        }

        $this->get("doctrine.orm.default_entity_manager")->persist($report);
        $this->get("doctrine.orm.default_entity_manager")->flush();

        $response = new \Symfony\Component\HttpFoundation\Response($this->get('serializer')->serialize(
            $report,
            'jsonld'
        ));

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
    public function getReportAction (Request $request, $id)  {
        /**
         * @var $report Report
         */
        $report = $this->get("doctrine.orm.default_entity_manager")->getRepository("PartKeeprProjectBundle:Report")->find($id);
        $this->calculateMissingParts($report);
        $this->prepareMetaPartInformation($report);

        $response = new \Symfony\Component\HttpFoundation\Response($this->get('serializer')->serialize(
            $report,
            'jsonld'
        ));

        $response->headers->set("Content-Type", "text/json");

        return $response;
    }

    public function calculateMissingParts (Report $report) {
        foreach ($report->getReportParts() as $reportPart) {
            $missing = $reportPart->getQuantity() - $reportPart->getPart()->getStockLevel();

            if ($missing < 0) {
                $missing = 0;
            }

            $reportPart->setMissing($missing);
        }
    }
    public function prepareMetaPartInformation (Report $report) {
        foreach ($report->getReportParts() as $reportPart) {
            $subParts = [];

            if ($reportPart->getPart()->isMetaPart()) {
                $matchingParts = $this->container->get("partkeepr.part_service")->getMatchingMetaParts($reportPart->getPart());
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
