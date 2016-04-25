<?php

namespace PartKeepr\CoreBundle\Command;

use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use PartKeepr\CategoryBundle\Entity\CategoryPathInterface;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

class UpdateCategoryPathCommand extends ContainerAwareCommand
{
    public function configure()
    {
        parent::configure();
        $this->setName('partkeepr:update-category-paths');
        $this->setDescription('Updates the category paths for all category trees');
    }

    public function execute(InputInterface $input, OutputInterface $output)
    {
        $entities = [
            'PartKeepr\FootprintBundle\Entity\FootprintCategory',
            'PartKeepr\PartBundle\Entity\PartCategory',
            'PartKeepr\StorageLocationBundle\Entity\StorageLocationCategory',
        ];

        foreach ($entities as $entity) {
            $this->regenerateCategoryPaths($entity);
        }
    }

    public function regenerateCategoryPaths($entity)
    {
        $repository = $this->getContainer()->get('doctrine.orm.default_entity_manager')->getRepository($entity);

        /*
         * @var $repository NestedTreeRepository
         */
        $rootNodes = $repository->getRootNodes();

        $pathSeparator = $this->getContainer()->getParameter('partkeepr.category.path_separator');

        foreach ($rootNodes as $rootNode) {
            /*
             * @var $rootNode CategoryPathInterface
             */
            $rootNode->setCategoryPath(uniqid());
        }

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush();

        foreach ($rootNodes as $rootNode) {
            $rootNode->setCategoryPath($rootNode->generateCategoryPath($pathSeparator));
        }

        $this->getContainer()->get('doctrine.orm.default_entity_manager')->flush();
    }
}
