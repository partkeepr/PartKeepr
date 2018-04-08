<?php

namespace PartKeepr\MobileFrontendBundle\Controller;

use Symfony\Component\Routing\Annotation\Route;

class IndexController extends \PartKeepr\FrontendBundle\Controller\IndexController
{
    /**
     * This is basically a copy of the PartKeepr's legacy index.php.
     *
     * @Route("/mobile/")
     */
    public function indexAction()
    {
        return $this->render('PartKeeprMobileFrontendBundle::index.html.twig', $this->getRenderParameters());
    }
}
