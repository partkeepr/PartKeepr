<?php
namespace PartKeepr\Console\Commands;

use Symfony\Component\Console\Input\InputArgument,
	Symfony\Component\Console\Input\InputOption,
	Symfony\Component\Console,
	PartKeepr\Util\Minifier\Minifier,
	PartKeepr\Util\Minifier\jsminMinifier,
	PartKeepr\Util\Minifier\yuiCompressorMinifier,
	PartKeepr\Util\ExtJSFile;

class MinifyJSCommand extends Console\Command\Command
{

	/**
	 * @see Console\Command\Command
	 */
	protected function configure()
	{
		$this
			->setName('partkeepr:js-minify')
			->addArgument("outputFile", InputArgument::REQUIRED, "Output file")
			->addOption('source', null, InputOption::VALUE_IS_ARRAY | InputOption::VALUE_REQUIRED,
						'The input path(s). <info>You may specify this more than once to cover all source ' .
						'directories.</info>')
			->addOption('minifier', null, InputOption::VALUE_OPTIONAL,
						'The minifier to use. Currently <info>jsmin</info> and <info>yui-compressor</info> are ' .
						'supported.')
			->addOption('compress', null, InputOption::VALUE_NONE,
						'Specifies if compression should be used (reduces local variables, only supported by ' .
						'yui-compressor). <info>--compress</info> also includes <info>--minify</info>')
			->addOption('minify', null, InputOption::VALUE_NONE,
						'Specifies if the files should be minified (removal of whitespaces and line breaks). If not ' .
						'specified, this only merges the JS files.')
			->setDescription('Minifies JavaScript files in their correct order')
			->setHelp(<<<EOT
Minifies JavaScript files in their correct order. To do this correctly, we parse all JavaScript files and look for the ExtJS-specific 'extend' directives. With that information,
we can build a hierarchical tree of files which represent the dependencies and output a parsed tree. That tree is then converted into an ordered list, which is then compressed.
EOT
		);
	}

	/**
	 * Executes the minify process
	 *
	 * @see Console\Command\Command
	 */
	protected function execute(Console\Input\InputInterface $input, Console\Output\OutputInterface $output)
	{
		$sourceDirs = $input->getOption('source');

		if (count($sourceDirs) == 0) {
			throw new \RuntimeException("Argument 'source' is required at least once in order to execute this command correctly.");
		}

		$orderedFileList = $this->getOrderedFileList($sourceDirs);

		if (count($orderedFileList) == 0) {
			throw new \RuntimeException("No files in the source directories found.");
		}

		switch ($input->getOption("minifier")) {
			case "jsmin":
				$minifier = new jsminMinifier();
				break;
			case "yui-compressor":
				$minifier = new yuiCompressorMinifier();
				break;
			default:
				$minifier = $this->detectMinifier();
				break;
		}

		$minifier->setOutput($output);

		if ($input->getOption("compress") === true) {
			return $minifier->compress($orderedFileList, $input->getArgument("outputFile"));
		}

		if ($input->getOption("minify") === true) {
			return $minifier->compress($orderedFileList, $input->getArgument("outputFile"));
		}

		return $minifier->combine($orderedFileList, $input->getArgument("outputFile"));
	}

	/**
	 * Returns an ordered file list of all source files
	 *
	 * @param $sourceDirs array The directories to scan
	 * @return array An array of ordered JS files
	 */
	protected function getOrderedFileList(array $sourceDirs)
	{
		$sourceDirs = $this->verifySourceDirs($sourceDirs);
		$sourceFiles = $this->getSourceFiles($sourceDirs);

		$rootList = $this->buildExtJSClassTree($sourceFiles);

		$orderedFileList = array();

		foreach ($rootList as $item) {
			$orderedFileList = array_merge($orderedFileList, $item->getArray());
		}

		return $orderedFileList;
	}

