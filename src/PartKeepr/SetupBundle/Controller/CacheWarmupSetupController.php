<?php
namespace PartKeepr\SetupBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Console\Application;
use Symfony\Component\Console\Input\ArrayInput;
use Symfony\Component\Console\Output\NullOutput;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CacheWarmupSetupController extends SetupController
{
    /**
     * @Route("/setup/_int_cache_warmup")
     */
    public function intSetupSchemaAction()
    {
        $response = array(
            "success" => true,
            "errors" => [],
            "message" => "Cache successfully warmed up",
        );

        try {
            $kernel = $this->get('kernel');
            $application = new Application($kernel);
            $application->setAutoExit(false);
            $output = new NullOutput();

            $input = new ArrayInput(array(
                'command' => 'cache:warmup',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'nfq:sprite:generate',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'assets:install',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'generate:extjs:entities',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'assetic:dump',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'partkeepr:update-category-paths',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'partkeepr:cron:clear',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'partkeepr:cron:versioncheck',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'partkeepr:cron:synctips',
            ));

            $application->run($input, $output);

            $input = new ArrayInput(array(
                'command' => 'partkeepr:cron:create-statistic-snapshot',
            ));

            $application->run($input, $output);

        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Cache warm up error";
            $response["errors"] = [$e->getMessage(), $e->getTrace()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/warmupCache")
     */
    public function cacheWarmupAction(Request $request)
    {
        // Clear old cache. We don't do that directly as it could happen that old files are loaded prior clearing the cache
        $cacheDir = $this->get("kernel")->getRootDir()."/cache/prod";

        $filesystem = $this->get("filesystem");
        $filesystem->remove($cacheDir);

        $response = $this->handleRequest($request, "/setup/_int_cache_warmup", array(), "prod");

        return new Response($response->getContent());
    }
}
