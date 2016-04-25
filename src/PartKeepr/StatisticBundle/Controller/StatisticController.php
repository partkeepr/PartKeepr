<?php

namespace PartKeepr\StatisticBundle\Controller;

use FOS\RestBundle\Controller\Annotations\QueryParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;

class StatisticController extends FOSRestController
{
    /**
     * Returns the current system statistics.
     *
     * @Routing\Route("/api/statistics/current", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getCurrentStatisticAction()
    {
        $statisticService = $this->get('partkeepr.statistic.service');

        $aData = [];
        $aData['partCount'] = $statisticService->getPartCount();
        $aData['partCategoryCount'] = $statisticService->getPartCategoryCount();
        $aData['totalPrice'] = $statisticService->getTotalPrice();
        $aData['averagePrice'] = $statisticService->getAveragePrice();
        $aData['partsWithPrice'] = $statisticService->getPartCount(true);
        $aData['partsWithoutPrice'] = $aData['partCount'] - $aData['partsWithPrice'];
        $aData['units'] = $statisticService->getUnitCounts();

        return $aData;
    }

    /**
     * Returns the sampled statistics for a given period.
     *
     * @QueryParam(name="start")
     * @QueryParam(name="end")
     * @Routing\Route("/api/statistics/sampled", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @param ParamFetcher $paramFetcher
     *
     * @return array
     */
    public function getSampledStatisticAction(ParamFetcher $paramFetcher)
    {
        $start = new \DateTime($paramFetcher->get('start'));
        $end = new \DateTime($paramFetcher->get('end'));

        return $this->get('partkeepr.statistic.service')->getSampledStatistics($start, $end);
    }

    /**
     * Returns the range in which statistics are available.
     *
     * @Routing\Route("/api/statistics/range", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getStatisticRangeAction()
    {
        return $this->get('partkeepr.statistic.service')->getStatisticRange();
    }
}
