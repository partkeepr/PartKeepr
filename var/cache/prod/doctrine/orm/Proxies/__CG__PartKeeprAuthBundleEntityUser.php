<?php

namespace Proxies\__CG__\PartKeepr\AuthBundle\Entity;

/**
 * DO NOT EDIT THIS FILE - IT WAS CREATED BY DOCTRINE'S PROXY GENERATOR
 */
class User extends \PartKeepr\AuthBundle\Entity\User implements \Doctrine\ORM\Proxy\Proxy
{
    /**
     * @var \Closure the callback responsible for loading properties in the proxy object. This callback is called with
     *      three parameters, being respectively the proxy object to be initialized, the method that triggered the
     *      initialization process and an array of ordered parameters that were passed to that method.
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setInitializer
     */
    public $__initializer__;

    /**
     * @var \Closure the callback responsible of loading properties that need to be copied in the cloned object
     *
     * @see \Doctrine\Common\Persistence\Proxy::__setCloner
     */
    public $__cloner__;

    /**
     * @var boolean flag indicating if this object was already initialized
     *
     * @see \Doctrine\Common\Persistence\Proxy::__isInitialized
     */
    public $__isInitialized__ = false;

    /**
     * @var array properties to be lazy loaded, with keys being the property
     *            names and values being their default values
     *
     * @see \Doctrine\Common\Persistence\Proxy::__getLazyProperties
     */
    public static $lazyPropertiesDefaults = [];



    /**
     * @param \Closure $initializer
     * @param \Closure $cloner
     */
    public function __construct($initializer = null, $cloner = null)
    {

        $this->__initializer__ = $initializer;
        $this->__cloner__      = $cloner;
    }







    /**
     * 
     * @return array
     */
    public function __sleep()
    {
        if ($this->__isInitialized__) {
            return ['__isInitialized__', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'username', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'password', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'newPassword', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'email', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'admin', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'legacy', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'lastSeen', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'provider', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'tipHistories', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'initialUserPreferences', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'active', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'protected'];
        }

        return ['__isInitialized__', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'username', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'password', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'newPassword', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'email', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'admin', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'legacy', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'lastSeen', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'provider', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'tipHistories', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'initialUserPreferences', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'active', '' . "\0" . 'PartKeepr\\AuthBundle\\Entity\\User' . "\0" . 'protected'];
    }

    /**
     * 
     */
    public function __wakeup()
    {
        if ( ! $this->__isInitialized__) {
            $this->__initializer__ = function (User $proxy) {
                $proxy->__setInitializer(null);
                $proxy->__setCloner(null);

                $existingProperties = get_object_vars($proxy);

                foreach ($proxy->__getLazyProperties() as $property => $defaultValue) {
                    if ( ! array_key_exists($property, $existingProperties)) {
                        $proxy->$property = $defaultValue;
                    }
                }
            };

        }
    }

    /**
     * 
     */
    public function __clone()
    {
        $this->__cloner__ && $this->__cloner__->__invoke($this, '__clone', []);
    }

    /**
     * Forces initialization of the proxy
     */
    public function __load()
    {
        $this->__initializer__ && $this->__initializer__->__invoke($this, '__load', []);
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __isInitialized()
    {
        return $this->__isInitialized__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitialized($initialized)
    {
        $this->__isInitialized__ = $initialized;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setInitializer(\Closure $initializer = null)
    {
        $this->__initializer__ = $initializer;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __getInitializer()
    {
        return $this->__initializer__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     */
    public function __setCloner(\Closure $cloner = null)
    {
        $this->__cloner__ = $cloner;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific cloning logic
     */
    public function __getCloner()
    {
        return $this->__cloner__;
    }

    /**
     * {@inheritDoc}
     * @internal generated method: use only when explicitly handling proxy specific loading logic
     * @static
     */
    public function __getLazyProperties()
    {
        return self::$lazyPropertiesDefaults;
    }

    
    /**
     * {@inheritDoc}
     */
    public function setAdmin($bAdmin)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setAdmin', [$bAdmin]);

        return parent::setAdmin($bAdmin);
    }

    /**
     * {@inheritDoc}
     */
    public function isProtected()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isProtected', []);

        return parent::isProtected();
    }

    /**
     * {@inheritDoc}
     */
    public function setProtected($protected)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setProtected', [$protected]);

        return parent::setProtected($protected);
    }

    /**
     * {@inheritDoc}
     */
    public function isActive()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isActive', []);

        return parent::isActive();
    }

    /**
     * {@inheritDoc}
     */
    public function setActive($active)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setActive', [$active]);

        return parent::setActive($active);
    }

    /**
     * {@inheritDoc}
     */
    public function getInitialUserPreferences()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getInitialUserPreferences', []);

        return parent::getInitialUserPreferences();
    }

