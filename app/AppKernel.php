<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

class AppKernel extends Kernel
{
    public function registerBundles()
    {
        // Base 3rd party bundles required for PartKeepr operation
        $bundles = [
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new Symfony\Bundle\AsseticBundle\AsseticBundle(),
            new FOS\RestBundle\FOSRestBundle(),
            new FOS\UserBundle\FOSUserBundle(),
            new \Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle(),
            new PartKeepr\DoctrineReflectionBundle\PartKeeprDoctrineReflectionBundle(),
            new PartKeepr\RESTBundle\PartKeeprRESTBundle(),
            new Escape\WSSEAuthenticationBundle\EscapeWSSEAuthenticationBundle(),
            new SpriteGenerator\SpriteGeneratorBundle(),
            new ApiPlatform\Core\Bridge\Symfony\Bundle\ApiPlatformBundle(),
            new Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle(),
            new Brainbits\FugueIconsBundle\BrainbitsFugueIconsBundle(),
            new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
            new \PartKeepr\RemoteFileLoader\PartKeeprRemoteFileLoaderBundle(),
            new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle(),
//          new AppBundle\AppBundle(),
        ];

        // Developer bundles
        if (in_array($this->getEnvironment(), ['dev', 'test'], true)) {
            $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
            $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
            $bundles[] = new Liip\FunctionalTestBundle\LiipFunctionalTestBundle();
        }

        // PartKeepr bundles
        $bundles[] = new \PartKeepr\SetupBundle\PartKeeprSetupBundle();
        $bundles[] = new PartKeepr\CronLoggerBundle\PartKeeprCronLoggerBundle();
        $bundles[] = new PartKeepr\CategoryBundle\PartKeeprCategoryBundle();
        $bundles[] = new PartKeepr\UploadedFileBundle\PartKeeprUploadedFileBundle();
        $bundles[] = new PartKeepr\FrontendBundle\PartKeeprFrontendBundle();
        $bundles[] = new PartKeepr\SiPrefixBundle\PartKeeprSiPrefixBundle();
        $bundles[] = new PartKeepr\AuthBundle\PartKeeprAuthBundle();
        $bundles[] = new PartKeepr\CoreBundle\PartKeeprCoreBundle();
        $bundles[] = new PartKeepr\MimetypeIconsBundle\PartKeeprMimetypeIconsBundle();
        $bundles[] = new PartKeepr\FootprintBundle\PartKeeprFootprintBundle();
        $bundles[] = new PartKeepr\UnitBundle\PartKeeprUnitBundle();
        $bundles[] = new PartKeepr\PartBundle\PartKeeprPartBundle();
        $bundles[] = new PartKeepr\StockBundle\PartKeeprStockBundle();
        $bundles[] = new PartKeepr\DistributorBundle\PartKeeprDistributorBundle();
        $bundles[] = new PartKeepr\ManufacturerBundle\PartKeeprManufacturerBundle();
        $bundles[] = new PartKeepr\ImageBundle\PartKeeprImageBundle();
        $bundles[] = new PartKeepr\ProjectBundle\PartKeeprProjectBundle();
        $bundles[] = new PartKeepr\StorageLocationBundle\PartKeeprStorageLocationBundle();
        $bundles[] = new PartKeepr\TipOfTheDayBundle\PartKeeprTipOfTheDayBundle();
        $bundles[] = new PartKeepr\ExportBundle\PartKeeprExportBundle();
        $bundles[] = new PartKeepr\StatisticBundle\PartKeeprStatisticBundle();
        $bundles[] = new PartKeepr\SystemPreferenceBundle\PartKeeprSystemPreferenceBundle();
        $bundles[] = new PartKeepr\ImportBundle\PartKeeprImportBundle();
        $bundles[] = new PartKeepr\BatchJobBundle\PartKeeprBatchJobBundle();
        $bundles[] = new PartKeepr\OctoPartBundle\PartKeeprOctoPartBundle();
        $bundles[] = new PartKeepr\MobileFrontendBundle\PartKeeprMobileFrontendBundle();
        
        return array_merge($bundles, $this->getCustomBundles());
    }

    /**
     * Loads the configuration for an environment. Also loads a custom configuration for non-text environments from
     * app/config_config_custom.yml if it exists.
     *
     * @param $loader LoaderInterface
     */
    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load($this->getProjectDir().'/app/config/config_'.$this->getEnvironment().'.yml');

        if ($this->getEnvironment() !== 'test') {
            $customConfig = $this->getProjectDir().'/app/config/config_custom.yml';

            if (file_exists($customConfig)) {
                $loader->load($customConfig);
            }
        }
    }

    /**
     * Returns any custom bundles for a custom setup. Override this
     * method in a custom AppKernel.
     *
     * @return array
     */
    public function getCustomBundles()
    {
        return [];
    }

    /**
     * Override to allow different cache environments set by the environment variable PARTKEEPR_ENVIRONMENT.
     *
     * @return string
     */
    public function getCacheDir()
    {
        $environment = getenv('PARTKEEPR_ENVIRONMENT');

        if ($environment === false) {
            $environment = $this->environment;
        }

        return $this->rootDir.'/cache/'.$environment;
//      return dirname(__DIR__).'/var/cache/'.$this->getEnvironment();
    }
    
    public function getLogDir()
    {
        return dirname(__DIR__).'/var/logs';
    }
    
    
    /**
     * Override to avoid stripping comments.
     *
     * @see https://github.com/partkeepr/PartKeepr/issues/438
     *
     * @param string $source
     *
     * @return string
     */
    public static function stripComments($source)
    {
        return $source;
    }
}
