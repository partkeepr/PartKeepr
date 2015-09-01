<?php
namespace PartKeepr\AuthBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\AuthBundle\Entity\User;

class LoadUserData extends AbstractFixture {
    public function load (ObjectManager $manager) {
        $admin = new User();
        $admin->setUsername("admin");
        $admin->setPassword("admin");
        $admin->setEmail("foo@bar.com");

        $manager->persist($admin);
        $manager->flush();

        $this->addReference("user.admin", $admin);
    }
}