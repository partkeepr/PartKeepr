<?php

namespace PartKeepr\MimetypeIconsBundle\Services;

use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;

class MimetypeIconService implements ContainerAwareInterface
{
    /**
     * @var Container
     */
    protected $container;

    /**
     * {@inheritDoc}
     */
    public function setContainer(ContainerInterface $container = null)
    {
        $this->container = $container;
    }

    public function __construct(Container $container)
    {
        $this->setContainer($container);
    }

    /**
     * Returns the file path to an image file which represents the passed mimetype.
     *
     * @param string $mimetype The mimetype
     *
     * @return string A path to the mimetype icon
     */
    public function getMimetypeIcon($mimetype)
    {
        $file = str_replace('/', '-', $mimetype).'.svg';

        $iconDirectory = $this->container->getParameter('partkeepr.directories.mimetype_icons');

        $fileLocator = new FileLocator($iconDirectory);

        try {
            $iconFile = $fileLocator->locate($file);
        } catch (\InvalidArgumentException $e) {
            $file = 'empty.svg';
            $iconFile = $fileLocator->locate($file);
        }

        return $iconFile;
    }
}
