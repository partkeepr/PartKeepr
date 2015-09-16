<?php
namespace PartKeepr\AuthBundle\Services;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NoResultException;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Entity\UserPreference;
use PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException;
use PartKeepr\Util\Exceptions\EntityNotPersistantException;

class UserPreferenceService
{
    /*
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Creates or updates a preference for a given user.
     *
     * @param User   $user  The user to set the preference for
     * @param string $key   The key to set
     * @param string $value The value to set
     *
     * @throws EntityNotPersistantException        Thrown if the entity is not persistant
     */
    public function setPreference(User $user, $key, $value)
    {
        if (!$this->entityManager->contains($user)) {
            throw new EntityNotPersistantException();
        }

        $dql = 'SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ';
        $dql .= "up.preferenceKey = :key";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter("user", $user);
        $query->setParameter("key", $key);

        try {
            $userPreference = $query->getSingleResult();
        } catch (\Exception $e) {
            $userPreference = new UserPreference();
            $userPreference->setUser($user);
            $userPreference->setKey($key);

            $this->entityManager->persist($userPreference);
        }

        $userPreference->setValue($value);

        $this->entityManager->flush();

        return $userPreference;
    }

    /**
     * Returns a specific preference value for the given user
     *
     * @param User   $user The user to retrieve the preference for
     * @param string $key  The preference key to retrieve
     *
     * @return string        The preference string
     * @throws \PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException    Thrown if the preference key was not found
     * @throws EntityNotPersistantException        Thrown if the entity is not persistant
     */
    public function getPreferenceValue(User $user, $key)
    {
        $userPreference = $this->getPreference($user, $key);

        return $userPreference->getValue();
    }

    /**
     * Returns all preferences for the given user
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user
     *
     * @throws EntityNotPersistantException Thrown if the user entity is not persistent
     */
    public function getPreferences(User $user)
    {
        if (!$this->entityManager->contains($user)) {
            throw new EntityNotPersistantException();
        }

        $dql = "SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter("user", $user);

        return $query->getResult();
    }

    /**
     * Returns a specific preference object for the given user
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user to retrieve the preference for
     * @param string                            $key  The preference key to retrieve
     *
     * @return UserPreference    The preference object
     * @throws \PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException    Thrown if the preference key was not found
     * @throws EntityNotPersistantException        Thrown if the entity is not persistant
     */
    public function getPreference(User $user, $key)
    {
        if (!$this->entityManager->contains($user)) {
            throw new EntityNotPersistantException();
        }

        $dql = "SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ";
        $dql .= "up.preferenceKey = :key";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter("user", $user);
        $query->setParameter("key", $key);

        try {
            $up = $query->getSingleResult();

            return $up;
        } catch (NoResultException $e) {
            throw new UserPreferenceNotFoundException($user, $key);
        }
    }

    /**
     * Removes a specific setting for a specific user.
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user to delete the preference for
     * @param string                            $key  The key to delete
     *
     * @throws EntityNotPersistantException        Thrown if the entity is not persistant
     */
    public function deletePreference(User $user, $key)
    {
        if (!$this->entityManager->contains($user)) {
            throw new EntityNotPersistantException();
        }

        $dql = "DELETE FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ";
        $dql .= "up.preferenceKey = :key";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter("user", $user);
        $query->setParameter("key", $key);

        $query->execute();
    }

}
