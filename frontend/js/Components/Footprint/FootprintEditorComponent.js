Ext.define('PartDB2.FootprintEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.FootprintEditorComponent',
	gridClass: 'PartDB2.FootprintGrid',
	editorClass: 'PartDB2.FootprintEditor',
	newItemText: i18n("New Footprint"),
	initComponent: function () {
		this.createStore({
			model: "Footprint",
			sorters: [{
	              property: 'footprint',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});