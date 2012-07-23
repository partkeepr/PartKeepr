<?php
namespace PartKeepr\Console\Commands;

use Symfony\Component\Console\Input\InputArgument,
	Symfony\Component\Console\Input\InputOption,
	Symfony\Component\Console,
	PartKeepr\Service\ServiceManager,
	PartKeepr\Service\ServiceReflector;

/**
 * Implements the api-list-services command.
 */
class ListServicesCommand extends Console\Command\Command
{

	/**
	 * Configures the api-list-services command.
	 *
	 * @see Console\Command\Command
	 */
	protected function configure()
	{
		$this
			->setName('partkeepr:api-list-services')
			->setDescription('Lists all available API services')
			->setHelp(<<<EOT
Lists all available API services defined by PartKeepr.
EOT
		);
	}

	/**
	 * Lists all API services
	 *
	 * @param Console\Input\InputInterface $input The input interface
	 * @param Console\Output\OutputInterface $output The output interface
	 * @see Console\Command\Command
	 */
	protected function execute(Console\Input\InputInterface $input, Console\Output\OutputInterface $output)
	{
		$classNames = ServiceManager::getInstance()->getRegisteredServices();

		$services = array();
		// Stores the maximum length, for nice console formatting
		$maxLength = 0;

		foreach ($classNames as $className) {
			$reflector = new ServiceReflector($className);

			if (strlen($reflector->getName()) > $maxLength) {
				$maxLength = strlen($reflector->getName());
			}

			$services[] = $reflector;
		}

		$output->writeln("<comment>PartKeepr Services:</comment>");
		$output->writeln("");

		foreach ($services as $service) {
			$name = str_pad($service->getName(), $maxLength);
			$output->writeln(sprintf("<info>%s</info>  %s", $name, $service->getDescription()));
		}
	}
}
