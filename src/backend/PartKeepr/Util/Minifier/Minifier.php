<?php
namespace PartKeepr\Util\Minifier;

use Symfony\Component\Console;

abstract class Minifier
{
    /**
     * @var Console\Output\OutputInterface $output The output interface
     */
    protected $output;

    /**
     * @param Console\Output\OutputInterface $output The output interface from Sf2
     */
    public function __construct(Console\Output\OutputInterface $output = null)
    {
        if ($output !== null) {
            $this->output = $output;
        }
    }

    /**
     * Sets the output interface to a known value
     * @param Console\Output\OutputInterface $output The output interface from Sf2
     */
    public function setOutput(Console\Output\OutputInterface $output)
    {
        $this->output = $output;
    }

    /**
     * Minifies the given source files into the output file.
     *
     * "Minify" means that whitespaces and newlines are stripped, which results in a smaller file.
     *
     * @abstract
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile
     * @return mixed
     */
    abstract public function minify(array $sourceFiles, $outputFile);

    /**
     * Compresses the given source files into the output file.
     *
     * "Compress" means that everything that "Minify" does is applied, additionally local variables are compressed to
     * save space.
     *
     * This is not supported across all minifier implementations.
     *
     * @abstract
     * @param array $sourceFiles An array of source files with absolute paths
     * @param $outputFile
     * @return mixed
     */
    abstract public function compress(array $sourceFiles, $outputFile);

    /**
     * Combines the given source files into the output file.
     *
     * No minification or compression is applied.
     *
     * @param array $sourceFiles
     * @param $outputFile
     * @return mixed
     */
    public function combine(array $sourceFiles, $outputFile)
    {
        if (file_exists($outputFile) && filesize($outputFile) != 0) {
            unlink($outputFile);
        }

        foreach ($sourceFiles as $sourceFile) {
            file_put_contents($outputFile, file_get_contents($sourceFile), FILE_APPEND);
        }
    }
}