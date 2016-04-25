<?php

namespace PartKeepr\SetupBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CacheWarmupSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_cache_warmup")
     */
    public function intCacheWarmupAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Cache successfully warmed up',
        ];

        try {
            $kernel = $this->get('kernel');
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $output = new NullOutput();

            $input = new ArrayInput([
                'command' => 'cache:warmup',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'nfq:sprite:generate',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'assets:install',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'generate:extjs:entities',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'assetic:dump',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'partkeepr:update-category-paths',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'partkeepr:cron:clear',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'partkeepr:cron:versioncheck',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'partkeepr:cron:synctips',
            ]);

            $application->run($input, $output);

            $input = new ArrayInput([
                'command' => 'partkeepr:cron:create-statistic-snapshot',
            ]);

            $application->run($input, $output);

            if (function_exists('apc_clear_cache')) {
                apc_clear_cache();
            }
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Cache warm up error';
            $response['errors'] = [$e->getMessage(), $e->getTrace()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/warmupCache")
     */
    public function cacheWarmupAction(Request $request)
    {
        // Clear old cache. We don't do that directly as it could happen that old files are loaded prior clearing the cache
        $cacheDir = $this->get('kernel')->getRootDir().'/cache/prod';

        $filesystem = $this->get('filesystem');
        $filesystem->remove($cacheDir);

        $response = $this->handleRequest($request, '/setup/_int_cache_warmup', [], 'prod');

        return new Response($response->getContent());
    }
}
