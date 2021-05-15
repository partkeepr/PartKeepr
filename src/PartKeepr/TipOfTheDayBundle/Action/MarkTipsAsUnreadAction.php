<?php

namespace PartKeepr\TipOfTheDayBundle\Action;

use Doctrine\ORM\EntityManager;
use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Exception\RuntimeException;
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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.tip_of_the_day.mark_all_unread"         # Controller
    /**
     * @Route(
     *     name="TipMarkAllUnrad",
     *     path="/tip_of_the_days/markAllTipsAsUnread",
     *     defaults={"_api_resource_class"=TipOfTheDay, "_api_collection_operation_name"="mark_all_unread"}
     * )
     * @Method("POST")
     **/
    public function __invoke(Request $request)
    {
        $dql = "DELETE FROM PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory th WHERE th.user = :user";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $this->userService->getUser());
        $query->execute();

        return new Response('OK');
    }
}
