<?php
namespace PartKeepr\Console\Commands;

use Symfony\Component\Console\Input\InputArgument,
	Symfony\Component\Console\Input\InputOption,
	Symfony\Component\Console,
	PartKeepr\Service\ServiceManager,
	PartKeepr\Service\ServiceReflector,
	PartKeepr\Console\Commands\Exceptions\ServiceNotFoundException;

/**
 * Implements the api-list-calls command.
 */
class ListCallsCommand extends Console\Command\Command
{

	/**
	 * Configures the api-list-calls command.
	 * @see Console\Command\Command
	 */
	protected function configure()
	{
		$this
			->setName('partkeepr:api-list-calls')
			->addArgument("service", InputArgument::REQUIRED, "The service to list the calls for")
			->setDescription('Lists all calls within the specified service')
			->setHelp(<<<EOT
Lists all calls within the specified service
EOT
		);
	}

	/**
	 * Lists all API calls for a specific service
	 *
	 * @param Console\Input\InputInterface $input The input interface
	 * @param Console\Output\OutputInterface $output The output interface
	 * @throws PartKeepr\Console\Commands\Exceptions\ServiceNotFoundException If the call was not found in the service
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
			throw new ServiceNotFoundException(sprintf("The service %s doesn't exist", $service));
		}

		$reflector = new ServiceReflector($className);

		// Stores the maximum length, for nice console formatting
		$maxLength = 0;

		foreach ($reflector->getCalls() as $call) {
			if (strlen($call->getName()) > $maxLength) {
				$maxLength = strlen($call->getName());
			}
		}

		$output->writeln(sprintf("<comment>Calls for service <info>%s</info>:</comment>", $reflector->getName()));
		$output->writeln("");

		foreach ($reflector->getCalls() as $call) {
			$name = str_pad($call->getName(), $maxLength);
			$output->writeln(sprintf("<info>%s</info>  %s", $name, $call->getDescription()));
		}
	}
}
