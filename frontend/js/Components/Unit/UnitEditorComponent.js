Ext.define('PartDB2.UnitEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.UnitEditorComponent',
	gridClass: 'PartDB2.UnitGrid',
	editorClass: 'PartDB2.UnitEditor',
	newItemText: i18n("New Unit"),
	deleteMessage: i18n("Do you really wish to delete the unit'%s'?"),
	deleteTitle: i18n("Delete Unit"),
	initComponent: function () {
		this.createStore({
			model: "Unit",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});