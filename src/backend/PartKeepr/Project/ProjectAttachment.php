<?php
namespace PartKeepr\Project;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

/**
 * Holds a project attachment
 *
 * @ORM\Entity
 **/
class ProjectAttachment extends UploadedFile
{
    /**
     * Creates a new project attachment
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType("ProjectAttachment");
    }

    /**
     * The project object
     * @ORM\ManyToOne(targetEntity="PartKeepr\Project\Project", inversedBy="attachments")
     *
     * @var Project
     */
    private $project = null;

    /**
     * Sets the project
     *
     * @param Project $project The project to set
     */
    public function setProject(Project $project)
    {
        $this->project = $project;
    }

    /**
     * Returns the roject
     *
     * @return Project the project
     */
    public function getProject()
    {
        return $this->project;
    }
}
