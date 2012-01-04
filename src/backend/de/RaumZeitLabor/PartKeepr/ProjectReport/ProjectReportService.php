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
	 * Returns a project report.
	 * 
	 * The input format is an array with the following keys per entry:
	 * - project: The project ID
	 * - amount: Specifies how many copies of the project need to be reported
	 * 
	 * The output format is an array which contains the following keys:
	 * - quantity: The overall quantity of parts needed (for a specific part)
	 * - part: The serialized part entity
	 * - storageLocation_name: The storage location name
	 * - available: The overall amount of available parts
	 * - sum_order: Always set to 0 because calculation happens in the frontend
	 * 
	 * @see de\RaumZeitLabor\PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$reports = json_decode($this->getParameter("reports"), true);
		
		$aPartResults = array();
		
		// Loop over all reports and calculate the overall quantities
		foreach ($reports as $report) {
			$dql = "SELECT pp.quantity, p.id FROM ";
			$dql .= "de\RaumZeitLabor\PartKeepr\Project\ProjectPart pp JOIN pp.part p WHERE pp.project = :project";
			
			$query = PartKeepr::getEM()->createQuery($dql);
			$query->setParameter("project", $report["project"]);
				
			foreach ($query->getArrayResult() as $result) {
				$part = Part::loadById($result["id"]);
				
				if (array_key_exists($result["id"], $aPartResults)) {
					// Only update the quantity of the part
					$aPartResults[$result["id"]]["quantity"] += $result["quantity"] * $report["amount"]; 
				} else {
					// Create a full resultset
					$aPartResults[$result["id"]] = array(
							"quantity" => $result["quantity"] * $report["amount"],
							"part" => array("response" => array("totalCount" => 1, "data" => $part->serialize())),
							"storageLocation_name" => $part->getStorageLocation()->getName(),
							"available" => $part->getStockLevel(),
							"sum_order" => 0
					);
				}
			}
		}
		
		$aFinalResult = array();
		
		// Iterate over all results and calculate how many parts are missing
		foreach ($aPartResults as $key => $partResult) {
			$missing = $partResult["quantity"] - $partResult["available"];
		
			if ($missing < 0) {
				$missing = 0;
			}
		
			$partResult["missing"] = $missing;
		
			$aFinalResult[] = $partResult;
		}
			
		return array("data" => $aFinalResult);
	}
	
	public function create () {}
	
	public function update () {}
	
	public function destroy () {}
}