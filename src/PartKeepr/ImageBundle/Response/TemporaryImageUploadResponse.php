<?php

namespace PartKeepr\ImageBundle\Response;

class TemporaryImageUploadResponse
{
    /**
     * The success property. This is required for ExtJS.
     *
     * @var bool
     */
    public $success = true;

    /**
     * @var object
     */
    public $image;

    /**
     * Legacy response for ExtJS forms.
     */
    public $response;

    public function __construct($image)
    {
        $this->image = $image;
        $this->response = $image;
    }
}
