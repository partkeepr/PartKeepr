<?php
namespace PartKeepr\SiPrefixBundle\Tests\Model;

use PartKeepr\SiPrefixBundle\Model\SiPrefix;

class SiPrefixTest extends \PHPUnit_Framework_TestCase {

    public function testPrefix () {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setPrefix("yotta");
        $this->assertEquals("yotta", $siPrefix->getPrefix());
    }

    public function testSymbol () {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setSymbol("µ");

        $this->assertEquals("µ", $siPrefix->getSymbol());
    }

    public function testPower () {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setPower(10);
        $this->assertEquals(10, $siPrefix->getPower());
    }

    private function getSiPrefix () {
        return new SiPrefix();
    }
}