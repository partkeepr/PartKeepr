<?php

namespace Partkeepr\DoctrineReflectionBundle\Normalizer;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ExceptionNormalizer implements NormalizerInterface
{
     /**
     * @param object $object
     *
     * @return array
     */
    
     public function normalize($object, $format = null, array $context = array())
    {
        return  [
            '@type'             => 'Error',
            'hydra:title'       => isset($context['title']) ? $context['title'] : 'An error occurred',
            'hydra:description' => $$object['message'],
        ];

    }

    public function supportsNormalization($data, $format = null)
    {
        return $data instanceof \Exception;
    }
}