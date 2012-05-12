<?php
namespace de\RaumZeitLabor\PartKeepr\UserPreference\Exceptions;

use de\RaumZeitLabor\PartKeepr\User\User,
	de\RaumZeitLabor\PartKeepr\Util\SerializableException,
	de\RaumZeitLabor\PartKeepr\PartKeepr;

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