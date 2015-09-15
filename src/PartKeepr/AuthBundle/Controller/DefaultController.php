<?php

namespace PartKeepr\AuthBundle\Controller;

use FOS\RestBundle\Controller\Annotations\RequestParam;
use FOS\RestBundle\Controller\Annotations\View;
use FOS\RestBundle\Controller\FOSRestController;
use FOS\RestBundle\Request\ParamFetcher;
use PartKeepr\AuthBundle\Entity\FOSUser;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Entity\User\Exceptions\InvalidLoginDataException;
use PartKeepr\AuthBundle\Response\LoginResponse;
use PartKeepr\AuthBundle\Validator\Constraints\Username;
use Sensio\Bundle\FrameworkExtraBundle\Configuration as Routing;

class DefaultController extends FOSRestController
{
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
    public function getSaltAction(ParamFetcher $paramFetcher)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $repository = $entityManager->getRepository(
            'PartKeepr\AuthBundle\Entity\FOSUser'
        );

        /**
         * @var $user FOSUser
         */
        $user = $repository->findOneBy(array("username" => $paramFetcher->get("username")));

        return $user->getSalt();
    }
}
