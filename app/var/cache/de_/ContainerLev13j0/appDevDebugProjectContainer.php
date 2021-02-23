<?php

namespace ContainerLev13j0;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\Exception\InvalidArgumentException;
use Symfony\Component\DependencyInjection\Exception\LogicException;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;
use Symfony\Component\DependencyInjection\ParameterBag\FrozenParameterBag;

/**
 * This class has been auto-generated
 * by the Symfony Dependency Injection Component.
 *
 * @final since Symfony 3.3
 */
class appDevDebugProjectContainer extends Container
{
    private $buildParameters;
    private $containerDir;
    private $parameters = [];
    private $targetDirs = [];

    public function __construct(array $buildParameters = [], $containerDir = __DIR__)
    {
        $dir = $this->targetDirs[0] = \dirname($containerDir);
        for ($i = 1; $i <= 6; ++$i) {
            $this->targetDirs[$i] = $dir = \dirname($dir);
        }
        $this->buildParameters = $buildParameters;
        $this->containerDir = $containerDir;
        $this->parameters = $this->getDefaultParameters();

        $this->services = [];
        $this->normalizedIds = [
            'liip\\functionaltestbundle\\command\\runparatestcommand' => 'Liip\\FunctionalTestBundle\\Command\\RunParatestCommand',
            'liip\\functionaltestbundle\\command\\testcommand' => 'Liip\\FunctionalTestBundle\\Command\\TestCommand',
            'symfony\\bundle\\frameworkbundle\\controller\\redirectcontroller' => 'Symfony\\Bundle\\FrameworkBundle\\Controller\\RedirectController',
            'symfony\\bundle\\frameworkbundle\\controller\\templatecontroller' => 'Symfony\\Bundle\\FrameworkBundle\\Controller\\TemplateController',
        ];
        $this->syntheticIds = [
            'kernel' => true,
        ];
        $this->methodMap = [
            'annotation_reader' => 'getAnnotationReaderService',
            'annotations.reader' => 'getAnnotations_ReaderService',
            'api_platform.cache.metadata.property' => 'getApiPlatform_Cache_Metadata_PropertyService',
            'api_platform.cache.metadata.resource' => 'getApiPlatform_Cache_Metadata_ResourceService',
            'api_platform.cache.route_name_resolver' => 'getApiPlatform_Cache_RouteNameResolverService',
            'api_platform.collection_data_provider' => 'getApiPlatform_CollectionDataProviderService',
            'api_platform.doctrine.orm.query_extension.eager_loading' => 'getApiPlatform_Doctrine_Orm_QueryExtension_EagerLoadingService',
            'api_platform.filters' => 'getApiPlatform_FiltersService',
            'api_platform.hydra.listener.response.add_link_header' => 'getApiPlatform_Hydra_Listener_Response_AddLinkHeaderService',
            'api_platform.item_data_provider' => 'getApiPlatform_ItemDataProviderService',
            'api_platform.jsonld.context_builder' => 'getApiPlatform_Jsonld_ContextBuilderService',
            'api_platform.listener.request.add_format' => 'getApiPlatform_Listener_Request_AddFormatService',
            'api_platform.listener.request.deserialize' => 'getApiPlatform_Listener_Request_DeserializeService',
            'api_platform.listener.request.read' => 'getApiPlatform_Listener_Request_ReadService',
            'api_platform.metadata.extractor.xml' => 'getApiPlatform_Metadata_Extractor_XmlService',
            'api_platform.metadata.extractor.yaml' => 'getApiPlatform_Metadata_Extractor_YamlService',
            'api_platform.metadata.property.metadata_factory' => 'getApiPlatform_Metadata_Property_MetadataFactoryService',
            'api_platform.metadata.property.name_collection_factory' => 'getApiPlatform_Metadata_Property_NameCollectionFactoryService',
            'api_platform.metadata.resource.metadata_factory' => 'getApiPlatform_Metadata_Resource_MetadataFactoryService',
            'api_platform.metadata.resource.name_collection_factory' => 'getApiPlatform_Metadata_Resource_NameCollectionFactoryService',
            'api_platform.operation_method_resolver' => 'getApiPlatform_OperationMethodResolverService',
            'api_platform.operation_path_resolver.custom' => 'getApiPlatform_OperationPathResolver_CustomService',
            'api_platform.operation_path_resolver.default' => 'getApiPlatform_OperationPathResolver_DefaultService',
            'api_platform.resource_class_resolver' => 'getApiPlatform_ResourceClassResolverService',
            'api_platform.router' => 'getApiPlatform_RouterService',
            'api_platform.serializer.context_builder' => 'getApiPlatform_Serializer_ContextBuilderService',
            'api_platform.swagger.listener.ui' => 'getApiPlatform_Swagger_Listener_UiService',
            'api_platform.swagger.normalizer.documentation' => 'getApiPlatform_Swagger_Normalizer_DocumentationService',
            'assetic.asset_factory' => 'getAssetic_AssetFactoryService',
            'assetic.request_listener' => 'getAssetic_RequestListenerService',
            'assets.context' => 'getAssets_ContextService',
            'assets.packages' => 'getAssets_PackagesService',
            'cache.annotations' => 'getCache_AnnotationsService',
            'cache.app' => 'getCache_AppService',
            'cache.serializer' => 'getCache_SerializerService',
            'cache.system' => 'getCache_SystemService',
            'cache.validator' => 'getCache_ValidatorService',
            'config_cache_factory' => 'getConfigCacheFactoryService',
            'controller_name_converter' => 'getControllerNameConverterService',
            'data_collector.form' => 'getDataCollector_FormService',
            'data_collector.form.extractor' => 'getDataCollector_Form_ExtractorService',
            'data_collector.request' => 'getDataCollector_RequestService',
            'data_collector.router' => 'getDataCollector_RouterService',
            'data_collector.translation' => 'getDataCollector_TranslationService',
            'debug.argument_resolver' => 'getDebug_ArgumentResolverService',
            'debug.controller_resolver' => 'getDebug_ControllerResolverService',
            'debug.debug_handlers_listener' => 'getDebug_DebugHandlersListenerService',
            'debug.event_dispatcher' => 'getDebug_EventDispatcherService',
            'debug.file_link_formatter' => 'getDebug_FileLinkFormatterService',
            'debug.log_processor' => 'getDebug_LogProcessorService',
            'debug.security.access.decision_manager' => 'getDebug_Security_Access_DecisionManagerService',
            'debug.stopwatch' => 'getDebug_StopwatchService',
            'debug.validator' => 'getDebug_ValidatorService',
            'doctrine' => 'getDoctrineService',
            'doctrine.dbal.logger.profiling.default' => 'getDoctrine_Dbal_Logger_Profiling_DefaultService',
            'doctrine.orm.validator_initializer' => 'getDoctrine_Orm_ValidatorInitializerService',
            'file_locator' => 'getFileLocatorService',
            'fos_user.util.canonical_fields_updater' => 'getFosUser_Util_CanonicalFieldsUpdaterService',
            'fos_user.util.email_canonicalizer' => 'getFosUser_Util_EmailCanonicalizerService',
            'fragment.listener' => 'getFragment_ListenerService',
            'http_kernel' => 'getHttpKernelService',
            'liip_functional_test.exception_listener' => 'getLiipFunctionalTest_ExceptionListenerService',
            'liip_functional_test.validator' => 'getLiipFunctionalTest_ValidatorService',
            'locale_listener' => 'getLocaleListenerService',
            'monolog.handler.console' => 'getMonolog_Handler_ConsoleService',
            'monolog.handler.firephp' => 'getMonolog_Handler_FirephpService',
            'monolog.handler.main' => 'getMonolog_Handler_MainService',
            'monolog.logger.cache' => 'getMonolog_Logger_CacheService',
            'monolog.logger.event' => 'getMonolog_Logger_EventService',
            'monolog.logger.php' => 'getMonolog_Logger_PhpService',
            'monolog.logger.profiler' => 'getMonolog_Logger_ProfilerService',
            'monolog.logger.request' => 'getMonolog_Logger_RequestService',
            'monolog.logger.translation' => 'getMonolog_Logger_TranslationService',
            'monolog.processor.psr_log_message' => 'getMonolog_Processor_PsrLogMessageService',
            'profiler' => 'getProfilerService',
            'profiler_listener' => 'getProfilerListenerService',
            'property_accessor' => 'getPropertyAccessorService',
            'property_info' => 'getPropertyInfoService',
            'request_stack' => 'getRequestStackService',
            'resolve_controller_name_subscriber' => 'getResolveControllerNameSubscriberService',
            'response_listener' => 'getResponseListenerService',
            'router' => 'getRouterService',
            'router.request_context' => 'getRouter_RequestContextService',
            'router_listener' => 'getRouterListenerService',
            'security.authentication.manager' => 'getSecurity_Authentication_ManagerService',
            'security.authentication.trust_resolver' => 'getSecurity_Authentication_TrustResolverService',
            'security.authorization_checker' => 'getSecurity_AuthorizationCheckerService',
            'security.firewall' => 'getSecurity_FirewallService',
            'security.firewall.map' => 'getSecurity_Firewall_MapService',
            'security.logout_url_generator' => 'getSecurity_LogoutUrlGeneratorService',
            'security.rememberme.response_listener' => 'getSecurity_Rememberme_ResponseListenerService',
            'security.role_hierarchy' => 'getSecurity_RoleHierarchyService',
            'security.token_storage' => 'getSecurity_TokenStorageService',
            'sensio_framework_extra.cache.listener' => 'getSensioFrameworkExtra_Cache_ListenerService',
            'sensio_framework_extra.controller.listener' => 'getSensioFrameworkExtra_Controller_ListenerService',
            'sensio_framework_extra.converter.datetime' => 'getSensioFrameworkExtra_Converter_DatetimeService',
            'sensio_framework_extra.converter.doctrine.orm' => 'getSensioFrameworkExtra_Converter_Doctrine_OrmService',
            'sensio_framework_extra.converter.listener' => 'getSensioFrameworkExtra_Converter_ListenerService',
            'sensio_framework_extra.converter.manager' => 'getSensioFrameworkExtra_Converter_ManagerService',
            'sensio_framework_extra.security.listener' => 'getSensioFrameworkExtra_Security_ListenerService',
            'sensio_framework_extra.view.listener' => 'getSensioFrameworkExtra_View_ListenerService',
            'serializer' => 'getSerializerService',
            'serializer.mapping.class_metadata_factory' => 'getSerializer_Mapping_ClassMetadataFactoryService',
            'serializer.normalizer.custom' => 'getSerializer_Normalizer_CustomService',
            'session.save_listener' => 'getSession_SaveListenerService',
            'session_listener' => 'getSessionListenerService',
            'streamed_response_listener' => 'getStreamedResponseListenerService',
            'templating.locator' => 'getTemplating_LocatorService',
            'templating.name_parser' => 'getTemplating_NameParserService',
            'translator' => 'getTranslatorService',
            'translator.default' => 'getTranslator_DefaultService',
            'translator_listener' => 'getTranslatorListenerService',
            'twig' => 'getTwigService',
            'twig.loader' => 'getTwig_LoaderService',
            'twig.profile' => 'getTwig_ProfileService',
            'uri_signer' => 'getUriSignerService',
            'validate_request_listener' => 'getValidateRequestListenerService',
            'validator.builder' => 'getValidator_BuilderService',
        ];
        $this->fileMap = [
            'Liip\\FunctionalTestBundle\\Command\\RunParatestCommand' => 'getRunParatestCommandService.php',
            'Liip\\FunctionalTestBundle\\Command\\TestCommand' => 'getTestCommandService.php',
            'Symfony\\Bundle\\FrameworkBundle\\Controller\\RedirectController' => 'getRedirectControllerService.php',
            'Symfony\\Bundle\\FrameworkBundle\\Controller\\TemplateController' => 'getTemplateControllerService.php',
            'annotations.cache' => 'getAnnotations_CacheService.php',
            'annotations.cache_warmer' => 'getAnnotations_CacheWarmerService.php',
            'api_platform.action.documentation' => 'getApiPlatform_Action_DocumentationService.php',
            'api_platform.action.entrypoint' => 'getApiPlatform_Action_EntrypointService.php',
            'api_platform.action.exception' => 'getApiPlatform_Action_ExceptionService.php',
            'api_platform.action.placeholder' => 'getApiPlatform_Action_PlaceholderService.php',
            'api_platform.doctrine.listener.view.write' => 'getApiPlatform_Doctrine_Listener_View_WriteService.php',
            'api_platform.jsonld.action.context' => 'getApiPlatform_Jsonld_Action_ContextService.php',
            'api_platform.listener.exception' => 'getApiPlatform_Listener_ExceptionService.php',
            'api_platform.listener.exception.validation' => 'getApiPlatform_Listener_Exception_ValidationService.php',
            'api_platform.listener.view.respond' => 'getApiPlatform_Listener_View_RespondService.php',
            'api_platform.listener.view.serialize' => 'getApiPlatform_Listener_View_SerializeService.php',
            'api_platform.listener.view.validate' => 'getApiPlatform_Listener_View_ValidateService.php',
            'api_platform.swagger.action.ui' => 'getApiPlatform_Swagger_Action_UiService.php',
            'api_platform.swagger.command.swagger_command' => 'getApiPlatform_Swagger_Command_SwaggerCommandService.php',
            'argument_resolver.default' => 'getArgumentResolver_DefaultService.php',
            'argument_resolver.request' => 'getArgumentResolver_RequestService.php',
            'argument_resolver.request_attribute' => 'getArgumentResolver_RequestAttributeService.php',
            'argument_resolver.service' => 'getArgumentResolver_ServiceService.php',
            'argument_resolver.session' => 'getArgumentResolver_SessionService.php',
            'argument_resolver.variadic' => 'getArgumentResolver_VariadicService.php',
            'assetic.asset_manager' => 'getAssetic_AssetManagerService.php',
            'assetic.asset_manager_cache_warmer' => 'getAssetic_AssetManagerCacheWarmerService.php',
            'assetic.controller' => 'getAssetic_ControllerService.php',
            'assetic.filter.cssrewrite' => 'getAssetic_Filter_CssrewriteService.php',
            'assetic.filter_manager' => 'getAssetic_FilterManagerService.php',
            'cache.default_clearer' => 'getCache_DefaultClearerService.php',
            'cache.global_clearer' => 'getCache_GlobalClearerService.php',
            'cache.system_clearer' => 'getCache_SystemClearerService.php',
            'cache_clearer' => 'getCacheClearerService.php',
            'cache_warmer' => 'getCacheWarmerService.php',
            'config.resource.self_checking_resource_checker' => 'getConfig_Resource_SelfCheckingResourceCheckerService.php',
            'console.command.about' => 'getConsole_Command_AboutService.php',
            'console.command.assets_install' => 'getConsole_Command_AssetsInstallService.php',
            'console.command.cache_clear' => 'getConsole_Command_CacheClearService.php',
            'console.command.cache_pool_clear' => 'getConsole_Command_CachePoolClearService.php',
            'console.command.cache_pool_prune' => 'getConsole_Command_CachePoolPruneService.php',
            'console.command.cache_warmup' => 'getConsole_Command_CacheWarmupService.php',
            'console.command.config_debug' => 'getConsole_Command_ConfigDebugService.php',
            'console.command.config_dump_reference' => 'getConsole_Command_ConfigDumpReferenceService.php',
            'console.command.container_debug' => 'getConsole_Command_ContainerDebugService.php',
            'console.command.debug_autowiring' => 'getConsole_Command_DebugAutowiringService.php',
            'console.command.event_dispatcher_debug' => 'getConsole_Command_EventDispatcherDebugService.php',
            'console.command.form_debug' => 'getConsole_Command_FormDebugService.php',
            'console.command.router_debug' => 'getConsole_Command_RouterDebugService.php',
            'console.command.router_match' => 'getConsole_Command_RouterMatchService.php',
            'console.command.translation_debug' => 'getConsole_Command_TranslationDebugService.php',
            'console.command.translation_update' => 'getConsole_Command_TranslationUpdateService.php',
            'console.command.xliff_lint' => 'getConsole_Command_XliffLintService.php',
            'console.command.yaml_lint' => 'getConsole_Command_YamlLintService.php',
            'console.command_loader' => 'getConsole_CommandLoaderService.php',
            'console.error_listener' => 'getConsole_ErrorListenerService.php',
            'csv_responder_view_listener' => 'getCsvResponderViewListenerService.php',
            'debug.file_link_formatter.url_format' => 'getDebug_FileLinkFormatter_UrlFormatService.php',
            'dependency_injection.config.container_parameters_resource_checker' => 'getDependencyInjection_Config_ContainerParametersResourceCheckerService.php',
            'deprecated.form.registry' => 'getDeprecated_Form_RegistryService.php',
            'deprecated.form.registry.csrf' => 'getDeprecated_Form_Registry_CsrfService.php',
            'doctrine.cache_clear_metadata_command' => 'getDoctrine_CacheClearMetadataCommandService.php',
            'doctrine.cache_clear_query_cache_command' => 'getDoctrine_CacheClearQueryCacheCommandService.php',
            'doctrine.cache_clear_result_command' => 'getDoctrine_CacheClearResultCommandService.php',
            'doctrine.cache_collection_region_command' => 'getDoctrine_CacheCollectionRegionCommandService.php',
            'doctrine.clear_entity_region_command' => 'getDoctrine_ClearEntityRegionCommandService.php',
            'doctrine.clear_query_region_command' => 'getDoctrine_ClearQueryRegionCommandService.php',
            'doctrine.database_create_command' => 'getDoctrine_DatabaseCreateCommandService.php',
            'doctrine.database_drop_command' => 'getDoctrine_DatabaseDropCommandService.php',
            'doctrine.database_import_command' => 'getDoctrine_DatabaseImportCommandService.php',
            'doctrine.dbal.connection_factory' => 'getDoctrine_Dbal_ConnectionFactoryService.php',
            'doctrine.dbal.default_connection' => 'getDoctrine_Dbal_DefaultConnectionService.php',
            'doctrine.ensure_production_settings_command' => 'getDoctrine_EnsureProductionSettingsCommandService.php',
            'doctrine.fixtures_load_command' => 'getDoctrine_FixturesLoadCommandService.php',
            'doctrine.generate_entities_command' => 'getDoctrine_GenerateEntitiesCommandService.php',
            'doctrine.mapping_convert_command' => 'getDoctrine_MappingConvertCommandService.php',
            'doctrine.mapping_import_command' => 'getDoctrine_MappingImportCommandService.php',
            'doctrine.mapping_info_command' => 'getDoctrine_MappingInfoCommandService.php',
            'doctrine.orm.default_entity_listener_resolver' => 'getDoctrine_Orm_DefaultEntityListenerResolverService.php',
            'doctrine.orm.default_entity_manager' => 'getDoctrine_Orm_DefaultEntityManagerService.php',
            'doctrine.orm.default_entity_manager.property_info_extractor' => 'getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService.php',
            'doctrine.orm.default_listeners.attach_entity_listeners' => 'getDoctrine_Orm_DefaultListeners_AttachEntityListenersService.php',
            'doctrine.orm.default_manager_configurator' => 'getDoctrine_Orm_DefaultManagerConfiguratorService.php',
            'doctrine.orm.proxy_cache_warmer' => 'getDoctrine_Orm_ProxyCacheWarmerService.php',
            'doctrine.orm.validator.unique' => 'getDoctrine_Orm_Validator_UniqueService.php',
            'doctrine.query_dql_command' => 'getDoctrine_QueryDqlCommandService.php',
            'doctrine.query_sql_command' => 'getDoctrine_QuerySqlCommandService.php',
            'doctrine.schema_create_command' => 'getDoctrine_SchemaCreateCommandService.php',
            'doctrine.schema_drop_command' => 'getDoctrine_SchemaDropCommandService.php',
            'doctrine.schema_update_command' => 'getDoctrine_SchemaUpdateCommandService.php',
            'doctrine.schema_validate_command' => 'getDoctrine_SchemaValidateCommandService.php',
            'doctrine_cache.contains_command' => 'getDoctrineCache_ContainsCommandService.php',
            'doctrine_cache.delete_command' => 'getDoctrineCache_DeleteCommandService.php',
            'doctrine_cache.flush_command' => 'getDoctrineCache_FlushCommandService.php',
            'doctrine_cache.providers.doctrine.orm.default_metadata_cache' => 'getDoctrineCache_Providers_Doctrine_Orm_DefaultMetadataCacheService.php',
            'doctrine_cache.providers.doctrine.orm.default_query_cache' => 'getDoctrineCache_Providers_Doctrine_Orm_DefaultQueryCacheService.php',
            'doctrine_cache.providers.doctrine.orm.default_result_cache' => 'getDoctrineCache_Providers_Doctrine_Orm_DefaultResultCacheService.php',
            'doctrine_cache.stats_command' => 'getDoctrineCache_StatsCommandService.php',
            'doctrine_filter_service' => 'getDoctrineFilterServiceService.php',
            'doctrine_reflection_deletion_service' => 'getDoctrineReflectionDeletionServiceService.php',
            'doctrine_reflection_service' => 'getDoctrineReflectionServiceService.php',
            'doctrine_reflection_service.search_filter' => 'getDoctrineReflectionService_SearchFilterService.php',
            'file_removal_listener' => 'getFileRemovalListenerService.php',
            'filesystem' => 'getFilesystemService.php',
            'filesystem_footprint' => 'getFilesystemFootprintService.php',
            'filesystem_footprintattachment' => 'getFilesystemFootprintattachmentService.php',
            'filesystem_iclogo' => 'getFilesystemIclogoService.php',
            'filesystem_mimetype_icons' => 'getFilesystemMimetypeIconsService.php',
            'filesystem_partattachment' => 'getFilesystemPartattachmentService.php',
            'filesystem_projectattachment' => 'getFilesystemProjectattachmentService.php',
            'filesystem_storagelocation' => 'getFilesystemStoragelocationService.php',
            'filesystem_temp' => 'getFilesystemTempService.php',
            'filesystem_tempfile' => 'getFilesystemTempfileService.php',
            'footprint.category_path_listener' => 'getFootprint_CategoryPathListenerService.php',
            'footprint_category.root_category_listener' => 'getFootprintCategory_RootCategoryListenerService.php',
            'form.factory' => 'getForm_FactoryService.php',
            'form.registry' => 'getForm_RegistryService.php',
            'form.resolved_type_factory' => 'getForm_ResolvedTypeFactoryService.php',
            'form.server_params' => 'getForm_ServerParamsService.php',
            'form.type.birthday' => 'getForm_Type_BirthdayService.php',
            'form.type.button' => 'getForm_Type_ButtonService.php',
            'form.type.checkbox' => 'getForm_Type_CheckboxService.php',
            'form.type.choice' => 'getForm_Type_ChoiceService.php',
            'form.type.collection' => 'getForm_Type_CollectionService.php',
            'form.type.country' => 'getForm_Type_CountryService.php',
            'form.type.currency' => 'getForm_Type_CurrencyService.php',
            'form.type.date' => 'getForm_Type_DateService.php',
            'form.type.datetime' => 'getForm_Type_DatetimeService.php',
            'form.type.email' => 'getForm_Type_EmailService.php',
            'form.type.entity' => 'getForm_Type_EntityService.php',
            'form.type.file' => 'getForm_Type_FileService.php',
            'form.type.form' => 'getForm_Type_FormService.php',
            'form.type.hidden' => 'getForm_Type_HiddenService.php',
            'form.type.integer' => 'getForm_Type_IntegerService.php',
            'form.type.language' => 'getForm_Type_LanguageService.php',
            'form.type.locale' => 'getForm_Type_LocaleService.php',
            'form.type.money' => 'getForm_Type_MoneyService.php',
            'form.type.number' => 'getForm_Type_NumberService.php',
            'form.type.password' => 'getForm_Type_PasswordService.php',
            'form.type.percent' => 'getForm_Type_PercentService.php',
            'form.type.radio' => 'getForm_Type_RadioService.php',
            'form.type.range' => 'getForm_Type_RangeService.php',
            'form.type.repeated' => 'getForm_Type_RepeatedService.php',
            'form.type.reset' => 'getForm_Type_ResetService.php',
            'form.type.search' => 'getForm_Type_SearchService.php',
            'form.type.submit' => 'getForm_Type_SubmitService.php',
            'form.type.text' => 'getForm_Type_TextService.php',
            'form.type.textarea' => 'getForm_Type_TextareaService.php',
            'form.type.time' => 'getForm_Type_TimeService.php',
            'form.type.timezone' => 'getForm_Type_TimezoneService.php',
            'form.type.url' => 'getForm_Type_UrlService.php',
            'form.type_extension.csrf' => 'getForm_TypeExtension_CsrfService.php',
            'form.type_extension.form.data_collector' => 'getForm_TypeExtension_Form_DataCollectorService.php',
            'form.type_extension.form.http_foundation' => 'getForm_TypeExtension_Form_HttpFoundationService.php',
            'form.type_extension.form.transformation_failure_handling' => 'getForm_TypeExtension_Form_TransformationFailureHandlingService.php',
            'form.type_extension.form.validator' => 'getForm_TypeExtension_Form_ValidatorService.php',
            'form.type_extension.repeated.validator' => 'getForm_TypeExtension_Repeated_ValidatorService.php',
            'form.type_extension.submit.validator' => 'getForm_TypeExtension_Submit_ValidatorService.php',
            'form.type_extension.upload.validator' => 'getForm_TypeExtension_Upload_ValidatorService.php',
            'form.type_guesser.doctrine' => 'getForm_TypeGuesser_DoctrineService.php',
            'form.type_guesser.validator' => 'getForm_TypeGuesser_ValidatorService.php',
            'fos_user.change_password.controller' => 'getFosUser_ChangePassword_ControllerService.php',
            'fos_user.change_password.form.factory' => 'getFosUser_ChangePassword_Form_FactoryService.php',
            'fos_user.change_password.form.type' => 'getFosUser_ChangePassword_Form_TypeService.php',
            'fos_user.command.activate_user' => 'getFosUser_Command_ActivateUserService.php',
            'fos_user.command.change_password' => 'getFosUser_Command_ChangePasswordService.php',
            'fos_user.command.create_user' => 'getFosUser_Command_CreateUserService.php',
            'fos_user.command.deactivate_user' => 'getFosUser_Command_DeactivateUserService.php',
            'fos_user.command.demote_user' => 'getFosUser_Command_DemoteUserService.php',
            'fos_user.command.promote_user' => 'getFosUser_Command_PromoteUserService.php',
            'fos_user.listener.authentication' => 'getFosUser_Listener_AuthenticationService.php',
            'fos_user.listener.flash' => 'getFosUser_Listener_FlashService.php',
            'fos_user.listener.resetting' => 'getFosUser_Listener_ResettingService.php',
            'fos_user.mailer' => 'getFosUser_MailerService.php',
            'fos_user.profile.controller' => 'getFosUser_Profile_ControllerService.php',
            'fos_user.profile.form.factory' => 'getFosUser_Profile_Form_FactoryService.php',
            'fos_user.profile.form.type' => 'getFosUser_Profile_Form_TypeService.php',
            'fos_user.registration.controller' => 'getFosUser_Registration_ControllerService.php',
            'fos_user.registration.form.factory' => 'getFosUser_Registration_Form_FactoryService.php',
            'fos_user.registration.form.type' => 'getFosUser_Registration_Form_TypeService.php',
            'fos_user.resetting.controller' => 'getFosUser_Resetting_ControllerService.php',
            'fos_user.resetting.form.factory' => 'getFosUser_Resetting_Form_FactoryService.php',
            'fos_user.resetting.form.type' => 'getFosUser_Resetting_Form_TypeService.php',
            'fos_user.security.controller' => 'getFosUser_Security_ControllerService.php',
            'fos_user.security.interactive_login_listener' => 'getFosUser_Security_InteractiveLoginListenerService.php',
            'fos_user.security.login_manager' => 'getFosUser_Security_LoginManagerService.php',
            'fos_user.user_manager' => 'getFosUser_UserManagerService.php',
            'fos_user.user_provider.username' => 'getFosUser_UserProvider_UsernameService.php',
            'fos_user.username_form_type' => 'getFosUser_UsernameFormTypeService.php',
            'fos_user.util.password_updater' => 'getFosUser_Util_PasswordUpdaterService.php',
            'fos_user.util.token_generator' => 'getFosUser_Util_TokenGeneratorService.php',
            'fos_user.util.user_manipulator' => 'getFosUser_Util_UserManipulatorService.php',
            'fragment.handler' => 'getFragment_HandlerService.php',
            'fragment.renderer.hinclude' => 'getFragment_Renderer_HincludeService.php',
            'fragment.renderer.inline' => 'getFragment_Renderer_InlineService.php',
            'importer_service' => 'getImporterServiceService.php',
            'kernel.class_cache.cache_warmer' => 'getKernel_ClassCache_CacheWarmerService.php',
            'knp_gaufrette.command.filesystem_keys' => 'getKnpGaufrette_Command_FilesystemKeysService.php',
            'knp_gaufrette.filesystem_map' => 'getKnpGaufrette_FilesystemMapService.php',
            'liip_functional_test.query.counter' => 'getLiipFunctionalTest_Query_CounterService.php',
            'logger' => 'getLoggerService.php',
            'monolog.handler.null_internal' => 'getMonolog_Handler_NullInternalService.php',
            'monolog.logger.assetic' => 'getMonolog_Logger_AsseticService.php',
            'monolog.logger.console' => 'getMonolog_Logger_ConsoleService.php',
            'monolog.logger.doctrine' => 'getMonolog_Logger_DoctrineService.php',
            'monolog.logger.security' => 'getMonolog_Logger_SecurityService.php',
            'monolog.logger.templating' => 'getMonolog_Logger_TemplatingService.php',
            'nfq.sprite' => 'getNfq_SpriteService.php',
            'part.category_path_listener' => 'getPart_CategoryPathListenerService.php',
            'part.stock_level_listener' => 'getPart_StockLevelListenerService.php',
            'part_category.root_category_listener' => 'getPartCategory_RootCategoryListenerService.php',
            'part_image_listener' => 'getPartImageListenerService.php',
            'partkeepr.auth.change_password' => 'getPartkeepr_Auth_ChangePasswordService.php',
            'partkeepr.auth.login' => 'getPartkeepr_Auth_LoginService.php',
            'partkeepr.batchjob.execute' => 'getPartkeepr_Batchjob_ExecuteService.php',
            'partkeepr.category.get_root_node' => 'getPartkeepr_Category_GetRootNodeService.php',
            'partkeepr.category.move' => 'getPartkeepr_Category_MoveService.php',
            'partkeepr.cronlogger_service' => 'getPartkeepr_CronloggerServiceService.php',
            'partkeepr.exceptionwrapper' => 'getPartkeepr_ExceptionwrapperService.php',
            'partkeepr.footprint.category_service' => 'getPartkeepr_Footprint_CategoryServiceService.php',
            'partkeepr.grid_preset.mark_as_default' => 'getPartkeepr_GridPreset_MarkAsDefaultService.php',
            'partkeepr.gridpresetservice' => 'getPartkeepr_GridpresetserviceService.php',
            'partkeepr.listener.request_exception' => 'getPartkeepr_Listener_RequestExceptionService.php',
            'partkeepr.octopart_service' => 'getPartkeepr_OctopartServiceService.php',
            'partkeepr.part.add_stock' => 'getPartkeepr_Part_AddStockService.php',
            'partkeepr.part.category_service' => 'getPartkeepr_Part_CategoryServiceService.php',
            'partkeepr.part.post' => 'getPartkeepr_Part_PostService.php',
            'partkeepr.part.put' => 'getPartkeepr_Part_PutService.php',
            'partkeepr.part.remove_stock' => 'getPartkeepr_Part_RemoveStockService.php',
            'partkeepr.part.set_stock' => 'getPartkeepr_Part_SetStockService.php',
            'partkeepr.part_measurement_unit.set_default' => 'getPartkeepr_PartMeasurementUnit_SetDefaultService.php',
            'partkeepr.part_measurement_unit_service' => 'getPartkeepr_PartMeasurementUnitServiceService.php',
            'partkeepr.part_service' => 'getPartkeepr_PartServiceService.php',
            'partkeepr.parts.collection_get' => 'getPartkeepr_Parts_CollectionGetService.php',
            'partkeepr.remote_file_loader.factory' => 'getPartkeepr_RemoteFileLoader_FactoryService.php',
            'partkeepr.setup.config_service' => 'getPartkeepr_Setup_ConfigServiceService.php',
            'partkeepr.setup.footprint_service' => 'getPartkeepr_Setup_FootprintServiceService.php',
            'partkeepr.setup.manufacturer_service' => 'getPartkeepr_Setup_ManufacturerServiceService.php',
            'partkeepr.setup.part_unit_service' => 'getPartkeepr_Setup_PartUnitServiceService.php',
            'partkeepr.setup.si_prefix_service' => 'getPartkeepr_Setup_SiPrefixServiceService.php',
            'partkeepr.setup.unit_service' => 'getPartkeepr_Setup_UnitServiceService.php',
            'partkeepr.statistic.service' => 'getPartkeepr_Statistic_ServiceService.php',
            'partkeepr.storage_location.category_service' => 'getPartkeepr_StorageLocation_CategoryServiceService.php',
            'partkeepr.system_notice.acknowledge' => 'getPartkeepr_SystemNotice_AcknowledgeService.php',
            'partkeepr.system_preference.delete_preference' => 'getPartkeepr_SystemPreference_DeletePreferenceService.php',
            'partkeepr.system_preference.get_preferences' => 'getPartkeepr_SystemPreference_GetPreferencesService.php',
            'partkeepr.system_preference.set_preference' => 'getPartkeepr_SystemPreference_SetPreferenceService.php',
            'partkeepr.system_preference_service' => 'getPartkeepr_SystemPreferenceServiceService.php',
            'partkeepr.systemnoticeservice' => 'getPartkeepr_SystemnoticeserviceService.php',
            'partkeepr.tip_of_the_day.mark_all_unread' => 'getPartkeepr_TipOfTheDay_MarkAllUnreadService.php',
            'partkeepr.tip_of_the_day.mark_read' => 'getPartkeepr_TipOfTheDay_MarkReadService.php',
            'partkeepr.tip_of_the_day_history.collection_get' => 'getPartkeepr_TipOfTheDayHistory_CollectionGetService.php',
            'partkeepr.tip_of_the_day_service' => 'getPartkeepr_TipOfTheDayServiceService.php',
            'partkeepr.user.delete' => 'getPartkeepr_User_DeleteService.php',
            'partkeepr.user.post' => 'getPartkeepr_User_PostService.php',
            'partkeepr.user.put' => 'getPartkeepr_User_PutService.php',
            'partkeepr.user_preference.delete_preference' => 'getPartkeepr_UserPreference_DeletePreferenceService.php',
            'partkeepr.user_preference.get_preferences' => 'getPartkeepr_UserPreference_GetPreferencesService.php',
            'partkeepr.user_preference.set_preference' => 'getPartkeepr_UserPreference_SetPreferenceService.php',
            'partkeepr.user_preference_service' => 'getPartkeepr_UserPreferenceServiceService.php',
            'partkeepr.userservice' => 'getPartkeepr_UserserviceService.php',
            'partkeepr.versionservice' => 'getPartkeepr_VersionserviceService.php',
            'partkeepr_image_service' => 'getPartkeeprImageServiceService.php',
            'partkeepr_legacy_user_provider' => 'getPartkeeprLegacyUserProviderService.php',
            'partkeepr_mimetype_icon_service' => 'getPartkeeprMimetypeIconServiceService.php',
            'partkeepr_systemservice' => 'getPartkeeprSystemserviceService.php',
            'partkeepr_uploadedfile_service' => 'getPartkeeprUploadedfileServiceService.php',
            'property_info.php_doc_extractor' => 'getPropertyInfo_PhpDocExtractorService.php',
            'property_info.reflection_extractor' => 'getPropertyInfo_ReflectionExtractorService.php',
            'property_info.serializer_extractor' => 'getPropertyInfo_SerializerExtractorService.php',
            'router.cache_warmer' => 'getRouter_CacheWarmerService.php',
            'routing.loader' => 'getRouting_LoaderService.php',
            'security.access.authenticated_voter' => 'getSecurity_Access_AuthenticatedVoterService.php',
            'security.access.expression_voter' => 'getSecurity_Access_ExpressionVoterService.php',
            'security.access.role_hierarchy_voter' => 'getSecurity_Access_RoleHierarchyVoterService.php',
            'security.access_listener' => 'getSecurity_AccessListenerService.php',
            'security.access_map' => 'getSecurity_AccessMapService.php',
            'security.authentication.basic_entry_point.main' => 'getSecurity_Authentication_BasicEntryPoint_MainService.php',
            'security.authentication.guard_handler' => 'getSecurity_Authentication_GuardHandlerService.php',
            'security.authentication.listener.basic.main' => 'getSecurity_Authentication_Listener_Basic_MainService.php',
            'security.authentication.listener.remote_user.main' => 'getSecurity_Authentication_Listener_RemoteUser_MainService.php',
            'security.authentication.provider.dao.main' => 'getSecurity_Authentication_Provider_Dao_MainService.php',
            'security.authentication.provider.pre_authenticated.main' => 'getSecurity_Authentication_Provider_PreAuthenticated_MainService.php',
            'security.authentication.session_strategy.main' => 'getSecurity_Authentication_SessionStrategy_MainService.php',
            'security.authentication_utils' => 'getSecurity_AuthenticationUtilsService.php',
            'security.channel_listener' => 'getSecurity_ChannelListenerService.php',
            'security.command.user_password_encoder' => 'getSecurity_Command_UserPasswordEncoderService.php',
            'security.context_listener.0' => 'getSecurity_ContextListener_0Service.php',
            'security.csrf.token_manager' => 'getSecurity_Csrf_TokenManagerService.php',
            'security.encoder_factory' => 'getSecurity_EncoderFactoryService.php',
            'security.firewall.map.context.login' => 'getSecurity_Firewall_Map_Context_LoginService.php',
            'security.firewall.map.context.main' => 'getSecurity_Firewall_Map_Context_MainService.php',
            'security.password_encoder' => 'getSecurity_PasswordEncoderService.php',
            'security.request_matcher.d6t5ze.' => 'getSecurity_RequestMatcher_D6t5ze_Service.php',
            'security.request_matcher.iu9lt00' => 'getSecurity_RequestMatcher_Iu9lt00Service.php',
            'security.user.provider.concrete.chain_provider' => 'getSecurity_User_Provider_Concrete_ChainProviderService.php',
            'security.user.provider.concrete.in_memory' => 'getSecurity_User_Provider_Concrete_InMemoryService.php',
            'security.user_checker' => 'getSecurity_UserCheckerService.php',
            'security.user_value_resolver' => 'getSecurity_UserValueResolverService.php',
            'security.validator.user_password' => 'getSecurity_Validator_UserPasswordService.php',
            'sensio_distribution.security_checker' => 'getSensioDistribution_SecurityCheckerService.php',
            'sensio_distribution.security_checker.command' => 'getSensioDistribution_SecurityChecker_CommandService.php',
            'sensio_framework_extra.view.guesser' => 'getSensioFrameworkExtra_View_GuesserService.php',
            'serializer.mapping.cache.symfony' => 'getSerializer_Mapping_Cache_SymfonyService.php',
            'serializer.mapping.cache_warmer' => 'getSerializer_Mapping_CacheWarmerService.php',
            'service_locator.sr6ctxe' => 'getServiceLocator_Sr6ctxeService.php',
            'services_resetter' => 'getServicesResetterService.php',
            'session' => 'getSessionService.php',
            'session.handler' => 'getSession_HandlerService.php',
            'session.storage.filesystem' => 'getSession_Storage_FilesystemService.php',
            'session.storage.metadata_bag' => 'getSession_Storage_MetadataBagService.php',
            'session.storage.native' => 'getSession_Storage_NativeService.php',
            'session.storage.php_bridge' => 'getSession_Storage_PhpBridgeService.php',
            'stof_doctrine_extensions.uploadable.manager' => 'getStofDoctrineExtensions_Uploadable_ManagerService.php',
            'storage_location.category_path_listener' => 'getStorageLocation_CategoryPathListenerService.php',
            'storage_location_category.root_category_listener' => 'getStorageLocationCategory_RootCategoryListenerService.php',
            'swiftmailer.email_sender.listener' => 'getSwiftmailer_EmailSender_ListenerService.php',
            'swiftmailer.mailer.default' => 'getSwiftmailer_Mailer_DefaultService.php',
            'swiftmailer.mailer.default.plugin.messagelogger' => 'getSwiftmailer_Mailer_Default_Plugin_MessageloggerService.php',
            'swiftmailer.mailer.default.transport' => 'getSwiftmailer_Mailer_Default_TransportService.php',
            'templating' => 'getTemplatingService.php',
            'templating.cache_warmer.template_paths' => 'getTemplating_CacheWarmer_TemplatePathsService.php',
            'templating.filename_parser' => 'getTemplating_FilenameParserService.php',
            'templating.finder' => 'getTemplating_FinderService.php',
            'templating.helper.logout_url' => 'getTemplating_Helper_LogoutUrlService.php',
            'templating.helper.security' => 'getTemplating_Helper_SecurityService.php',
            'templating.loader' => 'getTemplating_LoaderService.php',
            'temporary_file_listener' => 'getTemporaryFileListenerService.php',
            'translation.dumper.csv' => 'getTranslation_Dumper_CsvService.php',
            'translation.dumper.ini' => 'getTranslation_Dumper_IniService.php',
            'translation.dumper.json' => 'getTranslation_Dumper_JsonService.php',
            'translation.dumper.mo' => 'getTranslation_Dumper_MoService.php',
            'translation.dumper.php' => 'getTranslation_Dumper_PhpService.php',
            'translation.dumper.po' => 'getTranslation_Dumper_PoService.php',
            'translation.dumper.qt' => 'getTranslation_Dumper_QtService.php',
            'translation.dumper.res' => 'getTranslation_Dumper_ResService.php',
            'translation.dumper.xliff' => 'getTranslation_Dumper_XliffService.php',
            'translation.dumper.yml' => 'getTranslation_Dumper_YmlService.php',
            'translation.extractor' => 'getTranslation_ExtractorService.php',
            'translation.extractor.php' => 'getTranslation_Extractor_PhpService.php',
            'translation.loader' => 'getTranslation_LoaderService.php',
            'translation.loader.csv' => 'getTranslation_Loader_CsvService.php',
            'translation.loader.dat' => 'getTranslation_Loader_DatService.php',
            'translation.loader.ini' => 'getTranslation_Loader_IniService.php',
            'translation.loader.json' => 'getTranslation_Loader_JsonService.php',
            'translation.loader.mo' => 'getTranslation_Loader_MoService.php',
            'translation.loader.php' => 'getTranslation_Loader_PhpService.php',
            'translation.loader.po' => 'getTranslation_Loader_PoService.php',
            'translation.loader.qt' => 'getTranslation_Loader_QtService.php',
            'translation.loader.res' => 'getTranslation_Loader_ResService.php',
            'translation.loader.xliff' => 'getTranslation_Loader_XliffService.php',
            'translation.loader.yml' => 'getTranslation_Loader_YmlService.php',
            'translation.reader' => 'getTranslation_ReaderService.php',
            'translation.warmer' => 'getTranslation_WarmerService.php',
            'translation.writer' => 'getTranslation_WriterService.php',
            'twig.cache_warmer' => 'getTwig_CacheWarmerService.php',
            'twig.command.debug' => 'getTwig_Command_DebugService.php',
            'twig.command.lint' => 'getTwig_Command_LintService.php',
            'twig.controller.exception' => 'getTwig_Controller_ExceptionService.php',
            'twig.controller.preview_error' => 'getTwig_Controller_PreviewErrorService.php',
            'twig.exception_listener' => 'getTwig_ExceptionListenerService.php',
            'twig.form.renderer' => 'getTwig_Form_RendererService.php',
            'twig.runtime.httpkernel' => 'getTwig_Runtime_HttpkernelService.php',
            'twig.template_cache_warmer' => 'getTwig_TemplateCacheWarmerService.php',
            'twig.translation.extractor' => 'getTwig_Translation_ExtractorService.php',
            'validator.email' => 'getValidator_EmailService.php',
            'validator.expression' => 'getValidator_ExpressionService.php',
            'validator.mapping.cache_warmer' => 'getValidator_Mapping_CacheWarmerService.php',
            'web_profiler.controller.exception' => 'getWebProfiler_Controller_ExceptionService.php',
            'web_profiler.controller.profiler' => 'getWebProfiler_Controller_ProfilerService.php',
            'web_profiler.controller.router' => 'getWebProfiler_Controller_RouterService.php',
            'xlsx_responder_view_listener' => 'getXlsxResponderViewListenerService.php',
        ];
        $this->privates = [
            'api_platform.action.delete_item' => true,
            'api_platform.action.get_collection' => true,
            'api_platform.action.get_item' => true,
            'api_platform.action.post_collection' => true,
            'api_platform.action.put_item' => true,
            'api_platform.serializer' => true,
            'fos_user.util.username_canonicalizer' => true,
            'mailer' => true,
            'session.storage' => true,
            'swiftmailer.mailer' => true,
            'swiftmailer.plugin.messagelogger' => true,
            'swiftmailer.transport' => true,
            'Liip\\FunctionalTestBundle\\Command\\RunParatestCommand' => true,
            'Liip\\FunctionalTestBundle\\Command\\TestCommand' => true,
            'annotation_reader' => true,
            'annotations.cache' => true,
            'annotations.cache_warmer' => true,
            'annotations.reader' => true,
            'api_platform.action.documentation' => true,
            'api_platform.action.entrypoint' => true,
            'api_platform.action.exception' => true,
            'api_platform.action.placeholder' => true,
            'api_platform.cache.metadata.property' => true,
            'api_platform.cache.metadata.resource' => true,
            'api_platform.cache.route_name_resolver' => true,
            'api_platform.collection_data_provider' => true,
            'api_platform.doctrine.listener.view.write' => true,
            'api_platform.doctrine.orm.query_extension.eager_loading' => true,
            'api_platform.filters' => true,
            'api_platform.hydra.listener.response.add_link_header' => true,
            'api_platform.item_data_provider' => true,
            'api_platform.jsonld.action.context' => true,
            'api_platform.jsonld.context_builder' => true,
            'api_platform.listener.exception' => true,
            'api_platform.listener.exception.validation' => true,
            'api_platform.listener.request.add_format' => true,
            'api_platform.listener.request.deserialize' => true,
            'api_platform.listener.request.read' => true,
            'api_platform.listener.view.respond' => true,
            'api_platform.listener.view.serialize' => true,
            'api_platform.listener.view.validate' => true,
            'api_platform.metadata.extractor.xml' => true,
            'api_platform.metadata.extractor.yaml' => true,
            'api_platform.metadata.property.metadata_factory' => true,
            'api_platform.metadata.property.name_collection_factory' => true,
            'api_platform.metadata.resource.metadata_factory' => true,
            'api_platform.metadata.resource.name_collection_factory' => true,
            'api_platform.operation_method_resolver' => true,
            'api_platform.operation_path_resolver.custom' => true,
            'api_platform.operation_path_resolver.default' => true,
            'api_platform.resource_class_resolver' => true,
            'api_platform.router' => true,
            'api_platform.serializer.context_builder' => true,
            'api_platform.swagger.action.ui' => true,
            'api_platform.swagger.command.swagger_command' => true,
            'api_platform.swagger.listener.ui' => true,
            'api_platform.swagger.normalizer.documentation' => true,
            'argument_resolver.default' => true,
            'argument_resolver.request' => true,
            'argument_resolver.request_attribute' => true,
            'argument_resolver.service' => true,
            'argument_resolver.session' => true,
            'argument_resolver.variadic' => true,
            'assetic.asset_factory' => true,
            'assetic.asset_manager' => true,
            'assetic.asset_manager_cache_warmer' => true,
            'assetic.controller' => true,
            'assetic.filter.cssrewrite' => true,
            'assetic.filter_manager' => true,
            'assetic.request_listener' => true,
            'assets.context' => true,
            'assets.packages' => true,
            'cache.annotations' => true,
            'cache.default_clearer' => true,
            'cache.serializer' => true,
            'cache.validator' => true,
            'config.resource.self_checking_resource_checker' => true,
            'config_cache_factory' => true,
            'console.command.about' => true,
            'console.command.assets_install' => true,
            'console.command.cache_clear' => true,
            'console.command.cache_pool_clear' => true,
            'console.command.cache_pool_prune' => true,
            'console.command.cache_warmup' => true,
            'console.command.config_debug' => true,
            'console.command.config_dump_reference' => true,
            'console.command.container_debug' => true,
            'console.command.debug_autowiring' => true,
            'console.command.event_dispatcher_debug' => true,
            'console.command.form_debug' => true,
            'console.command.router_debug' => true,
            'console.command.router_match' => true,
            'console.command.translation_debug' => true,
            'console.command.translation_update' => true,
            'console.command.xliff_lint' => true,
            'console.command.yaml_lint' => true,
            'console.error_listener' => true,
            'controller_name_converter' => true,
            'csv_responder_view_listener' => true,
            'data_collector.form' => true,
            'data_collector.form.extractor' => true,
            'data_collector.request' => true,
            'data_collector.router' => true,
            'data_collector.translation' => true,
            'debug.argument_resolver' => true,
            'debug.controller_resolver' => true,
            'debug.debug_handlers_listener' => true,
            'debug.event_dispatcher' => true,
            'debug.file_link_formatter' => true,
            'debug.file_link_formatter.url_format' => true,
            'debug.log_processor' => true,
            'debug.security.access.decision_manager' => true,
            'debug.stopwatch' => true,
            'debug.validator' => true,
            'dependency_injection.config.container_parameters_resource_checker' => true,
            'deprecated.form.registry' => true,
            'deprecated.form.registry.csrf' => true,
            'doctrine.cache_clear_metadata_command' => true,
            'doctrine.cache_clear_query_cache_command' => true,
            'doctrine.cache_clear_result_command' => true,
            'doctrine.cache_collection_region_command' => true,
            'doctrine.clear_entity_region_command' => true,
            'doctrine.clear_query_region_command' => true,
            'doctrine.database_create_command' => true,
            'doctrine.database_drop_command' => true,
            'doctrine.database_import_command' => true,
            'doctrine.dbal.connection_factory' => true,
            'doctrine.dbal.logger.profiling.default' => true,
            'doctrine.ensure_production_settings_command' => true,
            'doctrine.fixtures_load_command' => true,
            'doctrine.generate_entities_command' => true,
            'doctrine.mapping_convert_command' => true,
            'doctrine.mapping_import_command' => true,
            'doctrine.mapping_info_command' => true,
            'doctrine.orm.default_entity_listener_resolver' => true,
            'doctrine.orm.default_entity_manager.property_info_extractor' => true,
            'doctrine.orm.default_listeners.attach_entity_listeners' => true,
            'doctrine.orm.default_manager_configurator' => true,
            'doctrine.orm.proxy_cache_warmer' => true,
            'doctrine.orm.validator.unique' => true,
            'doctrine.orm.validator_initializer' => true,
            'doctrine.query_dql_command' => true,
            'doctrine.query_sql_command' => true,
            'doctrine.schema_create_command' => true,
            'doctrine.schema_drop_command' => true,
            'doctrine.schema_update_command' => true,
            'doctrine.schema_validate_command' => true,
            'doctrine_cache.contains_command' => true,
            'doctrine_cache.delete_command' => true,
            'doctrine_cache.flush_command' => true,
            'doctrine_cache.stats_command' => true,
            'doctrine_filter_service' => true,
            'doctrine_reflection_deletion_service' => true,
            'doctrine_reflection_service' => true,
            'doctrine_reflection_service.search_filter' => true,
            'file_locator' => true,
            'file_removal_listener' => true,
            'footprint.category_path_listener' => true,
            'footprint_category.root_category_listener' => true,
            'form.registry' => true,
            'form.resolved_type_factory' => true,
            'form.server_params' => true,
            'form.type.choice' => true,
            'form.type.entity' => true,
            'form.type.form' => true,
            'form.type_extension.csrf' => true,
            'form.type_extension.form.data_collector' => true,
            'form.type_extension.form.http_foundation' => true,
            'form.type_extension.form.transformation_failure_handling' => true,
            'form.type_extension.form.validator' => true,
            'form.type_extension.repeated.validator' => true,
            'form.type_extension.submit.validator' => true,
            'form.type_extension.upload.validator' => true,
            'form.type_guesser.doctrine' => true,
            'form.type_guesser.validator' => true,
            'fos_user.change_password.form.factory' => true,
            'fos_user.change_password.form.type' => true,
            'fos_user.command.activate_user' => true,
            'fos_user.command.change_password' => true,
            'fos_user.command.create_user' => true,
            'fos_user.command.deactivate_user' => true,
            'fos_user.command.demote_user' => true,
            'fos_user.command.promote_user' => true,
            'fos_user.listener.authentication' => true,
            'fos_user.listener.flash' => true,
            'fos_user.listener.resetting' => true,
            'fos_user.mailer' => true,
            'fos_user.profile.form.factory' => true,
            'fos_user.profile.form.type' => true,
            'fos_user.registration.form.factory' => true,
            'fos_user.registration.form.type' => true,
            'fos_user.resetting.form.factory' => true,
            'fos_user.resetting.form.type' => true,
            'fos_user.security.interactive_login_listener' => true,
            'fos_user.security.login_manager' => true,
            'fos_user.user_provider.username' => true,
            'fos_user.username_form_type' => true,
            'fos_user.util.canonical_fields_updater' => true,
            'fos_user.util.email_canonicalizer' => true,
            'fos_user.util.password_updater' => true,
            'fos_user.util.token_generator' => true,
            'fos_user.util.user_manipulator' => true,
            'fragment.handler' => true,
            'fragment.listener' => true,
            'fragment.renderer.hinclude' => true,
            'fragment.renderer.inline' => true,
            'importer_service' => true,
            'kernel.class_cache.cache_warmer' => true,
            'knp_gaufrette.command.filesystem_keys' => true,
            'liip_functional_test.query.counter' => true,
            'locale_listener' => true,
            'logger' => true,
            'monolog.handler.console' => true,
            'monolog.handler.firephp' => true,
            'monolog.handler.main' => true,
            'monolog.handler.null_internal' => true,
            'monolog.logger.assetic' => true,
            'monolog.logger.cache' => true,
            'monolog.logger.console' => true,
            'monolog.logger.doctrine' => true,
            'monolog.logger.event' => true,
            'monolog.logger.php' => true,
            'monolog.logger.profiler' => true,
            'monolog.logger.request' => true,
            'monolog.logger.security' => true,
            'monolog.logger.templating' => true,
            'monolog.logger.translation' => true,
            'monolog.processor.psr_log_message' => true,
            'nfq.sprite' => true,
            'part.category_path_listener' => true,
            'part.stock_level_listener' => true,
            'part_category.root_category_listener' => true,
            'part_image_listener' => true,
            'partkeepr.auth.change_password' => true,
            'partkeepr.auth.login' => true,
            'partkeepr.batchjob.execute' => true,
            'partkeepr.category.get_root_node' => true,
            'partkeepr.category.move' => true,
            'partkeepr.cronlogger_service' => true,
            'partkeepr.exceptionwrapper' => true,
            'partkeepr.footprint.category_service' => true,
            'partkeepr.grid_preset.mark_as_default' => true,
            'partkeepr.gridpresetservice' => true,
            'partkeepr.listener.request_exception' => true,
            'partkeepr.octopart_service' => true,
            'partkeepr.part.add_stock' => true,
            'partkeepr.part.category_service' => true,
            'partkeepr.part.post' => true,
            'partkeepr.part.put' => true,
            'partkeepr.part.remove_stock' => true,
            'partkeepr.part.set_stock' => true,
            'partkeepr.part_measurement_unit.set_default' => true,
            'partkeepr.part_measurement_unit_service' => true,
            'partkeepr.part_service' => true,
            'partkeepr.parts.collection_get' => true,
            'partkeepr.remote_file_loader.factory' => true,
            'partkeepr.setup.config_service' => true,
            'partkeepr.setup.footprint_service' => true,
            'partkeepr.setup.manufacturer_service' => true,
            'partkeepr.setup.part_unit_service' => true,
            'partkeepr.setup.si_prefix_service' => true,
            'partkeepr.setup.unit_service' => true,
            'partkeepr.statistic.service' => true,
            'partkeepr.storage_location.category_service' => true,
            'partkeepr.system_notice.acknowledge' => true,
            'partkeepr.system_preference.delete_preference' => true,
            'partkeepr.system_preference.get_preferences' => true,
            'partkeepr.system_preference.set_preference' => true,
            'partkeepr.system_preference_service' => true,
            'partkeepr.systemnoticeservice' => true,
            'partkeepr.tip_of_the_day.mark_all_unread' => true,
            'partkeepr.tip_of_the_day.mark_read' => true,
            'partkeepr.tip_of_the_day_history.collection_get' => true,
            'partkeepr.tip_of_the_day_service' => true,
            'partkeepr.user.delete' => true,
            'partkeepr.user.post' => true,
            'partkeepr.user.put' => true,
            'partkeepr.user_preference.delete_preference' => true,
            'partkeepr.user_preference.get_preferences' => true,
            'partkeepr.user_preference.set_preference' => true,
            'partkeepr.user_preference_service' => true,
            'partkeepr.userservice' => true,
            'partkeepr.versionservice' => true,
            'partkeepr_image_service' => true,
            'partkeepr_legacy_user_provider' => true,
            'partkeepr_mimetype_icon_service' => true,
            'partkeepr_systemservice' => true,
            'partkeepr_uploadedfile_service' => true,
            'profiler_listener' => true,
            'property_accessor' => true,
            'property_info' => true,
            'property_info.php_doc_extractor' => true,
            'property_info.reflection_extractor' => true,
            'property_info.serializer_extractor' => true,
            'resolve_controller_name_subscriber' => true,
            'response_listener' => true,
            'router.cache_warmer' => true,
            'router.request_context' => true,
            'router_listener' => true,
            'security.access.authenticated_voter' => true,
            'security.access.expression_voter' => true,
            'security.access.role_hierarchy_voter' => true,
            'security.access_listener' => true,
            'security.access_map' => true,
            'security.authentication.basic_entry_point.main' => true,
            'security.authentication.guard_handler' => true,
            'security.authentication.listener.basic.main' => true,
            'security.authentication.listener.remote_user.main' => true,
            'security.authentication.manager' => true,
            'security.authentication.provider.dao.main' => true,
            'security.authentication.provider.pre_authenticated.main' => true,
            'security.authentication.session_strategy.main' => true,
            'security.authentication.trust_resolver' => true,
            'security.channel_listener' => true,
            'security.command.user_password_encoder' => true,
            'security.context_listener.0' => true,
            'security.encoder_factory' => true,
            'security.firewall' => true,
            'security.firewall.map' => true,
            'security.firewall.map.context.login' => true,
            'security.firewall.map.context.main' => true,
            'security.logout_url_generator' => true,
            'security.rememberme.response_listener' => true,
            'security.request_matcher.d6t5ze.' => true,
            'security.request_matcher.iu9lt00' => true,
            'security.role_hierarchy' => true,
            'security.user.provider.concrete.chain_provider' => true,
            'security.user.provider.concrete.in_memory' => true,
            'security.user_checker' => true,
            'security.user_value_resolver' => true,
            'security.validator.user_password' => true,
            'sensio_distribution.security_checker' => true,
            'sensio_distribution.security_checker.command' => true,
            'sensio_framework_extra.cache.listener' => true,
            'sensio_framework_extra.controller.listener' => true,
            'sensio_framework_extra.converter.datetime' => true,
            'sensio_framework_extra.converter.doctrine.orm' => true,
            'sensio_framework_extra.converter.listener' => true,
            'sensio_framework_extra.converter.manager' => true,
            'sensio_framework_extra.security.listener' => true,
            'sensio_framework_extra.view.listener' => true,
            'serializer.mapping.cache.symfony' => true,
            'serializer.mapping.cache_warmer' => true,
            'serializer.mapping.class_metadata_factory' => true,
            'serializer.normalizer.custom' => true,
            'service_locator.sr6ctxe' => true,
            'session.handler' => true,
            'session.save_listener' => true,
            'session.storage.filesystem' => true,
            'session.storage.metadata_bag' => true,
            'session.storage.native' => true,
            'session.storage.php_bridge' => true,
            'session_listener' => true,
            'stof_doctrine_extensions.uploadable.manager' => true,
            'storage_location.category_path_listener' => true,
            'storage_location_category.root_category_listener' => true,
            'streamed_response_listener' => true,
            'swiftmailer.email_sender.listener' => true,
            'swiftmailer.mailer.default.plugin.messagelogger' => true,
            'swiftmailer.mailer.default.transport' => true,
            'templating.cache_warmer.template_paths' => true,
            'templating.filename_parser' => true,
            'templating.finder' => true,
            'templating.helper.logout_url' => true,
            'templating.helper.security' => true,
            'templating.locator' => true,
            'templating.name_parser' => true,
            'temporary_file_listener' => true,
            'translation.dumper.csv' => true,
            'translation.dumper.ini' => true,
            'translation.dumper.json' => true,
            'translation.dumper.mo' => true,
            'translation.dumper.php' => true,
            'translation.dumper.po' => true,
            'translation.dumper.qt' => true,
            'translation.dumper.res' => true,
            'translation.dumper.xliff' => true,
            'translation.dumper.yml' => true,
            'translation.extractor' => true,
            'translation.extractor.php' => true,
            'translation.loader' => true,
            'translation.loader.csv' => true,
            'translation.loader.dat' => true,
            'translation.loader.ini' => true,
            'translation.loader.json' => true,
            'translation.loader.mo' => true,
            'translation.loader.php' => true,
            'translation.loader.po' => true,
            'translation.loader.qt' => true,
            'translation.loader.res' => true,
            'translation.loader.xliff' => true,
            'translation.loader.yml' => true,
            'translation.reader' => true,
            'translation.warmer' => true,
            'translation.writer' => true,
            'translator.default' => true,
            'translator_listener' => true,
            'twig.cache_warmer' => true,
            'twig.command.debug' => true,
            'twig.command.lint' => true,
            'twig.exception_listener' => true,
            'twig.form.renderer' => true,
            'twig.loader' => true,
            'twig.profile' => true,
            'twig.runtime.httpkernel' => true,
            'twig.template_cache_warmer' => true,
            'twig.translation.extractor' => true,
            'uri_signer' => true,
            'validate_request_listener' => true,
            'validator.builder' => true,
            'validator.email' => true,
            'validator.expression' => true,
            'validator.mapping.cache_warmer' => true,
            'xlsx_responder_view_listener' => true,
        ];
        $this->aliases = [
            'api_platform.action.delete_item' => 'api_platform.action.placeholder',
            'api_platform.action.get_collection' => 'api_platform.action.placeholder',
            'api_platform.action.get_item' => 'api_platform.action.placeholder',
            'api_platform.action.post_collection' => 'api_platform.action.placeholder',
            'api_platform.action.put_item' => 'api_platform.action.placeholder',
            'api_platform.serializer' => 'serializer',
            'cache.app_clearer' => 'cache.default_clearer',
            'console.command.apiplatform_core_bridge_symfony_bundle_command_swaggercommand' => 'api_platform.swagger.command.swagger_command',
            'console.command.doctrine_bundle_doctrinecachebundle_command_containscommand' => 'doctrine_cache.contains_command',
            'console.command.doctrine_bundle_doctrinecachebundle_command_deletecommand' => 'doctrine_cache.delete_command',
            'console.command.doctrine_bundle_doctrinecachebundle_command_flushcommand' => 'doctrine_cache.flush_command',
            'console.command.doctrine_bundle_doctrinecachebundle_command_statscommand' => 'doctrine_cache.stats_command',
            'console.command.liip_functionaltestbundle_command_runparatestcommand' => 'Liip\\FunctionalTestBundle\\Command\\RunParatestCommand',
            'console.command.liip_functionaltestbundle_command_testcommand' => 'Liip\\FunctionalTestBundle\\Command\\TestCommand',
            'database_connection' => 'doctrine.dbal.default_connection',
            'doctrine.orm.default_metadata_cache' => 'doctrine_cache.providers.doctrine.orm.default_metadata_cache',
            'doctrine.orm.default_query_cache' => 'doctrine_cache.providers.doctrine.orm.default_query_cache',
            'doctrine.orm.default_result_cache' => 'doctrine_cache.providers.doctrine.orm.default_result_cache',
            'doctrine.orm.entity_manager' => 'doctrine.orm.default_entity_manager',
            'event_dispatcher' => 'debug.event_dispatcher',
            'fos_user.util.username_canonicalizer' => 'fos_user.util.email_canonicalizer',
            'mailer' => 'swiftmailer.mailer.default',
            'session.storage' => 'session.storage.native',
            'swiftmailer.mailer' => 'swiftmailer.mailer.default',
            'swiftmailer.plugin.messagelogger' => 'swiftmailer.mailer.default.plugin.messagelogger',
            'swiftmailer.transport' => 'swiftmailer.mailer.default.transport',
            'validator' => 'liip_functional_test.validator',
        ];
    }

