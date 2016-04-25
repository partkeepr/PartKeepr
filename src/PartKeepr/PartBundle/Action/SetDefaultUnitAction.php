<?php

namespace PartKeepr\PartBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use PartKeepr\PartBundle\Services\PartMeasurementUnitService;
use Symfony\Component\HttpFoundation\Request;

class SetDefaultUnitAction
{
    use ActionUtilTrait;

    /**
     * @var PartMeasurementUnitService
     */
    private $partMeasurementUnitService;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    public function __construct(DataProviderInterface $dataProvider, PartMeasurementUnitService $partMeasurementUnitService)
    {
        $this->dataProvider = $dataProvider;
        $this->partMeasurementUnitService = $partMeasurementUnitService;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request The request
     * @param int     $id      The ID of the part
     *
     * @throws RuntimeException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        /**
         * @var PartMeasurementUnit
         */
        $partMeasurementUnit = $this->getItem($this->dataProvider, $resourceType, $id);

        $this->partMeasurementUnitService->setDefault($partMeasurementUnit);

        return $partMeasurementUnit;
    }
}
