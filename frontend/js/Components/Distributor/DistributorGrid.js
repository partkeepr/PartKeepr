Ext.define('PartDB2.DistributorGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.DistributorGrid',
	columns: [
	          {header: i18n("Distributor"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Distributor"),
    deleteButtonText: i18n("Delete Distributor")
});