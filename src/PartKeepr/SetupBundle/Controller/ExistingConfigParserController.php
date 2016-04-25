<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ExistingConfigParserController extends SetupBaseController
{
    /**
     * @Route("/setup/parseExistingConfig")
     *
     * @param Request $request
     *
     * @return JsonResponse
     */
    public function parseExistingConfigAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Existing configuration imported successfully',
        ];

        try {
            $response['config'] = $this->get('partkeepr.setup.config_service')->configParser();

            if (count($response['config']) == 0) {
                $response['config'] = $this->getLegacyConfig();
            }

            if (count($response['config']) == 0) {
                $response['message'] = 'No configuration found';
                $response['existingConfig'] = false;
            } else {
                $response['existingConfig'] = true;
            }
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Configuration parse error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    protected function getLegacyConfig()
    {
        $config = [];

        $legacyConfig = $this->get('partkeepr.setup.config_service')->legacyConfigParser();

        if (count($legacyConfig) > 0) {
            if (array_key_exists('partkeepr.database.driver', $legacyConfig)) {
                $config['database_driver'] = $legacyConfig['partkeepr.database.driver'];
            }

            if (array_key_exists('partkeepr.database.hostname', $legacyConfig)) {
                $config['database_host'] = $legacyConfig['partkeepr.database.hostname'];
            }

            if (array_key_exists('partkeepr.database.username', $legacyConfig)) {
                $config['database_user'] = $legacyConfig['partkeepr.database.username'];
            }

            if (array_key_exists('partkeepr.database.password', $legacyConfig)) {
                $config['database_password'] = $legacyConfig['partkeepr.database.password'];
            }

            if (array_key_exists('partkeepr.database.dbname', $legacyConfig)) {
                $config['database_name'] = $legacyConfig['partkeepr.database.dbname'];
            }

            if (array_key_exists('partkeepr.database.port', $legacyConfig)) {
                $config['database_port'] = $legacyConfig['partkeepr.database.port'];
            }

            $config['authentication_provider'] = 'PartKeepr.Auth.HTTPBasicAuthenticationProvider';

            if (array_key_exists('partkeepr.frontend.motd', $legacyConfig)) {
                $config['partkeepr.frontend.motd'] = $legacyConfig['partkeepr.frontend.motd'];
            }

            if (array_key_exists('partkeepr.frontend.autologin.enabled', $legacyConfig)) {
                $config['partkeepr.frontend.auto_login.enabled'] = $legacyConfig['partkeepr.frontend.autologin.enabled'];
            }

            if (array_key_exists('partkeepr.frontend.autologin.username', $legacyConfig)) {
                $config['partkeepr.frontend.auto_login.username'] = $legacyConfig['partkeepr.frontend.autologin.username'];
            }

            if (array_key_exists('partkeepr.frontend.autologin.password', $legacyConfig)) {
                $config['partkeepr.frontend.auto_login.password'] = $legacyConfig['partkeepr.frontend.autologin.password'];
            }

            if (array_key_exists('partkeepr.cronjobs.disablecheck', $legacyConfig)) {
                $config['partkeepr.cronjob.check'] = $legacyConfig['partkeepr.cronjobs.disablecheck'];
            }

            if (array_key_exists('partkeepr.category.path_separator', $legacyConfig)) {
                $config['partkeepr.category.path_separator'] = $legacyConfig['partkeepr.category.path_separator'];
            }

            if (array_key_exists('partkeepr.frontend.allow_password_change', $legacyConfig)) {
                $config['partkeepr.auth.allow_password_change'] = $legacyConfig['partkeepr.frontend.allow_password_change'];
            }

            if (array_key_exists('partkeepr.files.path', $legacyConfig)) {
                $config['partkeepr.filesystem.data_directory'] = $legacyConfig['partkeepr.files.path'];
            }
        }

        return $config;
    }
}
