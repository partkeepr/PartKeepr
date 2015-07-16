Ext.define("PartKeepr.FootprintTree", {
	extend: 'PartKeepr.CategoryEditorTree',
	alias: 'widget.FootprintTree',
	xtype: 'partkeepr.FootprintTree',
	ddGroup: 'FootprintTree',
	folderSort: true,

	categoryModel: "PartKeepr.FootprintBundle.Entity.FootprintCategory",

	/**
     * @cfg {String} text The path to the 'add' icon
     */
	addButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_add.png',
	
	/**
     * @cfg {String} text The path to the 'delete' icon
     */
	deleteButtonIcon: 'bundles/partkeeprfrontend/images/icons/footprint_delete.png'
});