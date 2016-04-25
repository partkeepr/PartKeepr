<?php

namespace PartKeepr\AuthBundle\Tests;

use Doctrine\Common\DataFixtures\Executor\ORMExecutor;
use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Exceptions\UserProtectedException;
use PartKeepr\CoreBundle\Tests\WebTestCase;

class UserTest extends WebTestCase
{
    /**
     * @var ProxyReferenceRepository
     */
    protected $fixtures;

    public function setUp()
    {
        /**
         * @var ORMExecutor
         */
        $ormExecutor = $this->loadFixtures(
            [
                'PartKeepr\AuthBundle\DataFixtures\LoadUserData',
            ]);

        $this->fixtures = $ormExecutor->getReferenceRepository();
    }

    public function testCreateUser()
    {
        $client = static::makeClient(true);

        $data = [
            'username'    => 'foobartest',
            'newPassword' => '1234',
        ];

        $client->request('POST', '/api/users', [], [], [], json_encode($data));

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(201, $client->getResponse()->getStatusCode());
        $this->assertEquals('foobartest', $response->{'username'});
        $this->assertEmpty($response->{'password'});
        $this->assertEmpty($response->{'newPassword'});
        $this->assertFalse($response->{'legacy'});
    }

    public function testChangeUserPassword()
    {
        $builtinProvider = $this->getContainer()->get('partkeepr.userservice')->getBuiltinProvider();

        $user = new User('bernd');
        $user->setPassword(md5('admin'));
        $user->setLegacy(true);
        $user->setProvider($builtinProvider);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($user);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($user);

        $client = static::makeClient(true);

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($user);

        $client->request('GET', $iri);

        $response = json_decode($client->getResponse()->getContent());

        $response->{'newPassword'} = 'foobar';

        $client->request('PUT', $iri, [], [], [], json_encode($response));

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertEmpty($response->{'password'});
        $this->assertEmpty($response->{'newPassword'});
        $this->assertFalse($response->{'legacy'});
    }

    public function testSelfChangeUserPassword()
    {
        $builtinProvider = $this->getContainer()->get('partkeepr.userservice')->getBuiltinProvider();

        $user = new User('bernd2');
        $user->setPassword(md5('admin'));
        $user->setLegacy(true);
        $user->setProvider($builtinProvider);

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->persist($user);
        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush($user);

        $client = static::makeClient(false, [
                'PHP_AUTH_USER' => 'bernd2',
                'PHP_AUTH_PW'   => 'admin',
            ]
        );

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($user).'/changePassword';

        $parameters = [
            'oldpassword' => 'admin',
            'newpassword' => 'foobar',
        ];

        $client->request('PUT', $iri, $parameters);

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(200, $client->getResponse()->getStatusCode());
        $this->assertFalse($response->{'legacy'});
        $this->assertEmpty($response->{'password'});
        $this->assertEmpty($response->{'newPassword'});

        $client = static::makeClient(false, [
                'PHP_AUTH_USER' => 'bernd2',
                'PHP_AUTH_PW'   => 'foobar',
            ]
        );

        $client->request('PUT', $iri, $parameters);

        $response = json_decode($client->getResponse()->getContent());

        $this->assertEquals(500, $client->getResponse()->getStatusCode());
        $this->assertObjectHasAttribute('@type', $response);
        $this->assertEquals('Error', $response->{'@type'});
    }

    public function testUserProtect()
    {
        /**
         * @var FOSUser
         */
        $fosUser = $this->fixtures->getReference('user.admin');
        $userService = $this->getContainer()->get('partkeepr.userservice');

        $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);

        /*
         * @var User $user
         */
        $userService->protect($user);

        $this->assertTrue($user->isProtected());

        $client = static::makeClient(true);

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($user);

        $data = [
            'username' => 'foo',
        ];
        $client->request('PUT', $iri, [], [], [], json_encode($data));

        $response = json_decode($client->getResponse()->getContent());

        $exception = new UserProtectedException();
        $this->assertEquals(500, $client->getResponse()->getStatusCode());
        $this->assertObjectHasAttribute('hydra:description', $response);
        $this->assertEquals($exception->getMessageKey(), $response->{'hydra:description'});

        $client->request('DELETE', $iri);

        $response = json_decode($client->getResponse()->getContent());
        $this->assertEquals(500, $client->getResponse()->getStatusCode());
        $this->assertObjectHasAttribute('hydra:description', $response);
        $this->assertEquals($exception->getMessageKey(), $response->{'hydra:description'});
    }

    public function testUserUnprotect()
    {
        /**
         * @var FOSUser
         */
        $fosUser = $this->fixtures->getReference('user.admin');
        $userService = $this->getContainer()->get('partkeepr.userservice');

        $user = $userService->getProxyUser($fosUser->getUsername(), $userService->getBuiltinProvider(), true);

        /*
         * @var User $user
         */
        $userService->unprotect($user);

        $this->assertFalse($user->isProtected());
    }

    /**
     * Tests the proper user deletion if user preferences exist.
     *
     * Unit test for Bug #569
     *
     * @see https://github.com/partkeepr/PartKeepr/issues/569
     */
    public function testUserWithPreferencesDeletion()
    {
        $client = static::makeClient(true);

        $data = [
            'username'    => 'preferenceuser',
            'newPassword' => '1234',
        ];

        $client->request('POST', '/api/users', [], [], [], json_encode($data));

        $userPreferenceService = $this->getContainer()->get('partkeepr.user_preference_service');
        $userService = $this->getContainer()->get('partkeepr.userservice');

        /**
         * @var User
         */
        $user = $userService->getProxyUser('preferenceuser', $userService->getBuiltinProvider(), true);

        $userPreferenceService->setPreference($user, 'foo', 'bar');

        $iriConverter = $this->getContainer()->get('api.iri_converter');
        $iri = $iriConverter->getIriFromItem($user);

        $client->request('DELETE', $iri);

        $this->assertEquals(204, $client->getResponse()->getStatusCode());
        $this->assertEmpty($client->getResponse()->getContent());
    }
}
