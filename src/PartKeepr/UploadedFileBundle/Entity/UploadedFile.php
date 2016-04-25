<?php

namespace PartKeepr\UploadedFileBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use Ramsey\Uuid\Uuid;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\MappedSuperclass
 */
abstract class UploadedFile extends BaseEntity
{
    /**
     * Specifies the type of the file.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     **/
    private $type;

    /**
     * The unique filename of the file. Note that the filename does not contain any extension or any path information.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $filename;

    /**
     * The original name of the file. Includes the extension of the file, but no path information.
     *
     * @ORM\Column(type="string",nullable=true,name="originalname")
     * @Groups({"default"})
     *
     * @var string
     */
    private $originalFilename;

    /**
     * The MimeType for the file.
     *
     * @ORM\Column(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $mimetype;

    /**
     * The size of the uploaded file.
     *
     * @ORM\Column(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $size;

    /**
     * Holds the extension of the given file.
     *
     * @ORM\Column(type="string",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $extension;

    /**
     * The description of this attachment.
     *
     * @ORM\Column(type="text",nullable=true)
     * @Groups({"default"})
     *
     * @var string
     */
    private $description;

    /**
     * Holds an ID of a replacement image.
     *
     * @Groups({"default"})
     */
    private $replacement = null;

    /**
     * @ORM\Column(type="datetime",nullable=false)
     *
     * @var \DateTime
     */
    private $created;

    public function __construct()
    {
        $this->filename = Uuid::uuid1()->toString();
        $this->setCreated(new \DateTime());
    }

    /**
     * Returns the created date.
     *
     * @return mixed
     */
    public function getCreated()
    {
        return $this->created;
    }

    /**
     * Sets the created date.
     *
     * @param mixed $created
     */
    public function setCreated($created)
    {
        $this->created = $created;
    }

    /**
     * Returns the replacement image, if set.
     *
     * @return mixed
     */
    public function getReplacement()
    {
        return $this->replacement;
    }

    /**
     * Sets a replacement image.
     *
     * @param $replacement
     */
    public function setReplacement($replacement)
    {
        $this->replacement = $replacement;
    }

    /**
     * Returns the original filename.
     *
     * @return string The original filename
     */
    public function getOriginalFilename()
    {
        return $this->originalFilename;
    }

    /**
     * Sets the original filename.
     *
     * @param string $filename The original filename
     */
    public function setOriginalFilename($filename)
    {
        $this->originalFilename = $filename;
    }

    /**
     * Returns the size of this file.
     *
     * @return int The size in bytes
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Sets the size of the file.
     *
     * @param int $size The size in bytes
     */
    public function setSize($size)
    {
        $this->size = intval($size);
    }

    /**
     * Returns the type of the file.
     *
     * @param none
     *
     * @return string The type of the file
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Sets the type of the file. Once the type is set,
     * it may not be changed later.
     *
     * @param string $type The type of the file
     */
    protected function setType($type)
    {
        $this->type = $type;
    }

    /**
     * Returns the description for this attachment.
     *
     * @return string The description
     */
    public function getDescription()
    {
        return $this->description;
    }

    /**
     * Sets the description for this attachment.
     *
     * @param string $description The attachment description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    public function getFullFilename()
    {
        return $this->getFilename().'.'.$this->getExtension();
    }

    /**
     * Returns the plain filename without path and suffix.
     *
     * @return string The plain filename without path and suffix
     */
    public function getFilename()
    {
        return $this->filename;
    }

    /**
     * Sets the plain filename without path and suffix.
     *
     * @param $filename string The plain filename without path and suffix
     */
    public function setFilename($filename)
    {
        $this->filename = $filename;
    }

    /**
     * Returns the extension for the file.
     *
     * @return string The extension
     */
    public function getExtension()
    {
        if ($this->extension == '') {
            /* @noinspection PhpDeprecationInspection */
            return $this->getLegacyExtension();
        }

        return $this->extension;
    }

    /**
     * Sets the extension for this file.
     *
     * @param string $extension The extension
     */
    public function setExtension($extension)
    {
        $this->extension = $extension;
    }

    /**
     * Returns the extension for the given mime type.
     *
     * This function simply extracts that information from the mime type;
     * special cases are not handled. e.g. if you have image/foobar, it would
     * return "foobar" as extension.
     *
     * @todo Implement conversion from mimetype to extension in the setup routine
     *
     * @return string The extension
     *
     * @deprecated
     */
    public function getLegacyExtension()
    {
        $data = explode('/', $this->getMimeType());

        if (array_key_exists(1, $data)) {
            return $data[1];
        } else {
            return 'undefined';
        }
    }

    /**
     * Returns the mime type for this file.
     *
     * @return string The mimetype for this file, e.g. text/plain
     */
    public function getMimeType()
    {
        return $this->mimetype;
    }

    /**
     * Sets the mimetype for this file.
     *
     * @param string $mimeType The mimetype
     */
    public function setMimeType($mimeType)
    {
        $this->mimetype = $mimeType;
    }
}
