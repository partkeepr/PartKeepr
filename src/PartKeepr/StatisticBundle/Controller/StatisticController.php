<?php
namespace PartKeepr\StatisticBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;

class StatisticController extends FOSRestController
{
    /**
     * Exports the given data to a given format
     *
     * @Routing\Route("/api/statistics/current", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getCurrentStatisticAction()
    {
        $statisticService = $this->get("partkeepr.statistic.service");

        $aData = array();
        $aData["partCount"] = $statisticService->getPartCount();
        $aData["partCategoryCount"] = $statisticService->getPartCategoryCount();
        $aData["totalPrice"] = $statisticService->getTotalPrice();
        $aData["averagePrice"] = $statisticService->getAveragePrice();
        $aData["partsWithPrice"] = $statisticService->getPartCount(true);
        $aData["partsWithoutPrice"] = $aData["partCount"] - $aData["partsWithPrice"];
        $aData["units"] = $statisticService->getUnitCounts();

        return $aData;
    }


}
