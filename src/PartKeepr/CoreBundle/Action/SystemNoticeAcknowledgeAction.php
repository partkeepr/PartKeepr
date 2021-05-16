<?php

namespace PartKeepr\CoreBundle\Action;

use Doctrine\ORM\EntityManager;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\CoreBundle\Entity\SystemNotice;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SystemNoticeAcknowledgeAction
{
//    use ActionUtilTrait;

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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    
    /**
     * @Route(
     *     name="SystemNoticeAcknowledge",
     *     path="/system_notices/{id}/acknowledge",
     *     defaults={"_api_resource_class"=SystemNotice::class, "_api_item_operation_name"="acknowledge"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        $systemNotice = $this->getItem($this->dataProvider, $resourceType, $id);

        /*
         * @var $systemNotice SystemNotice
         */
        $systemNotice->setAcknowledged();

        $this->entityManager->flush();

        return $systemNotice;
    }
}
