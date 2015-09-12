<?php
namespace PartKeepr\PartBundle\Controller;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\JsonLd\Response;
use Nelmio\ApiDocBundle\Tests\Fixtures\Controller\ResourceController;
use Symfony\Component\HttpFoundation\Request;

class PartMeasurementUnitController extends ResourceController
{
    public function setDefaultAction(Request $request, $id)
    {
        /**
         * @var $em EntityManager
         */
        $em = $this->get("doctrine")->getEntityManager();

        $em->beginTransaction();

        $resource = $this->getResource($request);
        $this->findOrThrowNotFound($resource, $id);



        $dql = 'UPDATE PartKeepr\PartBundle\Entity\PartMeasurementUnit pu SET pu.isDefault = :default WHERE pu.id = :id';

        $em->createQuery($dql)
            ->setParameter("id", $id)
            ->setParameter(
            "default",
            true,
            \PDO::PARAM_BOOL
        )->execute();

        $dql = 'UPDATE PartKeepr\PartBundle\Entity\PartMeasurementUnit pu SET pu.isDefault = :default WHERE pu.id != :id';

        $em->createQuery($dql)
            ->setParameter("id", $id)
            ->setParameter(
            "default",
            false,
            \PDO::PARAM_BOOL
        )->execute();

        $em->commit();
        return new Response();
    }
}