    /**
     * {@inheritDoc}
     */
    public function setInitialUserPreferences($initialUserPreferences)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setInitialUserPreferences', [$initialUserPreferences]);

        return parent::setInitialUserPreferences($initialUserPreferences);
    }

    /**
     * {@inheritDoc}
     */
    public function getTipHistories()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getTipHistories', []);

        return parent::getTipHistories();
    }

    /**
     * {@inheritDoc}
     */
    public function setTipHistories($tipHistories)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setTipHistories', [$tipHistories]);

        return parent::setTipHistories($tipHistories);
    }

    /**
     * {@inheritDoc}
     */
    public function getEmail()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getEmail', []);

        return parent::getEmail();
    }

    /**
     * {@inheritDoc}
     */
    public function setEmail($email)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setEmail', [$email]);

        return parent::setEmail($email);
    }

    /**
     * {@inheritDoc}
     */
    public function getProvider()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getProvider', []);

        return parent::getProvider();
    }

    /**
     * {@inheritDoc}
     */
    public function setProvider(\PartKeepr\AuthBundle\Entity\UserProvider $provider)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setProvider', [$provider]);

        return parent::setProvider($provider);
    }

    /**
     * {@inheritDoc}
     */
    public function setRawUsername($username)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setRawUsername', [$username]);

        return parent::setRawUsername($username);
    }

    /**
     * {@inheritDoc}
     */
    public function isAdmin()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isAdmin', []);

        return parent::isAdmin();
    }

    /**
     * {@inheritDoc}
     */
    public function getPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getPassword', []);

        return parent::getPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setPassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setPassword', [$password]);

        return parent::setPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function getNewPassword()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getNewPassword', []);

        return parent::getNewPassword();
    }

    /**
     * {@inheritDoc}
     */
    public function setNewPassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setNewPassword', [$password]);

        return parent::setNewPassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function comparePassword($password)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'comparePassword', [$password]);

        return parent::comparePassword($password);
    }

    /**
     * {@inheritDoc}
     */
    public function compareHashedPassword($hashedPassword)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'compareHashedPassword', [$hashedPassword]);

        return parent::compareHashedPassword($hashedPassword);
    }

    /**
     * {@inheritDoc}
     */
    public function updateSeen()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'updateSeen', []);

        return parent::updateSeen();
    }

    /**
     * {@inheritDoc}
     */
    public function isLegacy()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isLegacy', []);

        return parent::isLegacy();
    }

    /**
     * {@inheritDoc}
     */
    public function setLegacy($legacy = true)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setLegacy', [$legacy]);

        return parent::setLegacy($legacy);
    }

    /**
     * {@inheritDoc}
     */
    public function getLastSeen()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getLastSeen', []);

        return parent::getLastSeen();
    }

    /**
     * {@inheritDoc}
     */
    public function getRoles()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getRoles', []);

        return parent::getRoles();
    }

    /**
     * {@inheritDoc}
     */
    public function getSalt()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getSalt', []);

        return parent::getSalt();
    }

    /**
     * {@inheritDoc}
     */
    public function eraseCredentials()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'eraseCredentials', []);

        return parent::eraseCredentials();
    }

    /**
     * {@inheritDoc}
     */
    public function isEqualTo(\Symfony\Component\Security\Core\User\UserInterface $user)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'isEqualTo', [$user]);

        return parent::isEqualTo($user);
    }

    /**
     * {@inheritDoc}
     */
    public function getUsername()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getUsername', []);

        return parent::getUsername();
    }

    /**
     * {@inheritDoc}
     */
    public function setUsername($username)
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, 'setUsername', [$username]);

        return parent::setUsername($username);
    }

    /**
     * {@inheritDoc}
     */
    public function getId()
    {
        if ($this->__isInitialized__ === false) {
            return (int)  parent::getId();
        }


        $this->__initializer__ && $this->__initializer__->__invoke($this, 'getId', []);

        return parent::getId();
    }

    /**
     * {@inheritDoc}
     */
    public function __toString()
    {

        $this->__initializer__ && $this->__initializer__->__invoke($this, '__toString', []);

        return parent::__toString();
    }

}
