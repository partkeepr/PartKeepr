<?php

namespace PartKeepr\SiPrefixBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Represents an SI Prefix.
 *
 * @link http://en.wikipedia.org/wiki/Metric_prefix
 *
 * @ORM\Entity
 * @TargetService(uri="/api/si_prefixes")
 */
class SiPrefix extends BaseEntity
{
    /**
     * The prefix name of the Si-Prefix (e.g. yotta, deca, deci, centi).
     *
     * @ORM\Column(type="string")
     *
     * @Assert\Type(type="string")
     * @Assert\NotBlank(message="siprefix.prefix.not_blank")
     *
     * @var string
     * @Groups({"default"})
     */
    private $prefix;

    /**
     * The symbol of the Si-Prefix (e.g. m, M, G).
     *
     * @ORM\Column(type="string",length=2)
     *
     * @Assert\Type(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $symbol;

    /**
     * The exponent of the Si-Prefix (e.g. milli = 10^-3).
     *
     * @ORM\Column(type="integer")
     * @Assert\Type(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $exponent;

    /**
     * The base of the Si-Prefix (e.g. 2^-3).
     *
     * @ORM\Column(type="integer")
     * @Assert\Type(type="integer")
     * @Groups({"default"})
     *
     * @var int
     */
    private $base;

    /**
     * Sets the prefix name.
     *
     * @param string $prefix
     */
    public function setPrefix($prefix)
    {
        $this->prefix = $prefix;
    }

    /**
     * Returns the prefix name.
     *
     *
     * @return string The prefix name
     */
    public function getPrefix()
    {
        return $this->prefix;
    }

    /**
     * Sets the symbol for the prefix.
     *
     * @param string $symbol The symbol
     */
    public function setSymbol($symbol)
    {
        $this->symbol = $symbol;
    }

    /**
     * Returns the symbol for the prefix.
     *
     * @return string The symbol
     */
    public function getSymbol()
    {
        return $this->symbol;
    }

    /**
     * Sets the exponent.
     *
     * @param int $exponent The exponent
     */
    public function setExponent($exponent)
    {
        $this->exponent = $exponent;
    }

    /**
     * Returns the exponent.
     *
     * @return int The exponent
     */
    public function getExponent()
    {
        return $this->exponent;
    }

    /**
     * Sets the base.
     *
     * @param int $base The base
     */
    public function setBase($base)
    {
        $this->base = $base;
    }

    /**
     * Returns the base.
     *
     * @return int The base
     */
    public function getBase()
    {
        return $this->base;
    }

    /**
     * Calculates the product for a given value.
     *
     * @param $value float The value to calculate the product
     *
     * @return float The resulting value
     */
    public function calculateProduct($value)
    {
        return $value * pow($this->base, $this->exponent);
    }
}
