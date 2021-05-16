<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/25/17
 * Time: 11:01 PM.
 */

namespace PartKeepr\CoreBundle\EventListener;

use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;

// use ApiPlatform\Core\Action\ActionUtilTrait;

use ApiPlatform\Core\Api\IriConverterInterface;
use ApiPlatform\Core\JsonLd\Response;
use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use PartKeepr\DoctrineReflectionBundle\Exception\EntityInUseException;
use PartKeepr\DoctrineReflectionBundle\Services\DeletionService;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

// working on this
// PHP Fatal error:  Uncaught Symfony\\Component\\Debug\\Exception\\FatalThrowableError: Type error:
// Argument 2 passed to PartKeepr\\CoreBundle\\EventListener\\RequestExceptionListener::__construct()
// must be an instance of ApiPlatform\\Core\\Model\\DataProviderInterface, instance of ApiPlatform\\Core\\DataProvider\\ChainCollectionDataProvider
//-----------------------------------------------------------
// copy from the original \Dunglas\ApiBundle\Hydra\EventListener\RequestExceptionListener

/*
 * This file is part of the DunglasApiBundle package.
 *
 * (c) Kévin Dunglas <dunglas@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

//namespace Dunglas\ApiBundle\Hydra\EventListener;

use ApiPlatform\Core\Exception\InvalidArgumentException;
//use ApiPlatform\Core\Exception\ValidationException;
//use ApiPlatform\Core\JsonLd\Response;
//use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\Serializer\Exception\ExceptionInterface;
//use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * Handle requests errors.
 *
 * @author Samuel ROZE <samuel.roze@gmail.com>
 * @author Kévin Dunglas <dunglas@gmail.com>
 */
class RequestExceptionListener_
{
    const FORMAT = 'jsonld';
    
    /**
     * @var NormalizerInterface
     */
    private $normalizer;
    
    public function __construct(NormalizerInterface $normalizer)
    {
        $this->normalizer = $normalizer;
    }
    
    /**
     * @param GetResponseForExceptionEvent $event
     */
    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $request = $event->getRequest();
        if (!$request->attributes->has('_resource_type') || self::FORMAT !== $request->attributes->get('_api_format')) {
            return;
        }
        
        $exception = $event->getException();
        $headers = [];
        
        if ($exception instanceof HttpException) {
            $status = $exception->getStatusCode();
            $headers = $exception->getHeaders();
            $data = $exception;
        } elseif ($exception instanceof ValidationException) {
            $status = Response::HTTP_BAD_REQUEST;
            $data = $exception->getConstraintViolationList();
        } elseif ($exception instanceof ExceptionInterface || $exception instanceof InvalidArgumentException) {
            $status = Response::HTTP_BAD_REQUEST;
            $data = $exception;
        } else {
            $status = Response::HTTP_INTERNAL_SERVER_ERROR;
            $data = $exception;
        }
        
        $event->setResponse(new Response(
            $this->normalizer->normalize($data, 'hydra-error'),
            $status,
            $headers
            ));
    }
}
//-----------------------------------------------------------


/**
 * Handle referential integrity errors.
 */
// class RequestExceptionListener extends \ApiPlatform\Core\Hydra\EventListener\RequestExceptionListener
class RequestExceptionListener extends RequestExceptionListener_
{
//    use ActionUtilTrait;

    const FORMAT = 'jsonld';

    /**
     * @var DataProviderInterface
     */
    private $dataProvider;

    /**
     * @var IriConverter
     */
    private $iriConverter;

    /**
     * @var DeletionService
     */
    private $deletionService;

    public function __construct(
        NormalizerInterface $normalizer,
        DataProviderInterface $dataProvider,
        IriConverter $iriConverter,
        DeletionService $deletionService
    ) {
        $this->dataProvider = $dataProvider;
        $this->iriConverter = $iriConverter;
        $this->deletionService = $deletionService;
        parent::__construct($normalizer);
    }

    /**
     * @param GetResponseForExceptionEvent $event
     */
    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $request = $event->getRequest();
        if (!$request->attributes->has('_resource_type') || self::FORMAT !== $request->attributes->get('_api_format')) {
            return;
        }

        $exception = $event->getException();
        $headers = [];

        if ($exception instanceof ForeignKeyConstraintViolationException) {
            $item = $this->iriConverter->getItemFromIri($request->getRequestUri());

            $usedIn = $this->deletionService->findUndeletableUsages($item);

            $data = new EntityInUseException((string) $item, $usedIn);

            $status = Response::HTTP_FAILED_DEPENDENCY;

            $event->setResponse(new \Symfony\Component\HttpFoundation\Response(
                json_encode($data),
                $status,
                $headers
            ));
        } else {
            parent::onKernelException($event);
        }
    }
}
