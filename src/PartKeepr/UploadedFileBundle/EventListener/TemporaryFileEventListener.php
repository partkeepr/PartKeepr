<?php
namespace PartKeepr\UploadedFileBundle\EventListener;

use Doctrine\Common\Annotations\Reader;
use Dunglas\ApiBundle\Event\DataEvent;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

class TemporaryFileEventListener
{
    /**
     * @var UploadedFileService
     */
    private $uploadedFileService;

    /**
     * @var Reader
     */
    private $reader;

    /**
     * @var PropertyAccessorInterface
     */
    private $propertyAccessor;

    public function __construct(
        UploadedFileService $uploadedFileService,
        Reader $reader,
        PropertyAccessorInterface $propertyAccessor
    ) {
        $this->uploadedFileService = $uploadedFileService;
        $this->reader = $reader;
        $this->propertyAccessor = $propertyAccessor;
    }

    /**
     * Replaces any temporary images with actual instances of the configured UploadedFile collection.
     *
     * Automatically extracts the proper setters and getters from the metadata and instantiates the correct
     * UploadedFile child class.
     *
     * @param DataEvent $event The event
     */
    public function onPreUpdate(DataEvent $event)
    {
        $data = $event->getData();

        $classReflection = new \ReflectionClass($data);

        foreach ($classReflection->getProperties() as $property) {

            $propertyAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection'
            );

            $manyToOneAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'Doctrine\ORM\Mapping\OneToMany'
            );

            if ($propertyAnnotation !== null) {
                $collection = $this->propertyAccessor->getValue($data, $property->getName());

                foreach ($collection as $key => $item) {
                    if ($item instanceof TempImage) {
                        $targetEntity = $manyToOneAnnotation->targetEntity;

                        /**
                         * @var $newImage UploadedFile
                         */
                        $newImage = new $targetEntity();

                        $this->uploadedFileService->replaceFromUploadedFile($newImage, $item);
                        $newImage->setOriginalFilename($item->getOriginalFilename());

                        // Find the setter for the association
                        $inverseSideReflection = new \ReflectionClass($newImage);

                        foreach ($inverseSideReflection->getProperties() as $inverseSideProperty) {

                            $oneToManyAssociation = $this->reader->getPropertyAnnotation(
                                $inverseSideProperty,
                                'Doctrine\ORM\Mapping\ManyToOne'
                            );

                            if ($oneToManyAssociation !== null && $oneToManyAssociation->targetEntity == $classReflection->getName()) {
                                $this->propertyAccessor->setValue($newImage, $inverseSideProperty->getName(), $data);
                            }
                        }

                        $collection[$key] = $newImage;
                    }
                }

                $this->propertyAccessor->setValue($data, $property->getName(), $collection);
            }
        }
    }
}