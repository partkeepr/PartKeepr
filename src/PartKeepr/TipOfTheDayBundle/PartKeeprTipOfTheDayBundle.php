<?php

namespace PartKeepr\TipOfTheDayBundle;

use PartKeepr\TipOfTheDayBundle\Command\SyncTipsCommand;
use Symfony\Component\Console\Application;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class PartKeeprTipOfTheDayBundle extends Bundle
{
    /**
     * {@inheritdoc}
     */
    public function registerCommands(Application $application)
    {
        $application->add(new SyncTipsCommand());
    }
}
