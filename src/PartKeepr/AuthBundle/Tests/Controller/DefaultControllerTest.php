<?php

namespace PartKeepr\AuthBundle\Tests\Controller;

use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    private $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            [
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            ]
        )->getReferenceRepository();
    }

    public function testGetSalt()
    {
        $client = static::createClient();

        $request = ['username' => 'admin'];

        $client->request(
            'POST',
            '/api/users/getSalt',
            [],
            [],
            ['CONTENT_TYPE' => 'application/json'],
            json_encode($request)
        );

        $response = json_decode($client->getResponse()->getContent());

        $admin = $this->fixtures->getReference('user.admin');

        /*
         * @var FOSUser $admin
         */

        $this->assertEquals($admin->getSalt(), $response);
    }
}
