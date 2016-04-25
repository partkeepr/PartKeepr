<?php

namespace PartKeepr\UploadedFileBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class TemporaryFileControllerTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testUploadAction()
    {
        $client = static::makeClient(true);

        $file = __DIR__.'/Fixtures/files/uploadtest.png';
        $originalFilename = 'uploadtest.png';
        $mimeType = 'image/png';
        $extension = 'png';

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

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('success', $response);
        $this->assertObjectHasAttribute('image', $response);
        $this->assertObjectHasAttribute('response', $response);

        $this->assertEquals(true, $response->success);

        $propertiesToCheck = [
            '@context',
            '@id',
            '@type',
            'originalFilename',
            'size',
            'type',
            'filename',
            'mimeType',
            'extension',
            'description',
            'legacyExtension',
        ];

        foreach ($propertiesToCheck as $property) {
            $this->assertObjectHasAttribute($property, $response->image);
            $this->assertObjectHasAttribute($property, $response->response);
        }

        $this->assertEquals(filesize($file), $response->image->size);
        $this->assertEquals(filesize($file), $response->response->size);

        $this->assertEquals($originalFilename, $response->image->originalFilename);
        $this->assertEquals($originalFilename, $response->response->originalFilename);

        $this->assertEquals($mimeType, $response->image->mimeType);
        $this->assertEquals($mimeType, $response->response->mimeType);

        $this->assertEquals($extension, $response->image->extension);
        $this->assertEquals($extension, $response->response->extension);

        $this->assertEquals('tempfile', $response->image->type);
        $this->assertEquals('tempfile', $response->response->type);

        $property = '@type';

        $this->assertEquals('TempUploadedFile', $response->image->$property);
        $this->assertEquals('TempUploadedFile', $response->response->$property);
    }

    public function testURLUploadAction()
    {
        $client = static::makeClient(true);

        $client->request(
            'POST',
            '/api/temp_uploaded_files/upload',
            ['url' => 'https://www.partkeepr.org/images/pklogo.svg']
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('success', $response);
        $this->assertObjectHasAttribute('image', $response);
        $this->assertObjectHasAttribute('response', $response);
    }

    public function testUploadException()
    {
        $client = static::makeClient(true);

        $client->request(
            'POST',
            '/api/temp_uploaded_files/upload',
            []
        );

        $response = json_decode($client->getResponse()->getContent());

        //var_dump($response);

        $attribute = '@type';

        $this->assertObjectHasAttribute($attribute, $response);
        $this->assertEquals('Error', $response->$attribute);
    }

    public function testWebcamUploadAction()
    {
        $client = static::makeClient(true);

        $file = __DIR__.'/Fixtures/files/uploadtest.png';
        $mimeType = 'image/png';
        $extension = 'png';

        $contents = file_get_contents($file);

        $fileString = 'data:image/png;base64,'.base64_encode($contents);

        $client->request(
            'POST',
            '/api/temp_uploaded_files/webcamUpload',
            [],
            [],
            [],
            $fileString
        );

        $response = json_decode($client->getResponse()->getContent());

        $propertiesToCheck = [
            '@context',
            '@id',
            '@type',
            'originalFilename',
            'size',
            'type',
            'filename',
            'mimeType',
            'extension',
            'description',
            'legacyExtension',
        ];

        foreach ($propertiesToCheck as $property) {
            $this->assertObjectHasAttribute($property, $response);
        }

        $this->assertEquals(filesize($file), $response->size);
        $this->assertEquals($mimeType, $response->mimeType);
        $this->assertEquals('webcam.png', $response->originalFilename);
        $this->assertEquals($extension, $response->extension);
        $this->assertEquals('tempfile', $response->type);

        $property = '@type';
        $this->assertEquals('TempUploadedFile', $response->$property);
    }

    public function testGetFile()
    {
    }
}
