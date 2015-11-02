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


        $this->addPhpIniRequirement("memory_limit", $this->getBytesIniSetting("memory_limit") > 128000000,
            false,
            "Memory Limit too small",
            sprintf("The php.ini memory_limit directive must be set to 128MB or higher. Your limit is set to %s",
                ini_get("memory_limit")));

        $this->checkWritable(realpath(dirname(__FILE__)."/../data/"));
        $this->checkWritable(realpath(dirname(__FILE__)."/../app/"));
        $this->checkWritable(realpath(dirname(__FILE__)."/../web/"));

        $this->addRequirement(
            function_exists("mb_convert_case"),
            sprintf('The PHP function mb_convert_case does not exist.'),
            sprintf('Please compile PHP with the mbstring functions in case you are using Gentoo, or install php-mbstring on RedHat, Fedora or CentOS.')
        );
    }

    /**
     * Checks if a path is writable. If not, generates a requirement
     * @param $path string The path to check
     */
    protected function checkWritable ($path) {
        try {
            $this->isWritableRecursive($path);
        } catch (\Exception $e) {
            $this->addRequirement(
                false,
                sprintf('Directory %s and all subfolders/files must be writable', $path),
                $e->getMessage());
        }
    }
    /**
     * Returns a php.ini setting with parsed byte values.
     *
     * Example: If you specify memory_limit=64M, this method will return 67108864 bytes.
     * @param $setting string The php.ini setting
     *
     * @return int The byts
     */
    protected function getBytesIniSetting($setting)
    {
        return (int)$this->returnBytes(ini_get($setting));
    }

    /**
     * Parses a value with g,m or k modifiers and returns the effective bytes.
     * @param $val string The value to parse
     *
     * @return int|string The bytes
     */
    protected function returnBytes($val)
    {
        $val = trim($val);
        $last = strtolower($val[strlen($val) - 1]);
        switch ($last) {
            // The 'G' modifier is available since PHP 5.1.0
            case 'g':
                $val *= 1073741824;
                break;
            case 'm':
                $val *= 1048576;
                break;
            case 'k':
                $val *= 1024;
                break;
        }

        return $val;
    }

    /**
     * Checks if the given directory and all contained files within it is writable by the current user.
     *
     * @param string $dir The directory to check
     * @return boolean True if the path is writable
     * @throws \Exception If the directory is not writable
     */
    protected function isWritableRecursive($dir)
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
                        if (!$this->isWritableRecursive($dir."/".$file)) {
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
