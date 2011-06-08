<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
        "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
		<title>PartDB2</title>
		
		<link rel="icon" href="favicon.ico"/>
		
		<!-- Include the ExtJS JavaScript Library -->
		<script type="text/javascript" src="extjs/bootstrap.js"></script> 
		<script type="text/javascript" src="extjs/ext-all-debug.js"></script>
		
		<script type="text/javascript" src="js/Ext.ux/statusbar/StatusBar.js"></script>
		<script type="text/javascript" src="js/Ext.ux/SearchField.js"></script>
		
		<!-- Include the ExtJS CSS Theme -->
		<link rel="stylesheet" type="text/css" href="extjs/resources/css/ext-all.css"/>
		
		<link rel="stylesheet" type="text/css" href="js/Ext.ux/statusbar/css/statusbar.css"/>
		
		<link rel="stylesheet" type="text/css" href="css/PartDB2.css"/>

		<script type="text/javascript" src="js/bugfixes.js"></script>
		<script type="text/javascript" src="js/Util/i18n.js"></script>		
		
		<script type="text/javascript" src="js/org.phpjs.lib/php.default.min.js"></script>
		
		<script type="text/javascript" src="js/Dialogs/ExceptionWindow.js"></script>
		<script type="text/javascript" src="js/Dialogs/FileUploadDialog.js"></script>
		
		<script type="text/javascript" src="js/Ext.ux/ClearableComboBox.js"></script>
		<script type="text/javascript" src="js/Ext.ux/TabCloseMenu.js"></script>
		
		<script type="text/javascript" src="js/Components/Widgets/CategoryComboBox.js"></script>
		<script type="text/javascript" src="js/Components/Widgets/StorageLocationComboBox.js"></script>
		<script type="text/javascript" src="js/Components/Widgets/FootprintComboBox.js"></script>
		<script type="text/javascript" src="js/Components/Widgets/ManufacturerComboBox.js"></script>
		<script type="text/javascript" src="js/Components/Widgets/DistributorComboBox.js"></script>
		<script type="text/javascript" src="js/Components/Widgets/PartUnitComboBox.js"></script>
		
		<script type="text/javascript" src="js/Util/ServiceCall.js"></script>
		
		<script type="text/javascript" src="js/org.jerrymouse.util.locale/locale.js"></script>
		<script type="text/javascript" src="js/org.jerrymouse.util.locale/locales/en_US.js"></script>
		<script type="text/javascript" src="js/org.jerrymouse.util.locale/locales/de_DE.js"></script>
		
		<script type="text/javascript" src="js/PartDB2.js"></script>
		
		<script type="text/javascript" src="js/Models/Footprint.js"></script>
		<script type="text/javascript" src="js/Models/StorageLocation.js"></script>
		<script type="text/javascript" src="js/Models/Distributor.js"></script>
		<script type="text/javascript" src="js/Models/Manufacturer.js"></script>
		<script type="text/javascript" src="js/Models/ManufacturerICLogo.js"></script>
		<script type="text/javascript" src="js/Models/User.js"></script>
		<script type="text/javascript" src="js/Models/Category.js"></script>
		<script type="text/javascript" src="js/Models/Part.js"></script>
		<script type="text/javascript" src="js/Models/PartUnit.js"></script>
		<script type="text/javascript" src="js/Models/PartDistributor.js"></script>
		<script type="text/javascript" src="js/Models/StockEntry.js"></script>
		<script type="text/javascript" src="js/Models/PartManufacturer.js"></script>
		
		<script type="text/javascript" src="js/Models/Message.js"></script>
		
		<script type="text/javascript" src="js/Dialogs/Auth/LoginDialog.js"></script>
		
		<script type="text/javascript" src="js/Components/Statusbar.js"></script>
		<script type="text/javascript" src="js/Components/MenuBar.js"></script>
		<script type="text/javascript" src="js/Components/ConnectionButton.js"></script>
		<script type="text/javascript" src="js/Components/TimeDisplay.js"></script>
		<script type="text/javascript" src="js/Components/MessageLog.js"></script>
		
		<script type="text/javascript" src="js/Components/Editor/EditorGrid.js"></script>
		<script type="text/javascript" src="js/Components/Editor/EditorComponent.js"></script>
		<script type="text/javascript" src="js/Components/Editor/Editor.js"></script>
		
		<script type="text/javascript" src="js/Components/CategoryStore.js"></script>
		<script type="text/javascript" src="js/Components/CategoryTree.js"></script>
		
		<script type="text/javascript" src="js/Components/Footprint/FootprintGrid.js"></script>
		<script type="text/javascript" src="js/Components/Footprint/FootprintEditor.js"></script>
		<script type="text/javascript" src="js/Components/Footprint/FootprintEditorComponent.js"></script>
		
		<script type="text/javascript" src="js/Components/StorageLocation/StorageLocationGrid.js"></script>
		<script type="text/javascript" src="js/Components/StorageLocation/StorageLocationEditor.js"></script>
		<script type="text/javascript" src="js/Components/StorageLocation/StorageLocationEditorComponent.js"></script>
		
		<script type="text/javascript" src="js/Components/Manufacturer/ManufacturerGrid.js"></script>
		<script type="text/javascript" src="js/Components/Manufacturer/ManufacturerEditor.js"></script>
		<script type="text/javascript" src="js/Components/Manufacturer/ManufacturerEditorComponent.js"></script>
		
		<script type="text/javascript" src="js/Components/Distributor/DistributorGrid.js"></script>
		<script type="text/javascript" src="js/Components/Distributor/DistributorEditor.js"></script>
		<script type="text/javascript" src="js/Components/Distributor/DistributorEditorComponent.js"></script>
		
		<script type="text/javascript" src="js/Components/CategoryEditor/CategoryEditorForm.js"></script>
		<script type="text/javascript" src="js/Components/CategoryEditor/CategoryEditorWindow.js"></script>
		<script type="text/javascript" src="js/Components/CategoryEditor/CategoryEditorTree.js"></script>
		
		<script type="text/javascript" src="js/Components/User/UserEditor.js"></script>
		<script type="text/javascript" src="js/Components/User/UserEditorComponent.js"></script>
		<script type="text/javascript" src="js/Components/User/UserGrid.js"></script>
		
		<script type="text/javascript" src="js/Components/PartUnit/PartUnitEditor.js"></script>
		<script type="text/javascript" src="js/Components/PartUnit/PartUnitEditorComponent.js"></script>
		<script type="text/javascript" src="js/Components/PartUnit/PartUnitGrid.js"></script>
		
		<script type="text/javascript" src="js/Components/Statistics/CurrentStatisticsDialog.js"></script>
		
		<script type="text/javascript" src="js/Components/Part/PartsManager.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartsGrid.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartDistributorGrid.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartManufacturerGrid.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartEditorWindow.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartEditor.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartDisplay.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartStockWindow.js"></script>
		<script type="text/javascript" src="js/Components/Part/PartStockHistory.js"></script>
		
		</head>
<body>

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

PartDB2.setMaxUploadSize(<?php echo $maxUploadSize; ?>);
PartDB2.setAvailableImageFormats(<?php echo json_encode($imagick->queryFormats()); ?>);

</script>
</body>
</html>