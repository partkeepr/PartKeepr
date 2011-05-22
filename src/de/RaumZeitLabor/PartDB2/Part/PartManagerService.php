<?php
namespace de\raumzeitlabor\PartDB2\Part;
declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartDB2\Service\Service;
use de\RaumZeitLabor\PartDB2\Part\PartManager;

class PartManagerService extends Service {
	public function getParts () {
		$aParameters = array(
			"start" => $this->getParameter("start", 0),
			"sortby" => $this->getParameter("sortby", "name"),
			"dir" => $this->getParameter("dir", "asc"),
			"filter" => $this->getParameter("filter", ""),
			"category" => $this->getParameter("category", 0)
		);
		return PartManager::getInstance()->getParts($aParameters);
	}
}