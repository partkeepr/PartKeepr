Ext.define('PartKeepr.PartUnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.PartUnitEditorComponent',
	gridClass: 'PartKeepr.PartUnitGrid',
	editorClass: 'PartKeepr.PartUnitEditor',
	newItemText: i18n("New Part Unit"),
	deleteMessage: i18n("Do you really wish to delete the part unit'%s'?"),
	deleteTitle: i18n("Delete Part Unit"),
	initComponent: function () {
		this.createStore({
			model: "PartUnit",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});