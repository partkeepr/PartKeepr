<?php

namespace PartKeepr\BatchJobBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @TargetService(uri="/api/batch_jobs")
 */
class BatchJob extends BaseEntity
{
    /**
     * Holds the batch job name.
     *
     * @ORM\Column(length=64,unique=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Holds the batch job query fields.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\BatchJobBundle\Entity\BatchJobQueryField",mappedBy="batchJob",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $batchJobQueryFields;

    /**
     * Batch Job Update Fields.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\BatchJobBundle\Entity\BatchJobUpdateField",mappedBy="batchJob",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $batchJobUpdateFields;

    /**
     * Holds the base entity to query against.
     *
     * @ORM\Column()
     *
     * @Groups({"default"})
     *
     * @var string
     */
    private $baseEntity;

    public function __construct()
    {
        $this->batchJobQueryFields = new ArrayCollection();
        $this->batchJobUpdateFields = new ArrayCollection();
    }

    /**
     * @return ArrayCollection
     */
    public function getBatchJobUpdateFields()
    {
        return $this->batchJobUpdateFields->getValues();
    }

    /**
     * @return string
     */
    public function getBaseEntity()
    {
        return $this->baseEntity;
    }

    /**
     * @param string $baseEntity
     */
    public function setBaseEntity($baseEntity)
    {
        $this->baseEntity = $baseEntity;
    }

    /**
     * @return ArrayCollection
     */
    public function getBatchJobQueryFields()
    {
        return $this->batchJobQueryFields->getValues();
    }

    /**
     * @param $batchJobQueryField BatchJobQueryField
     */
    public function addBatchJobQueryField($batchJobQueryField)
    {
        if ($batchJobQueryField instanceof BatchJobQueryField) {
            $batchJobQueryField->setBatchJob($this);
        }
        $this->batchJobQueryFields->add($batchJobQueryField);
    }

    public function removeBatchJobQueryField($batchJobQueryField)
    {
        if ($batchJobQueryField instanceof BatchJobQueryField) {
            $batchJobQueryField->setBatchJob(null);
        }
        $this->batchJobQueryFields->removeElement($batchJobQueryField);
    }

    /**
     * @param $batchJobUpdateField BatchJobUpdateField
     */
    public function addBatchJobUpdateField($batchJobUpdateField)
    {
        if ($batchJobUpdateField instanceof BatchJobUpdateField) {
            $batchJobUpdateField->setBatchJob($this);
        }
        $this->batchJobUpdateFields->add($batchJobUpdateField);
    }

    public function removeBatchJobUpdateField($batchJobUpdateField)
    {
        if ($batchJobUpdateField instanceof BatchJobUpdateField) {
            $batchJobUpdateField->setBatchJob(null);
        }
        $this->batchJobUpdateFields->removeElement($batchJobUpdateField);
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }
}