    public function getRemovedIds()
    {
        return require $this->containerDir.\DIRECTORY_SEPARATOR.'removed-ids.php';
    }

    public function compile()
    {
        throw new LogicException('You cannot compile a dumped container that was already compiled.');
    }

    public function isCompiled()
    {
        return true;
    }

    public function isFrozen()
    {
        @trigger_error(sprintf('The %s() method is deprecated since Symfony 3.3 and will be removed in 4.0. Use the isCompiled() method instead.', __METHOD__), E_USER_DEPRECATED);

        return true;
    }

    protected function load($file, $lazyLoad = true)
    {
        return require $this->containerDir.\DIRECTORY_SEPARATOR.$file;
    }

    /**
     * Gets the public 'cache.app' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\TraceableAdapter
     */
    protected function getCache_AppService()
    {
        $a = new \Symfony\Component\Cache\Adapter\FilesystemAdapter('DUALVlzBD1', 0, ($this->targetDirs[0].'/pools'));
        $a->setLogger(${($_ = isset($this->services['monolog.logger.cache']) ? $this->services['monolog.logger.cache'] : $this->getMonolog_Logger_CacheService()) && false ?: '_'});

        return $this->services['cache.app'] = new \Symfony\Component\Cache\Adapter\TraceableAdapter($a);
    }

