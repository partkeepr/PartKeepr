<?php

namespace PartKeepr\SetupBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class FileMigrationController extends SetupBaseController
{
    /**
     * Checks if there are existing userds in the database.
     *
     * @Route("/setup/migrateFiles")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function migrateFilesAction(Request $request)
    {
        $this->dumpConfig($request);

        $response = $this->handleRequest($request, '/setup/_int_migrate_files_action');

        return new Response($response->getContent());
    }

    /**
     * @Route("/setup/_int_migrate_files_action")
     */
    public function intMigrateFilesAction(Request $request)
    {
        if (!$this->ensureAuthKey($request)) {
            return $this->getAuthKeyErrorResponse();
        }

        $response = [
            'success' => true,
            'errors'  => [],
            'message' => 'No files to migrate',
        ];

        $legacyConfig = $this->get('partkeepr.setup.config_service')->legacyConfigParser();

        $legacyFilePath = $this->get('kernel')->getRootDir().'/../data/';
        $legacyImagePath = $this->get('kernel')->getRootDir().'/../data/images/';

        $legacyFileDirectories = ['FootprintAttachment', 'PartAttachment', 'ProjectAttachment'];

        if (array_key_exists('partkeepr.files.path', $legacyConfig)) {
            $legacyFilePath = $legacyConfig['partkeepr.files.path'];
        }

        if (array_key_exists('partkeepr.images.path', $legacyConfig)) {
            $legacyImagePath = $legacyConfig['partkeepr.images.path'];
        }

        $newFilesPath = $legacyFilePath.'/files/';
        $newImagesPath = $legacyFilePath.'/images/';

        if (!is_dir($newFilesPath)) {
            mkdir($newFilesPath, 0777, true);
        }

        if (!is_dir($newImagesPath)) {
            mkdir($newImagesPath, 0777, true);
        }

        foreach ($legacyFileDirectories as $legacyFileDirectory) {
            $legacyMovePath = $legacyFilePath.'/'.$legacyFileDirectory.'/';
            $newMovePath = $legacyFilePath.'/files/'.$legacyFileDirectory.'/';

            if (is_dir($legacyMovePath)) {
                $this->moveFiles($legacyMovePath, $newMovePath);
                $response['message'] = 'Old image directories moved';
            }
        }

        $legacyImageDirectories = ['footprint', 'iclogo', 'part', 'storagelocation'];

        foreach ($legacyImageDirectories as $legacyImageDirectory) {
            $legacyMovePath = $legacyImagePath.'/'.$legacyImageDirectory.'/';
            $newMovePath = $legacyFilePath.'/images/'.$legacyImageDirectory.'/';

            if (is_dir($legacyMovePath)) {
                $this->moveFiles($legacyMovePath, $newMovePath);
                $response['message'] = 'Old image directories moved';
            }
        }

        return new JsonResponse($response);
    }

    public function moveFiles($source, $target)
    {
        $iterator = new \DirectoryIterator($source);

        if (!is_dir($target)) {
            mkdir($target, 0777, true);
        }

        foreach ($iterator as $file) {
            if (!$file->isDot()) {
                rename($file->getPathName(), $target.'/'.$file->getFilename());
            }
        }
    }
}
