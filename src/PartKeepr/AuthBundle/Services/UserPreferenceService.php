<?php

namespace PartKeepr\AuthBundle\Services;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NoResultException;
use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\AuthBundle\Entity\UserPreference;
use PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException;

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
     * @return UserPreference The user preference
     */
    public function setPreference(User $user, $key, $value)
    {
        $dql = 'SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ';
        $dql .= 'up.preferenceKey = :key';

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $user);
        $query->setParameter('key', $key);

        try {
            $userPreference = $query->getSingleResult();
        } catch (\Exception $e) {
            $userPreference = new UserPreference();
            $userPreference->setUser($user);
            $userPreference->setPreferenceKey($key);

            $this->entityManager->persist($userPreference);
        }

        $userPreference->setPreferenceValue($value);

        $this->entityManager->flush();

        return $userPreference;
    }

    /**
     * Returns a specific preference value for the given user.
     *
     * @param User   $user The user to retrieve the preference for
     * @param string $key  The preference key to retrieve
     *
     * @throws \PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException Thrown if the preference key was not found
     *
     * @return string The preference string
     */
    public function getPreferenceValue(User $user, $key)
    {
        $userPreference = $this->getPreference($user, $key);

        return $userPreference->getPreferenceValue();
    }

    /**
     * Returns all preferences for the given user.
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user
     *
     * @return UserPreference[] An array of UserPreference objects
     */
    public function getPreferences(User $user)
    {
        $dql = "SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $user);

        return $query->getResult();
    }

    /**
     * Returns a specific preference object for the given user.
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user to retrieve the preference for
     * @param string                            $key  The preference key to retrieve
     *
     * @throws \PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException Thrown if the preference key was not found
     *
     * @return UserPreference The preference object
     */
    public function getPreference(User $user, $key)
    {
        $dql = "SELECT up FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ";
        $dql .= 'up.preferenceKey = :key';

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $user);
        $query->setParameter('key', $key);

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
     */
    public function deletePreference(User $user, $key)
    {
        $dql = "DELETE FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user AND ";
        $dql .= 'up.preferenceKey = :key';

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $user);
        $query->setParameter('key', $key);

        $query->execute();
    }

    /**
     * Removes all preferences for specific user. This is usually used when removing the user.
     *
     * @param \PartKeepr\AuthBundle\Entity\User $user The user to delete the preference for
     */
    public function deletePreferences(User $user)
    {
        $dql = "DELETE FROM PartKeepr\AuthBundle\Entity\UserPreference up WHERE up.user = :user";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('user', $user);

        $query->execute();
    }
}
