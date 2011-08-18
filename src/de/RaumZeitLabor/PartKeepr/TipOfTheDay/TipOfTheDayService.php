<?php
namespace de\RaumZeitLabor\PartKeepr\TipOfTheDay;
use de\RaumZeitLabor\PartKeepr\Util\Configuration;

use de\RaumZeitLabor\PartKeepr\User\User;

use de\RaumZeitLabor\PartKeepr\Service\RestfulService;
use de\RaumZeitLabor\PartKeepr\Session\SessionManager;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr;

class TipOfTheDayService extends Service implements RestfulService {
	/**
	 * Returns all tips along with the information wether they are read or not.
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$aTips = array();
		$url = Configuration::getOption("partkeepr.tipoftheday.wiki", "http://partkeepr.org/wiki/index.php/");
		
		/* Extract all tips which aren't read */ 
		$dql =  "SELECT d FROM de\RaumZeitLabor\PartKeepr\TipOfTheDay\TipOfTheDay d WHERE d.name NOT IN ";
		$dql .= "(SELECT dh.name FROM de\RaumZeitLabor\PartKeepr\TipOfTheDay\TipOfTheDayHistory dh WHERE dh.user = :user)";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", SessionManager::getCurrentSession()->getUser());
		
		foreach ($query->getResult() as $result) {
			$aTips[] = array (
				"name" => $result->getName(),
				"read" => false,
				"url" => $url.$result->getName() . "?useskin=monobookplain");	
		}
		
		/* Extract all tips which are read */ 
		$dql =  "SELECT d FROM de\RaumZeitLabor\PartKeepr\TipOfTheDay\TipOfTheDay d WHERE d.name IN ";
		$dql .= "(SELECT dh.name FROM de\RaumZeitLabor\PartKeepr\TipOfTheDay\TipOfTheDayHistory dh WHERE dh.user = :user)";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", SessionManager::getCurrentSession()->getUser());
		
		foreach ($query->getResult() as $result) {
			$aTips[] = array (
				"name" => $result->getName(),
				"read" => true,
				"url" => $url.$result->getName() . "?useskin=monobookplain");	
		}
		
		return array("data" => $aTips);
	}
	
	public function create() {}
	public function update () {}
	public function destroy () {}
	
	/**
	 * Marks a specific tip as read.
	 * 
	 * Uses the parameter "name" to identify the tip.
	 */
	public function markTipAsRead () {
		$th = new TipOfTheDayHistory;
		$th->setUser($this->getUser());
		$th->setName($this->getParameter("name"));
		
		PartKeepr::getEM()->persist($th);
		PartKeepr::getEM()->flush();
	}
}