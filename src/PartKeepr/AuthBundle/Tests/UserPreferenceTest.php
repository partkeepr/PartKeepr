<?php
namespace PartKeepr\AuthBundle\Tests;


use Doctrine\Common\DataFixtures\ProxyReferenceRepository;
use Liip\FunctionalTestBundle\Test\WebTestCase;

class UserPreferenceTest extends WebTestCase
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

    public function testPreferences()
    {
        $client = static::makeClient(true);

        $request = array(
            "preferenceKey" => "foobar",
            "preferenceValue" => "1234",
        );

        $client->request(
            'POST',
            '/api/user_preferences',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json'),
            json_encode($request)
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertObjectHasAttribute("preferenceKey", $response);
        $this->assertObjectHasAttribute("preferenceValue", $response);
        $this->assertEquals("foobar", $response->preferenceKey);
        $this->assertEquals("1234", $response->preferenceValue);

        $client->request(
            'GET',
            '/api/user_preferences',
            array(),
            array(),
            array('CONTENT_TYPE' => 'application/json')
        );

        $response = json_decode($client->getResponse()->getContent());

        $this->assertInternalType("array", $response);

        $preference = $response[0];

        $this->assertObjectHasAttribute("preferenceKey", $preference);
        $this->assertObjectHasAttribute("preferenceValue", $preference);
        $this->assertEquals("foobar", $preference->preferenceKey);
        $this->assertEquals("1234", $preference->preferenceValue);

    }
}
