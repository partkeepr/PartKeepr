<?php

namespace PartKeepr\CoreBundle\EventListener;

/* APIWORK_TODO: needs validation */

use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;

use PartKeepr\DoctrineReflectionBundle\Exception\EntityInUseException;
use PartKeepr\DoctrineReflectionBundle\Services\DeletionService;

use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

use ApiPlatform\Core\EventListener\ExceptionListener;


/**
 * Handle referential integrity errors.
 */
class RequestExceptionListener
{
    #use ActionUtilTrait;

    #const FORMAT = 'jsonld';

    #/**
    # * @var DataProviderInterface
    # */
    #private $dataProvider;

    #/**
    # * @var IriConverter
    # */
    #private $iriConverter;

    #/**
    # * @var DeletionService
    # */
    #private $deletionService;

    #public function __construct(
    #    NormalizerInterface $normalizer,
    #    DataProviderInterface $dataProvider,
    #    IriConverter $iriConverter,
    #    DeletionService $deletionService
    #) {
    #    $this->dataProvider = $dataProvider;
    #    $this->iriConverter = $iriConverter;
    #    $this->deletionService = $deletionService;
    #    parent::__construct($normalizer);
    #}

    /**
     * @param GetResponseForExceptionEvent $event
     */
    public function onKernelException(GetResponseForExceptionEvent $event)
    {
        $request = $event->getRequest();
        if (!$request->attributes->has('_resource_type') || self::FORMAT !== $request->attributes->get('_api_format')) {
            return;
  #      }

   #     $exception = $event->getException();
    #    $headers = [];

#        if ($exception instanceof ForeignKeyConstraintViolationException) {
 #           $item = $this->iriConverter->getItemFromIri($request->getRequestUri());

 #           $usedIn = $this->deletionService->findUndeletableUsages($item);

 #           $data = new EntityInUseException((string) $item, $usedIn);

 #           $status = Response::HTTP_FAILED_DEPENDENCY;

 #           $event->setResponse(new \Symfony\Component\HttpFoundation\Response(
 #               json_encode($data),
 #               $status,
 #               $headers
 #           ));
        } else {
            parent::onKernelException($event);
        }
    }
}
