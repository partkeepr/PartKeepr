<?php

namespace PartKeepr\RESTBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprRESTBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSRestBundle';
    }
}
