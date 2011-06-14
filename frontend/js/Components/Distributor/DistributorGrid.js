Ext.define('PartKeepr.DistributorGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.DistributorGrid',
	columns: [
	          {header: i18n("Distributor"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Distributor"),
    deleteButtonText: i18n("Delete Distributor")
});