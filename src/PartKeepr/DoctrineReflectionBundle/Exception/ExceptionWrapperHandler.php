<?php
namespace PartKeepr\DoctrineReflectionBundle\Exception;

use FOS\RestBundle\View\ExceptionWrapperHandlerInterface;
use Symfony\Component\Debug\Exception\FlattenException;

class ExceptionWrapperHandler implements ExceptionWrapperHandlerInterface
{
    /**
     * @param array $data
     *
     * @return array
     */
    public function wrap($data)
    {
        // we get the original exception
        /** @var $exception FlattenException */
        $exception = $data['exception'];

        // return the array
        return array(
            'success' => false,
            'exception' => array(
                "message" => $exception->getMessage()
            )
        );
    }
}