<?php

use Symfony\Component\HttpFoundation\Request;

set_time_limit(0);

// $loader = require_once  __DIR__ . "/../var/bootstrap.php.cache";

require_once __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . "/../app/SetupAppKernel.php";

$kernel = new SetupAppKernel('setup', true);
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);