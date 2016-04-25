<?php

namespace PartKeepr\SetupBundle\Controller;

use Doctrine\Bundle\MigrationsBundle\Command\DoctrineCommand;
use Doctrine\DBAL\Migrations\Configuration\Configuration;
use Doctrine\DBAL\Migrations\Migration;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SchemaMigrationSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_migrate_schema")
     */
    public function intMigrateSchemaAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Database schema successfully migrated',
        ];

        $configuration = $this->getMigrationConfiguration();
        $migration = new Migration($configuration);

        $version = $configuration->getLatestVersion();

        $migration->migrate($version);

        return new JsonResponse($response);
    }

    protected function getMigrationConfiguration()
    {
        $config = new Configuration($this->get('doctrine.dbal.default_connection'));

        DoctrineCommand::configureMigrations($this->container, $config);

        return $config;
    }

    /**
     * @Route("/setup/schemaMigration")
     */
    public function migrateSchemaAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_migrate_schema');

        return new Response($response->getContent());
    }
}
