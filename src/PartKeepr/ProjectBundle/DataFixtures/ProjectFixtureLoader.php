<?php

namespace PartKeepr\ProjectBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\ProjectBundle\Entity\Project;
use PartKeepr\ProjectBundle\Entity\ProjectPart;

class ProjectFixtureLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $projectPart1 = new ProjectPart();
        $projectPart1->setPart($this->getReference('part.1'));
        $projectPart1->setQuantity(1);

        $projectPart2 = new ProjectPart();
        $projectPart2->setPart($this->getReference('part.2'));
        $projectPart2->setQuantity(1);

        $project = new Project();
        $project->setName('FOOBAR');
        $project->setDescription('none');
        $project->addPart($projectPart1);
        $project->addPart($projectPart2);

        $manager->persist($project);
        $manager->persist($projectPart1);
        $manager->persist($projectPart2);
        $manager->flush();

        $this->addReference('project', $project);
        $this->addReference('projectpart.1', $projectPart1);
        $this->addReference('projectpart.2', $projectPart2);
    }
}
