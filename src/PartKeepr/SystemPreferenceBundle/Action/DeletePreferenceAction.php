<?php

namespace PartKeepr\SystemPreferenceBundle\Action;

// use ApiPlatform\Core\Action\ActionUtilTrait;

use ApiPlatform\Core\Exception\RuntimeException;
use PartKeepr\CategoryBundle\Exception\RootNodeNotFoundException;
use PartKeepr\SystemPreferenceBundle\Service\SystemPreferenceService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Returns the tree root node.
 */
class DeletePreferenceAction
{
//    use ActionUtilTrait;

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
     * @return array|\ApiPlatform\Core\Model\PaginatorInterface|\Traversable
     */
    
    /**
     * @Route(
     *     name="PartKeeprSystemPreferenceDelete",
     *     path="/system_preferences",
     *     defaults={"_api_resource_class"=SystemPreference::class, "_api_item_operation_name"="delete_preference"},
     *     methods={"DELETE"}
     * )
     **/
    
    public function __invoke(Request $request)
    {
        if ($request->request->has('preferenceKey')) {
            $this->systemPreferenceService->deletePreference($request->request->get('preferenceKey'));
        } else {
            throw new \Exception('Invalid format');
        }
    }
}
