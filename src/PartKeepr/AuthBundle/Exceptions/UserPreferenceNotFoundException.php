<?php

namespace PartKeepr\AuthBundle\Exceptions;

use PartKeepr\AuthBundle\Entity\User;
use PartKeepr\CoreBundle\Exceptions\TranslatableException;

/**
 * Is thrown when the user preference couldn't be found.
 */
class UserPreferenceNotFoundException extends TranslatableException
{
    private $user;
    private $key;

    public function __construct(User $user, $key, $code = 0, \Throwable $previous = null)
    {
        $this->user = $user;
        $this->key = $key;

        parent::__construct($code, $previous);
    }

    public function getMessageKey()
    {
        return sprintf(
            'The requested user preference %s was not found for user %s',
            $this->key,
            $this->user->getUsername()
        );
    }
}
