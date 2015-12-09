<?php
namespace PartKeepr\AuthBundle\Tests;


use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class UserTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        $this->fixtures = $this->loadFixtures(
            array(
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            )
        )->getReferenceRepository();
    }

    public function testCreateUser()
    {
        $client = static::makeClient(true);

        $data = array(
            "username" => "foobartest",
            "newPassword" => "1234",
        );

        $client->request("POST", "/api/users", array(), array(), array(), json_encode($data));

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(201, $client->getResponse()->getStatusCode());
        $this->assertEquals("foobartest", $response->{"username"});
        $this->assertEmpty($response->{"password"});
        $this->assertEmpty($response->{"newPassword"});
        $this->assertFalse($response->{"legacy"});
    }

    public function testChangeUserPassword()
    {
        $builtinProvider = $this->getContainer()->get("partkeepr.userservice")->getBuiltinProvider();

        $user = new User("bernd");
        $user->setPassword(md5("admin"));
        $user->setLegacy(true);
        $user->setProvider($builtinProvider);

        $this->getContainer()->get("doctrine.orm.default_entity_manager")->persist($user);
        $this->getContainer()->get("doctrine.orm.default_entity_manager")->flush($user);

        $client = static::makeClient(true);

        $iriConverter = $this->getContainer()->get("api.iri_converter");
        $iri = $iriConverter->getIriFromItem($user);

        $client->request("GET", $iri);

        $response = json_decode($client->getResponse()->getContent());

        $response->{"newPassword"} = "foobar";

        $client->request("PUT", $iri, array(), array(), array(), json_encode($response));

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertEmpty($response->{"password"});
        $this->assertEmpty($response->{"newPassword"});
        $this->assertFalse($response->{"legacy"});
    }

    public function testSelfChangeUserPassword()
    {
        $builtinProvider = $this->getContainer()->get("partkeepr.userservice")->getBuiltinProvider();

        $user = new User("bernd2");
        $user->setPassword(md5("admin"));
        $user->setLegacy(true);
        $user->setProvider($builtinProvider);

        $this->getContainer()->get("doctrine.orm.default_entity_manager")->persist($user);
        $this->getContainer()->get("doctrine.orm.default_entity_manager")->flush($user);

        $client = static::makeClient(false, array(
                'PHP_AUTH_USER' => "bernd2",
                'PHP_AUTH_PW' => "admin",
            )
        );

        $iriConverter = $this->getContainer()->get("api.iri_converter");
        $iri = $iriConverter->getIriFromItem($user)."/changePassword";

        $parameters = array(
            "oldpassword" => "admin",
            "newpassword" => "foobar",
        );

        $client->request("PUT", $iri, $parameters);

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertFalse($response->{"legacy"});
        $this->assertEmpty($response->{"password"});
        $this->assertEmpty($response->{"newPassword"});

        $client = static::makeClient(false, array(
                'PHP_AUTH_USER' => "bernd2",
                'PHP_AUTH_PW' => "foobar",
            )
        );

        $client->request("PUT", $iri, $parameters);

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(500, $client->getResponse()->getStatusCode());
        $this->assertObjectHasAttribute("@type", $response);
        $this->assertEquals("Error", $response->{"@type"});
    }

    public function testUserProtect()
    {
        /**
         * @var FOSUser $fosUser
         */
        $fosUser = $this->fixtures->getReference("user.admin");
        $userService = $this->getContainer()->get("partkeepr.userservice");


        $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);

        /**
         * @var User $user
         */
        $userService->protect($user);

        $this->assertTrue($user->isProtected());
    }

    public function testUserUnprotect()
    {
        /**
         * @var FOSUser $fosUser
         */
        $fosUser = $this->fixtures->getReference("user.admin");
        $userService = $this->getContainer()->get("partkeepr.userservice");


        $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);

        /**
         * @var User $user
         */
        $userService->unprotect($user);

        $this->assertFalse($user->isProtected());
    }
}
