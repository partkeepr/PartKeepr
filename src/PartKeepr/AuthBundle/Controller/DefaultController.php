<?php

namespace PartKeepr\AuthBundle\Controller;

use Doctrine\ORM\EntityRepository;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends Controller
{
    /**
     * Retrieves the salt for a given user.
     *
     * @Routing\Route("/api/users/getSalt", defaults={"method" = "post","_format" = "json"})
     * @Routing\Method({"POST"})
     *
     * @return string The salt
     */
    public function getSaltAction($data)
    {
        $entityManager = $this->getDoctrine()->getManager();

        /**
         * @var EntityRepository
         */
        $repository = $entityManager->getRepository(
            'PartKeepr\AuthBundle\Entity\FOSUser'
        );

        /**
         * @var FOSUser
         */
        $fosuser = $repository->findOneBy(['username' => $$data->get('username')]);

        if ($fosuser !== null) {
            return $fosuser->getSalt();
        } else {
            return false;
        }
    }

    /**
     * Logs out the user.
     *
     * @Routing\Route("/api/users/logout", defaults={"method" = "GET","_format" = "json"})
     */
    public function logoutAction(Request $request)
    {
        $this->get('security.token_storage')->setToken(null);
        $request->getSession()->invalidate();

        return new Response('', 200);
    }
}
