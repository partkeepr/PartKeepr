<?php
namespace PartKeepr\FootprintBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * Holds a footprint attachment
 *
 * @ORM\Entity
 **/
class FootprintAttachment extends UploadedFile
{
    /**
     * The description of this attachment
     * @ORM\Column(type="text")
     * @Groups({"default"})
     * @var string
     */
    private $description;

    /**
     * Creates a new footprint attachment
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType("FootprintAttachment");
    }

    /**
     * The footprint object
     * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint",inversedBy="attachments")
     *
     * @var Footprint
     */
    private $footprint = null;

    /**
     * Sets the footprint
     *
     * @param Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint)
    {
        $this->footprint = $footprint;
    }

    /**
     * Returns the footprint
     *
     * @return Footprint the footprint
     */
    public function getFootprint()
    {
        return $this->footprint;
    }

    /**
     * Sets the description for this attachment
     *
     * @param string $description The attachment description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Returns the description for this attachment
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }
}