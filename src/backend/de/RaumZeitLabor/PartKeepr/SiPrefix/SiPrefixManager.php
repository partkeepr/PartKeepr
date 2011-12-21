<?php
namespace de\RaumZeitLabor\PartKeepr\SiPrefix;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Util\Singleton,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

class SiPrefixManager extends Singleton {
	public $siPrefixSymbolCache = array();
	
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
		$dql = "SELECT sip FROM de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix sip";
		$query = PartKeepr::getEM()->createQuery($dql);
		
		$this->siPrefixSymbolCache = $query->getResult();
	}
	
	public function siPrefixExists ($prefix) {
		$dql = "SELECT COUNT(sip) FROM de\RaumZeitLabor\PartKeepr\SiPrefix\SiPrefix sip WHERE sip.prefix = :prefix";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("prefix", $prefix);
	
		if ($query->getSingleScalarResult() == 0) {
			return false;
		} else {
			return true;
		}
	}
}