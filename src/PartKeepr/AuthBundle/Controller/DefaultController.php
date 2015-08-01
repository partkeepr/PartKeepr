<?php

namespace PartKeepr\AuthBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use Nelmio\ApiDocBundle\Annotation\ApiDoc;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Entity\User\Exceptions\InvalidLoginDataException;
use PartKeepr\AuthBundle\Entity\UserManager;
use PartKeepr\AuthBundle\Response\LoginResponse;
use PartKeepr\AuthBundle\Validator\Constraints\PasswordMD5Hash;
use PartKeepr\AuthBundle\Validator\Constraints\Username;
use PartKeepr\Session\SessionManager;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;
use Symfony\Component\HttpKernel\Exception\HttpException;

class DefaultController extends FOSRestController
{
    /**
     * Logs the user in using a given username and password.
     *
     * @Routing\Route("/auth/login", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"POST"})
     * @RequestParam(name="username", strict=true, description="The username, 3-50 characters. Allowed characters: a-z, A-Z, 0-9, an underscore (_), a backslash (\), a slash (/), a dot (.) or a dash (-)", requirements=@Username, allowBlank=false)
     * @RequestParam(name="password", strict=true, description="The password in MD5 format", requirements=@PasswordMD5Hash, allowBlank=false)
     * @ApiDoc(section="auth",output="PartKeepr\AuthBundle\Response\LoginResponse")
     * @View()
     *
     * @param ParamFetcher $paramFetcher
     *
     * @return LoginResponse
     * @throws InvalidLoginDataException
     */
    public function loginAction(ParamFetcher $paramFetcher)
    {
        /* Build a temporary user */
        $user = new User();
        $user->setRawUsername($paramFetcher->get("username"));
        $user->setHashedPassword($paramFetcher->get("password"));

        try {
            $authenticatedUser = UserManager::getInstance()->authenticate($user);
        } catch (InvalidLoginDataException $e) {
            throw new HttpException(401, "Username or password invalid.");
        }

        /* Start Session */
        $session = SessionManager::getInstance()->startSession($authenticatedUser);

        $session->getUser()->updateSeen();

        $loginResponse = new LoginResponse();
        $loginResponse->sessionId = $session->getSessionID();
        $loginResponse->username = $paramFetcher->get("username");
        $loginResponse->isAdmin = $session->getUser()->isAdmin();
        //$loginResponse->userPreferences = $session->getUser()->getPreferences();

        return $loginResponse;
    }

    /**
     * Retrieves the salt for a given user
     *
     * @Routing\Route("/auth/getSalt", defaults={"method" = "get","_format" = "json"})
     * @Routing\Method({"POST"})
     * @RequestParam(name="username", strict=true, description="The username, 3-50 characters. Allowed characters: a-z, A-Z, 0-9, an underscore (_), a backslash (\), a slash (/), a dot (.) or a dash (-)", requirements=@Username, allowBlank=false)
     * @View()
     *
     * @param ParamFetcher $paramFetcher
     *
     * @return LoginResponse
     * @throws InvalidLoginDataException
     */
    public function getSaltAction (ParamFetcher $paramFetcher) {
        $entityManager = $this->getDoctrine()->getManager();

        $repository = $entityManager->getRepository(
            'PartKeepr\AuthBundle\Entity\User'
        );

        /**
         * @var $user User
         */
        $user = $repository->findOneBy(array("username" => $paramFetcher->get("username")));

        return $user->getSalt();
    }
}