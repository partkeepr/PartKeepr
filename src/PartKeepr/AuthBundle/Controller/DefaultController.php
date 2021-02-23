<?php

namespace PartKeepr\AuthBundle\Controller;

use Doctrine\ORM\EntityRepository;
use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Validator\Constraints\Username;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

class DefaultController extends FOSRestController
{
    /**
     * Retrieves the salt for a given user.
     *
     * @Routing\Route("/api/users/getSalt", defaults={"method" = "post","_format" = "json"})
     * @Routing\Method({"POST"})
     * @RequestParam(name="username", strict=true, description="The username, 3-50 characters. Allowed characters: a-z, A-Z, 0-9, an underscore (_), a backslash (\), a slash (/), a dot (.) or a dash (-)", requirements=@Username, allowBlank=false)
     * @View()
     *
     * @param ParamFetcher $paramFetcher
     *
     * @return string The salt
     */
    public function getSaltAction(ParamFetcher $paramFetcher)
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
        $user = $repository->findOneBy(['username' => $paramFetcher->get('username')]);

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
