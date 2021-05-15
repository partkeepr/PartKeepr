<?php

namespace PartKeepr\PartBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\Model\DataProviderInterface;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use PartKeepr\PartBundle\Services\PartMeasurementUnitService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SetDefaultUnitAction
{
//    use ActionUtilTrait;

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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="PartMeasurementUnitSetDefault",
     *     path="/part_measurement_units/{id}/setDefault",
     *     defaults={"_api_resource_class"=PartMeasurementUnit::class, "_api_item_operation_name"="custom_put"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        /**
         * @var PartMeasurementUnit
         */
        $partMeasurementUnit = $this->getItem($this->dataProvider, $resourceType, $id);

        $this->partMeasurementUnitService->setDefault($partMeasurementUnit);

        return $partMeasurementUnit;
    }
}
