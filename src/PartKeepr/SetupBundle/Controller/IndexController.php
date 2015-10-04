<?php
namespace PartKeepr\SetupBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends Controller
{
    /**
     * @Route("/setup")
     */
    public function setupAction () {
        return $this->render('PartKeeprSetupBundle::setup.html.twig');
    }
}
