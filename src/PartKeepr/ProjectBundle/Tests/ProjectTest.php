<?php
namespace PartKeepr\ProjectBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ProjectTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
                'PartKeepr\ProjectBundle\DataFixtures\ProjectFixtureLoader',
            )
        )->getReferenceRepository();
    }

    public function testCreateProject()
    {
        $client = static::makeClient(true);

        $file = __DIR__."/../../UploadedFileBundle/Tests/Fixtures/files/uploadtest.png";
        $originalFilename = 'uploadtest.png';
        $mimeType = "image/png";

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

        $uploadedFile = json_decode($client->getResponse()->getContent());

        /**
         * @var $part Part
         */
        $part = $this->fixtures->getReference("part.1");
        $part2 = $this->fixtures->getReference("part.2");


        $serializedPart1 = $this->getContainer()->get("serializer")->normalize(
            $part,
            'jsonld'
        );

        $serializedPart2 = $this->getContainer()->get("serializer")->normalize(
            $part2,
            'jsonld'
        );

        $project = array(
            "name" => "foobar",
            "description" => "testdescription",
            "attachments" => array(
                $uploadedFile->image,
            ),
            "parts" => array(
                array(
                    "quantity" => 1,
                    "part" => $serializedPart1,
                    "remarks" => "testremark",
                ),
                array(
                    "quantity" => 2,
                    "part" => $serializedPart2,
                    "remarks" => "testremark2",
                ),
            ),
        );

        $client->request(
            'POST',
            '/api/projects',
            array(),
            array(),
            array(),
            json_encode($project)
        );


        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute("@type", $response);
        $this->assertEquals("Project", $response->{"@type"});

        $this->assertObjectHasAttribute("name", $response);
        $this->assertEquals("foobar", $response->name);

        $this->assertObjectHasAttribute("description", $response);
        $this->assertEquals("testdescription", $response->description);

        $this->assertObjectHasAttribute("parts", $response);
        $this->assertInternalType("array", $response->parts);

        $this->assertEquals(2, count($response->parts));
        $this->assertArrayHasKey(0, $response->parts);
        $this->assertEquals("ProjectPart", $response->parts[0]->{"@type"});
        $this->assertEquals(1, $response->parts[0]->quantity);
        $this->assertEquals("testremark", $response->parts[0]->remarks);
        $this->assertEquals("Part", $response->parts[0]->part->{"@type"});

        $this->assertObjectHasAttribute("attachments", $response);
        $this->assertEquals(1, count($response->attachments));
        $this->assertArrayHasKey(0, $response->attachments);
        $this->assertEquals("ProjectAttachment", $response->attachments[0]->{"@type"});

        unset($response->parts[0]);


    }

    public function testProjectPartRemoval()
    {
        $client = static::makeClient(true);

        $project = $this->fixtures->getReference("project");
        $projectPart = $this->fixtures->getReference("projectpart.1");
        $project->removePart($projectPart);

        $serializedProject = $this->getContainer()->get("serializer")->normalize(
            $project,
            'jsonld'
        );

        $iriConverter = $this->getContainer()->get("api.iri_converter");
        $iri = $iriConverter->getIriFromItem($project);

        $client->request(
            'PUT',
            $iri,
            array(),
            array(),
            array(),
            json_encode($serializedProject)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->markTestIncomplete(
            "This test can't be completed yet. See https://github.com/dunglas/DunglasApiBundle/issues/285"
        );

        $this->assertInternalType("array", $response->parts);
        $this->assertArrayNotHasKey(1, $response->parts,
            "When removing an entry from the ArrayCollection, the array must be resorted!");
    }
}
