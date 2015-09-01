<?php

namespace PartKeepr\AuthBundle\Tests\Controller;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use PartKeepr\AuthBundle\Entity\User;

class DefaultControllerTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    private $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            )
        )->getReferenceRepository();
    }

    public function testGetSalt()
    {
        $client = static::createClient();

        $request = array("username" => "admin");

        $client->request(
            'POST',
            '/auth/getSalt',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $response = json_decode($client->getResponse()->getContent());

        $admin = $this->fixtures->getReference("user.admin");

        /**
         * @var User $admin
         */
        $this->assertEquals($admin->getSalt(), $response);
    }
}
