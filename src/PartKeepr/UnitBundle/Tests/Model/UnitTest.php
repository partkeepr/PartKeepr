<?php

namespace PartKeepr\UnitBundle\Tests\Model;

use PartKeepr\SiPrefixBundle\Entity\SiPrefix;
use PartKeepr\UnitBundle\Entity\Unit;

class UnitTest extends \PHPUnit_Framework_TestCase
{
    public function testName()
    {
        $unit = $this->getUnit();

        $unit->setName('Volt');
        $this->assertEquals('Volt', $unit->getName());
    }

    public function testSymbol()
    {
        $unit = $this->getUnit();

        $unit->setSymbol('V');

        $this->assertEquals('V', $unit->getSymbol());
    }

    public function testPrefixes()
    {
        $unit = $this->getUnit();
        $newSiPrefix = new SiPrefix();

        $unit->setPrefixes([$newSiPrefix]);
        $this->assertEquals([$newSiPrefix], $unit->getPrefixes());
    }

    private function getUnit()
    {
        return new Unit();
    }
}
