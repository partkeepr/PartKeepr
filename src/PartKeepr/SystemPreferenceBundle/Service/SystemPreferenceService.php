<?php

namespace PartKeepr\SystemPreferenceBundle\Service;

use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NoResultException;
use PartKeepr\SystemPreferenceBundle\Entity\SystemPreference;
use PartKeepr\SystemPreferenceBundle\Exceptions\SystemPreferenceNotFoundException;

class SystemPreferenceService
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
     * @param string $key   The key to set
     * @param string $value The value to set
     *
     * @return SystemPreference The user preference
     */
    public function setSystemPreference($key, $value)
    {
        $dql = 'SELECT sp FROM PartKeepr\SystemPreferenceBundle\Entity\SystemPreference sp WHERE sp.preferenceKey = :key';

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('key', $key);

        try {
            $systemPreference = $query->getSingleResult();
        } catch (\Exception $e) {
            $systemPreference = new SystemPreference();
            $systemPreference->setPreferenceKey($key);

            $this->entityManager->persist($systemPreference);
        }

        $systemPreference->setPreferenceValue($value);

        $this->entityManager->flush();

        return $systemPreference;
    }

    /**
     * Returns a specific preference value.
     *
     * @param string $key The preference key to retrieve
     *
     * @throws \PartKeepr\AuthBundle\Exceptions\UserPreferenceNotFoundException Thrown if the preference key was not found
     *
     * @return string The preference string
     */
    public function getSystemPreferenceValue($key)
    {
        $systemPreference = $this->getPreference($key);

        return $systemPreference->getPreferenceValue();
    }

    /**
     * Returns a specific preference object.
     *
     * @param string $key The preference key to retrieve
     *
     * @throws SystemPreferenceNotFoundException Thrown if the preference key was not found
     *
     * @return SystemPreference The preference object
     */
    public function getPreference($key)
    {
        $dql = "SELECT sp FROM PartKeepr\SystemPreferenceBundle\Entity\SystemPreference sp WHERE sp.preferenceKey = :key";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('key', $key);

        try {
            $sp = $query->getSingleResult();

            return $sp;
        } catch (NoResultException $e) {
            throw new SystemPreferenceNotFoundException($key);
        }
    }

    /**
     * Returns all system preferences.
     *
     * @return SystemPreference[] An array of SystemPreference objects
     */
    public function getPreferences()
    {
        $dql = "SELECT sp FROM PartKeepr\SystemPreferenceBundle\Entity\SystemPreference sp";

        $query = $this->entityManager->createQuery($dql);

        return $query->getResult();
    }

    /**
     * Removes a specific system preference.
     *
     * @param string $key The key to delete
     */
    public function deletePreference($key)
    {
        $dql = "DELETE FROM PartKeepr\SystemPreferenceBundle\Entity\SystemPreference sp WHERE sp.preferenceKey = :key";

        $query = $this->entityManager->createQuery($dql);
        $query->setParameter('key', $key);

        $query->execute();
    }
}
