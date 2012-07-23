<?php
namespace PartKeepr\Console\Commands;

use Symfony\Component\Console\Input\InputArgument,
	Symfony\Component\Console\Input\InputOption,
	Symfony\Component\Console,
	PartKeepr\Service\ServiceManager,
	PartKeepr\Service\ServiceReflector,
	PartKeepr\Service\ServiceCallReflector,
	PartKeepr\Util\TablePrinter,
	PartKeepr\Console\Commands\Exceptions\ServiceCallNotFoundException;


/**
 * Implements the api-describe-call command.
 */
class DescribeCallCommand extends Console\Command\Command
{

	/**
	 * Configures the api-describe-call command.
	 * @see Console\Command\Command
	 */
	protected function configure()
	{
		$this
			->setName('partkeepr:api-describe-call')
			->addArgument("service", InputArgument::REQUIRED, "The service")
			->addArgument("call", InputArgument::REQUIRED, "The call to describe")
			->setDescription('Describes a specific API call')
			->setHelp(<<<EOT
Describes a specific API call. Lists the parameters and return values
EOT
		);
	}

	/**
	 * Describes a specific call.
	 *
	 * @param Console\Input\InputInterface $input The input interface
	 * @param Console\Output\OutputInterface $output The output interface
	 * @throws PartKeepr\Console\Commands\Exceptions\ServiceCallNotFoundException If the call was not found in the service
	 * @see Console\Command\Command
	 */
	protected function execute(Console\Input\InputInterface $input, Console\Output\OutputInterface $output)
	{
		$service = $input->getArgument("service");

		if (substr($service, -7) == "Service") {
			$service = substr($service, 0,  strlen($service) - 7);
		}

		$className = "PartKeepr\\".$service."\\".$service."Service";

		if (!class_exists($className)) {
			throw new \Exception(sprintf("The service %s doesn't exist", $service));
		}

		$reflector = new ServiceReflector($className);

		$call = $reflector->getCall($input->getArgument("call"));

		if (!($call instanceof \PartKeepr\Service\ServiceCallReflector)) {
			throw new ServiceCallNotFoundException(sprintf("The call %s was not found in the service %s", $input->getArgument("call"), $service));
		}

		$output->writeln(sprintf("<info>%s:%s</info>: %s", $service, $input->getArgument("call"), $call->getDescription()));
		$output->writeln("");
		$output->writeln($call->getDocumentation());
		$output->writeln("");
		$this->outputParameterTable($call, $output);
		$output->writeln("");
		$this->outputReturnedValuesTable($call, $output);

	}

	/**
	 * Outputs the returned parameter table
	 *
	 * @param \PartKeepr\Service\ServiceCallReflector $call The reflected call
	 * @param \Symfony\Component\Console\Output\OutputInterface $output The output interface
	 */
	private function outputReturnedValuesTable (ServiceCallReflector $call, Console\Output\OutputInterface $output) {
		$output->writeln("<info>Returned values:</info>");
		$head = array('Name', 'Type', 'Description');

		$returnValueTable = array();

		foreach ($call->getReturnValues() as $returnValue) {
			$returnValueTable[] = array($returnValue->getName(),
				$returnValue->getType(),
				$returnValue->getDescription());
		}

		$table = new TablePrinter($output);
		$table->setHeader($head);
		$table->setBody($returnValueTable);

		$table->output();
	}

	/**
	 * Outputs the parameter table
	 *
	 * @param \PartKeepr\Service\ServiceCallReflector $call The reflected call
	 * @param \Symfony\Component\Console\Output\OutputInterface $output The output interface
	 */
	private function outputParameterTable (ServiceCallReflector $call, Console\Output\OutputInterface $output) {
		$output->writeln("<info>Parameters:</info>");
		$head = array('Name', 'Required', 'Type', 'Description');

		$parameterTable = array();

		foreach ($call->getParameters() as $parameter) {
			$parameterTable[] = array($parameter->getName(),
				$parameter->getRequiredFlag() ? 'Yes' : 'No',
				$parameter->getType(),
				$parameter->getDescription());
		}

		$table = new TablePrinter($output);
		$table->setHeader($head);
		$table->setBody($parameterTable);

		$table->output();
	}
}
