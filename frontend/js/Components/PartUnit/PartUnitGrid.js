Ext.define('PartDB2.PartUnitGrid', {
	extend: 'PartDB2.EditorGrid',
	alias: 'widget.PartUnitGrid',
	columns: [
	          {header: i18n("Part Unit"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Part Unit"),
    deleteButtonText: i18n("Delete Part Unit")
});