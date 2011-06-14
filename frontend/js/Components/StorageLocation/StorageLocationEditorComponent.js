Ext.define('PartKeepr.StorageLocationEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.StorageLocationEditorComponent',
	gridClass: 'PartKeepr.StorageLocationGrid',
	editorClass: 'PartKeepr.StorageLocationEditor',
	newItemText: i18n("New Storage Location"),
	initComponent: function () {
		this.createStore({
			model: "StorageLocation",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});