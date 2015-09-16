<?php
namespace PartKeepr\AuthBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use PartKeepr\DoctrineReflectionBundle\Annotation\TargetService;
use PartKeepr\Util\BaseEntity;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ORM\Table(
 *      name="PartKeeprUser",
 *      uniqueConstraints={@ORM\UniqueConstraint(name="username_provider", columns={"username", "provider"})})
 * @TargetService(uri="/api/users")
 */
class User extends BaseEntity
{
    /**
     * @ORM\Column(length=50)
     * @Groups({"default"})
     */
    private $username;

    /**
     * @ORM\Column(length=32,nullable=true)
     */
    private $password;

    /**
     * @ORM\Column(type="boolean")
     */
    private $admin;

    /**
     * @ORM\Column(type="datetime",nullable=true)
     */
    private $lastSeen;

    /**
     * @ORM\Column(type="string", length=255)
     * @var string
     */
    private $provider;

    /**
     * Creates a new user object.
     *
     * @param string $username The username to set (optional)
     * @param string $provider The authentification provider
     *
     * @throws \Exception
     */
    public function __construct($username = null, $provider = null)
    {
        if ($username !== null) {
            $this->setUsername($username);
        }

        if ($provider === null) {
            throw new \Exception("The authentification provider must be specified");
        }

        $this->setProvider($provider);

        $this->setAdmin(false);
    }

    /**
     * Sets the authentification provider
     *
     * @param $provider
     */
    public function setProvider($provider)
    {
        $this->provider = $provider;
    }

    /**
     * Returns the authentification provider
     *
     * @return string
     */
    public function getProvider()
    {
        return $this->provider;
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
     * Returns the username.
     *
     * @return string The username
     */
    public function getUsername()
    {
        return $this->username;
    }

    /**
     * Sets the admin flag
     *
     * @param boolean $bAdmin True if the user is an admin, false otherwise
     */
    public function setAdmin($bAdmin)
    {
        $this->admin = (boolean)$bAdmin;
    }

    /**
     * Returns the admin flag
     *
     * @return boolean True if the user is an admin
     */
    public function isAdmin()
    {
        return $this->admin;
    }

    /**
     * Sets the user's password. Automatically
     * applies md5 hashing.
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->setHashedPassword(md5($password));
    }

    /**
     * Returns the user's md5-hashed password.
     *
     * @param none
     *
     * @return string The md5-hashed password
     */
    public function getHashedPassword()
    {
        return $this->password;
    }

    /**
     * Sets the user's password. Expects a hash
     * and does not apply md5 hasing.
     *
     * @param string $hashedPassword
     */
    public function setHashedPassword($hashedPassword)
    {
        $this->password = $hashedPassword;
    }

    /**
     * Compares the given un-hashed password with the
     * object's hashed password.
     *
     *
     * @param string $password The unhashed password
     *
     * @return boolean    true if the passwords match, false otherwise
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
     * @return boolean    true if the passwords match, false otherwise
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
        $this->lastSeen = new \DateTime("now");
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

    /**
     * Unserializes the user.
     *
     * @param string $serialized
     */
    public function unserialize($serialized)
    {

    }
}
