<?php

namespace PartKeepr\AuthBundle\Controller;

use Doctrine\ORM\EntityRepository;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
#use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Validator\Constraints\Username;
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
     * @View()
     *
     *
     * @return string The salt
     */
    public function getSaltAction($username)
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
        $user = $repository->findOneBy($username);

        if ($user !== null) {
            return $user->getSalt();
        } else {
            return false;
        }
    }

    /**
     * Logs out the user.
     *
     * @Routing\Route("/api/users/logout", defaults={"method" = "GET","_format" = "json"})
     *
     * @param Request $request
     */
    public function logoutAction(Request $request)
    {
        $this->get('security.token_storage')->setToken(null);
        $request->getSession()->invalidate();

        return new Response('', 200);
    }
}
