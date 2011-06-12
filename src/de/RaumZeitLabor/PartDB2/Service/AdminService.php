<?php
namespace de\RaumZeitLabor\PartDB2\Service;
use de\RaumZeitLabor\PartDB2\Session\SessionManager;

declare(encoding = 'UTF-8');

class AdminService extends Service {
	public function mayCall ($call) {
		if (SessionManager::getCurrentSession()->getUser()->isAdmin()) {
			return true;
		} else {
			return false;
		}
	}
}

?>