<?php

namespace PartKeepr\ProjectBundle\Controller;

use Dunglas\ApiBundle\Api\IriConverter;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\ProjectBundle\Entity\ProjectPart;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;

class ProjectReportController extends FOSRestController
{
    /**
     * @Routing\Route("/api/project_reports", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     *
     * @return array
     */
    public function getProjectReportAction(Request $request)
    {
        $projectsParameter = json_decode($request->get('projects'));

        if (!is_array($projectsParameter)) {
            throw new \Exception('projects must be an array');
        }

        /**
         * @var IriConverter
         */
        $iriConverter = $this->get('api.iri_converter');

        $projects = [];

        foreach ($projectsParameter as $projectParameter) {
            if (!is_object($projectParameter)) {
                throw new \Exception('Each project in the projects array must be an object');
            }

            if (!property_exists($projectParameter, 'quantity')) {
                throw new \Exception('quantity must be present');
            }

            if (!property_exists($projectParameter, 'project')) {
                throw new \Exception('project ID must be present');
            }

            $project = $iriConverter->getItemFromIri($projectParameter->project);

            $projects[] = ['project' => $project, 'quantity' => $projectParameter->quantity];
        }

        $partRepository = $this->get('doctrine.orm.entity_manager')->getRepository(
            'PartKeepr\\PartBundle\\Entity\\Part'
        );
        $aPartResults = [];

        foreach ($projects as $report) {
            $dql = 'SELECT pp.quantity, pro.name AS projectname, pp.overage, pp.overageType, pp.remarks, pp.lotNumber, ';
            $dql .= 'p.id FROM ';
            $dql .= 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart pp JOIN pp.part p ';
            $dql .= 'JOIN pp.project pro WHERE pp.project = :project';

            $query = $this->get('doctrine.orm.entity_manager')->createQuery($dql);
            $query->setParameter('project', $report['project']);

            $projectIRI = $iriConverter->getIriFromItem($report['project']);

            foreach ($query->getArrayResult() as $result) {
                $partId = $result['id'];

                $part = $partRepository->find($partId);
                /**
                 * @var Part $part
                 */
                if ($result["overageType"] === ProjectPart::OVERAGE_TYPE_PERCENT) {
                    $overage = $result['quantity'] * $report['quantity'] * ($result["overage"] / 100);
                } else {
                    $overage = $result["overage"];
                }

                if (array_key_exists($partId, $aPartResults)) {
                    // Only update the quantity of the part

                    $aPartResults[$partId]['quantity'] += ($result['quantity'] * $report['quantity']) + $overage;
                    $aPartResults[$partId]['projectNames'][] = $result['projectname'];
                    $aPartResults[$partId]['projects'][] = $projectIRI;
                } else {
                    $serializedData = $this->get('serializer')->normalize(
                        $part,
                        'jsonld'
                    );

                    $storageLocationName = "";

                    if ($part->getStorageLocation() !== null) {
                        $storageLocationName = $part->getStorageLocation()->getName();
                    }

                    $subParts = [];

                    if ($part->isMetaPart()) {
                        $matchingParts = $this->container->get("partkeepr.part_service")->getMatchingMetaParts($part);
                        foreach ($matchingParts as $matchingPart) {
                            $subParts[] = $this->get('serializer')->normalize(
                                $matchingPart,
                                'jsonld'
                            );
                        }
                    }

                    // Create a full resultset
                    $aPartResults[$result['id']] = [
                        'quantity'             => ($result['quantity'] * $report['quantity']) + $overage,
                        'part'                 => $serializedData,
                        'storageLocation_name' => $storageLocationName,
                        'available'            => $part->getStockLevel(),
                        'sum_order'            => 0,
                        'projectNames'         => [$result['projectname']],
                        'projects'             => [$projectIRI],
                        'subParts'             => $subParts,
                        'metaPart'             => $part->isMetaPart(),
                        'productionRemarks'    => $part->getProductionRemarks(),
                        'lotNumber'            => $result['lotNumber'],
                        'remarks'              => [],
                    ];


                }

                $aPartResults[$partId]['projectQuantities'][] = [
                    "project" => $projectIRI,
                    "projectName" => $result['projectname'],
                    "quantity" => ($result['quantity'] * $report['quantity']) + $overage
                ];

                if ($result['remarks'] != '') {
                    $aPartResults[$result['id']]['remarks'] = [$result['projectname'].': '.$result['remarks']];
                }
            }
        }

        $aFinalResult = [];

        // Iterate over all results and calculate how many parts are missing
        foreach ($aPartResults as $key => $partResult) {
            $missing = $partResult['quantity'] - $partResult['available'];

            if ($missing < 0) {
                $missing = 0;
            }

            $partResult['missing'] = $missing;
            $partResult['remarks'] = implode(', ', $partResult['remarks']);
            $partResult['projectNames'] = implode(', ', $partResult['projectNames']);
            $partResult['projects'] = json_encode($partResult['projects']);

            $aFinalResult[] = $partResult;
        }

        return $aFinalResult;
    }
}
