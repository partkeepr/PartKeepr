<?php

namespace PartKeepr\PartBundle\DataFixtures;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\Persistence\ObjectManager;
use PartKeepr\DoctrineReflectionBundle\Filter\Filter;
use PartKeepr\PartBundle\Entity\MetaPartParameterCriteria;
use PartKeepr\PartBundle\Entity\Part;
use PartKeepr\PartBundle\Entity\PartCategory;
use PartKeepr\PartBundle\Entity\PartMeasurementUnit;
use PartKeepr\PartBundle\Entity\PartParameter;
use PartKeepr\UnitBundle\Entity\Unit;

class PartDataLoader extends AbstractFixture
{
    public function load(ObjectManager $manager)
    {
        $partUnit = new PartMeasurementUnit();
        $partUnit->setName('pieces');
        $partUnit->setShortName('pcs');
        $partUnit->setDefault(true);

        $this->addReference("partunit.default", $partUnit);

        $part = new Part();
        $part->setName('FOOBAR');
        $part->setPartUnit($partUnit);
        /**
         * @var PartCategory $category
         */
        $category = $this->getReference('partcategory.first');
        $storageLocation = $this->getReference('storagelocation.first');

        $part->setCategory($category);
        $part->setStorageLocation($storageLocation);

        $part2 = new Part();
        $part2->setName('FOOBAR2');

        $category = $this->getReference('partcategory.first');
        $storageLocation = $this->getReference('storagelocation.second');

        $part2->setCategory($category);
        $part2->setStorageLocation($storageLocation);
        $part2->setPartUnit($partUnit);

        $manager->persist($partUnit);
        $manager->persist($part);
        $manager->persist($part2);

        $this->addReference('part.1', $part);
        $this->addReference('part.2', $part2);

        $ohms = new Unit();
        $ohms->setName("Ohm");
        $ohms->setSymbol("O");
        $manager->persist($ohms);

        $partParameterR1 = new PartParameter();
        $partParameterR1->setName("Resistance");
        $partParameterR1->setValueType(PartParameter::VALUE_TYPE_NUMERIC);
        $partParameterR1->setUnit($ohms);
        $partParameterR1->setValue(100);

        $partParameterR2 = new PartParameter();
        $partParameterR2->setName("Resistance");
        $partParameterR2->setValueType(PartParameter::VALUE_TYPE_NUMERIC);
        $partParameterR2->setUnit($ohms);
        $partParameterR2->setValue(100);

        $partParameterR3 = new PartParameter();
        $partParameterR3->setName("Resistance");
        $partParameterR3->setValueType(PartParameter::VALUE_TYPE_NUMERIC);
        $partParameterR3->setUnit($ohms);
        $partParameterR3->setValue(101);

        $partParameterP1 = new PartParameter();
        $partParameterP1->setName("Case");
        $partParameterP1->setValueType(PartParameter::VALUE_TYPE_STRING);
        $partParameterP1->setStringValue("1206");

        $partParameterP2 = new PartParameter();
        $partParameterP2->setName("Case");
        $partParameterP2->setValueType(PartParameter::VALUE_TYPE_STRING);
        $partParameterP2->setStringValue("0805");

        $partParameterP3 = new PartParameter();
        $partParameterP3->setName("Case");
        $partParameterP3->setValueType(PartParameter::VALUE_TYPE_STRING);
        $partParameterP3->setStringValue("0805");

        $metaSourcePart1 = new Part();
        $metaSourcePart1->setPartUnit($partUnit);
        $metaSourcePart1->setName("100 Ohms 1206 FIRST");
        $metaSourcePart1->setPartUnit($partUnit);
        $metaSourcePart1->setCategory($category);
        $metaSourcePart1->setStorageLocation($storageLocation);
        $metaSourcePart1->addParameter($partParameterR1);
        $metaSourcePart1->addParameter($partParameterP1);

        $metaSourcePart2 = new Part();
        $metaSourcePart2->setPartUnit($partUnit);
        $metaSourcePart2->setName("100 Ohms 0805 SECOND");
        $metaSourcePart2->setPartUnit($partUnit);
        $metaSourcePart2->setCategory($category);
        $metaSourcePart2->setStorageLocation($storageLocation);
        $metaSourcePart2->addParameter($partParameterR2);
        $metaSourcePart2->addParameter($partParameterP2);

        $metaSourcePart3 = new Part();
        $metaSourcePart3->setPartUnit($partUnit);
        $metaSourcePart3->setName("100 Ohms 0805 THIRD");
        $metaSourcePart3->setPartUnit($partUnit);
        $metaSourcePart3->setCategory($category);
        $metaSourcePart3->setStorageLocation($storageLocation);
        $metaSourcePart3->addParameter($partParameterP3);
        $metaSourcePart3->addParameter($partParameterR3);

        $manager->persist($metaSourcePart1);
        $manager->persist($metaSourcePart2);
        $manager->persist($metaSourcePart3);

        $this->addReference('metapart.source.1', $metaSourcePart1);
        $this->addReference('metapart.source.2', $metaSourcePart2);
        $this->addReference('metapart.source.3', $metaSourcePart3);

        $metaPartParameterCriteria1 = new MetaPartParameterCriteria();
        $metaPartParameterCriteria1->setPartParameterName("Resistance");
        $metaPartParameterCriteria1->setValueType(PartParameter::VALUE_TYPE_NUMERIC);
        $metaPartParameterCriteria1->setOperator(Filter::OPERATOR_EQUALS);
        $metaPartParameterCriteria1->setValue(100);

        $metaPartParameterCriteria2 = new MetaPartParameterCriteria();
        $metaPartParameterCriteria2->setPartParameterName("Resistance");
        $metaPartParameterCriteria2->setValueType(PartParameter::VALUE_TYPE_NUMERIC);
        $metaPartParameterCriteria2->setOperator(Filter::OPERATOR_EQUALS);
        $metaPartParameterCriteria2->setValue(100);

        $metaPartParameterCriteria3 = new MetaPartParameterCriteria();
        $metaPartParameterCriteria3->setValueType(PartParameter::VALUE_TYPE_STRING);
        $metaPartParameterCriteria3->setPartParameterName("Case");
        $metaPartParameterCriteria3->setOperator(Filter::OPERATOR_EQUALS);
        $metaPartParameterCriteria3->setStringValue("0805");

        $metaPart1 = new Part();
        $metaPart1->setMetaPart(true);
        $metaPart1->setName("all 100 ohms resistors");
        $metaPart1->setCategory($category);
        $metaPart1->setPartUnit($partUnit);
        $metaPart1->addMetaPartParameterCriteria($metaPartParameterCriteria1);

        $metaPart2 = new Part();
        $metaPart2->setMetaPart(true);
        $metaPart2->setName("all 100 ohms 0805 resistors");
        $metaPart2->setCategory($category);
        $metaPart2->setPartUnit($partUnit);
        $metaPart2->addMetaPartParameterCriteria($metaPartParameterCriteria2);
        $metaPart2->addMetaPartParameterCriteria($metaPartParameterCriteria3);

        $manager->persist($metaPart2);
        $manager->persist($metaPart1);

        $this->addReference('metapart.1', $metaPart1);
        $this->addReference('metapart.2', $metaPart2);

        $manager->flush();
    }
}