	/**
	 * Detects the minifier to use.
	 *
	 * @return string jsmin or yui-compressor
	 */
	protected function detectMinifier()
	{
		if (yuiCompressorMinifier::getYuiCompressorPath() === false) {
			return new jsMinMinifier();
		} else {
			return new yuiCompressorMinifier();
		}
	}


	/**
	 * Verifies the given source directories if they exist.
	 * @param $sourceDirs array An array of source directories
	 * @return array An array of checked and absolute source directories
	 * @throws \RuntimeException If the source directory can't be found
	 */
	protected function verifySourceDirs(array $sourceDirs)
	{
		$realSourcePaths = array();

		foreach ($sourceDirs as $dir) {
			$realpath = realpath($dir);

			if ($realpath === false) {
				throw new \RuntimeException(sprintf("The source directory %s can't be found", $dir));
			}

			$realSourcePaths [] = $realpath;
		}

		return $realSourcePaths;
	}

	/**
	 * Returns a list of all JavaScript files in the given source directories
	 * @param $sourceDirs An array of source directories
	 * @return array An array of JavaScript files
	 */
	protected function getSourceFiles($sourceDirs)
	{
		$sourceFiles = array();

		foreach ($sourceDirs as $dir) {
			$sourceFiles = array_merge($sourceFiles, $this->getJSFilesForPath($dir));
		}

		return $sourceFiles;
	}

	/**
	 * Builds the ExtJS class tree
	 *
	 * @param $files array A list of JavaScript files
	 * @return array An array of root classes (=classes which don't have other dependencies)
	 * @throws \Exception
	 */
	protected function buildExtJSClassTree(array $files)
	{
		$specialFiles = array(
			"src/frontend/js/Util/i18n.js",
			"src/frontend/js/PartKeepr.js",
			"src/frontend/js/Util/JsonWithAssociationsWriter.js");

		$records = array();

		/* Generate class objects out of the source files */
		foreach ($files as $file) {
			$file = realpath($file);

			$o = new ExtJSFile($file);

			$records[$o->getClassName()] = $o;
		}

		// rootList contains all classes which have no dependencies or external dependencies.
		$rootList = array();

		/* Iterate through the array and build the dependency tree */
		foreach ($records as $record) {
			$bHasRequires = false;

			foreach ($record->getRequires() as $require) {
				if (stripos($require, "Ext.") === false || stripos($require, "Ext.ux") !== false) {

					/* As PartKeepr is an application and not a class (in terms of this builder), we can't find it. Skip. */
					if ($require == "PartKeepr" || $require == "Object") {
						break;
					}

					/* If the parser can't find the class, throw an exception */
					if (!array_key_exists($require, $records)) {
						throw new \Exception("Fatal: The class in " . $record->getFilename() . " requires the class $require, but the required class isn't in the index.");
					}

					$records[$require]->addChild($record);
					$bHasRequires = true;
				}
			}

			if (!$bHasRequires) {
				/* Hardcoded check for special files, as it isn't a class but a script, and needs to put in front of everything */
				$unshift = false;

				foreach ($specialFiles as $specialFile) {
					// Check if the rightermost part of the filename matches our specialFile patterns
					if (strrpos($record->getFilename(), $specialFile) === strlen($record->getFilename()) - strlen($specialFile)) {
						$unshift = true;
					}
				}
				if ($unshift) {
					array_unshift($rootList, $record);
				} else {
					$rootList[] = $record;
				}
			}

		}

		return $rootList;
	}

	/**
	 * Returns a list of all .js files in the given path.
	 *
	 * @param $path string The path to search
	 * @return array A flat array of all .js files
	 */
	protected function getJSFilesForPath($path)
	{
		if (is_dir($path)) {
			$call = 'find ' . $path . ' -name "*.js" -type f';
			exec($call, $output);
			return $output;
		}

		if (is_file($path)) {
			return array($path);
		}

		return array();
	}
}
