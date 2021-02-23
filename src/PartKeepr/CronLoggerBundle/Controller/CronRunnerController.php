<?php

namespace PartKeepr\CronLoggerBundle\Controller;

#use FOS\RestBundle\Controller\FOSRestController;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class CronRunnerController extends Controller
{
    /**
     * @Route("/api/cron/run")
     */
    public function runCronsAction()
    {
        $this->get('partkeepr.cronlogger_service')->runCrons();

        return new Response('', 200);
    }
}
