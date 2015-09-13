<?php
namespace PartKeepr\UploadedFileBundle\Tests;


use Liip\FunctionalTestBundle\Test\WebTestCase;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class UploadTest extends WebTestCase
{
    public function testUploadAction()
    {
        $client = static::createClient();

        $file = __DIR__."/Fixtures/files/uploadtest.png";
        $originalFilename = 'uploadtest.png';
        $mimeType = "image/png";
        $extension = "png";

        $image = new UploadedFile(
            $file,
            $originalFilename,
            $mimeType,
            filesize($file)
        );

        $client->request(
            'POST',
            '/api/temp_uploaded_files/upload',
            array(),
            array('userfile' => $image)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute("success", $response);
        $this->assertObjectHasAttribute("image", $response);
        $this->assertObjectHasAttribute("response", $response);

        $this->assertEquals(true, $response->success);

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

        $this->assertEquals("tempfile", $response->image->type);
        $this->assertEquals("tempfile", $response->response->type);

        $property = "@type";

        $this->assertEquals("TempUploadedFile", $response->image->$property);
        $this->assertEquals("TempUploadedFile", $response->response->$property);

    }
}
