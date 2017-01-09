<?php
namespace PartKeepr\PartBundle\Action;

use Doctrine\ORM\EntityManager;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\PartBundle\Entity\Part;
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

    public function __construct(DataProviderInterface $dataProvider, EntityManager $em)
    {
        $this->dataProvider = $dataProvider;
        $this->em = $em;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     *
     * @throws RuntimeException
     */
    public function __invoke(Request $request)
    {
        list($resourceType) = $this->extractAttributes($request);

        $items = $this->dataProvider->getCollection($resourceType);

        /**
         * @var $part Part
         */
        foreach ($items as $part) {
            if ($part->isMetaPart()) {
                //$part->setStockLevel(-1);
            }
        }
        return $items;
    }
}
