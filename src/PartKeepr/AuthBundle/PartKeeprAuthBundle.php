<?php

namespace PartKeepr\AuthBundle;

use PartKeepr\AuthBundle\Console\Command\CreateUserCommand;
use Symfony\Component\Console\Application;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprAuthBundle extends Bundle
{
    /**
     * {@inheritDoc}
     */
    public function registerCommands(Application $application)
    {
        $application->add(new CreateUserCommand());
    }
}
