<?php
namespace PartKeepr\Service;

interface RestfulService {
	public function get ();
	public function create ();
	public function update ();
	public function destroy ();
}