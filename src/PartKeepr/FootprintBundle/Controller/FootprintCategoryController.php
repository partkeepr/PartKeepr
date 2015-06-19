<?php
namespace PartKeepr\FootprintBundle\Controller;


use DoctrineExtensions\NestedSet\Config;
use FOS\RestBundle\Controller\FOSRestController;
use Symfony\Component\Routing\Annotation\Route;

class FootprintCategoryController extends FOSRestController
{
    /**
     * @Route("/FootprintCategory/getAll", defaults={"method" = "get","_format" = "json"})
     */
    public function getAllAction()
    {
        $repository = $this->get("doctrine")->getEntityManager()->getRepository('PartKeepr\FootprintBundle\Entity\FootprintCategory');

        var_dump($repository->verify());
        $repository->recover();
        $this->get("doctrine")->getEntityManager()->flush();
        return $repository->childrenHierarchy();
    }
}