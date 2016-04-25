<?php

namespace PartKeepr\ImageBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;
use PartKeepr\ImageBundle\Entity\TempImage;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ImageControllerTest extends WebTestCase
{
    public function testGetImage()
    {
        $client = static::makeClient(true);

        $file = __DIR__.'/Fixtures/files/uploadtest.png';
        $originalFilename = 'uploadtest.png';
        $mimeType = 'image/png';

        $image = new UploadedFile(
            $file,
            $originalFilename,
            $mimeType,
            filesize($file)
        );

        $client->request(
            'POST',
            '/api/temp_images/upload',
            [],
            ['userfile' => $image]
        );

        $response = json_decode($client->getResponse()->getContent());

        $property = '@id';
        $imageId = $response->image->$property;
        $uri = $imageId.'/getImage';

        $client->request(
            'GET',
            $uri
        );

        $this->assertEquals('image/png', $client->getResponse()->headers->get('Content-Type'));

        $imageSize = getimagesizefromstring($client->getResponse()->getContent());

        $this->assertEquals(51, $imageSize[0]);
        $this->assertEquals(23, $imageSize[1]);

        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $image = $iriConverter->getItemFromIri($imageId);

        /*
         * @var $image TempImage
         */

        $this->getContainer()->get('partkeepr_image_service')->delete($image);

        $client->request(
            'GET',
            $uri
        );

        $this->assertEquals(404, $client->getResponse()->getStatusCode());
    }
}
