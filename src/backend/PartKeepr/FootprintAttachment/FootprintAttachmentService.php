<?php
namespace PartKeepr\FootprintAttachment;

use PartKeepr\Footprint\FootprintAttachment,
	PartKeepr\UploadedFile\TempUploadedFile,
	PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\PartKeepr,
	PartKeepr\Footprint\Footprint,
	PartKeepr\Session\SessionManager;

class FootprintAttachmentService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::get()
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
	 * @see PartKeepr\Service.RestfulService::create()
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
	 * @see PartKeepr\Service.RestfulService::update()
	 */
	public function update () {

	}
	
	/**
	 * (non-PHPdoc)
	 * @see PartKeepr\Service.RestfulService::destroy()
	 */
	public function destroy () {
		$this->requireParameter("id");

		$file = FootprintAttachment::loadById($this->getParameter("id"));
		
		PartKeepr::getEM()->remove($file);
		PartKeepr::getEM()->flush();

		return array("data" => null);
	}
	
}