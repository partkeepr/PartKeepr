<?php

namespace PartKeepr\SystemPreferenceBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Exception\RuntimeException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\SystemPreferenceBundle\Service\SystemPreferenceService;
use Symfony\Component\HttpFoundation\Request;

/**
 * Returns the tree root node.
 */
class DeletePreferenceAction
{
    use ActionUtilTrait;

    /**
     * @var SystemPreferenceService
     */
    private $systemPreferenceService;

    public function __construct(
        SystemPreferenceService $systemPreferenceService
    ) {
        $this->systemPreferenceService = $systemPreferenceService;
    }

    /**
     * Retrieves a collection of resources.
     *
     * @param Request $request
     *
     * @throws \Exception                                 If the format is invalid
     * @throws RuntimeException|RootNodeNotFoundException
     *
     * @return array|\Dunglas\ApiBundle\Model\PaginatorInterface|\Traversable
     */
    public function __invoke(Request $request)
    {
        if ($request->request->has('preferenceKey')) {
            $this->systemPreferenceService->deletePreference($request->request->get('preferenceKey'));
        } else {
            throw new \Exception('Invalid format');
        }
    }
}
