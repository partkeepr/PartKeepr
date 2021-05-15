<?php

use Symfony\Component\HttpFoundation\Request;

// $loader = require_once  __DIR__ . "/../var/bootstrap.php.cache";
$loader = require_once __DIR__.'/../vendor/autoload.php';

require_once  __DIR__ . "/../app/SetupAppKernel.php";
require_once  __DIR__ . "/../app/AppKernel.php";

$kernel = new SetupAppKernel('setup', true);
$kernel->loadClassCache();
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
