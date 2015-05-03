<?php

namespace PartKeepr\AuthBundle\Tests\Controller;

use Liip\FunctionalTestBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function setUp()
    {
        $this->loadFixtures(
            array(
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            )
        );
    }

    public function testLogin()
    {
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

    public function testMD5Constraint()
    {
        $client = static::createClient();

        $request = array("username" => "IDONOTEXIST", "password" => "IAMANINVALIDMD5HASH");

        $client->request(
            'POST',
            '/auth/login',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $this->assertEquals($client->getResponse()->getStatusCode(), 400);
    }

    public function testFailedLogin()
    {
        $client = static::createClient();

        $request = array("username" => "IDONOTEXIST", "password" => md5("I AM NOT EXISTANT"));

        $client->request(
            'POST',
            '/auth/login',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $this->assertEquals($client->getResponse()->getStatusCode(), 401);
    }

    public function testUsernameConstraints () {
        $this->_testInvalidUsernameConstraint("a"); // Username must be longer than 3 characters
        $this->_testInvalidUsernameConstraint(str_repeat("a",51)); // Username must be shorter than 50 characters
        $this->_testInvalidUsernameConstraint("BÄH"); // Username must not contain umlauts

        $this->_testValidUsernameConstraint("void_bar\\foo/test.ding-dong");
    }
    public function _testInvalidUsernameConstraint($username)
    {
        $client = static::createClient();

        $request = array("username" => $username, "password" => md5("I AM NOT EXISTANT"));

        $client->request(
            'POST',
            '/auth/login',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $this->assertEquals($client->getResponse()->getStatusCode(), 400);
    }

    public function _testValidUsernameConstraint($username)
    {
        $client = static::createClient();

        $request = array("username" => $username, "password" => md5("I AM NOT EXISTANT"));

        $client->request(
            'POST',
            '/auth/login',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $this->assertNotEquals($client->getResponse()->getStatusCode(), 400);
    }

}
