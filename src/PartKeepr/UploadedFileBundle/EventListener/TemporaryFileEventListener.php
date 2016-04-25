<?php

namespace PartKeepr\UploadedFileBundle\EventListener;

use Doctrine\Common\Annotations\Reader;
use Dunglas\ApiBundle\Api\IriConverterInterface;
use PartKeepr\ImageBundle\Entity\Image;
use PartKeepr\ImageBundle\Entity\TempImage;
use PartKeepr\ImageBundle\Services\ImageService;
use PartKeepr\UploadedFileBundle\Entity\TempUploadedFile;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use PartKeepr\UploadedFileBundle\Services\UploadedFileService;
use Symfony\Component\HttpKernel\Event\GetResponseForControllerResultEvent;
use Symfony\Component\PropertyAccess\PropertyAccessorInterface;

class TemporaryFileEventListener
{
    /**
     * @var UploadedFileService
     */
    private $uploadedFileService;

    /**
     * @var ImageService
     */
    private $imageService;

    /**
     * @var Reader
     */
    private $reader;

    /**
     * @var PropertyAccessorInterface
     */
    private $propertyAccessor;

    /**
     * @var IriConverterInterface
     */
    private $iriConverter;

    public function __construct(
        UploadedFileService $uploadedFileService,
        ImageService $imageService,
        Reader $reader,
        PropertyAccessorInterface $propertyAccessor,
        IriConverterInterface $iriConverter
    ) {
        $this->uploadedFileService = $uploadedFileService;
        $this->imageService = $imageService;
        $this->reader = $reader;
        $this->propertyAccessor = $propertyAccessor;
        $this->iriConverter = $iriConverter;
    }

    /**
     * Replaces any temporary images with actual instances of the configured UploadedFile collection.
     *
     * Automatically extracts the proper setters and getters from the metadata and instantiates the correct
     * UploadedFile child class.
     *
     * @param GetResponseForControllerResultEvent $event The event
     */
    public function replaceTemporaryFile(GetResponseForControllerResultEvent $event)
    {
        $data = $event->getControllerResult();

        if (!is_object($data)) {
            return;
        }

        $classReflection = new \ReflectionClass($data);

        foreach ($classReflection->getProperties() as $property) {
            $propertyAnnotationCollection = $this->reader->getPropertyAnnotation(
                $property,
                'PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection'
            );

            $propertyAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'PartKeepr\UploadedFileBundle\Annotation\UploadedFile'
            );

            $manyToOneAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'Doctrine\ORM\Mapping\OneToMany'
            );

            $oneToOneAnnotation = $this->reader->getPropertyAnnotation(
                $property,
                'Doctrine\ORM\Mapping\OneToOne'
            );

            if ($propertyAnnotationCollection !== null || $propertyAnnotation !== null) {
                if ($manyToOneAnnotation !== null) {
                    $collection = $this->propertyAccessor->getValue($data, $property->getName());

                    foreach ($collection as $key => $item) {
                        if ($item instanceof TempUploadedFile || $item instanceof TempImage) {
                            $targetEntity = $manyToOneAnnotation->targetEntity;

                            $newFile = $this->setReplacementFile($targetEntity, $item, $data);
                            $collection[$key] = $newFile;
                        }
                    }

                    $this->propertyAccessor->setValue($data, $property->getName(), $collection);
                }

                if ($oneToOneAnnotation !== null) {
                    $item = $this->propertyAccessor->getValue($data, $property->getName());

                    if ($item instanceof TempUploadedFile || $item instanceof TempImage) {
                        $targetEntity = $oneToOneAnnotation->targetEntity;

                        $newFile = $this->setReplacementFile($targetEntity, $item, $data);

                        $this->propertyAccessor->setValue($data, $property->getName(), $newFile);
                    } else {
                        $item = $this->propertyAccessor->getValue($data, $property->getName());

                        if ($item !== null && $item->getReplacement() !== null) {
                            /**
                             * @var UploadedFile
                             */
                            $tempImage = $this->iriConverter->getItemFromIri($item->getReplacement());
                            $this->replaceFile($item, $tempImage);
                        }
                    }
                }
            }
        }

        $event->setControllerResult($data);
    }

    /**
     * Replaces the TemporaryUploadedFile or TempImage with the actual instance. Automatically sets the
     * reference to the owning entity.
     *
     * @param string                     $targetEntity The entity to create
     * @param TempUploadedFile|TempImage $source       The source entity
     * @param object                     $target       The entity where to set the property
     *
     * @return object The newly created object instance
     */
    protected function setReplacementFile($targetEntity, $source, $target)
    {
        /**
         * @var UploadedFile
         */
        $newFile = new $targetEntity();

        $this->replaceFile($newFile, $source);

        $setterName = $this->getReferenceSetter($newFile, $target);

        if ($setterName !== false) {
            $this->propertyAccessor->setValue($newFile, $setterName, $target);
        }

        return $newFile;
    }

    protected function replaceFile(UploadedFile $target, UploadedFile $source)
    {
        if ($target instanceof Image) {
            $this->imageService->replaceFromUploadedFile($target, $source);
        } else {
            $this->uploadedFileService->replaceFromUploadedFile($target, $source);
        }
        $target->setDescription($source->getDescription());
    }

    /**
     * Returns the setter name for the inverse side.
     *
     * @param $inverseSideEntity
     * @param $owningSideEntity
     *
     * @return bool|string
     */
    protected function getReferenceSetter($inverseSideEntity, $owningSideEntity)
    {
        $inverseSideReflection = new \ReflectionClass($inverseSideEntity);
        $owningSideReflection = new \ReflectionClass($owningSideEntity);

        foreach ($inverseSideReflection->getProperties() as $inverseSideProperty) {
            $oneToManyAssociation = $this->reader->getPropertyAnnotation(
                $inverseSideProperty,
                'Doctrine\ORM\Mapping\ManyToOne'
            );

            if ($oneToManyAssociation !== null &&
                $oneToManyAssociation->targetEntity == $owningSideReflection->getName()
            ) {
                return $inverseSideProperty->getName();
            }
        }

        return false;
    }
}
