<?php
namespace de\RaumZeitLabor\PartKeepr\ProjectReport;
use de\RaumZeitLabor\PartKeepr\Service\RestfulService;

declare(encoding = 'UTF-8');

use de\RaumZeitLabor\PartKeepr\Service\Service;
use de\RaumZeitLabor\PartKeepr\Project\ProjectManager,
	de\RaumZeitLabor\PartKeepr\PartKeepr,
	de\RaumZeitLabor\PartKeepr\Part\Part,
	de\RaumZeitLabor\PartKeepr\Manager\ManagerFilter;

class ProjectReportService extends Service implements RestfulService {
	/**
	 * (non-PHPdoc)
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$reportIds = explode(",",$this->getParameter("reports"));
		
		$dql = "SELECT SUM(pp.quantity) AS quantity, p.id AS part_id, st.name AS storageLocation_name, p.stockLevel ";
		$dql .= "AS stockLevel FROM de\RaumZeitLabor\PartKeepr\Project\ProjectPart pp JOIN pp.part p JOIN ";
		$dql .= "p.storageLocation st JOIN pp.project pr WHERE pr.id IN (:projects) GROUP BY pp.part";
		
		$query = PartKeepr::getEM()->createQuery($dql);
		$query->setParameter("projects", $reportIds);
		
		$aFinalResult = array();
		foreach ($query->getResult() as $record) {
			$missing = $record["quantity"] - $record["stockLevel"];
			
			if ($missing < 0) { $missing = 0; }
			
			$aFinalResult[] = array(
					"quantity" => $record["quantity"],
					"available" => $record["stockLevel"],
					"missing" => $missing,
					"part" => array("response" => array("totalCount" => 1, "data" => Part::loadById($record["part_id"])->serialize())),
					"storageLocation_name" => $record["storageLocation_name"],
					"sum_order" => 0
					);
		}
		return array("data" => $aFinalResult);
	}
	
	public function create () {}
	
	public function update () {}
	
	public function destroy () {}
}