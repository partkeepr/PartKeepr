<?php
namespace PartKeepr\Frontend;

use PartKeepr\User\User,
	PartKeepr\Service\ServiceManager,
	PartKeepr\PartKeepr,
	PartKeepr\Session\SessionManager,
	PartKeepr\Util\Configuration,
    Symfony\Component\ClassLoader\ApcClassLoader,
    Symfony\Component\HttpFoundation\Request;


include("../src/backend/PartKeepr/PartKeepr.php");

$loader = require_once __DIR__.'/../app/bootstrap.php.cache';

require_once __DIR__.'/../app/AppKernel.php';

$kernel = new \AppKernel('dev', false);
$kernel->loadClassCache();

$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
$kernel->terminate($request, $response);
