Ext.define('PartDB2.StorageLocationEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.StorageLocationEditorComponent',
	gridClass: 'PartDB2.StorageLocationGrid',
	editorClass: 'PartDB2.StorageLocationEditor',
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