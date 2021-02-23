<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appProdProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($rawPathinfo)
    {
        $allow = [];
        $pathinfo = rawurldecode($rawPathinfo);
        $trimmedPathinfo = rtrim($pathinfo, '/');
        $context = $this->context;
        $request = $this->request ?: $this->createRequest($pathinfo);
        $requestMethod = $canonicalMethod = $context->getMethod();

        if ('HEAD' === $requestMethod) {
            $canonicalMethod = 'GET';
        }

        if (0 === strpos($pathinfo, '/api')) {
            // partkeepr_cronlogger_cronrunner_runcrons
            if ('/api/cron/run' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\CronLoggerBundle\\Controller\\CronRunnerController::runCronsAction',  '_route' => 'partkeepr_cronlogger_cronrunner_runcrons',);
            }

            if (0 === strpos($pathinfo, '/api/parts')) {
                // partkeepr_part_part_massremovestock
                if ('/api/parts/massRemoveStock' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::massRemoveStockAction',  '_route' => 'partkeepr_part_part_massremovestock',);
                }

                // partkeepr_part_part_getparameternames
                if ('/api/parts/getPartParameterNames' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::getParameterNamesAction',  '_route' => 'partkeepr_part_part_getparameternames',);
                }

                // partkeepr_part_part_getparametervalues
                if ('/api/parts/getPartParameterValues' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::getParameterValuesAction',  '_route' => 'partkeepr_part_part_getparametervalues',);
                }

            }

            // partkeepr_export_export_export
            if ('/api/export' === $pathinfo) {
                return array (  'method' => 'post',  '_format' => 'json',  '_controller' => 'PartKeepr\\ExportBundle\\Controller\\ExportController::exportAction',  '_route' => 'partkeepr_export_export_export',);
            }

            // api_entrypoint
            if (preg_match('#^/api(?:/(?P<index>index)(?:\\.(?P<_format>[^/]++))?)?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'api_entrypoint']), array (  '_controller' => 'api_platform.action.entrypoint',  '_format' => '',  '_api_respond' => '1',  'index' => 'index',));
            }

            // api_doc
            if (0 === strpos($pathinfo, '/api/docs') && preg_match('#^/api/docs(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'api_doc']), array (  '_controller' => 'api_platform.action.documentation',  '_api_respond' => '1',  '_format' => '',));
            }

            if (0 === strpos($pathinfo, '/api/distributors')) {
                // api_distributors_get_collection
                if (preg_match('#^/api/distributors(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_distributors_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\DistributorBundle\\Entity\\Distributor',  '_api_collection_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_distributors_get_collection;
                    }

                    return $ret;
                }
                not_api_distributors_get_collection:

                // api_distributors_post_collection
                if (preg_match('#^/api/distributors(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_distributors_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\DistributorBundle\\Entity\\Distributor',  '_api_collection_operation_name' => 'post',));
                    if (!in_array($requestMethod, ['POST'])) {
                        $allow = array_merge($allow, ['POST']);
                        goto not_api_distributors_post_collection;
                    }

                    return $ret;
                }
                not_api_distributors_post_collection:

                // api_distributors_get_item
                if (preg_match('#^/api/distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_distributors_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\DistributorBundle\\Entity\\Distributor',  '_api_item_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_distributors_get_item;
                    }

                    return $ret;
                }
                not_api_distributors_get_item:

                // api_distributors_put_item
                if (preg_match('#^/api/distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_distributors_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\DistributorBundle\\Entity\\Distributor',  '_api_item_operation_name' => 'put',));
                    if (!in_array($requestMethod, ['PUT'])) {
                        $allow = array_merge($allow, ['PUT']);
                        goto not_api_distributors_put_item;
                    }

                    return $ret;
                }
                not_api_distributors_put_item:

                // api_distributors_delete_item
                if (preg_match('#^/api/distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_distributors_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\DistributorBundle\\Entity\\Distributor',  '_api_item_operation_name' => 'delete',));
                    if (!in_array($requestMethod, ['DELETE'])) {
                        $allow = array_merge($allow, ['DELETE']);
                        goto not_api_distributors_delete_item;
                    }

                    return $ret;
                }
                not_api_distributors_delete_item:

            }

            // api_jsonld_context
            if (0 === strpos($pathinfo, '/api/contexts') && preg_match('#^/api/contexts/(?P<shortName>.+)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, ['_route' => 'api_jsonld_context']), array (  '_controller' => 'api_platform.jsonld.action.context',  '_api_respond' => '1',  '_format' => 'jsonld',));
            }

            if (0 === strpos($pathinfo, '/api/t')) {
                if (0 === strpos($pathinfo, '/api/temp_uploaded_files')) {
                    // api_temp_uploaded_files_get_collection
                    if (preg_match('#^/api/temp_uploaded_files(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_uploaded_files_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_temp_uploaded_files_get_collection;
                        }

                        return $ret;
                    }
                    not_api_temp_uploaded_files_get_collection:

                    // api_temp_uploaded_files_post_collection
                    if (preg_match('#^/api/temp_uploaded_files(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_uploaded_files_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_temp_uploaded_files_post_collection;
                        }

                        return $ret;
                    }
                    not_api_temp_uploaded_files_post_collection:

                    // api_temp_uploaded_files_get_item
                    if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_uploaded_files_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_temp_uploaded_files_get_item;
                        }

                        return $ret;
                    }
                    not_api_temp_uploaded_files_get_item:

                    // api_temp_uploaded_files_put_item
                    if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_uploaded_files_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_temp_uploaded_files_put_item;
                        }

                        return $ret;
                    }
                    not_api_temp_uploaded_files_put_item:

                    // api_temp_uploaded_files_delete_item
                    if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_uploaded_files_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UploadedFileBundle\\Entity\\TempUploadedFile',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_temp_uploaded_files_delete_item;
                        }

                        return $ret;
                    }
                    not_api_temp_uploaded_files_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/temp_images')) {
                    // api_temp_images_get_collection
                    if (preg_match('#^/api/temp_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_images_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImageBundle\\Entity\\TempImage',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_temp_images_get_collection;
                        }

                        return $ret;
                    }
                    not_api_temp_images_get_collection:

                    // api_temp_images_post_collection
                    if (preg_match('#^/api/temp_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_images_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImageBundle\\Entity\\TempImage',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_temp_images_post_collection;
                        }

                        return $ret;
                    }
                    not_api_temp_images_post_collection:

                    // api_temp_images_get_item
                    if (preg_match('#^/api/temp_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_temp_images_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImageBundle\\Entity\\TempImage',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_temp_images_get_item;
                        }

                        return $ret;
                    }
                    not_api_temp_images_get_item:

                }

                elseif (0 === strpos($pathinfo, '/api/tip_of_the_days')) {
                    // api_tip_of_the_days_get_collection
                    if (preg_match('#^/api/tip_of_the_days(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_days_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDay',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_tip_of_the_days_get_collection;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_days_get_collection:

                    // api_tip_of_the_days_post_collection
                    if (preg_match('#^/api/tip_of_the_days(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_days_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDay',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_tip_of_the_days_post_collection;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_days_post_collection:

                    // api_tip_of_the_days_get_item
                    if (preg_match('#^/api/tip_of_the_days/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_days_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDay',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_tip_of_the_days_get_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_days_get_item:

                    // api_tip_of_the_days_put_item
                    if (preg_match('#^/api/tip_of_the_days/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_days_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDay',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_tip_of_the_days_put_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_days_put_item:

                    // api_tip_of_the_days_delete_item
                    if (preg_match('#^/api/tip_of_the_days/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_days_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDay',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_tip_of_the_days_delete_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_days_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/tip_of_the_day_histories')) {
                    // api_tip_of_the_day_histories_get_collection
                    if (preg_match('#^/api/tip_of_the_day_histories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_day_histories_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDayHistory',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_tip_of_the_day_histories_get_collection;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_day_histories_get_collection:

                    // api_tip_of_the_day_histories_post_collection
                    if (preg_match('#^/api/tip_of_the_day_histories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_day_histories_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDayHistory',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_tip_of_the_day_histories_post_collection;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_day_histories_post_collection:

                    // api_tip_of_the_day_histories_get_item
                    if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_day_histories_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDayHistory',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_tip_of_the_day_histories_get_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_day_histories_get_item:

                    // api_tip_of_the_day_histories_put_item
                    if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_day_histories_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDayHistory',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_tip_of_the_day_histories_put_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_day_histories_put_item:

                    // api_tip_of_the_day_histories_delete_item
                    if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_tip_of_the_day_histories_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\TipOfTheDayBundle\\Entity\\TipOfTheDayHistory',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_tip_of_the_day_histories_delete_item;
                        }

                        return $ret;
                    }
                    not_api_tip_of_the_day_histories_delete_item:

                }

            }

            elseif (0 === strpos($pathinfo, '/api/grid_presets')) {
                // api_grid_presets_get_collection
                if (preg_match('#^/api/grid_presets(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_grid_presets_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FrontendBundle\\Entity\\GridPreset',  '_api_collection_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_grid_presets_get_collection;
                    }

                    return $ret;
                }
                not_api_grid_presets_get_collection:

                // api_grid_presets_post_collection
                if (preg_match('#^/api/grid_presets(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_grid_presets_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FrontendBundle\\Entity\\GridPreset',  '_api_collection_operation_name' => 'post',));
                    if (!in_array($requestMethod, ['POST'])) {
                        $allow = array_merge($allow, ['POST']);
                        goto not_api_grid_presets_post_collection;
                    }

                    return $ret;
                }
                not_api_grid_presets_post_collection:

                // api_grid_presets_get_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_grid_presets_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FrontendBundle\\Entity\\GridPreset',  '_api_item_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_grid_presets_get_item;
                    }

                    return $ret;
                }
                not_api_grid_presets_get_item:

                // api_grid_presets_put_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_grid_presets_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FrontendBundle\\Entity\\GridPreset',  '_api_item_operation_name' => 'put',));
                    if (!in_array($requestMethod, ['PUT'])) {
                        $allow = array_merge($allow, ['PUT']);
                        goto not_api_grid_presets_put_item;
                    }

                    return $ret;
                }
                not_api_grid_presets_put_item:

                // api_grid_presets_delete_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_grid_presets_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FrontendBundle\\Entity\\GridPreset',  '_api_item_operation_name' => 'delete',));
                    if (!in_array($requestMethod, ['DELETE'])) {
                        $allow = array_merge($allow, ['DELETE']);
                        goto not_api_grid_presets_delete_item;
                    }

                    return $ret;
                }
                not_api_grid_presets_delete_item:

            }

            elseif (0 === strpos($pathinfo, '/api/s')) {
                if (0 === strpos($pathinfo, '/api/si_prefixes')) {
                    // api_si_prefixes_get_collection
                    if (preg_match('#^/api/si_prefixes(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_si_prefixes_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_si_prefixes_get_collection;
                        }

                        return $ret;
                    }
                    not_api_si_prefixes_get_collection:

                    // api_si_prefixes_post_collection
                    if (preg_match('#^/api/si_prefixes(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_si_prefixes_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_si_prefixes_post_collection;
                        }

                        return $ret;
                    }
                    not_api_si_prefixes_post_collection:

                    // api_si_prefixes_get_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_si_prefixes_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_si_prefixes_get_item;
                        }

                        return $ret;
                    }
                    not_api_si_prefixes_get_item:

                    // api_si_prefixes_put_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_si_prefixes_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_si_prefixes_put_item;
                        }

                        return $ret;
                    }
                    not_api_si_prefixes_put_item:

                    // api_si_prefixes_delete_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_si_prefixes_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SiPrefixBundle\\Entity\\SiPrefix',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_si_prefixes_delete_item;
                        }

                        return $ret;
                    }
                    not_api_si_prefixes_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/system_notices')) {
                    // api_system_notices_get_collection
                    if (preg_match('#^/api/system_notices(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_notices_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\CoreBundle\\Entity\\SystemNotice',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_system_notices_get_collection;
                        }

                        return $ret;
                    }
                    not_api_system_notices_get_collection:

                    // api_system_notices_post_collection
                    if (preg_match('#^/api/system_notices(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_notices_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\CoreBundle\\Entity\\SystemNotice',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_system_notices_post_collection;
                        }

                        return $ret;
                    }
                    not_api_system_notices_post_collection:

                    // api_system_notices_get_item
                    if (preg_match('#^/api/system_notices/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_notices_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\CoreBundle\\Entity\\SystemNotice',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_system_notices_get_item;
                        }

                        return $ret;
                    }
                    not_api_system_notices_get_item:

                    // api_system_notices_put_item
                    if (preg_match('#^/api/system_notices/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_notices_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\CoreBundle\\Entity\\SystemNotice',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_system_notices_put_item;
                        }

                        return $ret;
                    }
                    not_api_system_notices_put_item:

                    // api_system_notices_delete_item
                    if (preg_match('#^/api/system_notices/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_notices_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\CoreBundle\\Entity\\SystemNotice',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_system_notices_delete_item;
                        }

                        return $ret;
                    }
                    not_api_system_notices_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/system_preferences')) {
                    // api_system_preferences_get_collection
                    if (preg_match('#^/api/system_preferences(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_preferences_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SystemPreferenceBundle\\Entity\\SystemPreference',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_system_preferences_get_collection;
                        }

                        return $ret;
                    }
                    not_api_system_preferences_get_collection:

                    // api_system_preferences_post_collection
                    if (preg_match('#^/api/system_preferences(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_preferences_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SystemPreferenceBundle\\Entity\\SystemPreference',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_system_preferences_post_collection;
                        }

                        return $ret;
                    }
                    not_api_system_preferences_post_collection:

                    // api_system_preferences_get_item
                    if (preg_match('#^/api/system_preferences/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_preferences_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SystemPreferenceBundle\\Entity\\SystemPreference',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_system_preferences_get_item;
                        }

                        return $ret;
                    }
                    not_api_system_preferences_get_item:

                    // api_system_preferences_put_item
                    if (preg_match('#^/api/system_preferences/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_preferences_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SystemPreferenceBundle\\Entity\\SystemPreference',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_system_preferences_put_item;
                        }

                        return $ret;
                    }
                    not_api_system_preferences_put_item:

                    // api_system_preferences_delete_item
                    if (preg_match('#^/api/system_preferences/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_system_preferences_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\SystemPreferenceBundle\\Entity\\SystemPreference',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_system_preferences_delete_item;
                        }

                        return $ret;
                    }
                    not_api_system_preferences_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/stock_entries')) {
                    // api_stock_entries_get_collection
                    if (preg_match('#^/api/stock_entries(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_stock_entries_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StockBundle\\Entity\\StockEntry',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_stock_entries_get_collection;
                        }

                        return $ret;
                    }
                    not_api_stock_entries_get_collection:

                    // api_stock_entries_post_collection
                    if (preg_match('#^/api/stock_entries(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_stock_entries_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StockBundle\\Entity\\StockEntry',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_stock_entries_post_collection;
                        }

                        return $ret;
                    }
                    not_api_stock_entries_post_collection:

                    // api_stock_entries_get_item
                    if (preg_match('#^/api/stock_entries/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_stock_entries_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StockBundle\\Entity\\StockEntry',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_stock_entries_get_item;
                        }

                        return $ret;
                    }
                    not_api_stock_entries_get_item:

                    // api_stock_entries_put_item
                    if (preg_match('#^/api/stock_entries/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_stock_entries_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StockBundle\\Entity\\StockEntry',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_stock_entries_put_item;
                        }

                        return $ret;
                    }
                    not_api_stock_entries_put_item:

                    // api_stock_entries_delete_item
                    if (preg_match('#^/api/stock_entries/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_stock_entries_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StockBundle\\Entity\\StockEntry',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_stock_entries_delete_item;
                        }

                        return $ret;
                    }
                    not_api_stock_entries_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/storage_location')) {
                    if (0 === strpos($pathinfo, '/api/storage_locations')) {
                        // api_storage_locations_get_collection
                        if (preg_match('#^/api/storage_locations(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_locations_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocation',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_locations_get_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_locations_get_collection:

                        // api_storage_locations_post_collection
                        if (preg_match('#^/api/storage_locations(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_locations_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocation',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_storage_locations_post_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_locations_post_collection:

                        // api_storage_locations_get_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_locations_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocation',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_locations_get_item;
                            }

                            return $ret;
                        }
                        not_api_storage_locations_get_item:

                        // api_storage_locations_put_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_locations_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocation',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_storage_locations_put_item;
                            }

                            return $ret;
                        }
                        not_api_storage_locations_put_item:

                        // api_storage_locations_delete_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_locations_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocation',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_storage_locations_delete_item;
                            }

                            return $ret;
                        }
                        not_api_storage_locations_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/storage_location_categories')) {
                        // api_storage_location_categories_get_collection
                        if (preg_match('#^/api/storage_location_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_categories_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationCategory',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_location_categories_get_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_location_categories_get_collection:

                        // api_storage_location_categories_post_collection
                        if (preg_match('#^/api/storage_location_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_categories_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationCategory',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_storage_location_categories_post_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_location_categories_post_collection:

                        // api_storage_location_categories_get_item
                        if (preg_match('#^/api/storage_location_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_categories_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationCategory',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_location_categories_get_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_categories_get_item:

                        // api_storage_location_categories_put_item
                        if (preg_match('#^/api/storage_location_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_categories_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationCategory',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_storage_location_categories_put_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_categories_put_item:

                        // api_storage_location_categories_delete_item
                        if (preg_match('#^/api/storage_location_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_categories_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationCategory',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_storage_location_categories_delete_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_categories_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/storage_location_images')) {
                        // api_storage_location_images_get_collection
                        if (preg_match('#^/api/storage_location_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_images_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_location_images_get_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_location_images_get_collection:

                        // api_storage_location_images_post_collection
                        if (preg_match('#^/api/storage_location_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_images_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_storage_location_images_post_collection;
                            }

                            return $ret;
                        }
                        not_api_storage_location_images_post_collection:

                        // api_storage_location_images_get_item
                        if (preg_match('#^/api/storage_location_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_images_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_storage_location_images_get_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_images_get_item:

                        // api_storage_location_images_put_item
                        if (preg_match('#^/api/storage_location_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_images_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_storage_location_images_put_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_images_put_item:

                        // api_storage_location_images_delete_item
                        if (preg_match('#^/api/storage_location_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_storage_location_images_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\StorageLocationBundle\\Entity\\StorageLocationImage',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_storage_location_images_delete_item;
                            }

                            return $ret;
                        }
                        not_api_storage_location_images_delete_item:

                    }

                }

            }

            elseif (0 === strpos($pathinfo, '/api/u')) {
                if (0 === strpos($pathinfo, '/api/users')) {
                    // api_users_get_collection
                    if (preg_match('#^/api/users(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_users_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\User',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_users_get_collection;
                        }

                        return $ret;
                    }
                    not_api_users_get_collection:

                    // api_users_post_collection
                    if (preg_match('#^/api/users(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_users_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\User',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_users_post_collection;
                        }

                        return $ret;
                    }
                    not_api_users_post_collection:

                    // api_users_get_item
                    if (preg_match('#^/api/users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_users_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\User',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_users_get_item;
                        }

                        return $ret;
                    }
                    not_api_users_get_item:

                    // api_users_put_item
                    if (preg_match('#^/api/users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_users_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\User',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_users_put_item;
                        }

                        return $ret;
                    }
                    not_api_users_put_item:

                    // api_users_delete_item
                    if (preg_match('#^/api/users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_users_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\User',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_users_delete_item;
                        }

                        return $ret;
                    }
                    not_api_users_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/user_providers')) {
                    // api_user_providers_get_collection
                    if (preg_match('#^/api/user_providers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_user_providers_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\UserProvider',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_user_providers_get_collection;
                        }

                        return $ret;
                    }
                    not_api_user_providers_get_collection:

                    // api_user_providers_post_collection
                    if (preg_match('#^/api/user_providers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_user_providers_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\UserProvider',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_user_providers_post_collection;
                        }

                        return $ret;
                    }
                    not_api_user_providers_post_collection:

                    // api_user_providers_get_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_user_providers_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\UserProvider',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_user_providers_get_item;
                        }

                        return $ret;
                    }
                    not_api_user_providers_get_item:

                    // api_user_providers_put_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_user_providers_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\UserProvider',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_user_providers_put_item;
                        }

                        return $ret;
                    }
                    not_api_user_providers_put_item:

                    // api_user_providers_delete_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_user_providers_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\UserProvider',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_user_providers_delete_item;
                        }

                        return $ret;
                    }
                    not_api_user_providers_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/units')) {
                    // api_units_get_collection
                    if (preg_match('#^/api/units(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_units_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UnitBundle\\Entity\\Unit',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_units_get_collection;
                        }

                        return $ret;
                    }
                    not_api_units_get_collection:

                    // api_units_post_collection
                    if (preg_match('#^/api/units(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_units_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UnitBundle\\Entity\\Unit',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_units_post_collection;
                        }

                        return $ret;
                    }
                    not_api_units_post_collection:

                    // api_units_get_item
                    if (preg_match('#^/api/units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_units_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UnitBundle\\Entity\\Unit',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_units_get_item;
                        }

                        return $ret;
                    }
                    not_api_units_get_item:

                    // api_units_put_item
                    if (preg_match('#^/api/units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_units_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UnitBundle\\Entity\\Unit',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_units_put_item;
                        }

                        return $ret;
                    }
                    not_api_units_put_item:

                    // api_units_delete_item
                    if (preg_match('#^/api/units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_units_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\UnitBundle\\Entity\\Unit',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_units_delete_item;
                        }

                        return $ret;
                    }
                    not_api_units_delete_item:

                }

            }

            elseif (0 === strpos($pathinfo, '/api/f')) {
                if (0 === strpos($pathinfo, '/api/f_o_s_users')) {
                    // api_f_o_s_users_get_collection
                    if (preg_match('#^/api/f_o_s_users(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_f_o_s_users_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_f_o_s_users_get_collection;
                        }

                        return $ret;
                    }
                    not_api_f_o_s_users_get_collection:

                    // api_f_o_s_users_post_collection
                    if (preg_match('#^/api/f_o_s_users(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_f_o_s_users_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_f_o_s_users_post_collection;
                        }

                        return $ret;
                    }
                    not_api_f_o_s_users_post_collection:

                    // api_f_o_s_users_get_item
                    if (preg_match('#^/api/f_o_s_users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_f_o_s_users_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_f_o_s_users_get_item;
                        }

                        return $ret;
                    }
                    not_api_f_o_s_users_get_item:

                    // api_f_o_s_users_put_item
                    if (preg_match('#^/api/f_o_s_users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_f_o_s_users_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_f_o_s_users_put_item;
                        }

                        return $ret;
                    }
                    not_api_f_o_s_users_put_item:

                    // api_f_o_s_users_delete_item
                    if (preg_match('#^/api/f_o_s_users/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_f_o_s_users_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_f_o_s_users_delete_item;
                        }

                        return $ret;
                    }
                    not_api_f_o_s_users_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/footprints')) {
                    // api_footprints_get_collection
                    if (preg_match('#^/api/footprints(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprints_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\Footprint',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_footprints_get_collection;
                        }

                        return $ret;
                    }
                    not_api_footprints_get_collection:

                    // api_footprints_post_collection
                    if (preg_match('#^/api/footprints(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprints_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\Footprint',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_footprints_post_collection;
                        }

                        return $ret;
                    }
                    not_api_footprints_post_collection:

                    // api_footprints_get_item
                    if (preg_match('#^/api/footprints/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprints_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\Footprint',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_footprints_get_item;
                        }

                        return $ret;
                    }
                    not_api_footprints_get_item:

                    // api_footprints_put_item
                    if (preg_match('#^/api/footprints/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprints_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\Footprint',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_footprints_put_item;
                        }

                        return $ret;
                    }
                    not_api_footprints_put_item:

                    // api_footprints_delete_item
                    if (preg_match('#^/api/footprints/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprints_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\Footprint',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_footprints_delete_item;
                        }

                        return $ret;
                    }
                    not_api_footprints_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/footprint_')) {
                    if (0 === strpos($pathinfo, '/api/footprint_images')) {
                        // api_footprint_images_get_collection
                        if (preg_match('#^/api/footprint_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_images_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_images_get_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_images_get_collection:

                        // api_footprint_images_post_collection
                        if (preg_match('#^/api/footprint_images(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_images_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_footprint_images_post_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_images_post_collection:

                        // api_footprint_images_get_item
                        if (preg_match('#^/api/footprint_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_images_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_images_get_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_images_get_item:

                        // api_footprint_images_put_item
                        if (preg_match('#^/api/footprint_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_images_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_footprint_images_put_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_images_put_item:

                        // api_footprint_images_delete_item
                        if (preg_match('#^/api/footprint_images/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_images_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintImage',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_footprint_images_delete_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_images_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/footprint_categories')) {
                        // api_footprint_categories_get_collection
                        if (preg_match('#^/api/footprint_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_categories_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintCategory',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_categories_get_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_categories_get_collection:

                        // api_footprint_categories_post_collection
                        if (preg_match('#^/api/footprint_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_categories_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintCategory',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_footprint_categories_post_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_categories_post_collection:

                        // api_footprint_categories_get_item
                        if (preg_match('#^/api/footprint_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_categories_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintCategory',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_categories_get_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_categories_get_item:

                        // api_footprint_categories_put_item
                        if (preg_match('#^/api/footprint_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_categories_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintCategory',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_footprint_categories_put_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_categories_put_item:

                        // api_footprint_categories_delete_item
                        if (preg_match('#^/api/footprint_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_categories_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintCategory',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_footprint_categories_delete_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_categories_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/footprint_attachments')) {
                        // api_footprint_attachments_get_collection
                        if (preg_match('#^/api/footprint_attachments(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_attachments_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_attachments_get_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_attachments_get_collection:

                        // api_footprint_attachments_post_collection
                        if (preg_match('#^/api/footprint_attachments(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_attachments_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_footprint_attachments_post_collection;
                            }

                            return $ret;
                        }
                        not_api_footprint_attachments_post_collection:

                        // api_footprint_attachments_get_item
                        if (preg_match('#^/api/footprint_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_attachments_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_footprint_attachments_get_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_attachments_get_item:

                        // api_footprint_attachments_put_item
                        if (preg_match('#^/api/footprint_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_attachments_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_footprint_attachments_put_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_attachments_put_item:

                        // api_footprint_attachments_delete_item
                        if (preg_match('#^/api/footprint_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_footprint_attachments_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\FootprintBundle\\Entity\\FootprintAttachment',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_footprint_attachments_delete_item;
                            }

                            return $ret;
                        }
                        not_api_footprint_attachments_delete_item:

                    }

                }

            }

            elseif (0 === strpos($pathinfo, '/api/p')) {
                if (0 === strpos($pathinfo, '/api/parts')) {
                    // api_parts_get_collection
                    if (preg_match('#^/api/parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_parts_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\Part',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_parts_get_collection;
                        }

                        return $ret;
                    }
                    not_api_parts_get_collection:

                    // api_parts_post_collection
                    if (preg_match('#^/api/parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_parts_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\Part',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_parts_post_collection;
                        }

                        return $ret;
                    }
                    not_api_parts_post_collection:

                    // api_parts_get_item
                    if (preg_match('#^/api/parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_parts_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\Part',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_parts_get_item;
                        }

                        return $ret;
                    }
                    not_api_parts_get_item:

                    // api_parts_put_item
                    if (preg_match('#^/api/parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_parts_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\Part',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_parts_put_item;
                        }

                        return $ret;
                    }
                    not_api_parts_put_item:

                    // api_parts_delete_item
                    if (preg_match('#^/api/parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_parts_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\Part',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_parts_delete_item;
                        }

                        return $ret;
                    }
                    not_api_parts_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/part_')) {
                    if (0 === strpos($pathinfo, '/api/part_manufacturers')) {
                        // api_part_manufacturers_get_collection
                        if (preg_match('#^/api/part_manufacturers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_manufacturers_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartManufacturer',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_manufacturers_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_manufacturers_get_collection:

                        // api_part_manufacturers_post_collection
                        if (preg_match('#^/api/part_manufacturers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_manufacturers_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartManufacturer',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_manufacturers_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_manufacturers_post_collection:

                        // api_part_manufacturers_get_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_manufacturers_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartManufacturer',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_manufacturers_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_manufacturers_get_item:

                        // api_part_manufacturers_put_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_manufacturers_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartManufacturer',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_manufacturers_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_manufacturers_put_item:

                        // api_part_manufacturers_delete_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_manufacturers_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartManufacturer',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_manufacturers_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_manufacturers_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/part_measurement_units')) {
                        // api_part_measurement_units_get_collection
                        if (preg_match('#^/api/part_measurement_units(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_measurement_units_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartMeasurementUnit',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_measurement_units_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_measurement_units_get_collection:

                        // api_part_measurement_units_post_collection
                        if (preg_match('#^/api/part_measurement_units(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_measurement_units_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartMeasurementUnit',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_measurement_units_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_measurement_units_post_collection:

                        // api_part_measurement_units_get_item
                        if (preg_match('#^/api/part_measurement_units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_measurement_units_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartMeasurementUnit',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_measurement_units_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_measurement_units_get_item:

                        // api_part_measurement_units_put_item
                        if (preg_match('#^/api/part_measurement_units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_measurement_units_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartMeasurementUnit',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_measurement_units_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_measurement_units_put_item:

                        // api_part_measurement_units_delete_item
                        if (preg_match('#^/api/part_measurement_units/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_measurement_units_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartMeasurementUnit',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_measurement_units_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_measurement_units_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/part_attachments')) {
                        // api_part_attachments_get_collection
                        if (preg_match('#^/api/part_attachments(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_attachments_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartAttachment',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_attachments_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_attachments_get_collection:

                        // api_part_attachments_post_collection
                        if (preg_match('#^/api/part_attachments(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_attachments_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartAttachment',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_attachments_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_attachments_post_collection:

                        // api_part_attachments_get_item
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_attachments_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartAttachment',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_attachments_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_attachments_get_item:

                        // api_part_attachments_put_item
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_attachments_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartAttachment',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_attachments_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_attachments_put_item:

                        // api_part_attachments_delete_item
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_attachments_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartAttachment',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_attachments_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_attachments_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/part_parameters')) {
                        // api_part_parameters_get_collection
                        if (preg_match('#^/api/part_parameters(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_parameters_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartParameter',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_parameters_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_parameters_get_collection:

                        // api_part_parameters_post_collection
                        if (preg_match('#^/api/part_parameters(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_parameters_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartParameter',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_parameters_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_parameters_post_collection:

                        // api_part_parameters_get_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_parameters_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartParameter',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_parameters_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_parameters_get_item:

                        // api_part_parameters_put_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_parameters_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartParameter',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_parameters_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_parameters_put_item:

                        // api_part_parameters_delete_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_parameters_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartParameter',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_parameters_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_parameters_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/part_distributors')) {
                        // api_part_distributors_get_collection
                        if (preg_match('#^/api/part_distributors(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_distributors_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartDistributor',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_distributors_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_distributors_get_collection:

                        // api_part_distributors_post_collection
                        if (preg_match('#^/api/part_distributors(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_distributors_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartDistributor',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_distributors_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_distributors_post_collection:

                        // api_part_distributors_get_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_distributors_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartDistributor',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_distributors_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_distributors_get_item:

                        // api_part_distributors_put_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_distributors_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartDistributor',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_distributors_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_distributors_put_item:

                        // api_part_distributors_delete_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_distributors_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartDistributor',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_distributors_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_distributors_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/part_categories')) {
                        // api_part_categories_get_collection
                        if (preg_match('#^/api/part_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_categories_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartCategory',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_categories_get_collection;
                            }

                            return $ret;
                        }
                        not_api_part_categories_get_collection:

                        // api_part_categories_post_collection
                        if (preg_match('#^/api/part_categories(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_categories_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartCategory',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_part_categories_post_collection;
                            }

                            return $ret;
                        }
                        not_api_part_categories_post_collection:

                        // api_part_categories_get_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_categories_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartCategory',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_part_categories_get_item;
                            }

                            return $ret;
                        }
                        not_api_part_categories_get_item:

                        // api_part_categories_put_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_categories_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartCategory',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_part_categories_put_item;
                            }

                            return $ret;
                        }
                        not_api_part_categories_put_item:

                        // api_part_categories_delete_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_part_categories_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\PartCategory',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_part_categories_delete_item;
                            }

                            return $ret;
                        }
                        not_api_part_categories_delete_item:

                    }

                }

                elseif (0 === strpos($pathinfo, '/api/project_')) {
                    if (0 === strpos($pathinfo, '/api/project_runs')) {
                        // api_project_runs_get_collection
                        if (preg_match('#^/api/project_runs(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_runs_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRun',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_runs_get_collection;
                            }

                            return $ret;
                        }
                        not_api_project_runs_get_collection:

                        // api_project_runs_post_collection
                        if (preg_match('#^/api/project_runs(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_runs_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRun',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_project_runs_post_collection;
                            }

                            return $ret;
                        }
                        not_api_project_runs_post_collection:

                        // api_project_runs_get_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_runs_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRun',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_runs_get_item;
                            }

                            return $ret;
                        }
                        not_api_project_runs_get_item:

                        // api_project_runs_put_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_runs_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRun',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_project_runs_put_item;
                            }

                            return $ret;
                        }
                        not_api_project_runs_put_item:

                        // api_project_runs_delete_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_runs_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRun',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_project_runs_delete_item;
                            }

                            return $ret;
                        }
                        not_api_project_runs_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/project_run_parts')) {
                        // api_project_run_parts_get_collection
                        if (preg_match('#^/api/project_run_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_run_parts_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRunPart',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_run_parts_get_collection;
                            }

                            return $ret;
                        }
                        not_api_project_run_parts_get_collection:

                        // api_project_run_parts_post_collection
                        if (preg_match('#^/api/project_run_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_run_parts_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRunPart',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_project_run_parts_post_collection;
                            }

                            return $ret;
                        }
                        not_api_project_run_parts_post_collection:

                        // api_project_run_parts_get_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_run_parts_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRunPart',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_run_parts_get_item;
                            }

                            return $ret;
                        }
                        not_api_project_run_parts_get_item:

                        // api_project_run_parts_put_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_run_parts_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRunPart',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_project_run_parts_put_item;
                            }

                            return $ret;
                        }
                        not_api_project_run_parts_put_item:

                        // api_project_run_parts_delete_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_run_parts_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectRunPart',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_project_run_parts_delete_item;
                            }

                            return $ret;
                        }
                        not_api_project_run_parts_delete_item:

                    }

                    elseif (0 === strpos($pathinfo, '/api/project_parts')) {
                        // api_project_parts_get_collection
                        if (preg_match('#^/api/project_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_parts_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart',  '_api_collection_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_parts_get_collection;
                            }

                            return $ret;
                        }
                        not_api_project_parts_get_collection:

                        // api_project_parts_post_collection
                        if (preg_match('#^/api/project_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_parts_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart',  '_api_collection_operation_name' => 'post',));
                            if (!in_array($requestMethod, ['POST'])) {
                                $allow = array_merge($allow, ['POST']);
                                goto not_api_project_parts_post_collection;
                            }

                            return $ret;
                        }
                        not_api_project_parts_post_collection:

                        // api_project_parts_get_item
                        if (preg_match('#^/api/project_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_parts_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart',  '_api_item_operation_name' => 'get',));
                            if (!in_array($canonicalMethod, ['GET'])) {
                                $allow = array_merge($allow, ['GET']);
                                goto not_api_project_parts_get_item;
                            }

                            return $ret;
                        }
                        not_api_project_parts_get_item:

                        // api_project_parts_put_item
                        if (preg_match('#^/api/project_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_parts_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart',  '_api_item_operation_name' => 'put',));
                            if (!in_array($requestMethod, ['PUT'])) {
                                $allow = array_merge($allow, ['PUT']);
                                goto not_api_project_parts_put_item;
                            }

                            return $ret;
                        }
                        not_api_project_parts_put_item:

                        // api_project_parts_delete_item
                        if (preg_match('#^/api/project_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                            $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_project_parts_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ProjectPart',  '_api_item_operation_name' => 'delete',));
                            if (!in_array($requestMethod, ['DELETE'])) {
                                $allow = array_merge($allow, ['DELETE']);
                                goto not_api_project_parts_delete_item;
                            }

                            return $ret;
                        }
                        not_api_project_parts_delete_item:

                    }

                }

                elseif (0 === strpos($pathinfo, '/api/projects')) {
                    // api_projects_get_collection
                    if (preg_match('#^/api/projects(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_projects_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Project',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_projects_get_collection;
                        }

                        return $ret;
                    }
                    not_api_projects_get_collection:

                    // api_projects_post_collection
                    if (preg_match('#^/api/projects(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_projects_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Project',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_projects_post_collection;
                        }

                        return $ret;
                    }
                    not_api_projects_post_collection:

                    // api_projects_get_item
                    if (preg_match('#^/api/projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_projects_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Project',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_projects_get_item;
                        }

                        return $ret;
                    }
                    not_api_projects_get_item:

                    // api_projects_put_item
                    if (preg_match('#^/api/projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_projects_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Project',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_projects_put_item;
                        }

                        return $ret;
                    }
                    not_api_projects_put_item:

                    // api_projects_delete_item
                    if (preg_match('#^/api/projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_projects_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Project',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_projects_delete_item;
                        }

                        return $ret;
                    }
                    not_api_projects_delete_item:

                }

            }

            elseif (0 === strpos($pathinfo, '/api/m')) {
                if (0 === strpos($pathinfo, '/api/meta_part_parameter_criterias')) {
                    // api_meta_part_parameter_criterias_get_collection
                    if (preg_match('#^/api/meta_part_parameter_criterias(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_meta_part_parameter_criterias_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\MetaPartParameterCriteria',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_meta_part_parameter_criterias_get_collection;
                        }

                        return $ret;
                    }
                    not_api_meta_part_parameter_criterias_get_collection:

                    // api_meta_part_parameter_criterias_post_collection
                    if (preg_match('#^/api/meta_part_parameter_criterias(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_meta_part_parameter_criterias_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\MetaPartParameterCriteria',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_meta_part_parameter_criterias_post_collection;
                        }

                        return $ret;
                    }
                    not_api_meta_part_parameter_criterias_post_collection:

                    // api_meta_part_parameter_criterias_get_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_meta_part_parameter_criterias_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\MetaPartParameterCriteria',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_meta_part_parameter_criterias_get_item;
                        }

                        return $ret;
                    }
                    not_api_meta_part_parameter_criterias_get_item:

                    // api_meta_part_parameter_criterias_put_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_meta_part_parameter_criterias_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\MetaPartParameterCriteria',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_meta_part_parameter_criterias_put_item;
                        }

                        return $ret;
                    }
                    not_api_meta_part_parameter_criterias_put_item:

                    // api_meta_part_parameter_criterias_delete_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_meta_part_parameter_criterias_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\PartBundle\\Entity\\MetaPartParameterCriteria',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_meta_part_parameter_criterias_delete_item;
                        }

                        return $ret;
                    }
                    not_api_meta_part_parameter_criterias_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/manufacturers')) {
                    // api_manufacturers_get_collection
                    if (preg_match('#^/api/manufacturers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturers_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\Manufacturer',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_manufacturers_get_collection;
                        }

                        return $ret;
                    }
                    not_api_manufacturers_get_collection:

                    // api_manufacturers_post_collection
                    if (preg_match('#^/api/manufacturers(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturers_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\Manufacturer',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_manufacturers_post_collection;
                        }

                        return $ret;
                    }
                    not_api_manufacturers_post_collection:

                    // api_manufacturers_get_item
                    if (preg_match('#^/api/manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturers_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\Manufacturer',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_manufacturers_get_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturers_get_item:

                    // api_manufacturers_put_item
                    if (preg_match('#^/api/manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturers_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\Manufacturer',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_manufacturers_put_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturers_put_item:

                    // api_manufacturers_delete_item
                    if (preg_match('#^/api/manufacturers/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturers_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\Manufacturer',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_manufacturers_delete_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturers_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/manufacturer_i_c_logos')) {
                    // api_manufacturer_i_c_logos_get_collection
                    if (preg_match('#^/api/manufacturer_i_c_logos(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturer_i_c_logos_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_manufacturer_i_c_logos_get_collection;
                        }

                        return $ret;
                    }
                    not_api_manufacturer_i_c_logos_get_collection:

                    // api_manufacturer_i_c_logos_post_collection
                    if (preg_match('#^/api/manufacturer_i_c_logos(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturer_i_c_logos_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_manufacturer_i_c_logos_post_collection;
                        }

                        return $ret;
                    }
                    not_api_manufacturer_i_c_logos_post_collection:

                    // api_manufacturer_i_c_logos_get_item
                    if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturer_i_c_logos_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_manufacturer_i_c_logos_get_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturer_i_c_logos_get_item:

                    // api_manufacturer_i_c_logos_put_item
                    if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturer_i_c_logos_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_manufacturer_i_c_logos_put_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturer_i_c_logos_put_item:

                    // api_manufacturer_i_c_logos_delete_item
                    if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_manufacturer_i_c_logos_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_manufacturer_i_c_logos_delete_item;
                        }

                        return $ret;
                    }
                    not_api_manufacturer_i_c_logos_delete_item:

                }

            }

            elseif (0 === strpos($pathinfo, '/api/report')) {
                if (0 === strpos($pathinfo, '/api/reports')) {
                    // api_reports_get_collection
                    if (preg_match('#^/api/reports(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_reports_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Report',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_reports_get_collection;
                        }

                        return $ret;
                    }
                    not_api_reports_get_collection:

                    // api_reports_post_collection
                    if (preg_match('#^/api/reports(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_reports_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Report',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_reports_post_collection;
                        }

                        return $ret;
                    }
                    not_api_reports_post_collection:

                    // api_reports_get_item
                    if (preg_match('#^/api/reports/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_reports_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Report',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_reports_get_item;
                        }

                        return $ret;
                    }
                    not_api_reports_get_item:

                    // api_reports_put_item
                    if (preg_match('#^/api/reports/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_reports_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Report',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_reports_put_item;
                        }

                        return $ret;
                    }
                    not_api_reports_put_item:

                    // api_reports_delete_item
                    if (preg_match('#^/api/reports/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_reports_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\Report',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_reports_delete_item;
                        }

                        return $ret;
                    }
                    not_api_reports_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/report_projects')) {
                    // api_report_projects_get_collection
                    if (preg_match('#^/api/report_projects(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_projects_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportProject',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_report_projects_get_collection;
                        }

                        return $ret;
                    }
                    not_api_report_projects_get_collection:

                    // api_report_projects_post_collection
                    if (preg_match('#^/api/report_projects(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_projects_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportProject',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_report_projects_post_collection;
                        }

                        return $ret;
                    }
                    not_api_report_projects_post_collection:

                    // api_report_projects_get_item
                    if (preg_match('#^/api/report_projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_projects_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportProject',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_report_projects_get_item;
                        }

                        return $ret;
                    }
                    not_api_report_projects_get_item:

                    // api_report_projects_put_item
                    if (preg_match('#^/api/report_projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_projects_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportProject',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_report_projects_put_item;
                        }

                        return $ret;
                    }
                    not_api_report_projects_put_item:

                    // api_report_projects_delete_item
                    if (preg_match('#^/api/report_projects/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_projects_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportProject',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_report_projects_delete_item;
                        }

                        return $ret;
                    }
                    not_api_report_projects_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/report_parts')) {
                    // api_report_parts_get_collection
                    if (preg_match('#^/api/report_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_parts_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportPart',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_report_parts_get_collection;
                        }

                        return $ret;
                    }
                    not_api_report_parts_get_collection:

                    // api_report_parts_post_collection
                    if (preg_match('#^/api/report_parts(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_parts_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportPart',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_report_parts_post_collection;
                        }

                        return $ret;
                    }
                    not_api_report_parts_post_collection:

                    // api_report_parts_get_item
                    if (preg_match('#^/api/report_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_parts_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportPart',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_report_parts_get_item;
                        }

                        return $ret;
                    }
                    not_api_report_parts_get_item:

                    // api_report_parts_put_item
                    if (preg_match('#^/api/report_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_parts_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportPart',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_report_parts_put_item;
                        }

                        return $ret;
                    }
                    not_api_report_parts_put_item:

                    // api_report_parts_delete_item
                    if (preg_match('#^/api/report_parts/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_report_parts_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ProjectBundle\\Entity\\ReportPart',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_report_parts_delete_item;
                        }

                        return $ret;
                    }
                    not_api_report_parts_delete_item:

                }

            }

            elseif (0 === strpos($pathinfo, '/api/import_presets')) {
                // api_import_presets_get_collection
                if (preg_match('#^/api/import_presets(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_import_presets_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImportBundle\\Entity\\ImportPreset',  '_api_collection_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_import_presets_get_collection;
                    }

                    return $ret;
                }
                not_api_import_presets_get_collection:

                // api_import_presets_post_collection
                if (preg_match('#^/api/import_presets(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_import_presets_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImportBundle\\Entity\\ImportPreset',  '_api_collection_operation_name' => 'post',));
                    if (!in_array($requestMethod, ['POST'])) {
                        $allow = array_merge($allow, ['POST']);
                        goto not_api_import_presets_post_collection;
                    }

                    return $ret;
                }
                not_api_import_presets_post_collection:

                // api_import_presets_get_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_import_presets_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImportBundle\\Entity\\ImportPreset',  '_api_item_operation_name' => 'get',));
                    if (!in_array($canonicalMethod, ['GET'])) {
                        $allow = array_merge($allow, ['GET']);
                        goto not_api_import_presets_get_item;
                    }

                    return $ret;
                }
                not_api_import_presets_get_item:

                // api_import_presets_put_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_import_presets_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImportBundle\\Entity\\ImportPreset',  '_api_item_operation_name' => 'put',));
                    if (!in_array($requestMethod, ['PUT'])) {
                        $allow = array_merge($allow, ['PUT']);
                        goto not_api_import_presets_put_item;
                    }

                    return $ret;
                }
                not_api_import_presets_put_item:

                // api_import_presets_delete_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                    $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_import_presets_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\ImportBundle\\Entity\\ImportPreset',  '_api_item_operation_name' => 'delete',));
                    if (!in_array($requestMethod, ['DELETE'])) {
                        $allow = array_merge($allow, ['DELETE']);
                        goto not_api_import_presets_delete_item;
                    }

                    return $ret;
                }
                not_api_import_presets_delete_item:

            }

            elseif (0 === strpos($pathinfo, '/api/batch_job')) {
                if (0 === strpos($pathinfo, '/api/batch_jobs')) {
                    // api_batch_jobs_get_collection
                    if (preg_match('#^/api/batch_jobs(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_jobs_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJob',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_jobs_get_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_jobs_get_collection:

                    // api_batch_jobs_post_collection
                    if (preg_match('#^/api/batch_jobs(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_jobs_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJob',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_batch_jobs_post_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_jobs_post_collection:

                    // api_batch_jobs_get_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_jobs_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJob',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_jobs_get_item;
                        }

                        return $ret;
                    }
                    not_api_batch_jobs_get_item:

                    // api_batch_jobs_put_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_jobs_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJob',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_batch_jobs_put_item;
                        }

                        return $ret;
                    }
                    not_api_batch_jobs_put_item:

                    // api_batch_jobs_delete_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_jobs_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJob',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_batch_jobs_delete_item;
                        }

                        return $ret;
                    }
                    not_api_batch_jobs_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/batch_job_update_fields')) {
                    // api_batch_job_update_fields_get_collection
                    if (preg_match('#^/api/batch_job_update_fields(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_update_fields_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobUpdateField',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_job_update_fields_get_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_job_update_fields_get_collection:

                    // api_batch_job_update_fields_post_collection
                    if (preg_match('#^/api/batch_job_update_fields(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_update_fields_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobUpdateField',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_batch_job_update_fields_post_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_job_update_fields_post_collection:

                    // api_batch_job_update_fields_get_item
                    if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_update_fields_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobUpdateField',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_job_update_fields_get_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_update_fields_get_item:

                    // api_batch_job_update_fields_put_item
                    if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_update_fields_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobUpdateField',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_batch_job_update_fields_put_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_update_fields_put_item:

                    // api_batch_job_update_fields_delete_item
                    if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_update_fields_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobUpdateField',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_batch_job_update_fields_delete_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_update_fields_delete_item:

                }

                elseif (0 === strpos($pathinfo, '/api/batch_job_query_fields')) {
                    // api_batch_job_query_fields_get_collection
                    if (preg_match('#^/api/batch_job_query_fields(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_query_fields_get_collection']), array (  '_controller' => 'api_platform.action.get_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobQueryField',  '_api_collection_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_job_query_fields_get_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_job_query_fields_get_collection:

                    // api_batch_job_query_fields_post_collection
                    if (preg_match('#^/api/batch_job_query_fields(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_query_fields_post_collection']), array (  '_controller' => 'api_platform.action.post_collection',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobQueryField',  '_api_collection_operation_name' => 'post',));
                        if (!in_array($requestMethod, ['POST'])) {
                            $allow = array_merge($allow, ['POST']);
                            goto not_api_batch_job_query_fields_post_collection;
                        }

                        return $ret;
                    }
                    not_api_batch_job_query_fields_post_collection:

                    // api_batch_job_query_fields_get_item
                    if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_query_fields_get_item']), array (  '_controller' => 'api_platform.action.get_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobQueryField',  '_api_item_operation_name' => 'get',));
                        if (!in_array($canonicalMethod, ['GET'])) {
                            $allow = array_merge($allow, ['GET']);
                            goto not_api_batch_job_query_fields_get_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_query_fields_get_item:

                    // api_batch_job_query_fields_put_item
                    if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_query_fields_put_item']), array (  '_controller' => 'api_platform.action.put_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobQueryField',  '_api_item_operation_name' => 'put',));
                        if (!in_array($requestMethod, ['PUT'])) {
                            $allow = array_merge($allow, ['PUT']);
                            goto not_api_batch_job_query_fields_put_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_query_fields_put_item:

                    // api_batch_job_query_fields_delete_item
                    if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/\\.]++)(?:\\.(?P<_format>[^/]++))?$#sD', $pathinfo, $matches)) {
                        $ret = $this->mergeDefaults(array_replace($matches, ['_route' => 'api_batch_job_query_fields_delete_item']), array (  '_controller' => 'api_platform.action.delete_item',  '_format' => NULL,  '_api_resource_class' => 'PartKeepr\\BatchJobBundle\\Entity\\BatchJobQueryField',  '_api_item_operation_name' => 'delete',));
                        if (!in_array($requestMethod, ['DELETE'])) {
                            $allow = array_merge($allow, ['DELETE']);
                            goto not_api_batch_job_query_fields_delete_item;
                        }

                        return $ret;
                    }
                    not_api_batch_job_query_fields_delete_item:

                }

            }

        }

        // partkeepr_mobilefrontend_index_index
        if ('/mobile' === $trimmedPathinfo) {
            $ret = array (  '_controller' => 'PartKeepr\\MobileFrontendBundle\\Controller\\IndexController::indexAction',  '_route' => 'partkeepr_mobilefrontend_index_index',);
            if ('/' === substr($pathinfo, -1)) {
                // no-op
            } elseif ('GET' !== $canonicalMethod) {
                goto not_partkeepr_mobilefrontend_index_index;
            } else {
                return array_replace($ret, $this->redirect($rawPathinfo.'/', 'partkeepr_mobilefrontend_index_index'));
            }

            return $ret;
        }
        not_partkeepr_mobilefrontend_index_index:

        // partkeepr_frontend_index_index
        if ('' === $trimmedPathinfo) {
            $ret = array (  '_controller' => 'PartKeepr\\FrontendBundle\\Controller\\IndexController::indexAction',  '_route' => 'partkeepr_frontend_index_index',);
            if ('/' === substr($pathinfo, -1)) {
                // no-op
            } elseif ('GET' !== $canonicalMethod) {
                goto not_partkeepr_frontend_index_index;
            } else {
                return array_replace($ret, $this->redirect($rawPathinfo.'/', 'partkeepr_frontend_index_index'));
            }

            return $ret;
        }
        not_partkeepr_frontend_index_index:

        // partkeepr_import_import_getsource
        if ('/getSource' === $trimmedPathinfo) {
            $ret = array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::getSourceAction',  '_route' => 'partkeepr_import_import_getsource',);
            if ('/' === substr($pathinfo, -1)) {
                // no-op
            } elseif ('GET' !== $canonicalMethod) {
                goto not_partkeepr_import_import_getsource;
            } else {
                return array_replace($ret, $this->redirect($rawPathinfo.'/', 'partkeepr_import_import_getsource'));
            }

            return $ret;
        }
        not_partkeepr_import_import_getsource:

        // partkeepr_import_import_getpreview
        if ('/getPreview/' === $pathinfo) {
            $ret = array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::getPreviewAction',  '_route' => 'partkeepr_import_import_getpreview',);
            if (!in_array($requestMethod, ['POST'])) {
                $allow = array_merge($allow, ['POST']);
                goto not_partkeepr_import_import_getpreview;
            }

            return $ret;
        }
        not_partkeepr_import_import_getpreview:

        // partkeepr_import_import_import
        if ('/executeImport/' === $pathinfo) {
            $ret = array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::importAction',  '_route' => 'partkeepr_import_import_import',);
            if (!in_array($requestMethod, ['POST'])) {
                $allow = array_merge($allow, ['POST']);
                goto not_partkeepr_import_import_import;
            }

            return $ret;
        }
        not_partkeepr_import_import_import:

        if (0 === strpos($pathinfo, '/setup')) {
            if (0 === strpos($pathinfo, '/setup/_int_')) {
                if (0 === strpos($pathinfo, '/setup/_int_test_')) {
                    // partkeepr_setup_setup_inttestconnectivity
                    if ('/setup/_int_test_connectivity' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::intTestConnectivityAction',  '_route' => 'partkeepr_setup_setup_inttestconnectivity',);
                    }

                    // partkeepr_setup_setup_inttestdbversion
                    if ('/setup/_int_test_dbversion' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::intTestDBVersionAction',  '_route' => 'partkeepr_setup_setup_inttestdbversion',);
                    }

                    // partkeepr_setup_existingusersetup_inttestexistingusers
                    if ('/setup/_int_test_existing_users' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingUserSetupController::intTestExistingUsersAction',  '_route' => 'partkeepr_setup_existingusersetup_inttestexistingusers',);
                    }

                }

                // partkeepr_setup_cachewarmupsetup_intcachewarmup
                if ('/setup/_int_cache_warmup' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\CacheWarmupSetupController::intCacheWarmupAction',  '_route' => 'partkeepr_setup_cachewarmupsetup_intcachewarmup',);
                }

                if (0 === strpos($pathinfo, '/setup/_int_create_')) {
                    // partkeepr_setup_adminusersetup_intcreateuser
                    if ('/setup/_int_create_user' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\AdminUserSetupController::intCreateUserAction',  '_route' => 'partkeepr_setup_adminusersetup_intcreateuser',);
                    }

                    // partkeepr_setup_unitsetup_intcreateunits
                    if ('/setup/_int_create_units' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\UnitSetupController::intCreateUnitsAction',  '_route' => 'partkeepr_setup_unitsetup_intcreateunits',);
                    }

                    // partkeepr_setup_partunitsetup_intcreatepartunits
                    if ('/setup/_int_create_part_units' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\PartUnitSetupController::intCreatePartUnitsAction',  '_route' => 'partkeepr_setup_partunitsetup_intcreatepartunits',);
                    }

                    // partkeepr_setup_footprintsetup_intcreatefootprints
                    if ('/setup/_int_create_footprints' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FootprintSetupController::intCreateFootprints',  '_route' => 'partkeepr_setup_footprintsetup_intcreatefootprints',);
                    }

                    // partkeepr_setup_siprefixsetup_intcreatesiprefixes
                    if ('/setup/_int_create_si_prefixes' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SiPrefixSetupController::intCreateSiPrefixes',  '_route' => 'partkeepr_setup_siprefixsetup_intcreatesiprefixes',);
                    }

                    // partkeepr_setup_manufacturersetup_intcreatemanufacturers
                    if ('/setup/_int_create_manufacturers' === $pathinfo) {
                        return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ManufacturerSetupController::intCreateManufacturersAction',  '_route' => 'partkeepr_setup_manufacturersetup_intcreatemanufacturers',);
                    }

                }

                // partkeepr_setup_schemasetup_intsetupschema
                if ('/setup/_int_setup_schema' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaSetupController::intSetupSchemaAction',  '_route' => 'partkeepr_setup_schemasetup_intsetupschema',);
                }

                // partkeepr_setup_schemamigrationsetup_intmigrateschema
                if ('/setup/_int_migrate_schema' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaMigrationSetupController::intMigrateSchemaAction',  '_route' => 'partkeepr_setup_schemamigrationsetup_intmigrateschema',);
                }

                // partkeepr_setup_filemigration_intmigratefiles
                if ('/setup/_int_migrate_files_action' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FileMigrationController::intMigrateFilesAction',  '_route' => 'partkeepr_setup_filemigration_intmigratefiles',);
                }

            }

            elseif (0 === strpos($pathinfo, '/setup/test')) {
                // partkeepr_setup_setup_testdbversion
                if ('/setup/testDBVersion' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::testDBVersionAction',  '_route' => 'partkeepr_setup_setup_testdbversion',);
                }

                // partkeepr_setup_setup_testconnectivity
                if ('/setup/testConnectivity' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::testConnectivityAction',  '_route' => 'partkeepr_setup_setup_testconnectivity',);
                }

                // partkeepr_setup_existingusersetup_testexistingusers
                if ('/setup/testExistingUsers' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingUserSetupController::testExistingUsersAction',  '_route' => 'partkeepr_setup_existingusersetup_testexistingusers',);
                }

            }

            elseif (0 === strpos($pathinfo, '/setup/s')) {
                // partkeepr_setup_setup_saveconfig
                if ('/setup/saveConfig' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::saveConfigAction',  '_route' => 'partkeepr_setup_setup_saveconfig',);
                }

                // partkeepr_setup_schemasetup_setupschema
                if ('/setup/schemaSetup' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaSetupController::setupSchemaAction',  '_route' => 'partkeepr_setup_schemasetup_setupschema',);
                }

                // partkeepr_setup_schemamigrationsetup_migrateschema
                if ('/setup/schemaMigration' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaMigrationSetupController::migrateSchemaAction',  '_route' => 'partkeepr_setup_schemamigrationsetup_migrateschema',);
                }

            }

            // partkeepr_setup_setup_webservertest
            if ('/setup/webserverTest' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::webserverTestAction',  '_route' => 'partkeepr_setup_setup_webservertest',);
            }

            // partkeepr_setup_cachewarmupsetup_cachewarmup
            if ('/setup/warmupCache' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\CacheWarmupSetupController::cacheWarmupAction',  '_route' => 'partkeepr_setup_cachewarmupsetup_cachewarmup',);
            }

            // partkeepr_setup_setup_generateauthkey
            if ('/setup/generateAuthKey' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::generateAuthKeyAction',  '_route' => 'partkeepr_setup_setup_generateauthkey',);
            }

            if (0 === strpos($pathinfo, '/setup/create')) {
                // partkeepr_setup_adminusersetup_createuser
                if ('/setup/createUser' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\AdminUserSetupController::createUserAction',  '_route' => 'partkeepr_setup_adminusersetup_createuser',);
                }

                // partkeepr_setup_unitsetup_createunit
                if ('/setup/createUnits' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\UnitSetupController::createUnitAction',  '_route' => 'partkeepr_setup_unitsetup_createunit',);
                }

                // partkeepr_setup_partunitsetup_createpartunits
                if ('/setup/createPartUnits' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\PartUnitSetupController::createPartUnitsAction',  '_route' => 'partkeepr_setup_partunitsetup_createpartunits',);
                }

                // partkeepr_setup_footprintsetup_createfootprints
                if ('/setup/createFootprints' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FootprintSetupController::createFootprintsAction',  '_route' => 'partkeepr_setup_footprintsetup_createfootprints',);
                }

                // partkeepr_setup_siprefixsetup_createsiprefixes
                if ('/setup/createSiPrefixes' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SiPrefixSetupController::createSiPrefixesAction',  '_route' => 'partkeepr_setup_siprefixsetup_createsiprefixes',);
                }

                // partkeepr_setup_manufacturersetup_createmanufacturers
                if ('/setup/createManufacturers' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ManufacturerSetupController::createManufacturersAction',  '_route' => 'partkeepr_setup_manufacturersetup_createmanufacturers',);
                }

            }

            // partkeepr_setup_existingconfigparser_parseexistingconfig
            if ('/setup/parseExistingConfig' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingConfigParserController::parseExistingConfigAction',  '_route' => 'partkeepr_setup_existingconfigparser_parseexistingconfig',);
            }

            // partkeepr_setup_filemigration_migratefiles
            if ('/setup/migrateFiles' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FileMigrationController::migrateFilesAction',  '_route' => 'partkeepr_setup_filemigration_migratefiles',);
            }

        }

        if ('/' === $pathinfo && !$allow) {
            throw new Symfony\Component\Routing\Exception\NoConfigurationException();
        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
