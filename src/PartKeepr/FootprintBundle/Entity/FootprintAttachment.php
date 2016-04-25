<?php

namespace PartKeepr\FootprintBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;

/**
 * Holds a footprint attachment.
 *
 * @ORM\Entity
 **/
class FootprintAttachment extends UploadedFile
{
    /**
     * Creates a new footprint attachment.
     */
    public function __construct()
    {
        parent::__construct();
        $this->setType('FootprintAttachment');
    }

    /**
     * The footprint object.
     *
     * @ORM\ManyToOne(targetEntity="PartKeepr\FootprintBundle\Entity\Footprint",inversedBy="attachments")
     *
     * @var Footprint
     */
    private $footprint = null;

    /**
     * Sets the footprint.
     *
     * @param Footprint $footprint The footprint to set
     */
    public function setFootprint(Footprint $footprint = null)
    {
        $this->footprint = $footprint;
    }

    /**
     * Returns the footprint.
     *
     * @return Footprint the footprint
     */
    public function getFootprint()
    {
        return $this->footprint;
    }
}
