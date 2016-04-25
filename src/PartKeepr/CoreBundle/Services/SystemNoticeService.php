<?php

namespace PartKeepr\CoreBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\CoreBundle\Entity\SystemNotice;
use Symfony\Component\DependencyInjection\ContainerAware;

class SystemNoticeService extends ContainerAware
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function createUniqueSystemNotice($type, $title, $description)
    {
        $dql = "SELECT sn FROM PartKeepr\CoreBundle\Entity\SystemNotice sn WHERE sn.type = :type";
        $query = $this->entityManager->createQuery($dql);

        $query->setParameter('type', $type);

        try {
            $notice = $query->getSingleResult();
        } catch (\Exception $e) {
            $notice = new SystemNotice();
            $this->entityManager->persist($notice);
        }

        $notice->setDate(new \DateTime());
        $notice->setTitle($title);
        $notice->setDescription($description);
        $notice->setType($type);

        $this->entityManager->flush();

        return $notice;
    }
}
