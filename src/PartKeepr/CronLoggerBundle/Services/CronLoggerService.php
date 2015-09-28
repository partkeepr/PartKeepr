<?php
namespace PartKeepr\CronLoggerBundle\Services;

use Doctrine\ORM\EntityManager;
use PartKeepr\CronLoggerBundle\Entity\CronLogger;

class CronLoggerService
{
    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    /**
     * Marks a specific cronjob as ran
     *
     * @param string $cronjob The name of the cronjob
     *
     * @return CronLogger The cron logger entity
     */
    public function markCronRun($cronjob)
    {
        $dql = "SELECT c FROM PartKeepr\CronLoggerBundle\Entity\CronLogger c WHERE c.cronjob = :cronjob";
        $query = $this->entityManager->createQuery($dql);
        $query->setParameter("cronjob", $cronjob);

        try {
            $result = $query->getSingleResult();
        } catch (\Exception $e) {
            $result = new CronLogger();
            $result->setCronjob($cronjob);
            $this->entityManager->persist($result);
        }

        $result->setLastRunDate(new \DateTime());

        $this->entityManager->flush();

        return $result;
    }

    /**
     * Returns a list of all inactive cronjobs
     *
     * @param none
     *
     * @return array A string of cronjob names which aren't running
     */
    public function getInactiveCronjobs($requiredCronjobs)
    {
        $dql = "SELECT c.cronjob FROM PartKeepr\CronLoggerBundle\Entity\CronLogger c WHERE c.cronjob = :cronjob";
        $dql .= " AND c.lastRunDate > :date";

        $query = $this->entityManager->createQuery($dql);

        $date = new \DateTime();
        $date->sub(new \DateInterval('P1D'));
        $query->setParameter("date", $date);

        $failedCronjobs = array();

        foreach ($requiredCronjobs as $cronjob) {
            $query->setParameter("cronjob", $cronjob);

            try {
                $query->getSingleResult();
            } catch (\Exception $e) {
                $failedCronjobs[] = $cronjob;
            }

        }

        return $failedCronjobs;
    }
}
