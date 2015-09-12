<?php
/*
 * This file is part of the DunglasApiBundle package.
 *
 * (c) Kévin Dunglas <dunglas@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace Dunglas\ApiBundle\Action;
use Dunglas\ApiBundle\Api\ResourceInterface;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use Gedmo\Tree\Entity\Repository\AbstractTreeRepository;
use Symfony\Bridge\Doctrine\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
/**
 * Default API action retrieving a collection of resources.
 *
 * @author Kévin Dunglas <dunglas@gmail.com>
 */
class GetRootNodeAction
{
    use ActionUtilTrait;
    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var ManagerRegistry
     */
    private $manager;

    public function __construct(DataProviderInterface $dataProvider, ManagerRegistry $manager)
    {
        $this->dataProvider = $dataProvider;
        $this->manager = $manager;
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
        //return $this->dataProvider->getCollection($resourceType);

        /**
         * @var ResourceInterface $resourceType
         */
        $repository = $this->manager->getRepository($resourceType->getEntityClass());

        /**
         * @var $repository AbstractTreeRepository
         */
        $rootNode = $repository->getRootNodes()[0];

        return $rootNode;
        /*$data = $this->get('serializer')->normalize(
            $rootNode,
            'json-ld',
            $resource->getNormalizationContext()
        );

        $responseData = array("children" => $data);

        return new JsonResponse(
            $responseData
        );*/
    }
}