<?php
namespace PartKeepr\Printing\Exceptions;

use PartKeepr\Util\SerializableException,
	PartKeepr\PartKeepr;

class RendererNotFoundException extends SerializableException {
	public function __construct ($detailedReason, $requestedClass, $availableClasses) {
		parent::__construct(PartKeepr::i18n("No adequate renderer found: $detailedReason \nRequested: $requestedClass \nAvailable: ".implode(", ",$availableClasses)));
	}
}
?>