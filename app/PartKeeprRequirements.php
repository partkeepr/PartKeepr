<?php

class PartKeeprRequirements extends SymfonyRequirements
{
    /**
     * Constructor that initializes the requirements.
     */
    public function __construct()
    {
        parent::__construct();

        $this->addRequirement(
            ini_get("allow_url_fopen") || function_exists("curl_init"),
            sprintf('No way to remotely load files detected'),
            sprintf('Either set <strong>allow_url_fopen=true</strong> or install the cURL extension'));

        $this->addRequirement(
            function_exists("imagecreate"),
            sprintf('GD library not found'),
            sprintf('Install the GD library extension'));

        try {
            $this->is_writable_recursive(realpath(dirname(__FILE__). "/../data/"));
        } catch (\Exception $e) {
            $this->addRequirement(
            false,
            sprintf('Directory or file not writable'),
            $e->getMessage());
        }

    }

    /**
     * Checks if the given directory and all contained files within it is writable by the current user.
     *
     * @param string $dir The directory to check
     */
    public function is_writable_recursive($dir)
    {
        if (!is_writable($dir)) {
            throw new \Exception($dir." is not writable.");
        }

        $folder = opendir($dir);
        while ($file = readdir($folder)) {
            if ($file != '.' && $file != '..') {
                if (!is_writable($dir."/".$file)) {
                    closedir($folder);
                    throw new \Exception($dir."/".$file." is not writable.");
                } else {
                    if (is_dir($dir."/".$file)) {
                        if (!$this->is_writable_recursive($dir."/".$file)) {
                            closedir($folder);
                            throw new \Exception($dir."/".$file." is not writable.");
                        }
                    }
                }
            }
        }

        return true;
    }
}
