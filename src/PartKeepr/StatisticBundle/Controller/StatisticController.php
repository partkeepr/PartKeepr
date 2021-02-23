<?php

namespace PartKeepr\StatisticBundle\Controller;

#use FOS\RestBundle\Controller\Annotations\QueryParam;
#use FOS\RestBundle\Controller\Annotations\View;
#use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
#use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class StatisticController extends Controller
{
    /**
     * Returns the current system statistics.
     *
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
     *
     *
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
     *
     * @return array
     */
    public function getStatisticRangeAction()
    {
        return $this->get('partkeepr.statistic.service')->getStatisticRange();
    }
}
