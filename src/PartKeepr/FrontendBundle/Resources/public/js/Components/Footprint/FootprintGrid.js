Ext.define('PartKeepr.FootprintGrid', {
	extend: 'PartKeepr.EditorGrid',
	xtype: 'partkeepr.FootprintGrid',
	columns: [
	          {header: i18n("Footprint"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Footprint"),
    deleteButtonText: i18n("Delete Footprint"),
    automaticPageSize: true
});