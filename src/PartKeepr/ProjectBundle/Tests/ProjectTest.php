<?php

namespace PartKeepr\ProjectBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\CoreBundle\Tests\WebTestCase;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\ProjectBundle\Entity\Project;
use PartKeepr\ProjectBundle\Entity\ProjectAttachment;
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
            [
                'PartKeepr\StorageLocationBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\StorageLocationBundle\DataFixtures\StorageLocationLoader',
                'PartKeepr\PartBundle\DataFixtures\CategoryDataLoader',
                'PartKeepr\PartBundle\DataFixtures\PartDataLoader',
                'PartKeepr\ProjectBundle\DataFixtures\ProjectFixtureLoader',
            ]
        )->getReferenceRepository();
    }

    public function testCreateProject()
    {
        $client = static::makeClient(true);

        $file = __DIR__.'/../../UploadedFileBundle/Tests/Fixtures/files/uploadtest.png';
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

        $uploadedFile = json_decode($client->getResponse()->getContent());

        /**
         * @var Part
         */
        $part = $this->fixtures->getReference('part.1');
        $part2 = $this->fixtures->getReference('part.2');

        $serializedPart1 = $this->getContainer()->get('serializer')->normalize(
            $part,
            'jsonld'
        );

        $serializedPart2 = $this->getContainer()->get('serializer')->normalize(
            $part2,
            'jsonld'
        );

        $project = [
            'name'        => 'foobar',
            'description' => 'testdescription',
            'attachments' => [
                $uploadedFile->image,
            ],
            'parts' => [
                [
                    'quantity' => 1,
                    'part'     => $serializedPart1,
                    'remarks'  => 'testremark',
                ],
                [
                    'quantity' => 2,
                    'part'     => $serializedPart2,
                    'remarks'  => 'testremark2',
                ],
            ],
        ];

        $client->request(
            'POST',
            '/api/projects',
            [],
            [],
            [],
            json_encode($project)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute('@type', $response);
        $this->assertEquals('Project', $response->{'@type'});

        $this->assertObjectHasAttribute('name', $response);
        $this->assertEquals('foobar', $response->name);

        $this->assertObjectHasAttribute('description', $response);
        $this->assertEquals('testdescription', $response->description);

        $this->assertObjectHasAttribute('parts', $response);
        $this->assertInternalType('array', $response->parts);

        $this->assertEquals(2, count($response->parts));
        $this->assertArrayHasKey(0, $response->parts);
        $this->assertEquals('ProjectPart', $response->parts[0]->{'@type'});
        $this->assertEquals(1, $response->parts[0]->quantity);
        $this->assertEquals('testremark', $response->parts[0]->remarks);
        $this->assertEquals('Part', $response->parts[0]->part->{'@type'});

        $this->assertObjectHasAttribute('attachments', $response);
        $this->assertEquals(1, count($response->attachments));
        $this->assertArrayHasKey(0, $response->attachments);
        $this->assertEquals('ProjectAttachment', $response->attachments[0]->{'@type'});

        unset($response->parts[0]);
    }

    public function testProjectPartRemoval()
    {
        $client = static::makeClient(true);

        $project = $this->fixtures->getReference('project');
        $projectPart = $this->fixtures->getReference('projectpart.1');
        $project->removePart($projectPart);

        $serializedProject = $this->getContainer()->get('serializer')->normalize(
            $project,
            'jsonld'
        );

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($project);

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            [],
            json_encode($serializedProject)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('array', $response->parts);
        $this->assertArrayNotHasKey(1, $response->parts,
            'When removing an entry from the ArrayCollection, the array must be resorted!');
        $this->assertEquals(1, count($response->parts));
    }

    public function testProjectAttachmentRemoval()
    {
        $client = static::makeClient(true);

        /**
         * @var Project
         */
        $project = $this->fixtures->getReference('project');

        $projectAttachment = new ProjectAttachment();

        $fileService = $this->getContainer()->get('partkeepr_uploadedfile_service');
        $fileService->replaceFromData($projectAttachment, 'BLA', 'test.txt');

        $project->addAttachment($projectAttachment);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($project);

        $project->removeAttachment($projectAttachment);

        $serializedProject = $this->getContainer()->get('serializer')->normalize(
            $project,
            'jsonld'
        );

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($project);

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            [],
            json_encode($serializedProject)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType('array', $response->attachments);
        $this->assertArrayNotHasKey(1, $response->attachments,
            'When removing an entry from the ArrayCollection, the array must be resorted!');

        $this->assertEquals(0, count($response->attachments));
    }
}
