Ext.define('PartKeepr.FootprintEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.FootprintEditorComponent',
	gridClass: 'PartKeepr.FootprintGrid',
	editorClass: 'PartKeepr.FootprintEditor',
	newItemText: i18n("New Footprint"),
	initComponent: function () {
		this.createStore({
			model: "Footprint",
			sorters: [{
	              property: 'footprint',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});