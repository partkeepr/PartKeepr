<?php

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.
// Returns the private 'doctrine_reflection_service.search_filter' shared service.

return $this->services['doctrine_reflection_service.search_filter'] = new \PartKeepr\DoctrineReflectionBundle\Filter\AdvancedSearchFilter(${($_ = isset($this->services['doctrine']) ? $this->services['doctrine'] : $this->getDoctrineService()) && false ?: '_'}, ${($_ = isset($this->services['property_accessor']) ? $this->services['property_accessor'] : $this->getPropertyAccessorService()) && false ?: '_'}, ${($_ = isset($this->services['request_stack']) ? $this->services['request_stack'] : ($this->services['request_stack'] = new \Symfony\Component\HttpFoundation\RequestStack())) && false ?: '_'}, ${($_ = isset($this->services['doctrine_filter_service']) ? $this->services['doctrine_filter_service'] : $this->load('getDoctrineFilterServiceService.php')) && false ?: '_'});
