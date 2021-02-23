<?php

namespace PartKeepr\CoreBundle\Controller;

#use FOS\RestBundle\Controller\Annotations\View;
#use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\Intl\Intl;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    /**
     * Returns system status.
     *

     */
    public function getSystemStatusAction()
    {
        return $this->get('partkeepr_systemservice')->getSystemStatus();
    }

    /**
     * Returns system information.
     *
     */
    public function getSystemInformationAction()
    {
        return $this->get('partkeepr_systemservice')->getSystemInformation();
    }

    /**
     * Returns available disk space.
     */
    public function getDiskFreeSpaceAction()
    {
        return [
            'disk_total' => $this->get('partkeepr_systemservice')->getTotalDiskSpace(),
            'disk_used'  => $this->get('partkeepr_systemservice')->getUsedDiskSpace(),
        ];
    }

    /**
     * Returns the available currencies.
     */
    public function getCurrenciesAction()
    {
        $currencyData = Intl::getCurrencyBundle()->getCurrencyNames();

        $currencies = [];
        foreach ($currencyData as $code => $name) {
            $currencies[] = [
                "code"   => $code,
                "name"   => $name,
                "symbol" => Intl::getCurrencyBundle()->getCurrencySymbol($code),
            ];
        }

        return $currencies;
    }
}
