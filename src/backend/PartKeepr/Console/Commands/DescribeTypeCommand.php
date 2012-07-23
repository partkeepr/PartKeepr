<?php
namespace PartKeepr\Console\Commands;

use Symfony\Component\Console\Input\InputArgument,
	Symfony\Component\Console\Input\InputOption,
	Symfony\Component\Console,
	PartKeepr\Service\ServiceManager,
	PartKeepr\Service\TypeReflector,
	PartKeepr\Util\TablePrinter;

/**
 * Implements the api-describe-type command.
 */
class DescribeTypeCommand extends Console\Command\Command
{

	/**
	 * Configures the api-describe-type command.
	 * @see Console\Command\Command
	 */
	protected function configure()
	{
		$this
			->setName('partkeepr:api-describe-type')
			->addArgument("type", InputArgument::REQUIRED, "The type to describe")
			->setDescription('Describes a specific API type')
			->setHelp(<<<EOT
Describes a specific API type
EOT
		);
	}

	/**
	 * Describes a specific API type.
	 *
	 * @param Console\Input\InputInterface $input The input interface
	 * @param Console\Output\OutputInterface $output The output interface
	 * @throws PartKeepr\Console\Commands\Exceptions\ServiceCallNotFoundException If the call was not found in the service
	 * @see Console\Command\Command
	 */
	protected function execute(Console\Input\InputInterface $input, Console\Output\OutputInterface $output)
	{
		$type = $input->getArgument("type");

		$className = "PartKeepr\\".$type."\\".$type;

		$reflector = new TypeReflector($className);

		$output->writeln(sprintf("<info>%s</info>: %s", $reflector->getName(), $reflector->getDescription()));
		$output->writeln("");
		$output->writeln($reflector->getDocumentation());
		$output->writeln("");
		$output->writeln("<info>Output Fields:</info>");

		$head = array('Name', 'Type', 'Description');
		$outputParameterTable = array();
		foreach ($reflector->getOutputFields() as $parameter) {
			$outputParameterTable[] = array($parameter->getName(),
				$parameter->getType(),
				$parameter->getDescription());
		}

		$table = new TablePrinter($output);
		$table->setHeader($head);
		$table->setBody($outputParameterTable);

		$table->output();


	}
}
