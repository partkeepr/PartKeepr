<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'api_platform.doctrine.listener.view.write' shared service.

return $this->services['api_platform.doctrine.listener.view.write'] = new \ApiPlatform\Core\Bridge\Doctrine\EventListener\WriteListener(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'});
