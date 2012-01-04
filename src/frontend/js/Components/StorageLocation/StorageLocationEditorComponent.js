Ext.define('PartKeepr.StorageLocationEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.StorageLocationEditorComponent',
	navigationClass: 'PartKeepr.StorageLocationGrid',
	editorClass: 'PartKeepr.StorageLocationEditor',
	newItemText: i18n("New Storage Location"),
	model: 'PartKeepr.StorageLocation',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("StorageLocation"),
				property: 'name',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});