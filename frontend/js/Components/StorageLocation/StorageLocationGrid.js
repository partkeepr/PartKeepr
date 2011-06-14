Ext.define('PartKeepr.StorageLocationGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.StorageLocationGrid',
	columns: [
	          {header: i18n("Storage Location"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Storage Location"),
    deleteButtonText: i18n("Delete Storage Location")
});