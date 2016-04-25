<?php

namespace PartKeepr\SetupBundle\Controller;

use Doctrine\ORM\Tools\SchemaTool;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SchemaSetupController extends SetupBaseController
{
    /**
     * @Route("/setup/_int_setup_schema")
     */
    public function intSetupSchemaAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'Database successfully installed/updated',
        ];

        $entityManager = $this->get('doctrine.orm.default_entity_manager');
        $schemaTool = new SchemaTool($entityManager);
        $metadatas = $entityManager->getMetadataFactory()->getAllMetadata();

        try {
            $schemaTool->updateSchema($metadatas, true);
        } catch (\Exception $e) {
            $response['success'] = false;
            $response['message'] = 'Database setup error';
            $response['errors'] = [$e->getMessage()];
        }

        return new JsonResponse($response);
    }

    /**
     * @Route("/setup/schemaSetup")
     */
    public function setupSchemaAction(Request $request)
    {
        $response = $this->handleRequest($request, '/setup/_int_setup_schema');

        return new Response($response->getContent());
    }
}
