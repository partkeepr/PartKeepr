<?php

namespace PartKeepr\BatchJobBundle\Action;

use ApiPlatform\Core\Api\IriConverterInterface;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\QueryBuilder;
use PartKeepr\BatchJobBundle\Entity\BatchJob;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\Routing\Annotation\Route;

class ExecuteBatchJobAction
{
    /**
     * @var EntityManager
     */
    private $em;

    /**
     * @var IriConverterInterface
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
        ItemDataProviderInterface $dataProvider,
        IriConverterInterface $iriConverter,
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
     * @param BatchJob $data
     * @param Request $request
     *
     * @throws RootNodeNotFoundException
     * @Route(
     *     name="batch_job_execute",
     *     path="/batch_jobs/{id}/execute",
     *     defaults={"_api_resource_class"=BatchJob::class, "_api_item_operation_name"="execute"}
     * )
     * @return array
     */
    public function __invoke($data, Request $request)
    {
        $batchJob = $data;

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
