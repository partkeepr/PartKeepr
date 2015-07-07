<?php
namespace PartKeepr\DoctrineReflectionBundle\CacheWarmer;


use Doctrine\Common\Persistence\ManagerRegistry;
use Symfony\Component\DependencyInjection\Container;
use PartKeepr\DoctrineReflectionBundle\Services\ReflectionService;
use Symfony\Component\HttpKernel\CacheWarmer\CacheWarmer;

class ModelCacheWarmer extends CacheWarmer{

    private $registry;
    private $reflectionService;
    private $container;

    /**
     * Constructor.
     *
     * @param ManagerRegistry $registry A ManagerRegistry instance
     */
    public function __construct(ManagerRegistry $registry, ReflectionService $reflectionService, Container $container)
    {
        $this->reflectionService = $reflectionService;
        $this->registry = $registry;
        $this->container = $container;
    }

    /**
     * This cache warmer is not optional, without proxies fatal error occurs!
     *
     * @return false
     */
    public function isOptional()
    {
        return false;
    }

    /**
     * {@inheritdoc}
     */
    public function warmUp($cacheDir)
    {
        if ($this->container->getParameter("partkeepr.auto_generate_extjs_models")) {
            echo "FOO";
            $cacheDir .= "/doctrinereflection";

            $entities = $this->reflectionService->getEntities();

            foreach ($entities as $entity) {
                $model = $this->reflectionService->getEntity($entity);

                @mkdir($cacheDir, 0777, true);
                $this->writeCacheFile($cacheDir."/".$entity.'.js', $model);
            }
        }

    }
}