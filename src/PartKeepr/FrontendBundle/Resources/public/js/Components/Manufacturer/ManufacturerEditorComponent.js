Ext.define('PartKeepr.ManufacturerEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.ManufacturerEditorComponent',
	navigationClass: 'PartKeepr.ManufacturerGrid',
	editorClass: 'PartKeepr.ManufacturerEditor',
	newItemText: i18n("New Manufacturer"),
	model: 'PartKeepr.Manufacturer',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("Manufacurer"),
	            property: 'name',
	            direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});