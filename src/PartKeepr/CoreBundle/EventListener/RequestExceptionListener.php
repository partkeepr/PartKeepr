<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/25/17
 * Time: 11:01 PM.
 */

namespace PartKeepr\CoreBundle\EventListener;

use Doctrine\DBAL\Exception\ForeignKeyConstraintViolationException;
use Dunglas\ApiBundle\Action\ActionUtilTrait;
use Dunglas\ApiBundle\Api\IriConverter;
use Dunglas\ApiBundle\JsonLd\Response;
use Dunglas\ApiBundle\Model\DataProviderInterface;
use PartKeepr\DoctrineReflectionBundle\Exception\EntityInUseException;
use PartKeepr\DoctrineReflectionBundle\Services\DeletionService;
use Symfony\Component\HttpKernel\Event\GetResponseForExceptionEvent;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

/**
 * Handle referential integrity errors.
 */
class RequestExceptionListener extends \Dunglas\ApiBundle\Hydra\EventListener\RequestExceptionListener
{
    use ActionUtilTrait;

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
