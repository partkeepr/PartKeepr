<?php

namespace PartKeepr\FrontendBundle\Action;

//use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Util\RequestAttributesExtractor;

use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\FrontendBundle\Entity\GridPreset;
use PartKeepr\FrontendBundle\Services\GridPresetService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class MarkAsDefaultAction
{
//    use ActionUtilTrait;

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var GridPresetService
     */
    private $gridPresetService;

    public function __construct(
        DataProviderInterface $dataProvider,
        GridPresetService $gridPresetService
    ) {
        $this->dataProvider = $dataProvider;
        $this->gridPresetService = $gridPresetService;
    }

    /**
     * Sets the default flag for a grid preset.
     *
     * @param Request $request The request
     * @param int     $id      The ID of the grid preset
     *
     * @throws RuntimeException
     *
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    /**
     * @Route(
     *     name="MarkGridPresetAsDefault",
     *     path="/grid_presets/{id}/markAsDefault",
     *     defaults={"_api_resource_class"=GridPreset::class, "_api_item_operation_name"="markAsDefault"},
     *     methods={"PUT"}
     * )
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = RequestAttributesExtractor::extractAttributes($request);

        /**
         * @var GridPreset
         */
        $gp = $this->getItem($this->dataProvider, $resourceType, $id);

        $this->gridPresetService->markGridPresetAsDefault($gp);

        return $gp;
    }
}
