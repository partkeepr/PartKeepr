<?php

namespace PartKeepr\AuthBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{

    private $repo;

    public function testLogin()
    {
        $this->loadFixtures(
            array(
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData'
            )
        );

        $client = static::createClient();

        $request = array("username" => "admin", "password" => md5("admin"));

        $client->request(
            'POST',
            '/auth/login',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute("sessionId", $response);
        $this->assertObjectHasAttribute("username", $response);

    }
}
