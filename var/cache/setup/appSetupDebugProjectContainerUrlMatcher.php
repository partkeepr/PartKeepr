<?php

use Symfony\Component\Routing\Exception\MethodNotAllowedException;
use Symfony\Component\Routing\Exception\ResourceNotFoundException;
use Symfony\Component\Routing\RequestContext;

/**
 * This class has been auto-generated
 * by the Symfony Routing Component.
 */
class appSetupDebugProjectContainerUrlMatcher extends Symfony\Bundle\FrameworkBundle\Routing\RedirectableUrlMatcher
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

        throw 0 < count($allow) ? new MethodNotAllowedException(array_unique($allow)) : new ResourceNotFoundException();
    }
}
