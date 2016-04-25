<?php
/**
 * Created by PhpStorm.
 * User: felicitus
 * Date: 10/9/15
 * Time: 7:43 PM.
 */
namespace PartKeepr\CoreBundle\Tests;

/**
 * Special WebTestCase which forces to load the AppKernel. This is because the base getKernelClass() method
 * does wildcard matching on *Kernel.php within the app/ directory, and on some systems it might happen that
 * SetupAppKernel gets loaded first, causing unit tests to fail.
 */
class SetupWebTestCase extends WebTestCase
{
    public function generateAndGetAuthKey()
    {
        $client = static::makeClient();

        $client->request(
            'POST',
            '/setup/generateAuthKey'
        );

        return $this->getContainer()->get('partkeepr.setup.config_service')->getAuthKey();
    }

    public function getConfiguration($authKey)
    {
        $client = static::makeClient();

        $voidConfig = [
            'authKey' => $authKey,
            'values'  => [],
        ];
        $client->request(
            'POST',
            '/setup/parseExistingConfig',
            [],
            [],
            [],
            json_encode($voidConfig)
        );

        $responseObj = json_decode($client->getResponse()->getContent(), true);

        return $responseObj['config'];
    }
}
