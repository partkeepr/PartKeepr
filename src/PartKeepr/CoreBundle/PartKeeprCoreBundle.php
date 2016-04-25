<?php

namespace PartKeepr\CoreBundle;

use PartKeepr\CoreBundle\DependencyInjection\PartKeeprCoreExtension;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprCoreBundle extends Bundle
{
    public function getContainerExtension()
    {
        return new PartKeeprCoreExtension();
    }
}
