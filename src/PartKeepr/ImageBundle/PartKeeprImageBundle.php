<?php
namespace PartKeepr\ImageBundle;

use PartKeepr\ImageBundle\DependencyInjection\PartKeeprExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprImageBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new PartKeeprExtension();
    }
}
