<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'api_platform.action.exception' shared service.

return $this->services['api_platform.action.exception'] = new \ApiPlatform\Core\Action\ExceptionAction(${($_ = isset($this->services['serializer']) ? $this->services['serializer'] : $this->getSerializerService()) && false ?: '_'}, $this->parameters['api_platform.error_formats'], $this->parameters['api_platform.exception_to_status']);
