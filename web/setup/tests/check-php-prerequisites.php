<?php
/**
 * This file does various pre-flight checks in order to make sure the installer can run
 * and do additional tests.
 *
 * The pre-flight check will immediately die if json_encode/json_decode functions don't exist.
 */

/* json_encode/json_decode are the most important function, as we communicate via JSON */
if (!function_exists('json_encode') || !function_exists('json_decode')) {
    echo '{"success":false,"message":"Your PHP installation lacks the JSON functions, which is mandatory for PartKeepr.",';
    echo '"errors":["In order to run PartKeepr, you need to have the PHP JSON module activated. ';
    echo '<a target=\"_blank\" href=\"https://wiki.partkeepr.org/wiki/KB00002:JSON_Functions\">Read more…</a>"]}';
    exit;
}

$aChecks = [];

echo json_encode(['success' => true, 'message' => 'JSON functions present']);
exit;
