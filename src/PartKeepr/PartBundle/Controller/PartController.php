<?php

namespace PartKeepr\PartBundle\Controller;

use Dunglas\ApiBundle\Api\IriConverter;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\ProjectBundle\Entity\Project;
use PartKeepr\ProjectBundle\Entity\ProjectRun;
use PartKeepr\ProjectBundle\Entity\ProjectRunPart;
use PartKeepr\StockBundle\Entity\StockEntry;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;

class PartController extends FOSRestController
{
    /**
     * @Routing\Route("/api/parts/massRemoveStock", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @param Request $request
     *
     * @throws \Exception Thrown if parameters are formatted incorrectly
     */
    public function massRemoveStockAction(Request $request)
    {
        /**
         * @var IriConverter
         */
        $iriConverter = $this->get('api.iri_converter');

        $removals = json_decode($request->get('removals'));

        if (!is_array($removals)) {
            throw new \Exception('removals parameter must be an array');
        }

        $projects = json_decode($request->get('projects'));

        if (!is_array($projects)) {
            throw new \Exception('projects parameter must be an array');
        }

        /**
         * @var ProjectRun[] $projectRuns
         */
        $projectRuns = [];

        foreach ($projects as $projectInfo) {
            /**
             * @var Project $project
             */
            $project = $iriConverter->getItemFromIri($projectInfo->project);

            $projectRun = new ProjectRun();
            $projectRun->setQuantity($projectInfo->quantity);
            $projectRun->setRunDateTime(new \DateTime());
            $projectRun->setProject($project);

            $projectRuns[$projectInfo->project] = $projectRun;
        }

        $user = $this->get('partkeepr.userservice')->getUser();

        foreach ($removals as $removal) {
            if (!property_exists($removal, 'part')) {
                throw new \Exception('Each removal must have the part property defined');
            }

            if (!property_exists($removal, 'amount')) {
                throw new \Exception('Each removal must have the amount property defined');
            }

            if (!property_exists($removal, 'lotNumber')) {
                throw new \Exception('Each removal must have the lotNumber property defined');
            }

            /**
             * @var Part $part
             */
            $part = $iriConverter->getItemFromIri($removal->part);

            $stock = new StockEntry();
            $stock->setStockLevel(0 - intval($removal->amount));
            $stock->setUser($user);

            if (property_exists($removal, 'comment')) {
                $stock->setComment($removal->comment);
            }

            $part->addStockLevel($stock);

            $projectRunPart = new ProjectRunPart();
            $projectRunPart->setLotNumber($removal->lotNumber);
            $projectRunPart->setPart($part);
            $projectRunPart->setQuantity($removal->amount);

            foreach ($projectRuns as $projectRun) {
                $projectRun->addPart($projectRunPart);
            }
        }

        foreach ($projectRuns as $projectRun) {
            $this->get('doctrine.orm.entity_manager')->persist($projectRun);
        }

        $this->get('doctrine.orm.entity_manager')->flush();
    }

    /**
     * @Routing\Route("/api/parts/getPartParameterNames", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array An array with name and description properties
     */
    public function getParameterNamesAction()
    {
        $dql = "SELECT p.name, p.description, p.valueType, u.name AS unitName, u.symbol AS unitSymbol FROM PartKeepr\PartBundle\Entity\PartParameter p LEFT JOIN p.unit  u GROUP BY p.name, p.description, p.valueType, u.name, u.symbol";

        $query = $this->get("doctrine.orm.default_entity_manager")->createQuery($dql);

        return $query->getArrayResult();
    }

    /**
     * @Routing\Route("/api/parts/getPartParameterValues", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @param $request Request The Request to process
     *
     * @return array An array with name and description properties
     */
    public function getParameterValuesAction(Request $request)
    {
        if (!$request->query->has("name")) {
            throw new \InvalidArgumentException("The parameter 'name' must be given");
        }

        if (!$request->query->has("valueType")) {
            throw new \InvalidArgumentException("The parameter 'valueType' must be given");
        }

        if ($request->query->get("valueType") == "string") {
            $dql = "SELECT p.stringValue AS value FROM PartKeepr\PartBundle\Entity\PartParameter p WHERE p.name = :name AND p.valueType = :valueType GROUP BY p.stringValue";
            $query = $this->get("doctrine.orm.default_entity_manager")->createQuery($dql);
            $query->setParameter("name", $request->query->get("name"));
            $query->setParameter("valueType", $request->query->get("valueType"));

            return $query->getArrayResult();
        } else {
            $dql = "SELECT p.value FROM PartKeepr\PartBundle\Entity\PartParameter p WHERE p.name = :name AND p.valueType = :valueType GROUP BY p.value";

            $query = $this->get("doctrine.orm.default_entity_manager")->createQuery($dql);
            $query->setParameter("name", $request->query->get("name"));
            $query->setParameter("valueType", $request->query->get("valueType"));

            return $query->getArrayResult();
        }
    }
}
