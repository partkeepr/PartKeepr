<?php
namespace PartKeepr\AuthBundle\Response;

use PartKeepr\UserPreference\UserPreference;
use JMS\Serializer\Annotation as JMS;

/**
 * Class LoginResponse
 *
 * Defines the login response for use with the REST API.
 *
 * @package PartKeepr\AuthBundle\Response
 */
class LoginResponse {

    /**
     * Holds the session id
     * @JMS\Type("string")
     */
    public $sessionId;

    /**
     * Holds the username
     * @JMS\Type("string")
     */
    public $username;

    /**
     * Defines if the current user is an administrator
     * @JMS\Type("boolean")
     */
    public $isAdmin;

    /**
     * @JMS\Type("array<PartKeepr\UserPreference\UserPreference>");
     * @var UserPreference[] The user preferences
     */
    public $userPreferences;

}