<?php

// use Symfony\Component\ClassLoader\ApcClassLoader;
use Symfony\Component\HttpFoundation\Request;

set_time_limit(0);

//$loader = require_once __DIR__.'/../var/bootstrap.php.cache';
require_once __DIR__.'/../vendor/autoload.php';

// Use APC for autoloading to improve performance.
// Change 'sf2' to a unique prefix in order to prevent cache key conflicts
// with other applications also using APC.
/*
$apcLoader = new ApcClassLoader('sf2', $loader);
$loader->unregister();
$apcLoader->register(true);
*/

require_once __DIR__.'/../app/AppKernel.php';
//require_once __DIR__.'/../app/AppCache.php';

if (!file_exists('../app/config/parameters.php')) {
    echo 'Unable to load parameters.php - please run setup to generate a parameters.php file.';
    exit;
}
$kernel = new AppKernel('prod', false);
//$kernel = new AppCache($kernel);
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