    /**
     * Gets the public 'cache.system' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\TraceableAdapter
     */
    protected function getCache_SystemService()
    {
        return $this->services['cache.system'] = new \Symfony\Component\Cache\Adapter\TraceableAdapter(\Symfony\Component\Cache\Adapter\AbstractAdapter::createSystemCache('v8g-fUCA8z', 0, $this->getParameter('container.build_id'), ($this->targetDirs[0].'/pools'), ${($_ = isset($this->services['monolog.logger.cache']) ? $this->services['monolog.logger.cache'] : $this->getMonolog_Logger_CacheService()) && false ?: '_'}));
    }

    /**
     * Gets the public 'doctrine' shared service.
     *
     * @return \Doctrine\Bundle\DoctrineBundle\Registry
     */
    protected function getDoctrineService()
    {
        return $this->services['doctrine'] = new \Doctrine\Bundle\DoctrineBundle\Registry($this, $this->parameters['doctrine.connections'], $this->parameters['doctrine.entity_managers'], 'default', 'default');
    }

    /**
     * Gets the public 'http_kernel' shared service.
     *
     * @return \Symfony\Component\HttpKernel\HttpKernel
     */
    protected function getHttpKernelService()
    {
        return $this->services['http_kernel'] = new \Symfony\Component\HttpKernel\HttpKernel(${($_ = isset($this->services['debug.event_dispatcher']) ? $this->services['debug.event_dispatcher'] : $this->getDebug_EventDispatcherService()) && false ?: '_'}, ${($_ = isset($this->services['debug.controller_resolver']) ? $this->services['debug.controller_resolver'] : $this->getDebug_ControllerResolverService()) && false ?: '_'}, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, ${($_ = isset($this->services['debug.argument_resolver']) ? $this->services['debug.argument_resolver'] : $this->getDebug_ArgumentResolverService()) && false ?: '_'});
    }

    /**
     * Gets the public 'liip_functional_test.exception_listener' shared service.
     *
     * @return \Liip\FunctionalTestBundle\EventListener\ExceptionListener
     */
    protected function getLiipFunctionalTest_ExceptionListenerService()
    {
        return $this->services['liip_functional_test.exception_listener'] = new \Liip\FunctionalTestBundle\EventListener\ExceptionListener();
    }

    /**
     * Gets the public 'liip_functional_test.validator' shared service.
     *
     * @return \Liip\FunctionalTestBundle\Validator\DataCollectingValidator
     */
    protected function getLiipFunctionalTest_ValidatorService()
    {
        return $this->services['liip_functional_test.validator'] = new \Liip\FunctionalTestBundle\Validator\DataCollectingValidator(${($_ = isset($this->services['debug.validator']) ? $this->services['debug.validator'] : $this->getDebug_ValidatorService()) && false ?: '_'});
    }

