<?php

namespace PartKeepr\FrontendBundle\Action;

use ApiPlatform\Core\Action\ActionUtilTrait;
use ApiPlatform\Core\Exception\RuntimeException;
use ApiPlatform\Core\Model\DataProviderInterface;
use PartKeepr\FrontendBundle\Entity\GridPreset;
use PartKeepr\FrontendBundle\Services\GridPresetService;
use Symfony\Component\HttpFoundation\Request;

class MarkAsDefaultAction
{
    use ActionUtilTrait;

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
    // ToDo: fix this - move this Route annotation to the correct place
    // "partkeepr.grid_preset.mark_as_default"         # Controller
    /**
     * @Route(
     *     name="MarkGridPresetAsDefault",
     *     path="/grid_presets/{id}/markAsDefault",
     *     defaults={"_api_resource_class"=GridPreset::class, "_api_item_operation_name"="markAsDefault"}
     * )
     * @Method("PUT")
     **/
    public function __invoke(Request $request, $id)
    {
        list($resourceType) = $this->extractAttributes($request);

        /**
         * @var GridPreset
         */
        $gp = $this->getItem($this->dataProvider, $resourceType, $id);

        $this->gridPresetService->markGridPresetAsDefault($gp);

        return $gp;
    }
}
