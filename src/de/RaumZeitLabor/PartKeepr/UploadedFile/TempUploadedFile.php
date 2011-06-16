<?php
namespace de\RaumZeitLabor\PartKeepr\UploadedFile;
declare(encoding = 'UTF-8');

/**
 * Represents a temporary file. Temporary files are used when
 * a user uploaded a file, but not attached it to an entity.
 *
 * @Entity
 */
class TempUploadedFile extends UploadedFile {
	public function __construct () {
		parent::__construct();
		$this->setType("Temporary");
	}
}