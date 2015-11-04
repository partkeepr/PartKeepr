<?php
namespace PartKeepr\AuthBundle\Action;


use Dunglas\ApiBundle\Action\ActionUtilTrait;
use FOS\UserBundle\Model\UserManagerInterface;
use FOS\UserBundle\Util\UserManipulator;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Services\UserService;
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

    public function __construct(
        UserService $userService,
        UserManipulator $userManipulator,
        EncoderFactory $encoderFactory,
        UserManagerInterface $userManager
    ) {
        $this->userService = $userService;
        $this->userManipulator = $userManipulator;
        $this->encoderFactory = $encoderFactory;
        $this->userManager = $userManager;
    }

    public function __invoke(Request $request)
    {
        $user = $this->userService->getUser();

        if (!$request->request->has("oldpassword") && !$request->request->has("newpassword")) {
            throw new \Exception("old password and new password need to be specified");
        }

        $FOSUser = $this->userManager->findUserByUsername($user->getUsername());

        if ($FOSUser !== null) {
            $encoder = $this->encoderFactory->getEncoder($FOSUser);
            $encoded_pass = $encoder->encodePassword($request->request->get("oldpassword"), $FOSUser->getSalt());

            if ($FOSUser->getPassword() != $encoded_pass) {
                throw new \Exception("Old password is wrong");
            }

            $this->userManipulator->changePassword($user->getUsername(), $request->request->get("newpassword"));
        } else {
            if ($user->isLegacy()) {
                if ($user->getPassword() !== md5($request->request->get("oldpassword"))) {
                    throw new \Exception("Old password is wrong");
                }

                $user->setNewPassword($request->request->get("newpassword"));

                $this->userService->syncData($user);
            } else {
                throw new \Exception("Cannot change password for LDAP users");
            }
        }

        $user->setPassword("");
        $user->setNewPassword("");

        return $user;
    }
}
