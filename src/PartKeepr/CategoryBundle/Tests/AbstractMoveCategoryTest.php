<?php

namespace PartKeepr\CategoryBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use PartKeepr\CategoryBundle\Entity\AbstractCategory;
use PartKeepr\CoreBundle\Tests\WebTestCase;

abstract class AbstractMoveCategoryTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            [
                $this->getFixtureLoaderClass(),
            ]
        )->getReferenceRepository();
    }

    public function testMoveCategory()
    {
        $client = static::makeClient(true);

        /**
         * @var AbstractCategory
         * @var $rootCategory    AbstractCategory
         */
        $secondCategory = $this->fixtures->getReference($this->getReferencePrefix().'.second');
        $rootCategory = $this->fixtures->getReference($this->getReferencePrefix().'.root');

        /**
         * @var IriConverter
         */
        $iriConverter = $this->getContainer()->get('api.iri_converter');

        $iri = $iriConverter->getIriFromItem($secondCategory);
        $iri .= '/move';

        $targetIri = $iriConverter->getIriFromItem($rootCategory);

        $request = [
            'parent' => $targetIri,
        ];

        $client->request(
            'PUT',
            $iri,
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $this->assertEquals($rootCategory->getId(), $secondCategory->getParent()->getId());
        $this->assertEquals('Root Node ➤ Second Category', $secondCategory->getCategoryPath());
    }

    abstract public function getFixtureLoaderClass();

    abstract public function getReferencePrefix();
}
