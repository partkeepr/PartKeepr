Ext.define('PartKeepr.ManufacturerEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.ManufacturerEditorComponent',
	gridClass: 'PartKeepr.ManufacturerGrid',
	editorClass: 'PartKeepr.ManufacturerEditor',
	newItemText: i18n("New Manufacturer"),
	initComponent: function () {
		this.createStore({
			model: "Manufacturer",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});