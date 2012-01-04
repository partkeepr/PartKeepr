Ext.define('PartKeepr.UnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.UnitEditorComponent',
	navigationClass: 'PartKeepr.UnitGrid',
	editorClass: 'PartKeepr.UnitEditor',
	newItemText: i18n("New Unit"),
	deleteMessage: i18n("Do you really wish to delete the unit'%s'?"),
	deleteTitle: i18n("Delete Unit"),
	model: 'PartKeepr.Unit',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("Unit"),
				property: 'name',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});