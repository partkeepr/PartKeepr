<?php

namespace PartKeepr\SiPrefixBundle\Tests\Model;

use PartKeepr\SiPrefixBundle\Entity\SiPrefix;

class SiPrefixTest extends \PHPUnit_Framework_TestCase
{
    public function testPrefix()
    {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setPrefix('yotta');
        $this->assertEquals('yotta', $siPrefix->getPrefix());
    }

    public function testSymbol()
    {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setSymbol('µ');

        $this->assertEquals('µ', $siPrefix->getSymbol());
    }

    public function testBase()
    {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setBase(10);

        $this->assertEquals(10, $siPrefix->getBase());
    }

    public function testExponent()
    {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setExponent(10);
        $this->assertEquals(10, $siPrefix->getExponent());
    }

    public function testCalculation()
    {
        $siPrefix = $this->getSiPrefix();

        $siPrefix->setBase(10);
        $siPrefix->setExponent(2);

        $this->assertEquals(310, $siPrefix->calculateProduct(3.1));
    }

    private function getSiPrefix()
    {
        return new SiPrefix();
    }
}
