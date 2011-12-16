Ext.define('PartKeepr.DistributorGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.DistributorGrid',
	columns: [
	          {header: i18n("Distributor"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Distributor"),
	addButtonIcon: 'resources/silkicons/lorry_add.png',
    deleteButtonText: i18n("Delete Distributor"),
    deleteButtonIcon: 'resources/silkicons/lorry_delete.png'
    
});