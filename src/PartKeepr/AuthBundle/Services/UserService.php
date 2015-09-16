<?php
namespace PartKeepr\AuthBundle\Services;


use Doctrine\ORM\EntityManager;
use Doctrine\ORM\NoResultException;
use Doctrine\ORM\QueryBuilder;
use PartKeepr\AuthBundle\Entity\User;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorage;

class UserService
{
    private $tokenStorage;

    /**
     * @var EntityManager
     */
    private $entityManager;

    public function __construct(TokenStorage $tokenStorage, EntityManager $entityManager)
    {
        $this->tokenStorage = $tokenStorage;
        $this->entityManager = $entityManager;
    }

    public function getUser()
    {
        $provider = $this->tokenStorage->getToken()->getAttribute("provider");
        $username = $this->tokenStorage->getToken()->getUsername();

        return $this->getProxyUser($username, $provider);
    }

    public function getProxyUser($username, $provider)
    {
        /**
         * @var QueryBuilder $queryBuilder
         */
        $queryBuilder = $this->entityManager->createQueryBuilder();

        $queryBuilder->select("u")
            ->from("PartKeeprAuthBundle:User", "u")
            ->where("u.provider = :provider")
            ->andWhere("u.username = :username")
            ->setParameter("provider", $provider)
            ->setParameter("username", $username);

        $query = $queryBuilder->getQuery();

        try {
            $user = $query->getSingleResult();

            return $user;
        } catch (NoResultException $e) {
            return $this->createProxyUser($username, $provider);
        }

    }

    private function createProxyUser($username, $provider)
    {
        $user = new User($username, $provider);
        $this->entityManager->persist($user);
        $this->entityManager->flush();

        return $user;
    }
}
