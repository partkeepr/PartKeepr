<?php

namespace PartKeepr\BatchJobBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a batch job update field.
 *
 * @ORM\Entity
 */
class BatchJobUpdateField extends BaseEntity
{
    /**
     * The part this batch job update field refers to.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\BatchJobBundle\Entity\BatchJob", inversedBy="batchJobQueryFields")
     *
     * @var BatchJob
     */
    private $batchJob = null;

    /**
     * The field name to update.
     *
     * @ORM\Column(length=255)
     * @Groups({"default"})
     *
     * @var string
     */
    private $property;

    /**
     * The value to set.
     *
     * @ORM\Column(type="text")
     * @Groups({"default"})
     *
     * @var string
     */
    private $value;

    /**
     * The description.
     *
     * @ORM\Column(type="text")
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * Defines if the value is dynamic (=the user gets prompted upon running the batch job which value to use).
     *
     * @Groups({"default"})
     * @ORM\Column(type="boolean")
     *
     * @var bool
     */
    private $dynamic;

    /**
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * @return BatchJob
     */
    public function getBatchJob()
    {
        return $this->batchJob;
    }

    /**
     * @param BatchJob $batchJob
     */
    public function setBatchJob($batchJob = null)
    {
        $this->batchJob = $batchJob;
    }

    /**
     * @return string
     */
    public function getProperty()
    {
        return $this->property;
    }

    /**
     * @param string $property
     */
    public function setProperty($property)
    {
        $this->property = $property;
    }

    /**
     * @return string
     */
    public function getValue()
    {
        return $this->value;
    }

    /**
     * @param string $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * @return mixed
     */
    public function getDynamic()
    {
        return $this->dynamic;
    }

    /**
     * @param mixed $dynamic
     */
    public function setDynamic($dynamic)
    {
        $this->dynamic = $dynamic;
    }
}
