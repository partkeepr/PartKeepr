<?php
namespace PartKeepr\Util\Minifier;

use PartKeepr\PartKeepr;

/**
 * This class implements JS minifying via jsmin.
 */
class jsminMinifier extends Minifier {
    const JSMIN_SCRIPT = "3rdparty/jsmin/jsmin.php";

    /**
     * Minifies the given source files into the output file.
     *
     * "Minify" means that whitespaces and newlines are stripped, which results in a smaller file.
     *
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile
     * @return mixed
     */
    public function minify (array $sourceFiles, $outputFile) {
        if (!class_exists("\\JSMin")) {
            require_once(PartKeepr::getRootDirectory() . "/" . self::JSMIN_SCRIPT);
        }
        if (file_exists($outputFile)) {
            unlink($outputFile);
        }

        foreach ($sourceFiles as $sourceFile) {
            $minifiedJS = \JSMin::minify(file_get_contents($sourceFile));
            file_put_contents($outputFile, $minifiedJS, FILE_APPEND);
        }
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
     * @param $outputFile
     * @return mixed
     */
    public function compress (array $sourceFiles, $outputFile) {
        $this->output->writeln("<error>The jsminMinifier doesn't support compress; using minify instead</error>");
        $this->minify($sourceFiles, $outputFile);
    }

}