Ext.define('PartDB2.UserEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.UserEditorComponent',
	gridClass: 'PartDB2.UserGrid',
	editorClass: 'PartDB2.UserEditor',
	newItemText: i18n("New User"),
	deleteMessage: i18n("Do you really wish to delete the user '%s'?"),
	deleteTitle: i18n("Delete User"),
	initComponent: function () {
		this.createStore({
			model: "User",
			sorters: [{
	              property: 'username',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});