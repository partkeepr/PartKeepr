<?php
namespace de\RaumZeitLabor\PartKeepr\FootprintAttachment;
use de\RaumZeitLabor\PartKeepr\Footprint\FootprintAttachment;

use de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile;

use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Footprint\Footprint,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class FootprintAttachmentService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return FootprintAttachmentManager::getInstance()->getFootprintAttachment($this->getParameter("id"))->serialize();
		} else {
			if ($this->hasParameter("sort")) {
				$tmp = json_decode($this->getParameter("sort"), true);
				
				$aSortParams = $tmp[0];
			} else {
				$aSortParams = array(
					"property" => "id",
					"direction" => "ASC");
			}

			$filter = "";
			
			if ($this->hasParameter("filter")) {
				$tmp = json_decode($this->getParameter("filter"), true);
				
				foreach ($tmp as $item) {
					if (array_key_exists("property", $item)) {
						if ($item["property"] == "footprint_id") {
							if (array_key_exists("value", $item)) {
								$filter = $item["value"];
							}
						}
					}
				}
			}
			return FootprintAttachmentManager::getInstance()->getFootprintAttachments(
			$this->getParameter("start", $this->getParameter("start", 0)),
			$this->getParameter("limit", $this->getParameter("limit", 25)),
			$this->getParameter("sortby", $aSortParams["property"]),
			$this->getParameter("dir", $aSortParams["direction"]),
			$filter);
		}
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::create()
	 */
	public function create () {
		$this->requireParameter("tmp_id");
		$this->requireParameter("footprint_id");
		
		$tmpImage = TempUploadedFile::loadById($this->getParameter("tmp_id"));
		
		$file = new FootprintAttachment();
		
		$footprint = Footprint::loadById($this->getParameter("footprint_id"));
		
		$file->setFootprint($footprint);
		$file->replace($tmpImage->getFilename());
		$file->setOriginalFilename($tmpImage->getOriginalFilename());
		$file->setDescription($this->getParameter("description"));
		PartKeepr::getEM()->persist($file);
		PartKeepr::getEM()->flush();
		
		return $file->serialize();
	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::update()
	 */
	public function update () {

	}
	
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");

		$file = FootprintAttachment::loadById($this->getParameter("id"));
		
		PartKeepr::getEM()->remove($file);
		PartKeepr::getEM()->flush();

		return array("data" => null);
	}
	
}