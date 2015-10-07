<?php
namespace PartKeepr\SetupBundle\Controller;

use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PartUnitSetupController extends SetupController
{
    /**
     * @Route("/setup/createPartUnits")
     */
    public function createPartUnitsAction(Request $request)
    {
        $response = $this->handleRequest($request, "/setup/_int_create_part_units");

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_create_part_units")
     */
    public function intCreatePartUnitsAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Default part unit successfully created",
        );

        try {
            $entityManager = $this->get("doctrine.orm.default_entity_manager");

            $dql = "SELECT COUNT(p) FROM PartKeepr\PartBundle\Entity\PartMeasurementUnit p WHERE p.default = :default";
            $query = $entityManager->createQuery($dql);
            $query->setParameter("default", true);

            if ($query->getSingleScalarResult() == 0) {
                $partUnit = new PartMeasurementUnit();
                $partUnit->setName("Pieces");
                $partUnit->setShortName("pcs");
                $partUnit->setDefault(true);

                $entityManager->persist($partUnit);
                $entityManager->flush();

            }
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Part unit setup error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

}
