<?php
namespace PartKeepr\PartBundle\Tests;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Dunglas\ApiBundle\Api\IriConverter;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\PartBundle\Entity\PartCategory;

class MoveActionTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    private $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\PartBundle\DataFixtures\LoadCategoryData',
            )
        )->getReferenceRepository();
    }

    public function testMoveCategory()
    {
        $client = static::createClient();

        /**
         * @var $secondCategory PartCategory
         * @var $rootCategory PartCategory
         */
        $secondCategory = $this->fixtures->getReference("partcategory.second");
        $rootCategory = $this->fixtures->getReference("partcategory.root");

        /**
         * @var $iriConverter IriConverter
         */
        $iriConverter = $this->getContainer()->get("api.iri_converter");

        $iri = $iriConverter->getIriFromItem($secondCategory);
        $iri .= "/move";

        $targetIri = $iriConverter->getIriFromItem($rootCategory);

        $request = array(
            "parent" => $targetIri,
        );

        $client->request(
            'PUT',
            $iri,
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $this->assertEquals($rootCategory->getId(), $secondCategory->getParent()->getId());
        $this->assertEquals("Root Node / Second Category", $secondCategory->getCategoryPath());
    }
}