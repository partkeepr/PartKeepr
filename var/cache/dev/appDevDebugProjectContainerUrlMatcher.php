<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appDevDebugProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
{
    public function __construct(RequestContext $context)
    {
        $this->context = $context;
    }

    public function match($rawPathinfo)
    {
        $allow = array();
        $pathinfo = rawurldecode($rawPathinfo);
        $context = $this->context;
        $request = $this->request ?: $this->createRequest($pathinfo);

        if (0 === strpos($pathinfo, '/css/ec39aa1')) {
            // _assetic_ec39aa1
            if ('/css/ec39aa1.css' === $pathinfo) {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_ec39aa1',);
            }

            if (0 === strpos($pathinfo, '/css/ec39aa1_')) {
                // _assetic_ec39aa1_0
                if ('/css/ec39aa1_ux-all_1.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_0',);
                }

                // _assetic_ec39aa1_1
                if ('/css/ec39aa1_charts-all_2.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_1',);
                }

                // _assetic_ec39aa1_2
                if ('/css/ec39aa1_silk-icons-sprite_3.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 2,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_2',);
                }

                // _assetic_ec39aa1_3
                if ('/css/ec39aa1_fugue-16_4.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 3,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_3',);
                }

                // _assetic_ec39aa1_4
                if ('/css/ec39aa1_partkeepr_5.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 4,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_4',);
                }

                // _assetic_ec39aa1_5
                if ('/css/ec39aa1_PartKeepr_6.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ec39aa1',  'pos' => 5,  '_format' => 'css',  '_route' => '_assetic_ec39aa1_5',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/images/245ec67')) {
            // _assetic_245ec67
            if ('/images/245ec67.ico' === $pathinfo) {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '245ec67',  'pos' => NULL,  '_format' => 'ico',  '_route' => '_assetic_245ec67',);
            }

            // _assetic_245ec67_0
            if ('/images/245ec67_favicon_1.ico' === $pathinfo) {
                return array (  '_controller' => 'assetic.controller:render',  'name' => '245ec67',  'pos' => 0,  '_format' => 'ico',  '_route' => '_assetic_245ec67_0',);
            }

        }

        if (0 === strpos($pathinfo, '/js/compiled')) {
            if (0 === strpos($pathinfo, '/js/compiled/extjs')) {
                if (0 === strpos($pathinfo, '/js/compiled/extjs-debug')) {
                    // _assetic_5257461
                    if ('/js/compiled/extjs-debug.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_5257461',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/extjs-debug_')) {
                        // _assetic_5257461_0
                        if ('/js/compiled/extjs-debug_ext-all-debug_1.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_5257461_0',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/extjs-debug_T')) {
                            // _assetic_5257461_1
                            if ('/js/compiled/extjs-debug_TreePicker_2.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_5257461_1',);
                            }

                            // _assetic_5257461_2
                            if ('/js/compiled/extjs-debug_TabCloseMenu_3.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_5257461_2',);
                            }

                        }

                        // _assetic_5257461_3
                        if ('/js/compiled/extjs-debug_StatusBar_4.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_5257461_3',);
                        }

                        // _assetic_5257461_4
                        if ('/js/compiled/extjs-debug_IFrame_5.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 5257461,  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_5257461_4',);
                        }

                    }

                }

                // _assetic_eddbaea
                if ('/js/compiled/extjs.js' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_eddbaea',);
                }

                if (0 === strpos($pathinfo, '/js/compiled/extjs_')) {
                    // _assetic_eddbaea_0
                    if ('/js/compiled/extjs_ext-all_1.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_eddbaea_0',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/extjs_T')) {
                        // _assetic_eddbaea_1
                        if ('/js/compiled/extjs_TreePicker_2.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_eddbaea_1',);
                        }

                        // _assetic_eddbaea_2
                        if ('/js/compiled/extjs_TabCloseMenu_3.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_eddbaea_2',);
                        }

                    }

                    // _assetic_eddbaea_3
                    if ('/js/compiled/extjs_StatusBar_4.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_eddbaea_3',);
                    }

                    // _assetic_eddbaea_4
                    if ('/js/compiled/extjs_IFrame_5.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'eddbaea',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_eddbaea_4',);
                    }

                }

            }

            if (0 === strpos($pathinfo, '/js/compiled/m')) {
                if (0 === strpos($pathinfo, '/js/compiled/main')) {
                    // _assetic_ee5e520
                    if ('/js/compiled/main.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_ee5e520',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/main_')) {
                        // _assetic_ee5e520_0
                        if ('/js/compiled/main_charts_1.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_ee5e520_0',);
                        }

                        // _assetic_ee5e520_1
                        if ('/js/compiled/main_CallActions_2.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_ee5e520_1',);
                        }

                        // _assetic_ee5e520_2
                        if ('/js/compiled/main_Array_3.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_ee5e520_2',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main_Hydra')) {
                            // _assetic_ee5e520_3
                            if ('/js/compiled/main_HydraModel_4.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_ee5e520_3',);
                            }

                            // _assetic_ee5e520_4
                            if ('/js/compiled/main_HydraField_5.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_ee5e520_4',);
                            }

                            // _assetic_ee5e520_5
                            if ('/js/compiled/main_HydraTreeModel_6.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_ee5e520_5',);
                            }

                        }

                        // _assetic_ee5e520_6
                        if ('/js/compiled/main_ModelStore_7.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_ee5e520_6',);
                        }

                        // _assetic_ee5e520_7
                        if ('/js/compiled/main_BaseStore_8.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_ee5e520_7',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main_Ext.')) {
                            // _assetic_ee5e520_8
                            if ('/js/compiled/main_Ext.form.field.Checkbox.EXTJS-21886_9.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_ee5e520_8',);
                            }

                            // _assetic_ee5e520_9
                            if ('/js/compiled/main_Ext.view.Table-renderCell_10.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_ee5e520_9',);
                            }

                            // _assetic_ee5e520_10
                            if ('/js/compiled/main_Ext.data.field.Date-ISO8601_11.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ee5e520',  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_ee5e520_10',);
                            }

                        }

                    }

                }

                if (0 === strpos($pathinfo, '/js/compiled/models')) {
                    // _assetic_447d316
                    if ('/js/compiled/models.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_447d316',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_')) {
                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_FOS.UserBundle.Model.')) {
                            // _assetic_447d316_0
                            if ('/js/compiled/models_part_1_FOS.UserBundle.Model.Group_1.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_447d316_0',);
                            }

                            // _assetic_447d316_1
                            if ('/js/compiled/models_part_1_FOS.UserBundle.Model.User_2.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_447d316_1',);
                            }

                        }

                        // _assetic_447d316_2
                        if ('/js/compiled/models_part_1_Gedmo.Tree.Entity.MappedSuperclass.AbstractClosure_3.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_447d316_2',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.')) {
                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.')) {
                                // _assetic_447d316_3
                                if ('/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.FOSUser_4.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_447d316_3',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.User')) {
                                    // _assetic_447d316_4
                                    if ('/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.User_5.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_447d316_4',);
                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.UserPr')) {
                                        // _assetic_447d316_5
                                        if ('/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.UserPreference_6.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_447d316_5',);
                                        }

                                        // _assetic_447d316_6
                                        if ('/js/compiled/models_part_1_PartKeepr.AuthBundle.Entity.UserProvider_7.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_447d316_6',);
                                        }

                                    }

                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJob')) {
                                // _assetic_447d316_7
                                if ('/js/compiled/models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJob_8.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_447d316_7',);
                                }

                                // _assetic_447d316_8
                                if ('/js/compiled/models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJobQueryField_9.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_447d316_8',);
                                }

                                // _assetic_447d316_9
                                if ('/js/compiled/models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJobUpdateField_10.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_447d316_9',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.C')) {
                                // _assetic_447d316_10
                                if ('/js/compiled/models_part_1_PartKeepr.CategoryBundle.Entity.AbstractCategory_11.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_447d316_10',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.CoreBundle.Entity.')) {
                                    // _assetic_447d316_11
                                    if ('/js/compiled/models_part_1_PartKeepr.CoreBundle.Entity.BaseEntity_12.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 11,  '_format' => 'js',  '_route' => '_assetic_447d316_11',);
                                    }

                                    // _assetic_447d316_12
                                    if ('/js/compiled/models_part_1_PartKeepr.CoreBundle.Entity.SystemNotice_13.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 12,  '_format' => 'js',  '_route' => '_assetic_447d316_12',);
                                    }

                                }

                                // _assetic_447d316_13
                                if ('/js/compiled/models_part_1_PartKeepr.CronLoggerBundle.Entity.CronLogger_14.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 13,  '_format' => 'js',  '_route' => '_assetic_447d316_13',);
                                }

                            }

                            // _assetic_447d316_14
                            if ('/js/compiled/models_part_1_PartKeepr.DistributorBundle.Entity.Distributor_15.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 14,  '_format' => 'js',  '_route' => '_assetic_447d316_14',);
                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.F')) {
                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.FootprintBundle.Entity.Footprint')) {
                                    // _assetic_447d316_15
                                    if ('/js/compiled/models_part_1_PartKeepr.FootprintBundle.Entity.Footprint_16.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 15,  '_format' => 'js',  '_route' => '_assetic_447d316_15',);
                                    }

                                    // _assetic_447d316_16
                                    if ('/js/compiled/models_part_1_PartKeepr.FootprintBundle.Entity.FootprintAttachment_17.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 16,  '_format' => 'js',  '_route' => '_assetic_447d316_16',);
                                    }

                                    // _assetic_447d316_17
                                    if ('/js/compiled/models_part_1_PartKeepr.FootprintBundle.Entity.FootprintCategory_18.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 17,  '_format' => 'js',  '_route' => '_assetic_447d316_17',);
                                    }

                                    // _assetic_447d316_18
                                    if ('/js/compiled/models_part_1_PartKeepr.FootprintBundle.Entity.FootprintImage_19.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 18,  '_format' => 'js',  '_route' => '_assetic_447d316_18',);
                                    }

                                }

                                // _assetic_447d316_19
                                if ('/js/compiled/models_part_1_PartKeepr.FrontendBundle.Entity.GridPreset_20.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 19,  '_format' => 'js',  '_route' => '_assetic_447d316_19',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.Im')) {
                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ImageBundle.Entity.')) {
                                    // _assetic_447d316_20
                                    if ('/js/compiled/models_part_1_PartKeepr.ImageBundle.Entity.CachedImage_21.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 20,  '_format' => 'js',  '_route' => '_assetic_447d316_20',);
                                    }

                                    // _assetic_447d316_21
                                    if ('/js/compiled/models_part_1_PartKeepr.ImageBundle.Entity.Image_22.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 21,  '_format' => 'js',  '_route' => '_assetic_447d316_21',);
                                    }

                                    // _assetic_447d316_22
                                    if ('/js/compiled/models_part_1_PartKeepr.ImageBundle.Entity.TempImage_23.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 22,  '_format' => 'js',  '_route' => '_assetic_447d316_22',);
                                    }

                                }

                                // _assetic_447d316_23
                                if ('/js/compiled/models_part_1_PartKeepr.ImportBundle.Entity.ImportPreset_24.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 23,  '_format' => 'js',  '_route' => '_assetic_447d316_23',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ManufacturerBundle.Entity.Manufacturer')) {
                                // _assetic_447d316_24
                                if ('/js/compiled/models_part_1_PartKeepr.ManufacturerBundle.Entity.Manufacturer_25.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 24,  '_format' => 'js',  '_route' => '_assetic_447d316_24',);
                                }

                                // _assetic_447d316_25
                                if ('/js/compiled/models_part_1_PartKeepr.ManufacturerBundle.Entity.ManufacturerICLogo_26.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 25,  '_format' => 'js',  '_route' => '_assetic_447d316_25',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.P')) {
                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.')) {
                                    // _assetic_447d316_26
                                    if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.MetaPartParameterCriteria_27.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 26,  '_format' => 'js',  '_route' => '_assetic_447d316_26',);
                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.Part')) {
                                        // _assetic_447d316_27
                                        if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.Part_28.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 27,  '_format' => 'js',  '_route' => '_assetic_447d316_27',);
                                        }

                                        // _assetic_447d316_28
                                        if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartAttachment_29.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 28,  '_format' => 'js',  '_route' => '_assetic_447d316_28',);
                                        }

                                        // _assetic_447d316_29
                                        if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartCategory_30.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 29,  '_format' => 'js',  '_route' => '_assetic_447d316_29',);
                                        }

                                        // _assetic_447d316_30
                                        if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartDistributor_31.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 30,  '_format' => 'js',  '_route' => '_assetic_447d316_30',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartM')) {
                                            // _assetic_447d316_31
                                            if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartManufacturer_32.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 31,  '_format' => 'js',  '_route' => '_assetic_447d316_31',);
                                            }

                                            // _assetic_447d316_32
                                            if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartMeasurementUnit_33.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 32,  '_format' => 'js',  '_route' => '_assetic_447d316_32',);
                                            }

                                        }

                                        // _assetic_447d316_33
                                        if ('/js/compiled/models_part_1_PartKeepr.PartBundle.Entity.PartParameter_34.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 33,  '_format' => 'js',  '_route' => '_assetic_447d316_33',);
                                        }

                                    }

                                }

                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.')) {
                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.Project')) {
                                        // _assetic_447d316_34
                                        if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.Project_35.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 34,  '_format' => 'js',  '_route' => '_assetic_447d316_34',);
                                        }

                                        // _assetic_447d316_35
                                        if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ProjectAttachment_36.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 35,  '_format' => 'js',  '_route' => '_assetic_447d316_35',);
                                        }

                                        // _assetic_447d316_36
                                        if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ProjectPart_37.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 36,  '_format' => 'js',  '_route' => '_assetic_447d316_36',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRun')) {
                                            // _assetic_447d316_37
                                            if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRun_38.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 37,  '_format' => 'js',  '_route' => '_assetic_447d316_37',);
                                            }

                                            // _assetic_447d316_38
                                            if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRunPart_39.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 38,  '_format' => 'js',  '_route' => '_assetic_447d316_38',);
                                            }

                                        }

                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.Report')) {
                                        // _assetic_447d316_39
                                        if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.Report_40.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 39,  '_format' => 'js',  '_route' => '_assetic_447d316_39',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ReportP')) {
                                            // _assetic_447d316_40
                                            if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ReportPart_41.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 40,  '_format' => 'js',  '_route' => '_assetic_447d316_40',);
                                            }

                                            // _assetic_447d316_41
                                            if ('/js/compiled/models_part_1_PartKeepr.ProjectBundle.Entity.ReportProject_42.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 41,  '_format' => 'js',  '_route' => '_assetic_447d316_41',);
                                            }

                                        }

                                    }

                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.S')) {
                                // _assetic_447d316_42
                                if ('/js/compiled/models_part_1_PartKeepr.SiPrefixBundle.Entity.SiPrefix_43.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 42,  '_format' => 'js',  '_route' => '_assetic_447d316_42',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.St')) {
                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshot')) {
                                        // _assetic_447d316_43
                                        if ('/js/compiled/models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshot_44.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 43,  '_format' => 'js',  '_route' => '_assetic_447d316_43',);
                                        }

                                        // _assetic_447d316_44
                                        if ('/js/compiled/models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshotUnit_45.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 44,  '_format' => 'js',  '_route' => '_assetic_447d316_44',);
                                        }

                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.Sto')) {
                                        // _assetic_447d316_45
                                        if ('/js/compiled/models_part_1_PartKeepr.StockBundle.Entity.StockEntry_46.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 45,  '_format' => 'js',  '_route' => '_assetic_447d316_45',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocation')) {
                                            // _assetic_447d316_46
                                            if ('/js/compiled/models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocation_47.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 46,  '_format' => 'js',  '_route' => '_assetic_447d316_46',);
                                            }

                                            // _assetic_447d316_47
                                            if ('/js/compiled/models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocationCategory_48.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 47,  '_format' => 'js',  '_route' => '_assetic_447d316_47',);
                                            }

                                            // _assetic_447d316_48
                                            if ('/js/compiled/models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocationImage_49.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 48,  '_format' => 'js',  '_route' => '_assetic_447d316_48',);
                                            }

                                        }

                                    }

                                }

                                // _assetic_447d316_49
                                if ('/js/compiled/models_part_1_PartKeepr.SystemPreferenceBundle.Entity.SystemPreference_50.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 49,  '_format' => 'js',  '_route' => '_assetic_447d316_49',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay')) {
                                // _assetic_447d316_50
                                if ('/js/compiled/models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay_51.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 50,  '_format' => 'js',  '_route' => '_assetic_447d316_50',);
                                }

                                // _assetic_447d316_51
                                if ('/js/compiled/models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDayHistory_52.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 51,  '_format' => 'js',  '_route' => '_assetic_447d316_51',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.U')) {
                                // _assetic_447d316_52
                                if ('/js/compiled/models_part_1_PartKeepr.UnitBundle.Entity.Unit_53.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 52,  '_format' => 'js',  '_route' => '_assetic_447d316_52',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/models_part_1_PartKeepr.UploadedFileBundle.Entity.')) {
                                    // _assetic_447d316_53
                                    if ('/js/compiled/models_part_1_PartKeepr.UploadedFileBundle.Entity.TempUploadedFile_54.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 53,  '_format' => 'js',  '_route' => '_assetic_447d316_53',);
                                    }

                                    // _assetic_447d316_54
                                    if ('/js/compiled/models_part_1_PartKeepr.UploadedFileBundle.Entity.UploadedFile_55.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '447d316',  'pos' => 54,  '_format' => 'js',  '_route' => '_assetic_447d316_54',);
                                    }

                                }

                            }

                        }

                    }

                }

                if (0 === strpos($pathinfo, '/js/compiled/main2')) {
                    // _assetic_1e9c097
                    if ('/js/compiled/main2.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_1e9c097',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/main2_')) {
                        // _assetic_1e9c097_0
                        if ('/js/compiled/main2_Ext.data.Store.getFieldValue_1.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_1e9c097_0',);
                        }

                        // _assetic_1e9c097_1
                        if ('/js/compiled/main2_i18n_2.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_1e9c097_1',);
                        }

                        // _assetic_1e9c097_2
                        if ('/js/compiled/main2_CurrencyStore_3.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_1e9c097_2',);
                        }

                        // _assetic_1e9c097_3
                        if ('/js/compiled/main2_Ext.grid.Column-multipleRendererSupport_4.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_1e9c097_3',);
                        }

                        // _assetic_1e9c097_4
                        if ('/js/compiled/main2_AbstractRenderer_5.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_1e9c097_4',);
                        }

                        // _assetic_1e9c097_5
                        if ('/js/compiled/main2_RendererRegistry_6.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_1e9c097_5',);
                        }

                        // _assetic_1e9c097_6
                        if ('/js/compiled/main2_IconRenderer_7.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_1e9c097_6',);
                        }

                        // _assetic_1e9c097_7
                        if ('/js/compiled/main2_ObjectFieldRenderer_8.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_1e9c097_7',);
                        }

                        // _assetic_1e9c097_8
                        if ('/js/compiled/main2_AttachmentRenderer_9.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_1e9c097_8',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_P')) {
                            // _assetic_1e9c097_9
                            if ('/js/compiled/main2_PartParameterRenderer_10.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_1e9c097_9',);
                            }

                            // _assetic_1e9c097_10
                            if ('/js/compiled/main2_ProjectPartParameterRenderer_11.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_1e9c097_10',);
                            }

                        }

                        // _assetic_1e9c097_11
                        if ('/js/compiled/main2_StockLevelRenderer_12.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 11,  '_format' => 'js',  '_route' => '_assetic_1e9c097_11',);
                        }

                        // _assetic_1e9c097_12
                        if ('/js/compiled/main2_CurrencyRenderer_13.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 12,  '_format' => 'js',  '_route' => '_assetic_1e9c097_12',);
                        }

                        // _assetic_1e9c097_13
                        if ('/js/compiled/main2_InternalIDRenderer_14.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 13,  '_format' => 'js',  '_route' => '_assetic_1e9c097_13',);
                        }

                        // _assetic_1e9c097_14
                        if ('/js/compiled/main2_ReflectionFieldTreeModel_15.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 14,  '_format' => 'js',  '_route' => '_assetic_1e9c097_14',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Entity')) {
                            // _assetic_1e9c097_15
                            if ('/js/compiled/main2_EntityQueryPanel_16.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 15,  '_format' => 'js',  '_route' => '_assetic_1e9c097_15',);
                            }

                            // _assetic_1e9c097_16
                            if ('/js/compiled/main2_EntityPicker_17.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 16,  '_format' => 'js',  '_route' => '_assetic_1e9c097_16',);
                            }

                        }

                        // _assetic_1e9c097_17
                        if ('/js/compiled/main2_PresetComboBox_18.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 17,  '_format' => 'js',  '_route' => '_assetic_1e9c097_17',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Grid')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_GridExporter')) {
                                // _assetic_1e9c097_18
                                if ('/js/compiled/main2_GridExporter_19.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 18,  '_format' => 'js',  '_route' => '_assetic_1e9c097_18',);
                                }

                                // _assetic_1e9c097_19
                                if ('/js/compiled/main2_GridExporterButton_20.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 19,  '_format' => 'js',  '_route' => '_assetic_1e9c097_19',);
                                }

                            }

                            // _assetic_1e9c097_20
                            if ('/js/compiled/main2_GridImporterButton_21.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 20,  '_format' => 'js',  '_route' => '_assetic_1e9c097_20',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Import')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_Importer')) {
                                // _assetic_1e9c097_21
                                if ('/js/compiled/main2_Importer_22.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 21,  '_format' => 'js',  '_route' => '_assetic_1e9c097_21',);
                                }

                                // _assetic_1e9c097_22
                                if ('/js/compiled/main2_ImporterEntityConfiguration_23.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 22,  '_format' => 'js',  '_route' => '_assetic_1e9c097_22',);
                                }

                                // _assetic_1e9c097_23
                                if ('/js/compiled/main2_ImporterOneToManyConfiguration_24.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 23,  '_format' => 'js',  '_route' => '_assetic_1e9c097_23',);
                                }

                                // _assetic_1e9c097_24
                                if ('/js/compiled/main2_ImporterManyToOneConfiguration_25.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 24,  '_format' => 'js',  '_route' => '_assetic_1e9c097_24',);
                                }

                                // _assetic_1e9c097_25
                                if ('/js/compiled/main2_ImporterFieldConfiguration_26.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 25,  '_format' => 'js',  '_route' => '_assetic_1e9c097_25',);
                                }

                            }

                            // _assetic_1e9c097_26
                            if ('/js/compiled/main2_ImportFieldMatcherGrid_27.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 26,  '_format' => 'js',  '_route' => '_assetic_1e9c097_26',);
                            }

                        }

                        // _assetic_1e9c097_27
                        if ('/js/compiled/main2_StoreMenu_28.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 27,  '_format' => 'js',  '_route' => '_assetic_1e9c097_27',);
                        }

                        // _assetic_1e9c097_28
                        if ('/js/compiled/main2_GridPresetButton_29.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 28,  '_format' => 'js',  '_route' => '_assetic_1e9c097_28',);
                        }

                        // _assetic_1e9c097_29
                        if ('/js/compiled/main2_OperatorStore_30.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 29,  '_format' => 'js',  '_route' => '_assetic_1e9c097_29',);
                        }

                        // _assetic_1e9c097_30
                        if ('/js/compiled/main2_Ext.grid.header.Container-addMoreMenu_31.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 30,  '_format' => 'js',  '_route' => '_assetic_1e9c097_30',);
                        }

                        // _assetic_1e9c097_31
                        if ('/js/compiled/main2_Panel_32.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 31,  '_format' => 'js',  '_route' => '_assetic_1e9c097_31',);
                        }

                        // _assetic_1e9c097_32
                        if ('/js/compiled/main2_Window_33.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 32,  '_format' => 'js',  '_route' => '_assetic_1e9c097_32',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Colum')) {
                            // _assetic_1e9c097_33
                            if ('/js/compiled/main2_ColumnListGrid_34.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 33,  '_format' => 'js',  '_route' => '_assetic_1e9c097_33',);
                            }

                            // _assetic_1e9c097_34
                            if ('/js/compiled/main2_ColumProperties_35.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 34,  '_format' => 'js',  '_route' => '_assetic_1e9c097_34',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Renderer')) {
                            // _assetic_1e9c097_35
                            if ('/js/compiled/main2_RenderersGrid_36.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 35,  '_format' => 'js',  '_route' => '_assetic_1e9c097_35',);
                            }

                            // _assetic_1e9c097_36
                            if ('/js/compiled/main2_RendererConfigurationForm_37.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 36,  '_format' => 'js',  '_route' => '_assetic_1e9c097_36',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_FilterExpression')) {
                            // _assetic_1e9c097_37
                            if ('/js/compiled/main2_FilterExpression_38.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 37,  '_format' => 'js',  '_route' => '_assetic_1e9c097_37',);
                            }

                            // _assetic_1e9c097_38
                            if ('/js/compiled/main2_FilterExpressionWindow_39.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 38,  '_format' => 'js',  '_route' => '_assetic_1e9c097_38',);
                            }

                        }

                        // _assetic_1e9c097_39
                        if ('/js/compiled/main2_ModelTreeMaker_40.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 39,  '_format' => 'js',  '_route' => '_assetic_1e9c097_39',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Column')) {
                            // _assetic_1e9c097_40
                            if ('/js/compiled/main2_ColumnRendererConfiguration_41.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 40,  '_format' => 'js',  '_route' => '_assetic_1e9c097_40',);
                            }

                            // _assetic_1e9c097_41
                            if ('/js/compiled/main2_ColumnConfiguration_42.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 41,  '_format' => 'js',  '_route' => '_assetic_1e9c097_41',);
                            }

                        }

                        // _assetic_1e9c097_42
                        if ('/js/compiled/main2_Blob_43.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 42,  '_format' => 'js',  '_route' => '_assetic_1e9c097_42',);
                        }

                        // _assetic_1e9c097_43
                        if ('/js/compiled/main2_FileSaver_44.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 43,  '_format' => 'js',  '_route' => '_assetic_1e9c097_43',);
                        }

                        // _assetic_1e9c097_44
                        if ('/js/compiled/main2_PagingToolbar_45.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 44,  '_format' => 'js',  '_route' => '_assetic_1e9c097_44',);
                        }

                        // _assetic_1e9c097_45
                        if ('/js/compiled/main2_Exporter_46.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 45,  '_format' => 'js',  '_route' => '_assetic_1e9c097_45',);
                        }

                        // _assetic_1e9c097_46
                        if ('/js/compiled/main2_Filter_47.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 46,  '_format' => 'js',  '_route' => '_assetic_1e9c097_46',);
                        }

                        // _assetic_1e9c097_47
                        if ('/js/compiled/main2_LoginManager_48.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 47,  '_format' => 'js',  '_route' => '_assetic_1e9c097_47',);
                        }

                        // _assetic_1e9c097_48
                        if ('/js/compiled/main2_Ext.grid.feature.Summary-selectorFix_49.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 48,  '_format' => 'js',  '_route' => '_assetic_1e9c097_48',);
                        }

                        // _assetic_1e9c097_49
                        if ('/js/compiled/main2_PreferencePlugin_50.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 49,  '_format' => 'js',  '_route' => '_assetic_1e9c097_49',);
                        }

                        // _assetic_1e9c097_50
                        if ('/js/compiled/main2_AuthenticationProvider_51.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 50,  '_format' => 'js',  '_route' => '_assetic_1e9c097_50',);
                        }

                        // _assetic_1e9c097_51
                        if ('/js/compiled/main2_HTTPBasicAuthenticationProvider_52.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 51,  '_format' => 'js',  '_route' => '_assetic_1e9c097_51',);
                        }

                        // _assetic_1e9c097_52
                        if ('/js/compiled/main2_WSSEAuthenticationProvider_53.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 52,  '_format' => 'js',  '_route' => '_assetic_1e9c097_52',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_TipOfTheDay')) {
                            // _assetic_1e9c097_53
                            if ('/js/compiled/main2_TipOfTheDayStore_54.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 53,  '_format' => 'js',  '_route' => '_assetic_1e9c097_53',);
                            }

                            // _assetic_1e9c097_54
                            if ('/js/compiled/main2_TipOfTheDayHistoryStore_55.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 54,  '_format' => 'js',  '_route' => '_assetic_1e9c097_54',);
                            }

                        }

                        // _assetic_1e9c097_55
                        if ('/js/compiled/main2_SystemPreferenceStore_56.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 55,  '_format' => 'js',  '_route' => '_assetic_1e9c097_55',);
                        }

                        // _assetic_1e9c097_56
                        if ('/js/compiled/main2_UserProvidersStore_57.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 56,  '_format' => 'js',  '_route' => '_assetic_1e9c097_56',);
                        }

                        // _assetic_1e9c097_57
                        if ('/js/compiled/main2_MetaPartRenderer_58.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 57,  '_format' => 'js',  '_route' => '_assetic_1e9c097_57',);
                        }

                        // _assetic_1e9c097_58
                        if ('/js/compiled/main2_QuantityRenderer_59.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 58,  '_format' => 'js',  '_route' => '_assetic_1e9c097_58',);
                        }

                        // _assetic_1e9c097_59
                        if ('/js/compiled/main2_RemarksRenderer_60.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 59,  '_format' => 'js',  '_route' => '_assetic_1e9c097_59',);
                        }

                        // _assetic_1e9c097_60
                        if ('/js/compiled/main2_ProjectReportList_61.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 60,  '_format' => 'js',  '_route' => '_assetic_1e9c097_60',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_S')) {
                            // _assetic_1e9c097_61
                            if ('/js/compiled/main2_SystemInformationRecord_62.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 61,  '_format' => 'js',  '_route' => '_assetic_1e9c097_61',);
                            }

                            // _assetic_1e9c097_62
                            if ('/js/compiled/main2_StatisticSample_63.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 62,  '_format' => 'js',  '_route' => '_assetic_1e9c097_62',);
                            }

                        }

                        // _assetic_1e9c097_63
                        if ('/js/compiled/main2_isaac_64.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 63,  '_format' => 'js',  '_route' => '_assetic_1e9c097_63',);
                        }

                        // _assetic_1e9c097_64
                        if ('/js/compiled/main2_bcrypt_65.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 64,  '_format' => 'js',  '_route' => '_assetic_1e9c097_64',);
                        }

                        // _assetic_1e9c097_65
                        if ('/js/compiled/main2_core_66.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 65,  '_format' => 'js',  '_route' => '_assetic_1e9c097_65',);
                        }

                        // _assetic_1e9c097_66
                        if ('/js/compiled/main2_x64-core_67.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 66,  '_format' => 'js',  '_route' => '_assetic_1e9c097_66',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_sha')) {
                            // _assetic_1e9c097_67
                            if ('/js/compiled/main2_sha512_68.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 67,  '_format' => 'js',  '_route' => '_assetic_1e9c097_67',);
                            }

                            // _assetic_1e9c097_68
                            if ('/js/compiled/main2_sha1_69.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 68,  '_format' => 'js',  '_route' => '_assetic_1e9c097_68',);
                            }

                        }

                        // _assetic_1e9c097_69
                        if ('/js/compiled/main2_enc-base64_70.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 69,  '_format' => 'js',  '_route' => '_assetic_1e9c097_69',);
                        }

                        // _assetic_1e9c097_70
                        if ('/js/compiled/main2_Ext.data.Model-EXTJS-15037_71.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 70,  '_format' => 'js',  '_route' => '_assetic_1e9c097_70',);
                        }

                        // _assetic_1e9c097_71
                        if ('/js/compiled/main2_JsonWithAssociationsWriter_72.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 71,  '_format' => 'js',  '_route' => '_assetic_1e9c097_71',);
                        }

                        // _assetic_1e9c097_72
                        if ('/js/compiled/main2_PartKeepr_73.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 72,  '_format' => 'js',  '_route' => '_assetic_1e9c097_72',);
                        }

                        // _assetic_1e9c097_73
                        if ('/js/compiled/main2_AppliedFiltersToolbar_74.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 73,  '_format' => 'js',  '_route' => '_assetic_1e9c097_73',);
                        }

                        // _assetic_1e9c097_74
                        if ('/js/compiled/main2_FilterPlugin_75.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 74,  '_format' => 'js',  '_route' => '_assetic_1e9c097_74',);
                        }

                        // _assetic_1e9c097_75
                        if ('/js/compiled/main2_compat_76.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 75,  '_format' => 'js',  '_route' => '_assetic_1e9c097_75',);
                        }

                        // _assetic_1e9c097_76
                        if ('/js/compiled/main2_NumericField_77.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 76,  '_format' => 'js',  '_route' => '_assetic_1e9c097_76',);
                        }

                        // _assetic_1e9c097_77
                        if ('/js/compiled/main2_TreePicker_78.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 77,  '_format' => 'js',  '_route' => '_assetic_1e9c097_77',);
                        }

                        // _assetic_1e9c097_78
                        if ('/js/compiled/main2_CurrencyNumberField_79.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 78,  '_format' => 'js',  '_route' => '_assetic_1e9c097_78',);
                        }

                        // _assetic_1e9c097_79
                        if ('/js/compiled/main2_SearchField_80.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 79,  '_format' => 'js',  '_route' => '_assetic_1e9c097_79',);
                        }

                        // _assetic_1e9c097_80
                        if ('/js/compiled/main2_ClearableComboBox_81.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 80,  '_format' => 'js',  '_route' => '_assetic_1e9c097_80',);
                        }

                        // _assetic_1e9c097_81
                        if ('/js/compiled/main2_ServiceCall_82.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 81,  '_format' => 'js',  '_route' => '_assetic_1e9c097_81',);
                        }

                        // _assetic_1e9c097_82
                        if ('/js/compiled/main2_locale_83.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 82,  '_format' => 'js',  '_route' => '_assetic_1e9c097_82',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_FieldSelect')) {
                            // _assetic_1e9c097_83
                            if ('/js/compiled/main2_FieldSelectorWindow_84.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 83,  '_format' => 'js',  '_route' => '_assetic_1e9c097_83',);
                            }

                            // _assetic_1e9c097_84
                            if ('/js/compiled/main2_FieldSelectTrigger_85.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 84,  '_format' => 'js',  '_route' => '_assetic_1e9c097_84',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Ext.')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_Ext.grid.plugin.')) {
                                // _assetic_1e9c097_85
                                if ('/js/compiled/main2_Ext.grid.plugin.CellEditing-associationSupport_86.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 85,  '_format' => 'js',  '_route' => '_assetic_1e9c097_85',);
                                }

                                // _assetic_1e9c097_86
                                if ('/js/compiled/main2_Ext.grid.plugin.Editing-associationSupport_87.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 86,  '_format' => 'js',  '_route' => '_assetic_1e9c097_86',);
                                }

                            }

                            // _assetic_1e9c097_87
                            if ('/js/compiled/main2_Ext.form.field.ComboBox-associationSupport_88.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 87,  '_format' => 'js',  '_route' => '_assetic_1e9c097_87',);
                            }

                        }

                        // _assetic_1e9c097_88
                        if ('/js/compiled/main2_HydraException_89.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 88,  '_format' => 'js',  '_route' => '_assetic_1e9c097_88',);
                        }

                        // _assetic_1e9c097_89
                        if ('/js/compiled/main2_ExceptionWindow_90.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 89,  '_format' => 'js',  '_route' => '_assetic_1e9c097_89',);
                        }

                        // _assetic_1e9c097_90
                        if ('/js/compiled/main2_FileUploadDialog_91.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 90,  '_format' => 'js',  '_route' => '_assetic_1e9c097_90',);
                        }

                        // _assetic_1e9c097_91
                        if ('/js/compiled/main2_RememberChoiceMessageBox_92.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 91,  '_format' => 'js',  '_route' => '_assetic_1e9c097_91',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Hydra')) {
                            // _assetic_1e9c097_92
                            if ('/js/compiled/main2_HydraProxy_93.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 92,  '_format' => 'js',  '_route' => '_assetic_1e9c097_92',);
                            }

                            // _assetic_1e9c097_93
                            if ('/js/compiled/main2_HydraReader_94.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 93,  '_format' => 'js',  '_route' => '_assetic_1e9c097_93',);
                            }

                            // _assetic_1e9c097_94
                            if ('/js/compiled/main2_HydraTreeReader_95.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 94,  '_format' => 'js',  '_route' => '_assetic_1e9c097_94',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Part')) {
                            // _assetic_1e9c097_95
                            if ('/js/compiled/main2_PartCategoryStore_96.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 95,  '_format' => 'js',  '_route' => '_assetic_1e9c097_95',);
                            }

                            // _assetic_1e9c097_96
                            if ('/js/compiled/main2_PartStore_97.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 96,  '_format' => 'js',  '_route' => '_assetic_1e9c097_96',);
                            }

                        }

                        // _assetic_1e9c097_97
                        if ('/js/compiled/main2_FootprintCategoryStore_98.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 97,  '_format' => 'js',  '_route' => '_assetic_1e9c097_97',);
                        }

                        // _assetic_1e9c097_98
                        if ('/js/compiled/main2_StorageLocationCategoryStore_99.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 98,  '_format' => 'js',  '_route' => '_assetic_1e9c097_98',);
                        }

                        // _assetic_1e9c097_99
                        if ('/js/compiled/main2_BarcodeScannerActionsStore_100.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 99,  '_format' => 'js',  '_route' => '_assetic_1e9c097_99',);
                        }

                        // _assetic_1e9c097_100
                        if ('/js/compiled/main2_UserPreferenceStore_101.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 100,  '_format' => 'js',  '_route' => '_assetic_1e9c097_100',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Ext.')) {
                            // _assetic_1e9c097_101
                            if ('/js/compiled/main2_Ext.tree.View-missingMethods_102.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 101,  '_format' => 'js',  '_route' => '_assetic_1e9c097_101',);
                            }

                            // _assetic_1e9c097_102
                            if ('/js/compiled/main2_Ext.form.Basic-AssociationSupport_103.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 102,  '_format' => 'js',  '_route' => '_assetic_1e9c097_102',);
                            }

                            // _assetic_1e9c097_103
                            if ('/js/compiled/main2_Ext.ux.TreePicker-setValueWithObject_104.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 103,  '_format' => 'js',  '_route' => '_assetic_1e9c097_103',);
                            }

                        }

                        // _assetic_1e9c097_104
                        if ('/js/compiled/main2_OperatorComboBox_105.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 104,  '_format' => 'js',  '_route' => '_assetic_1e9c097_104',);
                        }

                        // _assetic_1e9c097_105
                        if ('/js/compiled/main2_BaseAction_106.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 105,  '_format' => 'js',  '_route' => '_assetic_1e9c097_105',);
                        }

                        // _assetic_1e9c097_106
                        if ('/js/compiled/main2_LogoutAction_107.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 106,  '_format' => 'js',  '_route' => '_assetic_1e9c097_106',);
                        }

                        // _assetic_1e9c097_107
                        if ('/js/compiled/main2_Statusbar_108.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 107,  '_format' => 'js',  '_route' => '_assetic_1e9c097_107',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Login')) {
                            // _assetic_1e9c097_108
                            if ('/js/compiled/main2_LoginController_109.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 108,  '_format' => 'js',  '_route' => '_assetic_1e9c097_108',);
                            }

                            // _assetic_1e9c097_109
                            if ('/js/compiled/main2_LoginDialog_110.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 109,  '_format' => 'js',  '_route' => '_assetic_1e9c097_109',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Part')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_PartI')) {
                                // _assetic_1e9c097_110
                                if ('/js/compiled/main2_PartImageDisplay_111.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 110,  '_format' => 'js',  '_route' => '_assetic_1e9c097_110',);
                                }

                                // _assetic_1e9c097_111
                                if ('/js/compiled/main2_PartInfoGrid_112.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 111,  '_format' => 'js',  '_route' => '_assetic_1e9c097_111',);
                                }

                            }

                            // _assetic_1e9c097_112
                            if ('/js/compiled/main2_PartsManager_113.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 112,  '_format' => 'js',  '_route' => '_assetic_1e9c097_112',);
                            }

                            // _assetic_1e9c097_113
                            if ('/js/compiled/main2_PartEditorWindow_114.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 113,  '_format' => 'js',  '_route' => '_assetic_1e9c097_113',);
                            }

                            // _assetic_1e9c097_114
                            if ('/js/compiled/main2_PartDisplay_115.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 114,  '_format' => 'js',  '_route' => '_assetic_1e9c097_114',);
                            }

                            // _assetic_1e9c097_115
                            if ('/js/compiled/main2_PartStockWindow_116.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 115,  '_format' => 'js',  '_route' => '_assetic_1e9c097_115',);
                            }

                            // _assetic_1e9c097_116
                            if ('/js/compiled/main2_PartFilterPanel_117.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 116,  '_format' => 'js',  '_route' => '_assetic_1e9c097_116',);
                            }

                        }

                        // _assetic_1e9c097_117
                        if ('/js/compiled/main2_MetaPartEditorWindow_118.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 117,  '_format' => 'js',  '_route' => '_assetic_1e9c097_117',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_PartParameterSearch')) {
                            // _assetic_1e9c097_118
                            if ('/js/compiled/main2_PartParameterSearch_119.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 118,  '_format' => 'js',  '_route' => '_assetic_1e9c097_118',);
                            }

                            // _assetic_1e9c097_119
                            if ('/js/compiled/main2_PartParameterSearchWindow_120.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 119,  '_format' => 'js',  '_route' => '_assetic_1e9c097_119',);
                            }

                        }

                        // _assetic_1e9c097_120
                        if ('/js/compiled/main2_MenuBar_121.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 120,  '_format' => 'js',  '_route' => '_assetic_1e9c097_120',);
                        }

                        // _assetic_1e9c097_121
                        if ('/js/compiled/main2_BaseGrid_122.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 121,  '_format' => 'js',  '_route' => '_assetic_1e9c097_121',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Part')) {
                            // _assetic_1e9c097_122
                            if ('/js/compiled/main2_PartParameterGrid_123.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 122,  '_format' => 'js',  '_route' => '_assetic_1e9c097_122',);
                            }

                            // _assetic_1e9c097_123
                            if ('/js/compiled/main2_PartDistributorGrid_124.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 123,  '_format' => 'js',  '_route' => '_assetic_1e9c097_123',);
                            }

                            // _assetic_1e9c097_124
                            if ('/js/compiled/main2_PartManufacturerGrid_125.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 124,  '_format' => 'js',  '_route' => '_assetic_1e9c097_124',);
                            }

                        }

                        // _assetic_1e9c097_125
                        if ('/js/compiled/main2_AbstractStockHistoryGrid_126.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 125,  '_format' => 'js',  '_route' => '_assetic_1e9c097_125',);
                        }

                        // _assetic_1e9c097_126
                        if ('/js/compiled/main2_PartStockHistory_127.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 126,  '_format' => 'js',  '_route' => '_assetic_1e9c097_126',);
                        }

                        // _assetic_1e9c097_127
                        if ('/js/compiled/main2_StockHistoryGrid_128.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 127,  '_format' => 'js',  '_route' => '_assetic_1e9c097_127',);
                        }

                        // _assetic_1e9c097_128
                        if ('/js/compiled/main2_UserPreferenceGrid_129.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 128,  '_format' => 'js',  '_route' => '_assetic_1e9c097_128',);
                        }

                        // _assetic_1e9c097_129
                        if ('/js/compiled/main2_AttachmentGrid_130.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 129,  '_format' => 'js',  '_route' => '_assetic_1e9c097_129',);
                        }

                        // _assetic_1e9c097_130
                        if ('/js/compiled/main2_PartAttachmentGrid_131.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 130,  '_format' => 'js',  '_route' => '_assetic_1e9c097_130',);
                        }

                        // _assetic_1e9c097_131
                        if ('/js/compiled/main2_FootprintAttachmentGrid_132.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 131,  '_format' => 'js',  '_route' => '_assetic_1e9c097_131',);
                        }

                        // _assetic_1e9c097_132
                        if ('/js/compiled/main2_ProjectAttachmentGrid_133.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 132,  '_format' => 'js',  '_route' => '_assetic_1e9c097_132',);
                        }

                        // _assetic_1e9c097_133
                        if ('/js/compiled/main2_EditorGrid_134.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 133,  '_format' => 'js',  '_route' => '_assetic_1e9c097_133',);
                        }

                        // _assetic_1e9c097_134
                        if ('/js/compiled/main2_DistributorGrid_135.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 134,  '_format' => 'js',  '_route' => '_assetic_1e9c097_134',);
                        }

                        // _assetic_1e9c097_135
                        if ('/js/compiled/main2_PartsGrid_136.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 135,  '_format' => 'js',  '_route' => '_assetic_1e9c097_135',);
                        }

                        // _assetic_1e9c097_136
                        if ('/js/compiled/main2_ManufacturerGrid_137.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 136,  '_format' => 'js',  '_route' => '_assetic_1e9c097_136',);
                        }

                        // _assetic_1e9c097_137
                        if ('/js/compiled/main2_PartMeasurementUnitGrid_138.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 137,  '_format' => 'js',  '_route' => '_assetic_1e9c097_137',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_U')) {
                            // _assetic_1e9c097_138
                            if ('/js/compiled/main2_UnitGrid_139.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 138,  '_format' => 'js',  '_route' => '_assetic_1e9c097_138',);
                            }

                            // _assetic_1e9c097_139
                            if ('/js/compiled/main2_UserGrid_140.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 139,  '_format' => 'js',  '_route' => '_assetic_1e9c097_139',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_S')) {
                            // _assetic_1e9c097_140
                            if ('/js/compiled/main2_SystemNoticeGrid_141.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 140,  '_format' => 'js',  '_route' => '_assetic_1e9c097_140',);
                            }

                            // _assetic_1e9c097_141
                            if ('/js/compiled/main2_StorageLocationGrid_142.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 141,  '_format' => 'js',  '_route' => '_assetic_1e9c097_141',);
                            }

                        }

                        // _assetic_1e9c097_142
                        if ('/js/compiled/main2_ProjectGrid_143.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 142,  '_format' => 'js',  '_route' => '_assetic_1e9c097_142',);
                        }

                        // _assetic_1e9c097_143
                        if ('/js/compiled/main2_MessageLog_144.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 143,  '_format' => 'js',  '_route' => '_assetic_1e9c097_143',);
                        }

                        // _assetic_1e9c097_144
                        if ('/js/compiled/main2_ProjectPartGrid_145.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 144,  '_format' => 'js',  '_route' => '_assetic_1e9c097_144',);
                        }

                        // _assetic_1e9c097_145
                        if ('/js/compiled/main2_SystemInformationGrid_146.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 145,  '_format' => 'js',  '_route' => '_assetic_1e9c097_145',);
                        }

                        // _assetic_1e9c097_146
                        if ('/js/compiled/main2_TimeDisplay_147.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 146,  '_format' => 'js',  '_route' => '_assetic_1e9c097_146',);
                        }

                        // _assetic_1e9c097_147
                        if ('/js/compiled/main2_Menu_148.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 147,  '_format' => 'js',  '_route' => '_assetic_1e9c097_147',);
                        }

                        // _assetic_1e9c097_148
                        if ('/js/compiled/main2_UrlTextField_149.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 148,  '_format' => 'js',  '_route' => '_assetic_1e9c097_148',);
                        }

                        // _assetic_1e9c097_149
                        if ('/js/compiled/main2_RemotePartComboBox_150.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 149,  '_format' => 'js',  '_route' => '_assetic_1e9c097_149',);
                        }

                        // _assetic_1e9c097_150
                        if ('/js/compiled/main2_FadingButton_151.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 150,  '_format' => 'js',  '_route' => '_assetic_1e9c097_150',);
                        }

                        // _assetic_1e9c097_151
                        if ('/js/compiled/main2_SystemNoticeButton_152.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 151,  '_format' => 'js',  '_route' => '_assetic_1e9c097_151',);
                        }

                        // _assetic_1e9c097_152
                        if ('/js/compiled/main2_ConnectionButton_153.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 152,  '_format' => 'js',  '_route' => '_assetic_1e9c097_152',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_SiUnit')) {
                            // _assetic_1e9c097_153
                            if ('/js/compiled/main2_SiUnitList_154.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 153,  '_format' => 'js',  '_route' => '_assetic_1e9c097_153',);
                            }

                            // _assetic_1e9c097_154
                            if ('/js/compiled/main2_SiUnitField_155.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 154,  '_format' => 'js',  '_route' => '_assetic_1e9c097_154',);
                            }

                        }

                        // _assetic_1e9c097_155
                        if ('/js/compiled/main2_CategoryComboBox_156.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 155,  '_format' => 'js',  '_route' => '_assetic_1e9c097_155',);
                        }

                        // _assetic_1e9c097_156
                        if ('/js/compiled/main2_PartParameterComboBox_157.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 156,  '_format' => 'js',  '_route' => '_assetic_1e9c097_156',);
                        }

                        // _assetic_1e9c097_157
                        if ('/js/compiled/main2_RemoteImageField_158.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 157,  '_format' => 'js',  '_route' => '_assetic_1e9c097_157',);
                        }

                        // _assetic_1e9c097_158
                        if ('/js/compiled/main2_WebcamPanel_159.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 158,  '_format' => 'js',  '_route' => '_assetic_1e9c097_158',);
                        }

                        // _assetic_1e9c097_159
                        if ('/js/compiled/main2_ReloadableComboBox_160.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 159,  '_format' => 'js',  '_route' => '_assetic_1e9c097_159',);
                        }

                        // _assetic_1e9c097_160
                        if ('/js/compiled/main2_DistributorComboBox_161.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 160,  '_format' => 'js',  '_route' => '_assetic_1e9c097_160',);
                        }

                        // _assetic_1e9c097_161
                        if ('/js/compiled/main2_UserComboBox_162.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 161,  '_format' => 'js',  '_route' => '_assetic_1e9c097_161',);
                        }

                        // _assetic_1e9c097_162
                        if ('/js/compiled/main2_FootprintComboBox_163.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 162,  '_format' => 'js',  '_route' => '_assetic_1e9c097_162',);
                        }

                        // _assetic_1e9c097_163
                        if ('/js/compiled/main2_ManufacturerComboBox_164.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 163,  '_format' => 'js',  '_route' => '_assetic_1e9c097_163',);
                        }

                        // _assetic_1e9c097_164
                        if ('/js/compiled/main2_UnitComboBox_165.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 164,  '_format' => 'js',  '_route' => '_assetic_1e9c097_164',);
                        }

                        // _assetic_1e9c097_165
                        if ('/js/compiled/main2_PartUnitComboBox_166.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 165,  '_format' => 'js',  '_route' => '_assetic_1e9c097_165',);
                        }

                        // _assetic_1e9c097_166
                        if ('/js/compiled/main2_StorageLocationComboBox_167.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 166,  '_format' => 'js',  '_route' => '_assetic_1e9c097_166',);
                        }

                        // _assetic_1e9c097_167
                        if ('/js/compiled/main2_ResistorCalculator_168.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 167,  '_format' => 'js',  '_route' => '_assetic_1e9c097_167',);
                        }

                        // _assetic_1e9c097_168
                        if ('/js/compiled/main2_SiUnitCombo_169.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 168,  '_format' => 'js',  '_route' => '_assetic_1e9c097_168',);
                        }

                        // _assetic_1e9c097_169
                        if ('/js/compiled/main2_CharPickerMenu_170.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 169,  '_format' => 'js',  '_route' => '_assetic_1e9c097_169',);
                        }

                        // _assetic_1e9c097_170
                        if ('/js/compiled/main2_Editor_171.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 170,  '_format' => 'js',  '_route' => '_assetic_1e9c097_170',);
                        }

                        // _assetic_1e9c097_171
                        if ('/js/compiled/main2_DistributorEditor_172.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 171,  '_format' => 'js',  '_route' => '_assetic_1e9c097_171',);
                        }

                        // _assetic_1e9c097_172
                        if ('/js/compiled/main2_PartEditor_173.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 172,  '_format' => 'js',  '_route' => '_assetic_1e9c097_172',);
                        }

                        // _assetic_1e9c097_173
                        if ('/js/compiled/main2_ManufacturerEditor_174.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 173,  '_format' => 'js',  '_route' => '_assetic_1e9c097_173',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Part')) {
                            // _assetic_1e9c097_174
                            if ('/js/compiled/main2_PartParameterValueEditor_175.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 174,  '_format' => 'js',  '_route' => '_assetic_1e9c097_174',);
                            }

                            // _assetic_1e9c097_175
                            if ('/js/compiled/main2_PartMeasurementUnitEditor_176.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 175,  '_format' => 'js',  '_route' => '_assetic_1e9c097_175',);
                            }

                        }

                        // _assetic_1e9c097_176
                        if ('/js/compiled/main2_UnitEditor_177.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 176,  '_format' => 'js',  '_route' => '_assetic_1e9c097_176',);
                        }

                        // _assetic_1e9c097_177
                        if ('/js/compiled/main2_FootprintEditor_178.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 177,  '_format' => 'js',  '_route' => '_assetic_1e9c097_177',);
                        }

                        // _assetic_1e9c097_178
                        if ('/js/compiled/main2_UserEditor_179.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 178,  '_format' => 'js',  '_route' => '_assetic_1e9c097_178',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_S')) {
                            // _assetic_1e9c097_179
                            if ('/js/compiled/main2_SystemNoticeEditor_180.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 179,  '_format' => 'js',  '_route' => '_assetic_1e9c097_179',);
                            }

                            // _assetic_1e9c097_180
                            if ('/js/compiled/main2_StorageLocationEditor_181.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 180,  '_format' => 'js',  '_route' => '_assetic_1e9c097_180',);
                            }

                        }

                        // _assetic_1e9c097_181
                        if ('/js/compiled/main2_MetaPartEditor_182.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 181,  '_format' => 'js',  '_route' => '_assetic_1e9c097_181',);
                        }

                        // _assetic_1e9c097_182
                        if ('/js/compiled/main2_ProjectEditor_183.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 182,  '_format' => 'js',  '_route' => '_assetic_1e9c097_182',);
                        }

                        // _assetic_1e9c097_183
                        if ('/js/compiled/main2_EditorComponent_184.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 183,  '_format' => 'js',  '_route' => '_assetic_1e9c097_183',);
                        }

                        // _assetic_1e9c097_184
                        if ('/js/compiled/main2_DistributorEditorComponent_185.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 184,  '_format' => 'js',  '_route' => '_assetic_1e9c097_184',);
                        }

                        // _assetic_1e9c097_185
                        if ('/js/compiled/main2_ManufacturerEditorComponent_186.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 185,  '_format' => 'js',  '_route' => '_assetic_1e9c097_185',);
                        }

                        // _assetic_1e9c097_186
                        if ('/js/compiled/main2_PartMeasurementUnitEditorComponent_187.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 186,  '_format' => 'js',  '_route' => '_assetic_1e9c097_186',);
                        }

                        // _assetic_1e9c097_187
                        if ('/js/compiled/main2_UnitEditorComponent_188.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 187,  '_format' => 'js',  '_route' => '_assetic_1e9c097_187',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Footprint')) {
                            // _assetic_1e9c097_188
                            if ('/js/compiled/main2_FootprintEditorComponent_189.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 188,  '_format' => 'js',  '_route' => '_assetic_1e9c097_188',);
                            }

                            // _assetic_1e9c097_189
                            if ('/js/compiled/main2_FootprintNavigation_190.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 189,  '_format' => 'js',  '_route' => '_assetic_1e9c097_189',);
                            }

                            // _assetic_1e9c097_190
                            if ('/js/compiled/main2_FootprintGrid_191.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 190,  '_format' => 'js',  '_route' => '_assetic_1e9c097_190',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_BatchJob')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_BatchJobEditor')) {
                                // _assetic_1e9c097_191
                                if ('/js/compiled/main2_BatchJobEditor_192.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 191,  '_format' => 'js',  '_route' => '_assetic_1e9c097_191',);
                                }

                                // _assetic_1e9c097_192
                                if ('/js/compiled/main2_BatchJobEditorComponent_193.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 192,  '_format' => 'js',  '_route' => '_assetic_1e9c097_192',);
                                }

                            }

                            // _assetic_1e9c097_193
                            if ('/js/compiled/main2_BatchJobGrid_194.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 193,  '_format' => 'js',  '_route' => '_assetic_1e9c097_193',);
                            }

                            if (0 === strpos($pathinfo, '/js/compiled/main2_BatchJobUpdateExpression')) {
                                // _assetic_1e9c097_194
                                if ('/js/compiled/main2_BatchJobUpdateExpression_195.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 194,  '_format' => 'js',  '_route' => '_assetic_1e9c097_194',);
                                }

                                // _assetic_1e9c097_195
                                if ('/js/compiled/main2_BatchJobUpdateExpressionWindow_196.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 195,  '_format' => 'js',  '_route' => '_assetic_1e9c097_195',);
                                }

                            }

                            // _assetic_1e9c097_196
                            if ('/js/compiled/main2_BatchJobExecutionWindow_197.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 196,  '_format' => 'js',  '_route' => '_assetic_1e9c097_196',);
                            }

                        }

                        // _assetic_1e9c097_197
                        if ('/js/compiled/main2_UserEditorComponent_198.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 197,  '_format' => 'js',  '_route' => '_assetic_1e9c097_197',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_S')) {
                            // _assetic_1e9c097_198
                            if ('/js/compiled/main2_SystemNoticeEditorComponent_199.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 198,  '_format' => 'js',  '_route' => '_assetic_1e9c097_198',);
                            }

                            // _assetic_1e9c097_199
                            if ('/js/compiled/main2_StorageLocationEditorComponent_200.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 199,  '_format' => 'js',  '_route' => '_assetic_1e9c097_199',);
                            }

                        }

                        // _assetic_1e9c097_200
                        if ('/js/compiled/main2_ProjectEditorComponent_201.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 200,  '_format' => 'js',  '_route' => '_assetic_1e9c097_200',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_StorageLocation')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_StorageLocationMultiAdd')) {
                                // _assetic_1e9c097_201
                                if ('/js/compiled/main2_StorageLocationMultiAddWindow_202.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 201,  '_format' => 'js',  '_route' => '_assetic_1e9c097_201',);
                                }

                                // _assetic_1e9c097_202
                                if ('/js/compiled/main2_StorageLocationMultiAddDialog_203.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 202,  '_format' => 'js',  '_route' => '_assetic_1e9c097_202',);
                                }

                            }

                            // _assetic_1e9c097_203
                            if ('/js/compiled/main2_StorageLocationNavigation_204.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 203,  '_format' => 'js',  '_route' => '_assetic_1e9c097_203',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_MetaPart')) {
                            // _assetic_1e9c097_204
                            if ('/js/compiled/main2_MetaPartSubgrid_205.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 204,  '_format' => 'js',  '_route' => '_assetic_1e9c097_204',);
                            }

                            // _assetic_1e9c097_205
                            if ('/js/compiled/main2_MetaPartRowExpander_206.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 205,  '_format' => 'js',  '_route' => '_assetic_1e9c097_205',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_ProjectReport')) {
                            // _assetic_1e9c097_206
                            if ('/js/compiled/main2_ProjectReportList_207.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 206,  '_format' => 'js',  '_route' => '_assetic_1e9c097_206',);
                            }

                            // _assetic_1e9c097_207
                            if ('/js/compiled/main2_ProjectReport_208.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 207,  '_format' => 'js',  '_route' => '_assetic_1e9c097_207',);
                            }

                            // _assetic_1e9c097_208
                            if ('/js/compiled/main2_ProjectReportResultGrid_209.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 208,  '_format' => 'js',  '_route' => '_assetic_1e9c097_208',);
                            }

                            // _assetic_1e9c097_209
                            if ('/js/compiled/main2_ProjectReportGrid_210.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 209,  '_format' => 'js',  '_route' => '_assetic_1e9c097_209',);
                            }

                        }

                        // _assetic_1e9c097_210
                        if ('/js/compiled/main2_MetaPartAvailabilityRenderer_211.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 210,  '_format' => 'js',  '_route' => '_assetic_1e9c097_210',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_S')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_StatisticsChart')) {
                                // _assetic_1e9c097_211
                                if ('/js/compiled/main2_StatisticsChart_212.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 211,  '_format' => 'js',  '_route' => '_assetic_1e9c097_211',);
                                }

                                // _assetic_1e9c097_212
                                if ('/js/compiled/main2_StatisticsChartPanel_213.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 212,  '_format' => 'js',  '_route' => '_assetic_1e9c097_212',);
                                }

                            }

                            // _assetic_1e9c097_213
                            if ('/js/compiled/main2_SummaryStatisticsPanel_214.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 213,  '_format' => 'js',  '_route' => '_assetic_1e9c097_213',);
                            }

                            // _assetic_1e9c097_214
                            if ('/js/compiled/main2_SystemNoticeStore_215.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 214,  '_format' => 'js',  '_route' => '_assetic_1e9c097_214',);
                            }

                        }

                        // _assetic_1e9c097_215
                        if ('/js/compiled/main2_TipOfTheDayWindow_216.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 215,  '_format' => 'js',  '_route' => '_assetic_1e9c097_215',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Category')) {
                            // _assetic_1e9c097_216
                            if ('/js/compiled/main2_CategoryTree_217.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 216,  '_format' => 'js',  '_route' => '_assetic_1e9c097_216',);
                            }

                            // _assetic_1e9c097_217
                            if ('/js/compiled/main2_CategoryEditorTree_218.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 217,  '_format' => 'js',  '_route' => '_assetic_1e9c097_217',);
                            }

                        }

                        // _assetic_1e9c097_218
                        if ('/js/compiled/main2_StorageLocationTree_219.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 218,  '_format' => 'js',  '_route' => '_assetic_1e9c097_218',);
                        }

                        // _assetic_1e9c097_219
                        if ('/js/compiled/main2_PartCategoryTree_220.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 219,  '_format' => 'js',  '_route' => '_assetic_1e9c097_219',);
                        }

                        // _assetic_1e9c097_220
                        if ('/js/compiled/main2_FootprintTree_221.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 220,  '_format' => 'js',  '_route' => '_assetic_1e9c097_220',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_C')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_CategoryEditor')) {
                                // _assetic_1e9c097_221
                                if ('/js/compiled/main2_CategoryEditorWindow_222.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 221,  '_format' => 'js',  '_route' => '_assetic_1e9c097_221',);
                                }

                                // _assetic_1e9c097_222
                                if ('/js/compiled/main2_CategoryEditorForm_223.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 222,  '_format' => 'js',  '_route' => '_assetic_1e9c097_222',);
                                }

                            }

                            // _assetic_1e9c097_223
                            if ('/js/compiled/main2_CharPicker_224.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 223,  '_format' => 'js',  '_route' => '_assetic_1e9c097_223',);
                            }

                        }

                        // _assetic_1e9c097_224
                        if ('/js/compiled/main2_StorageLocationPicker_225.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 224,  '_format' => 'js',  '_route' => '_assetic_1e9c097_224',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Panel_22')) {
                            // _assetic_1e9c097_225
                            if ('/js/compiled/main2_Panel_226.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 225,  '_format' => 'js',  '_route' => '_assetic_1e9c097_225',);
                            }

                            // _assetic_1e9c097_226
                            if ('/js/compiled/main2_Panel_227.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 226,  '_format' => 'js',  '_route' => '_assetic_1e9c097_226',);
                            }

                            // _assetic_1e9c097_227
                            if ('/js/compiled/main2_Panel_228.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 227,  '_format' => 'js',  '_route' => '_assetic_1e9c097_227',);
                            }

                        }

                        // _assetic_1e9c097_228
                        if ('/js/compiled/main2_Tree_229.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 228,  '_format' => 'js',  '_route' => '_assetic_1e9c097_228',);
                        }

                        // _assetic_1e9c097_229
                        if ('/js/compiled/main2_PreferenceEditor_230.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 229,  '_format' => 'js',  '_route' => '_assetic_1e9c097_229',);
                        }

                        // _assetic_1e9c097_230
                        if ('/js/compiled/main2_FulltextSearch_231.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 230,  '_format' => 'js',  '_route' => '_assetic_1e9c097_230',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_RequiredPart')) {
                            // _assetic_1e9c097_231
                            if ('/js/compiled/main2_RequiredPartFields_232.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 231,  '_format' => 'js',  '_route' => '_assetic_1e9c097_231',);
                            }

                            // _assetic_1e9c097_232
                            if ('/js/compiled/main2_RequiredPartManufacturerFields_233.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 232,  '_format' => 'js',  '_route' => '_assetic_1e9c097_232',);
                            }

                            // _assetic_1e9c097_233
                            if ('/js/compiled/main2_RequiredPartDistributorFields_234.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 233,  '_format' => 'js',  '_route' => '_assetic_1e9c097_233',);
                            }

                        }

                        // _assetic_1e9c097_234
                        if ('/js/compiled/main2_BarcodeScannerConfiguration_235.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 234,  '_format' => 'js',  '_route' => '_assetic_1e9c097_234',);
                        }

                        // _assetic_1e9c097_235
                        if ('/js/compiled/main2_ActionsConfiguration_236.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 235,  '_format' => 'js',  '_route' => '_assetic_1e9c097_235',);
                        }

                        // _assetic_1e9c097_236
                        if ('/js/compiled/main2_TipOfTheDayConfiguration_237.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 236,  '_format' => 'js',  '_route' => '_assetic_1e9c097_236',);
                        }

                        // _assetic_1e9c097_237
                        if ('/js/compiled/main2_FormattingConfiguration_238.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 237,  '_format' => 'js',  '_route' => '_assetic_1e9c097_237',);
                        }

                        // _assetic_1e9c097_238
                        if ('/js/compiled/main2_DisplayConfiguration_239.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 238,  '_format' => 'js',  '_route' => '_assetic_1e9c097_238',);
                        }

                        // _assetic_1e9c097_239
                        if ('/js/compiled/main2_StockConfiguration_240.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 239,  '_format' => 'js',  '_route' => '_assetic_1e9c097_239',);
                        }

                        // _assetic_1e9c097_240
                        if ('/js/compiled/main2_PasswordConfiguration_241.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 240,  '_format' => 'js',  '_route' => '_assetic_1e9c097_240',);
                        }

                        // _assetic_1e9c097_241
                        if ('/js/compiled/main2_OctoPartConfiguration_242.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 241,  '_format' => 'js',  '_route' => '_assetic_1e9c097_241',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_ProjectRun')) {
                            // _assetic_1e9c097_242
                            if ('/js/compiled/main2_ProjectRunEditor_243.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 242,  '_format' => 'js',  '_route' => '_assetic_1e9c097_242',);
                            }

                            // _assetic_1e9c097_243
                            if ('/js/compiled/main2_ProjectRunGrid_244.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 243,  '_format' => 'js',  '_route' => '_assetic_1e9c097_243',);
                            }

                            // _assetic_1e9c097_244
                            if ('/js/compiled/main2_ProjectRunEditorComponent_245.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 244,  '_format' => 'js',  '_route' => '_assetic_1e9c097_244',);
                            }

                        }

                        // _assetic_1e9c097_245
                        if ('/js/compiled/main2_Manager_246.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 245,  '_format' => 'js',  '_route' => '_assetic_1e9c097_245',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_A')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_Action')) {
                                // _assetic_1e9c097_246
                                if ('/js/compiled/main2_Action_247.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 246,  '_format' => 'js',  '_route' => '_assetic_1e9c097_246',);
                                }

                                // _assetic_1e9c097_247
                                if ('/js/compiled/main2_ActionsComboBox_248.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 247,  '_format' => 'js',  '_route' => '_assetic_1e9c097_247',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/main2_Add')) {
                                if (0 === strpos($pathinfo, '/js/compiled/main2_AddRemoveStock')) {
                                    // _assetic_1e9c097_248
                                    if ('/js/compiled/main2_AddRemoveStock_249.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 248,  '_format' => 'js',  '_route' => '_assetic_1e9c097_248',);
                                    }

                                    // _assetic_1e9c097_249
                                    if ('/js/compiled/main2_AddRemoveStockWindow_250.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 249,  '_format' => 'js',  '_route' => '_assetic_1e9c097_249',);
                                    }

                                }

                                // _assetic_1e9c097_250
                                if ('/js/compiled/main2_AddPart_251.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 250,  '_format' => 'js',  '_route' => '_assetic_1e9c097_250',);
                                }

                            }

                        }

                        // _assetic_1e9c097_251
                        if ('/js/compiled/main2_SearchPart_252.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 251,  '_format' => 'js',  '_route' => '_assetic_1e9c097_251',);
                        }

                        // _assetic_1e9c097_252
                        if ('/js/compiled/main2_FieldSelector_253.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 252,  '_format' => 'js',  '_route' => '_assetic_1e9c097_252',);
                        }

                        // _assetic_1e9c097_253
                        if ('/js/compiled/main2_Message_254.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 253,  '_format' => 'js',  '_route' => '_assetic_1e9c097_253',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Ext.ux.Wizard')) {
                            if (0 === strpos($pathinfo, '/js/compiled/main2_Ext.ux.Wizard.')) {
                                // _assetic_1e9c097_254
                                if ('/js/compiled/main2_Ext.ux.Wizard.Card_255.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 254,  '_format' => 'js',  '_route' => '_assetic_1e9c097_254',);
                                }

                                // _assetic_1e9c097_255
                                if ('/js/compiled/main2_Ext.ux.Wizard.Header_256.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 255,  '_format' => 'js',  '_route' => '_assetic_1e9c097_255',);
                                }

                            }

                            // _assetic_1e9c097_256
                            if ('/js/compiled/main2_Ext.ux.Wizard_257.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 256,  '_format' => 'js',  '_route' => '_assetic_1e9c097_256',);
                            }

                            // _assetic_1e9c097_257
                            if ('/js/compiled/main2_Ext.ux.Wizard.CardLayout_258.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 257,  '_format' => 'js',  '_route' => '_assetic_1e9c097_257',);
                            }

                        }

                        if (0 === strpos($pathinfo, '/js/compiled/main2_Search')) {
                            // _assetic_1e9c097_258
                            if ('/js/compiled/main2_SearchPanel_259.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 258,  '_format' => 'js',  '_route' => '_assetic_1e9c097_258',);
                            }

                            // _assetic_1e9c097_259
                            if ('/js/compiled/main2_SearchWindow_260.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 259,  '_format' => 'js',  '_route' => '_assetic_1e9c097_259',);
                            }

                        }

                        // _assetic_1e9c097_260
                        if ('/js/compiled/main2_DataApplicator_261.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 260,  '_format' => 'js',  '_route' => '_assetic_1e9c097_260',);
                        }

                        // _assetic_1e9c097_261
                        if ('/js/compiled/main2_PatreonStatusDialog_262.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 261,  '_format' => 'js',  '_route' => '_assetic_1e9c097_261',);
                        }

                        // _assetic_1e9c097_262
                        if ('/js/compiled/main2_ThemeTester_263.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 262,  '_format' => 'js',  '_route' => '_assetic_1e9c097_262',);
                        }

                        // _assetic_1e9c097_263
                        if ('/js/compiled/main2_php.default.min_264.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '1e9c097',  'pos' => 263,  '_format' => 'js',  '_route' => '_assetic_1e9c097_263',);
                        }

                    }

                }

            }

        }

        if (0 === strpos($pathinfo, '/css/ca24fc9')) {
            // _assetic_ca24fc9
            if ('/css/ca24fc9.css' === $pathinfo) {
                return array (  '_controller' => 'assetic.controller:render',  'name' => 'ca24fc9',  'pos' => NULL,  '_format' => 'css',  '_route' => '_assetic_ca24fc9',);
            }

            if (0 === strpos($pathinfo, '/css/ca24fc9_')) {
                // _assetic_ca24fc9_0
                if ('/css/ca24fc9_theme-material-all_1.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ca24fc9',  'pos' => 0,  '_format' => 'css',  '_route' => '_assetic_ca24fc9_0',);
                }

                // _assetic_ca24fc9_1
                if ('/css/ca24fc9_PartKeepr-mobile_2.css' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'ca24fc9',  'pos' => 1,  '_format' => 'css',  '_route' => '_assetic_ca24fc9_1',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/js/compiled/mobile_')) {
            if (0 === strpos($pathinfo, '/js/compiled/mobile_extjs')) {
                if (0 === strpos($pathinfo, '/js/compiled/mobile_extjs-debug')) {
                    // _assetic_cee4014
                    if ('/js/compiled/mobile_extjs-debug.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'cee4014',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_cee4014',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_extjs-debug_')) {
                        // _assetic_cee4014_0
                        if ('/js/compiled/mobile_extjs-debug_ext-modern-all-debug_1.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'cee4014',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_cee4014_0',);
                        }

                        // _assetic_cee4014_1
                        if ('/js/compiled/mobile_extjs-debug_theme-material_2.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => 'cee4014',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_cee4014_1',);
                        }

                    }

                }

                // _assetic_e3aba3c
                if ('/js/compiled/mobile_extjs.js' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => 'e3aba3c',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_e3aba3c',);
                }

                if (0 === strpos($pathinfo, '/js/compiled/mobile_extjs_')) {
                    // _assetic_e3aba3c_0
                    if ('/js/compiled/mobile_extjs_ext-modern-all_1.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'e3aba3c',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_e3aba3c_0',);
                    }

                    // _assetic_e3aba3c_1
                    if ('/js/compiled/mobile_extjs_theme-material_2.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => 'e3aba3c',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_e3aba3c_1',);
                    }

                }

            }

            if (0 === strpos($pathinfo, '/js/compiled/mobile_m')) {
                if (0 === strpos($pathinfo, '/js/compiled/mobile_main')) {
                    // _assetic_920d258
                    if ('/js/compiled/mobile_main.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_920d258',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_main_')) {
                        // _assetic_920d258_0
                        if ('/js/compiled/mobile_main_CallActions_1.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_920d258_0',);
                        }

                        // _assetic_920d258_1
                        if ('/js/compiled/mobile_main_Array_2.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_920d258_1',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/mobile_main_Hydra')) {
                            // _assetic_920d258_2
                            if ('/js/compiled/mobile_main_HydraModel_3.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_920d258_2',);
                            }

                            // _assetic_920d258_3
                            if ('/js/compiled/mobile_main_HydraField_4.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_920d258_3',);
                            }

                            // _assetic_920d258_4
                            if ('/js/compiled/mobile_main_HydraTreeModel_5.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_920d258_4',);
                            }

                        }

                        // _assetic_920d258_5
                        if ('/js/compiled/mobile_main_ModelStore_6.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_920d258_5',);
                        }

                        // _assetic_920d258_6
                        if ('/js/compiled/mobile_main_BaseStore_7.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_920d258_6',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/mobile_main_Ext.')) {
                            // _assetic_920d258_7
                            if ('/js/compiled/mobile_main_Ext.form.field.Checkbox.EXTJS-21886_8.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_920d258_7',);
                            }

                            // _assetic_920d258_8
                            if ('/js/compiled/mobile_main_Ext.view.Table-renderCell_9.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_920d258_8',);
                            }

                            // _assetic_920d258_9
                            if ('/js/compiled/mobile_main_Ext.data.field.Date-ISO8601_10.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '920d258',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_920d258_9',);
                            }

                        }

                    }

                }

                if (0 === strpos($pathinfo, '/js/compiled/mobile_models')) {
                    // _assetic_4fbda02
                    if ('/js/compiled/mobile_models.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_4fbda02',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_')) {
                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_FOS.UserBundle.Model.')) {
                            // _assetic_4fbda02_0
                            if ('/js/compiled/mobile_models_part_1_FOS.UserBundle.Model.Group_1.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_4fbda02_0',);
                            }

                            // _assetic_4fbda02_1
                            if ('/js/compiled/mobile_models_part_1_FOS.UserBundle.Model.User_2.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_4fbda02_1',);
                            }

                        }

                        // _assetic_4fbda02_2
                        if ('/js/compiled/mobile_models_part_1_Gedmo.Tree.Entity.MappedSuperclass.AbstractClosure_3.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_4fbda02_2',);
                        }

                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.')) {
                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.')) {
                                // _assetic_4fbda02_3
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.FOSUser_4.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_4fbda02_3',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.User')) {
                                    // _assetic_4fbda02_4
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.User_5.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_4fbda02_4',);
                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.UserPr')) {
                                        // _assetic_4fbda02_5
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.UserPreference_6.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_4fbda02_5',);
                                        }

                                        // _assetic_4fbda02_6
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.AuthBundle.Entity.UserProvider_7.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_4fbda02_6',);
                                        }

                                    }

                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJob')) {
                                // _assetic_4fbda02_7
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJob_8.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_4fbda02_7',);
                                }

                                // _assetic_4fbda02_8
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJobQueryField_9.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_4fbda02_8',);
                                }

                                // _assetic_4fbda02_9
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.BatchJobBundle.Entity.BatchJobUpdateField_10.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_4fbda02_9',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.C')) {
                                // _assetic_4fbda02_10
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.CategoryBundle.Entity.AbstractCategory_11.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_4fbda02_10',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.CoreBundle.Entity.')) {
                                    // _assetic_4fbda02_11
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.CoreBundle.Entity.BaseEntity_12.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 11,  '_format' => 'js',  '_route' => '_assetic_4fbda02_11',);
                                    }

                                    // _assetic_4fbda02_12
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.CoreBundle.Entity.SystemNotice_13.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 12,  '_format' => 'js',  '_route' => '_assetic_4fbda02_12',);
                                    }

                                }

                                // _assetic_4fbda02_13
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.CronLoggerBundle.Entity.CronLogger_14.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 13,  '_format' => 'js',  '_route' => '_assetic_4fbda02_13',);
                                }

                            }

                            // _assetic_4fbda02_14
                            if ('/js/compiled/mobile_models_part_1_PartKeepr.DistributorBundle.Entity.Distributor_15.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 14,  '_format' => 'js',  '_route' => '_assetic_4fbda02_14',);
                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.F')) {
                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.FootprintBundle.Entity.Footprint')) {
                                    // _assetic_4fbda02_15
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.FootprintBundle.Entity.Footprint_16.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 15,  '_format' => 'js',  '_route' => '_assetic_4fbda02_15',);
                                    }

                                    // _assetic_4fbda02_16
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.FootprintBundle.Entity.FootprintAttachment_17.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 16,  '_format' => 'js',  '_route' => '_assetic_4fbda02_16',);
                                    }

                                    // _assetic_4fbda02_17
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.FootprintBundle.Entity.FootprintCategory_18.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 17,  '_format' => 'js',  '_route' => '_assetic_4fbda02_17',);
                                    }

                                    // _assetic_4fbda02_18
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.FootprintBundle.Entity.FootprintImage_19.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 18,  '_format' => 'js',  '_route' => '_assetic_4fbda02_18',);
                                    }

                                }

                                // _assetic_4fbda02_19
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.FrontendBundle.Entity.GridPreset_20.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 19,  '_format' => 'js',  '_route' => '_assetic_4fbda02_19',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.Im')) {
                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ImageBundle.Entity.')) {
                                    // _assetic_4fbda02_20
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.ImageBundle.Entity.CachedImage_21.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 20,  '_format' => 'js',  '_route' => '_assetic_4fbda02_20',);
                                    }

                                    // _assetic_4fbda02_21
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.ImageBundle.Entity.Image_22.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 21,  '_format' => 'js',  '_route' => '_assetic_4fbda02_21',);
                                    }

                                    // _assetic_4fbda02_22
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.ImageBundle.Entity.TempImage_23.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 22,  '_format' => 'js',  '_route' => '_assetic_4fbda02_22',);
                                    }

                                }

                                // _assetic_4fbda02_23
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.ImportBundle.Entity.ImportPreset_24.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 23,  '_format' => 'js',  '_route' => '_assetic_4fbda02_23',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ManufacturerBundle.Entity.Manufacturer')) {
                                // _assetic_4fbda02_24
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.ManufacturerBundle.Entity.Manufacturer_25.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 24,  '_format' => 'js',  '_route' => '_assetic_4fbda02_24',);
                                }

                                // _assetic_4fbda02_25
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.ManufacturerBundle.Entity.ManufacturerICLogo_26.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 25,  '_format' => 'js',  '_route' => '_assetic_4fbda02_25',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.P')) {
                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.')) {
                                    // _assetic_4fbda02_26
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.MetaPartParameterCriteria_27.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 26,  '_format' => 'js',  '_route' => '_assetic_4fbda02_26',);
                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.Part')) {
                                        // _assetic_4fbda02_27
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.Part_28.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 27,  '_format' => 'js',  '_route' => '_assetic_4fbda02_27',);
                                        }

                                        // _assetic_4fbda02_28
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartAttachment_29.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 28,  '_format' => 'js',  '_route' => '_assetic_4fbda02_28',);
                                        }

                                        // _assetic_4fbda02_29
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartCategory_30.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 29,  '_format' => 'js',  '_route' => '_assetic_4fbda02_29',);
                                        }

                                        // _assetic_4fbda02_30
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartDistributor_31.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 30,  '_format' => 'js',  '_route' => '_assetic_4fbda02_30',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartM')) {
                                            // _assetic_4fbda02_31
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartManufacturer_32.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 31,  '_format' => 'js',  '_route' => '_assetic_4fbda02_31',);
                                            }

                                            // _assetic_4fbda02_32
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartMeasurementUnit_33.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 32,  '_format' => 'js',  '_route' => '_assetic_4fbda02_32',);
                                            }

                                        }

                                        // _assetic_4fbda02_33
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.PartBundle.Entity.PartParameter_34.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 33,  '_format' => 'js',  '_route' => '_assetic_4fbda02_33',);
                                        }

                                    }

                                }

                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.')) {
                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.Project')) {
                                        // _assetic_4fbda02_34
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.Project_35.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 34,  '_format' => 'js',  '_route' => '_assetic_4fbda02_34',);
                                        }

                                        // _assetic_4fbda02_35
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ProjectAttachment_36.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 35,  '_format' => 'js',  '_route' => '_assetic_4fbda02_35',);
                                        }

                                        // _assetic_4fbda02_36
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ProjectPart_37.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 36,  '_format' => 'js',  '_route' => '_assetic_4fbda02_36',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRun')) {
                                            // _assetic_4fbda02_37
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRun_38.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 37,  '_format' => 'js',  '_route' => '_assetic_4fbda02_37',);
                                            }

                                            // _assetic_4fbda02_38
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ProjectRunPart_39.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 38,  '_format' => 'js',  '_route' => '_assetic_4fbda02_38',);
                                            }

                                        }

                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.Report')) {
                                        // _assetic_4fbda02_39
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.Report_40.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 39,  '_format' => 'js',  '_route' => '_assetic_4fbda02_39',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ReportP')) {
                                            // _assetic_4fbda02_40
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ReportPart_41.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 40,  '_format' => 'js',  '_route' => '_assetic_4fbda02_40',);
                                            }

                                            // _assetic_4fbda02_41
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.ProjectBundle.Entity.ReportProject_42.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 41,  '_format' => 'js',  '_route' => '_assetic_4fbda02_41',);
                                            }

                                        }

                                    }

                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.S')) {
                                // _assetic_4fbda02_42
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.SiPrefixBundle.Entity.SiPrefix_43.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 42,  '_format' => 'js',  '_route' => '_assetic_4fbda02_42',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.St')) {
                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshot')) {
                                        // _assetic_4fbda02_43
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshot_44.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 43,  '_format' => 'js',  '_route' => '_assetic_4fbda02_43',);
                                        }

                                        // _assetic_4fbda02_44
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.StatisticBundle.Entity.StatisticSnapshotUnit_45.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 44,  '_format' => 'js',  '_route' => '_assetic_4fbda02_44',);
                                        }

                                    }

                                    if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.Sto')) {
                                        // _assetic_4fbda02_45
                                        if ('/js/compiled/mobile_models_part_1_PartKeepr.StockBundle.Entity.StockEntry_46.js' === $pathinfo) {
                                            return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 45,  '_format' => 'js',  '_route' => '_assetic_4fbda02_45',);
                                        }

                                        if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocation')) {
                                            // _assetic_4fbda02_46
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocation_47.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 46,  '_format' => 'js',  '_route' => '_assetic_4fbda02_46',);
                                            }

                                            // _assetic_4fbda02_47
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocationCategory_48.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 47,  '_format' => 'js',  '_route' => '_assetic_4fbda02_47',);
                                            }

                                            // _assetic_4fbda02_48
                                            if ('/js/compiled/mobile_models_part_1_PartKeepr.StorageLocationBundle.Entity.StorageLocationImage_49.js' === $pathinfo) {
                                                return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 48,  '_format' => 'js',  '_route' => '_assetic_4fbda02_48',);
                                            }

                                        }

                                    }

                                }

                                // _assetic_4fbda02_49
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.SystemPreferenceBundle.Entity.SystemPreference_50.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 49,  '_format' => 'js',  '_route' => '_assetic_4fbda02_49',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay')) {
                                // _assetic_4fbda02_50
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDay_51.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 50,  '_format' => 'js',  '_route' => '_assetic_4fbda02_50',);
                                }

                                // _assetic_4fbda02_51
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.TipOfTheDayBundle.Entity.TipOfTheDayHistory_52.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 51,  '_format' => 'js',  '_route' => '_assetic_4fbda02_51',);
                                }

                            }

                            if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.U')) {
                                // _assetic_4fbda02_52
                                if ('/js/compiled/mobile_models_part_1_PartKeepr.UnitBundle.Entity.Unit_53.js' === $pathinfo) {
                                    return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 52,  '_format' => 'js',  '_route' => '_assetic_4fbda02_52',);
                                }

                                if (0 === strpos($pathinfo, '/js/compiled/mobile_models_part_1_PartKeepr.UploadedFileBundle.Entity.')) {
                                    // _assetic_4fbda02_53
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.UploadedFileBundle.Entity.TempUploadedFile_54.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 53,  '_format' => 'js',  '_route' => '_assetic_4fbda02_53',);
                                    }

                                    // _assetic_4fbda02_54
                                    if ('/js/compiled/mobile_models_part_1_PartKeepr.UploadedFileBundle.Entity.UploadedFile_55.js' === $pathinfo) {
                                        return array (  '_controller' => 'assetic.controller:render',  'name' => '4fbda02',  'pos' => 54,  '_format' => 'js',  '_route' => '_assetic_4fbda02_54',);
                                    }

                                }

                            }

                        }

                    }

                }

            }

            if (0 === strpos($pathinfo, '/js/compiled/mobile_app')) {
                // _assetic_52b13b2
                if ('/js/compiled/mobile_app.js' === $pathinfo) {
                    return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => NULL,  '_format' => 'js',  '_route' => '_assetic_52b13b2',);
                }

                if (0 === strpos($pathinfo, '/js/compiled/mobile_app_')) {
                    // _assetic_52b13b2_0
                    if ('/js/compiled/mobile_app_PartStore_1.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 0,  '_format' => 'js',  '_route' => '_assetic_52b13b2_0',);
                    }

                    // _assetic_52b13b2_1
                    if ('/js/compiled/mobile_app_Ext.data.Store.getFieldValue_2.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 1,  '_format' => 'js',  '_route' => '_assetic_52b13b2_1',);
                    }

                    // _assetic_52b13b2_2
                    if ('/js/compiled/mobile_app_i18n_3.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 2,  '_format' => 'js',  '_route' => '_assetic_52b13b2_2',);
                    }

                    // _assetic_52b13b2_3
                    if ('/js/compiled/mobile_app_CurrencyStore_4.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 3,  '_format' => 'js',  '_route' => '_assetic_52b13b2_3',);
                    }

                    // _assetic_52b13b2_4
                    if ('/js/compiled/mobile_app_ReflectionFieldTreeModel_5.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 4,  '_format' => 'js',  '_route' => '_assetic_52b13b2_4',);
                    }

                    // _assetic_52b13b2_5
                    if ('/js/compiled/mobile_app_OperatorStore_6.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 5,  '_format' => 'js',  '_route' => '_assetic_52b13b2_5',);
                    }

                    // _assetic_52b13b2_6
                    if ('/js/compiled/mobile_app_Blob_7.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 6,  '_format' => 'js',  '_route' => '_assetic_52b13b2_6',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_Fil')) {
                        // _assetic_52b13b2_7
                        if ('/js/compiled/mobile_app_FileSaver_8.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 7,  '_format' => 'js',  '_route' => '_assetic_52b13b2_7',);
                        }

                        // _assetic_52b13b2_8
                        if ('/js/compiled/mobile_app_Filter_9.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 8,  '_format' => 'js',  '_route' => '_assetic_52b13b2_8',);
                        }

                    }

                    // _assetic_52b13b2_9
                    if ('/js/compiled/mobile_app_LoginManager_10.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 9,  '_format' => 'js',  '_route' => '_assetic_52b13b2_9',);
                    }

                    // _assetic_52b13b2_10
                    if ('/js/compiled/mobile_app_PreferencePlugin_11.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 10,  '_format' => 'js',  '_route' => '_assetic_52b13b2_10',);
                    }

                    // _assetic_52b13b2_11
                    if ('/js/compiled/mobile_app_AuthenticationProvider_12.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 11,  '_format' => 'js',  '_route' => '_assetic_52b13b2_11',);
                    }

                    // _assetic_52b13b2_12
                    if ('/js/compiled/mobile_app_HTTPBasicAuthenticationProvider_13.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 12,  '_format' => 'js',  '_route' => '_assetic_52b13b2_12',);
                    }

                    // _assetic_52b13b2_13
                    if ('/js/compiled/mobile_app_WSSEAuthenticationProvider_14.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 13,  '_format' => 'js',  '_route' => '_assetic_52b13b2_13',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_UserPr')) {
                        // _assetic_52b13b2_14
                        if ('/js/compiled/mobile_app_UserProvidersStore_15.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 14,  '_format' => 'js',  '_route' => '_assetic_52b13b2_14',);
                        }

                        // _assetic_52b13b2_15
                        if ('/js/compiled/mobile_app_UserPreferenceStore_16.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 15,  '_format' => 'js',  '_route' => '_assetic_52b13b2_15',);
                        }

                    }

                    // _assetic_52b13b2_16
                    if ('/js/compiled/mobile_app_isaac_17.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 16,  '_format' => 'js',  '_route' => '_assetic_52b13b2_16',);
                    }

                    // _assetic_52b13b2_17
                    if ('/js/compiled/mobile_app_bcrypt_18.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 17,  '_format' => 'js',  '_route' => '_assetic_52b13b2_17',);
                    }

                    // _assetic_52b13b2_18
                    if ('/js/compiled/mobile_app_core_19.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 18,  '_format' => 'js',  '_route' => '_assetic_52b13b2_18',);
                    }

                    // _assetic_52b13b2_19
                    if ('/js/compiled/mobile_app_x64-core_20.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 19,  '_format' => 'js',  '_route' => '_assetic_52b13b2_19',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_sha')) {
                        // _assetic_52b13b2_20
                        if ('/js/compiled/mobile_app_sha512_21.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 20,  '_format' => 'js',  '_route' => '_assetic_52b13b2_20',);
                        }

                        // _assetic_52b13b2_21
                        if ('/js/compiled/mobile_app_sha1_22.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 21,  '_format' => 'js',  '_route' => '_assetic_52b13b2_21',);
                        }

                    }

                    // _assetic_52b13b2_22
                    if ('/js/compiled/mobile_app_enc-base64_23.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 22,  '_format' => 'js',  '_route' => '_assetic_52b13b2_22',);
                    }

                    // _assetic_52b13b2_23
                    if ('/js/compiled/mobile_app_Ext.data.Model-EXTJS-15037_24.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 23,  '_format' => 'js',  '_route' => '_assetic_52b13b2_23',);
                    }

                    // _assetic_52b13b2_24
                    if ('/js/compiled/mobile_app_JsonWithAssociationsWriter_25.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 24,  '_format' => 'js',  '_route' => '_assetic_52b13b2_24',);
                    }

                    // _assetic_52b13b2_25
                    if ('/js/compiled/mobile_app_PartKeeprMobile_26.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 25,  '_format' => 'js',  '_route' => '_assetic_52b13b2_25',);
                    }

                    // _assetic_52b13b2_26
                    if ('/js/compiled/mobile_app_compat_27.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 26,  '_format' => 'js',  '_route' => '_assetic_52b13b2_26',);
                    }

                    // _assetic_52b13b2_27
                    if ('/js/compiled/mobile_app_ServiceCall_28.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 27,  '_format' => 'js',  '_route' => '_assetic_52b13b2_27',);
                    }

                    // _assetic_52b13b2_28
                    if ('/js/compiled/mobile_app_locale_29.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 28,  '_format' => 'js',  '_route' => '_assetic_52b13b2_28',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_Hydra')) {
                        // _assetic_52b13b2_29
                        if ('/js/compiled/mobile_app_HydraException_30.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 29,  '_format' => 'js',  '_route' => '_assetic_52b13b2_29',);
                        }

                        // _assetic_52b13b2_30
                        if ('/js/compiled/mobile_app_HydraProxy_31.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 30,  '_format' => 'js',  '_route' => '_assetic_52b13b2_30',);
                        }

                        // _assetic_52b13b2_31
                        if ('/js/compiled/mobile_app_HydraReader_32.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 31,  '_format' => 'js',  '_route' => '_assetic_52b13b2_31',);
                        }

                        // _assetic_52b13b2_32
                        if ('/js/compiled/mobile_app_HydraTreeReader_33.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 32,  '_format' => 'js',  '_route' => '_assetic_52b13b2_32',);
                        }

                    }

                    // _assetic_52b13b2_33
                    if ('/js/compiled/mobile_app_BaseAction_34.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 33,  '_format' => 'js',  '_route' => '_assetic_52b13b2_33',);
                    }

                    // _assetic_52b13b2_34
                    if ('/js/compiled/mobile_app_LogoutAction_35.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 34,  '_format' => 'js',  '_route' => '_assetic_52b13b2_34',);
                    }

                    // _assetic_52b13b2_35
                    if ('/js/compiled/mobile_app_Message_36.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 35,  '_format' => 'js',  '_route' => '_assetic_52b13b2_35',);
                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_Login')) {
                        // _assetic_52b13b2_36
                        if ('/js/compiled/mobile_app_LoginDialog_37.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 36,  '_format' => 'js',  '_route' => '_assetic_52b13b2_36',);
                        }

                        // _assetic_52b13b2_37
                        if ('/js/compiled/mobile_app_LoginController_38.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 37,  '_format' => 'js',  '_route' => '_assetic_52b13b2_37',);
                        }

                    }

                    if (0 === strpos($pathinfo, '/js/compiled/mobile_app_Pa')) {
                        if (0 === strpos($pathinfo, '/js/compiled/mobile_app_Part')) {
                            // _assetic_52b13b2_38
                            if ('/js/compiled/mobile_app_PartPanel_39.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 38,  '_format' => 'js',  '_route' => '_assetic_52b13b2_38',);
                            }

                            // _assetic_52b13b2_39
                            if ('/js/compiled/mobile_app_PartGrid_40.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 39,  '_format' => 'js',  '_route' => '_assetic_52b13b2_39',);
                            }

                            // _assetic_52b13b2_40
                            if ('/js/compiled/mobile_app_PartController_41.js' === $pathinfo) {
                                return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 40,  '_format' => 'js',  '_route' => '_assetic_52b13b2_40',);
                            }

                        }

                        // _assetic_52b13b2_41
                        if ('/js/compiled/mobile_app_Panel_42.js' === $pathinfo) {
                            return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 41,  '_format' => 'js',  '_route' => '_assetic_52b13b2_41',);
                        }

                    }

                    // _assetic_52b13b2_42
                    if ('/js/compiled/mobile_app_Controller_43.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 42,  '_format' => 'js',  '_route' => '_assetic_52b13b2_42',);
                    }

                    // _assetic_52b13b2_43
                    if ('/js/compiled/mobile_app_Overview_44.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 43,  '_format' => 'js',  '_route' => '_assetic_52b13b2_43',);
                    }

                    // _assetic_52b13b2_44
                    if ('/js/compiled/mobile_app_php.default.min_45.js' === $pathinfo) {
                        return array (  '_controller' => 'assetic.controller:render',  'name' => '52b13b2',  'pos' => 44,  '_format' => 'js',  '_route' => '_assetic_52b13b2_44',);
                    }

                }

            }

        }

        if (0 === strpos($pathinfo, '/_')) {
            // _wdt
            if (0 === strpos($pathinfo, '/_wdt') && preg_match('#^/_wdt/(?P<token>[^/]++)$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => '_wdt')), array (  '_controller' => 'web_profiler.controller.profiler:toolbarAction',));
            }

            if (0 === strpos($pathinfo, '/_profiler')) {
                // _profiler_home
                if ('/_profiler' === rtrim($pathinfo, '/')) {
                    if ('/' === substr($pathinfo, -1)) {
                        // no-op
                    } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                        goto not__profiler_home;
                    } else {
                        return $this->redirect($rawPathinfo.'/', '_profiler_home');
                    }

                    return array (  '_controller' => 'web_profiler.controller.profiler:homeAction',  '_route' => '_profiler_home',);
                }
                not__profiler_home:

                if (0 === strpos($pathinfo, '/_profiler/search')) {
                    // _profiler_search
                    if ('/_profiler/search' === $pathinfo) {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchAction',  '_route' => '_profiler_search',);
                    }

                    // _profiler_search_bar
                    if ('/_profiler/search_bar' === $pathinfo) {
                        return array (  '_controller' => 'web_profiler.controller.profiler:searchBarAction',  '_route' => '_profiler_search_bar',);
                    }

                }

                // _profiler_purge
                if ('/_profiler/purge' === $pathinfo) {
                    return array (  '_controller' => 'web_profiler.controller.profiler:purgeAction',  '_route' => '_profiler_purge',);
                }

                // _profiler_info
                if (0 === strpos($pathinfo, '/_profiler/info') && preg_match('#^/_profiler/info/(?P<about>[^/]++)$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_info')), array (  '_controller' => 'web_profiler.controller.profiler:infoAction',));
                }

                // _profiler_phpinfo
                if ('/_profiler/phpinfo' === $pathinfo) {
                    return array (  '_controller' => 'web_profiler.controller.profiler:phpinfoAction',  '_route' => '_profiler_phpinfo',);
                }

                // _profiler_search_results
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/search/results$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_search_results')), array (  '_controller' => 'web_profiler.controller.profiler:searchResultsAction',));
                }

                // _profiler
                if (preg_match('#^/_profiler/(?P<token>[^/]++)$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler')), array (  '_controller' => 'web_profiler.controller.profiler:panelAction',));
                }

                // _profiler_router
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/router$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_router')), array (  '_controller' => 'web_profiler.controller.router:panelAction',));
                }

                // _profiler_exception
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception')), array (  '_controller' => 'web_profiler.controller.exception:showAction',));
                }

                // _profiler_exception_css
                if (preg_match('#^/_profiler/(?P<token>[^/]++)/exception\\.css$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_profiler_exception_css')), array (  '_controller' => 'web_profiler.controller.exception:cssAction',));
                }

            }

            if (0 === strpos($pathinfo, '/_configurator')) {
                // _configurator_home
                if ('/_configurator' === rtrim($pathinfo, '/')) {
                    if ('/' === substr($pathinfo, -1)) {
                        // no-op
                    } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                        goto not__configurator_home;
                    } else {
                        return $this->redirect($rawPathinfo.'/', '_configurator_home');
                    }

                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::checkAction',  '_route' => '_configurator_home',);
                }
                not__configurator_home:

                // _configurator_step
                if (0 === strpos($pathinfo, '/_configurator/step') && preg_match('#^/_configurator/step/(?P<index>[^/]++)$#sD', $pathinfo, $matches)) {
                    return $this->mergeDefaults(array_replace($matches, array('_route' => '_configurator_step')), array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::stepAction',));
                }

                // _configurator_final
                if ('/_configurator/final' === $pathinfo) {
                    return array (  '_controller' => 'Sensio\\Bundle\\DistributionBundle\\Controller\\ConfiguratorController::finalAction',  '_route' => '_configurator_final',);
                }

            }

        }

        if (0 === strpos($pathinfo, '/api')) {
            if (0 === strpos($pathinfo, '/api/users')) {
                // partkeepr_auth_default_getsalt
                if ('/api/users/getSalt' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_partkeepr_auth_default_getsalt;
                    }

                    return array (  'method' => 'post',  '_format' => 'json',  '_controller' => 'PartKeepr\\AuthBundle\\Controller\\DefaultController::getSaltAction',  '_route' => 'partkeepr_auth_default_getsalt',);
                }
                not_partkeepr_auth_default_getsalt:

                // partkeepr_auth_default_logout
                if ('/api/users/logout' === $pathinfo) {
                    return array (  'method' => 'GET',  '_format' => 'json',  '_controller' => 'PartKeepr\\AuthBundle\\Controller\\DefaultController::logoutAction',  '_route' => 'partkeepr_auth_default_logout',);
                }

            }

            if (0 === strpos($pathinfo, '/api/octopart')) {
                // partkeepr_octopart_default_index
                if (0 === strpos($pathinfo, '/api/octopart/get') && preg_match('#^/api/octopart/get/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_partkeepr_octopart_default_index;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'partkeepr_octopart_default_index')), array (  'method' => 'GET',  '_format' => 'json',  '_controller' => 'PartKeepr\\OctoPartBundle\\Controller\\DefaultController::indexAction',));
                }
                not_partkeepr_octopart_default_index:

                // partkeepr_octopart_default_getpartsbyquery
                if ('/api/octopart/query' === rtrim($pathinfo, '/')) {
                    if ('/' === substr($pathinfo, -1)) {
                        // no-op
                    } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                        goto not_partkeepr_octopart_default_getpartsbyquery;
                    } else {
                        return $this->redirect($rawPathinfo.'/', 'partkeepr_octopart_default_getpartsbyquery');
                    }

                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_partkeepr_octopart_default_getpartsbyquery;
                    }

                    return array (  'method' => 'GET',  '_format' => 'json',  '_controller' => 'PartKeepr\\OctoPartBundle\\Controller\\DefaultController::getPartsByQueryAction',  '_route' => 'partkeepr_octopart_default_getpartsbyquery',);
                }
                not_partkeepr_octopart_default_getpartsbyquery:

            }

            if (0 === strpos($pathinfo, '/api/system_')) {
                // partkeepr_core_default_getsystemstatus
                if ('/api/system_status' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\CoreBundle\\Controller\\DefaultController::getSystemStatusAction',  '_route' => 'partkeepr_core_default_getsystemstatus',);
                }

                // partkeepr_core_default_getsysteminformation
                if ('/api/system_information' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\CoreBundle\\Controller\\DefaultController::getSystemInformationAction',  '_route' => 'partkeepr_core_default_getsysteminformation',);
                }

            }

            // partkeepr_core_default_getdiskfreespace
            if ('/api/disk_space' === $pathinfo) {
                return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\CoreBundle\\Controller\\DefaultController::getDiskFreeSpaceAction',  '_route' => 'partkeepr_core_default_getdiskfreespace',);
            }

            // partkeepr_core_default_getcurrencies
            if ('/api/currencies' === $pathinfo) {
                return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\CoreBundle\\Controller\\DefaultController::getCurrenciesAction',  '_route' => 'partkeepr_core_default_getcurrencies',);
            }

            if (0 === strpos($pathinfo, '/api/statistics')) {
                // partkeepr_statistic_statistic_getcurrentstatistic
                if ('/api/statistics/current' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\StatisticBundle\\Controller\\StatisticController::getCurrentStatisticAction',  '_route' => 'partkeepr_statistic_statistic_getcurrentstatistic',);
                }

                // partkeepr_statistic_statistic_getsampledstatistic
                if ('/api/statistics/sampled' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\StatisticBundle\\Controller\\StatisticController::getSampledStatisticAction',  '_route' => 'partkeepr_statistic_statistic_getsampledstatistic',);
                }

                // partkeepr_statistic_statistic_getstatisticrange
                if ('/api/statistics/range' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\StatisticBundle\\Controller\\StatisticController::getStatisticRangeAction',  '_route' => 'partkeepr_statistic_statistic_getstatisticrange',);
                }

            }

            // partkeepr_cronlogger_cronrunner_runcrons
            if ('/api/cron/run' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\CronLoggerBundle\\Controller\\CronRunnerController::runCronsAction',  '_route' => 'partkeepr_cronlogger_cronrunner_runcrons',);
            }

            if (0 === strpos($pathinfo, '/api/parts')) {
                // partkeepr_part_part_massremovestock
                if ('/api/parts/massRemoveStock' === $pathinfo) {
                    return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::massRemoveStockAction',  '_route' => 'partkeepr_part_part_massremovestock',);
                }

                if (0 === strpos($pathinfo, '/api/parts/getPartParameter')) {
                    // partkeepr_part_part_getparameternames
                    if ('/api/parts/getPartParameterNames' === $pathinfo) {
                        return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::getParameterNamesAction',  '_route' => 'partkeepr_part_part_getparameternames',);
                    }

                    // partkeepr_part_part_getparametervalues
                    if ('/api/parts/getPartParameterValues' === $pathinfo) {
                        return array (  'method' => 'get',  '_format' => 'json',  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartController::getParameterValuesAction',  '_route' => 'partkeepr_part_part_getparametervalues',);
                    }

                }

            }

        }

        // partkeepr_mobilefrontend_index_index
        if ('/mobile' === rtrim($pathinfo, '/')) {
            if ('/' === substr($pathinfo, -1)) {
                // no-op
            } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                goto not_partkeepr_mobilefrontend_index_index;
            } else {
                return $this->redirect($rawPathinfo.'/', 'partkeepr_mobilefrontend_index_index');
            }

            return array (  '_controller' => 'PartKeepr\\MobileFrontendBundle\\Controller\\IndexController::indexAction',  '_route' => 'partkeepr_mobilefrontend_index_index',);
        }
        not_partkeepr_mobilefrontend_index_index:

        // partkeepr_frontend_index_index
        if ('' === rtrim($pathinfo, '/')) {
            if ('/' === substr($pathinfo, -1)) {
                // no-op
            } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                goto not_partkeepr_frontend_index_index;
            } else {
                return $this->redirect($rawPathinfo.'/', 'partkeepr_frontend_index_index');
            }

            return array (  '_controller' => 'PartKeepr\\FrontendBundle\\Controller\\IndexController::indexAction',  '_route' => 'partkeepr_frontend_index_index',);
        }
        not_partkeepr_frontend_index_index:

        if (0 === strpos($pathinfo, '/get')) {
            // partkeepr_import_import_getsource
            if ('/getSource' === rtrim($pathinfo, '/')) {
                if ('/' === substr($pathinfo, -1)) {
                    // no-op
                } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                    goto not_partkeepr_import_import_getsource;
                } else {
                    return $this->redirect($rawPathinfo.'/', 'partkeepr_import_import_getsource');
                }

                return array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::getSourceAction',  '_route' => 'partkeepr_import_import_getsource',);
            }
            not_partkeepr_import_import_getsource:

            // partkeepr_import_import_getpreview
            if ('/getPreview/' === $pathinfo) {
                if ($this->context->getMethod() != 'POST') {
                    $allow[] = 'POST';
                    goto not_partkeepr_import_import_getpreview;
                }

                return array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::getPreviewAction',  '_route' => 'partkeepr_import_import_getpreview',);
            }
            not_partkeepr_import_import_getpreview:

        }

        // partkeepr_import_import_import
        if ('/executeImport/' === $pathinfo) {
            if ($this->context->getMethod() != 'POST') {
                $allow[] = 'POST';
                goto not_partkeepr_import_import_import;
            }

            return array (  '_controller' => 'PartKeepr\\ImportBundle\\Controller\\ImportController::importAction',  '_route' => 'partkeepr_import_import_import',);
        }
        not_partkeepr_import_import_import:

        // partkeepr_export_export_export
        if ('/api/export' === $pathinfo) {
            return array (  'method' => 'post',  '_format' => 'json',  '_controller' => 'PartKeepr\\ExportBundle\\Controller\\ExportController::exportAction',  '_route' => 'partkeepr_export_export_export',);
        }

        if (0 === strpos($pathinfo, '/setup')) {
            if (0 === strpos($pathinfo, '/setup/_int_test_')) {
                // partkeepr_setup_setup_inttestconnectivity
                if ('/setup/_int_test_connectivity' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::intTestConnectivityAction',  '_route' => 'partkeepr_setup_setup_inttestconnectivity',);
                }

                // partkeepr_setup_setup_inttestdbversion
                if ('/setup/_int_test_dbversion' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::intTestDBVersionAction',  '_route' => 'partkeepr_setup_setup_inttestdbversion',);
                }

            }

            if (0 === strpos($pathinfo, '/setup/test')) {
                // partkeepr_setup_setup_testdbversion
                if ('/setup/testDBVersion' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::testDBVersionAction',  '_route' => 'partkeepr_setup_setup_testdbversion',);
                }

                // partkeepr_setup_setup_testconnectivity
                if ('/setup/testConnectivity' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::testConnectivityAction',  '_route' => 'partkeepr_setup_setup_testconnectivity',);
                }

            }

            // partkeepr_setup_setup_saveconfig
            if ('/setup/saveConfig' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::saveConfigAction',  '_route' => 'partkeepr_setup_setup_saveconfig',);
            }

            // partkeepr_setup_setup_webservertest
            if ('/setup/webserverTest' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::webserverTestAction',  '_route' => 'partkeepr_setup_setup_webservertest',);
            }

            // partkeepr_setup_setup_generateauthkey
            if ('/setup/generateAuthKey' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SetupController::generateAuthKeyAction',  '_route' => 'partkeepr_setup_setup_generateauthkey',);
            }

            // partkeepr_setup_cachewarmupsetup_intcachewarmup
            if ('/setup/_int_cache_warmup' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\CacheWarmupSetupController::intCacheWarmupAction',  '_route' => 'partkeepr_setup_cachewarmupsetup_intcachewarmup',);
            }

            // partkeepr_setup_cachewarmupsetup_cachewarmup
            if ('/setup/warmupCache' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\CacheWarmupSetupController::cacheWarmupAction',  '_route' => 'partkeepr_setup_cachewarmupsetup_cachewarmup',);
            }

            // partkeepr_setup_schemasetup_intsetupschema
            if ('/setup/_int_setup_schema' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaSetupController::intSetupSchemaAction',  '_route' => 'partkeepr_setup_schemasetup_intsetupschema',);
            }

            // partkeepr_setup_schemasetup_setupschema
            if ('/setup/schemaSetup' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaSetupController::setupSchemaAction',  '_route' => 'partkeepr_setup_schemasetup_setupschema',);
            }

            // partkeepr_setup_adminusersetup_createuser
            if ('/setup/createUser' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\AdminUserSetupController::createUserAction',  '_route' => 'partkeepr_setup_adminusersetup_createuser',);
            }

            if (0 === strpos($pathinfo, '/setup/_int_')) {
                // partkeepr_setup_adminusersetup_intcreateuser
                if ('/setup/_int_create_user' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\AdminUserSetupController::intCreateUserAction',  '_route' => 'partkeepr_setup_adminusersetup_intcreateuser',);
                }

                // partkeepr_setup_schemamigrationsetup_intmigrateschema
                if ('/setup/_int_migrate_schema' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaMigrationSetupController::intMigrateSchemaAction',  '_route' => 'partkeepr_setup_schemamigrationsetup_intmigrateschema',);
                }

            }

            // partkeepr_setup_schemamigrationsetup_migrateschema
            if ('/setup/schemaMigration' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SchemaMigrationSetupController::migrateSchemaAction',  '_route' => 'partkeepr_setup_schemamigrationsetup_migrateschema',);
            }

            // partkeepr_setup_partunitsetup_createpartunits
            if ('/setup/createPartUnits' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\PartUnitSetupController::createPartUnitsAction',  '_route' => 'partkeepr_setup_partunitsetup_createpartunits',);
            }

            if (0 === strpos($pathinfo, '/setup/_int_create_')) {
                // partkeepr_setup_partunitsetup_intcreatepartunits
                if ('/setup/_int_create_part_units' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\PartUnitSetupController::intCreatePartUnitsAction',  '_route' => 'partkeepr_setup_partunitsetup_intcreatepartunits',);
                }

                // partkeepr_setup_footprintsetup_intcreatefootprints
                if ('/setup/_int_create_footprints' === $pathinfo) {
                    return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FootprintSetupController::intCreateFootprints',  '_route' => 'partkeepr_setup_footprintsetup_intcreatefootprints',);
                }

            }

            // partkeepr_setup_footprintsetup_createfootprints
            if ('/setup/createFootprints' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FootprintSetupController::createFootprintsAction',  '_route' => 'partkeepr_setup_footprintsetup_createfootprints',);
            }

            // partkeepr_setup_siprefixsetup_intcreatesiprefixes
            if ('/setup/_int_create_si_prefixes' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SiPrefixSetupController::intCreateSiPrefixes',  '_route' => 'partkeepr_setup_siprefixsetup_intcreatesiprefixes',);
            }

            // partkeepr_setup_siprefixsetup_createsiprefixes
            if ('/setup/createSiPrefixes' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\SiPrefixSetupController::createSiPrefixesAction',  '_route' => 'partkeepr_setup_siprefixsetup_createsiprefixes',);
            }

            // partkeepr_setup_unitsetup_intcreateunits
            if ('/setup/_int_create_units' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\UnitSetupController::intCreateUnitsAction',  '_route' => 'partkeepr_setup_unitsetup_intcreateunits',);
            }

            // partkeepr_setup_unitsetup_createunit
            if ('/setup/createUnits' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\UnitSetupController::createUnitAction',  '_route' => 'partkeepr_setup_unitsetup_createunit',);
            }

            // partkeepr_setup_manufacturersetup_intcreatemanufacturers
            if ('/setup/_int_create_manufacturers' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ManufacturerSetupController::intCreateManufacturersAction',  '_route' => 'partkeepr_setup_manufacturersetup_intcreatemanufacturers',);
            }

            // partkeepr_setup_manufacturersetup_createmanufacturers
            if ('/setup/createManufacturers' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ManufacturerSetupController::createManufacturersAction',  '_route' => 'partkeepr_setup_manufacturersetup_createmanufacturers',);
            }

            // partkeepr_setup_existingconfigparser_parseexistingconfig
            if ('/setup/parseExistingConfig' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingConfigParserController::parseExistingConfigAction',  '_route' => 'partkeepr_setup_existingconfigparser_parseexistingconfig',);
            }

            // partkeepr_setup_existingusersetup_testexistingusers
            if ('/setup/testExistingUsers' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingUserSetupController::testExistingUsersAction',  '_route' => 'partkeepr_setup_existingusersetup_testexistingusers',);
            }

            // partkeepr_setup_existingusersetup_inttestexistingusers
            if ('/setup/_int_test_existing_users' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\ExistingUserSetupController::intTestExistingUsersAction',  '_route' => 'partkeepr_setup_existingusersetup_inttestexistingusers',);
            }

            // partkeepr_setup_filemigration_migratefiles
            if ('/setup/migrateFiles' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FileMigrationController::migrateFilesAction',  '_route' => 'partkeepr_setup_filemigration_migratefiles',);
            }

            // partkeepr_setup_filemigration_intmigratefiles
            if ('/setup/_int_migrate_files_action' === $pathinfo) {
                return array (  '_controller' => 'PartKeepr\\SetupBundle\\Controller\\FileMigrationController::intMigrateFilesAction',  '_route' => 'partkeepr_setup_filemigration_intmigratefiles',);
            }

        }

        if (0 === strpos($pathinfo, '/api')) {
            // api_jsonld_entrypoint
            if ('/api' === rtrim($pathinfo, '/')) {
                if ('/' === substr($pathinfo, -1)) {
                    // no-op
                } elseif (!in_array($this->context->getMethod(), array('HEAD', 'GET'))) {
                    goto not_api_jsonld_entrypoint;
                } else {
                    return $this->redirect($rawPathinfo.'/', 'api_jsonld_entrypoint');
                }

                return array (  '_controller' => 'api.jsonld.action.entrypoint',  '_route' => 'api_jsonld_entrypoint',);
            }
            not_api_jsonld_entrypoint:

            // api_jsonld_context
            if (0 === strpos($pathinfo, '/api/contexts') && preg_match('#^/api/contexts/(?P<shortName>.+)$#sD', $pathinfo, $matches)) {
                return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_jsonld_context')), array (  '_controller' => 'api.jsonld.action.context',));
            }

            // api_hydra_vocab
            if ('/api/apidoc' === $pathinfo) {
                return array (  '_controller' => 'api.hydra.action.documentation',  '_route' => 'api_hydra_vocab',);
            }

            if (0 === strpos($pathinfo, '/api/distributors')) {
                // api_distributors_get_collection
                if ('/api/distributors' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_distributors_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Distributor',  '_route' => 'api_distributors_get_collection',);
                }
                not_api_distributors_get_collection:

                // api_distributors_post_collection
                if ('/api/distributors' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_distributors_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'Distributor',  '_route' => 'api_distributors_post_collection',);
                }
                not_api_distributors_post_collection:

                // api_distributors_get_item
                if (preg_match('#^/api/distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_distributors_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_distributors_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Distributor',));
                }
                not_api_distributors_get_item:

                // api_distributors_put_item
                if (preg_match('#^/api/distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_distributors_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_distributors_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Distributor',));
                }
                not_api_distributors_put_item:

                // api_distributors_delete_item
                if (preg_match('#^/api/distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_distributors_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_distributors_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Distributor',));
                }
                not_api_distributors_delete_item:

            }

            if (0 === strpos($pathinfo, '/api/footprints')) {
                // api_footprints_get_collection
                if ('/api/footprints' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_footprints_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Footprint',  '_route' => 'api_footprints_get_collection',);
                }
                not_api_footprints_get_collection:

                // api_footprints_post_collection
                if ('/api/footprints' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_footprints_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'Footprint',  '_route' => 'api_footprints_post_collection',);
                }
                not_api_footprints_post_collection:

                // api_footprints_get_item
                if (preg_match('#^/api/footprints/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_footprints_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprints_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Footprint',));
                }
                not_api_footprints_get_item:

                // api_footprints_put_item
                if (preg_match('#^/api/footprints/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_footprints_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprints_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Footprint',));
                }
                not_api_footprints_put_item:

                // api_footprints_delete_item
                if (preg_match('#^/api/footprints/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_footprints_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprints_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Footprint',));
                }
                not_api_footprints_delete_item:

            }

            if (0 === strpos($pathinfo, '/api/batch_job')) {
                if (0 === strpos($pathinfo, '/api/batch_jobs')) {
                    // api_batch_jobs_get_collection
                    if ('/api/batch_jobs' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_batch_jobs_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'BatchJob',  '_route' => 'api_batch_jobs_get_collection',);
                    }
                    not_api_batch_jobs_get_collection:

                    // api_batch_jobs_post_collection
                    if ('/api/batch_jobs' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_batch_jobs_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'BatchJob',  '_route' => 'api_batch_jobs_post_collection',);
                    }
                    not_api_batch_jobs_post_collection:

                    // api_batch_jobs_get_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_batch_jobs_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_jobs_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'BatchJob',));
                    }
                    not_api_batch_jobs_get_item:

                    // api_batch_jobs_put_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_batch_jobs_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_jobs_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'BatchJob',));
                    }
                    not_api_batch_jobs_put_item:

                    // api_batch_jobs_delete_item
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_batch_jobs_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_jobs_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'BatchJob',));
                    }
                    not_api_batch_jobs_delete_item:

                    // BatchJobExecute
                    if (preg_match('#^/api/batch_jobs/(?P<id>[^/]++)/execute$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_BatchJobExecute;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'BatchJobExecute')), array (  '_controller' => 'partkeepr.batchjob.execute',  '_resource' => 'BatchJob',));
                    }
                    not_BatchJobExecute:

                }

                if (0 === strpos($pathinfo, '/api/batch_job_')) {
                    if (0 === strpos($pathinfo, '/api/batch_job_query_fields')) {
                        // api_batch_job_query_fields_get_collection
                        if ('/api/batch_job_query_fields' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_batch_job_query_fields_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'BatchJobQueryField',  '_route' => 'api_batch_job_query_fields_get_collection',);
                        }
                        not_api_batch_job_query_fields_get_collection:

                        // api_batch_job_query_fields_post_collection
                        if ('/api/batch_job_query_fields' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_batch_job_query_fields_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'BatchJobQueryField',  '_route' => 'api_batch_job_query_fields_post_collection',);
                        }
                        not_api_batch_job_query_fields_post_collection:

                        // api_batch_job_query_fields_get_item
                        if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_batch_job_query_fields_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_query_fields_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'BatchJobQueryField',));
                        }
                        not_api_batch_job_query_fields_get_item:

                        // api_batch_job_query_fields_put_item
                        if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_batch_job_query_fields_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_query_fields_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'BatchJobQueryField',));
                        }
                        not_api_batch_job_query_fields_put_item:

                        // api_batch_job_query_fields_delete_item
                        if (preg_match('#^/api/batch_job_query_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_batch_job_query_fields_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_query_fields_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'BatchJobQueryField',));
                        }
                        not_api_batch_job_query_fields_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/batch_job_update_fields')) {
                        // api_batch_job_update_fields_get_collection
                        if ('/api/batch_job_update_fields' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_batch_job_update_fields_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'BatchJobUpdateField',  '_route' => 'api_batch_job_update_fields_get_collection',);
                        }
                        not_api_batch_job_update_fields_get_collection:

                        // api_batch_job_update_fields_post_collection
                        if ('/api/batch_job_update_fields' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_batch_job_update_fields_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'BatchJobUpdateField',  '_route' => 'api_batch_job_update_fields_post_collection',);
                        }
                        not_api_batch_job_update_fields_post_collection:

                        // api_batch_job_update_fields_get_item
                        if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_batch_job_update_fields_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_update_fields_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'BatchJobUpdateField',));
                        }
                        not_api_batch_job_update_fields_get_item:

                        // api_batch_job_update_fields_put_item
                        if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_batch_job_update_fields_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_update_fields_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'BatchJobUpdateField',));
                        }
                        not_api_batch_job_update_fields_put_item:

                        // api_batch_job_update_fields_delete_item
                        if (preg_match('#^/api/batch_job_update_fields/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_batch_job_update_fields_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_batch_job_update_fields_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'BatchJobUpdateField',));
                        }
                        not_api_batch_job_update_fields_delete_item:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/footprint_')) {
                if (0 === strpos($pathinfo, '/api/footprint_images')) {
                    // api_footprint_images_get_collection
                    if ('/api/footprint_images' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_images_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'FootprintImage',  '_route' => 'api_footprint_images_get_collection',);
                    }
                    not_api_footprint_images_get_collection:

                    // api_footprint_images_post_collection
                    if ('/api/footprint_images' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_footprint_images_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'FootprintImage',  '_route' => 'api_footprint_images_post_collection',);
                    }
                    not_api_footprint_images_post_collection:

                    // api_footprint_images_get_item
                    if (preg_match('#^/api/footprint_images/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_images_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprint_images_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'FootprintImage',));
                    }
                    not_api_footprint_images_get_item:

                    // FootprintImageGetImage
                    if (preg_match('#^/api/footprint_images/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_FootprintImageGetImage;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'FootprintImageGetImage')), array (  '_controller' => 'PartKeepr\\FootprintBundle\\Controller\\FootprintImageController::getImageAction',  '_resource' => 'FootprintImage',));
                    }
                    not_FootprintImageGetImage:

                }

                if (0 === strpos($pathinfo, '/api/footprint_attachments')) {
                    // api_footprint_attachments_get_collection
                    if ('/api/footprint_attachments' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_attachments_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'FootprintAttachment',  '_route' => 'api_footprint_attachments_get_collection',);
                    }
                    not_api_footprint_attachments_get_collection:

                    // api_footprint_attachments_post_collection
                    if ('/api/footprint_attachments' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_footprint_attachments_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'FootprintAttachment',  '_route' => 'api_footprint_attachments_post_collection',);
                    }
                    not_api_footprint_attachments_post_collection:

                    // api_footprint_attachments_get_item
                    if (preg_match('#^/api/footprint_attachments/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_attachments_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprint_attachments_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'FootprintAttachment',));
                    }
                    not_api_footprint_attachments_get_item:

                    // FootprintAttachmentGet
                    if (preg_match('#^/api/footprint_attachments/(?P<id>[^/]++)/getFile$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_FootprintAttachmentGet;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'FootprintAttachmentGet')), array (  '_controller' => 'PartKeepr\\FootprintBundle\\Controller\\FootprintAttachmentController::getFileAction',  '_resource' => 'FootprintAttachment',));
                    }
                    not_FootprintAttachmentGet:

                    // FootprintAttachmentMimeTypeIcon
                    if (preg_match('#^/api/footprint_attachments/(?P<id>[^/]++)/getMimeTypeIcon$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_FootprintAttachmentMimeTypeIcon;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'FootprintAttachmentMimeTypeIcon')), array (  '_controller' => 'PartKeepr\\FootprintBundle\\Controller\\FootprintAttachmentController::getMimeTypeIconAction',  '_resource' => 'FootprintAttachment',));
                    }
                    not_FootprintAttachmentMimeTypeIcon:

                }

                if (0 === strpos($pathinfo, '/api/footprint_categories')) {
                    // api_footprint_categories_get_collection
                    if ('/api/footprint_categories' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_categories_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'FootprintCategory',  '_route' => 'api_footprint_categories_get_collection',);
                    }
                    not_api_footprint_categories_get_collection:

                    // PartKeeprFootprintCategoryGetRootNode
                    if ('/api/footprint_categories/getExtJSRootNode' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_PartKeeprFootprintCategoryGetRootNode;
                        }

                        return array (  '_controller' => 'partkeepr.category.get_root_node',  '_resource' => 'FootprintCategory',  '_route' => 'PartKeeprFootprintCategoryGetRootNode',);
                    }
                    not_PartKeeprFootprintCategoryGetRootNode:

                    // api_footprint_categories_post_collection
                    if ('/api/footprint_categories' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_footprint_categories_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'FootprintCategory',  '_route' => 'api_footprint_categories_post_collection',);
                    }
                    not_api_footprint_categories_post_collection:

                    // api_footprint_categories_get_item
                    if (preg_match('#^/api/footprint_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_footprint_categories_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprint_categories_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'FootprintCategory',));
                    }
                    not_api_footprint_categories_get_item:

                    // api_footprint_categories_put_item
                    if (preg_match('#^/api/footprint_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_footprint_categories_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprint_categories_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'FootprintCategory',));
                    }
                    not_api_footprint_categories_put_item:

                    // api_footprint_categories_delete_item
                    if (preg_match('#^/api/footprint_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_footprint_categories_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_footprint_categories_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'FootprintCategory',));
                    }
                    not_api_footprint_categories_delete_item:

                    // FootprintCategoryMove
                    if (preg_match('#^/api/footprint_categories/(?P<id>[^/]++)/move$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_FootprintCategoryMove;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'FootprintCategoryMove')), array (  '_controller' => 'partkeepr.category.move',  '_resource' => 'FootprintCategory',));
                    }
                    not_FootprintCategoryMove:

                }

            }

            if (0 === strpos($pathinfo, '/api/import_presets')) {
                // api_import_presets_get_collection
                if ('/api/import_presets' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_import_presets_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ImportPreset',  '_route' => 'api_import_presets_get_collection',);
                }
                not_api_import_presets_get_collection:

                // api_import_presets_post_collection
                if ('/api/import_presets' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_import_presets_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ImportPreset',  '_route' => 'api_import_presets_post_collection',);
                }
                not_api_import_presets_post_collection:

                // api_import_presets_get_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_import_presets_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_import_presets_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ImportPreset',));
                }
                not_api_import_presets_get_item:

                // api_import_presets_put_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_import_presets_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_import_presets_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ImportPreset',));
                }
                not_api_import_presets_put_item:

                // api_import_presets_delete_item
                if (preg_match('#^/api/import_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_import_presets_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_import_presets_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ImportPreset',));
                }
                not_api_import_presets_delete_item:

            }

            if (0 === strpos($pathinfo, '/api/grid_presets')) {
                // api_grid_presets_get_collection
                if ('/api/grid_presets' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_grid_presets_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'GridPreset',  '_route' => 'api_grid_presets_get_collection',);
                }
                not_api_grid_presets_get_collection:

                // api_grid_presets_post_collection
                if ('/api/grid_presets' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_grid_presets_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'GridPreset',  '_route' => 'api_grid_presets_post_collection',);
                }
                not_api_grid_presets_post_collection:

                // api_grid_presets_get_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_grid_presets_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_grid_presets_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'GridPreset',));
                }
                not_api_grid_presets_get_item:

                // api_grid_presets_put_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_grid_presets_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_grid_presets_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'GridPreset',));
                }
                not_api_grid_presets_put_item:

                // api_grid_presets_delete_item
                if (preg_match('#^/api/grid_presets/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_grid_presets_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_grid_presets_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'GridPreset',));
                }
                not_api_grid_presets_delete_item:

                // MarkGridPresetAsDefault
                if (preg_match('#^/api/grid_presets/(?P<id>[^/]++)/markAsDefault$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_MarkGridPresetAsDefault;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'MarkGridPresetAsDefault')), array (  '_controller' => 'partkeepr.grid_preset.mark_as_default',  '_resource' => 'GridPreset',));
                }
                not_MarkGridPresetAsDefault:

            }

            if (0 === strpos($pathinfo, '/api/part')) {
                if (0 === strpos($pathinfo, '/api/parts')) {
                    // PartsGet
                    if ('/api/parts' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_PartsGet;
                        }

                        return array (  '_controller' => 'partkeepr.parts.collection_get',  '_resource' => 'Part',  '_route' => 'PartsGet',);
                    }
                    not_PartsGet:

                    // PartPost
                    if ('/api/parts' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_PartPost;
                        }

                        return array (  '_controller' => 'partkeepr.part.post',  '_resource' => 'Part',  '_route' => 'PartPost',);
                    }
                    not_PartPost:

                    // api_parts_get_item
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_parts_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_parts_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Part',));
                    }
                    not_api_parts_get_item:

                    // PartPut
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartPut;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartPut')), array (  '_controller' => 'partkeepr.part.put',  '_resource' => 'Part',));
                    }
                    not_PartPut:

                    // api_parts_delete_item
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_parts_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_parts_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Part',));
                    }
                    not_api_parts_delete_item:

                    // PartAddStock
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)/addStock$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartAddStock;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartAddStock')), array (  '_controller' => 'partkeepr.part.add_stock',  '_resource' => 'Part',));
                    }
                    not_PartAddStock:

                    // PartRemoveStock
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)/removeStock$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartRemoveStock;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartRemoveStock')), array (  '_controller' => 'partkeepr.part.remove_stock',  '_resource' => 'Part',));
                    }
                    not_PartRemoveStock:

                    // PartSetStock
                    if (preg_match('#^/api/parts/(?P<id>[^/]++)/setStock$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartSetStock;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartSetStock')), array (  '_controller' => 'partkeepr.part.set_stock',  '_resource' => 'Part',));
                    }
                    not_PartSetStock:

                }

                if (0 === strpos($pathinfo, '/api/part_')) {
                    if (0 === strpos($pathinfo, '/api/part_attachments')) {
                        // api_part_attachments_get_collection
                        if ('/api/part_attachments' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_attachments_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartAttachment',  '_route' => 'api_part_attachments_get_collection',);
                        }
                        not_api_part_attachments_get_collection:

                        // api_part_attachments_post_collection
                        if ('/api/part_attachments' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_part_attachments_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartAttachment',  '_route' => 'api_part_attachments_post_collection',);
                        }
                        not_api_part_attachments_post_collection:

                        // api_part_attachments_get_item
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_attachments_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_attachments_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartAttachment',));
                        }
                        not_api_part_attachments_get_item:

                        // PartAttachmentGet
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/]++)/getFile$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_PartAttachmentGet;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartAttachmentGet')), array (  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartAttachmentController::getFileAction',  '_resource' => 'PartAttachment',));
                        }
                        not_PartAttachmentGet:

                        // PartAttachmentMimeTypeIcon
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/]++)/getMimeTypeIcon$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_PartAttachmentMimeTypeIcon;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartAttachmentMimeTypeIcon')), array (  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartAttachmentController::getMimeTypeIconAction',  '_resource' => 'PartAttachment',));
                        }
                        not_PartAttachmentMimeTypeIcon:

                        // PartAttachmentGetImage
                        if (preg_match('#^/api/part_attachments/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_PartAttachmentGetImage;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartAttachmentGetImage')), array (  '_controller' => 'PartKeepr\\PartBundle\\Controller\\PartAttachmentController::getImageAction',  '_resource' => 'PartAttachment',));
                        }
                        not_PartAttachmentGetImage:

                    }

                    if (0 === strpos($pathinfo, '/api/part_categories')) {
                        // api_part_categories_get_collection
                        if ('/api/part_categories' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_categories_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartCategory',  '_route' => 'api_part_categories_get_collection',);
                        }
                        not_api_part_categories_get_collection:

                        // PartKeeprPartCategoryGetRootNode
                        if ('/api/part_categories/getExtJSRootNode' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_PartKeeprPartCategoryGetRootNode;
                            }

                            return array (  '_controller' => 'partkeepr.category.get_root_node',  '_resource' => 'PartCategory',  '_route' => 'PartKeeprPartCategoryGetRootNode',);
                        }
                        not_PartKeeprPartCategoryGetRootNode:

                        // api_part_categories_post_collection
                        if ('/api/part_categories' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_part_categories_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartCategory',  '_route' => 'api_part_categories_post_collection',);
                        }
                        not_api_part_categories_post_collection:

                        // api_part_categories_get_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_categories_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_categories_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartCategory',));
                        }
                        not_api_part_categories_get_item:

                        // api_part_categories_put_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_part_categories_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_categories_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'PartCategory',));
                        }
                        not_api_part_categories_put_item:

                        // api_part_categories_delete_item
                        if (preg_match('#^/api/part_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_part_categories_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_categories_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'PartCategory',));
                        }
                        not_api_part_categories_delete_item:

                        // PartKeeprPartCategoryMove
                        if (preg_match('#^/api/part_categories/(?P<id>[^/]++)/move$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_PartKeeprPartCategoryMove;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartKeeprPartCategoryMove')), array (  '_controller' => 'partkeepr.category.move',  '_resource' => 'PartCategory',));
                        }
                        not_PartKeeprPartCategoryMove:

                    }

                    if (0 === strpos($pathinfo, '/api/part_distributors')) {
                        // api_part_distributors_get_collection
                        if ('/api/part_distributors' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_distributors_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartDistributor',  '_route' => 'api_part_distributors_get_collection',);
                        }
                        not_api_part_distributors_get_collection:

                        // api_part_distributors_post_collection
                        if ('/api/part_distributors' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_part_distributors_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartDistributor',  '_route' => 'api_part_distributors_post_collection',);
                        }
                        not_api_part_distributors_post_collection:

                        // api_part_distributors_get_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_distributors_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_distributors_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartDistributor',));
                        }
                        not_api_part_distributors_get_item:

                        // api_part_distributors_put_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_part_distributors_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_distributors_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'PartDistributor',));
                        }
                        not_api_part_distributors_put_item:

                        // api_part_distributors_delete_item
                        if (preg_match('#^/api/part_distributors/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_part_distributors_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_distributors_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'PartDistributor',));
                        }
                        not_api_part_distributors_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/part_manufacturers')) {
                        // api_part_manufacturers_get_collection
                        if ('/api/part_manufacturers' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_manufacturers_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartManufacturer',  '_route' => 'api_part_manufacturers_get_collection',);
                        }
                        not_api_part_manufacturers_get_collection:

                        // api_part_manufacturers_post_collection
                        if ('/api/part_manufacturers' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_part_manufacturers_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartManufacturer',  '_route' => 'api_part_manufacturers_post_collection',);
                        }
                        not_api_part_manufacturers_post_collection:

                        // api_part_manufacturers_get_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_manufacturers_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_manufacturers_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartManufacturer',));
                        }
                        not_api_part_manufacturers_get_item:

                        // api_part_manufacturers_put_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_part_manufacturers_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_manufacturers_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'PartManufacturer',));
                        }
                        not_api_part_manufacturers_put_item:

                        // api_part_manufacturers_delete_item
                        if (preg_match('#^/api/part_manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_part_manufacturers_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_manufacturers_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'PartManufacturer',));
                        }
                        not_api_part_manufacturers_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/part_parameters')) {
                        // api_part_parameters_get_collection
                        if ('/api/part_parameters' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_parameters_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartParameter',  '_route' => 'api_part_parameters_get_collection',);
                        }
                        not_api_part_parameters_get_collection:

                        // api_part_parameters_post_collection
                        if ('/api/part_parameters' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_part_parameters_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartParameter',  '_route' => 'api_part_parameters_post_collection',);
                        }
                        not_api_part_parameters_post_collection:

                        // api_part_parameters_get_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_part_parameters_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_parameters_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartParameter',));
                        }
                        not_api_part_parameters_get_item:

                        // api_part_parameters_put_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_part_parameters_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_parameters_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'PartParameter',));
                        }
                        not_api_part_parameters_put_item:

                        // api_part_parameters_delete_item
                        if (preg_match('#^/api/part_parameters/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_part_parameters_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_parameters_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'PartParameter',));
                        }
                        not_api_part_parameters_delete_item:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/m')) {
                if (0 === strpos($pathinfo, '/api/meta_part_parameter_criterias')) {
                    // api_meta_part_parameter_criterias_get_collection
                    if ('/api/meta_part_parameter_criterias' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_meta_part_parameter_criterias_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'MetaPartParameterCriteria',  '_route' => 'api_meta_part_parameter_criterias_get_collection',);
                    }
                    not_api_meta_part_parameter_criterias_get_collection:

                    // api_meta_part_parameter_criterias_post_collection
                    if ('/api/meta_part_parameter_criterias' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_meta_part_parameter_criterias_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'MetaPartParameterCriteria',  '_route' => 'api_meta_part_parameter_criterias_post_collection',);
                    }
                    not_api_meta_part_parameter_criterias_post_collection:

                    // api_meta_part_parameter_criterias_get_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_meta_part_parameter_criterias_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_meta_part_parameter_criterias_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'MetaPartParameterCriteria',));
                    }
                    not_api_meta_part_parameter_criterias_get_item:

                    // api_meta_part_parameter_criterias_put_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_meta_part_parameter_criterias_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_meta_part_parameter_criterias_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'MetaPartParameterCriteria',));
                    }
                    not_api_meta_part_parameter_criterias_put_item:

                    // api_meta_part_parameter_criterias_delete_item
                    if (preg_match('#^/api/meta_part_parameter_criterias/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_meta_part_parameter_criterias_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_meta_part_parameter_criterias_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'MetaPartParameterCriteria',));
                    }
                    not_api_meta_part_parameter_criterias_delete_item:

                }

                if (0 === strpos($pathinfo, '/api/manufacturer')) {
                    if (0 === strpos($pathinfo, '/api/manufacturers')) {
                        // api_manufacturers_get_collection
                        if ('/api/manufacturers' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_manufacturers_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Manufacturer',  '_route' => 'api_manufacturers_get_collection',);
                        }
                        not_api_manufacturers_get_collection:

                        // api_manufacturers_post_collection
                        if ('/api/manufacturers' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_manufacturers_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'Manufacturer',  '_route' => 'api_manufacturers_post_collection',);
                        }
                        not_api_manufacturers_post_collection:

                        // api_manufacturers_get_item
                        if (preg_match('#^/api/manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_manufacturers_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_manufacturers_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Manufacturer',));
                        }
                        not_api_manufacturers_get_item:

                        // api_manufacturers_put_item
                        if (preg_match('#^/api/manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_manufacturers_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_manufacturers_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Manufacturer',));
                        }
                        not_api_manufacturers_put_item:

                        // api_manufacturers_delete_item
                        if (preg_match('#^/api/manufacturers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_manufacturers_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_manufacturers_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Manufacturer',));
                        }
                        not_api_manufacturers_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/manufacturer_i_c_logos')) {
                        // api_manufacturer_i_c_logos_get_collection
                        if ('/api/manufacturer_i_c_logos' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_manufacturer_i_c_logos_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ManufacturerICLogo',  '_route' => 'api_manufacturer_i_c_logos_get_collection',);
                        }
                        not_api_manufacturer_i_c_logos_get_collection:

                        // api_manufacturer_i_c_logos_post_collection
                        if ('/api/manufacturer_i_c_logos' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_manufacturer_i_c_logos_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ManufacturerICLogo',  '_route' => 'api_manufacturer_i_c_logos_post_collection',);
                        }
                        not_api_manufacturer_i_c_logos_post_collection:

                        // api_manufacturer_i_c_logos_get_item
                        if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_manufacturer_i_c_logos_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_manufacturer_i_c_logos_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ManufacturerICLogo',));
                        }
                        not_api_manufacturer_i_c_logos_get_item:

                        // api_manufacturer_i_c_logos_put_item
                        if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_manufacturer_i_c_logos_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_manufacturer_i_c_logos_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ManufacturerICLogo',));
                        }
                        not_api_manufacturer_i_c_logos_put_item:

                        // ManufacturerIcLogoGetImage
                        if (preg_match('#^/api/manufacturer_i_c_logos/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_ManufacturerIcLogoGetImage;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'ManufacturerIcLogoGetImage')), array (  '_controller' => 'PartKeepr\\ManufacturerBundle\\Controller\\ManufacturerIcLogoController::getImageAction',  '_resource' => 'ManufacturerICLogo',));
                        }
                        not_ManufacturerIcLogoGetImage:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/part_measurement_units')) {
                // api_part_measurement_units_get_collection
                if ('/api/part_measurement_units' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_part_measurement_units_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'PartMeasurementUnit',  '_route' => 'api_part_measurement_units_get_collection',);
                }
                not_api_part_measurement_units_get_collection:

                // api_part_measurement_units_post_collection
                if ('/api/part_measurement_units' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_part_measurement_units_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'PartMeasurementUnit',  '_route' => 'api_part_measurement_units_post_collection',);
                }
                not_api_part_measurement_units_post_collection:

                // PartMeasurementUnitSetDefault
                if (preg_match('#^/api/part_measurement_units/(?P<id>[^/]++)/setDefault$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_PartMeasurementUnitSetDefault;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartMeasurementUnitSetDefault')), array (  '_controller' => 'partkeepr.part_measurement_unit.set_default',  '_resource' => 'PartMeasurementUnit',));
                }
                not_PartMeasurementUnitSetDefault:

                // api_part_measurement_units_get_item
                if (preg_match('#^/api/part_measurement_units/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_part_measurement_units_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_measurement_units_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'PartMeasurementUnit',));
                }
                not_api_part_measurement_units_get_item:

                // api_part_measurement_units_put_item
                if (preg_match('#^/api/part_measurement_units/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_part_measurement_units_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_part_measurement_units_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'PartMeasurementUnit',));
                }
                not_api_part_measurement_units_put_item:

            }

            if (0 === strpos($pathinfo, '/api/units')) {
                // api_units_get_collection
                if ('/api/units' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_units_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Unit',  '_route' => 'api_units_get_collection',);
                }
                not_api_units_get_collection:

                // api_units_post_collection
                if ('/api/units' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_units_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'Unit',  '_route' => 'api_units_post_collection',);
                }
                not_api_units_post_collection:

                // api_units_get_item
                if (preg_match('#^/api/units/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_units_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_units_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Unit',));
                }
                not_api_units_get_item:

                // api_units_put_item
                if (preg_match('#^/api/units/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_units_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_units_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Unit',));
                }
                not_api_units_put_item:

                // api_units_delete_item
                if (preg_match('#^/api/units/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_units_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_units_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Unit',));
                }
                not_api_units_delete_item:

            }

            if (0 === strpos($pathinfo, '/api/s')) {
                if (0 === strpos($pathinfo, '/api/si_prefixes')) {
                    // api_si_prefixes_get_collection
                    if ('/api/si_prefixes' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_si_prefixes_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'SiPrefix',  '_route' => 'api_si_prefixes_get_collection',);
                    }
                    not_api_si_prefixes_get_collection:

                    // api_si_prefixes_post_collection
                    if ('/api/si_prefixes' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_si_prefixes_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'SiPrefix',  '_route' => 'api_si_prefixes_post_collection',);
                    }
                    not_api_si_prefixes_post_collection:

                    // api_si_prefixes_get_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_si_prefixes_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_si_prefixes_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'SiPrefix',));
                    }
                    not_api_si_prefixes_get_item:

                    // api_si_prefixes_put_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_si_prefixes_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_si_prefixes_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'SiPrefix',));
                    }
                    not_api_si_prefixes_put_item:

                    // api_si_prefixes_delete_item
                    if (preg_match('#^/api/si_prefixes/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_si_prefixes_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_si_prefixes_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'SiPrefix',));
                    }
                    not_api_si_prefixes_delete_item:

                }

                if (0 === strpos($pathinfo, '/api/sto')) {
                    if (0 === strpos($pathinfo, '/api/storage_locations')) {
                        // api_storage_locations_get_collection
                        if ('/api/storage_locations' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_storage_locations_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'StorageLocation',  '_route' => 'api_storage_locations_get_collection',);
                        }
                        not_api_storage_locations_get_collection:

                        // api_storage_locations_post_collection
                        if ('/api/storage_locations' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_storage_locations_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'StorageLocation',  '_route' => 'api_storage_locations_post_collection',);
                        }
                        not_api_storage_locations_post_collection:

                        // api_storage_locations_get_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_storage_locations_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_locations_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'StorageLocation',));
                        }
                        not_api_storage_locations_get_item:

                        // api_storage_locations_put_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_storage_locations_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_locations_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'StorageLocation',));
                        }
                        not_api_storage_locations_put_item:

                        // api_storage_locations_delete_item
                        if (preg_match('#^/api/storage_locations/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_storage_locations_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_locations_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'StorageLocation',));
                        }
                        not_api_storage_locations_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/stock_entries')) {
                        // api_stock_entries_get_collection
                        if ('/api/stock_entries' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_stock_entries_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'StockEntry',  '_route' => 'api_stock_entries_get_collection',);
                        }
                        not_api_stock_entries_get_collection:

                        // api_stock_entries_post_collection
                        if ('/api/stock_entries' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_stock_entries_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'StockEntry',  '_route' => 'api_stock_entries_post_collection',);
                        }
                        not_api_stock_entries_post_collection:

                        // api_stock_entries_get_item
                        if (preg_match('#^/api/stock_entries/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_stock_entries_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_stock_entries_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'StockEntry',));
                        }
                        not_api_stock_entries_get_item:

                        // api_stock_entries_put_item
                        if (preg_match('#^/api/stock_entries/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_stock_entries_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_stock_entries_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'StockEntry',));
                        }
                        not_api_stock_entries_put_item:

                        // api_stock_entries_delete_item
                        if (preg_match('#^/api/stock_entries/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_stock_entries_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_stock_entries_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'StockEntry',));
                        }
                        not_api_stock_entries_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/storage_location_')) {
                        if (0 === strpos($pathinfo, '/api/storage_location_categories')) {
                            // api_storage_location_categories_get_collection
                            if ('/api/storage_location_categories' === $pathinfo) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_api_storage_location_categories_get_collection;
                                }

                                return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'StorageLocationCategory',  '_route' => 'api_storage_location_categories_get_collection',);
                            }
                            not_api_storage_location_categories_get_collection:

                            // StorageLocationCategoryGetRoot
                            if ('/api/storage_location_categories/getExtJSRootNode' === $pathinfo) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_StorageLocationCategoryGetRoot;
                                }

                                return array (  '_controller' => 'partkeepr.category.get_root_node',  '_resource' => 'StorageLocationCategory',  '_route' => 'StorageLocationCategoryGetRoot',);
                            }
                            not_StorageLocationCategoryGetRoot:

                            // api_storage_location_categories_post_collection
                            if ('/api/storage_location_categories' === $pathinfo) {
                                if ($this->context->getMethod() != 'POST') {
                                    $allow[] = 'POST';
                                    goto not_api_storage_location_categories_post_collection;
                                }

                                return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'StorageLocationCategory',  '_route' => 'api_storage_location_categories_post_collection',);
                            }
                            not_api_storage_location_categories_post_collection:

                            // api_storage_location_categories_get_item
                            if (preg_match('#^/api/storage_location_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_api_storage_location_categories_get_item;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_location_categories_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'StorageLocationCategory',));
                            }
                            not_api_storage_location_categories_get_item:

                            // api_storage_location_categories_put_item
                            if (preg_match('#^/api/storage_location_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                                if ($this->context->getMethod() != 'PUT') {
                                    $allow[] = 'PUT';
                                    goto not_api_storage_location_categories_put_item;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_location_categories_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'StorageLocationCategory',));
                            }
                            not_api_storage_location_categories_put_item:

                            // api_storage_location_categories_delete_item
                            if (preg_match('#^/api/storage_location_categories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                                if ($this->context->getMethod() != 'DELETE') {
                                    $allow[] = 'DELETE';
                                    goto not_api_storage_location_categories_delete_item;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_location_categories_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'StorageLocationCategory',));
                            }
                            not_api_storage_location_categories_delete_item:

                            // StorageLocationCategoryMove
                            if (preg_match('#^/api/storage_location_categories/(?P<id>[^/]++)/move$#sD', $pathinfo, $matches)) {
                                if ($this->context->getMethod() != 'PUT') {
                                    $allow[] = 'PUT';
                                    goto not_StorageLocationCategoryMove;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'StorageLocationCategoryMove')), array (  '_controller' => 'partkeepr.category.move',  '_resource' => 'StorageLocationCategory',));
                            }
                            not_StorageLocationCategoryMove:

                        }

                        if (0 === strpos($pathinfo, '/api/storage_location_images')) {
                            // api_storage_location_images_get_collection
                            if ('/api/storage_location_images' === $pathinfo) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_api_storage_location_images_get_collection;
                                }

                                return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'StorageLocationImage',  '_route' => 'api_storage_location_images_get_collection',);
                            }
                            not_api_storage_location_images_get_collection:

                            // api_storage_location_images_post_collection
                            if ('/api/storage_location_images' === $pathinfo) {
                                if ($this->context->getMethod() != 'POST') {
                                    $allow[] = 'POST';
                                    goto not_api_storage_location_images_post_collection;
                                }

                                return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'StorageLocationImage',  '_route' => 'api_storage_location_images_post_collection',);
                            }
                            not_api_storage_location_images_post_collection:

                            // api_storage_location_images_get_item
                            if (preg_match('#^/api/storage_location_images/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_api_storage_location_images_get_item;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_storage_location_images_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'StorageLocationImage',));
                            }
                            not_api_storage_location_images_get_item:

                            // StorageLocationGetImage
                            if (preg_match('#^/api/storage_location_images/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                                if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                    $allow = array_merge($allow, array('GET', 'HEAD'));
                                    goto not_StorageLocationGetImage;
                                }

                                return $this->mergeDefaults(array_replace($matches, array('_route' => 'StorageLocationGetImage')), array (  '_controller' => 'PartKeepr\\StorageLocationBundle\\Controller\\StorageLocationImageController::getImageAction',  '_resource' => 'StorageLocationImage',));
                            }
                            not_StorageLocationGetImage:

                        }

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/t')) {
                if (0 === strpos($pathinfo, '/api/temp_')) {
                    if (0 === strpos($pathinfo, '/api/temp_images')) {
                        // TemporaryImageUpload
                        if ('/api/temp_images/upload' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_TemporaryImageUpload;
                            }

                            return array (  '_controller' => 'PartKeepr\\ImageBundle\\Controller\\TemporaryImageController::uploadAction',  '_resource' => 'TempImage',  '_route' => 'TemporaryImageUpload',);
                        }
                        not_TemporaryImageUpload:

                        // TemporaryImageUploadWebcam
                        if ('/api/temp_images/webcamUpload' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_TemporaryImageUploadWebcam;
                            }

                            return array (  '_controller' => 'PartKeepr\\ImageBundle\\Controller\\TemporaryImageController::webcamUploadAction',  '_resource' => 'TempImage',  '_route' => 'TemporaryImageUploadWebcam',);
                        }
                        not_TemporaryImageUploadWebcam:

                        // api_temp_images_get_item
                        if (preg_match('#^/api/temp_images/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_temp_images_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_temp_images_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'TempImage',));
                        }
                        not_api_temp_images_get_item:

                        // TemporaryImageGet
                        if (preg_match('#^/api/temp_images/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TemporaryImageGet;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TemporaryImageGet')), array (  '_controller' => 'PartKeepr\\ImageBundle\\Controller\\TemporaryImageController::getImageAction',  '_resource' => 'TempImage',));
                        }
                        not_TemporaryImageGet:

                    }

                    if (0 === strpos($pathinfo, '/api/temp_uploaded_files')) {
                        // TemporaryFileUpload
                        if ('/api/temp_uploaded_files/upload' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_TemporaryFileUpload;
                            }

                            return array (  '_controller' => 'PartKeepr\\UploadedFileBundle\\Controller\\TemporaryFileController::uploadAction',  '_resource' => 'TempUploadedFile',  '_route' => 'TemporaryFileUpload',);
                        }
                        not_TemporaryFileUpload:

                        // api_temp_uploaded_files_get_item
                        if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_temp_uploaded_files_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_temp_uploaded_files_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'TempUploadedFile',));
                        }
                        not_api_temp_uploaded_files_get_item:

                        // TemporaryFileGet
                        if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/]++)/getFile$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TemporaryFileGet;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TemporaryFileGet')), array (  '_controller' => 'PartKeepr\\UploadedFileBundle\\Controller\\TemporaryFileController::getFileAction',  '_resource' => 'TempUploadedFile',));
                        }
                        not_TemporaryFileGet:

                        // TemporaryFileGetMimeTypeIcon
                        if (preg_match('#^/api/temp_uploaded_files/(?P<id>[^/]++)/getMimeTypeIcon$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TemporaryFileGetMimeTypeIcon;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TemporaryFileGetMimeTypeIcon')), array (  '_controller' => 'PartKeepr\\UploadedFileBundle\\Controller\\TemporaryFileController::getMimeTypeIconAction',  '_resource' => 'TempUploadedFile',));
                        }
                        not_TemporaryFileGetMimeTypeIcon:

                        // TemporaryFileUploadWebcam
                        if ('/api/temp_uploaded_files/webcamUpload' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_TemporaryFileUploadWebcam;
                            }

                            return array (  '_controller' => 'PartKeepr\\UploadedFileBundle\\Controller\\TemporaryFileController::webcamUploadAction',  '_resource' => 'TempUploadedFile',  '_route' => 'TemporaryFileUploadWebcam',);
                        }
                        not_TemporaryFileUploadWebcam:

                    }

                }

                if (0 === strpos($pathinfo, '/api/tip_of_the_day')) {
                    if (0 === strpos($pathinfo, '/api/tip_of_the_days')) {
                        // api_tip_of_the_days_get_collection
                        if ('/api/tip_of_the_days' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_tip_of_the_days_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'TipOfTheDay',  '_route' => 'api_tip_of_the_days_get_collection',);
                        }
                        not_api_tip_of_the_days_get_collection:

                        // api_tip_of_the_days_post_collection
                        if ('/api/tip_of_the_days' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_tip_of_the_days_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'TipOfTheDay',  '_route' => 'api_tip_of_the_days_post_collection',);
                        }
                        not_api_tip_of_the_days_post_collection:

                        // TipMarkAllUnrad
                        if ('/api/tip_of_the_days/markAllTipsAsUnread' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_TipMarkAllUnrad;
                            }

                            return array (  '_controller' => 'partkeepr.tip_of_the_day.mark_all_unread',  '_resource' => 'TipOfTheDay',  '_route' => 'TipMarkAllUnrad',);
                        }
                        not_TipMarkAllUnrad:

                        // api_tip_of_the_days_get_item
                        if (preg_match('#^/api/tip_of_the_days/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_tip_of_the_days_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_tip_of_the_days_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'TipOfTheDay',));
                        }
                        not_api_tip_of_the_days_get_item:

                        // TipMarkRead
                        if (preg_match('#^/api/tip_of_the_days/(?P<id>[^/]++)/markTipRead$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_TipMarkRead;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'TipMarkRead')), array (  '_controller' => 'partkeepr.tip_of_the_day.mark_read',  '_resource' => 'TipOfTheDay',));
                        }
                        not_TipMarkRead:

                    }

                    if (0 === strpos($pathinfo, '/api/tip_of_the_day_histories')) {
                        // TipHistoriesGet
                        if ('/api/tip_of_the_day_histories' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_TipHistoriesGet;
                            }

                            return array (  '_controller' => 'partkeepr.tip_of_the_day_history.collection_get',  '_resource' => 'TipOfTheDayHistory',  '_route' => 'TipHistoriesGet',);
                        }
                        not_TipHistoriesGet:

                        // api_tip_of_the_day_histories_get_item
                        if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_tip_of_the_day_histories_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_tip_of_the_day_histories_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'TipOfTheDayHistory',));
                        }
                        not_api_tip_of_the_day_histories_get_item:

                        // api_tip_of_the_day_histories_put_item
                        if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_tip_of_the_day_histories_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_tip_of_the_day_histories_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'TipOfTheDayHistory',));
                        }
                        not_api_tip_of_the_day_histories_put_item:

                        // api_tip_of_the_day_histories_delete_item
                        if (preg_match('#^/api/tip_of_the_day_histories/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_tip_of_the_day_histories_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_tip_of_the_day_histories_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'TipOfTheDayHistory',));
                        }
                        not_api_tip_of_the_day_histories_delete_item:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/user')) {
                if (0 === strpos($pathinfo, '/api/user_providers')) {
                    // api_user_providers_get_collection
                    if ('/api/user_providers' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_user_providers_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'UserProvider',  '_route' => 'api_user_providers_get_collection',);
                    }
                    not_api_user_providers_get_collection:

                    // api_user_providers_post_collection
                    if ('/api/user_providers' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_user_providers_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'UserProvider',  '_route' => 'api_user_providers_post_collection',);
                    }
                    not_api_user_providers_post_collection:

                    // api_user_providers_get_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_user_providers_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_user_providers_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'UserProvider',));
                    }
                    not_api_user_providers_get_item:

                    // api_user_providers_put_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_user_providers_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_user_providers_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'UserProvider',));
                    }
                    not_api_user_providers_put_item:

                    // api_user_providers_delete_item
                    if (preg_match('#^/api/user_providers/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_user_providers_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_user_providers_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'UserProvider',));
                    }
                    not_api_user_providers_delete_item:

                }

                if (0 === strpos($pathinfo, '/api/users')) {
                    // api_users_get_collection
                    if ('/api/users' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_users_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'User',  '_route' => 'api_users_get_collection',);
                    }
                    not_api_users_get_collection:

                    // PartKeeprUserPost
                    if ('/api/users' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_PartKeeprUserPost;
                        }

                        return array (  '_controller' => 'partkeepr.user.post',  '_resource' => 'User',  '_route' => 'PartKeeprUserPost',);
                    }
                    not_PartKeeprUserPost:

                    // PartKeeprAuthGetProviders
                    if ('/api/users/get_user_providers' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_PartKeeprAuthGetProviders;
                        }

                        return array (  '_controller' => 'partkeepr.auth.get_providers',  '_resource' => 'User',  '_route' => 'PartKeeprAuthGetProviders',);
                    }
                    not_PartKeeprAuthGetProviders:

                    // api_users_get_item
                    if (preg_match('#^/api/users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_users_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_users_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'User',));
                    }
                    not_api_users_get_item:

                    // PartKeeprUserPut
                    if (preg_match('#^/api/users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartKeeprUserPut;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartKeeprUserPut')), array (  '_controller' => 'partkeepr.user.put',  '_resource' => 'User',));
                    }
                    not_PartKeeprUserPut:

                    // PartKeeprUserDelete
                    if (preg_match('#^/api/users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_PartKeeprUserDelete;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartKeeprUserDelete')), array (  '_controller' => 'partkeepr.user.delete',  '_resource' => 'User',));
                    }
                    not_PartKeeprUserDelete:

                }

                if (0 === strpos($pathinfo, '/api/user_preferences')) {
                    // PartKeeprUserPreferenceGet
                    if ('/api/user_preferences' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_PartKeeprUserPreferenceGet;
                        }

                        return array (  '_controller' => 'partkeepr.user_preference.get_preferences',  '_resource' => 'User',  '_route' => 'PartKeeprUserPreferenceGet',);
                    }
                    not_PartKeeprUserPreferenceGet:

                    // PartKeeprUserPreferenceSet
                    if ('/api/user_preferences' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('POST', 'PUT'))) {
                            $allow = array_merge($allow, array('POST', 'PUT'));
                            goto not_PartKeeprUserPreferenceSet;
                        }

                        return array (  '_controller' => 'partkeepr.user_preference.set_preference',  '_resource' => 'User',  '_route' => 'PartKeeprUserPreferenceSet',);
                    }
                    not_PartKeeprUserPreferenceSet:

                    // PartKeeprUserPreferenceDelete
                    if ('/api/user_preferences' === $pathinfo) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_PartKeeprUserPreferenceDelete;
                        }

                        return array (  '_controller' => 'partkeepr.user_preference.delete_preference',  '_resource' => 'User',  '_route' => 'PartKeeprUserPreferenceDelete',);
                    }
                    not_PartKeeprUserPreferenceDelete:

                }

                if (0 === strpos($pathinfo, '/api/users')) {
                    // PartKeeprAuthLogin
                    if ('/api/users/login' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_PartKeeprAuthLogin;
                        }

                        return array (  '_controller' => 'partkeepr.auth.login',  '_resource' => 'User',  '_route' => 'PartKeeprAuthLogin',);
                    }
                    not_PartKeeprAuthLogin:

                    // PartKeeprAuthChangePassword
                    if (preg_match('#^/api/users/(?P<id>[^/]++)/changePassword$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_PartKeeprAuthChangePassword;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'PartKeeprAuthChangePassword')), array (  '_controller' => 'partkeepr.auth.change_password',  '_resource' => 'User',));
                    }
                    not_PartKeeprAuthChangePassword:

                }

            }

            if (0 === strpos($pathinfo, '/api/f_o_s_users')) {
                // api_f_o_s_users_get_collection
                if ('/api/f_o_s_users' === $pathinfo) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_f_o_s_users_get_collection;
                    }

                    return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'FOSUser',  '_route' => 'api_f_o_s_users_get_collection',);
                }
                not_api_f_o_s_users_get_collection:

                // api_f_o_s_users_post_collection
                if ('/api/f_o_s_users' === $pathinfo) {
                    if ($this->context->getMethod() != 'POST') {
                        $allow[] = 'POST';
                        goto not_api_f_o_s_users_post_collection;
                    }

                    return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'FOSUser',  '_route' => 'api_f_o_s_users_post_collection',);
                }
                not_api_f_o_s_users_post_collection:

                // api_f_o_s_users_get_item
                if (preg_match('#^/api/f_o_s_users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                        $allow = array_merge($allow, array('GET', 'HEAD'));
                        goto not_api_f_o_s_users_get_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_f_o_s_users_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'FOSUser',));
                }
                not_api_f_o_s_users_get_item:

                // api_f_o_s_users_put_item
                if (preg_match('#^/api/f_o_s_users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'PUT') {
                        $allow[] = 'PUT';
                        goto not_api_f_o_s_users_put_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_f_o_s_users_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'FOSUser',));
                }
                not_api_f_o_s_users_put_item:

                // api_f_o_s_users_delete_item
                if (preg_match('#^/api/f_o_s_users/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                    if ($this->context->getMethod() != 'DELETE') {
                        $allow[] = 'DELETE';
                        goto not_api_f_o_s_users_delete_item;
                    }

                    return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_f_o_s_users_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'FOSUser',));
                }
                not_api_f_o_s_users_delete_item:

            }

            if (0 === strpos($pathinfo, '/api/project')) {
                if (0 === strpos($pathinfo, '/api/projects')) {
                    // api_projects_get_collection
                    if ('/api/projects' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_projects_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Project',  '_route' => 'api_projects_get_collection',);
                    }
                    not_api_projects_get_collection:

                    // api_projects_post_collection
                    if ('/api/projects' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_projects_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'Project',  '_route' => 'api_projects_post_collection',);
                    }
                    not_api_projects_post_collection:

                    // api_projects_get_item
                    if (preg_match('#^/api/projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_projects_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_projects_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'Project',));
                    }
                    not_api_projects_get_item:

                    // api_projects_put_item
                    if (preg_match('#^/api/projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_projects_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_projects_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Project',));
                    }
                    not_api_projects_put_item:

                    // api_projects_delete_item
                    if (preg_match('#^/api/projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_projects_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_projects_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Project',));
                    }
                    not_api_projects_delete_item:

                }

                if (0 === strpos($pathinfo, '/api/project_parts')) {
                    // api_project_parts_get_collection
                    if ('/api/project_parts' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_project_parts_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ProjectPart',  '_route' => 'api_project_parts_get_collection',);
                    }
                    not_api_project_parts_get_collection:

                    // api_project_parts_post_collection
                    if ('/api/project_parts' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_project_parts_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ProjectPart',  '_route' => 'api_project_parts_post_collection',);
                    }
                    not_api_project_parts_post_collection:

                    // api_project_parts_get_item
                    if (preg_match('#^/api/project_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_project_parts_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_parts_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ProjectPart',));
                    }
                    not_api_project_parts_get_item:

                    // api_project_parts_put_item
                    if (preg_match('#^/api/project_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_project_parts_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_parts_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ProjectPart',));
                    }
                    not_api_project_parts_put_item:

                    // api_project_parts_delete_item
                    if (preg_match('#^/api/project_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_project_parts_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_parts_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ProjectPart',));
                    }
                    not_api_project_parts_delete_item:

                }

            }

            if (0 === strpos($pathinfo, '/api/report')) {
                if (0 === strpos($pathinfo, '/api/reports')) {
                    // api_reports_get_collection
                    if ('/api/reports' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_reports_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'Report',  '_route' => 'api_reports_get_collection',);
                    }
                    not_api_reports_get_collection:

                    // ProjectReportPost
                    if ('/api/reports' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_ProjectReportPost;
                        }

                        return array (  '_controller' => 'PartKeepr\\ProjectBundle\\Controller\\ProjectReportController::createReportAction',  '_resource' => 'Report',  '_route' => 'ProjectReportPost',);
                    }
                    not_ProjectReportPost:

                    // ProjectReportGet
                    if (preg_match('#^/api/reports/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_ProjectReportGet;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'ProjectReportGet')), array (  '_controller' => 'PartKeepr\\ProjectBundle\\Controller\\ProjectReportController::getReportAction',  '_resource' => 'Report',));
                    }
                    not_ProjectReportGet:

                    // api_reports_put_item
                    if (preg_match('#^/api/reports/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_api_reports_put_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_reports_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'Report',));
                    }
                    not_api_reports_put_item:

                    // api_reports_delete_item
                    if (preg_match('#^/api/reports/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_api_reports_delete_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_reports_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'Report',));
                    }
                    not_api_reports_delete_item:

                }

                if (0 === strpos($pathinfo, '/api/report_p')) {
                    if (0 === strpos($pathinfo, '/api/report_projects')) {
                        // api_report_projects_get_collection
                        if ('/api/report_projects' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_report_projects_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ReportProject',  '_route' => 'api_report_projects_get_collection',);
                        }
                        not_api_report_projects_get_collection:

                        // api_report_projects_post_collection
                        if ('/api/report_projects' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_report_projects_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ReportProject',  '_route' => 'api_report_projects_post_collection',);
                        }
                        not_api_report_projects_post_collection:

                        // api_report_projects_get_item
                        if (preg_match('#^/api/report_projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_report_projects_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_projects_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ReportProject',));
                        }
                        not_api_report_projects_get_item:

                        // api_report_projects_put_item
                        if (preg_match('#^/api/report_projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_report_projects_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_projects_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ReportProject',));
                        }
                        not_api_report_projects_put_item:

                        // api_report_projects_delete_item
                        if (preg_match('#^/api/report_projects/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_report_projects_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_projects_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ReportProject',));
                        }
                        not_api_report_projects_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/report_parts')) {
                        // api_report_parts_get_collection
                        if ('/api/report_parts' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_report_parts_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ReportPart',  '_route' => 'api_report_parts_get_collection',);
                        }
                        not_api_report_parts_get_collection:

                        // api_report_parts_post_collection
                        if ('/api/report_parts' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_report_parts_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ReportPart',  '_route' => 'api_report_parts_post_collection',);
                        }
                        not_api_report_parts_post_collection:

                        // api_report_parts_get_item
                        if (preg_match('#^/api/report_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_report_parts_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_parts_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ReportPart',));
                        }
                        not_api_report_parts_get_item:

                        // api_report_parts_put_item
                        if (preg_match('#^/api/report_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_report_parts_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_parts_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ReportPart',));
                        }
                        not_api_report_parts_put_item:

                        // api_report_parts_delete_item
                        if (preg_match('#^/api/report_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_report_parts_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_report_parts_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ReportPart',));
                        }
                        not_api_report_parts_delete_item:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/project_')) {
                if (0 === strpos($pathinfo, '/api/project_attachments')) {
                    // api_project_attachments_get_collection
                    if ('/api/project_attachments' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_project_attachments_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ProjectAttachment',  '_route' => 'api_project_attachments_get_collection',);
                    }
                    not_api_project_attachments_get_collection:

                    // api_project_attachments_post_collection
                    if ('/api/project_attachments' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_project_attachments_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ProjectAttachment',  '_route' => 'api_project_attachments_post_collection',);
                    }
                    not_api_project_attachments_post_collection:

                    // api_project_attachments_get_item
                    if (preg_match('#^/api/project_attachments/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_project_attachments_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_attachments_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ProjectAttachment',));
                    }
                    not_api_project_attachments_get_item:

                    // ProjectAttachmentGet
                    if (preg_match('#^/api/project_attachments/(?P<id>[^/]++)/getFile$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_ProjectAttachmentGet;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'ProjectAttachmentGet')), array (  '_controller' => 'PartKeepr\\ProjectBundle\\Controller\\ProjectAttachmentController::getFileAction',  '_resource' => 'ProjectAttachment',));
                    }
                    not_ProjectAttachmentGet:

                    // ProjectAttachmentMimeTypeIcon
                    if (preg_match('#^/api/project_attachments/(?P<id>[^/]++)/getMimeTypeIcon$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_ProjectAttachmentMimeTypeIcon;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'ProjectAttachmentMimeTypeIcon')), array (  '_controller' => 'PartKeepr\\ProjectBundle\\Controller\\ProjectAttachmentController::getMimeTypeIconAction',  '_resource' => 'ProjectAttachment',));
                    }
                    not_ProjectAttachmentMimeTypeIcon:

                    // ProjectAttachmentGetImage
                    if (preg_match('#^/api/project_attachments/(?P<id>[^/]++)/getImage$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_ProjectAttachmentGetImage;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'ProjectAttachmentGetImage')), array (  '_controller' => 'PartKeepr\\ProjectBundle\\Controller\\ProjectAttachmentController::getImageAction',  '_resource' => 'ProjectAttachment',));
                    }
                    not_ProjectAttachmentGetImage:

                }

                if (0 === strpos($pathinfo, '/api/project_run')) {
                    if (0 === strpos($pathinfo, '/api/project_runs')) {
                        // api_project_runs_get_collection
                        if ('/api/project_runs' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_project_runs_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ProjectRun',  '_route' => 'api_project_runs_get_collection',);
                        }
                        not_api_project_runs_get_collection:

                        // api_project_runs_post_collection
                        if ('/api/project_runs' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_project_runs_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ProjectRun',  '_route' => 'api_project_runs_post_collection',);
                        }
                        not_api_project_runs_post_collection:

                        // api_project_runs_get_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_project_runs_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_runs_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ProjectRun',));
                        }
                        not_api_project_runs_get_item:

                        // api_project_runs_put_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_project_runs_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_runs_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ProjectRun',));
                        }
                        not_api_project_runs_put_item:

                        // api_project_runs_delete_item
                        if (preg_match('#^/api/project_runs/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_project_runs_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_runs_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ProjectRun',));
                        }
                        not_api_project_runs_delete_item:

                    }

                    if (0 === strpos($pathinfo, '/api/project_run_parts')) {
                        // api_project_run_parts_get_collection
                        if ('/api/project_run_parts' === $pathinfo) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_project_run_parts_get_collection;
                            }

                            return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'ProjectRunPart',  '_route' => 'api_project_run_parts_get_collection',);
                        }
                        not_api_project_run_parts_get_collection:

                        // api_project_run_parts_post_collection
                        if ('/api/project_run_parts' === $pathinfo) {
                            if ($this->context->getMethod() != 'POST') {
                                $allow[] = 'POST';
                                goto not_api_project_run_parts_post_collection;
                            }

                            return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'ProjectRunPart',  '_route' => 'api_project_run_parts_post_collection',);
                        }
                        not_api_project_run_parts_post_collection:

                        // api_project_run_parts_get_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                                $allow = array_merge($allow, array('GET', 'HEAD'));
                                goto not_api_project_run_parts_get_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_run_parts_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'ProjectRunPart',));
                        }
                        not_api_project_run_parts_get_item:

                        // api_project_run_parts_put_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'PUT') {
                                $allow[] = 'PUT';
                                goto not_api_project_run_parts_put_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_run_parts_put_item')), array (  '_controller' => 'api.action.put_item',  '_resource' => 'ProjectRunPart',));
                        }
                        not_api_project_run_parts_put_item:

                        // api_project_run_parts_delete_item
                        if (preg_match('#^/api/project_run_parts/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                            if ($this->context->getMethod() != 'DELETE') {
                                $allow[] = 'DELETE';
                                goto not_api_project_run_parts_delete_item;
                            }

                            return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_project_run_parts_delete_item')), array (  '_controller' => 'api.action.delete_item',  '_resource' => 'ProjectRunPart',));
                        }
                        not_api_project_run_parts_delete_item:

                    }

                }

            }

            if (0 === strpos($pathinfo, '/api/system_')) {
                if (0 === strpos($pathinfo, '/api/system_notices')) {
                    // api_system_notices_get_collection
                    if ('/api/system_notices' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_system_notices_get_collection;
                        }

                        return array (  '_controller' => 'api.action.get_collection',  '_resource' => 'SystemNotice',  '_route' => 'api_system_notices_get_collection',);
                    }
                    not_api_system_notices_get_collection:

                    // api_system_notices_post_collection
                    if ('/api/system_notices' === $pathinfo) {
                        if ($this->context->getMethod() != 'POST') {
                            $allow[] = 'POST';
                            goto not_api_system_notices_post_collection;
                        }

                        return array (  '_controller' => 'api.action.post_collection',  '_resource' => 'SystemNotice',  '_route' => 'api_system_notices_post_collection',);
                    }
                    not_api_system_notices_post_collection:

                    // api_system_notices_get_item
                    if (preg_match('#^/api/system_notices/(?P<id>[^/]++)$#sD', $pathinfo, $matches)) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_api_system_notices_get_item;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'api_system_notices_get_item')), array (  '_controller' => 'api.action.get_item',  '_resource' => 'SystemNotice',));
                    }
                    not_api_system_notices_get_item:

                    // SystemNoticeAcknowledge
                    if (preg_match('#^/api/system_notices/(?P<id>[^/]++)/acknowledge$#sD', $pathinfo, $matches)) {
                        if ($this->context->getMethod() != 'PUT') {
                            $allow[] = 'PUT';
                            goto not_SystemNoticeAcknowledge;
                        }

                        return $this->mergeDefaults(array_replace($matches, array('_route' => 'SystemNoticeAcknowledge')), array (  '_controller' => 'partkeepr.system_notice.acknowledge',  '_resource' => 'SystemNotice',));
                    }
                    not_SystemNoticeAcknowledge:

                }

                if (0 === strpos($pathinfo, '/api/system_preferences')) {
                    // PartKeeprSystemPreferenceGet
                    if ('/api/system_preferences' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('GET', 'HEAD'))) {
                            $allow = array_merge($allow, array('GET', 'HEAD'));
                            goto not_PartKeeprSystemPreferenceGet;
                        }

                        return array (  '_controller' => 'partkeepr.system_preference.get_preferences',  '_resource' => 'SystemPreference',  '_route' => 'PartKeeprSystemPreferenceGet',);
                    }
                    not_PartKeeprSystemPreferenceGet:

                    // PartKeeprSystemPreferenceSet
                    if ('/api/system_preferences' === $pathinfo) {
                        if (!in_array($this->context->getMethod(), array('POST', 'PUT'))) {
                            $allow = array_merge($allow, array('POST', 'PUT'));
                            goto not_PartKeeprSystemPreferenceSet;
                        }

                        return array (  '_controller' => 'partkeepr.system_preference.set_preference',  '_resource' => 'SystemPreference',  '_route' => 'PartKeeprSystemPreferenceSet',);
                    }
                    not_PartKeeprSystemPreferenceSet:

                    // PartKeeprSystemPreferenceDelete
                    if ('/api/system_preferences' === $pathinfo) {
                        if ($this->context->getMethod() != 'DELETE') {
                            $allow[] = 'DELETE';
                            goto not_PartKeeprSystemPreferenceDelete;
                        }

                        return array (  '_controller' => 'partkeepr.system_preference.delete_preference',  '_resource' => 'SystemPreference',  '_route' => 'PartKeeprSystemPreferenceDelete',);
                    }
                    not_PartKeeprSystemPreferenceDelete:

                }

            }

        }

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
