<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class MarkTipsAsUnreadAction
{
    use ActionUtilTrait;

    /**
     * @var EntityManager
     */
    private $entityManager;

    /**
     * @var UserService
     */
    private $userService;

    public function __construct(EntityManager $entityManager, UserService $userService)
    {
        $this->entityManager = $entityManager;
        $this->userService = $userService;
    }

    /**
     * Marks all tips as unread.
     *
     * @param Request $request The request
     *
     * @throws RuntimeException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request)
    {
        $dql = "DELETE FROM PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory th WHERE th.user = :user";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $this->userService->getUser());
        $query->execute();

        return new Response('OK');
    }
}
