<?php
namespace PartKeepr\SiPrefix;

use PartKeepr\Manager\AbstractManager;
use PartKeepr\Util\Singleton,
	PartKeepr\PartKeepr;

class SiPrefixManager extends AbstractManager {
    /**
     * Returns the FQCN for the target entity to operate on.
     *
     * @return string The FQCN, e.g. PartKeepr\Part
     */
    public function getEntityName()
    {
        return 'PartKeepr\SiPrefixBundle\Entity\SiPrefix';
    }

    /**
     * Returns all fields which need to appear in the getList ResultSet.
     *
     * @return array An array of all fields which should be returned
     */
    public function getQueryFields()
    {
        return array("id", "symbol", "base", "exponent", "base");
    }

    /**
     * Returns the default sort field
     *
     * @return string The default sort field
     */
    public function getDefaultSortField()
    {
        return "symbol";
    }

	public $siPrefixSymbolCache = array();

    // @todo fix legacy stuff below
	public function getSiPrefixBySymbol ($symbol) {
		if (!is_array($this->siPrefixSymbolCache) || count($this->siPrefixSymbolCache) == 0) {
			$this->createSiPrefixSymbolCache();
		}
		
		foreach ($this->siPrefixSymbolCache as $entry) {
			if ($entry->getSymbol() == $symbol) {
				return $entry;
			}
		}
		
		throw new \Exception(sprintf("Symbol '%s' not found", $symbol));
	}
	
	private function createSiPrefixSymbolCache () {
		$dql = "SELECT sip FROM PartKeepr\SiPrefixBundle\Entity\SiPrefix sip";
		$query = PartKeepr::getEM()->createQuery($dql);
		
		$this->siPrefixSymbolCache = $query->getResult();
	}
	
	public function siPrefixExists ($prefix) {
		$dql = "SELECT COUNT(sip) FROM PartKeepr\SiPrefixBundle\Entity\SiPrefix sip WHERE sip.prefix = :prefix";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("prefix", $prefix);
	
		if ($query->getSingleScalarResult() == 0) {
			return false;
		} else {
			return true;
		}
	}
}