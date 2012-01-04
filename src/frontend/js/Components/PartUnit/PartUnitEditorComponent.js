Ext.define('PartKeepr.PartUnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.PartUnitEditorComponent',
	navigationClass: 'PartKeepr.PartUnitGrid',
	editorClass: 'PartKeepr.PartUnitEditor',
	newItemText: i18n("New Part Measurement Unit"),
	deleteMessage: i18n("Do you really wish to delete the part measurement unit'%s'?"),
	deleteTitle: i18n("Delete Part Measurement Unit"),
	model: 'PartKeepr.PartUnit',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("PartUnit"),
				property: 'name',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});