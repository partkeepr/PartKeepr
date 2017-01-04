<?php

namespace PartKeepr\BatchJobBundle\Action;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\QueryBuilder;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\IriConverter;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\BatchJobBundle\Entity\BatchJob;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;

class ExecuteBatchJobAction
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
     * @var IriConverter
     */
    private $iriConverter;

    /**
     * @var AdvancedSearchFilter
     */
    private $advancedSearchFilter;

    /**
     * @var ReflectionService
     */
    private $reflectionService;

    public function __construct(
        DataProviderInterface $dataProvider,
        IriConverter $iriConverter,
        EntityManager $em,
        AdvancedSearchFilter $advancedSearchFilter,
        ReflectionService $reflectionService
    ) {
        $this->dataProvider = $dataProvider;
        $this->iriConverter = $iriConverter;
        $this->em = $em;
        $this->advancedSearchFilter = $advancedSearchFilter;
        $this->reflectionService = $reflectionService;
    }

    /**
     * Executes a batch action.
     *
     * @param Request $request
     * @param string  $id
     *
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        /**
         * @var BatchJob
         */
        $batchJob = $this->getItem($this->dataProvider, $resourceType, $id);

        $queryFields = [];
        $updateFields = [];

        if ($request->request->has("queryFields")) {
            $queryFields = json_decode($request->request->get("queryFields"), true);
        }

        if ($request->request->has("updateFields")) {
            $updateFields = json_decode($request->request->get("updateFields"), true);
        }

        $queryFilters = [];

        foreach ($batchJob->getBatchJobQueryFields() as $batchJobQueryField) {
            $queryFilter = new \stdClass();
            $queryFilter->property = $batchJobQueryField->getProperty();
            $queryFilter->operator = $batchJobQueryField->getOperator();
            $queryFilter->value = $batchJobQueryField->getValue();

            if ($batchJobQueryField->getDynamic()) {
                foreach ($queryFields as $queryField) {
                    if ($queryField["property"] == $batchJobQueryField->getProperty()) {
                        $queryFilter->value = $queryField["value"];
                    }
                }
            }

            $queryFilters[] = $queryFilter;
        }

        $updateFieldConfigs = [];

        foreach ($batchJob->getBatchJobUpdateFields() as $batchJobUpdateField) {
            $updateFieldConfig = new \stdClass();
            $updateFieldConfig->property = $batchJobUpdateField->getProperty();
            $updateFieldConfig->value = $batchJobUpdateField->getValue();

            if ($batchJobUpdateField->getDynamic()) {
                foreach ($updateFields as $updateField) {
                    if ($updateField["property"] == $batchJobUpdateField->getProperty()) {
                        $updateFieldConfig->value = $updateField["value"];
                    }
                }
            }

            $updateFieldConfigs[] = $updateFieldConfig;
        }

        $configuration = $this->advancedSearchFilter->extractConfiguration($queryFilters, []);

        $qb = new QueryBuilder($this->em);
        $qb->select("o")->from($this->reflectionService->convertExtJSToPHPClassName($batchJob->getBaseEntity()), "o");

        $this->advancedSearchFilter->filter($qb, $configuration['filters'], $configuration['sorters']);

        $data = $qb->getQuery()->getResult();

        $accessor = PropertyAccess::createPropertyAccessor();

        foreach ($data as $item) {
            foreach ($updateFieldConfigs as $updateField) {
                try {
                    $value = $this->iriConverter->getItemFromIri($updateField->value);
                } catch (\Exception $e) {
                    $value = $updateField->value;
                }

                $accessor->setValue($item, $updateField->property, $value);
            }
        }

        $this->em->flush();

        return [];
    }
}
