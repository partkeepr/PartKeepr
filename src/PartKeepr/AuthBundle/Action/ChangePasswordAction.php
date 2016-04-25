<?php

namespace PartKeepr\AuthBundle\Action;

use Dunglas\ApiBundle\Action\ActionUtilTrait;
use FOS\UserBundle\Model\UserManagerInterface;
use FOS\UserBundle\Util\UserManipulator;
use PartKeepr\AuthBundle\Exceptions\OldPasswordWrongException;
use PartKeepr\AuthBundle\Exceptions\PasswordChangeNotAllowedException;
use PartKeepr\AuthBundle\Services\UserService;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Encoder\EncoderFactory;

class ChangePasswordAction
{
    use ActionUtilTrait;

    /**
     * @var UserService
     */
    private $userService;

    /**
     * @var UserManipulator
     */
    private $userManipulator;

    /**
     * @var EncoderFactory
     */
    private $encoderFactory;

    /**
     * @var UserManagerInterface
     */
    private $userManager;

    /**
     * @var ContainerInterface
     */
    private $container;

    public function __construct(
        UserService $userService,
        UserManipulator $userManipulator,
        EncoderFactory $encoderFactory,
        UserManagerInterface $userManager,
        ContainerInterface $container
    ) {
        $this->userService = $userService;
        $this->userManipulator = $userManipulator;
        $this->encoderFactory = $encoderFactory;
        $this->userManager = $userManager;
        $this->container = $container;
    }

    public function __invoke(Request $request)
    {
        if ($this->container->hasParameter('partkeepr.auth.allow_password_change') &&
            $this->container->getParameter('partkeepr.auth.allow_password_change') === false) {
            throw new PasswordChangeNotAllowedException();
        }

        $user = $this->userService->getUser();

        if (!$request->request->has('oldpassword') && !$request->request->has('newpassword')) {
            throw new \Exception('old password and new password need to be specified');
        }

        $FOSUser = $this->userManager->findUserByUsername($user->getUsername());

        if ($FOSUser !== null) {
            $encoder = $this->encoderFactory->getEncoder($FOSUser);
            $encoded_pass = $encoder->encodePassword($request->request->get('oldpassword'), $FOSUser->getSalt());

            if ($FOSUser->getPassword() != $encoded_pass) {
                throw new OldPasswordWrongException();
            }

            $this->userManipulator->changePassword($user->getUsername(), $request->request->get('newpassword'));
        } else {
            if ($user->isLegacy()) {
                if ($user->getPassword() !== md5($request->request->get('oldpassword'))) {
                    throw new OldPasswordWrongException();
                }

                $user->setNewPassword($request->request->get('newpassword'));

                $this->userService->syncData($user);
            } else {
                throw new \Exception('Cannot change password for LDAP users');
            }
        }

        $user->setPassword('');
        $user->setNewPassword('');

        return $user;
    }
}
