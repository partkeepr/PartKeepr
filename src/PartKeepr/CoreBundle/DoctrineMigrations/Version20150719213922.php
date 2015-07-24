<?php

namespace PartKeepr\CoreBundle\DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Gedmo\Tree\Entity\Repository\NestedTreeRepository;
use PartKeepr\FootprintBundle\Entity\FootprintCategory;

/**
 * Re-generates the category paths. It is enough to trigger an update on the root node, as the event listener
 * will recursively update the child categories.
 */
class Version20150719213922 extends BaseMigration
{
    /**
     * @param Schema $schema
     */
    public function up(Schema $schema)
    {
        $repository = $this->getEM()->getRepository(
            'PartKeepr\FootprintBundle\Entity\FootprintCategory'
        );

        /**
         * @var $repository NestedTreeRepository
         */
        $rootNodes = $repository->getRootNodes();

        foreach ($rootNodes as $rootNode) {
            /**
             * @var $rootNode FootprintCategory
             */
            $rootNode->setCategoryPath($rootNode->generateCategoryPath());
        }

        $this->getEM()->flush();
    }

    /**
     * @param Schema $schema
     */
    public function down(Schema $schema)
    {
        // this down() migration is auto-generated, please modify it to your needs

    }
}
