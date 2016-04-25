<?php

namespace PartKeepr\AuthBundle\Tests;

use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class LegacyAuthTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures([]);
    }

    public function testLegacyAuth()
    {
        $user = new User('foobar');
        $user->setPassword(md5('admin'));
        $user->setLegacy(true);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($user);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($user);

        $client = static::makeClient(false, [
                'PHP_AUTH_USER' => 'foobar',
                'PHP_AUTH_PW'   => 'admin',
            ]
        );

        $client->request('GET', '/api/system_status');

        $this->assertEquals(200, $client->getResponse()->getStatusCode());

        $client = static::makeClient(false, [
                'PHP_AUTH_USER' => 'foobar',
                'PHP_AUTH_PW'   => 'admin2',
            ]
        );

        $client->request('GET', '/api/system_status');

        $this->assertEquals(401, $client->getResponse()->getStatusCode());
    }
}
