Ext.define('PartKeepr.Printing.PageBasicLayoutEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.Printing.PageBasicLayoutEditorComponent',
	navigationClass: 'PartKeepr.Printing.PageBasicLayoutGrid',
	editorClass: 'PartKeepr.Printing.PageBasicLayoutEditor',
	newItemText: i18n("New Label Layout"),
	model: 'PartKeepr.Printing.PageBasicLayout',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("Printing.PageBasicLayout"),
				property: 'name',
				direction:'ASC'
	          }]
		});

		this.callParent();
	}
});