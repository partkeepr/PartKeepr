Ext.define('PartKeepr.UnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.UnitEditorComponent',
	gridClass: 'PartKeepr.UnitGrid',
	editorClass: 'PartKeepr.UnitEditor',
	newItemText: i18n("New Unit"),
	deleteMessage: i18n("Do you really wish to delete the unit'%s'?"),
	deleteTitle: i18n("Delete Unit"),
	initComponent: function () {
		this.createStore({
			model: "Unit",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});