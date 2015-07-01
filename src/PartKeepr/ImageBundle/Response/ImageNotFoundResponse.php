<?php
namespace PartKeepr\ImageBundle\Response;

use Imagine\Gd\Imagine;
use Imagine\Image\Box;
use Imagine\Image\Point;
use Symfony\Component\HttpFoundation\Response;

class ImageNotFoundResponse extends Response
{
    /**
     * Constructs a new ImageNotFoundResponse
     * @param mixed|string $maxWidth
     * @param int          $maxHeight
     */
    public function __construct ($maxWidth, $maxHeight) {
        if ($maxWidth == 0) {
            $maxWidth = 300;
        }

        if ($maxHeight == 0) {
            $maxHeight = 300;
        }

        $imagine = new Imagine();

        $size = new Box(300, 300);
        $image = $imagine->create($size);

        $black = $image->palette()->color("000");

        $path = realpath(__DIR__ .
            "/../Resources/public/fonts/OpenSans-Regular.ttf"
        );

        $font = $imagine->font($path, 24, $black);

        $image->draw()->text("404 Not Found", $font, new Point(0, 0));

        $box = $image->getSize();
        $box = $box->widen($maxWidth);

        if ($box->getHeight() > $maxHeight) {
            $box = $box->heighten($maxHeight);
        }

        $image->resize($box);

        return parent::__construct($image->get("png"), 404, array("Content-Type" => "image/png"));
    }
}