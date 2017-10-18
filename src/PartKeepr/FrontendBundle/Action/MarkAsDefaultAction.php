<?php

namespace PartKeepr\FrontendBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use Dunglas\ApiBundle\Model\DataProviderInterface;
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
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
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