    /**
     * Gets the public 'profiler' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Profiler\Profiler
     */
    protected function getProfilerService()
    {
        $a = ${($_ = isset($this->services['monolog.logger.profiler']) ? $this->services['monolog.logger.profiler'] : $this->getMonolog_Logger_ProfilerService()) && false ?: '_'};

        $this->services['profiler'] = $instance = new \Symfony\Component\HttpKernel\Profiler\Profiler(new \Symfony\Component\HttpKernel\Profiler\FileProfilerStorage(('file:'.$this->targetDirs[0].'/profiler')), $a, true);

        $b = ${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel')) && false ?: '_'};
        $c = new \Symfony\Component\Cache\DataCollector\CacheDataCollector();
        $c->addInstance('cache.app', ${($_ = isset($this->services['cache.app']) ? $this->services['cache.app'] : $this->getCache_AppService()) && false ?: '_'});
        $c->addInstance('cache.system', ${($_ = isset($this->services['cache.system']) ? $this->services['cache.system'] : $this->getCache_SystemService()) && false ?: '_'});
        $c->addInstance('cache.validator', ${($_ = isset($this->services['cache.validator']) ? $this->services['cache.validator'] : $this->getCache_ValidatorService()) && false ?: '_'});
        $c->addInstance('cache.serializer', ${($_ = isset($this->services['cache.serializer']) ? $this->services['cache.serializer'] : $this->getCache_SerializerService()) && false ?: '_'});
        $c->addInstance('cache.annotations', ${($_ = isset($this->services['cache.annotations']) ? $this->services['cache.annotations'] : $this->getCache_AnnotationsService()) && false ?: '_'});
        $d = new \Doctrine\Bundle\DoctrineBundle\DataCollector\DoctrineDataCollector(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'});
        $d->addLogger('default', ${($_ = isset($this->services['doctrine.dbal.logger.profiling.default']) ? $this->services['doctrine.dbal.logger.profiling.default'] : ($this->services['doctrine.dbal.logger.profiling.default'] = new \Doctrine\DBAL\Logging\DebugStack())) && false ?: '_'});
        $e = new \Symfony\Component\HttpKernel\DataCollector\ConfigDataCollector();
        if ($this->has('kernel')) {
            $e->setKernel($b);
        }

        $instance->add(${($_ = isset($this->services['data_collector.request']) ? $this->services['data_collector.request'] : ($this->services['data_collector.request'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RequestDataCollector())) && false ?: '_'});
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\TimeDataCollector($b, ${($_ = isset($this->services['debug.stopwatch']) ? $this->services['debug.stopwatch'] : ($this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))) && false ?: '_'}));
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\MemoryDataCollector());
        $instance->add(new \Symfony\Component\Validator\DataCollector\ValidatorDataCollector(${($_ = isset($this->services['debug.validator']) ? $this->services['debug.validator'] : $this->getDebug_ValidatorService()) && false ?: '_'}));
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\AjaxDataCollector());
        $instance->add(${($_ = isset($this->services['data_collector.form']) ? $this->services['data_collector.form'] : $this->getDataCollector_FormService()) && false ?: '_'});
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\ExceptionDataCollector());
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\LoggerDataCollector($a, ($this->targetDirs[0].'/appDevDebugProjectContainer')));
        $instance->add(new \Symfony\Component\HttpKernel\DataCollector\EventDataCollector(${($_ = isset($this->services['debug.event_dispatcher']) ? $this->services['debug.event_dispatcher'] : $this->getDebug_EventDispatcherService()) && false ?: '_'}));
        $instance->add(${($_ = isset($this->services['data_collector.router']) ? $this->services['data_collector.router'] : ($this->services['data_collector.router'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RouterDataCollector())) && false ?: '_'});
        $instance->add($c);
        $instance->add(${($_ = isset($this->services['data_collector.translation']) ? $this->services['data_collector.translation'] : $this->getDataCollector_TranslationService()) && false ?: '_'});
        $instance->add(new \Symfony\Bundle\SecurityBundle\DataCollector\SecurityDataCollector(${($_ = isset($this->services['security.token_storage']) ? $this->services['security.token_storage'] : ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())) && false ?: '_'}, ${($_ = isset($this->services['security.role_hierarchy']) ? $this->services['security.role_hierarchy'] : $this->getSecurity_RoleHierarchyService()) && false ?: '_'}, ${($_ = isset($this->services['security.logout_url_generator']) ? $this->services['security.logout_url_generator'] : $this->getSecurity_LogoutUrlGeneratorService()) && false ?: '_'}, ${($_ = isset($this->services['debug.security.access.decision_manager']) ? $this->services['debug.security.access.decision_manager'] : $this->getDebug_Security_Access_DecisionManagerService()) && false ?: '_'}, ${($_ = isset($this->services['security.firewall.map']) ? $this->services['security.firewall.map'] : $this->getSecurity_Firewall_MapService()) && false ?: '_'}, ${($_ = isset($this->services['security.firewall']) ? $this->services['security.firewall'] : $this->getSecurity_FirewallService()) && false ?: '_'}));
        $instance->add(new \Symfony\Bridge\Twig\DataCollector\TwigDataCollector(${($_ = isset($this->services['twig.profile']) ? $this->services['twig.profile'] : ($this->services['twig.profile'] = new \Twig\Profiler\Profile())) && false ?: '_'}, ${($_ = isset($this->services['twig']) ? $this->services['twig'] : $this->getTwigService()) && false ?: '_'}));
        $instance->add($d);
        $instance->add(new \Symfony\Bundle\SwiftmailerBundle\DataCollector\MessageDataCollector($this));
        $instance->add($e);

        return $instance;
    }

    /**
     * Gets the public 'request_stack' shared service.
     *
     * @return \Symfony\Component\HttpFoundation\RequestStack
     */
    protected function getRequestStackService()
    {
        return $this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack();
    }

    /**
     * Gets the public 'router' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Routing\Router
     */
    protected function getRouterService()
    {
        $this->services['router'] = $instance = new \Symfony\Bundle\FrameworkBundle\Routing\Router($this, ($this->targetDirs[0].'/assetic/routing.yml'), ['cache_dir' => $this->targetDirs[0], 'debug' => true, 'generator_class' => 'Symfony\\Component\\Routing\\Generator\\UrlGenerator', 'generator_base_class' => 'Symfony\\Component\\Routing\\Generator\\UrlGenerator', 'generator_dumper_class' => 'Symfony\\Component\\Routing\\Generator\\Dumper\\PhpGeneratorDumper', 'generator_cache_class' => 'appDevDebugProjectContainerUrlGenerator', 'matcher_class' => 'Symfony\\Bundle\\FrameworkBundle\\Routing\\RedirectableUrlMatcher', 'matcher_base_class' => 'Symfony\\Bundle\\FrameworkBundle\\Routing\\RedirectableUrlMatcher', 'matcher_dumper_class' => 'Symfony\\Component\\Routing\\Matcher\\Dumper\\PhpMatcherDumper', 'matcher_cache_class' => 'appDevDebugProjectContainerUrlMatcher', 'strict_requirements' => true, 'resource_type' => 'yaml'], ${($_ = isset($this->services['router.request_context']) ? $this->services['router.request_context'] : $this->getRouter_RequestContextService()) && false ?: '_'});

        $instance->setConfigCacheFactory(${($_ = isset($this->services['config_cache_factory']) ? $this->services['config_cache_factory'] : $this->getConfigCacheFactoryService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the public 'security.authorization_checker' shared service.
     *
     * @return \Symfony\Component\Security\Core\Authorization\AuthorizationChecker
     */
    protected function getSecurity_AuthorizationCheckerService()
    {
        return $this->services['security.authorization_checker'] = new \Symfony\Component\Security\Core\Authorization\AuthorizationChecker(${($_ = isset($this->services['security.token_storage']) ? $this->services['security.token_storage'] : ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())) && false ?: '_'}, ${($_ = isset($this->services['security.authentication.manager']) ? $this->services['security.authentication.manager'] : $this->getSecurity_Authentication_ManagerService()) && false ?: '_'}, ${($_ = isset($this->services['debug.security.access.decision_manager']) ? $this->services['debug.security.access.decision_manager'] : $this->getDebug_Security_Access_DecisionManagerService()) && false ?: '_'}, false);
    }

    /**
     * Gets the public 'security.token_storage' shared service.
     *
     * @return \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage
     */
    protected function getSecurity_TokenStorageService()
    {
        return $this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage();
    }

    /**
     * Gets the public 'serializer' shared service.
     *
     * @return \Symfony\Component\Serializer\Serializer
     */
    protected function getSerializerService()
    {
        $a = ${($_ = isset($this->services['api_platform.router']) ? $this->services['api_platform.router'] : $this->getApiPlatform_RouterService()) && false ?: '_'};
        $b = ${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'};
        $c = ${($_ = isset($this->services['api_platform.metadata.property.name_collection_factory']) ? $this->services['api_platform.metadata.property.name_collection_factory'] : $this->getApiPlatform_Metadata_Property_NameCollectionFactoryService()) && false ?: '_'};
        $d = ${($_ = isset($this->services['api_platform.metadata.property.metadata_factory']) ? $this->services['api_platform.metadata.property.metadata_factory'] : $this->getApiPlatform_Metadata_Property_MetadataFactoryService()) && false ?: '_'};
        $e = ${($_ = isset($this->services['api_platform.resource_class_resolver']) ? $this->services['api_platform.resource_class_resolver'] : $this->getApiPlatform_ResourceClassResolverService()) && false ?: '_'};
        $f = ${($_ = isset($this->services['property_accessor']) ? $this->services['property_accessor'] : $this->getPropertyAccessorService()) && false ?: '_'};

        $g = new \ApiPlatform\Core\Bridge\Symfony\Routing\IriConverter($c, $d, ${($_ = isset($this->services['api_platform.item_data_provider']) ? $this->services['api_platform.item_data_provider'] : $this->getApiPlatform_ItemDataProviderService()) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\Routing\CachedRouteNameResolver(${($_ = isset($this->services['api_platform.cache.route_name_resolver']) ? $this->services['api_platform.cache.route_name_resolver'] : ($this->services['api_platform.cache.route_name_resolver'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter())) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\Routing\RouteNameResolver($a)), $a, $f);
        $h = ${($_ = isset($this->services['api_platform.jsonld.context_builder']) ? $this->services['api_platform.jsonld.context_builder'] : $this->getApiPlatform_Jsonld_ContextBuilderService()) && false ?: '_'};
        $i = ${($_ = isset($this->services['serializer.mapping.class_metadata_factory']) ? $this->services['serializer.mapping.class_metadata_factory'] : $this->getSerializer_Mapping_ClassMetadataFactoryService()) && false ?: '_'};

        return $this->services['serializer'] = new \Symfony\Component\Serializer\Serializer([0 => new \ApiPlatform\Core\Hydra\Serializer\ConstraintViolationListNormalizer($a), 1 => new \ApiPlatform\Core\Hydra\Serializer\DocumentationNormalizer($b, $c, $d, $e, ${($_ = isset($this->services['api_platform.operation_method_resolver']) ? $this->services['api_platform.operation_method_resolver'] : $this->getApiPlatform_OperationMethodResolverService()) && false ?: '_'}, $a), 2 => new \ApiPlatform\Core\Hydra\Serializer\EntrypointNormalizer($b, $g, $a), 3 => new \ApiPlatform\Core\Hydra\Serializer\ErrorNormalizer($a, true), 4 => ${($_ = isset($this->services['api_platform.swagger.normalizer.documentation']) ? $this->services['api_platform.swagger.normalizer.documentation'] : $this->getApiPlatform_Swagger_Normalizer_DocumentationService()) && false ?: '_'}, 5 => new \ApiPlatform\Core\Hydra\Serializer\CollectionFiltersNormalizer(new \ApiPlatform\Core\Hydra\Serializer\PartialCollectionViewNormalizer(new \ApiPlatform\Core\Hydra\Serializer\CollectionNormalizer($h, $e, $g), 'page', 'pagination'), $b, $e, ${($_ = isset($this->services['api_platform.filters']) ? $this->services['api_platform.filters'] : ($this->services['api_platform.filters'] = new \ApiPlatform\Core\Api\FilterCollection([]))) && false ?: '_'}), 6 => new \ApiPlatform\Core\Problem\Serializer\ConstraintViolationListNormalizer(), 7 => new \ApiPlatform\Core\JsonLd\Serializer\ItemNormalizer($b, $c, $d, $g, $e, $h, $f, NULL, $i), 8 => new \ApiPlatform\Core\Problem\Serializer\ErrorNormalizer(true), 9 => new \ApiPlatform\Core\Serializer\ItemNormalizer($c, $d, $g, $e, $f, NULL, $i), 10 => ${($_ = isset($this->services['serializer.normalizer.custom']) ? $this->services['serializer.normalizer.custom'] : $this->getSerializer_Normalizer_CustomService()) && false ?: '_'}, 11 => new \Symfony\Component\Serializer\Normalizer\JsonSerializableNormalizer(), 12 => new \Symfony\Component\Serializer\Normalizer\DateTimeNormalizer(), 13 => new \Symfony\Component\Serializer\Normalizer\DateIntervalNormalizer(), 14 => new \Symfony\Component\Serializer\Normalizer\DataUriNormalizer(), 15 => new \Symfony\Component\Serializer\Normalizer\ArrayDenormalizer(), 16 => new \Symfony\Component\Serializer\Normalizer\ObjectNormalizer($i, NULL, $f, ${($_ = isset($this->services['property_info']) ? $this->services['property_info'] : $this->getPropertyInfoService()) && false ?: '_'})], [0 => new \Symfony\Component\Serializer\Encoder\XmlEncoder(), 1 => new \Symfony\Component\Serializer\Encoder\JsonEncoder(), 2 => new \Symfony\Component\Serializer\Encoder\YamlEncoder(), 3 => new \Symfony\Component\Serializer\Encoder\CsvEncoder(), 4 => new \ApiPlatform\Core\Serializer\JsonEncoder('jsonld'), 5 => new \ApiPlatform\Core\Serializer\JsonEncoder('jsonproblem')]);
    }

    /**
     * Gets the public 'translator' shared service.
     *
     * @return \Symfony\Component\Translation\DataCollectorTranslator
     */
    protected function getTranslatorService()
    {
        return $this->services['translator'] = new \Symfony\Component\Translation\DataCollectorTranslator(new \Symfony\Component\Translation\LoggingTranslator(${($_ = isset($this->services['translator.default']) ? $this->services['translator.default'] : $this->getTranslator_DefaultService()) && false ?: '_'}, ${($_ = isset($this->services['monolog.logger.translation']) ? $this->services['monolog.logger.translation'] : $this->getMonolog_Logger_TranslationService()) && false ?: '_'}));
    }

    /**
     * Gets the public 'twig' shared service.
     *
     * @return \Twig\Environment
     */
    protected function getTwigService()
    {
        $this->services['twig'] = $instance = new \Twig\Environment(${($_ = isset($this->services['twig.loader']) ? $this->services['twig.loader'] : $this->getTwig_LoaderService()) && false ?: '_'}, ['autoescape' => 'name', 'cache' => ($this->targetDirs[0].'/twig'), 'charset' => 'UTF-8', 'debug' => true]);

        $a = ${($_ = isset($this->services['debug.stopwatch']) ? $this->services['debug.stopwatch'] : ($this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))) && false ?: '_'};
        $b = ${($_ = isset($this->services['debug.file_link_formatter']) ? $this->services['debug.file_link_formatter'] : $this->getDebug_FileLinkFormatterService()) && false ?: '_'};
        $c = ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'};
        $d = new \Symfony\Component\VarDumper\Dumper\HtmlDumper(NULL, 'UTF-8', 1);
        $d->setDisplayOptions(['maxStringLength' => 4096, 'fileLinkFormat' => $b]);
        $e = new \Symfony\Bridge\Twig\AppVariable();
        $e->setEnvironment('dev');
        $e->setDebug(true);
        if ($this->has('security.token_storage')) {
            $e->setTokenStorage(${($_ = isset($this->services['security.token_storage']) ? $this->services['security.token_storage'] : ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())) && false ?: '_'});
        }
        if ($this->has('request_stack')) {
            $e->setRequestStack($c);
        }

        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\LogoutUrlExtension(${($_ = isset($this->services['security.logout_url_generator']) ? $this->services['security.logout_url_generator'] : $this->getSecurity_LogoutUrlGeneratorService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\SecurityExtension(${($_ = isset($this->services['security.authorization_checker']) ? $this->services['security.authorization_checker'] : $this->getSecurity_AuthorizationCheckerService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\ProfilerExtension(${($_ = isset($this->services['twig.profile']) ? $this->services['twig.profile'] : ($this->services['twig.profile'] = new \Twig\Profiler\Profile())) && false ?: '_'}, $a));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\TranslationExtension(${($_ = isset($this->services['translator']) ? $this->services['translator'] : $this->getTranslatorService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\AssetExtension(${($_ = isset($this->services['assets.packages']) ? $this->services['assets.packages'] : $this->getAssets_PackagesService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\CodeExtension($b, $this->targetDirs[3], 'UTF-8'));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\RoutingExtension(${($_ = isset($this->services['router']) ? $this->services['router'] : $this->getRouterService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\YamlExtension());
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\StopwatchExtension($a, true));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\ExpressionExtension());
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\HttpKernelExtension());
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\HttpFoundationExtension($c, ${($_ = isset($this->services['router.request_context']) ? $this->services['router.request_context'] : $this->getRouter_RequestContextService()) && false ?: '_'}));
        $instance->addExtension(new \Symfony\Bridge\Twig\Extension\FormExtension([0 => $this, 1 => 'twig.form.renderer']));
        $instance->addExtension(new \Twig\Extension\DebugExtension());
        $instance->addExtension(new \Symfony\Bundle\AsseticBundle\Twig\AsseticExtension(${($_ = isset($this->services['assetic.asset_factory']) ? $this->services['assetic.asset_factory'] : $this->getAssetic_AssetFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['templating.name_parser']) ? $this->services['templating.name_parser'] : ($this->services['templating.name_parser'] = new \Symfony\Bundle\FrameworkBundle\Templating\TemplateNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}))) && false ?: '_'}, true, [], $this->parameters['assetic.bundles'], new \Symfony\Bundle\AsseticBundle\DefaultValueSupplier($this)));
        $instance->addExtension(new \Doctrine\Bundle\DoctrineBundle\Twig\DoctrineExtension());
        $instance->addExtension(new \Symfony\Bundle\WebProfilerBundle\Twig\WebProfilerExtension($d));
        $instance->addGlobal('app', $e);
        $instance->addRuntimeLoader(new \Twig\RuntimeLoader\ContainerRuntimeLoader(new \Symfony\Component\DependencyInjection\ServiceLocator(['Symfony\\Bridge\\Twig\\Extension\\HttpKernelRuntime' => function () {
            return ${($_ = isset($this->services['twig.runtime.httpkernel']) ? $this->services['twig.runtime.httpkernel'] : $this->load('getTwig_Runtime_HttpkernelService.php')) && false ?: '_'};
        }, 'Symfony\\Component\\Form\\FormRenderer' => function () {
            return ${($_ = isset($this->services['twig.form.renderer']) ? $this->services['twig.form.renderer'] : $this->load('getTwig_Form_RendererService.php')) && false ?: '_'};
        }])));
        (new \Symfony\Bundle\TwigBundle\DependencyInjection\Configurator\EnvironmentConfigurator('F j, Y H:i', '%d days', NULL, 0, '.', ','))->configure($instance);

        return $instance;
    }

    /**
     * Gets the private 'annotation_reader' shared service.
     *
     * @return \Doctrine\Common\Annotations\CachedReader
     */
    protected function getAnnotationReaderService()
    {
        return $this->services['annotation_reader'] = new \Doctrine\Common\Annotations\CachedReader(${($_ = isset($this->services['annotations.reader']) ? $this->services['annotations.reader'] : $this->getAnnotations_ReaderService()) && false ?: '_'}, ${($_ = isset($this->services['annotations.cache']) ? $this->services['annotations.cache'] : $this->load('getAnnotations_CacheService.php')) && false ?: '_'}, true);
    }

    /**
     * Gets the private 'annotations.reader' shared service.
     *
     * @return \Doctrine\Common\Annotations\AnnotationReader
     */
    protected function getAnnotations_ReaderService()
    {
        $this->services['annotations.reader'] = $instance = new \Doctrine\Common\Annotations\AnnotationReader();

        $a = new \Doctrine\Common\Annotations\AnnotationRegistry();
        $a->registerUniqueLoader('class_exists');

        $instance->addGlobalIgnoredName('required', $a);

        return $instance;
    }

    /**
     * Gets the private 'api_platform.cache.metadata.property' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\ArrayAdapter
     */
    protected function getApiPlatform_Cache_Metadata_PropertyService()
    {
        return $this->services['api_platform.cache.metadata.property'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter();
    }

    /**
     * Gets the private 'api_platform.cache.metadata.resource' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\ArrayAdapter
     */
    protected function getApiPlatform_Cache_Metadata_ResourceService()
    {
        return $this->services['api_platform.cache.metadata.resource'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter();
    }

    /**
     * Gets the private 'api_platform.cache.route_name_resolver' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\ArrayAdapter
     */
    protected function getApiPlatform_Cache_RouteNameResolverService()
    {
        return $this->services['api_platform.cache.route_name_resolver'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter();
    }

    /**
     * Gets the private 'api_platform.collection_data_provider' shared service.
     *
     * @return \ApiPlatform\Core\DataProvider\ChainCollectionDataProvider
     */
    protected function getApiPlatform_CollectionDataProviderService()
    {
        $a = ${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'};
        $b = ${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'};

        return $this->services['api_platform.collection_data_provider'] = new \ApiPlatform\Core\DataProvider\ChainCollectionDataProvider([0 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\CollectionDataProvider($a, [0 => ${($_ = isset($this->services['api_platform.doctrine.orm.query_extension.eager_loading']) ? $this->services['api_platform.doctrine.orm.query_extension.eager_loading'] : $this->getApiPlatform_Doctrine_Orm_QueryExtension_EagerLoadingService()) && false ?: '_'}, 1 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\FilterExtension($b, ${($_ = isset($this->services['api_platform.filters']) ? $this->services['api_platform.filters'] : ($this->services['api_platform.filters'] = new \ApiPlatform\Core\Api\FilterCollection([]))) && false ?: '_'}), 2 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\FilterEagerLoadingExtension($b, true), 3 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\OrderExtension(NULL), 4 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\PaginationExtension($a, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, $b, true, false, false, 30, 'page', 'pagination', 'itemsPerPage', NULL)])]);
    }

    /**
     * Gets the private 'api_platform.doctrine.orm.query_extension.eager_loading' shared service.
     *
     * @return \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\EagerLoadingExtension
     */
    protected function getApiPlatform_Doctrine_Orm_QueryExtension_EagerLoadingService()
    {
        return $this->services['api_platform.doctrine.orm.query_extension.eager_loading'] = new \ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\EagerLoadingExtension(${($_ = isset($this->services['api_platform.metadata.property.name_collection_factory']) ? $this->services['api_platform.metadata.property.name_collection_factory'] : $this->getApiPlatform_Metadata_Property_NameCollectionFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.metadata_factory']) ? $this->services['api_platform.metadata.property.metadata_factory'] : $this->getApiPlatform_Metadata_Property_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'}, 30, true, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, ${($_ = isset($this->services['api_platform.serializer.context_builder']) ? $this->services['api_platform.serializer.context_builder'] : $this->getApiPlatform_Serializer_ContextBuilderService()) && false ?: '_'}, false);
    }

    /**
     * Gets the private 'api_platform.filters' shared service.
     *
     * @return \ApiPlatform\Core\Api\FilterCollection
     */
    protected function getApiPlatform_FiltersService()
    {
        return $this->services['api_platform.filters'] = new \ApiPlatform\Core\Api\FilterCollection([]);
    }

    /**
     * Gets the private 'api_platform.hydra.listener.response.add_link_header' shared service.
     *
     * @return \ApiPlatform\Core\Hydra\EventListener\AddLinkHeaderListener
     */
    protected function getApiPlatform_Hydra_Listener_Response_AddLinkHeaderService()
    {
        return $this->services['api_platform.hydra.listener.response.add_link_header'] = new \ApiPlatform\Core\Hydra\EventListener\AddLinkHeaderListener(${($_ = isset($this->services['api_platform.router']) ? $this->services['api_platform.router'] : $this->getApiPlatform_RouterService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.item_data_provider' shared service.
     *
     * @return \ApiPlatform\Core\DataProvider\ChainItemDataProvider
     */
    protected function getApiPlatform_ItemDataProviderService()
    {
        return $this->services['api_platform.item_data_provider'] = new \ApiPlatform\Core\DataProvider\ChainItemDataProvider([0 => new \ApiPlatform\Core\Bridge\Doctrine\Orm\ItemDataProvider(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.name_collection_factory']) ? $this->services['api_platform.metadata.property.name_collection_factory'] : $this->getApiPlatform_Metadata_Property_NameCollectionFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.metadata_factory']) ? $this->services['api_platform.metadata.property.metadata_factory'] : $this->getApiPlatform_Metadata_Property_MetadataFactoryService()) && false ?: '_'}, [0 => ${($_ = isset($this->services['api_platform.doctrine.orm.query_extension.eager_loading']) ? $this->services['api_platform.doctrine.orm.query_extension.eager_loading'] : $this->getApiPlatform_Doctrine_Orm_QueryExtension_EagerLoadingService()) && false ?: '_'}])]);
    }

    /**
     * Gets the private 'api_platform.jsonld.context_builder' shared service.
     *
     * @return \ApiPlatform\Core\JsonLd\ContextBuilder
     */
    protected function getApiPlatform_Jsonld_ContextBuilderService()
    {
        return $this->services['api_platform.jsonld.context_builder'] = new \ApiPlatform\Core\JsonLd\ContextBuilder(${($_ = isset($this->services['api_platform.metadata.resource.name_collection_factory']) ? $this->services['api_platform.metadata.resource.name_collection_factory'] : $this->getApiPlatform_Metadata_Resource_NameCollectionFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.name_collection_factory']) ? $this->services['api_platform.metadata.property.name_collection_factory'] : $this->getApiPlatform_Metadata_Property_NameCollectionFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.metadata_factory']) ? $this->services['api_platform.metadata.property.metadata_factory'] : $this->getApiPlatform_Metadata_Property_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.router']) ? $this->services['api_platform.router'] : $this->getApiPlatform_RouterService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.listener.request.add_format' shared service.
     *
     * @return \ApiPlatform\Core\EventListener\AddFormatListener
     */
    protected function getApiPlatform_Listener_Request_AddFormatService()
    {
        return $this->services['api_platform.listener.request.add_format'] = new \ApiPlatform\Core\EventListener\AddFormatListener(new \Negotiation\Negotiator(), $this->parameters['api_platform.formats']);
    }

    /**
     * Gets the private 'api_platform.listener.request.deserialize' shared service.
     *
     * @return \ApiPlatform\Core\EventListener\DeserializeListener
     */
    protected function getApiPlatform_Listener_Request_DeserializeService()
    {
        return $this->services['api_platform.listener.request.deserialize'] = new \ApiPlatform\Core\EventListener\DeserializeListener(${($_ = isset($this->services['serializer']) ? $this->services['serializer'] : $this->getSerializerService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.serializer.context_builder']) ? $this->services['api_platform.serializer.context_builder'] : $this->getApiPlatform_Serializer_ContextBuilderService()) && false ?: '_'}, $this->parameters['api_platform.formats']);
    }

    /**
     * Gets the private 'api_platform.listener.request.read' shared service.
     *
     * @return \ApiPlatform\Core\EventListener\ReadListener
     */
    protected function getApiPlatform_Listener_Request_ReadService()
    {
        return $this->services['api_platform.listener.request.read'] = new \ApiPlatform\Core\EventListener\ReadListener(${($_ = isset($this->services['api_platform.collection_data_provider']) ? $this->services['api_platform.collection_data_provider'] : $this->getApiPlatform_CollectionDataProviderService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.item_data_provider']) ? $this->services['api_platform.item_data_provider'] : $this->getApiPlatform_ItemDataProviderService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.metadata.extractor.xml' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Extractor\XmlExtractor
     */
    protected function getApiPlatform_Metadata_Extractor_XmlService()
    {
        return $this->services['api_platform.metadata.extractor.xml'] = new \ApiPlatform\Core\Metadata\Extractor\XmlExtractor([]);
    }

    /**
     * Gets the private 'api_platform.metadata.extractor.yaml' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Extractor\YamlExtractor
     */
    protected function getApiPlatform_Metadata_Extractor_YamlService()
    {
        return $this->services['api_platform.metadata.extractor.yaml'] = new \ApiPlatform\Core\Metadata\Extractor\YamlExtractor([]);
    }

    /**
     * Gets the private 'api_platform.metadata.property.metadata_factory' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Property\Factory\CachedPropertyMetadataFactory
     */
    protected function getApiPlatform_Metadata_Property_MetadataFactoryService()
    {
        return $this->services['api_platform.metadata.property.metadata_factory'] = new \ApiPlatform\Core\Metadata\Property\Factory\CachedPropertyMetadataFactory(${($_ = isset($this->services['api_platform.cache.metadata.property']) ? $this->services['api_platform.cache.metadata.property'] : ($this->services['api_platform.cache.metadata.property'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter())) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\Validator\Metadata\Property\ValidatorPropertyMetadataFactory(${($_ = isset($this->services['liip_functional_test.validator']) ? $this->services['liip_functional_test.validator'] : $this->getLiipFunctionalTest_ValidatorService()) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\SerializerPropertyMetadataFactory(${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['serializer.mapping.class_metadata_factory']) ? $this->services['serializer.mapping.class_metadata_factory'] : $this->getSerializer_Mapping_ClassMetadataFactoryService()) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Doctrine\Orm\Metadata\Property\DoctrineOrmPropertyMetadataFactory(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\ExtractorPropertyMetadataFactory(${($_ = isset($this->services['api_platform.metadata.extractor.yaml']) ? $this->services['api_platform.metadata.extractor.yaml'] : ($this->services['api_platform.metadata.extractor.yaml'] = new \ApiPlatform\Core\Metadata\Extractor\YamlExtractor([]))) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\AnnotationPropertyMetadataFactory(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\InheritedPropertyMetadataFactory(${($_ = isset($this->services['api_platform.metadata.resource.name_collection_factory']) ? $this->services['api_platform.metadata.resource.name_collection_factory'] : $this->getApiPlatform_Metadata_Resource_NameCollectionFactoryService()) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\PropertyInfo\Metadata\Property\PropertyInfoPropertyMetadataFactory(${($_ = isset($this->services['property_info']) ? $this->services['property_info'] : $this->getPropertyInfoService()) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\ExtractorPropertyMetadataFactory(${($_ = isset($this->services['api_platform.metadata.extractor.xml']) ? $this->services['api_platform.metadata.extractor.xml'] : ($this->services['api_platform.metadata.extractor.xml'] = new \ApiPlatform\Core\Metadata\Extractor\XmlExtractor([]))) && false ?: '_'})))))))));
    }

    /**
     * Gets the private 'api_platform.metadata.property.name_collection_factory' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Property\Factory\CachedPropertyNameCollectionFactory
     */
    protected function getApiPlatform_Metadata_Property_NameCollectionFactoryService()
    {
        return $this->services['api_platform.metadata.property.name_collection_factory'] = new \ApiPlatform\Core\Metadata\Property\Factory\CachedPropertyNameCollectionFactory(${($_ = isset($this->services['api_platform.cache.metadata.property']) ? $this->services['api_platform.cache.metadata.property'] : ($this->services['api_platform.cache.metadata.property'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter())) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\ExtractorPropertyNameCollectionFactory(${($_ = isset($this->services['api_platform.metadata.extractor.yaml']) ? $this->services['api_platform.metadata.extractor.yaml'] : ($this->services['api_platform.metadata.extractor.yaml'] = new \ApiPlatform\Core\Metadata\Extractor\YamlExtractor([]))) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\ExtractorPropertyNameCollectionFactory(${($_ = isset($this->services['api_platform.metadata.extractor.xml']) ? $this->services['api_platform.metadata.extractor.xml'] : ($this->services['api_platform.metadata.extractor.xml'] = new \ApiPlatform\Core\Metadata\Extractor\XmlExtractor([]))) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Property\Factory\InheritedPropertyNameCollectionFactory(${($_ = isset($this->services['api_platform.metadata.resource.name_collection_factory']) ? $this->services['api_platform.metadata.resource.name_collection_factory'] : $this->getApiPlatform_Metadata_Resource_NameCollectionFactoryService()) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\PropertyInfo\Metadata\Property\PropertyInfoPropertyNameCollectionFactory(${($_ = isset($this->services['property_info']) ? $this->services['property_info'] : $this->getPropertyInfoService()) && false ?: '_'})))));
    }

    /**
     * Gets the private 'api_platform.metadata.resource.metadata_factory' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Resource\Factory\CachedResourceMetadataFactory
     */
    protected function getApiPlatform_Metadata_Resource_MetadataFactoryService()
    {
        return $this->services['api_platform.metadata.resource.metadata_factory'] = new \ApiPlatform\Core\Metadata\Resource\Factory\CachedResourceMetadataFactory(${($_ = isset($this->services['api_platform.cache.metadata.resource']) ? $this->services['api_platform.cache.metadata.resource'] : ($this->services['api_platform.cache.metadata.resource'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter())) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Resource\Factory\OperationResourceMetadataFactory(new \ApiPlatform\Core\Metadata\Resource\Factory\ShortNameResourceMetadataFactory(new \ApiPlatform\Core\Metadata\Resource\Factory\PhpDocResourceMetadataFactory(new \ApiPlatform\Core\Metadata\Resource\Factory\ExtractorResourceMetadataFactory(${($_ = isset($this->services['api_platform.metadata.extractor.yaml']) ? $this->services['api_platform.metadata.extractor.yaml'] : ($this->services['api_platform.metadata.extractor.yaml'] = new \ApiPlatform\Core\Metadata\Extractor\YamlExtractor([]))) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Resource\Factory\AnnotationResourceMetadataFactory(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Resource\Factory\ExtractorResourceMetadataFactory(${($_ = isset($this->services['api_platform.metadata.extractor.xml']) ? $this->services['api_platform.metadata.extractor.xml'] : ($this->services['api_platform.metadata.extractor.xml'] = new \ApiPlatform\Core\Metadata\Extractor\XmlExtractor([]))) && false ?: '_'})))))));
    }

    /**
     * Gets the private 'api_platform.metadata.resource.name_collection_factory' shared service.
     *
     * @return \ApiPlatform\Core\Metadata\Resource\Factory\CachedResourceNameCollectionFactory
     */
    protected function getApiPlatform_Metadata_Resource_NameCollectionFactoryService()
    {
        return $this->services['api_platform.metadata.resource.name_collection_factory'] = new \ApiPlatform\Core\Metadata\Resource\Factory\CachedResourceNameCollectionFactory(${($_ = isset($this->services['api_platform.cache.metadata.resource']) ? $this->services['api_platform.cache.metadata.resource'] : ($this->services['api_platform.cache.metadata.resource'] = new \Symfony\Component\Cache\Adapter\ArrayAdapter())) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Resource\Factory\ExtractorResourceNameCollectionFactory(${($_ = isset($this->services['api_platform.metadata.extractor.yaml']) ? $this->services['api_platform.metadata.extractor.yaml'] : ($this->services['api_platform.metadata.extractor.yaml'] = new \ApiPlatform\Core\Metadata\Extractor\YamlExtractor([]))) && false ?: '_'}, new \ApiPlatform\Core\Metadata\Resource\Factory\AnnotationResourceNameCollectionFactory(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'}, $this->getParameter('api_platform.resource_class_directories'), new \ApiPlatform\Core\Metadata\Resource\Factory\ExtractorResourceNameCollectionFactory(${($_ = isset($this->services['api_platform.metadata.extractor.xml']) ? $this->services['api_platform.metadata.extractor.xml'] : ($this->services['api_platform.metadata.extractor.xml'] = new \ApiPlatform\Core\Metadata\Extractor\XmlExtractor([]))) && false ?: '_'}))));
    }

    /**
     * Gets the private 'api_platform.operation_method_resolver' shared service.
     *
     * @return \ApiPlatform\Core\Bridge\Symfony\Routing\OperationMethodResolver
     */
    protected function getApiPlatform_OperationMethodResolverService()
    {
        return $this->services['api_platform.operation_method_resolver'] = new \ApiPlatform\Core\Bridge\Symfony\Routing\OperationMethodResolver(${($_ = isset($this->services['api_platform.router']) ? $this->services['api_platform.router'] : $this->getApiPlatform_RouterService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.operation_path_resolver.custom' shared service.
     *
     * @return \ApiPlatform\Core\PathResolver\CustomOperationPathResolver
     */
    protected function getApiPlatform_OperationPathResolver_CustomService()
    {
        return $this->services['api_platform.operation_path_resolver.custom'] = new \ApiPlatform\Core\PathResolver\CustomOperationPathResolver(${($_ = isset($this->services['api_platform.operation_path_resolver.default']) ? $this->services['api_platform.operation_path_resolver.default'] : ($this->services['api_platform.operation_path_resolver.default'] = new \ApiPlatform\Core\PathResolver\UnderscoreOperationPathResolver())) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.operation_path_resolver.default' shared service.
     *
     * @return \ApiPlatform\Core\PathResolver\UnderscoreOperationPathResolver
     */
    protected function getApiPlatform_OperationPathResolver_DefaultService()
    {
        return $this->services['api_platform.operation_path_resolver.default'] = new \ApiPlatform\Core\PathResolver\UnderscoreOperationPathResolver();
    }

    /**
     * Gets the private 'api_platform.resource_class_resolver' shared service.
     *
     * @return \ApiPlatform\Core\Api\ResourceClassResolver
     */
    protected function getApiPlatform_ResourceClassResolverService()
    {
        return $this->services['api_platform.resource_class_resolver'] = new \ApiPlatform\Core\Api\ResourceClassResolver(${($_ = isset($this->services['api_platform.metadata.resource.name_collection_factory']) ? $this->services['api_platform.metadata.resource.name_collection_factory'] : $this->getApiPlatform_Metadata_Resource_NameCollectionFactoryService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.router' shared service.
     *
     * @return \ApiPlatform\Core\Bridge\Symfony\Routing\Router
     */
    protected function getApiPlatform_RouterService()
    {
        return $this->services['api_platform.router'] = new \ApiPlatform\Core\Bridge\Symfony\Routing\Router(${($_ = isset($this->services['router']) ? $this->services['router'] : $this->getRouterService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.serializer.context_builder' shared service.
     *
     * @return \ApiPlatform\Core\Serializer\SerializerContextBuilder
     */
    protected function getApiPlatform_Serializer_ContextBuilderService()
    {
        return $this->services['api_platform.serializer.context_builder'] = new \ApiPlatform\Core\Serializer\SerializerContextBuilder(${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'});
    }

    /**
     * Gets the private 'api_platform.swagger.listener.ui' shared service.
     *
     * @return \ApiPlatform\Core\Bridge\Symfony\Bundle\EventListener\SwaggerUiListener
     */
    protected function getApiPlatform_Swagger_Listener_UiService()
    {
        return $this->services['api_platform.swagger.listener.ui'] = new \ApiPlatform\Core\Bridge\Symfony\Bundle\EventListener\SwaggerUiListener();
    }

    /**
     * Gets the private 'api_platform.swagger.normalizer.documentation' shared service.
     *
     * @return \ApiPlatform\Core\Swagger\Serializer\DocumentationNormalizer
     */
    protected function getApiPlatform_Swagger_Normalizer_DocumentationService()
    {
        $a = ${($_ = isset($this->services['api_platform.router']) ? $this->services['api_platform.router'] : $this->getApiPlatform_RouterService()) && false ?: '_'};

        return $this->services['api_platform.swagger.normalizer.documentation'] = new \ApiPlatform\Core\Swagger\Serializer\DocumentationNormalizer(${($_ = isset($this->services['api_platform.metadata.resource.metadata_factory']) ? $this->services['api_platform.metadata.resource.metadata_factory'] : $this->getApiPlatform_Metadata_Resource_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.name_collection_factory']) ? $this->services['api_platform.metadata.property.name_collection_factory'] : $this->getApiPlatform_Metadata_Property_NameCollectionFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.metadata.property.metadata_factory']) ? $this->services['api_platform.metadata.property.metadata_factory'] : $this->getApiPlatform_Metadata_Property_MetadataFactoryService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.resource_class_resolver']) ? $this->services['api_platform.resource_class_resolver'] : $this->getApiPlatform_ResourceClassResolverService()) && false ?: '_'}, ${($_ = isset($this->services['api_platform.operation_method_resolver']) ? $this->services['api_platform.operation_method_resolver'] : $this->getApiPlatform_OperationMethodResolverService()) && false ?: '_'}, new \ApiPlatform\Core\Bridge\Symfony\Routing\RouterOperationPathResolver($a, ${($_ = isset($this->services['api_platform.operation_path_resolver.custom']) ? $this->services['api_platform.operation_path_resolver.custom'] : $this->getApiPlatform_OperationPathResolver_CustomService()) && false ?: '_'}), $a, ${($_ = isset($this->services['api_platform.filters']) ? $this->services['api_platform.filters'] : ($this->services['api_platform.filters'] = new \ApiPlatform\Core\Api\FilterCollection([]))) && false ?: '_'}, NULL);
    }

    /**
     * Gets the private 'assetic.asset_factory' shared service.
     *
     * @return \Symfony\Bundle\AsseticBundle\Factory\AssetFactory
     */
    protected function getAssetic_AssetFactoryService()
    {
        $this->services['assetic.asset_factory'] = $instance = new \Symfony\Bundle\AsseticBundle\Factory\AssetFactory(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}, $this, $this->getParameterBag(), ($this->targetDirs[3].'/../web'), true);

        $instance->addWorker(new \Symfony\Bundle\AsseticBundle\Factory\Worker\UseControllerWorker());

        return $instance;
    }

    /**
     * Gets the private 'assetic.request_listener' shared service.
     *
     * @return \Symfony\Bundle\AsseticBundle\EventListener\RequestListener
     */
    protected function getAssetic_RequestListenerService()
    {
        return $this->services['assetic.request_listener'] = new \Symfony\Bundle\AsseticBundle\EventListener\RequestListener();
    }

    /**
     * Gets the private 'assets.context' shared service.
     *
     * @return \Symfony\Component\Asset\Context\RequestStackContext
     */
    protected function getAssets_ContextService()
    {
        return $this->services['assets.context'] = new \Symfony\Component\Asset\Context\RequestStackContext(${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, '', false);
    }

    /**
     * Gets the private 'assets.packages' shared service.
     *
     * @return \Symfony\Component\Asset\Packages
     */
    protected function getAssets_PackagesService()
    {
        return $this->services['assets.packages'] = new \Symfony\Component\Asset\Packages(new \Symfony\Component\Asset\PathPackage('', new \Symfony\Component\Asset\VersionStrategy\EmptyVersionStrategy(), ${($_ = isset($this->services['assets.context']) ? $this->services['assets.context'] : $this->getAssets_ContextService()) && false ?: '_'}), []);
    }

    /**
     * Gets the private 'cache.annotations' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\TraceableAdapter
     */
    protected function getCache_AnnotationsService()
    {
        return $this->services['cache.annotations'] = new \Symfony\Component\Cache\Adapter\TraceableAdapter(\Symfony\Component\Cache\Adapter\AbstractAdapter::createSystemCache('ZuNUoEkTo3', 0, $this->getParameter('container.build_id'), ($this->targetDirs[0].'/pools'), ${($_ = isset($this->services['monolog.logger.cache']) ? $this->services['monolog.logger.cache'] : $this->getMonolog_Logger_CacheService()) && false ?: '_'}));
    }

    /**
     * Gets the private 'cache.serializer' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\TraceableAdapter
     */
    protected function getCache_SerializerService()
    {
        return $this->services['cache.serializer'] = new \Symfony\Component\Cache\Adapter\TraceableAdapter(\Symfony\Component\Cache\Adapter\AbstractAdapter::createSystemCache('52WZN7SVoA', 0, $this->getParameter('container.build_id'), ($this->targetDirs[0].'/pools'), ${($_ = isset($this->services['monolog.logger.cache']) ? $this->services['monolog.logger.cache'] : $this->getMonolog_Logger_CacheService()) && false ?: '_'}));
    }

    /**
     * Gets the private 'cache.validator' shared service.
     *
     * @return \Symfony\Component\Cache\Adapter\TraceableAdapter
     */
    protected function getCache_ValidatorService()
    {
        return $this->services['cache.validator'] = new \Symfony\Component\Cache\Adapter\TraceableAdapter(\Symfony\Component\Cache\Adapter\AbstractAdapter::createSystemCache('SbuL4jbx3E', 0, $this->getParameter('container.build_id'), ($this->targetDirs[0].'/pools'), ${($_ = isset($this->services['monolog.logger.cache']) ? $this->services['monolog.logger.cache'] : $this->getMonolog_Logger_CacheService()) && false ?: '_'}));
    }

    /**
     * Gets the private 'config_cache_factory' shared service.
     *
     * @return \Symfony\Component\Config\ResourceCheckerConfigCacheFactory
     */
    protected function getConfigCacheFactoryService()
    {
        return $this->services['config_cache_factory'] = new \Symfony\Component\Config\ResourceCheckerConfigCacheFactory(new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['dependency_injection.config.container_parameters_resource_checker']) ? $this->services['dependency_injection.config.container_parameters_resource_checker'] : ($this->services['dependency_injection.config.container_parameters_resource_checker'] = new \Symfony\Component\DependencyInjection\Config\ContainerParametersResourceChecker($this))) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['config.resource.self_checking_resource_checker']) ? $this->services['config.resource.self_checking_resource_checker'] : ($this->services['config.resource.self_checking_resource_checker'] = new \Symfony\Component\Config\Resource\SelfCheckingResourceChecker())) && false ?: '_'};
        }, 2));
    }

    /**
     * Gets the private 'controller_name_converter' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Controller\ControllerNameParser
     */
    protected function getControllerNameConverterService()
    {
        return $this->services['controller_name_converter'] = new \Symfony\Bundle\FrameworkBundle\Controller\ControllerNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'});
    }

    /**
     * Gets the private 'data_collector.form' shared service.
     *
     * @return \Symfony\Component\Form\Extension\DataCollector\FormDataCollector
     */
    protected function getDataCollector_FormService()
    {
        return $this->services['data_collector.form'] = new \Symfony\Component\Form\Extension\DataCollector\FormDataCollector(${($_ = isset($this->services['data_collector.form.extractor']) ? $this->services['data_collector.form.extractor'] : ($this->services['data_collector.form.extractor'] = new \Symfony\Component\Form\Extension\DataCollector\FormDataExtractor())) && false ?: '_'});
    }

    /**
     * Gets the private 'data_collector.form.extractor' shared service.
     *
     * @return \Symfony\Component\Form\Extension\DataCollector\FormDataExtractor
     */
    protected function getDataCollector_Form_ExtractorService()
    {
        return $this->services['data_collector.form.extractor'] = new \Symfony\Component\Form\Extension\DataCollector\FormDataExtractor();
    }

    /**
     * Gets the private 'data_collector.request' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\DataCollector\RequestDataCollector
     */
    protected function getDataCollector_RequestService()
    {
        return $this->services['data_collector.request'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RequestDataCollector();
    }

    /**
     * Gets the private 'data_collector.router' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\DataCollector\RouterDataCollector
     */
    protected function getDataCollector_RouterService()
    {
        return $this->services['data_collector.router'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RouterDataCollector();
    }

    /**
     * Gets the private 'data_collector.translation' shared service.
     *
     * @return \Symfony\Component\Translation\DataCollector\TranslationDataCollector
     */
    protected function getDataCollector_TranslationService()
    {
        return $this->services['data_collector.translation'] = new \Symfony\Component\Translation\DataCollector\TranslationDataCollector(${($_ = isset($this->services['translator']) ? $this->services['translator'] : $this->getTranslatorService()) && false ?: '_'});
    }

    /**
     * Gets the private 'debug.argument_resolver' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Controller\TraceableArgumentResolver
     */
    protected function getDebug_ArgumentResolverService()
    {
        return $this->services['debug.argument_resolver'] = new \Symfony\Component\HttpKernel\Controller\TraceableArgumentResolver(new \Symfony\Component\HttpKernel\Controller\ArgumentResolver(new \Symfony\Component\HttpKernel\ControllerMetadata\ArgumentMetadataFactory(), new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['argument_resolver.request_attribute']) ? $this->services['argument_resolver.request_attribute'] : ($this->services['argument_resolver.request_attribute'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\RequestAttributeValueResolver())) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['argument_resolver.request']) ? $this->services['argument_resolver.request'] : ($this->services['argument_resolver.request'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\RequestValueResolver())) && false ?: '_'};
            yield 2 => ${($_ = isset($this->services['argument_resolver.session']) ? $this->services['argument_resolver.session'] : ($this->services['argument_resolver.session'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\SessionValueResolver())) && false ?: '_'};
            yield 3 => ${($_ = isset($this->services['security.user_value_resolver']) ? $this->services['security.user_value_resolver'] : $this->load('getSecurity_UserValueResolverService.php')) && false ?: '_'};
            yield 4 => ${($_ = isset($this->services['argument_resolver.service']) ? $this->services['argument_resolver.service'] : $this->load('getArgumentResolver_ServiceService.php')) && false ?: '_'};
            yield 5 => ${($_ = isset($this->services['argument_resolver.default']) ? $this->services['argument_resolver.default'] : ($this->services['argument_resolver.default'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\DefaultValueResolver())) && false ?: '_'};
            yield 6 => ${($_ = isset($this->services['argument_resolver.variadic']) ? $this->services['argument_resolver.variadic'] : ($this->services['argument_resolver.variadic'] = new \Symfony\Component\HttpKernel\Controller\ArgumentResolver\VariadicValueResolver())) && false ?: '_'};
        }, 7)), ${($_ = isset($this->services['debug.stopwatch']) ? $this->services['debug.stopwatch'] : ($this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))) && false ?: '_'});
    }

    /**
     * Gets the private 'debug.controller_resolver' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Controller\TraceableControllerResolver
     */
    protected function getDebug_ControllerResolverService()
    {
        return $this->services['debug.controller_resolver'] = new \Symfony\Component\HttpKernel\Controller\TraceableControllerResolver(new \Symfony\Bundle\FrameworkBundle\Controller\ControllerResolver($this, ${($_ = isset($this->services['controller_name_converter']) ? $this->services['controller_name_converter'] : ($this->services['controller_name_converter'] = new \Symfony\Bundle\FrameworkBundle\Controller\ControllerNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}))) && false ?: '_'}, ${($_ = isset($this->services['monolog.logger.request']) ? $this->services['monolog.logger.request'] : $this->getMonolog_Logger_RequestService()) && false ?: '_'}), ${($_ = isset($this->services['debug.stopwatch']) ? $this->services['debug.stopwatch'] : ($this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))) && false ?: '_'}, ${($_ = isset($this->services['debug.argument_resolver']) ? $this->services['debug.argument_resolver'] : $this->getDebug_ArgumentResolverService()) && false ?: '_'});
    }

    /**
     * Gets the private 'debug.debug_handlers_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\DebugHandlersListener
     */
    protected function getDebug_DebugHandlersListenerService()
    {
        return $this->services['debug.debug_handlers_listener'] = new \Symfony\Component\HttpKernel\EventListener\DebugHandlersListener(NULL, ${($_ = isset($this->services['monolog.logger.php']) ? $this->services['monolog.logger.php'] : $this->getMonolog_Logger_PhpService()) && false ?: '_'}, -1, -1, true, ${($_ = isset($this->services['debug.file_link_formatter']) ? $this->services['debug.file_link_formatter'] : $this->getDebug_FileLinkFormatterService()) && false ?: '_'}, true);
    }

    /**
     * Gets the private 'debug.event_dispatcher' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Debug\TraceableEventDispatcher
     */
    protected function getDebug_EventDispatcherService()
    {
        $this->services['debug.event_dispatcher'] = $instance = new \Symfony\Component\HttpKernel\Debug\TraceableEventDispatcher(new \Symfony\Component\EventDispatcher\ContainerAwareEventDispatcher($this), ${($_ = isset($this->services['debug.stopwatch']) ? $this->services['debug.stopwatch'] : ($this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true))) && false ?: '_'}, ${($_ = isset($this->services['monolog.logger.event']) ? $this->services['monolog.logger.event'] : $this->getMonolog_Logger_EventService()) && false ?: '_'});

        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['csv_responder_view_listener']) ? $this->services['csv_responder_view_listener'] : ($this->services['csv_responder_view_listener'] = new \PartKeepr\ExportBundle\EventListener\CsvResponderViewListener())) && false ?: '_'};
        }, 1 => 'onKernelView'], 0);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['xlsx_responder_view_listener']) ? $this->services['xlsx_responder_view_listener'] : ($this->services['xlsx_responder_view_listener'] = new \PartKeepr\ExportBundle\EventListener\XmlExcelResponderViewListener())) && false ?: '_'};
        }, 1 => 'onKernelView'], 0);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['temporary_file_listener']) ? $this->services['temporary_file_listener'] : $this->load('getTemporaryFileListenerService.php')) && false ?: '_'};
        }, 1 => 'replaceTemporaryFile'], 100);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['data_collector.router']) ? $this->services['data_collector.router'] : ($this->services['data_collector.router'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RouterDataCollector())) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['assetic.request_listener']) ? $this->services['assetic.request_listener'] : ($this->services['assetic.request_listener'] = new \Symfony\Bundle\AsseticBundle\EventListener\RequestListener())) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 0);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.request.add_format']) ? $this->services['api_platform.listener.request.add_format'] : $this->getApiPlatform_Listener_Request_AddFormatService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 7);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.request.read']) ? $this->services['api_platform.listener.request.read'] : $this->getApiPlatform_Listener_Request_ReadService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 4);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.request.deserialize']) ? $this->services['api_platform.listener.request.deserialize'] : $this->getApiPlatform_Listener_Request_DeserializeService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 2);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.view.serialize']) ? $this->services['api_platform.listener.view.serialize'] : $this->load('getApiPlatform_Listener_View_SerializeService.php')) && false ?: '_'};
        }, 1 => 'onKernelView'], 16);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.view.respond']) ? $this->services['api_platform.listener.view.respond'] : ($this->services['api_platform.listener.view.respond'] = new \ApiPlatform\Core\EventListener\RespondListener())) && false ?: '_'};
        }, 1 => 'onKernelView'], 8);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.exception.validation']) ? $this->services['api_platform.listener.exception.validation'] : $this->load('getApiPlatform_Listener_Exception_ValidationService.php')) && false ?: '_'};
        }, 1 => 'onKernelException'], 0);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.exception']) ? $this->services['api_platform.listener.exception'] : $this->load('getApiPlatform_Listener_ExceptionService.php')) && false ?: '_'};
        }, 1 => 'onKernelException'], -96);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['api_platform.listener.view.validate']) ? $this->services['api_platform.listener.view.validate'] : $this->load('getApiPlatform_Listener_View_ValidateService.php')) && false ?: '_'};
        }, 1 => 'onKernelView'], 64);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['api_platform.swagger.listener.ui']) ? $this->services['api_platform.swagger.listener.ui'] : ($this->services['api_platform.swagger.listener.ui'] = new \ApiPlatform\Core\Bridge\Symfony\Bundle\EventListener\SwaggerUiListener())) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['api_platform.hydra.listener.response.add_link_header']) ? $this->services['api_platform.hydra.listener.response.add_link_header'] : $this->getApiPlatform_Hydra_Listener_Response_AddLinkHeaderService()) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['api_platform.doctrine.listener.view.write']) ? $this->services['api_platform.doctrine.listener.view.write'] : $this->load('getApiPlatform_Doctrine_Listener_View_WriteService.php')) && false ?: '_'};
        }, 1 => 'onKernelView'], 32);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['partkeepr.listener.request_exception']) ? $this->services['partkeepr.listener.request_exception'] : $this->load('getPartkeepr_Listener_RequestExceptionService.php')) && false ?: '_'};
        }, 1 => 'onKernelException'], 999);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['response_listener']) ? $this->services['response_listener'] : ($this->services['response_listener'] = new \Symfony\Component\HttpKernel\EventListener\ResponseListener('UTF-8'))) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['streamed_response_listener']) ? $this->services['streamed_response_listener'] : ($this->services['streamed_response_listener'] = new \Symfony\Component\HttpKernel\EventListener\StreamedResponseListener())) && false ?: '_'};
        }, 1 => 'onKernelResponse'], -1024);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['locale_listener']) ? $this->services['locale_listener'] : $this->getLocaleListenerService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 16);
        $instance->addListener('kernel.finish_request', [0 => function () {
            return ${($_ = isset($this->services['locale_listener']) ? $this->services['locale_listener'] : $this->getLocaleListenerService()) && false ?: '_'};
        }, 1 => 'onKernelFinishRequest'], 0);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['validate_request_listener']) ? $this->services['validate_request_listener'] : ($this->services['validate_request_listener'] = new \Symfony\Component\HttpKernel\EventListener\ValidateRequestListener())) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 256);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['resolve_controller_name_subscriber']) ? $this->services['resolve_controller_name_subscriber'] : $this->getResolveControllerNameSubscriberService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 24);
        $instance->addListener('console.error', [0 => function () {
            return ${($_ = isset($this->services['console.error_listener']) ? $this->services['console.error_listener'] : $this->load('getConsole_ErrorListenerService.php')) && false ?: '_'};
        }, 1 => 'onConsoleError'], -128);
        $instance->addListener('console.terminate', [0 => function () {
            return ${($_ = isset($this->services['console.error_listener']) ? $this->services['console.error_listener'] : $this->load('getConsole_ErrorListenerService.php')) && false ?: '_'};
        }, 1 => 'onConsoleTerminate'], -128);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['session_listener']) ? $this->services['session_listener'] : $this->getSessionListenerService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 128);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['session_listener']) ? $this->services['session_listener'] : $this->getSessionListenerService()) && false ?: '_'};
        }, 1 => 'onKernelResponse'], -1000);
        $instance->addListener('kernel.finish_request', [0 => function () {
            return ${($_ = isset($this->services['session_listener']) ? $this->services['session_listener'] : $this->getSessionListenerService()) && false ?: '_'};
        }, 1 => 'onFinishRequest'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['session.save_listener']) ? $this->services['session.save_listener'] : ($this->services['session.save_listener'] = new \Symfony\Component\HttpKernel\EventListener\SaveSessionListener())) && false ?: '_'};
        }, 1 => 'onKernelResponse'], -1000);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['fragment.listener']) ? $this->services['fragment.listener'] : $this->getFragment_ListenerService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 48);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['translator_listener']) ? $this->services['translator_listener'] : $this->getTranslatorListenerService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 10);
        $instance->addListener('kernel.finish_request', [0 => function () {
            return ${($_ = isset($this->services['translator_listener']) ? $this->services['translator_listener'] : $this->getTranslatorListenerService()) && false ?: '_'};
        }, 1 => 'onKernelFinishRequest'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['profiler_listener']) ? $this->services['profiler_listener'] : $this->getProfilerListenerService()) && false ?: '_'};
        }, 1 => 'onKernelResponse'], -100);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['profiler_listener']) ? $this->services['profiler_listener'] : $this->getProfilerListenerService()) && false ?: '_'};
        }, 1 => 'onKernelException'], 0);
        $instance->addListener('kernel.terminate', [0 => function () {
            return ${($_ = isset($this->services['profiler_listener']) ? $this->services['profiler_listener'] : $this->getProfilerListenerService()) && false ?: '_'};
        }, 1 => 'onKernelTerminate'], -1024);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['data_collector.request']) ? $this->services['data_collector.request'] : ($this->services['data_collector.request'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RequestDataCollector())) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['data_collector.request']) ? $this->services['data_collector.request'] : ($this->services['data_collector.request'] = new \Symfony\Bundle\FrameworkBundle\DataCollector\RequestDataCollector())) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['debug.debug_handlers_listener']) ? $this->services['debug.debug_handlers_listener'] : $this->getDebug_DebugHandlersListenerService()) && false ?: '_'};
        }, 1 => 'configure'], 2048);
        $instance->addListener('console.command', [0 => function () {
            return ${($_ = isset($this->services['debug.debug_handlers_listener']) ? $this->services['debug.debug_handlers_listener'] : $this->getDebug_DebugHandlersListenerService()) && false ?: '_'};
        }, 1 => 'configure'], 2048);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['router_listener']) ? $this->services['router_listener'] : $this->getRouterListenerService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 32);
        $instance->addListener('kernel.finish_request', [0 => function () {
            return ${($_ = isset($this->services['router_listener']) ? $this->services['router_listener'] : $this->getRouterListenerService()) && false ?: '_'};
        }, 1 => 'onKernelFinishRequest'], 0);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['router_listener']) ? $this->services['router_listener'] : $this->getRouterListenerService()) && false ?: '_'};
        }, 1 => 'onKernelException'], -64);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['security.rememberme.response_listener']) ? $this->services['security.rememberme.response_listener'] : ($this->services['security.rememberme.response_listener'] = new \Symfony\Component\Security\Http\RememberMe\ResponseListener())) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['security.firewall']) ? $this->services['security.firewall'] : $this->getSecurity_FirewallService()) && false ?: '_'};
        }, 1 => 'onKernelRequest'], 8);
        $instance->addListener('kernel.finish_request', [0 => function () {
            return ${($_ = isset($this->services['security.firewall']) ? $this->services['security.firewall'] : $this->getSecurity_FirewallService()) && false ?: '_'};
        }, 1 => 'onKernelFinishRequest'], 0);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['twig.exception_listener']) ? $this->services['twig.exception_listener'] : $this->load('getTwig_ExceptionListenerService.php')) && false ?: '_'};
        }, 1 => 'onKernelException'], -128);
        $instance->addListener('console.command', [0 => function () {
            return ${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'};
        }, 1 => 'onCommand'], 255);
        $instance->addListener('console.terminate', [0 => function () {
            return ${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'};
        }, 1 => 'onTerminate'], -255);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['swiftmailer.email_sender.listener']) ? $this->services['swiftmailer.email_sender.listener'] : $this->load('getSwiftmailer_EmailSender_ListenerService.php')) && false ?: '_'};
        }, 1 => 'onException'], 0);
        $instance->addListener('kernel.terminate', [0 => function () {
            return ${($_ = isset($this->services['swiftmailer.email_sender.listener']) ? $this->services['swiftmailer.email_sender.listener'] : $this->load('getSwiftmailer_EmailSender_ListenerService.php')) && false ?: '_'};
        }, 1 => 'onTerminate'], 0);
        $instance->addListener('console.error', [0 => function () {
            return ${($_ = isset($this->services['swiftmailer.email_sender.listener']) ? $this->services['swiftmailer.email_sender.listener'] : $this->load('getSwiftmailer_EmailSender_ListenerService.php')) && false ?: '_'};
        }, 1 => 'onException'], 0);
        $instance->addListener('console.terminate', [0 => function () {
            return ${($_ = isset($this->services['swiftmailer.email_sender.listener']) ? $this->services['swiftmailer.email_sender.listener'] : $this->load('getSwiftmailer_EmailSender_ListenerService.php')) && false ?: '_'};
        }, 1 => 'onTerminate'], 0);
        $instance->addListener('fos_user.security.implicit_login', [0 => function () {
            return ${($_ = isset($this->services['fos_user.security.interactive_login_listener']) ? $this->services['fos_user.security.interactive_login_listener'] : $this->load('getFosUser_Security_InteractiveLoginListenerService.php')) && false ?: '_'};
        }, 1 => 'onImplicitLogin'], 0);
        $instance->addListener('security.interactive_login', [0 => function () {
            return ${($_ = isset($this->services['fos_user.security.interactive_login_listener']) ? $this->services['fos_user.security.interactive_login_listener'] : $this->load('getFosUser_Security_InteractiveLoginListenerService.php')) && false ?: '_'};
        }, 1 => 'onSecurityInteractiveLogin'], 0);
        $instance->addListener('fos_user.registration.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.authentication']) ? $this->services['fos_user.listener.authentication'] : $this->load('getFosUser_Listener_AuthenticationService.php')) && false ?: '_'};
        }, 1 => 'authenticate'], 0);
        $instance->addListener('fos_user.registration.confirmed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.authentication']) ? $this->services['fos_user.listener.authentication'] : $this->load('getFosUser_Listener_AuthenticationService.php')) && false ?: '_'};
        }, 1 => 'authenticate'], 0);
        $instance->addListener('fos_user.resetting.reset.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.authentication']) ? $this->services['fos_user.listener.authentication'] : $this->load('getFosUser_Listener_AuthenticationService.php')) && false ?: '_'};
        }, 1 => 'authenticate'], 0);
        $instance->addListener('fos_user.change_password.edit.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.group.create.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.group.delete.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.group.edit.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.profile.edit.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.registration.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.resetting.reset.completed', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.flash']) ? $this->services['fos_user.listener.flash'] : $this->load('getFosUser_Listener_FlashService.php')) && false ?: '_'};
        }, 1 => 'addSuccessFlash'], 0);
        $instance->addListener('fos_user.resetting.reset.initialize', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.resetting']) ? $this->services['fos_user.listener.resetting'] : $this->load('getFosUser_Listener_ResettingService.php')) && false ?: '_'};
        }, 1 => 'onResettingResetInitialize'], 0);
        $instance->addListener('fos_user.resetting.reset.success', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.resetting']) ? $this->services['fos_user.listener.resetting'] : $this->load('getFosUser_Listener_ResettingService.php')) && false ?: '_'};
        }, 1 => 'onResettingResetSuccess'], 0);
        $instance->addListener('fos_user.resetting.reset.request', [0 => function () {
            return ${($_ = isset($this->services['fos_user.listener.resetting']) ? $this->services['fos_user.listener.resetting'] : $this->load('getFosUser_Listener_ResettingService.php')) && false ?: '_'};
        }, 1 => 'onResettingResetRequest'], 0);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.controller.listener']) ? $this->services['sensio_framework_extra.controller.listener'] : $this->getSensioFrameworkExtra_Controller_ListenerService()) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.converter.listener']) ? $this->services['sensio_framework_extra.converter.listener'] : $this->getSensioFrameworkExtra_Converter_ListenerService()) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.view.listener']) ? $this->services['sensio_framework_extra.view.listener'] : ($this->services['sensio_framework_extra.view.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\TemplateListener($this))) && false ?: '_'};
        }, 1 => 'onKernelController'], -128);
        $instance->addListener('kernel.view', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.view.listener']) ? $this->services['sensio_framework_extra.view.listener'] : ($this->services['sensio_framework_extra.view.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\TemplateListener($this))) && false ?: '_'};
        }, 1 => 'onKernelView'], 0);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.cache.listener']) ? $this->services['sensio_framework_extra.cache.listener'] : ($this->services['sensio_framework_extra.cache.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\HttpCacheListener())) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.response', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.cache.listener']) ? $this->services['sensio_framework_extra.cache.listener'] : ($this->services['sensio_framework_extra.cache.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\HttpCacheListener())) && false ?: '_'};
        }, 1 => 'onKernelResponse'], 0);
        $instance->addListener('kernel.controller', [0 => function () {
            return ${($_ = isset($this->services['sensio_framework_extra.security.listener']) ? $this->services['sensio_framework_extra.security.listener'] : $this->getSensioFrameworkExtra_Security_ListenerService()) && false ?: '_'};
        }, 1 => 'onKernelController'], 0);
        $instance->addListener('kernel.exception', [0 => function () {
            return ${($_ = isset($this->services['liip_functional_test.exception_listener']) ? $this->services['liip_functional_test.exception_listener'] : ($this->services['liip_functional_test.exception_listener'] = new \Liip\FunctionalTestBundle\EventListener\ExceptionListener())) && false ?: '_'};
        }, 1 => 'setException'], 99999);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['liip_functional_test.exception_listener']) ? $this->services['liip_functional_test.exception_listener'] : ($this->services['liip_functional_test.exception_listener'] = new \Liip\FunctionalTestBundle\EventListener\ExceptionListener())) && false ?: '_'};
        }, 1 => 'clearLastException'], 99999);
        $instance->addListener('kernel.request', [0 => function () {
            return ${($_ = isset($this->services['liip_functional_test.validator']) ? $this->services['liip_functional_test.validator'] : $this->getLiipFunctionalTest_ValidatorService()) && false ?: '_'};
        }, 1 => 'clearLastErrors'], 99999);

        return $instance;
    }

    /**
     * Gets the private 'debug.file_link_formatter' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Debug\FileLinkFormatter
     */
    protected function getDebug_FileLinkFormatterService()
    {
        return $this->services['debug.file_link_formatter'] = new \Symfony\Component\HttpKernel\Debug\FileLinkFormatter(NULL, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, $this->targetDirs[4], function () {
            return ${($_ = isset($this->services['debug.file_link_formatter.url_format']) ? $this->services['debug.file_link_formatter.url_format'] : $this->load('getDebug_FileLinkFormatter_UrlFormatService.php')) && false ?: '_'};
        });
    }

    /**
     * Gets the private 'debug.log_processor' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Processor\DebugProcessor
     */
    protected function getDebug_LogProcessorService()
    {
        return $this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor();
    }

    /**
     * Gets the private 'debug.security.access.decision_manager' shared service.
     *
     * @return \Symfony\Component\Security\Core\Authorization\TraceableAccessDecisionManager
     */
    protected function getDebug_Security_Access_DecisionManagerService()
    {
        return $this->services['debug.security.access.decision_manager'] = new \Symfony\Component\Security\Core\Authorization\TraceableAccessDecisionManager(new \Symfony\Component\Security\Core\Authorization\AccessDecisionManager(new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['security.access.authenticated_voter']) ? $this->services['security.access.authenticated_voter'] : $this->load('getSecurity_Access_AuthenticatedVoterService.php')) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['security.access.role_hierarchy_voter']) ? $this->services['security.access.role_hierarchy_voter'] : $this->load('getSecurity_Access_RoleHierarchyVoterService.php')) && false ?: '_'};
            yield 2 => ${($_ = isset($this->services['security.access.expression_voter']) ? $this->services['security.access.expression_voter'] : $this->load('getSecurity_Access_ExpressionVoterService.php')) && false ?: '_'};
        }, 3), 'affirmative', false, true));
    }

    /**
     * Gets the private 'debug.stopwatch' shared service.
     *
     * @return \Symfony\Component\Stopwatch\Stopwatch
     */
    protected function getDebug_StopwatchService()
    {
        return $this->services['debug.stopwatch'] = new \Symfony\Component\Stopwatch\Stopwatch(true);
    }

    /**
     * Gets the private 'debug.validator' shared service.
     *
     * @return \Symfony\Component\Validator\Validator\TraceableValidator
     */
    protected function getDebug_ValidatorService()
    {
        return $this->services['debug.validator'] = new \Symfony\Component\Validator\Validator\TraceableValidator(${($_ = isset($this->services['validator.builder']) ? $this->services['validator.builder'] : $this->getValidator_BuilderService()) && false ?: '_'}->getValidator());
    }

    /**
     * Gets the private 'doctrine.dbal.logger.profiling.default' shared service.
     *
     * @return \Doctrine\DBAL\Logging\DebugStack
     */
    protected function getDoctrine_Dbal_Logger_Profiling_DefaultService()
    {
        return $this->services['doctrine.dbal.logger.profiling.default'] = new \Doctrine\DBAL\Logging\DebugStack();
    }

    /**
     * Gets the private 'doctrine.orm.validator_initializer' shared service.
     *
     * @return \Symfony\Bridge\Doctrine\Validator\DoctrineInitializer
     */
    protected function getDoctrine_Orm_ValidatorInitializerService()
    {
        return $this->services['doctrine.orm.validator_initializer'] = new \Symfony\Bridge\Doctrine\Validator\DoctrineInitializer(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'});
    }

    /**
     * Gets the private 'file_locator' shared service.
     *
     * @return \Symfony\Component\HttpKernel\Config\FileLocator
     */
    protected function getFileLocatorService()
    {
        return $this->services['file_locator'] = new \Symfony\Component\HttpKernel\Config\FileLocator(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}, ($this->targetDirs[3].'/Resources'), [0 => $this->targetDirs[3]]);
    }

    /**
     * Gets the private 'fos_user.util.canonical_fields_updater' shared service.
     *
     * @return \FOS\UserBundle\Util\CanonicalFieldsUpdater
     */
    protected function getFosUser_Util_CanonicalFieldsUpdaterService()
    {
        $a = ${($_ = isset($this->services['fos_user.util.email_canonicalizer']) ? $this->services['fos_user.util.email_canonicalizer'] : ($this->services['fos_user.util.email_canonicalizer'] = new \FOS\UserBundle\Util\Canonicalizer())) && false ?: '_'};

        return $this->services['fos_user.util.canonical_fields_updater'] = new \FOS\UserBundle\Util\CanonicalFieldsUpdater($a, $a);
    }

    /**
     * Gets the private 'fos_user.util.email_canonicalizer' shared service.
     *
     * @return \FOS\UserBundle\Util\Canonicalizer
     */
    protected function getFosUser_Util_EmailCanonicalizerService()
    {
        return $this->services['fos_user.util.email_canonicalizer'] = new \FOS\UserBundle\Util\Canonicalizer();
    }

    /**
     * Gets the private 'fragment.listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\FragmentListener
     */
    protected function getFragment_ListenerService()
    {
        return $this->services['fragment.listener'] = new \Symfony\Component\HttpKernel\EventListener\FragmentListener(${($_ = isset($this->services['uri_signer']) ? $this->services['uri_signer'] : ($this->services['uri_signer'] = new \Symfony\Component\HttpKernel\UriSigner('COAAFJGGLPHPDGGNCNILHFGECFMMACKC'))) && false ?: '_'}, '/_fragment');
    }

    /**
     * Gets the private 'locale_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\LocaleListener
     */
    protected function getLocaleListenerService()
    {
        return $this->services['locale_listener'] = new \Symfony\Component\HttpKernel\EventListener\LocaleListener(${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, 'en', ${($_ = isset($this->services['router']) ? $this->services['router'] : $this->getRouterService()) && false ?: '_'});
    }

    /**
     * Gets the private 'monolog.handler.console' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Handler\ConsoleHandler
     */
    protected function getMonolog_Handler_ConsoleService()
    {
        $this->services['monolog.handler.console'] = $instance = new \Symfony\Bridge\Monolog\Handler\ConsoleHandler(NULL, false, []);

        $instance->pushProcessor(${($_ = isset($this->services['monolog.processor.psr_log_message']) ? $this->services['monolog.processor.psr_log_message'] : ($this->services['monolog.processor.psr_log_message'] = new \Monolog\Processor\PsrLogMessageProcessor())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.handler.firephp' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Handler\FirePHPHandler
     */
    protected function getMonolog_Handler_FirephpService()
    {
        $this->services['monolog.handler.firephp'] = $instance = new \Symfony\Bridge\Monolog\Handler\FirePHPHandler(200, true);

        $instance->pushProcessor(${($_ = isset($this->services['monolog.processor.psr_log_message']) ? $this->services['monolog.processor.psr_log_message'] : ($this->services['monolog.processor.psr_log_message'] = new \Monolog\Processor\PsrLogMessageProcessor())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.handler.main' shared service.
     *
     * @return \Monolog\Handler\StreamHandler
     */
    protected function getMonolog_Handler_MainService()
    {
        $this->services['monolog.handler.main'] = $instance = new \Monolog\Handler\StreamHandler(($this->targetDirs[3].'/logs/dev.log'), 100, true, NULL);

        $instance->pushProcessor(${($_ = isset($this->services['monolog.processor.psr_log_message']) ? $this->services['monolog.processor.psr_log_message'] : ($this->services['monolog.processor.psr_log_message'] = new \Monolog\Processor\PsrLogMessageProcessor())) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.cache' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_CacheService()
    {
        $this->services['monolog.logger.cache'] = $instance = new \Symfony\Bridge\Monolog\Logger('cache');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.event' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_EventService()
    {
        $this->services['monolog.logger.event'] = $instance = new \Symfony\Bridge\Monolog\Logger('event');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.php' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_PhpService()
    {
        $this->services['monolog.logger.php'] = $instance = new \Symfony\Bridge\Monolog\Logger('php');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.profiler' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_ProfilerService()
    {
        $this->services['monolog.logger.profiler'] = $instance = new \Symfony\Bridge\Monolog\Logger('profiler');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.request' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_RequestService()
    {
        $this->services['monolog.logger.request'] = $instance = new \Symfony\Bridge\Monolog\Logger('request');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.logger.translation' shared service.
     *
     * @return \Symfony\Bridge\Monolog\Logger
     */
    protected function getMonolog_Logger_TranslationService()
    {
        $this->services['monolog.logger.translation'] = $instance = new \Symfony\Bridge\Monolog\Logger('translation');

        $instance->pushProcessor(${($_ = isset($this->services['debug.log_processor']) ? $this->services['debug.log_processor'] : ($this->services['debug.log_processor'] = new \Symfony\Bridge\Monolog\Processor\DebugProcessor())) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.firephp']) ? $this->services['monolog.handler.firephp'] : $this->getMonolog_Handler_FirephpService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.console']) ? $this->services['monolog.handler.console'] : $this->getMonolog_Handler_ConsoleService()) && false ?: '_'});
        $instance->pushHandler(${($_ = isset($this->services['monolog.handler.main']) ? $this->services['monolog.handler.main'] : $this->getMonolog_Handler_MainService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'monolog.processor.psr_log_message' shared service.
     *
     * @return \Monolog\Processor\PsrLogMessageProcessor
     */
    protected function getMonolog_Processor_PsrLogMessageService()
    {
        return $this->services['monolog.processor.psr_log_message'] = new \Monolog\Processor\PsrLogMessageProcessor();
    }

    /**
     * Gets the private 'profiler_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\ProfilerListener
     */
    protected function getProfilerListenerService()
    {
        return $this->services['profiler_listener'] = new \Symfony\Component\HttpKernel\EventListener\ProfilerListener(${($_ = isset($this->services['profiler']) ? $this->services['profiler'] : $this->getProfilerService()) && false ?: '_'}, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, NULL, false, false);
    }

    /**
     * Gets the private 'property_accessor' shared service.
     *
     * @return \Symfony\Component\PropertyAccess\PropertyAccessor
     */
    protected function getPropertyAccessorService()
    {
        return $this->services['property_accessor'] = new \Symfony\Component\PropertyAccess\PropertyAccessor(false, false, new \Symfony\Component\Cache\Adapter\ArrayAdapter(0, false));
    }

    /**
     * Gets the private 'property_info' shared service.
     *
     * @return \Symfony\Component\PropertyInfo\PropertyInfoExtractor
     */
    protected function getPropertyInfoService()
    {
        return $this->services['property_info'] = new \Symfony\Component\PropertyInfo\PropertyInfoExtractor(new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['property_info.serializer_extractor']) ? $this->services['property_info.serializer_extractor'] : $this->load('getPropertyInfo_SerializerExtractorService.php')) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['property_info.reflection_extractor']) ? $this->services['property_info.reflection_extractor'] : ($this->services['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor())) && false ?: '_'};
            yield 2 => ${($_ = isset($this->services['doctrine.orm.default_entity_manager.property_info_extractor']) ? $this->services['doctrine.orm.default_entity_manager.property_info_extractor'] : $this->load('getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService.php')) && false ?: '_'};
        }, 3), new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['doctrine.orm.default_entity_manager.property_info_extractor']) ? $this->services['doctrine.orm.default_entity_manager.property_info_extractor'] : $this->load('getDoctrine_Orm_DefaultEntityManager_PropertyInfoExtractorService.php')) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['property_info.php_doc_extractor']) ? $this->services['property_info.php_doc_extractor'] : ($this->services['property_info.php_doc_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor())) && false ?: '_'};
            yield 2 => ${($_ = isset($this->services['property_info.reflection_extractor']) ? $this->services['property_info.reflection_extractor'] : ($this->services['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor())) && false ?: '_'};
        }, 3), new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['property_info.php_doc_extractor']) ? $this->services['property_info.php_doc_extractor'] : ($this->services['property_info.php_doc_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\PhpDocExtractor())) && false ?: '_'};
        }, 1), new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['property_info.reflection_extractor']) ? $this->services['property_info.reflection_extractor'] : ($this->services['property_info.reflection_extractor'] = new \Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor())) && false ?: '_'};
        }, 1));
    }

    /**
     * Gets the private 'resolve_controller_name_subscriber' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\EventListener\ResolveControllerNameSubscriber
     */
    protected function getResolveControllerNameSubscriberService()
    {
        return $this->services['resolve_controller_name_subscriber'] = new \Symfony\Bundle\FrameworkBundle\EventListener\ResolveControllerNameSubscriber(${($_ = isset($this->services['controller_name_converter']) ? $this->services['controller_name_converter'] : ($this->services['controller_name_converter'] = new \Symfony\Bundle\FrameworkBundle\Controller\ControllerNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}))) && false ?: '_'});
    }

    /**
     * Gets the private 'response_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\ResponseListener
     */
    protected function getResponseListenerService()
    {
        return $this->services['response_listener'] = new \Symfony\Component\HttpKernel\EventListener\ResponseListener('UTF-8');
    }

    /**
     * Gets the private 'router.request_context' shared service.
     *
     * @return \Symfony\Component\Routing\RequestContext
     */
    protected function getRouter_RequestContextService()
    {
        return $this->services['router.request_context'] = new \Symfony\Component\Routing\RequestContext('', 'GET', 'localhost', 'http', 80, 443);
    }

    /**
     * Gets the private 'router_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\RouterListener
     */
    protected function getRouterListenerService()
    {
        return $this->services['router_listener'] = new \Symfony\Component\HttpKernel\EventListener\RouterListener(${($_ = isset($this->services['router']) ? $this->services['router'] : $this->getRouterService()) && false ?: '_'}, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, ${($_ = isset($this->services['router.request_context']) ? $this->services['router.request_context'] : $this->getRouter_RequestContextService()) && false ?: '_'}, ${($_ = isset($this->services['monolog.logger.request']) ? $this->services['monolog.logger.request'] : $this->getMonolog_Logger_RequestService()) && false ?: '_'}, $this->targetDirs[4], true);
    }

    /**
     * Gets the private 'security.authentication.manager' shared service.
     *
     * @return \Symfony\Component\Security\Core\Authentication\AuthenticationProviderManager
     */
    protected function getSecurity_Authentication_ManagerService()
    {
        $this->services['security.authentication.manager'] = $instance = new \Symfony\Component\Security\Core\Authentication\AuthenticationProviderManager(new RewindableGenerator(function () {
            yield 0 => ${($_ = isset($this->services['security.authentication.provider.pre_authenticated.main']) ? $this->services['security.authentication.provider.pre_authenticated.main'] : $this->load('getSecurity_Authentication_Provider_PreAuthenticated_MainService.php')) && false ?: '_'};
            yield 1 => ${($_ = isset($this->services['security.authentication.provider.dao.main']) ? $this->services['security.authentication.provider.dao.main'] : $this->load('getSecurity_Authentication_Provider_Dao_MainService.php')) && false ?: '_'};
        }, 2), true);

        $instance->setEventDispatcher(${($_ = isset($this->services['debug.event_dispatcher']) ? $this->services['debug.event_dispatcher'] : $this->getDebug_EventDispatcherService()) && false ?: '_'});

        return $instance;
    }

    /**
     * Gets the private 'security.authentication.trust_resolver' shared service.
     *
     * @return \Symfony\Component\Security\Core\Authentication\AuthenticationTrustResolver
     */
    protected function getSecurity_Authentication_TrustResolverService()
    {
        return $this->services['security.authentication.trust_resolver'] = new \Symfony\Component\Security\Core\Authentication\AuthenticationTrustResolver('Symfony\\Component\\Security\\Core\\Authentication\\Token\\AnonymousToken', 'Symfony\\Component\\Security\\Core\\Authentication\\Token\\RememberMeToken');
    }

    /**
     * Gets the private 'security.firewall' shared service.
     *
     * @return \Symfony\Bundle\SecurityBundle\Debug\TraceableFirewallListener
     */
    protected function getSecurity_FirewallService()
    {
        return $this->services['security.firewall'] = new \Symfony\Bundle\SecurityBundle\Debug\TraceableFirewallListener(${($_ = isset($this->services['security.firewall.map']) ? $this->services['security.firewall.map'] : $this->getSecurity_Firewall_MapService()) && false ?: '_'}, ${($_ = isset($this->services['debug.event_dispatcher']) ? $this->services['debug.event_dispatcher'] : $this->getDebug_EventDispatcherService()) && false ?: '_'}, ${($_ = isset($this->services['security.logout_url_generator']) ? $this->services['security.logout_url_generator'] : $this->getSecurity_LogoutUrlGeneratorService()) && false ?: '_'});
    }

    /**
     * Gets the private 'security.firewall.map' shared service.
     *
     * @return \Symfony\Bundle\SecurityBundle\Security\FirewallMap
     */
    protected function getSecurity_Firewall_MapService()
    {
        return $this->services['security.firewall.map'] = new \Symfony\Bundle\SecurityBundle\Security\FirewallMap(new \Symfony\Component\DependencyInjection\ServiceLocator(['security.firewall.map.context.login' => function () {
            return ${($_ = isset($this->services['security.firewall.map.context.login']) ? $this->services['security.firewall.map.context.login'] : $this->load('getSecurity_Firewall_Map_Context_LoginService.php')) && false ?: '_'};
        }, 'security.firewall.map.context.main' => function () {
            return ${($_ = isset($this->services['security.firewall.map.context.main']) ? $this->services['security.firewall.map.context.main'] : $this->load('getSecurity_Firewall_Map_Context_MainService.php')) && false ?: '_'};
        }]), new RewindableGenerator(function () {
            yield 'security.firewall.map.context.login' => ${($_ = isset($this->services['security.request_matcher.d6t5ze.']) ? $this->services['security.request_matcher.d6t5ze.'] : ($this->services['security.request_matcher.d6t5ze.'] = new \Symfony\Component\HttpFoundation\RequestMatcher('^/api/users/getSalt'))) && false ?: '_'};
            yield 'security.firewall.map.context.main' => ${($_ = isset($this->services['security.request_matcher.iu9lt00']) ? $this->services['security.request_matcher.iu9lt00'] : ($this->services['security.request_matcher.iu9lt00'] = new \Symfony\Component\HttpFoundation\RequestMatcher('^/api/.*'))) && false ?: '_'};
        }, 2));
    }

    /**
     * Gets the private 'security.logout_url_generator' shared service.
     *
     * @return \Symfony\Component\Security\Http\Logout\LogoutUrlGenerator
     */
    protected function getSecurity_LogoutUrlGeneratorService()
    {
        return $this->services['security.logout_url_generator'] = new \Symfony\Component\Security\Http\Logout\LogoutUrlGenerator(${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, ${($_ = isset($this->services['router']) ? $this->services['router'] : $this->getRouterService()) && false ?: '_'}, ${($_ = isset($this->services['security.token_storage']) ? $this->services['security.token_storage'] : ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())) && false ?: '_'});
    }

    /**
     * Gets the private 'security.rememberme.response_listener' shared service.
     *
     * @return \Symfony\Component\Security\Http\RememberMe\ResponseListener
     */
    protected function getSecurity_Rememberme_ResponseListenerService()
    {
        return $this->services['security.rememberme.response_listener'] = new \Symfony\Component\Security\Http\RememberMe\ResponseListener();
    }

    /**
     * Gets the private 'security.role_hierarchy' shared service.
     *
     * @return \Symfony\Component\Security\Core\Role\RoleHierarchy
     */
    protected function getSecurity_RoleHierarchyService()
    {
        return $this->services['security.role_hierarchy'] = new \Symfony\Component\Security\Core\Role\RoleHierarchy($this->parameters['security.role_hierarchy.roles']);
    }

    /**
     * Gets the private 'sensio_framework_extra.cache.listener' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\EventListener\HttpCacheListener
     */
    protected function getSensioFrameworkExtra_Cache_ListenerService()
    {
        return $this->services['sensio_framework_extra.cache.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\HttpCacheListener();
    }

    /**
     * Gets the private 'sensio_framework_extra.controller.listener' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\EventListener\ControllerListener
     */
    protected function getSensioFrameworkExtra_Controller_ListenerService()
    {
        return $this->services['sensio_framework_extra.controller.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\ControllerListener(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'});
    }

    /**
     * Gets the private 'sensio_framework_extra.converter.datetime' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\DateTimeParamConverter
     */
    protected function getSensioFrameworkExtra_Converter_DatetimeService()
    {
        return $this->services['sensio_framework_extra.converter.datetime'] = new \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\DateTimeParamConverter();
    }

    /**
     * Gets the private 'sensio_framework_extra.converter.doctrine.orm' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\DoctrineParamConverter
     */
    protected function getSensioFrameworkExtra_Converter_Doctrine_OrmService()
    {
        return $this->services['sensio_framework_extra.converter.doctrine.orm'] = new \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\DoctrineParamConverter(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'});
    }

    /**
     * Gets the private 'sensio_framework_extra.converter.listener' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\EventListener\ParamConverterListener
     */
    protected function getSensioFrameworkExtra_Converter_ListenerService()
    {
        return $this->services['sensio_framework_extra.converter.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\ParamConverterListener(${($_ = isset($this->services['sensio_framework_extra.converter.manager']) ? $this->services['sensio_framework_extra.converter.manager'] : $this->getSensioFrameworkExtra_Converter_ManagerService()) && false ?: '_'}, true);
    }

    /**
     * Gets the private 'sensio_framework_extra.converter.manager' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterManager
     */
    protected function getSensioFrameworkExtra_Converter_ManagerService()
    {
        $this->services['sensio_framework_extra.converter.manager'] = $instance = new \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\ParamConverterManager();

        $instance->add(${($_ = isset($this->services['sensio_framework_extra.converter.doctrine.orm']) ? $this->services['sensio_framework_extra.converter.doctrine.orm'] : $this->getSensioFrameworkExtra_Converter_Doctrine_OrmService()) && false ?: '_'}, 0, 'doctrine.orm');
        $instance->add(${($_ = isset($this->services['sensio_framework_extra.converter.datetime']) ? $this->services['sensio_framework_extra.converter.datetime'] : ($this->services['sensio_framework_extra.converter.datetime'] = new \Sensio\Bundle\FrameworkExtraBundle\Request\ParamConverter\DateTimeParamConverter())) && false ?: '_'}, 0, 'datetime');

        return $instance;
    }

    /**
     * Gets the private 'sensio_framework_extra.security.listener' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\EventListener\SecurityListener
     */
    protected function getSensioFrameworkExtra_Security_ListenerService()
    {
        return $this->services['sensio_framework_extra.security.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\SecurityListener(NULL, new \Sensio\Bundle\FrameworkExtraBundle\Security\ExpressionLanguage(), ${($_ = isset($this->services['security.authentication.trust_resolver']) ? $this->services['security.authentication.trust_resolver'] : ($this->services['security.authentication.trust_resolver'] = new \Symfony\Component\Security\Core\Authentication\AuthenticationTrustResolver('Symfony\\Component\\Security\\Core\\Authentication\\Token\\AnonymousToken', 'Symfony\\Component\\Security\\Core\\Authentication\\Token\\RememberMeToken'))) && false ?: '_'}, ${($_ = isset($this->services['security.role_hierarchy']) ? $this->services['security.role_hierarchy'] : $this->getSecurity_RoleHierarchyService()) && false ?: '_'}, ${($_ = isset($this->services['security.token_storage']) ? $this->services['security.token_storage'] : ($this->services['security.token_storage'] = new \Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage())) && false ?: '_'}, ${($_ = isset($this->services['security.authorization_checker']) ? $this->services['security.authorization_checker'] : $this->getSecurity_AuthorizationCheckerService()) && false ?: '_'});
    }

    /**
     * Gets the private 'sensio_framework_extra.view.listener' shared service.
     *
     * @return \Sensio\Bundle\FrameworkExtraBundle\EventListener\TemplateListener
     */
    protected function getSensioFrameworkExtra_View_ListenerService()
    {
        return $this->services['sensio_framework_extra.view.listener'] = new \Sensio\Bundle\FrameworkExtraBundle\EventListener\TemplateListener($this);
    }

    /**
     * Gets the private 'serializer.mapping.class_metadata_factory' shared service.
     *
     * @return \Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory
     */
    protected function getSerializer_Mapping_ClassMetadataFactoryService()
    {
        return $this->services['serializer.mapping.class_metadata_factory'] = new \Symfony\Component\Serializer\Mapping\Factory\ClassMetadataFactory(new \Symfony\Component\Serializer\Mapping\Loader\LoaderChain([0 => new \Symfony\Component\Serializer\Mapping\Loader\AnnotationLoader(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'})]), NULL);
    }

    /**
     * Gets the private 'serializer.normalizer.custom' shared service.
     *
     * @return \Symfony\Component\Serializer\Normalizer\ObjectNormalizer
     */
    protected function getSerializer_Normalizer_CustomService()
    {
        $this->services['serializer.normalizer.custom'] = $instance = new \Symfony\Component\Serializer\Normalizer\ObjectNormalizer(${($_ = isset($this->services['serializer.mapping.class_metadata_factory']) ? $this->services['serializer.mapping.class_metadata_factory'] : $this->getSerializer_Mapping_ClassMetadataFactoryService()) && false ?: '_'}, NULL, ${($_ = isset($this->services['property_accessor']) ? $this->services['property_accessor'] : $this->getPropertyAccessorService()) && false ?: '_'});

        $instance->setCircularReferenceLimit([0 => 5]);

        return $instance;
    }

    /**
     * Gets the private 'session.save_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\SaveSessionListener
     */
    protected function getSession_SaveListenerService()
    {
        return $this->services['session.save_listener'] = new \Symfony\Component\HttpKernel\EventListener\SaveSessionListener();
    }

    /**
     * Gets the private 'session_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\SessionListener
     */
    protected function getSessionListenerService()
    {
        return $this->services['session_listener'] = new \Symfony\Component\HttpKernel\EventListener\SessionListener(new \Symfony\Component\DependencyInjection\ServiceLocator(['session' => function () {
            return ${($_ = isset($this->services['session']) ? $this->services['session'] : $this->load('getSessionService.php')) && false ?: '_'};
        }]));
    }

    /**
     * Gets the private 'streamed_response_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\StreamedResponseListener
     */
    protected function getStreamedResponseListenerService()
    {
        return $this->services['streamed_response_listener'] = new \Symfony\Component\HttpKernel\EventListener\StreamedResponseListener();
    }

    /**
     * Gets the private 'templating.locator' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Templating\Loader\TemplateLocator
     */
    protected function getTemplating_LocatorService()
    {
        return $this->services['templating.locator'] = new \Symfony\Bundle\FrameworkBundle\Templating\Loader\TemplateLocator(${($_ = isset($this->services['file_locator']) ? $this->services['file_locator'] : ($this->services['file_locator'] = new \Symfony\Component\HttpKernel\Config\FileLocator(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}, ($this->targetDirs[3].'/Resources'), [0 => $this->targetDirs[3]]))) && false ?: '_'}, $this->targetDirs[0]);
    }

    /**
     * Gets the private 'templating.name_parser' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Templating\TemplateNameParser
     */
    protected function getTemplating_NameParserService()
    {
        return $this->services['templating.name_parser'] = new \Symfony\Bundle\FrameworkBundle\Templating\TemplateNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'});
    }

    /**
     * Gets the private 'translator.default' shared service.
     *
     * @return \Symfony\Bundle\FrameworkBundle\Translation\Translator
     */
    protected function getTranslator_DefaultService()
    {
        $this->services['translator.default'] = $instance = new \Symfony\Bundle\FrameworkBundle\Translation\Translator(new \Symfony\Component\DependencyInjection\ServiceLocator(['translation.loader.csv' => function () {
            return ${($_ = isset($this->services['translation.loader.csv']) ? $this->services['translation.loader.csv'] : ($this->services['translation.loader.csv'] = new \Symfony\Component\Translation\Loader\CsvFileLoader())) && false ?: '_'};
        }, 'translation.loader.dat' => function () {
            return ${($_ = isset($this->services['translation.loader.dat']) ? $this->services['translation.loader.dat'] : ($this->services['translation.loader.dat'] = new \Symfony\Component\Translation\Loader\IcuDatFileLoader())) && false ?: '_'};
        }, 'translation.loader.ini' => function () {
            return ${($_ = isset($this->services['translation.loader.ini']) ? $this->services['translation.loader.ini'] : ($this->services['translation.loader.ini'] = new \Symfony\Component\Translation\Loader\IniFileLoader())) && false ?: '_'};
        }, 'translation.loader.json' => function () {
            return ${($_ = isset($this->services['translation.loader.json']) ? $this->services['translation.loader.json'] : ($this->services['translation.loader.json'] = new \Symfony\Component\Translation\Loader\JsonFileLoader())) && false ?: '_'};
        }, 'translation.loader.mo' => function () {
            return ${($_ = isset($this->services['translation.loader.mo']) ? $this->services['translation.loader.mo'] : ($this->services['translation.loader.mo'] = new \Symfony\Component\Translation\Loader\MoFileLoader())) && false ?: '_'};
        }, 'translation.loader.php' => function () {
            return ${($_ = isset($this->services['translation.loader.php']) ? $this->services['translation.loader.php'] : ($this->services['translation.loader.php'] = new \Symfony\Component\Translation\Loader\PhpFileLoader())) && false ?: '_'};
        }, 'translation.loader.po' => function () {
            return ${($_ = isset($this->services['translation.loader.po']) ? $this->services['translation.loader.po'] : ($this->services['translation.loader.po'] = new \Symfony\Component\Translation\Loader\PoFileLoader())) && false ?: '_'};
        }, 'translation.loader.qt' => function () {
            return ${($_ = isset($this->services['translation.loader.qt']) ? $this->services['translation.loader.qt'] : ($this->services['translation.loader.qt'] = new \Symfony\Component\Translation\Loader\QtFileLoader())) && false ?: '_'};
        }, 'translation.loader.res' => function () {
            return ${($_ = isset($this->services['translation.loader.res']) ? $this->services['translation.loader.res'] : ($this->services['translation.loader.res'] = new \Symfony\Component\Translation\Loader\IcuResFileLoader())) && false ?: '_'};
        }, 'translation.loader.xliff' => function () {
            return ${($_ = isset($this->services['translation.loader.xliff']) ? $this->services['translation.loader.xliff'] : ($this->services['translation.loader.xliff'] = new \Symfony\Component\Translation\Loader\XliffFileLoader())) && false ?: '_'};
        }, 'translation.loader.yml' => function () {
            return ${($_ = isset($this->services['translation.loader.yml']) ? $this->services['translation.loader.yml'] : ($this->services['translation.loader.yml'] = new \Symfony\Component\Translation\Loader\YamlFileLoader())) && false ?: '_'};
        }]), new \Symfony\Component\Translation\Formatter\MessageFormatter(new \Symfony\Component\Translation\MessageSelector()), 'en', ['translation.loader.php' => [0 => 'php'], 'translation.loader.yml' => [0 => 'yaml', 1 => 'yml'], 'translation.loader.xliff' => [0 => 'xlf', 1 => 'xliff'], 'translation.loader.po' => [0 => 'po'], 'translation.loader.mo' => [0 => 'mo'], 'translation.loader.qt' => [0 => 'ts'], 'translation.loader.csv' => [0 => 'csv'], 'translation.loader.res' => [0 => 'res'], 'translation.loader.dat' => [0 => 'dat'], 'translation.loader.ini' => [0 => 'ini'], 'translation.loader.json' => [0 => 'json']], ['cache_dir' => ($this->targetDirs[0].'/translations'), 'debug' => true, 'resource_files' => ['af' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.af.xlf'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.af.yml')], 'ar' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.ar.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.ar.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.ar.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ar.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ar.yml')], 'az' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.az.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.az.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.az.xlf')], 'be' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.be.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.be.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.be.xlf')], 'bg' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.bg.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.bg.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.bg.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.bg.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.bg.yml')], 'bs' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.bs.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.bs.xlf')], 'ca' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.ca.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.ca.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.ca.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ca.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ca.yml')], 'cs' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.cs.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.cs.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.cs.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.cs.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.cs.yml')], 'cy' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.cy.xlf')], 'da' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.da.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.da.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.da.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.da.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.da.yml')], 'de' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.de.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.de.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.de.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.de.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.de.yml')], 'el' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.el.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.el.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.el.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.el.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.el.yml')], 'en' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.en.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.en.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.en.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.en.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.en.yml'), 5 => ($this->targetDirs[4].'/src/PartKeepr/SiPrefixBundle/Resources/translations/validators.en.yml'), 6 => ($this->targetDirs[4].'/src/PartKeepr/UnitBundle/Resources/translations/validators.en.yml'), 7 => ($this->targetDirs[4].'/src/PartKeepr/PartBundle/Resources/translations/validators.en.yml')], 'es' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.es.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.es.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.es.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.es.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.es.yml')], 'et' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.et.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.et.xlf'), 2 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.et.yml')], 'eu' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.eu.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.eu.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.eu.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.eu.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.eu.yml')], 'fa' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.fa.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.fa.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.fa.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.fa.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.fa.yml')], 'fi' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.fi.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.fi.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.fi.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.fi.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.fi.yml')], 'fr' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.fr.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.fr.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.fr.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.fr.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.fr.yml')], 'gl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.gl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.gl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.gl.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.gl.yml')], 'he' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.he.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.he.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.he.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.he.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.he.yml')], 'hr' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.hr.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.hr.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.hr.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.hr.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.hr.yml')], 'hu' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.hu.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.hu.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.hu.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.hu.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.hu.yml')], 'hy' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.hy.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.hy.xlf')], 'id' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.id.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.id.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.id.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.id.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.id.yml')], 'it' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.it.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.it.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.it.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.it.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.it.yml')], 'ja' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.ja.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.ja.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.ja.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ja.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ja.yml')], 'lb' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.lb.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.lb.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.lb.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.lb.yml')], 'lt' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.lt.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.lt.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.lt.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.lt.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.lt.yml')], 'lv' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.lv.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.lv.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.lv.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.lv.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.lv.yml')], 'mn' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.mn.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.mn.xlf')], 'nb' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.nb.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.nb.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.nb.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.nb.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.nb.yml')], 'nl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.nl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.nl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.nl.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.nl.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.nl.yml')], 'nn' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.nn.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.nn.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.nn.xlf')], 'no' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.no.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.no.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.no.xlf')], 'pl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.pl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.pl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.pl.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.pl.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.pl.yml')], 'pt' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.pt.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.pt.xlf'), 2 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.pt.yml'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.pt.yml')], 'pt_BR' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.pt_BR.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.pt_BR.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.pt_BR.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.pt_BR.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.pt_BR.yml')], 'ro' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.ro.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.ro.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.ro.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ro.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ro.yml')], 'ru' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.ru.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.ru.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.ru.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ru.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ru.yml')], 'sk' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sk.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sk.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sk.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.sk.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.sk.yml')], 'sl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sl.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.sl.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.sl.yml')], 'sq' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sq.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sq.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sq.xlf')], 'sr_Cyrl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sr_Cyrl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sr_Cyrl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sr_Cyrl.xlf')], 'sr_Latn' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sr_Latn.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sr_Latn.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sr_Latn.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.sr_Latn.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.sr_Latn.yml')], 'sv' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.sv.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.sv.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.sv.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.sv.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.sv.yml')], 'th' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.th.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.th.xlf'), 2 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.th.yml'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.th.yml')], 'tl' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.tl.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.tl.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.tl.xlf')], 'tr' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.tr.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.tr.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.tr.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.tr.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.tr.yml')], 'uk' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.uk.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.uk.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.uk.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.uk.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.uk.yml')], 'vi' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.vi.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.vi.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.vi.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.vi.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.vi.yml')], 'zh_CN' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.zh_CN.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.zh_CN.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.zh_CN.xlf'), 3 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.zh_CN.yml'), 4 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.zh_CN.yml')], 'zh_TW' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Validator/Resources/translations/validators.zh_TW.xlf'), 1 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/translations/validators.zh_TW.xlf'), 2 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.zh_TW.xlf')], 'pt_PT' => [0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Security/Core/Resources/translations/security.pt_PT.xlf')], 'bn' => [0 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.bn.yml'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.bn.yml')], 'bn_BD' => [0 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.bn_BD.yml'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.bn_BD.yml')], 'eo' => [0 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.eo.yml'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.eo.yml')], 'ky' => [0 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/FOSUserBundle.ky.yml'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/translations/validators.ky.yml')]]]);

        $instance->setConfigCacheFactory(${($_ = isset($this->services['config_cache_factory']) ? $this->services['config_cache_factory'] : $this->getConfigCacheFactoryService()) && false ?: '_'});
        $instance->setFallbackLocales([0 => 'en']);

        return $instance;
    }

    /**
     * Gets the private 'translator_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\TranslatorListener
     */
    protected function getTranslatorListenerService()
    {
        return $this->services['translator_listener'] = new \Symfony\Component\HttpKernel\EventListener\TranslatorListener(${($_ = isset($this->services['translator']) ? $this->services['translator'] : $this->getTranslatorService()) && false ?: '_'}, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'});
    }

    /**
     * Gets the private 'twig.loader' shared service.
     *
     * @return \Symfony\Bundle\TwigBundle\Loader\FilesystemLoader
     */
    protected function getTwig_LoaderService()
    {
        $this->services['twig.loader'] = $instance = new \Symfony\Bundle\TwigBundle\Loader\FilesystemLoader(${($_ = isset($this->services['templating.locator']) ? $this->services['templating.locator'] : $this->getTemplating_LocatorService()) && false ?: '_'}, ${($_ = isset($this->services['templating.name_parser']) ? $this->services['templating.name_parser'] : ($this->services['templating.name_parser'] = new \Symfony\Bundle\FrameworkBundle\Templating\TemplateNameParser(${($_ = isset($this->services['kernel']) ? $this->services['kernel'] : $this->get('kernel', 1)) && false ?: '_'}))) && false ?: '_'}, $this->targetDirs[4]);

        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Resources/views'), 'Framework');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/FrameworkBundle/Resources/views'), '!Framework');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/SecurityBundle/Resources/views'), 'Security');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/SecurityBundle/Resources/views'), '!Security');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views'), 'Twig');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle/Resources/views'), '!Twig');
        $instance->addPath(($this->targetDirs[4].'/vendor/doctrine/doctrine-bundle/Resources/views'), 'Doctrine');
        $instance->addPath(($this->targetDirs[4].'/vendor/doctrine/doctrine-bundle/Resources/views'), '!Doctrine');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/swiftmailer-bundle/Resources/views'), 'Swiftmailer');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/swiftmailer-bundle/Resources/views'), '!Swiftmailer');
        $instance->addPath(($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/views'), 'FOSUser');
        $instance->addPath(($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/views'), '!FOSUser');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/DoctrineReflectionBundle/Resources/views'), 'PartKeeprDoctrineReflection');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/DoctrineReflectionBundle/Resources/views'), '!PartKeeprDoctrineReflection');
        $instance->addPath(($this->targetDirs[4].'/vendor/nfq-alpha/sprite-bundle/src/SpriteGenerator/Resources/views'), 'SpriteGenerator');
        $instance->addPath(($this->targetDirs[4].'/vendor/nfq-alpha/sprite-bundle/src/SpriteGenerator/Resources/views'), '!SpriteGenerator');
        $instance->addPath(($this->targetDirs[4].'/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views'), 'ApiPlatform');
        $instance->addPath(($this->targetDirs[4].'/vendor/api-platform/core/src/Bridge/Symfony/Bundle/Resources/views'), '!ApiPlatform');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views'), 'WebProfiler');
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle/Resources/views'), '!WebProfiler');
        $instance->addPath(($this->targetDirs[4].'/vendor/liip/functional-test-bundle/Resources/views'), 'LiipFunctionalTest');
        $instance->addPath(($this->targetDirs[4].'/vendor/liip/functional-test-bundle/Resources/views'), '!LiipFunctionalTest');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/SetupBundle/Resources/views'), 'PartKeeprSetup');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/SetupBundle/Resources/views'), '!PartKeeprSetup');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/FrontendBundle/Resources/views'), 'PartKeeprFrontend');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/FrontendBundle/Resources/views'), '!PartKeeprFrontend');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/AuthBundle/Resources/views'), 'PartKeeprAuth');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/AuthBundle/Resources/views'), '!PartKeeprAuth');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/FootprintBundle/Resources/views'), 'PartKeeprFootprint');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/FootprintBundle/Resources/views'), '!PartKeeprFootprint');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/MobileFrontendBundle/Resources/views'), 'PartKeeprMobileFrontend');
        $instance->addPath(($this->targetDirs[4].'/src/PartKeepr/MobileFrontendBundle/Resources/views'), '!PartKeeprMobileFrontend');
        $instance->addPath(($this->targetDirs[3].'/Resources/views'));
        $instance->addPath(($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bridge/Twig/Resources/views/Form'));

        return $instance;
    }

    /**
     * Gets the private 'twig.profile' shared service.
     *
     * @return \Twig\Profiler\Profile
     */
    protected function getTwig_ProfileService()
    {
        return $this->services['twig.profile'] = new \Twig\Profiler\Profile();
    }

    /**
     * Gets the private 'uri_signer' shared service.
     *
     * @return \Symfony\Component\HttpKernel\UriSigner
     */
    protected function getUriSignerService()
    {
        return $this->services['uri_signer'] = new \Symfony\Component\HttpKernel\UriSigner('COAAFJGGLPHPDGGNCNILHFGECFMMACKC');
    }

    /**
     * Gets the private 'validate_request_listener' shared service.
     *
     * @return \Symfony\Component\HttpKernel\EventListener\ValidateRequestListener
     */
    protected function getValidateRequestListenerService()
    {
        return $this->services['validate_request_listener'] = new \Symfony\Component\HttpKernel\EventListener\ValidateRequestListener();
    }

    /**
     * Gets the private 'validator.builder' shared service.
     *
     * @return \Symfony\Component\Validator\ValidatorBuilderInterface
     */
    protected function getValidator_BuilderService()
    {
        $this->services['validator.builder'] = $instance = \Symfony\Component\Validator\Validation::createValidatorBuilder();

        $instance->setConstraintValidatorFactory(new \Symfony\Component\Validator\ContainerConstraintValidatorFactory(new \Symfony\Component\DependencyInjection\ServiceLocator(['Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntityValidator' => function () {
            return ${($_ = isset($this->services['doctrine.orm.validator.unique']) ? $this->services['doctrine.orm.validator.unique'] : $this->load('getDoctrine_Orm_Validator_UniqueService.php')) && false ?: '_'};
        }, 'Symfony\\Component\\Security\\Core\\Validator\\Constraints\\UserPasswordValidator' => function () {
            return ${($_ = isset($this->services['security.validator.user_password']) ? $this->services['security.validator.user_password'] : $this->load('getSecurity_Validator_UserPasswordService.php')) && false ?: '_'};
        }, 'Symfony\\Component\\Validator\\Constraints\\EmailValidator' => function () {
            return ${($_ = isset($this->services['validator.email']) ? $this->services['validator.email'] : ($this->services['validator.email'] = new \Symfony\Component\Validator\Constraints\EmailValidator(false))) && false ?: '_'};
        }, 'Symfony\\Component\\Validator\\Constraints\\ExpressionValidator' => function () {
            return ${($_ = isset($this->services['validator.expression']) ? $this->services['validator.expression'] : ($this->services['validator.expression'] = new \Symfony\Component\Validator\Constraints\ExpressionValidator())) && false ?: '_'};
        }, 'doctrine.orm.validator.unique' => function () {
            return ${($_ = isset($this->services['doctrine.orm.validator.unique']) ? $this->services['doctrine.orm.validator.unique'] : $this->load('getDoctrine_Orm_Validator_UniqueService.php')) && false ?: '_'};
        }, 'security.validator.user_password' => function () {
            return ${($_ = isset($this->services['security.validator.user_password']) ? $this->services['security.validator.user_password'] : $this->load('getSecurity_Validator_UserPasswordService.php')) && false ?: '_'};
        }, 'validator.expression' => function () {
            return ${($_ = isset($this->services['validator.expression']) ? $this->services['validator.expression'] : ($this->services['validator.expression'] = new \Symfony\Component\Validator\Constraints\ExpressionValidator())) && false ?: '_'};
        }])));
        if ($this->has('translator')) {
            $instance->setTranslator(${($_ = isset($this->services['translator']) ? $this->services['translator'] : $this->getTranslatorService()) && false ?: '_'});
        }
        $instance->setTranslationDomain('validators');
        $instance->addXmlMappings([0 => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Component/Form/Resources/config/validation.xml'), 1 => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/Resources/config/validation.xml')]);
        $instance->enableAnnotationMapping(${($_ = isset($this->services['annotation_reader']) ? $this->services['annotation_reader'] : $this->getAnnotationReaderService()) && false ?: '_'});
        $instance->addMethodMapping('loadValidatorMetadata');
        $instance->addObjectInitializers([0 => ${($_ = isset($this->services['doctrine.orm.validator_initializer']) ? $this->services['doctrine.orm.validator_initializer'] : $this->getDoctrine_Orm_ValidatorInitializerService()) && false ?: '_'}, 1 => new \FOS\UserBundle\Validator\Initializer(${($_ = isset($this->services['fos_user.util.canonical_fields_updater']) ? $this->services['fos_user.util.canonical_fields_updater'] : $this->getFosUser_Util_CanonicalFieldsUpdaterService()) && false ?: '_'})]);
        $instance->addXmlMapping(($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle/DependencyInjection/Compiler/../../Resources/config/storage-validation/orm.xml'));

        return $instance;
    }

    public function getParameter($name)
    {
        $name = (string) $name;
        if (isset($this->buildParameters[$name])) {
            return $this->buildParameters[$name];
        }
        if (!(isset($this->parameters[$name]) || isset($this->loadedDynamicParameters[$name]) || array_key_exists($name, $this->parameters))) {
            $name = $this->normalizeParameterName($name);

            if (!(isset($this->parameters[$name]) || isset($this->loadedDynamicParameters[$name]) || array_key_exists($name, $this->parameters))) {
                throw new InvalidArgumentException(sprintf('The parameter "%s" must be defined.', $name));
            }
        }
        if (isset($this->loadedDynamicParameters[$name])) {
            return $this->loadedDynamicParameters[$name] ? $this->dynamicParameters[$name] : $this->getDynamicParameter($name);
        }

        return $this->parameters[$name];
    }

    public function hasParameter($name)
    {
        $name = (string) $name;
        if (isset($this->buildParameters[$name])) {
            return true;
        }
        $name = $this->normalizeParameterName($name);

        return isset($this->parameters[$name]) || isset($this->loadedDynamicParameters[$name]) || array_key_exists($name, $this->parameters);
    }

    public function setParameter($name, $value)
    {
        throw new LogicException('Impossible to call set() on a frozen ParameterBag.');
    }

    public function getParameterBag()
    {
        if (null === $this->parameterBag) {
            $parameters = $this->parameters;
            foreach ($this->loadedDynamicParameters as $name => $loaded) {
                $parameters[$name] = $loaded ? $this->dynamicParameters[$name] : $this->getDynamicParameter($name);
            }
            foreach ($this->buildParameters as $name => $value) {
                $parameters[$name] = $value;
            }
            $this->parameterBag = new FrozenParameterBag($parameters);
        }

        return $this->parameterBag;
    }

    private $loadedDynamicParameters = [
        'kernel.root_dir' => false,
        'kernel.project_dir' => false,
        'kernel.cache_dir' => false,
        'kernel.logs_dir' => false,
        'kernel.bundles_metadata' => false,
        'partkeepr.filesystem.data_directory' => false,
        'session.save_path' => false,
        'validator.mapping.cache.file' => false,
        'translator.default_path' => false,
        'profiler.storage.dsn' => false,
        'debug.container.dump' => false,
        'router.resource' => false,
        'serializer.mapping.cache.file' => false,
        'twig.default_path' => false,
        'assetic.cache_dir' => false,
        'assetic.read_from' => false,
        'assetic.write_to' => false,
        'doctrine.orm.proxy_dir' => false,
        'doctrine_migrations.dir_name' => false,
        'api_platform.resource_class_directories' => false,
        'partkeepr.image_cache_directory' => false,
        'partkeepr.directories.iclogo' => false,
        'partkeepr.directories.temp' => false,
        'partkeepr.directories.tempfile' => false,
        'partkeepr.directories.footprintattachment' => false,
        'partkeepr.directories.footprint' => false,
        'partkeepr.directories.partattachment' => false,
        'partkeepr.directories.storagelocation' => false,
        'partkeepr.directories.mimetype_icons' => false,
        'partkeepr.directories.projectattachment' => false,
    ];
    private $dynamicParameters = [];

    /**
     * Computes a dynamic parameter.
     *
     * @param string $name The name of the dynamic parameter to load
     *
     * @return mixed The value of the dynamic parameter
     *
     * @throws InvalidArgumentException When the dynamic parameter does not exist
     */
    private function getDynamicParameter($name)
    {
        switch ($name) {
            case 'kernel.root_dir': $value = $this->targetDirs[3]; break;
            case 'kernel.project_dir': $value = $this->targetDirs[4]; break;
            case 'kernel.cache_dir': $value = $this->targetDirs[0]; break;
            case 'kernel.logs_dir': $value = ($this->targetDirs[3].'/logs'); break;
            case 'kernel.bundles_metadata': $value = [
                'FrameworkBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/FrameworkBundle'),
                    'namespace' => 'Symfony\\Bundle\\FrameworkBundle',
                ],
                'SecurityBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/SecurityBundle'),
                    'namespace' => 'Symfony\\Bundle\\SecurityBundle',
                ],
                'TwigBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/TwigBundle'),
                    'namespace' => 'Symfony\\Bundle\\TwigBundle',
                ],
                'MonologBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/monolog-bundle'),
                    'namespace' => 'Symfony\\Bundle\\MonologBundle',
                ],
                'AsseticBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/assetic-bundle'),
                    'namespace' => 'Symfony\\Bundle\\AsseticBundle',
                ],
                'DoctrineBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/doctrine/doctrine-bundle'),
                    'namespace' => 'Doctrine\\Bundle\\DoctrineBundle',
                ],
                'SwiftmailerBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/swiftmailer-bundle'),
                    'namespace' => 'Symfony\\Bundle\\SwiftmailerBundle',
                ],
                'FOSUserBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/friendsofsymfony/user-bundle'),
                    'namespace' => 'FOS\\UserBundle',
                ],
                'SensioFrameworkExtraBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/sensio/framework-extra-bundle'),
                    'namespace' => 'Sensio\\Bundle\\FrameworkExtraBundle',
                ],
                'DoctrineFixturesBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/doctrine/doctrine-fixtures-bundle'),
                    'namespace' => 'Doctrine\\Bundle\\FixturesBundle',
                ],
                'PartKeeprDoctrineReflectionBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/DoctrineReflectionBundle'),
                    'namespace' => 'PartKeepr\\DoctrineReflectionBundle',
                ],
                'SpriteGeneratorBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/nfq-alpha/sprite-bundle/src/SpriteGenerator'),
                    'namespace' => 'SpriteGenerator',
                ],
                'DoctrineMigrationsBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/doctrine/doctrine-migrations-bundle'),
                    'namespace' => 'Doctrine\\Bundle\\MigrationsBundle',
                ],
                'BrainbitsFugueIconsBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/brainbits/fugue-icons-bundle/src/Brainbits/FugueIconsBundle'),
                    'namespace' => 'Brainbits\\FugueIconsBundle',
                ],
                'StofDoctrineExtensionsBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/stof/doctrine-extensions-bundle'),
                    'namespace' => 'Stof\\DoctrineExtensionsBundle',
                ],
                'PartKeeprRemoteFileLoaderBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/partkeepr/remote-file-loader'),
                    'namespace' => 'PartKeepr\\RemoteFileLoader',
                ],
                'KnpGaufretteBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/knplabs/knp-gaufrette-bundle'),
                    'namespace' => 'Knp\\Bundle\\GaufretteBundle',
                ],
                'ApiPlatformBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/api-platform/core/src/Bridge/Symfony/Bundle'),
                    'namespace' => 'ApiPlatform\\Core\\Bridge\\Symfony\\Bundle',
                ],
                'WebProfilerBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/symfony/symfony/src/Symfony/Bundle/WebProfilerBundle'),
                    'namespace' => 'Symfony\\Bundle\\WebProfilerBundle',
                ],
                'SensioDistributionBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/sensio/distribution-bundle'),
                    'namespace' => 'Sensio\\Bundle\\DistributionBundle',
                ],
                'LiipFunctionalTestBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/vendor/liip/functional-test-bundle'),
                    'namespace' => 'Liip\\FunctionalTestBundle',
                ],
                'PartKeeprSetupBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/SetupBundle'),
                    'namespace' => 'PartKeepr\\SetupBundle',
                ],
                'PartKeeprCronLoggerBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/CronLoggerBundle'),
                    'namespace' => 'PartKeepr\\CronLoggerBundle',
                ],
                'PartKeeprCategoryBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/CategoryBundle'),
                    'namespace' => 'PartKeepr\\CategoryBundle',
                ],
                'PartKeeprUploadedFileBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/UploadedFileBundle'),
                    'namespace' => 'PartKeepr\\UploadedFileBundle',
                ],
                'PartKeeprFrontendBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/FrontendBundle'),
                    'namespace' => 'PartKeepr\\FrontendBundle',
                ],
                'PartKeeprSiPrefixBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/SiPrefixBundle'),
                    'namespace' => 'PartKeepr\\SiPrefixBundle',
                ],
                'PartKeeprAuthBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/AuthBundle'),
                    'namespace' => 'PartKeepr\\AuthBundle',
                ],
                'PartKeeprCoreBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/CoreBundle'),
                    'namespace' => 'PartKeepr\\CoreBundle',
                ],
                'PartKeeprMimetypeIconsBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/MimetypeIconsBundle'),
                    'namespace' => 'PartKeepr\\MimetypeIconsBundle',
                ],
                'PartKeeprFootprintBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/FootprintBundle'),
                    'namespace' => 'PartKeepr\\FootprintBundle',
                ],
                'PartKeeprUnitBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/UnitBundle'),
                    'namespace' => 'PartKeepr\\UnitBundle',
                ],
                'PartKeeprPartBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/PartBundle'),
                    'namespace' => 'PartKeepr\\PartBundle',
                ],
                'PartKeeprStockBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/StockBundle'),
                    'namespace' => 'PartKeepr\\StockBundle',
                ],
                'PartKeeprDistributorBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/DistributorBundle'),
                    'namespace' => 'PartKeepr\\DistributorBundle',
                ],
                'PartKeeprManufacturerBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/ManufacturerBundle'),
                    'namespace' => 'PartKeepr\\ManufacturerBundle',
                ],
                'PartKeeprImageBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/ImageBundle'),
                    'namespace' => 'PartKeepr\\ImageBundle',
                ],
                'PartKeeprProjectBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/ProjectBundle'),
                    'namespace' => 'PartKeepr\\ProjectBundle',
                ],
                'PartKeeprStorageLocationBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/StorageLocationBundle'),
                    'namespace' => 'PartKeepr\\StorageLocationBundle',
                ],
                'PartKeeprTipOfTheDayBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/TipOfTheDayBundle'),
                    'namespace' => 'PartKeepr\\TipOfTheDayBundle',
                ],
                'PartKeeprExportBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/ExportBundle'),
                    'namespace' => 'PartKeepr\\ExportBundle',
                ],
                'PartKeeprStatisticBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/StatisticBundle'),
                    'namespace' => 'PartKeepr\\StatisticBundle',
                ],
                'PartKeeprSystemPreferenceBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/SystemPreferenceBundle'),
                    'namespace' => 'PartKeepr\\SystemPreferenceBundle',
                ],
                'PartKeeprImportBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/ImportBundle'),
                    'namespace' => 'PartKeepr\\ImportBundle',
                ],
                'PartKeeprBatchJobBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/BatchJobBundle'),
                    'namespace' => 'PartKeepr\\BatchJobBundle',
                ],
                'PartKeeprOctoPartBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/OctoPartBundle'),
                    'namespace' => 'PartKeepr\\OctoPartBundle',
                ],
                'PartKeeprMobileFrontendBundle' => [
                    'parent' => NULL,
                    'path' => ($this->targetDirs[4].'/src/PartKeepr/MobileFrontendBundle'),
                    'namespace' => 'PartKeepr\\MobileFrontendBundle',
                ],
            ]; break;
            case 'partkeepr.filesystem.data_directory': $value = ($this->targetDirs[3].'/../data/'); break;
            case 'session.save_path': $value = ($this->targetDirs[0].'/sessions'); break;
            case 'validator.mapping.cache.file': $value = ($this->targetDirs[0].'/validation.php'); break;
            case 'translator.default_path': $value = ($this->targetDirs[4].'/translations'); break;
            case 'profiler.storage.dsn': $value = ('file:'.$this->targetDirs[0].'/profiler'); break;
            case 'debug.container.dump': $value = ($this->targetDirs[0].'/appDevDebugProjectContainer.xml'); break;
            case 'router.resource': $value = ($this->targetDirs[0].'/assetic/routing.yml'); break;
            case 'serializer.mapping.cache.file': $value = ($this->targetDirs[0].'/serialization.php'); break;
            case 'twig.default_path': $value = ($this->targetDirs[4].'/templates'); break;
            case 'assetic.cache_dir': $value = ($this->targetDirs[0].'/assetic'); break;
            case 'assetic.read_from': $value = ($this->targetDirs[3].'/../web'); break;
            case 'assetic.write_to': $value = ($this->targetDirs[3].'/../web'); break;
            case 'doctrine.orm.proxy_dir': $value = ($this->targetDirs[0].'/doctrine/orm/Proxies'); break;
            case 'doctrine_migrations.dir_name': $value = ($this->targetDirs[3].'/../src/PartKeepr/CoreBundle/DoctrineMigrations'); break;
            case 'api_platform.resource_class_directories': $value = [
                0 => ($this->targetDirs[4].'/src/PartKeepr/CronLoggerBundle/Entity'),
                1 => ($this->targetDirs[4].'/src/PartKeepr/CategoryBundle/Entity'),
                2 => ($this->targetDirs[4].'/src/PartKeepr/UploadedFileBundle/Entity'),
                3 => ($this->targetDirs[4].'/src/PartKeepr/FrontendBundle/Entity'),
                4 => ($this->targetDirs[4].'/src/PartKeepr/SiPrefixBundle/Entity'),
                5 => ($this->targetDirs[4].'/src/PartKeepr/AuthBundle/Entity'),
                6 => ($this->targetDirs[4].'/src/PartKeepr/CoreBundle/Entity'),
                7 => ($this->targetDirs[4].'/src/PartKeepr/FootprintBundle/Entity'),
                8 => ($this->targetDirs[4].'/src/PartKeepr/UnitBundle/Entity'),
                9 => ($this->targetDirs[4].'/src/PartKeepr/PartBundle/Entity'),
                10 => ($this->targetDirs[4].'/src/PartKeepr/StockBundle/Entity'),
                11 => ($this->targetDirs[4].'/src/PartKeepr/DistributorBundle/Entity'),
                12 => ($this->targetDirs[4].'/src/PartKeepr/ManufacturerBundle/Entity'),
                13 => ($this->targetDirs[4].'/src/PartKeepr/ImageBundle/Entity'),
                14 => ($this->targetDirs[4].'/src/PartKeepr/ProjectBundle/Entity'),
                15 => ($this->targetDirs[4].'/src/PartKeepr/StorageLocationBundle/Entity'),
                16 => ($this->targetDirs[4].'/src/PartKeepr/TipOfTheDayBundle/Entity'),
                17 => ($this->targetDirs[4].'/src/PartKeepr/StatisticBundle/Entity'),
                18 => ($this->targetDirs[4].'/src/PartKeepr/SystemPreferenceBundle/Entity'),
                19 => ($this->targetDirs[4].'/src/PartKeepr/ImportBundle/Entity'),
                20 => ($this->targetDirs[4].'/src/PartKeepr/BatchJobBundle/Entity'),
            ]; break;
            case 'partkeepr.image_cache_directory': $value = ($this->targetDirs[0].'/imagecache/'); break;
            case 'partkeepr.directories.iclogo': $value = ($this->targetDirs[3].'/../data/images/iclogo/'); break;
            case 'partkeepr.directories.temp': $value = ($this->targetDirs[3].'/../data/temp/'); break;
            case 'partkeepr.directories.tempfile': $value = ($this->targetDirs[3].'/../data/files/Temporary/'); break;
            case 'partkeepr.directories.footprintattachment': $value = ($this->targetDirs[3].'/../data/files/FootprintAttachment/'); break;
            case 'partkeepr.directories.footprint': $value = ($this->targetDirs[3].'/../data/images/footprint/'); break;
            case 'partkeepr.directories.partattachment': $value = ($this->targetDirs[3].'/../data/files/PartAttachment/'); break;
            case 'partkeepr.directories.storagelocation': $value = ($this->targetDirs[3].'/../data/images/storagelocation/'); break;
            case 'partkeepr.directories.mimetype_icons': $value = ($this->targetDirs[3].'/../src/PartKeepr/MimetypeIconsBundle/Resources/public/images/mimes/'); break;
            case 'partkeepr.directories.projectattachment': $value = ($this->targetDirs[3].'/../data/files/ProjectAttachment/'); break;
            default: throw new InvalidArgumentException(sprintf('The dynamic parameter "%s" must be defined.', $name));
        }
        $this->loadedDynamicParameters[$name] = true;

        return $this->dynamicParameters[$name] = $value;
    }

    private $normalizedParameterNames = [
        'fr3d_ldap.driver.accountcanonicalform' => 'fr3d_ldap.driver.accountCanonicalForm',
        'fr3d_ldap.driver.accountdomainname' => 'fr3d_ldap.driver.accountDomainName',
        'fr3d_ldap.driver.accountdomainnameshort' => 'fr3d_ldap.driver.accountDomainNameShort',
        'fr3d_ldap.driver.accountfilterformat' => 'fr3d_ldap.driver.accountFilterFormat',
        'fr3d_ldap.driver.basedn' => 'fr3d_ldap.driver.baseDn',
        'fr3d_ldap.driver.bindrequiresdn' => 'fr3d_ldap.driver.bindRequiresDn',
        'fr3d_ldap.driver.optreferrals' => 'fr3d_ldap.driver.optReferrals',
        'fr3d_ldap.driver.usessl' => 'fr3d_ldap.driver.useSsl',
        'fr3d_ldap.driver.usestarttls' => 'fr3d_ldap.driver.useStartTls',
        'fr3d_ldap.user.basedn' => 'fr3d_ldap.user.baseDn',
    ];

    private function normalizeParameterName($name)
    {
        if (isset($this->normalizedParameterNames[$normalizedName = strtolower($name)]) || isset($this->parameters[$normalizedName]) || array_key_exists($normalizedName, $this->parameters)) {
            $normalizedName = isset($this->normalizedParameterNames[$normalizedName]) ? $this->normalizedParameterNames[$normalizedName] : $normalizedName;
            if ((string) $name !== $normalizedName) {
                @trigger_error(sprintf('Parameter names will be made case sensitive in Symfony 4.0. Using "%s" instead of "%s" is deprecated since Symfony 3.4.', $name, $normalizedName), E_USER_DEPRECATED);
            }
        } else {
            $normalizedName = $this->normalizedParameterNames[$normalizedName] = (string) $name;
        }

        return $normalizedName;
    }

    /**
     * Gets the default parameters.
     *
     * @return array An array of the default parameters
     */
    protected function getDefaultParameters()
    {
        return [
            'kernel.environment' => 'dev',
            'kernel.debug' => true,
            'kernel.name' => 'app',
            'kernel.bundles' => [
                'FrameworkBundle' => 'Symfony\\Bundle\\FrameworkBundle\\FrameworkBundle',
                'SecurityBundle' => 'Symfony\\Bundle\\SecurityBundle\\SecurityBundle',
                'TwigBundle' => 'Symfony\\Bundle\\TwigBundle\\TwigBundle',
                'MonologBundle' => 'Symfony\\Bundle\\MonologBundle\\MonologBundle',
                'AsseticBundle' => 'Symfony\\Bundle\\AsseticBundle\\AsseticBundle',
                'DoctrineBundle' => 'Doctrine\\Bundle\\DoctrineBundle\\DoctrineBundle',
                'SwiftmailerBundle' => 'Symfony\\Bundle\\SwiftmailerBundle\\SwiftmailerBundle',
                'FOSUserBundle' => 'FOS\\UserBundle\\FOSUserBundle',
                'SensioFrameworkExtraBundle' => 'Sensio\\Bundle\\FrameworkExtraBundle\\SensioFrameworkExtraBundle',
                'DoctrineFixturesBundle' => 'Doctrine\\Bundle\\FixturesBundle\\DoctrineFixturesBundle',
                'PartKeeprDoctrineReflectionBundle' => 'PartKeepr\\DoctrineReflectionBundle\\PartKeeprDoctrineReflectionBundle',
                'SpriteGeneratorBundle' => 'SpriteGenerator\\SpriteGeneratorBundle',
                'DoctrineMigrationsBundle' => 'Doctrine\\Bundle\\MigrationsBundle\\DoctrineMigrationsBundle',
                'BrainbitsFugueIconsBundle' => 'Brainbits\\FugueIconsBundle\\BrainbitsFugueIconsBundle',
                'StofDoctrineExtensionsBundle' => 'Stof\\DoctrineExtensionsBundle\\StofDoctrineExtensionsBundle',
                'PartKeeprRemoteFileLoaderBundle' => 'PartKeepr\\RemoteFileLoader\\PartKeeprRemoteFileLoaderBundle',
                'KnpGaufretteBundle' => 'Knp\\Bundle\\GaufretteBundle\\KnpGaufretteBundle',
                'ApiPlatformBundle' => 'ApiPlatform\\Core\\Bridge\\Symfony\\Bundle\\ApiPlatformBundle',
                'WebProfilerBundle' => 'Symfony\\Bundle\\WebProfilerBundle\\WebProfilerBundle',
                'SensioDistributionBundle' => 'Sensio\\Bundle\\DistributionBundle\\SensioDistributionBundle',
                'LiipFunctionalTestBundle' => 'Liip\\FunctionalTestBundle\\LiipFunctionalTestBundle',
                'PartKeeprSetupBundle' => 'PartKeepr\\SetupBundle\\PartKeeprSetupBundle',
                'PartKeeprCronLoggerBundle' => 'PartKeepr\\CronLoggerBundle\\PartKeeprCronLoggerBundle',
                'PartKeeprCategoryBundle' => 'PartKeepr\\CategoryBundle\\PartKeeprCategoryBundle',
                'PartKeeprUploadedFileBundle' => 'PartKeepr\\UploadedFileBundle\\PartKeeprUploadedFileBundle',
                'PartKeeprFrontendBundle' => 'PartKeepr\\FrontendBundle\\PartKeeprFrontendBundle',
                'PartKeeprSiPrefixBundle' => 'PartKeepr\\SiPrefixBundle\\PartKeeprSiPrefixBundle',
                'PartKeeprAuthBundle' => 'PartKeepr\\AuthBundle\\PartKeeprAuthBundle',
                'PartKeeprCoreBundle' => 'PartKeepr\\CoreBundle\\PartKeeprCoreBundle',
                'PartKeeprMimetypeIconsBundle' => 'PartKeepr\\MimetypeIconsBundle\\PartKeeprMimetypeIconsBundle',
                'PartKeeprFootprintBundle' => 'PartKeepr\\FootprintBundle\\PartKeeprFootprintBundle',
                'PartKeeprUnitBundle' => 'PartKeepr\\UnitBundle\\PartKeeprUnitBundle',
                'PartKeeprPartBundle' => 'PartKeepr\\PartBundle\\PartKeeprPartBundle',
                'PartKeeprStockBundle' => 'PartKeepr\\StockBundle\\PartKeeprStockBundle',
                'PartKeeprDistributorBundle' => 'PartKeepr\\DistributorBundle\\PartKeeprDistributorBundle',
                'PartKeeprManufacturerBundle' => 'PartKeepr\\ManufacturerBundle\\PartKeeprManufacturerBundle',
                'PartKeeprImageBundle' => 'PartKeepr\\ImageBundle\\PartKeeprImageBundle',
                'PartKeeprProjectBundle' => 'PartKeepr\\ProjectBundle\\PartKeeprProjectBundle',
                'PartKeeprStorageLocationBundle' => 'PartKeepr\\StorageLocationBundle\\PartKeeprStorageLocationBundle',
                'PartKeeprTipOfTheDayBundle' => 'PartKeepr\\TipOfTheDayBundle\\PartKeeprTipOfTheDayBundle',
                'PartKeeprExportBundle' => 'PartKeepr\\ExportBundle\\PartKeeprExportBundle',
                'PartKeeprStatisticBundle' => 'PartKeepr\\StatisticBundle\\PartKeeprStatisticBundle',
                'PartKeeprSystemPreferenceBundle' => 'PartKeepr\\SystemPreferenceBundle\\PartKeeprSystemPreferenceBundle',
                'PartKeeprImportBundle' => 'PartKeepr\\ImportBundle\\PartKeeprImportBundle',
                'PartKeeprBatchJobBundle' => 'PartKeepr\\BatchJobBundle\\PartKeeprBatchJobBundle',
                'PartKeeprOctoPartBundle' => 'PartKeepr\\OctoPartBundle\\PartKeeprOctoPartBundle',
                'PartKeeprMobileFrontendBundle' => 'PartKeepr\\MobileFrontendBundle\\PartKeeprMobileFrontendBundle',
            ],
            'kernel.charset' => 'UTF-8',
            'kernel.container_class' => 'appDevDebugProjectContainer',
            'authentication_provider' => 'PartKeepr.Auth.HTTPBasicAuthenticationProvider',
            'cache.doctrine' => 'array',
            'cache.dunglas' => false,
            'database_driver' => 'pdo_mysql',
            'database_host' => 'db',
            'database_name' => 'partkeepr',
            'database_password' => 'partkeepr',
            'database_port' => 3306,
            'database_user' => 'partkeepr',
            'fr3d_ldap.driver.accountCanonicalForm' => NULL,
            'fr3d_ldap.driver.accountDomainName' => NULL,
            'fr3d_ldap.driver.accountDomainNameShort' => NULL,
            'fr3d_ldap.driver.accountFilterFormat' => NULL,
            'fr3d_ldap.driver.baseDn' => '',
            'fr3d_ldap.driver.bindRequiresDn' => false,
            'fr3d_ldap.driver.host' => '127.0.0.1',
            'fr3d_ldap.driver.optReferrals' => NULL,
            'fr3d_ldap.driver.password' => NULL,
            'fr3d_ldap.driver.port' => NULL,
            'fr3d_ldap.driver.useSsl' => NULL,
            'fr3d_ldap.driver.useStartTls' => NULL,
            'fr3d_ldap.driver.username' => NULL,
            'fr3d_ldap.user.attribute.email' => 'email',
            'fr3d_ldap.user.attribute.username' => 'samaccountname',
            'fr3d_ldap.user.baseDn' => 'dc=blabla,dc=com',
            'fr3d_ldap.user.enabled' => false,
            'fr3d_ldap.user.filter' => NULL,
            'locale' => 'en',
            'mailer_auth_mode' => NULL,
            'mailer_encryption' => NULL,
            'mailer_host' => NULL,
            'mailer_password' => NULL,
            'mailer_port' => NULL,
            'mailer_transport' => NULL,
            'mailer_user' => NULL,
            'partkeepr.auth.max_users' => 'unlimited',
            'partkeepr.category.path_separator' => ' ➤ ',
            'partkeepr.cronjob.check' => false,
            'partkeepr.filesystem.quota' => false,
            'partkeepr.frontend.auto_login.enabled' => true,
            'partkeepr.frontend.auto_login.password' => 'admin',
            'partkeepr.frontend.auto_login.username' => 'admin',
            'partkeepr.frontend.base_url' => false,
            'partkeepr.frontend.motd' => false,
            'partkeepr.maintenance' => false,
            'partkeepr.maintenance.message' => '',
            'partkeepr.maintenance.title' => '',
            'partkeepr.octopart.apikey' => '',
            'partkeepr.octopart.limit' => '3',
            'partkeepr.parts.internalpartnumberunique' => false,
            'partkeepr.parts.limit' => false,
            'partkeepr.patreon.statusuri' => 'https://www.partkeepr.org/patreon.json',
            'partkeepr.upload.limit' => false,
            'partkeepr.users.limit' => false,
            'secret' => 'COAAFJGGLPHPDGGNCNILHFGECFMMACKC',
            'fragment.renderer.hinclude.global_template' => NULL,
            'fragment.path' => '/_fragment',
            'kernel.secret' => 'COAAFJGGLPHPDGGNCNILHFGECFMMACKC',
            'kernel.http_method_override' => true,
            'kernel.trusted_hosts' => [

            ],
            'kernel.default_locale' => 'en',
            'templating.helper.code.file_link_format' => NULL,
            'debug.file_link_format' => NULL,
            'session.metadata.storage_key' => '_sf2_meta',
            'session.storage.options' => [
                'cache_limiter' => '0',
                'cookie_httponly' => true,
                'gc_probability' => 1,
            ],
            'session.metadata.update_threshold' => '0',
            'form.type_extension.csrf.enabled' => true,
            'form.type_extension.csrf.field_name' => '_token',
            'asset.request_context.base_path' => '',
            'asset.request_context.secure' => false,
            'templating.loader.cache.path' => NULL,
            'templating.engines' => [
                0 => 'twig',
            ],
            'validator.mapping.cache.prefix' => '',
            'validator.translation_domain' => 'validators',
            'translator.logging' => true,
            'profiler_listener.only_exceptions' => false,
            'profiler_listener.only_master_requests' => false,
            'debug.error_handler.throw_at' => -1,
            'router.options.generator_class' => 'Symfony\\Component\\Routing\\Generator\\UrlGenerator',
            'router.options.generator_base_class' => 'Symfony\\Component\\Routing\\Generator\\UrlGenerator',
            'router.options.generator_dumper_class' => 'Symfony\\Component\\Routing\\Generator\\Dumper\\PhpGeneratorDumper',
            'router.options.matcher_class' => 'Symfony\\Bundle\\FrameworkBundle\\Routing\\RedirectableUrlMatcher',
            'router.options.matcher_base_class' => 'Symfony\\Bundle\\FrameworkBundle\\Routing\\RedirectableUrlMatcher',
            'router.options.matcher_dumper_class' => 'Symfony\\Component\\Routing\\Matcher\\Dumper\\PhpMatcherDumper',
            'router.options.matcher.cache_class' => 'appDevDebugProjectContainerUrlMatcher',
            'router.options.generator.cache_class' => 'appDevDebugProjectContainerUrlGenerator',
            'router.request_context.host' => 'localhost',
            'router.request_context.scheme' => 'http',
            'router.request_context.base_url' => '',
            'router.cache_class_prefix' => 'appDevDebugProjectContainer',
            'request_listener.http_port' => 80,
            'request_listener.https_port' => 443,
            'serializer.mapping.cache.prefix' => '',
            'security.authentication.trust_resolver.anonymous_class' => 'Symfony\\Component\\Security\\Core\\Authentication\\Token\\AnonymousToken',
            'security.authentication.trust_resolver.rememberme_class' => 'Symfony\\Component\\Security\\Core\\Authentication\\Token\\RememberMeToken',
            'security.role_hierarchy.roles' => [
                'ROLE_ADMIN' => [
                    0 => 'ROLE_USER',
                ],
                'ROLE_SUPER_ADMIN' => [
                    0 => 'ROLE_ADMIN',
                ],
            ],
            'security.access.denied_url' => NULL,
            'security.authentication.manager.erase_credentials' => true,
            'security.authentication.session_strategy.strategy' => 'migrate',
            'security.access.always_authenticate_before_granting' => false,
            'security.authentication.hide_user_not_found' => true,
            'twig.exception_listener.controller' => 'FOS\\RestBundle\\Controller\\ExceptionController::showAction',
            'twig.form.resources' => [
                0 => 'form_div_layout.html.twig',
            ],
            'monolog.use_microseconds' => true,
            'monolog.swift_mailer.handlers' => [

            ],
            'monolog.handlers_to_channels' => [
                'monolog.handler.firephp' => NULL,
                'monolog.handler.console' => NULL,
                'monolog.handler.main' => NULL,
            ],
            'assetic.asset_factory.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\AssetFactory',
            'assetic.asset_manager.class' => 'Assetic\\Factory\\LazyAssetManager',
            'assetic.asset_manager_cache_warmer.class' => 'Symfony\\Bundle\\AsseticBundle\\CacheWarmer\\AssetManagerCacheWarmer',
            'assetic.cached_formula_loader.class' => 'Assetic\\Factory\\Loader\\CachedFormulaLoader',
            'assetic.config_cache.class' => 'Assetic\\Cache\\ConfigCache',
            'assetic.config_loader.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Loader\\ConfigurationLoader',
            'assetic.config_resource.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Resource\\ConfigurationResource',
            'assetic.coalescing_directory_resource.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Resource\\CoalescingDirectoryResource',
            'assetic.directory_resource.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Resource\\DirectoryResource',
            'assetic.filter_manager.class' => 'Symfony\\Bundle\\AsseticBundle\\FilterManager',
            'assetic.worker.ensure_filter.class' => 'Assetic\\Factory\\Worker\\EnsureFilterWorker',
            'assetic.worker.cache_busting.class' => 'Assetic\\Factory\\Worker\\CacheBustingWorker',
            'assetic.value_supplier.class' => 'Symfony\\Bundle\\AsseticBundle\\DefaultValueSupplier',
            'assetic.node.paths' => [

            ],
            'assetic.bundles' => [
                0 => 'PartKeeprFrontendBundle',
                1 => 'PartKeeprMobileFrontendBundle',
            ],
            'assetic.twig_extension.class' => 'Symfony\\Bundle\\AsseticBundle\\Twig\\AsseticExtension',
            'assetic.twig_formula_loader.class' => 'Assetic\\Extension\\Twig\\TwigFormulaLoader',
            'assetic.helper.dynamic.class' => 'Symfony\\Bundle\\AsseticBundle\\Templating\\DynamicAsseticHelper',
            'assetic.helper.static.class' => 'Symfony\\Bundle\\AsseticBundle\\Templating\\StaticAsseticHelper',
            'assetic.php_formula_loader.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Loader\\AsseticHelperFormulaLoader',
            'assetic.debug' => true,
            'assetic.use_controller' => true,
            'assetic.enable_profiler' => false,
            'assetic.variables' => [

            ],
            'assetic.java.bin' => '/usr/bin/java',
            'assetic.node.bin' => '/usr/bin/node',
            'assetic.ruby.bin' => '/usr/bin/ruby',
            'assetic.sass.bin' => '/usr/bin/sass',
            'assetic.reactjsx.bin' => '/usr/bin/jsx',
            'assetic.filter.cssrewrite.class' => 'Assetic\\Filter\\CssRewriteFilter',
            'assetic.twig_extension.functions' => [

            ],
            'assetic.controller.class' => 'Symfony\\Bundle\\AsseticBundle\\Controller\\AsseticController',
            'assetic.routing_loader.class' => 'Symfony\\Bundle\\AsseticBundle\\Routing\\AsseticLoader',
            'assetic.cache.class' => 'Assetic\\Cache\\FilesystemCache',
            'assetic.use_controller_worker.class' => 'Symfony\\Bundle\\AsseticBundle\\Factory\\Worker\\UseControllerWorker',
            'assetic.request_listener.class' => 'Symfony\\Bundle\\AsseticBundle\\EventListener\\RequestListener',
            'doctrine_cache.apc.class' => 'Doctrine\\Common\\Cache\\ApcCache',
            'doctrine_cache.apcu.class' => 'Doctrine\\Common\\Cache\\ApcuCache',
            'doctrine_cache.array.class' => 'Doctrine\\Common\\Cache\\ArrayCache',
            'doctrine_cache.chain.class' => 'Doctrine\\Common\\Cache\\ChainCache',
            'doctrine_cache.couchbase.class' => 'Doctrine\\Common\\Cache\\CouchbaseCache',
            'doctrine_cache.couchbase.connection.class' => 'Couchbase',
            'doctrine_cache.couchbase.hostnames' => 'localhost:8091',
            'doctrine_cache.file_system.class' => 'Doctrine\\Common\\Cache\\FilesystemCache',
            'doctrine_cache.php_file.class' => 'Doctrine\\Common\\Cache\\PhpFileCache',
            'doctrine_cache.memcache.class' => 'Doctrine\\Common\\Cache\\MemcacheCache',
            'doctrine_cache.memcache.connection.class' => 'Memcache',
            'doctrine_cache.memcache.host' => 'localhost',
            'doctrine_cache.memcache.port' => 11211,
            'doctrine_cache.memcached.class' => 'Doctrine\\Common\\Cache\\MemcachedCache',
            'doctrine_cache.memcached.connection.class' => 'Memcached',
            'doctrine_cache.memcached.host' => 'localhost',
            'doctrine_cache.memcached.port' => 11211,
            'doctrine_cache.mongodb.class' => 'Doctrine\\Common\\Cache\\MongoDBCache',
            'doctrine_cache.mongodb.collection.class' => 'MongoCollection',
            'doctrine_cache.mongodb.connection.class' => 'MongoClient',
            'doctrine_cache.mongodb.server' => 'localhost:27017',
            'doctrine_cache.predis.client.class' => 'Predis\\Client',
            'doctrine_cache.predis.scheme' => 'tcp',
            'doctrine_cache.predis.host' => 'localhost',
            'doctrine_cache.predis.port' => 6379,
            'doctrine_cache.redis.class' => 'Doctrine\\Common\\Cache\\RedisCache',
            'doctrine_cache.redis.connection.class' => 'Redis',
            'doctrine_cache.redis.host' => 'localhost',
            'doctrine_cache.redis.port' => 6379,
            'doctrine_cache.riak.class' => 'Doctrine\\Common\\Cache\\RiakCache',
            'doctrine_cache.riak.bucket.class' => 'Riak\\Bucket',
            'doctrine_cache.riak.connection.class' => 'Riak\\Connection',
            'doctrine_cache.riak.bucket_property_list.class' => 'Riak\\BucketPropertyList',
            'doctrine_cache.riak.host' => 'localhost',
            'doctrine_cache.riak.port' => 8087,
            'doctrine_cache.sqlite3.class' => 'Doctrine\\Common\\Cache\\SQLite3Cache',
            'doctrine_cache.sqlite3.connection.class' => 'SQLite3',
            'doctrine_cache.void.class' => 'Doctrine\\Common\\Cache\\VoidCache',
            'doctrine_cache.wincache.class' => 'Doctrine\\Common\\Cache\\WinCacheCache',
            'doctrine_cache.xcache.class' => 'Doctrine\\Common\\Cache\\XcacheCache',
            'doctrine_cache.zenddata.class' => 'Doctrine\\Common\\Cache\\ZendDataCache',
            'doctrine_cache.security.acl.cache.class' => 'Doctrine\\Bundle\\DoctrineCacheBundle\\Acl\\Model\\AclCache',
            'doctrine.dbal.logger.chain.class' => 'Doctrine\\DBAL\\Logging\\LoggerChain',
            'doctrine.dbal.logger.profiling.class' => 'Doctrine\\DBAL\\Logging\\DebugStack',
            'doctrine.dbal.logger.class' => 'Symfony\\Bridge\\Doctrine\\Logger\\DbalLogger',
            'doctrine.dbal.configuration.class' => 'Doctrine\\DBAL\\Configuration',
            'doctrine.data_collector.class' => 'Doctrine\\Bundle\\DoctrineBundle\\DataCollector\\DoctrineDataCollector',
            'doctrine.dbal.connection.event_manager.class' => 'Symfony\\Bridge\\Doctrine\\ContainerAwareEventManager',
            'doctrine.dbal.connection_factory.class' => 'Doctrine\\Bundle\\DoctrineBundle\\ConnectionFactory',
            'doctrine.dbal.events.mysql_session_init.class' => 'Doctrine\\DBAL\\Event\\Listeners\\MysqlSessionInit',
            'doctrine.dbal.events.oracle_session_init.class' => 'Doctrine\\DBAL\\Event\\Listeners\\OracleSessionInit',
            'doctrine.class' => 'Doctrine\\Bundle\\DoctrineBundle\\Registry',
            'doctrine.entity_managers' => [
                'default' => 'doctrine.orm.default_entity_manager',
            ],
            'doctrine.default_entity_manager' => 'default',
            'doctrine.dbal.connection_factory.types' => [

            ],
            'doctrine.connections' => [
                'default' => 'doctrine.dbal.default_connection',
            ],
            'doctrine.default_connection' => 'default',
            'doctrine.orm.configuration.class' => 'Doctrine\\ORM\\Configuration',
            'doctrine.orm.entity_manager.class' => 'Doctrine\\ORM\\EntityManager',
            'doctrine.orm.manager_configurator.class' => 'Doctrine\\Bundle\\DoctrineBundle\\ManagerConfigurator',
            'doctrine.orm.cache.array.class' => 'Doctrine\\Common\\Cache\\ArrayCache',
            'doctrine.orm.cache.apc.class' => 'Doctrine\\Common\\Cache\\ApcCache',
            'doctrine.orm.cache.memcache.class' => 'Doctrine\\Common\\Cache\\MemcacheCache',
            'doctrine.orm.cache.memcache_host' => 'localhost',
            'doctrine.orm.cache.memcache_port' => 11211,
            'doctrine.orm.cache.memcache_instance.class' => 'Memcache',
            'doctrine.orm.cache.memcached.class' => 'Doctrine\\Common\\Cache\\MemcachedCache',
            'doctrine.orm.cache.memcached_host' => 'localhost',
            'doctrine.orm.cache.memcached_port' => 11211,
            'doctrine.orm.cache.memcached_instance.class' => 'Memcached',
            'doctrine.orm.cache.redis.class' => 'Doctrine\\Common\\Cache\\RedisCache',
            'doctrine.orm.cache.redis_host' => 'localhost',
            'doctrine.orm.cache.redis_port' => 6379,
            'doctrine.orm.cache.redis_instance.class' => 'Redis',
            'doctrine.orm.cache.xcache.class' => 'Doctrine\\Common\\Cache\\XcacheCache',
            'doctrine.orm.cache.wincache.class' => 'Doctrine\\Common\\Cache\\WinCacheCache',
            'doctrine.orm.cache.zenddata.class' => 'Doctrine\\Common\\Cache\\ZendDataCache',
            'doctrine.orm.metadata.driver_chain.class' => 'Doctrine\\Common\\Persistence\\Mapping\\Driver\\MappingDriverChain',
            'doctrine.orm.metadata.annotation.class' => 'Doctrine\\ORM\\Mapping\\Driver\\AnnotationDriver',
            'doctrine.orm.metadata.xml.class' => 'Doctrine\\ORM\\Mapping\\Driver\\SimplifiedXmlDriver',
            'doctrine.orm.metadata.yml.class' => 'Doctrine\\ORM\\Mapping\\Driver\\SimplifiedYamlDriver',
            'doctrine.orm.metadata.php.class' => 'Doctrine\\ORM\\Mapping\\Driver\\PHPDriver',
            'doctrine.orm.metadata.staticphp.class' => 'Doctrine\\ORM\\Mapping\\Driver\\StaticPHPDriver',
            'doctrine.orm.proxy_cache_warmer.class' => 'Symfony\\Bridge\\Doctrine\\CacheWarmer\\ProxyCacheWarmer',
            'form.type_guesser.doctrine.class' => 'Symfony\\Bridge\\Doctrine\\Form\\DoctrineOrmTypeGuesser',
            'doctrine.orm.validator.unique.class' => 'Symfony\\Bridge\\Doctrine\\Validator\\Constraints\\UniqueEntityValidator',
            'doctrine.orm.validator_initializer.class' => 'Symfony\\Bridge\\Doctrine\\Validator\\DoctrineInitializer',
            'doctrine.orm.security.user.provider.class' => 'Symfony\\Bridge\\Doctrine\\Security\\User\\EntityUserProvider',
            'doctrine.orm.listeners.resolve_target_entity.class' => 'Doctrine\\ORM\\Tools\\ResolveTargetEntityListener',
            'doctrine.orm.listeners.attach_entity_listeners.class' => 'Doctrine\\ORM\\Tools\\AttachEntityListenersListener',
            'doctrine.orm.naming_strategy.default.class' => 'Doctrine\\ORM\\Mapping\\DefaultNamingStrategy',
            'doctrine.orm.naming_strategy.underscore.class' => 'Doctrine\\ORM\\Mapping\\UnderscoreNamingStrategy',
            'doctrine.orm.quote_strategy.default.class' => 'Doctrine\\ORM\\Mapping\\DefaultQuoteStrategy',
            'doctrine.orm.quote_strategy.ansi.class' => 'Doctrine\\ORM\\Mapping\\AnsiQuoteStrategy',
            'doctrine.orm.entity_listener_resolver.class' => 'Doctrine\\Bundle\\DoctrineBundle\\Mapping\\ContainerAwareEntityListenerResolver',
            'doctrine.orm.second_level_cache.default_cache_factory.class' => 'Doctrine\\ORM\\Cache\\DefaultCacheFactory',
            'doctrine.orm.second_level_cache.default_region.class' => 'Doctrine\\ORM\\Cache\\Region\\DefaultRegion',
            'doctrine.orm.second_level_cache.filelock_region.class' => 'Doctrine\\ORM\\Cache\\Region\\FileLockRegion',
            'doctrine.orm.second_level_cache.logger_chain.class' => 'Doctrine\\ORM\\Cache\\Logging\\CacheLoggerChain',
            'doctrine.orm.second_level_cache.logger_statistics.class' => 'Doctrine\\ORM\\Cache\\Logging\\StatisticsCacheLogger',
            'doctrine.orm.second_level_cache.cache_configuration.class' => 'Doctrine\\ORM\\Cache\\CacheConfiguration',
            'doctrine.orm.second_level_cache.regions_configuration.class' => 'Doctrine\\ORM\\Cache\\RegionsConfiguration',
            'doctrine.orm.auto_generate_proxy_classes' => true,
            'doctrine.orm.proxy_namespace' => 'Proxies',
            'swiftmailer.mailer.default.transport.name' => 'smtp',
            'swiftmailer.mailer.default.transport.smtp.encryption' => NULL,
            'swiftmailer.mailer.default.transport.smtp.port' => 25,
            'swiftmailer.mailer.default.transport.smtp.host' => 'localhost',
            'swiftmailer.mailer.default.transport.smtp.username' => NULL,
            'swiftmailer.mailer.default.transport.smtp.password' => NULL,
            'swiftmailer.mailer.default.transport.smtp.auth_mode' => NULL,
            'swiftmailer.mailer.default.transport.smtp.timeout' => 30,
            'swiftmailer.mailer.default.transport.smtp.source_ip' => NULL,
            'swiftmailer.mailer.default.transport.smtp.local_domain' => NULL,
            'swiftmailer.mailer.default.spool.enabled' => false,
            'swiftmailer.mailer.default.plugin.impersonate' => NULL,
            'swiftmailer.mailer.default.single_address' => NULL,
            'swiftmailer.mailer.default.delivery.enabled' => true,
            'swiftmailer.spool.enabled' => false,
            'swiftmailer.delivery.enabled' => true,
            'swiftmailer.single_address' => NULL,
            'swiftmailer.mailers' => [
                'default' => 'swiftmailer.mailer.default',
            ],
            'swiftmailer.default_mailer' => 'default',
            'fos_user.backend_type_orm' => true,
            'fos_user.security.interactive_login_listener.class' => 'FOS\\UserBundle\\EventListener\\LastLoginListener',
            'fos_user.security.login_manager.class' => 'FOS\\UserBundle\\Security\\LoginManager',
            'fos_user.resetting.email.template' => '@FOSUser/Resetting/email.txt.twig',
            'fos_user.registration.confirmation.template' => '@FOSUser/Registration/email.txt.twig',
            'fos_user.storage' => 'orm',
            'fos_user.firewall_name' => 'main',
            'fos_user.model_manager_name' => NULL,
            'fos_user.model.user.class' => 'PartKeepr\\AuthBundle\\Entity\\FOSUser',
            'fos_user.profile.form.type' => 'FOS\\UserBundle\\Form\\Type\\ProfileFormType',
            'fos_user.profile.form.name' => 'fos_user_profile_form',
            'fos_user.profile.form.validation_groups' => [
                0 => 'Profile',
                1 => 'Default',
            ],
            'fos_user.registration.confirmation.from_email' => [
                'yourapp@yourapp.com' => 'Demo String',
            ],
            'fos_user.registration.confirmation.enabled' => false,
            'fos_user.registration.form.type' => 'FOS\\UserBundle\\Form\\Type\\RegistrationFormType',
            'fos_user.registration.form.name' => 'fos_user_registration_form',
            'fos_user.registration.form.validation_groups' => [
                0 => 'Registration',
                1 => 'Default',
            ],
            'fos_user.change_password.form.type' => 'FOS\\UserBundle\\Form\\Type\\ChangePasswordFormType',
            'fos_user.change_password.form.name' => 'fos_user_change_password_form',
            'fos_user.change_password.form.validation_groups' => [
                0 => 'ChangePassword',
                1 => 'Default',
            ],
            'fos_user.resetting.email.from_email' => [
                'yourapp@yourapp.com' => 'Demo String',
            ],
            'fos_user.resetting.retry_ttl' => 7200,
            'fos_user.resetting.token_ttl' => 86400,
            'fos_user.resetting.form.type' => 'FOS\\UserBundle\\Form\\Type\\ResettingFormType',
            'fos_user.resetting.form.name' => 'fos_user_resetting_form',
            'fos_user.resetting.form.validation_groups' => [
                0 => 'ResetPassword',
                1 => 'Default',
            ],
            'sensio_framework_extra.view.guesser.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\Templating\\TemplateGuesser',
            'sensio_framework_extra.controller.listener.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ControllerListener',
            'sensio_framework_extra.routing.loader.annot_dir.class' => 'Symfony\\Component\\Routing\\Loader\\AnnotationDirectoryLoader',
            'sensio_framework_extra.routing.loader.annot_file.class' => 'Symfony\\Component\\Routing\\Loader\\AnnotationFileLoader',
            'sensio_framework_extra.routing.loader.annot_class.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\Routing\\AnnotatedRouteControllerLoader',
            'sensio_framework_extra.converter.listener.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\ParamConverterListener',
            'sensio_framework_extra.converter.manager.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\Request\\ParamConverter\\ParamConverterManager',
            'sensio_framework_extra.converter.doctrine.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\Request\\ParamConverter\\DoctrineParamConverter',
            'sensio_framework_extra.converter.datetime.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\Request\\ParamConverter\\DateTimeParamConverter',
            'sensio_framework_extra.view.listener.class' => 'Sensio\\Bundle\\FrameworkExtraBundle\\EventListener\\TemplateListener',
            'sprite.class' => 'SpriteGenerator\\Services\\SpriteService',
            'doctrine_migrations.namespace' => 'PartKeepr\\CoreBundle\\DoctrineMigrations',
            'doctrine_migrations.table_name' => 'SchemaVersions',
            'doctrine_migrations.name' => 'Application Migrations',
            'doctrine_migrations.organize_migrations' => false,
            'stof_doctrine_extensions.event_listener.locale.class' => 'Stof\\DoctrineExtensionsBundle\\EventListener\\LocaleListener',
            'stof_doctrine_extensions.event_listener.logger.class' => 'Stof\\DoctrineExtensionsBundle\\EventListener\\LoggerListener',
            'stof_doctrine_extensions.event_listener.blame.class' => 'Stof\\DoctrineExtensionsBundle\\EventListener\\BlameListener',
            'stof_doctrine_extensions.uploadable.manager.class' => 'Stof\\DoctrineExtensionsBundle\\Uploadable\\UploadableManager',
            'stof_doctrine_extensions.uploadable.mime_type_guesser.class' => 'Stof\\DoctrineExtensionsBundle\\Uploadable\\MimeTypeGuesserAdapter',
            'stof_doctrine_extensions.uploadable.default_file_info.class' => 'Stof\\DoctrineExtensionsBundle\\Uploadable\\UploadedFileInfo',
            'stof_doctrine_extensions.default_locale' => 'en_US',
            'stof_doctrine_extensions.default_file_path' => NULL,
            'stof_doctrine_extensions.translation_fallback' => false,
            'stof_doctrine_extensions.persist_default_translation' => false,
            'stof_doctrine_extensions.skip_translation_on_load' => false,
            'stof_doctrine_extensions.uploadable.validate_writable_directory' => true,
            'stof_doctrine_extensions.listener.translatable.class' => 'Gedmo\\Translatable\\TranslatableListener',
            'stof_doctrine_extensions.listener.timestampable.class' => 'Gedmo\\Timestampable\\TimestampableListener',
            'stof_doctrine_extensions.listener.blameable.class' => 'Gedmo\\Blameable\\BlameableListener',
            'stof_doctrine_extensions.listener.sluggable.class' => 'Gedmo\\Sluggable\\SluggableListener',
            'stof_doctrine_extensions.listener.tree.class' => 'Gedmo\\Tree\\TreeListener',
            'stof_doctrine_extensions.listener.loggable.class' => 'Gedmo\\Loggable\\LoggableListener',
            'stof_doctrine_extensions.listener.sortable.class' => 'Gedmo\\Sortable\\SortableListener',
            'stof_doctrine_extensions.listener.softdeleteable.class' => 'Gedmo\\SoftDeleteable\\SoftDeleteableListener',
            'stof_doctrine_extensions.listener.uploadable.class' => 'Gedmo\\Uploadable\\UploadableListener',
            'stof_doctrine_extensions.listener.reference_integrity.class' => 'Gedmo\\ReferenceIntegrity\\ReferenceIntegrityListener',
            'knp_gaufrette.filesystem_map.class' => 'Knp\\Bundle\\GaufretteBundle\\FilesystemMap',
            'api_platform.title' => 'PartKeepr',
            'api_platform.description' => '',
            'api_platform.version' => '0.0.1',
            'api_platform.exception_to_status' => [
                'Symfony\\Component\\Serializer\\Exception\\ExceptionInterface' => 400,
                'ApiPlatform\\Core\\Exception\\InvalidArgumentException' => 400,
            ],
            'api_platform.formats' => [
                'jsonld' => [
                    0 => 'application/ld+json',
                ],
                'json' => [
                    0 => 'application/json',
                ],
                'html' => [
                    0 => 'text/html',
                ],
            ],
            'api_platform.error_formats' => [
                'jsonproblem' => [
                    0 => 'application/problem+json',
                ],
                'jsonld' => [
                    0 => 'application/ld+json',
                ],
            ],
            'api_platform.eager_loading.enabled' => true,
            'api_platform.eager_loading.max_joins' => 30,
            'api_platform.eager_loading.fetch_partial' => false,
            'api_platform.eager_loading.force_eager' => true,
            'api_platform.collection.order' => NULL,
            'api_platform.collection.order_parameter_name' => 'order',
            'api_platform.collection.pagination.enabled' => true,
            'api_platform.collection.pagination.client_enabled' => false,
            'api_platform.collection.pagination.client_items_per_page' => false,
            'api_platform.collection.pagination.items_per_page' => 30,
            'api_platform.collection.pagination.maximum_items_per_page' => NULL,
            'api_platform.collection.pagination.page_parameter_name' => 'page',
            'api_platform.collection.pagination.enabled_parameter_name' => 'pagination',
            'api_platform.collection.pagination.items_per_page_parameter_name' => 'itemsPerPage',
            'api_platform.enable_swagger_ui' => true,
            'api_platform.enable_swagger' => true,
            'web_profiler.debug_toolbar.position' => 'bottom',
            'liip_functional_test.cache_sqlite_db' => false,
            'liip_functional_test.command_verbosity' => 'normal',
            'liip_functional_test.command_decoration' => true,
            'liip_functional_test.query.max_query_count' => NULL,
            'liip_functional_test.authentication.username' => '',
            'liip_functional_test.authentication.password' => '',
            'liip_functional_test.html5validation.url' => 'https://validator.nu/',
            'liip_functional_test.html5validation.ignores' => [

            ],
            'liip_functional_test.html5validation.ignores_extract' => [

            ],
            'liip_functional_test.paratest.process' => 5,
            'liip_functional_test.paratest.phpunit' => './bin/phpunit',
            'security.authentication.manager.class' => 'PartKeepr\\AuthBundle\\Security\\Authentication\\AuthenticationProviderManager',
            'security.authentication.basic_entry_point.class' => 'PartKeepr\\AuthBundle\\Security\\EntryPoint\\NullEntryPoint',
            'partkeepr.cronjob_check' => false,
            'partkeepr.authentication_provider' => 'PartKeepr.Auth.HTTPBasicAuthenticationProvider',
            'partkeepr.tip_of_the_day_list' => 'https://partkeepr.org/tips.json',
            'partkeepr.tip_of_the_day_uri' => 'https://partkeepr.org/tips/%s',
            'partkeepr.required_cronjobs' => [
                0 => 'partkeepr:cron:synctips',
            ],
            'partkeepr.statistic.service.class' => 'PartKeepr\\StatisticBundle\\Services\\StatisticService',
            'data_collector.templates' => [
                'data_collector.request' => [
                    0 => 'request',
                    1 => '@WebProfiler/Collector/request.html.twig',
                ],
                'data_collector.time' => [
                    0 => 'time',
                    1 => '@WebProfiler/Collector/time.html.twig',
                ],
                'data_collector.memory' => [
                    0 => 'memory',
                    1 => '@WebProfiler/Collector/memory.html.twig',
                ],
                'data_collector.validator' => [
                    0 => 'validator',
                    1 => '@WebProfiler/Collector/validator.html.twig',
                ],
                'data_collector.ajax' => [
                    0 => 'ajax',
                    1 => '@WebProfiler/Collector/ajax.html.twig',
                ],
                'data_collector.form' => [
                    0 => 'form',
                    1 => '@WebProfiler/Collector/form.html.twig',
                ],
                'data_collector.exception' => [
                    0 => 'exception',
                    1 => '@WebProfiler/Collector/exception.html.twig',
                ],
                'data_collector.logger' => [
                    0 => 'logger',
                    1 => '@WebProfiler/Collector/logger.html.twig',
                ],
                'data_collector.events' => [
                    0 => 'events',
                    1 => '@WebProfiler/Collector/events.html.twig',
                ],
                'data_collector.router' => [
                    0 => 'router',
                    1 => '@WebProfiler/Collector/router.html.twig',
                ],
                'data_collector.cache' => [
                    0 => 'cache',
                    1 => '@WebProfiler/Collector/cache.html.twig',
                ],
                'data_collector.translation' => [
                    0 => 'translation',
                    1 => '@WebProfiler/Collector/translation.html.twig',
                ],
                'data_collector.security' => [
                    0 => 'security',
                    1 => '@Security/Collector/security.html.twig',
                ],
                'data_collector.twig' => [
                    0 => 'twig',
                    1 => '@WebProfiler/Collector/twig.html.twig',
                ],
                'data_collector.doctrine' => [
                    0 => 'db',
                    1 => '@Doctrine/Collector/db.html.twig',
                ],
                'swiftmailer.data_collector' => [
                    0 => 'swiftmailer',
                    1 => '@Swiftmailer/Collector/swiftmailer.html.twig',
                ],
                'data_collector.config' => [
                    0 => 'config',
                    1 => '@WebProfiler/Collector/config.html.twig',
                ],
            ],
            'console.command.ids' => [
                'console.command.symfony_bundle_frameworkbundle_command_aboutcommand' => 'console.command.about',
                'console.command.symfony_bundle_frameworkbundle_command_assetsinstallcommand' => 'console.command.assets_install',
                'console.command.symfony_bundle_frameworkbundle_command_cacheclearcommand' => 'console.command.cache_clear',
                'console.command.symfony_bundle_frameworkbundle_command_cachepoolclearcommand' => 'console.command.cache_pool_clear',
                'console.command.symfony_bundle_frameworkbundle_command_cachepoolprunecommand' => 'console.command.cache_pool_prune',
                'console.command.symfony_bundle_frameworkbundle_command_cachewarmupcommand' => 'console.command.cache_warmup',
                'console.command.symfony_bundle_frameworkbundle_command_configdebugcommand' => 'console.command.config_debug',
                'console.command.symfony_bundle_frameworkbundle_command_configdumpreferencecommand' => 'console.command.config_dump_reference',
                'console.command.symfony_bundle_frameworkbundle_command_containerdebugcommand' => 'console.command.container_debug',
                'console.command.symfony_bundle_frameworkbundle_command_debugautowiringcommand' => 'console.command.debug_autowiring',
                'console.command.symfony_bundle_frameworkbundle_command_eventdispatcherdebugcommand' => 'console.command.event_dispatcher_debug',
                'console.command.symfony_bundle_frameworkbundle_command_routerdebugcommand' => 'console.command.router_debug',
                'console.command.symfony_bundle_frameworkbundle_command_routermatchcommand' => 'console.command.router_match',
                'console.command.symfony_bundle_frameworkbundle_command_translationdebugcommand' => 'console.command.translation_debug',
                'console.command.symfony_bundle_frameworkbundle_command_translationupdatecommand' => 'console.command.translation_update',
                'console.command.symfony_bundle_frameworkbundle_command_xlifflintcommand' => 'console.command.xliff_lint',
                'console.command.symfony_bundle_frameworkbundle_command_yamllintcommand' => 'console.command.yaml_lint',
                'console.command.symfony_component_form_command_debugcommand' => 'console.command.form_debug',
                'console.command.symfony_bundle_securitybundle_command_userpasswordencodercommand' => 'security.command.user_password_encoder',
                'console.command.symfony_bridge_twig_command_debugcommand' => 'twig.command.debug',
                'console.command.symfony_bundle_twigbundle_command_lintcommand' => 'twig.command.lint',
                'console.command.doctrine_bundle_doctrinecachebundle_command_containscommand' => 'console.command.doctrine_bundle_doctrinecachebundle_command_containscommand',
                'console.command.doctrine_bundle_doctrinecachebundle_command_deletecommand' => 'console.command.doctrine_bundle_doctrinecachebundle_command_deletecommand',
                'console.command.doctrine_bundle_doctrinecachebundle_command_flushcommand' => 'console.command.doctrine_bundle_doctrinecachebundle_command_flushcommand',
                'console.command.doctrine_bundle_doctrinecachebundle_command_statscommand' => 'console.command.doctrine_bundle_doctrinecachebundle_command_statscommand',
                'console.command.doctrine_bundle_doctrinebundle_command_createdatabasedoctrinecommand' => 'doctrine.database_create_command',
                'console.command.doctrine_bundle_doctrinebundle_command_dropdatabasedoctrinecommand' => 'doctrine.database_drop_command',
                'console.command.doctrine_bundle_doctrinebundle_command_generateentitiesdoctrinecommand' => 'doctrine.generate_entities_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_runsqldoctrinecommand' => 'doctrine.query_sql_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_clearmetadatacachedoctrinecommand' => 'doctrine.cache_clear_metadata_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_clearquerycachedoctrinecommand' => 'doctrine.cache_clear_query_cache_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_clearresultcachedoctrinecommand' => 'doctrine.cache_clear_result_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_collectionregiondoctrinecommand' => 'doctrine.cache_collection_region_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_convertmappingdoctrinecommand' => 'doctrine.mapping_convert_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_createschemadoctrinecommand' => 'doctrine.schema_create_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_dropschemadoctrinecommand' => 'doctrine.schema_drop_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_ensureproductionsettingsdoctrinecommand' => 'doctrine.ensure_production_settings_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_entityregioncachedoctrinecommand' => 'doctrine.clear_entity_region_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_importdoctrinecommand' => 'doctrine.database_import_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_infodoctrinecommand' => 'doctrine.mapping_info_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_queryregioncachedoctrinecommand' => 'doctrine.clear_query_region_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_rundqldoctrinecommand' => 'doctrine.query_dql_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_updateschemadoctrinecommand' => 'doctrine.schema_update_command',
                'console.command.doctrine_bundle_doctrinebundle_command_proxy_validateschemacommand' => 'doctrine.schema_validate_command',
                'console.command.doctrine_bundle_doctrinebundle_command_importmappingdoctrinecommand' => 'doctrine.mapping_import_command',
                'console.command.fos_userbundle_command_activateusercommand' => 'fos_user.command.activate_user',
                'console.command.fos_userbundle_command_changepasswordcommand' => 'fos_user.command.change_password',
                'console.command.fos_userbundle_command_createusercommand' => 'fos_user.command.create_user',
                'console.command.fos_userbundle_command_deactivateusercommand' => 'fos_user.command.deactivate_user',
                'console.command.fos_userbundle_command_demoteusercommand' => 'fos_user.command.demote_user',
                'console.command.fos_userbundle_command_promoteusercommand' => 'fos_user.command.promote_user',
                'console.command.doctrine_bundle_fixturesbundle_command_loaddatafixturesdoctrinecommand' => 'doctrine.fixtures_load_command',
                'console.command.knp_bundle_gaufrettebundle_command_filesystemkeyscommand' => 'knp_gaufrette.command.filesystem_keys',
                'console.command.apiplatform_core_bridge_symfony_bundle_command_swaggercommand' => 'console.command.apiplatform_core_bridge_symfony_bundle_command_swaggercommand',
                'console.command.sensiolabs_security_command_securitycheckercommand' => 'sensio_distribution.security_checker.command',
                'console.command.liip_functionaltestbundle_command_runparatestcommand' => 'console.command.liip_functionaltestbundle_command_runparatestcommand',
                'console.command.liip_functionaltestbundle_command_testcommand' => 'console.command.liip_functionaltestbundle_command_testcommand',
            ],
            'console.lazy_command.ids' => [
                'console.command.about' => true,
                'console.command.assets_install' => true,
                'console.command.cache_clear' => true,
                'console.command.cache_pool_clear' => true,
                'console.command.cache_pool_prune' => true,
                'console.command.cache_warmup' => true,
                'console.command.config_debug' => true,
                'console.command.config_dump_reference' => true,
                'console.command.container_debug' => true,
                'console.command.debug_autowiring' => true,
                'console.command.event_dispatcher_debug' => true,
                'console.command.router_debug' => true,
                'console.command.router_match' => true,
                'console.command.translation_debug' => true,
                'console.command.translation_update' => true,
                'console.command.xliff_lint' => true,
                'console.command.yaml_lint' => true,
                'console.command.form_debug' => true,
                'security.command.user_password_encoder' => true,
                'twig.command.debug' => true,
                'twig.command.lint' => true,
                'doctrine.database_create_command' => true,
                'doctrine.database_drop_command' => true,
                'doctrine.generate_entities_command' => true,
                'doctrine.query_sql_command' => true,
                'doctrine.cache_clear_metadata_command' => true,
                'doctrine.cache_clear_query_cache_command' => true,
                'doctrine.cache_clear_result_command' => true,
                'doctrine.cache_collection_region_command' => true,
                'doctrine.mapping_convert_command' => true,
                'doctrine.schema_create_command' => true,
                'doctrine.schema_drop_command' => true,
                'doctrine.ensure_production_settings_command' => true,
                'doctrine.clear_entity_region_command' => true,
                'doctrine.database_import_command' => true,
                'doctrine.mapping_info_command' => true,
                'doctrine.clear_query_region_command' => true,
                'doctrine.query_dql_command' => true,
                'doctrine.schema_update_command' => true,
                'doctrine.schema_validate_command' => true,
                'doctrine.mapping_import_command' => true,
                'fos_user.command.activate_user' => true,
                'fos_user.command.change_password' => true,
                'fos_user.command.create_user' => true,
                'fos_user.command.deactivate_user' => true,
                'fos_user.command.demote_user' => true,
                'fos_user.command.promote_user' => true,
                'doctrine.fixtures_load_command' => true,
                'knp_gaufrette.command.filesystem_keys' => true,
                'sensio_distribution.security_checker.command' => true,
            ],
        ];
    }
}
