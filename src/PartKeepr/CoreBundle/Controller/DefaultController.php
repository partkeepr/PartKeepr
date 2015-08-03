<?php
namespace PartKeepr\CoreBundle\Controller;

use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;

class DefaultController extends FOSRestController
{
    /**
     * Returns system information
     *
     * @Routing\Route("/api/system_status", defaults={"method" = "get","_format" = "json"})
     * @View()
     *
     * @return array
     */
    public function getSystemStatusAction()
    {
        return $this->get("partkeepr_systemservice")->getSystemStatus();
    }
}
