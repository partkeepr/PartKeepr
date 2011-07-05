Ext.define('PartKeepr.UnitGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.UnitGrid',
	columns: [
	          {header: i18n("Unit"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Symbol"),  dataIndex: 'symbol', width: 60}
	          ],
	addButtonText: i18n("Add Unit"),
	addButtonIcon: 'resources/icons/unit_add.png',
    deleteButtonText: i18n("Delete Unit"),
    deleteButtonIcon: 'resources/icons/unit_delete.png',
    initComponent: function () {
    	this.callParent();
    }
});