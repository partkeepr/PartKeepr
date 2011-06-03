Ext.define('PartDB2.FootprintGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.FootprintGrid',
	columns: [
	          {header: i18n("Footprint"),  dataIndex: 'footprint', flex: 1}
	          ],
	addButtonText: i18n("Add Footprint"),
    deleteButtonText: i18n("Delete Footprint")
});