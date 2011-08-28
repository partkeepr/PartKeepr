<?php
include("config.php");
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
        "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>PartKeepr</title>
		
		<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,700italic' rel='stylesheet' type='text/css'>
		
		<!-- Include the ExtJS CSS Theme -->
		<link rel="stylesheet" type="text/css" href="css/partkeepr-theme.css"/>
		
		<link rel="stylesheet" type="text/css" href="js/Ext.ux/statusbar/css/statusbar.css"/>
		
		<link rel="stylesheet" type="text/css" href="css/PartKeepr.css"/>
		
		<link rel="icon" href="favicon.ico"/>
		
		<!-- Include the ExtJS JavaScript Library -->
		<script type="text/javascript" src="extjs/bootstrap.js"></script> 
		
		<?php
		// @todo This is ugly, but how to fix?
			if ($debug) {
		?>
			<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
			<script type="text/javascript" src="js/partkeepr-debug.js"></script>
		<?php
			} else {
		?>
			<script type="text/javascript" src="extjs/ext-all.js"></script>
			<script type="text/javascript" src="js/partkeepr.js"></script>
		<?php
			}
		?>
		<script type="text/javascript" src="js/org.phpjs.lib/php.default.min.js"></script>
		<script type="text/javascript" src="js/webcam.js"></script>
		
	</head>
<body>
<div id="loading"><span class="logo"></span></div>
<?php
// @todo put that somewhere else. This is only a stupid hack.
function return_bytes ($size_str)
{
    switch (substr ($size_str, -1))
    {
        case 'M': case 'm': return (int)$size_str * 1048576;
        case 'K': case 'k': return (int)$size_str * 1024;
        case 'G': case 'g': return (int)$size_str * 1073741824;
        default: return $size_str;
    }
}

$maxPostSize = return_bytes(ini_get("post_max_size"));
$maxFilesize = return_bytes(ini_get("upload_max_filesize"));

$maxUploadSize = ($maxPostSize < $maxFilesize) ? $maxPostSize : $maxFilesize;

$imagick = new Imagick();
?>
<script type="text/javascript">
window.maxUploadSize = <?php echo $maxUploadSize; ?>;
window.availableImageFormats = <?php echo json_encode($imagick->queryFormats()); ?>;

<?php 
if ($autoLogin) {
?>
window.autoLoginUsername = "admin";
window.autoLoginPassword = "admin";
<?php
}
?>
</script>
</body>
</html>