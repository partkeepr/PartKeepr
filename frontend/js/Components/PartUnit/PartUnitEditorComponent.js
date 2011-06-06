Ext.define('PartDB2.PartUnitEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.PartUnitEditorComponent',
	gridClass: 'PartDB2.PartUnitGrid',
	editorClass: 'PartDB2.PartUnitEditor',
	newItemText: i18n("New Part Unit"),
	deleteMessage: i18n("Do you really wish to delete the part unit'%s'?"),
	deleteTitle: i18n("Delete Part Unit"),
	initComponent: function () {
		this.createStore({
			model: "PartUnit",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});