<?php
namespace PartKeepr\Util\Minifier;

/**
 * This class implements JS minifying via jsmin.
 */
class yuiCompressorMinifier extends Minifier {
    /**
     * Minifies the given source files into the output file.
     *
     * "Minify" means that whitespaces and newlines are stripped, which results in a smaller file.
     *
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile The target file
     * @return mixed
     */
    public function minify (array $sourceFiles, $outputFile) {
        $this->run($sourceFiles, $outputFile, array("--nomunge"));
    }

    /**
     * Compresses the given source files into the output file.
     *
     * "Compress" means that everything that "Minify" does is applied, additionally local variables are compressed to
     * save space.
     *
     * This is not supported across all minifier implementations.
     *
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile The target file
     * @return mixed
     */
    public function compress (array $sourceFiles, $outputFile) {
        $this->run($sourceFiles, $outputFile);
    }

    /**
     * Runs the yui-compressor.
     *
     * Because yui-compressor needs a while to run, we merge the files into a single one prior compressing.
     *
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile The target file
     * @param array $options Additional CLI options
     */
    protected function run (array $sourceFiles, $outputFile, array $options = array()) {
        $cli = array();
        $cli[] = self::getYuiCompressorPath();
        $cli[] = "--type js";

        $cli = array_merge($cli, $options);

        $tmpFile = tempnam(sys_get_temp_dir(), "PK_COMPRESS_JS");

        $this->combine($sourceFiles, $tmpFile);

        $cliOpts = implode(" ", $cli);
        $execute = $cliOpts . " ".$tmpFile;
        $data = shell_exec($execute);
        file_put_contents($outputFile, $data);
    }


    /**
     * Attempts to retrieve the yui-compressor path. We execute "which" for that purpose.
     *
     * @return bool|string The path of the yui-compressor binary, or false if no path was found
     */
    public static function getYuiCompressorPath () {
        $file = exec("which yui-compressor");

        if (is_executable($file)) {
            return $file;
        } else {
            return false;
        }
    }

}