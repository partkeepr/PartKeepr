Ext.define('PartKeepr.UserEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.UserEditorComponent',
	navigationClass: 'PartKeepr.UserGrid',
	editorClass: 'PartKeepr.UserEditor',
	newItemText: i18n("New User"),
	deleteMessage: i18n("Do you really wish to delete the user '%s'?"),
	deleteTitle: i18n("Delete User"),
	
	model: 'PartKeepr.User',
	
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("User"),
				property: 'username',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});