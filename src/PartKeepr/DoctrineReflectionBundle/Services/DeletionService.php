<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/25/17
 * Time: 5:38 PM.
 */

namespace PartKeepr\DoctrineReflectionBundle\Services;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\ClassMetadata;

class DeletionService
{
    /**
     * @var EntityManager
     */
    private $em;

    public function __construct(EntityManager $entityManager)
    {
        $this->em = $entityManager;
    }

    public function findUndeletableUsages($entity)
    {
        $realClassName = $this->em->getClassMetadata(get_class($entity))->name;

        $meta = $this->em->getMetadataFactory()->getAllMetadata();
        $sourceEntityMetaData = $this->getAllMetadataInfoFor($realClassName);

        $usedIn = [];

        foreach ($meta as $foo) {
            /* @var ClassMetadata $foo */
            foreach ($foo->getAssociationMappings() as $associationMapping) {
                if ($associationMapping["targetEntity"] === $realClassName && $associationMapping["isOwningSide"]) {

                    //var_dump($associationMapping->
                    if ($associationMapping["inversedBy"] !== null) {
                        $inverseAssociationMapping = $sourceEntityMetaData->getAssociationMapping($associationMapping["inversedBy"]);

                        if ($inverseAssociationMapping["isCascadeRemove"]) {
                            continue;
                        }
                    }

                    $qb = $this->em->createQueryBuilder();
                    $qb->select("q")->from($associationMapping["sourceEntity"], "q")->where(
                        $qb->expr()->eq("q.".$associationMapping["fieldName"], ":query")
                    );

                    $qb->setParameter(":query", $entity);

                    foreach ($qb->getQuery()->getResult() as $result) {
                        $usedIn[] = (string) $result;
                    }
                }
            }
        }

        return $usedIn;
    }

    /**
     * @param $className
     *
     * @return ClassMetadata|null
     */
    protected function getAllMetadataInfoFor($className)
    {
        $data = $this->em->getMetadataFactory()->getAllMetadata();

        foreach ($data as $info) {
            /**
             * @var ClassMetadata $info
             */
            if ($info->getName() == $className) {
                return $info;
            }
        }

        return null;
    }
}
