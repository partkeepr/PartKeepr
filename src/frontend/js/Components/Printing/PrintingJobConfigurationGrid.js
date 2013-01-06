Ext.define('PartKeepr.Printing.PrintingJobConfigurationGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.Printing.PrintingJobConfigurationGrid',

	automaticPageSize: true,

	columns: [
	          {header: i18n("Printing Configuration"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Configuration"),
	addButtonIcon: 'resources/fugue-icons/icons/wooden-box--plus.png',
    deleteButtonText: i18n("Delete Configuration"),
    deleteButtonIcon: 'resources/fugue-icons/icons/wooden-box--minus.png'
});