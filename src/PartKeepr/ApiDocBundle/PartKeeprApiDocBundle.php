<?php

namespace PartKeepr\ApiDocBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprApiDocBundle extends Bundle
{
    public function getParent()
    {
        return 'NelmioApiDocBundle';
    }
}
