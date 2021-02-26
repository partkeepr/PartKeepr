<?php

#require_once __DIR__.'/AppKernel.php'; #Moved to composer.json

use Symfony\Bundle\FrameworkBundle\HttpCache\HttpCache;

class AppCache extends HttpCache
{
}
