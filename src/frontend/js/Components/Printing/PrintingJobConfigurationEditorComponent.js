Ext.define('PartKeepr.Printing.PrintingJobConfigurationEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.Printing.PrintingJobConfigurationEditorComponent',
	navigationClass: 'PartKeepr.Printing.PrintingJobConfigurationGrid',
	editorClass: 'PartKeepr.Printing.PrintingJobConfigurationEditor',
	newItemText: i18n("New Label Layout"),
	model: 'PartKeepr.Printing.PrintingJobConfiguration',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("Printing.PrintingJobConfiguration"),
				property: 'name',
				direction:'ASC'
	          }]
		});

		this.callParent();
	}
});