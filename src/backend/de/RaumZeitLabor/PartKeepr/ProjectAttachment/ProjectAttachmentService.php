<?php
namespace de\RaumZeitLabor\PartKeepr\ProjectAttachment;

use de\RaumZeitLabor\PartKeepr\Project\ProjectAttachment,
	de\RaumZeitLabor\PartKeepr\UploadedFile\TempUploadedFile,
	de\RaumZeitLabor\PartKeepr\Service\RestfulService,
	de\RaumZeitLabor\PartKeepr\Service\Service,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Project\Project,
	de\RaumZeitLabor\PartKeepr\Session\SessionManager;

class ProjectAttachmentService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		if ($this->hasParameter("id")) {
			return ProjectAttachmentManager::getInstance()->getProjectAttachment($this->getParameter("id"))->serialize();
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
						if ($item["property"] == "project_id") {
							if (array_key_exists("value", $item)) {
								$filter = $item["value"];
							}
						}
					}
				}
			}
			return ProjectAttachmentManager::getInstance()->getProjectAttachments(
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
		$this->requireParameter("project_id");
		
		$tmpImage = TempUploadedFile::loadById($this->getParameter("tmp_id"));
		
		$file = new ProjectAttachment();
		
		$project = Project::loadById($this->getParameter("project_id"));
		
		$file->setProject($project);
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

		$file = ProjectAttachment::loadById($this->getParameter("id"));
		
		PartKeepr::getEM()->remove($file);
		PartKeepr::getEM()->flush();

		return array("data" => null);
	}
	
}