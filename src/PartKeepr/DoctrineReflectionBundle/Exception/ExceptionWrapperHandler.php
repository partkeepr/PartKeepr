<?php

namespace PartKeepr\DoctrineReflectionBundle\Exception;

use FOS\RestBundle\View\ExceptionWrapperHandlerInterface;

// @todo check if this is obsolete
class ExceptionWrapperHandler implements ExceptionWrapperHandlerInterface
{
    /**
     * @param array $data
     *
     * @return array
     */
    public function wrap($data)
    {
        $data = [
            '@type'             => 'Error',
            'hydra:title'       => isset($context['title']) ? $context['title'] : 'An error occurred',
            'hydra:description' => $data['message'],
        ];

        return $data;
    }
}
