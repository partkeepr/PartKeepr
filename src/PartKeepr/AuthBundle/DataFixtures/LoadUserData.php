<?php
namespace PartKeepr\AuthBundle\DataFixtures;

use Doctrine\Common\DataFixtures\FixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\AuthBundle\Entity\User;

class LoadUserData implements FixtureInterface {
    public function load (ObjectManager $manager) {
        $admin = new User();
        $admin->setUsername("admin");
        $admin->setPassword("admin");

        $manager->persist($admin);
        $manager->flush();
    }
}