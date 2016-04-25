<?php

namespace PartKeepr\PartBundle\Listeners;

use Doctrine\ORM\Event\LifecycleEventArgs;
use PartKeepr\ImageBundle\Services\ImageService;
use PartKeepr\PartBundle\Entity\PartAttachment;

class ImageAttachmentListener
{
    private $imageService;

    public function __construct(ImageService $imageService)
    {
        $this->imageService = $imageService;
    }

    public function postLoad(LifecycleEventArgs $event)
    {
        if ($event->getEntity() instanceof PartAttachment) {
            /**
             * @var PartAttachment
             */
            $entity = $event->getEntity();

            $entity->setImage($this->imageService->canHandleMimetype($entity->getMimeType()));
        }
    }
}
