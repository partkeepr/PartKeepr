<?php
namespace PartKeepr\ProjectReport;

use PartKeepr\Service\RestfulService,
	PartKeepr\Service\Service,
	PartKeepr\Project\ProjectManager,
	PartKeepr\PartKeepr,
	PartKeepr\Part\Part,
	PartKeepr\Manager\ManagerFilter;

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
	 * @see PartKeepr\Service.RestfulService::get()
	 */
	public function get () {
		$reports = json_decode($this->getParameter("reports"), true);
		
		$aPartResults = array();
		
		// Loop over all reports and calculate the overall quantities
		foreach ($reports as $report) {
			$dql = "SELECT pp.quantity, pro.name AS projectname, pp.remarks, p.id FROM ";
			$dql .= "PartKeepr\Project\ProjectPart pp JOIN pp.part p ";
			$dql .= "JOIN pp.project pro WHERE pp.project = :project";
			
			$query = PartKeepr::getEM()->createQuery($dql);
			$query->setParameter("project", $report["project"]);
				
			foreach ($query->getArrayResult() as $result) {
				$part = Part::loadById($result["id"]);
				
				if (array_key_exists($result["id"], $aPartResults)) {
					// Only update the quantity of the part
					$aPartResults[$result["id"]]["quantity"] += $result["quantity"] * $report["amount"];
					$aPartResults[$result["id"]]["projects"][] = $result["projectname"];
					
					if ($result["remarks"] != "") {
						$aPartResults[$result["id"]]["remarks"][] = $result["projectname"]. ": " .$result["remarks"];
					}
				} else {
					// Create a full resultset
					$aPartResults[$result["id"]] = array(
							"quantity" => $result["quantity"] * $report["amount"],
							"part" => array("response" => array("totalCount" => 1, "data" => $part->serialize())),
							"storageLocation_name" => $part->getStorageLocation()->getName(),
							"available" => $part->getStockLevel(),
							"sum_order" => 0,
							"projects" => array($result["projectname"]),
							"remarks" => array() 
					);
					
					if ($result["remarks"] != "") {
						$aPartResults[$result["id"]]["remarks"] = array($result["projectname"]. ": " .$result["remarks"]); 
					}
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
			$partResult["remarks"] = implode(", ", $partResult["remarks"]);
			$partResult["projects"] = implode(", ", $partResult["projects"]);
			
			$aFinalResult[] = $partResult;
		}
			
		return array("data" => $aFinalResult);
	}
	
	public function create () {}
	
	public function update () {}
	
	public function destroy () {}
}