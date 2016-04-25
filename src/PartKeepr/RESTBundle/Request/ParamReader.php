<?php

namespace PartKeepr\RESTBundle\Request;

use FOS\RestBundle\Request\ParamReader as FOSRestParamReader;

class ParamReader extends FOSRestParamReader
{
    public function getParamsFromMethod(\ReflectionMethod $method)
    {
        $parentParams = [];
        $params = parent::getParamsFromMethod($method);

        // This loads the annotations of the parent method
        $declaringClass = $method->getDeclaringClass();
        $parentClass = $declaringClass->getParentClass();

        if ($parentClass && $parentClass->hasMethod($method->getShortName())) {
            $parentMethod = $parentClass->getMethod($method->getShortName());
            $parentParams = parent::getParamsFromMethod($parentMethod);
        }

        return array_merge($params, $parentParams);
    }
}
