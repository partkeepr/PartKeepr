<?php

namespace PartKeepr\CoreBundle\Action;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\CoreBundle\Entity\SystemNotice;
use Symfony\Component\HttpFoundation\Request;

class SystemNoticeAcknowledgeAction
{
    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(
        DataProviderInterface $dataProvider,
        EntityManager $entityManager
    ) {
        $this->dataProvider = $dataProvider;
        $this->entityManager = $entityManager;
    }

    /**
     * Sets the acknowledged flag for a system notice.
     *
     * @param Request $request The request
     * @param int     $id      The ID of the system notice
     *
     * @throws RuntimeException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        $systemNotice = $this->getItem($this->dataProvider, $resourceType, $id);

        /*
         * @var $systemNotice SystemNotice
         */
        $systemNotice->setAcknowledged();

        $this->entityManager->flush();

        return $systemNotice;
    }
}
