<?php

namespace PartKeepr\CoreBundle\Action;

use Doctrine\ORM\EntityManager;
use PartKeepr\CoreBundle\Entity\SystemNotice;
use PartKeepr\CoreBundle\Services\SystemNoticeService;
use Symfony\Component\HttpFoundation\Request;

class SystemNoticeAcknowledgeAction
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var SystemNoticeService
     */
    private $systemNoticeService;


    public function __construct(
        EntityManager $entityManager,
        SystemNoticeService $systemNoticeService
    ) {
        $this->entityManager = $entityManager;
        $this->systemNoticeService = $systemNoticeService;
    }

    /**
     * Sets the acknowledged flag for a system notice.
     *
     */
    public function __invoke($data)
    {
        $this->systemNoticeService->acknowledge($data);
        return $data;
    }
}
