<?php

namespace PartKeepr\CoreBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\Intl\Intl;

class DefaultController extends FOSRestController
{
    /**
     * Returns system status.
     *
     * @Routing\Route("/api/system_status", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getSystemStatusAction()
    {
        return $this->get('partkeepr_systemservice')->getSystemStatus();
    }

    /**
     * Returns system information.
     *
     * @Routing\Route("/api/system_information", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getSystemInformationAction()
    {
        return $this->get('partkeepr_systemservice')->getSystemInformation();
    }

    /**
     * Returns available disk space.
     *
     * @Routing\Route("/api/disk_space", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getDiskFreeSpaceAction()
    {
        return [
            'disk_total' => $this->get('partkeepr_systemservice')->getTotalDiskSpace(),
            'disk_used' => $this->get('partkeepr_systemservice')->getUsedDiskSpace(),
        ];
    }

    /**
     * Returns the available currencies.
     *
     * @Routing\Route("/api/currencies", defaults={"method" = "get","_format" = "json"})
     * @View()
     */
    public function getCurrenciesAction()
    {
        $currencyData = Intl::getCurrencyBundle()->getCurrencyNames();

        $currencies = [];
        foreach ($currencyData as $code => $name) {
            $currencies[] = [
                "code" => $code,
                "name" => $name,
                "symbol" => Intl::getCurrencyBundle()->getCurrencySymbol($code),
            ];
        }

        return $currencies;
    }
}
