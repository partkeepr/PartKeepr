<?php

namespace PartKeepr\CronLoggerBundle\Tests;

use PartKeepr\CoreBundle\Tests\WebTestCase;

class CronLoggerTest extends WebTestCase
{
    public function testCronLogger()
    {
        $cronlogger = $this->getContainer()->get('partkeepr.cronlogger_service');

        $cronLoggerEntry = $cronlogger->markCronRun('test');

        $this->assertEquals('test', $cronLoggerEntry->getCronjob());
        $this->assertInstanceOf("\DateTime", $cronLoggerEntry->getLastRunDate());

        $cronLoggerEntry->setLastRunDate(new \DateTime('1999-01-01 00:00:00'));

        $inactiveCronjobs = $cronlogger->getInactiveCronjobs(['test']);
        $this->assertEquals(false, in_array('test', $inactiveCronjobs));

        $this->getContainer()->get('doctrine.orm.entity_manager')->flush();

        $inactiveCronjobs = $cronlogger->getInactiveCronjobs(['test']);

        $this->assertEquals(true, in_array('test', $inactiveCronjobs));
    }
}
