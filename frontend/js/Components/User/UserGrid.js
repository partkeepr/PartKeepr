Ext.define('PartDB2.UserGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.UserGrid',
	columns: [
	          {header: i18n("User"),  dataIndex: 'username', flex: 1}
	          ],
	addButtonText: i18n("Add User"),
    deleteButtonText: i18n("Delete User")
});