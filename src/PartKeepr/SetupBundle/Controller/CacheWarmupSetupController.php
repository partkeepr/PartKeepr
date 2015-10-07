<?php
namespace PartKeepr\SetupBundle\Controller;

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
            $warmer = $this->get('cache_warmer');
            $warmer->enableOptionalWarmers();
            $warmer->warmUp($this->getParameter('kernel.cache_dir'));

            $reflectionService = $this->get("doctrine_reflection_service");
            $cacheDir = $this->get("kernel")->getCacheDir();
            $reflectionService->createCache($cacheDir);
        } catch (\Exception $e) {
            $response["success"] = false;
            $response["message"] = "Cache warm up error";
            $response["errors"] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/warmupCache")
     */
    public function cacheWarmupAction(Request $request)
    {
        // Clear old cache
        $cacheDir = $this->get("kernel")->getRootDir()."/cache/prod";

        $filesystem = $this->get("filesystem");
        $filesystem->remove($cacheDir);

        $response = $this->handleRequest($request, "/setup/_int_cache_warmup", array(), "prod");

        return new Response($response->getContent());
    }
}
