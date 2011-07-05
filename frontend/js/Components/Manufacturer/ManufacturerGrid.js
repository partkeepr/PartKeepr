Ext.define('PartKeepr.ManufacturerGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.ManufacturerGrid',
	columns: [
	          {header: i18n("Manufacturer"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Manufacturer"),
	addButtonIcon: 'resources/silkicons/building_add.png',
    deleteButtonText: i18n("Delete Manufacturer"),
    deleteButtonIcon: 'resources/silkicons/building_delete.png'
});