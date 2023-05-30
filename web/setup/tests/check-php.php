/**
<?php
echo '*/';
if (version_compare(phpversion(), '7.0.0', '<')) {
    echo '{"success": false, "message": "PHP Version '.phpversion().' is too old, minimum required version is PHP 7.0.",';
    echo '"errors": ["Your PHP Version is too old. The minimum required version is 7.0.0. ';
    echo '<a target=\"_blank\" href=\"https://wiki.partkeepr.org/wiki/KB00003:PHP_Version\">Read more…</a>"]}';
} elseif (version_compare(phpversion(), '7.2', '>=')) {
    echo '{"success": false, "message": "PHP Version '.phpversion().' is not supported.",';
    echo '"errors": ["Your PHP Version is too new. PartKeepr currently only works well with PHP <= 7.1."]}';
} else {
    echo '{"success": true, "message": "PHP Version '.phpversion().' found"}';
}
exit;
?>
*/
{
    "success": false,
    "message": "You don't have PHP installed on your server, or the module is not activated.",
    "errors":
    [
        "In order to run PartKeepr, you need to have the PHP module activated on your web server. <a target=\"_blank\" href=\"https://wiki.partkeepr.org/wiki/KB00001:PHP_Module\">Read more…</a>"
    ]
}
