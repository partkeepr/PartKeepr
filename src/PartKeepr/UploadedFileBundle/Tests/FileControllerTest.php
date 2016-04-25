<?php

namespace PartKeepr\UploadedFileBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileControllerTest extends WebTestCase
{
    public function testMimeType()
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
            '/api/temp_uploaded_files/upload',
            [],
            ['userfile' => $image]
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('image', $response);

        $property = '@id';
        $uri = $response->image->$property;
        $uri .= '/getMimeTypeIcon';

        $client->request(
            'GET',
            $uri
        );

        $this->assertEquals('image/svg+xml', $client->getResponse()->headers->get('Content-Type'));
    }

    public function testGetFile()
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
            '/api/temp_uploaded_files/upload',
            [],
            ['userfile' => $image]
        );

        $response = json_decode($client->getResponse()->getContent());

        $property = '@id';
        $uri = $response->image->$property;
        $uri .= '/getFile';

        $client->request(
            'GET',
            $uri
        );

        $this->assertEquals('image/png', $client->getResponse()->headers->get('Content-Type'));
        $this->assertEquals(file_get_contents($file), $client->getResponse()->getContent());
    }
}
