<?php
namespace de\RaumZeitLabor\PartKeepr\Service;

use de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class AdminService extends Service {
	public function mayCall ($call) {
		if (SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			return true;
		} else {
			return false;
		}
	}
}
