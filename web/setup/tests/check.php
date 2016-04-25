<?php

require_once dirname(__FILE__).'/../../../app/SymfonyRequirements.php';
require_once dirname(__FILE__).'/../../../app/PartKeeprRequirements.php';

$partKeeprRequirements = new PartKeeprRequirements();
$iniPath = $partKeeprRequirements->getPhpIniConfigPath();

$errors = [];
$warnings = [];
$success = true;

foreach ($partKeeprRequirements->getRequirements() as $req) {
    /**
     * @var Requirement
     */
    if (!$req->isFulfilled()) {
        $success = false;
        $errors[] = '<b>'.$req->getTestMessage().'</b><br/>'.$req->getHelpHtml().'<br/>';
    }
}

foreach ($partKeeprRequirements->getRecommendations() as $recommendation) {
    /**
     * @var Requirement
     */
    if (!$recommendation->isFulfilled()) {
        $warnings[] = '<b>'.$recommendation->getTestMessage().'</b><br/>'.$recommendation->getHelpHtml().'<br/>';
    }
}

if ($success === false) {
    $errors[] = 'The php.ini file used: '.get_cfg_var('cfg_file_path');
    $errors[] = '<a target="_blank" href="https://wiki.partkeepr.org/wiki/KB00004:Symfony2 Requirements">Read more…</a>';
}
echo json_encode(['success' => $success, 'message' => 'Symfony2/PartKeepr Requirements', 'warnings' => $warnings, 'errors' => $errors]);
