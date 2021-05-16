<?php

use Symfony\Component\HttpKernel\Kernel;
use Symfony\Component\Config\Loader\LoaderInterface;

/**
 * This is a special stripped-down kernel which is used during setup.
 */

class SetupAppKernel extends Kernel
{
    public function registerBundles()
    {
        // Base 3rd party bundles required for PartKeepr operation
        $bundles = [
            new Symfony\Bundle\FrameworkBundle\FrameworkBundle(),
            new Symfony\Bundle\SecurityBundle\SecurityBundle(),
            new Symfony\Bundle\TwigBundle\TwigBundle(),
            new Symfony\Bundle\MonologBundle\MonologBundle(),
//          new Symfony\Bundle\SwiftmailerBundle\SwiftmailerBundle(),
            new Doctrine\Bundle\DoctrineBundle\DoctrineBundle(),
            new Sensio\Bundle\FrameworkExtraBundle\SensioFrameworkExtraBundle(),
//          new Symfony\Bundle\AsseticBundle\AsseticBundle(),
//          new FOS\RestBundle\FOSRestBundle(),
//          new FOS\UserBundle\FOSUserBundle(),
//          new \Doctrine\Bundle\FixturesBundle\DoctrineFixturesBundle(),
//          new PartKeepr\DoctrineReflectionBundle\PartKeeprDoctrineReflectionBundle(),
//          new PartKeepr\RESTBundle\PartKeeprRESTBundle(),
//          new Escape\WSSEAuthenticationBundle\EscapeWSSEAuthenticationBundle(),
//          new SpriteGenerator\SpriteGeneratorBundle(),
//          new ApiPlatform\Core\Bridge\Symfony\Bundle\ApiPlatformBundle(),
            new Doctrine\Bundle\MigrationsBundle\DoctrineMigrationsBundle(),
//          new Brainbits\FugueIconsBundle\BrainbitsFugueIconsBundle(),
//          new Stof\DoctrineExtensionsBundle\StofDoctrineExtensionsBundle(),
//          new \PartKeepr\RemoteFileLoader\PartKeeprRemoteFileLoaderBundle(),
//          new Knp\Bundle\GaufretteBundle\KnpGaufretteBundle(),
        ];
        
        // Developer bundles
        if (in_array($this->getEnvironment(), ['dev', 'test'], true)) {
//          $bundles[] = new Symfony\Bundle\DebugBundle\DebugBundle();
            $bundles[] = new Symfony\Bundle\WebProfilerBundle\WebProfilerBundle();
            $bundles[] = new Sensio\Bundle\DistributionBundle\SensioDistributionBundle();
//          $bundles[] = new Sensio\Bundle\GeneratorBundle\SensioGeneratorBundle();
            $bundles[] = new Liip\FunctionalTestBundle\LiipFunctionalTestBundle();
        }

        $bundles[] = new \PartKeepr\SetupBundle\PartKeeprSetupBundle();

        return $bundles;
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
}
