<?php

namespace PartKeepr\ApiDocBundle\Extractor;

use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use Symfony\Component\Routing\Route;

class ApiDocExtractor extends \Nelmio\ApiDocBundle\Extractor\ApiDocExtractor
{
    /**
     * Parses annotations for a given method, and adds new information to the given ApiDoc
     * annotation. Useful to extract information from the FOSRestBundle annotations.
     *
     * This method has been adjusted so that it can read annotations from the parent class.
     *
     * @param ApiDoc            $annotation
     * @param Route             $route
     * @param \ReflectionMethod $method
     */
    protected function parseAnnotations(ApiDoc $annotation, Route $route, \ReflectionMethod $method)
    {
        $classAnnotations = $this->reader->getMethodAnnotations($method);

        $declaringClass = $method->getDeclaringClass();
        $parentClass = $declaringClass->getParentClass();

        $parentAnnotations = [];

        if ($parentClass && $parentClass->hasMethod($method->getShortName())) {
            $parentMethod = $parentClass->getMethod($method->getShortName());
            $parentAnnotations = $this->reader->getMethodAnnotations($parentMethod);
        }

        $allAnnotations = array_merge($classAnnotations, $parentAnnotations);

        foreach ($this->handlers as $handler) {
            $handler->handle($annotation, $allAnnotations, $route, $method);
        }
    }
}
