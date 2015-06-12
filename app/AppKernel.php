<?php

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\HttpKernel\Kernel;

class AppKernel extends Kernel
{
    /**
     * @todo Remove this after successful migration so SF2
     * @var \AppKernel
     */
    private static $kernel = null;

    /**
     * Temporary constructor to inject the service container.
     *
     * @todo Remove this after successful migration to SF2
     * @param string $environment
     * @param bool   $debug
     */
    public function __construct ($environment, $debug) {
        parent::__construct($environment, $debug);

        AppKernel::$kernel = $this;
    }

    /**
     * Returns the service container
     *
     * @todo Remove this after successful migration to SF2
     * @return null|\Symfony\Component\DependencyInjection\ContainerInterface
     */
    public static function getMigrationContainer () {
        if (self::$kernel instanceof \AppKernel) {
            if (!self::$kernel->getContainer() instanceof Container) {
                self::$kernel->boot();
            }
            return self::$kernel->getContainer();
        }

        return null;
    }

    public function registerBundles()
    {
        // Base 3rd party bundles required for PartKeepr operation
        $bundles = array(
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new FOS\RestBundle\FOSRestBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new Nelmio\ApiDocBundle\NelmioApiDocBundle(),
            new \Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle(),
            new PartKeepr\DoctrineReflectionBundle\PartKeeprDoctrineReflectionBundle(),
            new PartKeepr\RESTBundle\PartKeeprRESTBundle(),
            new PartKeepr\ApiDocBundle\PartKeeprApiDocBundle(),
            new PartKeepr\UnitBundle\PartKeeprUnitBundle(),
            new Dunglas\ApiBundle\DunglasApiBundle(),
        );

        // Developer bundles
        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
            $bundles[] = new Liip\FunctionalTestBundle\LiipFunctionalTestBundle();
        }

        // PartKeepr bundles
        $bundles[] = new PartKeepr\FrontendBundle\PartKeeprFrontendBundle();
        $bundles[] = new PartKeepr\SiPrefixBundle\PartKeeprSiPrefixBundle();
        $bundles[] = new PartKeepr\AuthBundle\PartKeeprAuthBundle();

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }
}
