Ext.define('PartDB2.ManufacturerEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.ManufacturerEditorComponent',
	gridClass: 'PartDB2.ManufacturerGrid',
	editorClass: 'PartDB2.ManufacturerEditor',
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