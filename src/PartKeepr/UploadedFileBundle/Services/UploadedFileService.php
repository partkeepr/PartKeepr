<?php

namespace PartKeepr\UploadedFileBundle\Services;

use Gaufrette\Exception\FileNotFound;
use Gaufrette\Filesystem;
use PartKeepr\UploadedFileBundle\Entity\UploadedFile;
use PartKeepr\UploadedFileBundle\Exceptions\DiskSpaceExhaustedException;
use Symfony\Component\DependencyInjection\Container;
use Symfony\Component\DependencyInjection\ContainerAware;
use Symfony\Component\HttpFoundation\File\File;

class UploadedFileService extends ContainerAware
{
    /**
     * @var Container
     */
    protected $container;

    public function __construct(Container $container)
    {
        $this->setContainer($container);
    }

    /**
     * Replaces the current file with a new file.
     *
     * @param UploadedFile $file           The target file
     * @param File         $filesystemFile The source file
     */
    public function replace(UploadedFile $file, File $filesystemFile)
    {
        $this->replaceFromFilesystem($file, $filesystemFile);
    }

    /**
     * Replaces the current file with a new file.
     *
     * @param UploadedFile $file           The target file
     * @param File         $filesystemFile The source file
     */
    public function replaceFromFilesystem(UploadedFile $file, File $filesystemFile)
    {
        $file->setOriginalFilename($filesystemFile->getBasename());
        $file->setExtension($filesystemFile->getExtension());
        $file->setMimeType($filesystemFile->getMimeType());
        $file->setSize($filesystemFile->getSize());

        $storage = $this->getStorage($file);

        if ($filesystemFile->getSize() > $this->container->get('partkeepr_systemservice')->getFreeDiskSpace()) {
            throw new DiskSpaceExhaustedException();
        }

        $storage->write($file->getFullFilename(), file_get_contents($filesystemFile->getPathname()), true);
    }

    public function replaceFromData(UploadedFile $file, $data, $filename)
    {
        $tmpdir = ini_get('upload_tmp_dir') ? ini_get('upload_tmp_dir') : sys_get_temp_dir();
        $tempName = tempnam($tmpdir, 'PARTKEEPR');

        file_put_contents($tempName, $data);

        $this->replaceFromFilesystem($file, new File($tempName));
        $file->setOriginalFilename($filename);

        unlink($tempName);
    }

    public function delete(UploadedFile $file)
    {
        $storage = $this->getStorage($file);

        try {
            $storage->delete($file->getFullFilename());
        } catch (FileNotFound $e) {
            $this->container->get('logger')->alert(sprintf('Unable to delete file %s', $file->getFullFilename()),
                [$e, $file]);
        }
    }

    /**
     * Replaces an existing uploaded file with another uploaded file.
     *
     * @param UploadedFile $target The target file
     * @param UploadedFile $source The source file
     */
    public function replaceFromUploadedFile(UploadedFile $target, UploadedFile $source)
    {
        $storage = $this->getStorage($source);
        $this->replaceFromData($target, $storage->read($source->getFullFilename()), $source->getFullFilename());
        $target->setOriginalFilename($source->getOriginalFilename());
    }

    /**
     * Replaces the file from an URL. Does some tricks to avoid 403 forbidden on some sites, like setting a proper
     * browser identification.
     *
     * @param UploadedFile $file The target file
     * @param string       $url  The URL to replace from
     *
     * @throws \Exception An exception if the curl operation failed
     *
     * @todo Parse the filename from the return headers
     */
    public function replaceFromURL(UploadedFile $file, $url)
    {
        /* Some sites don't like automated requests. But the internet is meant to be open for anybody,
         * even for scripts. So we are evil and fake the headers.
         *
         * Credit goes to Ryan Rampersad from whom I copied most code.
         * http://blog.ryanrampersad.com/2008/11/07/get-remote-html-with-curl-and-php/
         */
        $curl = curl_init();

        $header[0] = 'Accept: text/xml,application/xml,application/xhtml+xml,';
        $header[0] .= 'text/html;q=0.9,text/plain;q=0.8,image/png,*/*;q=0.5';
        $header[] = 'Cache-Control: max-age=0';
        $header[] = 'Connection: keep-alive';
        $header[] = 'Keep-Alive: 300';
        $header[] = 'Accept-Charset: ISO-8859-1,utf-8;q=0.7,*;q=0.7';
        $header[] = 'Accept-Language: en-us,en;q=0.5';
        $header[] = 'Pragma: ';

        $browser = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.3) Gecko/2008092510 ';
        $browser .= 'Ubuntu/8.04 (hardy) Firefox/3.0.3';

        curl_setopt($curl, CURLOPT_URL, $url);
        curl_setopt($curl, CURLOPT_USERAGENT, $browser);
        curl_setopt($curl, CURLOPT_HTTPHEADER, $header);
        curl_setopt($curl, CURLOPT_AUTOREFERER, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);
        curl_setopt($curl, CURLOPT_MAXREDIRS, 7);
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, true);

        $data = curl_exec($curl);

        if ($data === false) {
            $curlError = curl_error($curl);
            // Strip ANY tags from the error message. curl tends to spit out <url> is not valid, which then
            // confuses the error message parser on the client side.
            $curlError = str_replace(['>', '<'], '', $curlError);
            throw new \Exception('replaceFromURL error: '.$curlError);
        }

        curl_close($curl);

        $this->replaceFromData($file, $data, basename($url));
    }

    /**
     * Returns the storage directory for a given UploadedFile.
     *
     * @param UploadedFile $file The file to get the storage directory for
     *
     * @return string The storage directory for the type of the given UploadedFile
     */
    public function getStorageDirectory(UploadedFile $file)
    {
        return $this->container->getParameter('partkeepr.directories.'.$file->getType());
    }

    /**
     * @param UploadedFile $file
     *
     * @return Filesystem
     */
    public function getStorage(UploadedFile $file)
    {
        $type = strtolower($file->getType());

        return $this->container->get('filesystem_'.$type);
    }
}
