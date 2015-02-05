Ext.define('PartKeepr.Printing.PageBasicLayoutGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.Printing.PageBasicLayoutGrid',

	automaticPageSize: true,

	columns: [
	          {header: i18n("Label Layout"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Label Layout"),
	addButtonIcon: 'resources/fugue-icons/icons/wooden-box--plus.png',
    deleteButtonText: i18n("Delete Label Layout"),
    deleteButtonIcon: 'resources/fugue-icons/icons/wooden-box--minus.png'
});