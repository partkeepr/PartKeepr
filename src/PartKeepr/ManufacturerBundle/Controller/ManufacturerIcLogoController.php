<?php
namespace PartKeepr\ManufacturerBundle\Controller;

use PartKeepr\ImageBundle\Controller\ImageController;

class ManufacturerIcLogoController extends ImageController
{
    /**
     * @inheritdoc
     */
    public function getEntityClass () {
        return "PartKeepr\\ManufacturerBundle\\Entity\\ManufacturerICLogo";
    }

}