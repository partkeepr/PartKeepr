<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
        "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <title>PartKeepr</title>


    <link href="{% if https %}https{% else %}http{% endif %}://fonts.googleapis.com/css?family=Ubuntu:400,700italic" rel="stylesheet" type="text/css">

    <!-- Include the ExtJS CSS Theme -->
    <link rel="stylesheet" type="text/css" href="css/partkeepr-theme.css"/>

    <link rel="stylesheet" type="text/css" href="js/Ext.ux/statusbar/css/statusbar.css"/>

    <link rel="stylesheet" type="text/css" href="css/PartKeepr.css"/>

    <link rel="icon" href="favicon.ico"/>
    </head>
    <body>
        <h1>{{ title }}</h1>
        <p>{{ error }}</p>
    </body>
</html>