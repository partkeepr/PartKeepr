<?php

namespace PartKeepr\PartBundle\Action;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Services\PartService;
use Symfony\Component\HttpFoundation\Request;

/**
 * Default API action retrieving a collection of resources.
 *
 * @author Kévin Dunglas <dunglas@gmail.com>
 */
class GetPartsAction
{
    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var EntityManager
     */
    private $em;

    /**
     * @var PartService
     */
    private $partService;

    public function __construct(DataProviderInterface $dataProvider, EntityManager $em, PartService $partService)
    {
        $this->dataProvider = $dataProvider;
        $this->em = $em;
        $this->partService = $partService;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws RuntimeException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request)
    {
        list($resourceType) = $this->extractAttributes($request);

        $items = $this->dataProvider->getCollection($resourceType);

        /**
         * @var Part
         */
        foreach ($items as $part) {
            if ($part->isMetaPart()) {
                $sum = 0;

                $parts = $this->partService->getMatchingMetaParts($part);

                foreach ($parts as $matchingPart) {
                    /**
                     * @var Part
                     */
                    $sum += $matchingPart->getStockLevel();
                }

                $part->setStockLevel($sum);
            }
        }

        return $items;
    }
}
