<?php

namespace PartKeepr\AuthBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\CoreBundle\Entity\BaseEntity;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\DoctrineReflectionBundle\Annotation\VirtualField;
use Symfony\Component\Security\Core\User\EquatableInterface;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity
 * @ORM\Table(
 *      name="PartKeeprUser",
 *      uniqueConstraints={@ORM\UniqueConstraint(name="username_provider", columns={"username", "provider_id"})})
 * @TargetService(uri="/api/users")
 */
class User extends BaseEntity implements UserInterface, EquatableInterface
{
    /**
     * @ORM\Column(length=50)
     * @Groups({"default"})
     */
    private $username;

    /**
     * @Groups({"default"})
     * @ORM\Column(length=32,nullable=true)
     */
    private $password;

    /**
     * @Groups({"default"})
     * @VirtualField(type="string")
     *
     * @var string
     */
    private $newPassword;

    /**
     * @Assert\Email()
     * @Groups({"default"})
     * @ORM\Column(length=255,nullable=true)
     *
     * @var string
     */
    private $email;

    /**
     * @ORM\Column(type="boolean")
     */
    private $admin;

    /**
     * Marks a user as a legacy user (=old md5 auth).
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $legacy;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $lastSeen;

    /**
     * @ORM\ManyToOne(targetEntity="PartKeepr\AuthBundle\Entity\UserProvider")
     * @Groups({"default"})
     */
    private $provider;

    /**
     * @ORM\OneToMany(targetEntity="PartKeepr\TipOfTheDayBundle\Entity\TipOfTheDayHistory", mappedBy="user", cascade={"remove"}, orphanRemoval=true)
     */
    private $tipHistories;

    /**
     * Holds the initial serialized user preferences.
     *
     * @VirtualField(type="string")
     * @Groups({"default"})
     *
     * @var string
     */
    private $initialUserPreferences;

    /**
     * Defines if the user is active.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $active;

    /**
     * Defines if the user is protected. Protection defines that the user may not be changed or removed.
     *
     * @ORM\Column(type="boolean")
     * @Groups({"default"})
     *
     * @var bool
     */
    private $protected;

    /**
     * Creates a new user object.
     *
     * @param string       $username The username to set (optional)
     * @param UserProvider $provider The authentification provider
     *
     * @throws \Exception
     */
    public function __construct($username = null, $provider = null)
    {
        if ($username !== null) {
            $this->setUsername($username);
        }

        if ($provider !== null) {
            $this->setProvider($provider);
        }

        $this->setAdmin(false);
        $this->setActive(true);
        $this->setProtected(false);
    }

    /**
     * Sets the admin flag.
     *
     * @param bool $bAdmin True if the user is an admin, false otherwise
     */
    public function setAdmin($bAdmin)
    {
        $this->admin = (bool) $bAdmin;
    }

    /**
     * @return bool
     */
    public function isProtected()
    {
        return $this->protected;
    }

    /**
     * @param bool $protected
     */
    public function setProtected($protected)
    {
        $this->protected = $protected;
    }

    /**
     * Returns if the user is active.
     *
     * @return bool
     */
    public function isActive()
    {
        return $this->active;
    }

    /**
     * Sets if the user is active.
     *
     * @param bool $active
     */
    public function setActive($active)
    {
        $this->active = $active;
    }

    /**
     * @return string
     */
    public function getInitialUserPreferences()
    {
        return $this->initialUserPreferences;
    }

    /**
     * @param string $initialUserPreferences
     */
    public function setInitialUserPreferences($initialUserPreferences)
    {
        $this->initialUserPreferences = $initialUserPreferences;
    }

    /**
     * @return mixed
     */
    public function getTipHistories()
    {
        return $this->tipHistories;
    }

    /**
     * @param mixed $tipHistories
     */
    public function setTipHistories($tipHistories)
    {
        $this->tipHistories = $tipHistories;
    }

    /**
     * @return string
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Returns the authentification provider.
     *
     * @return UserProvider
     */
    public function getProvider()
    {
        return $this->provider;
    }

    /**
     * Sets the authentification provider.
     *
     * @param UserProvider $provider
     */
    public function setProvider(UserProvider $provider)
    {
        $this->provider = $provider;
    }

    /**
     * Sets the raw username, without replacing any special chars.
     *
     * This method should only be used for building a temporary user
     * for login checks.
     *
     * @param string $username The raw username
     */
    public function setRawUsername($username)
    {
        $this->username = $username;
    }

    /**
     * Returns the admin flag.
     *
     * @return bool True if the user is an admin
     */
    public function isAdmin()
    {
        return $this->admin;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * Sets the user's password.
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    public function getNewPassword()
    {
        return $this->newPassword;
    }

    /**
     * Sets the new password. Used for password changes.
     *
     * @param string $password The new password
     */
    public function setNewPassword($password)
    {
        $this->newPassword = $password;
    }

    /**
     * Compares the given un-hashed password with the
     * object's hashed password.
     *
     *
     * @param string $password The unhashed password
     *
     * @return bool true if the passwords match, false otherwise
     */
    public function comparePassword($password)
    {
        return $this->compareHashedPassword(md5($password));
    }

    /**
     * Compares the given hashed password with the object's
     * hashed password.
     *
     * @param string $hashedPassword The md5-hashed password
     *
     * @return bool true if the passwords match, false otherwise
     */
    public function compareHashedPassword($hashedPassword)
    {
        if ($hashedPassword == $this->password) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Updates the last seen field to the current time.
     */
    public function updateSeen()
    {
        $this->lastSeen = new \DateTime('now');
    }

    /**
     * Returns if the user is a legacy user.
     *
     * @return bool
     */
    public function isLegacy()
    {
        return $this->legacy;
    }

    /**
     * Marks a user as a legacy user.
     *
     * @param bool|true $legacy
     */
    public function setLegacy($legacy = true)
    {
        $this->legacy = $legacy;
    }

    /**
     * Retrieve the last seen flag for a user.
     *
     * @return \DateTime
     */
    public function getLastSeen()
    {
        return $this->lastSeen;
    }

    public function getRoles()
    {
        return [];
    }

    public function getSalt()
    {
        return '';
    }

    public function eraseCredentials()
    {
    }

    public function isEqualTo(UserInterface $user)
    {
        if (!$user instanceof self) {
            return false;
        }

        if ($this->getUsername() != $user->getUsername()) {
            return false;
        }

        return true;
    }

    /**
     * Returns the username.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Sets the username.
     *
     * @param string $username The username to set.
     */
    public function setUsername($username)
    {
        $this->username = $username;
    }
}
