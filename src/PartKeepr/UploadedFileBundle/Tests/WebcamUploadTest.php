<?php
namespace PartKeepr\UploadedFileBundle\Tests;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class WebcamUploadTest extends WebTestCase
{
    public function testWebcamUploadAction()
    {
        $client = static::createClient();

        $file = __DIR__."/Fixtures/files/uploadtest.png";
        $mimeType = "image/png";
        $extension = "png";

        $contents = file_get_contents($file);

        $fileString = "data:image/png;base64,".base64_encode($contents);

        $client->request(
            'POST',
            '/api/temp_uploaded_files/webcamUpload',
            array(),
            array(),
            array(),
            $fileString
        );

        $response = json_decode($client->getResponse()->getContent());

        $propertiesToCheck = array(
            "@context",
            "@id",
            "@type",
            "originalFilename",
            "size",
            "type",
            "filename",
            "mimeType",
            "extension",
            "description",
            "legacyExtension",
        );

        foreach ($propertiesToCheck as $property) {
            $this->assertObjectHasAttribute($property, $response);
        }

        $this->assertEquals(filesize($file), $response->size);
        $this->assertEquals($mimeType, $response->mimeType);
        $this->assertEquals("webcam.png", $response->originalFilename);
        $this->assertEquals($extension, $response->extension);
        $this->assertEquals("tempfile", $response->type);

        $property = "@type";
        $this->assertEquals("TempUploadedFile", $response->$property);
    }

}