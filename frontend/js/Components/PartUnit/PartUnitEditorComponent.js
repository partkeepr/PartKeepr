Ext.define('PartKeepr.PartUnitEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.PartUnitEditorComponent',
	navigationClass: 'PartKeepr.PartUnitGrid',
	editorClass: 'PartKeepr.PartUnitEditor',
	newItemText: i18n("New Part Unit"),
	deleteMessage: i18n("Do you really wish to delete the part unit'%s'?"),
	deleteTitle: i18n("Delete Part Unit"),
	model: 'PartKeepr.PartUnit',
	initComponent: function () {
		this.createStore({
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});