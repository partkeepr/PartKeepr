Ext.define('PartKeepr.UserGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.UserGrid',
	columns: [
	          {header: i18n("User"),  dataIndex: 'username', flex: 1}
	          ],
	addButtonText: i18n("Add User"),
	addButtonIcon: 'resources/silkicons/user_add.png',
    deleteButtonText: i18n("Delete User"),
    deleteButtonIcon: 'resources/silkicons/user_delete.png'
});