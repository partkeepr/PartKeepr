<?php

use Symfony\Component\Config\Loader\LoaderInterface;
use Symfony\Component\HttpKernel\Kernel;

class AppKernel extends Kernel
{
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
            new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new FOS\RestBundle\FOSRestBundle(),
            new FOS\UserBundle\FOSUserBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
            new \Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle(),
            new PartKeepr\DoctrineReflectionBundle\PartKeeprDoctrineReflectionBundle(),
            new PartKeepr\RESTBundle\PartKeeprRESTBundle(),
            new Escape\WSSEAuthenticationBundle\EscapeWSSEAuthenticationBundle(),
            //new PartKeepr\ApiDocBundle\PartKeeprApiDocBundle(),
            new Dunglas\ApiBundle\DunglasApiBundle(),
            new Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle(),
            new Brainbits\FugueIconsBundle\BrainbitsFugueIconsBundle(),
            new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
            new JMS\TranslationBundle\JMSTranslationBundle(),
            new \PartKeepr\RemoteFileLoader\PartKeeprRemoteFileLoaderBundle(),
            new \FR3D\LdapBundle\FR3DLdapBundle()
        );

        // Developer bundles
        if (in_array($this->getEnvironment(), array('dev', 'test'))) {
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

        return $bundles;
    }

    public function registerContainerConfiguration(LoaderInterface $loader)
    {
        $loader->load(__DIR__.'/config/config_'.$this->getEnvironment().'.yml');
    }

    /**
     * Override to avoid stripping comments.
     *
     * @see https://github.com/partkeepr/PartKeepr/issues/438
     * @param string $source
     *
     * @return string
     */
    public static function stripComments($source) {
        return $source;
    }
}
