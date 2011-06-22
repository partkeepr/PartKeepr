<?php
namespace de\RaumZeitLabor\PartKeepr\Setup;

declare(encoding = 'UTF-8');

class Setup {

	public function run () {
		$this->testPrequisites();
	}
	
	public function testPrequisites () {
		$this->testAPC();
	}
	public function testAPC () {
		if (!extension_loaded("apc")) {
			throw new \Exception(PartKeepr::i18n("The extension 'apc' is not loaded. Make sure that it is installed (see http://php.net/manual/en/apc.installation.php) and that it is enabled (set apc.enabled=1 in your php.ini)."));
		}	
	}
}