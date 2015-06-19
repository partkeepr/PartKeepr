<?php
namespace PartKeepr\AuthBundle\Response;

use PartKeepr\UserPreference\UserPreference;

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
     */
    public $sessionId;

    /**
     * Holds the username
     */
    public $username;

    /**
     * Defines if the current user is an administrator
     */
    public $isAdmin;

    /**
     * @var UserPreference[] The user preferences
     */
    public $userPreferences;

}