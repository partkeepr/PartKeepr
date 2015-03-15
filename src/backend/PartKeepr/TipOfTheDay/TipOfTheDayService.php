<?php
namespace PartKeepr\TipOfTheDay;

use PartKeepr\PartKeepr;
use PartKeepr\Service\RestfulService;
use PartKeepr\Service\Service;
use PartKeepr\Session\SessionManager;
use PartKeepr\Util\Configuration;

class TipOfTheDayService extends Service implements RestfulService {
	/**
	 * Returns all tips along with the information wether they are read or not.
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$aTips = array();
		$url = Configuration::getOption("partkeepr.tipoftheday.wiki", "http://partkeepr.org/wiki/index.php/");
		
		/* Extract all tips which aren't read */ 
		$dql =  "SELECT d FROM PartKeepr\TipOfTheDay\TipOfTheDay d WHERE d.name NOT IN ";
		$dql .= "(SELECT dh.name FROM PartKeepr\TipOfTheDay\TipOfTheDayHistory dh WHERE dh.user = :user)";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", SessionManager::getCurrentSession()->getUser());
		
		foreach ($query->getResult() as $result) {
			$aTips[] = array (
				"name" => $result->getName(),
				"read" => false,
				"url" => $url.$result->getName() . "?useskin=monobookplain");	
		}
		
		/* Extract all tips which are read */ 
		$dql =  "SELECT d FROM PartKeepr\TipOfTheDay\TipOfTheDay d WHERE d.name IN ";
		$dql .= "(SELECT dh.name FROM PartKeepr\TipOfTheDay\TipOfTheDayHistory dh WHERE dh.user = :user)";
		
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
		$this->requireParameter("name");
		
		try {
			$th = new TipOfTheDayHistory;
			$th->setUser($this->getUser());
			$th->setName($this->getParameter("name"));
			
			PartKeepr::getEM()->persist($th);
			PartKeepr::getEM()->flush();
		} catch (\Exception $e) {
			/* Do nothing */
		}
		
	}
	
	/**
	 * Marks all tips as unread for the current user
	 */
	public function markAllTipsAsUnread () {
		$dql = "DELETE FROM PartKeepr\TipOfTheDay\TipOfTheDayHistory th WHERE th.user = :user";
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("user", $this->getUser());
		$query->execute();
	}
}