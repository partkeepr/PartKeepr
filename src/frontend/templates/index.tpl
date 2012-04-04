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
		{% if debug %}
			<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
			<script type="text/javascript" src="js/partkeepr-debug.js"></script>
			<script type="text/javascript" src="js/Ext.ux/Ext.ux.formatter-all-debug.js"></script>
		{% else %}
			<script type="text/javascript" src="extjs/ext-all.js"></script>
			<script type="text/javascript" src="js/partkeepr.js"></script>
			<script type="text/javascript" src="js/Ext.ux/Ext.ux.formatter-all.js"></script>
		{% endif %}
		
		<script type="text/javascript" src="js/org.phpjs.lib/php.default.min.js"></script>
		<script type="text/javascript" src="js/webcam.js"></script>
	</head>
<body>
<div id="loading"><span class="logo"></span></div>
<script type="text/javascript">
window.parameters = {{ parameters|json_encode|raw }};
</script>
</body>
</html>