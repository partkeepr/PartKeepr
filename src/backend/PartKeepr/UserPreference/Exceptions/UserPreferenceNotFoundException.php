<?php
namespace PartKeepr\UserPreference\Exceptions;

use PartKeepr\User\User,
	PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

/**
 * Is thrown when the user has given wrong credentials.
 */
class UserPreferenceNotFoundException extends SerializableException {
	public function __construct (User $user, $preferenceKey) {
		$message = sprintf(	PartKeepr::i18n("User preference %s not found for user %s (%s)"),
							$preferenceKey,
							$user->getUsername(),
							$user->getId());
		
		parent::__construct($message);
	}
}