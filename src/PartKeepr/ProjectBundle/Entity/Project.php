<?php

namespace PartKeepr\ProjectBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\UploadedFileBundle\Annotation\UploadedFileCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Represents a project.
 *
 * @ORM\Entity
 * @TargetService("/api/projects")
 */
class Project extends BaseEntity
{
    /**
     * Specifies the name of the project.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $name;

    /**
     * Specifies the user this project belongs to.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\User")
     *
     * @var User
     */
    private $user;

    /**
     * Holds the parts needed for this project.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\ProjectBundle\Entity\ProjectPart",mappedBy="project",cascade={"persist", "remove"}, orphanRemoval=true)
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $parts;

    /**
     * Holds the description of this project.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * Holds the project attachments.
     *
     * @ORM\OneToMany(targetEntity="PartKeepr\ProjectBundle\Entity\ProjectAttachment",mappedBy="project",cascade={"persist", "remove"}, orphanRemoval=true)
     * @UploadedFileCollection()
     * @Groups({"default"})
     *
     * @var ArrayCollection
     */
    private $attachments;

    public function __construct()
    {
        $this->parts = new ArrayCollection();
        $this->attachments = new ArrayCollection();
    }

    /**
     * Sets the user for this project.
     *
     * @param User $user
     */
    public function setUser(User $user)
    {
        $this->user = $user;
    }

    /**
     * Gets the user for this project.
     *
     * @return User
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Sets the name for this project.
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Returns the name of this project.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Sets the description of this project.
     *
     * @param string $description The description to set
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the description of this project.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Returns the project parts array.
     *
     * @return ProjectPart[] An array of ProjectPart objects
     */
    public function getParts()
    {
        return $this->parts->getValues();
    }

    /**
     * Adds a Project Part.
     *
     * @param ProjectPart $projectPart A part to add
     */
    public function addPart($projectPart)
    {
        $projectPart->setProject($this);
        $this->parts->add($projectPart);
    }

    /**
     * Removes a Project Part.
     *
     * @param ProjectPart $projectPart A part to remove
     */
    public function removePart($projectPart)
    {
        $projectPart->setProject(null);
        $this->parts->removeElement($projectPart);
    }

    /**
     * Returns the attachments for this project.
     *
     * @return ProjectAttachment[] The attachments
     */
    public function getAttachments()
    {
        return $this->attachments->getValues();
    }

    /**
     * Adds a Project Attachment.
     *
     * @param ProjectAttachment $projectAttachment An attachment to add
     */
    public function addAttachment($projectAttachment)
    {
        if ($projectAttachment instanceof ProjectAttachment) {
            $projectAttachment->setProject($this);
        }
        $this->attachments->add($projectAttachment);
    }

    /**
     * Removes a Project Attachment.
     *
     * @param ProjectAttachment $projectAttachment An attachment to remove
     */
    public function removeAttachment($projectAttachment)
    {
        if ($projectAttachment instanceof ProjectAttachment) {
            $projectAttachment->setProject(null);
        }
        $this->attachments->removeElement($projectAttachment);
    }
}
