<?php

namespace PartKeepr\DoctrineReflectionBundle\Exception;

use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class ExceptionNormalizer implements NormalizerInterface
{
    /**
     * @param array $data
     *
     * @return array
     */
    public function normalize($object, $format = null, array $context = array())
    {
        $data = [
            '@type'             => 'Error',
            'hydra:title'       => isset($context['title']) ? $context['title'] : 'An error occurred',
            'hydra:description' => $object['message'],
        ];

        return $data;
    }

    public function supportsNormalization($data, $format = null)
   {
       return $data instanceof \Exception;
   }
}
