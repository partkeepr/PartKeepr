Ext.define('PartKeepr.FootprintEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.FootprintEditorComponent',
	navigationClass: 'PartKeepr.FootprintTree',
	editorClass: 'PartKeepr.FootprintEditor',
	newItemText: i18n("New Footprint"),
	model: 'PartKeepr.Footprint',
	initComponent: function () {
		this.createStore({
			proxy: PartKeepr.getRESTProxy("Footprint"),
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
		
	},
	deleteRecord: function (r) {
		var editor = this.findEditor(r.get("footprintId"));
		
		if (editor !== null) {
			this.editorTabPanel.remove(editor);
		}
		
		var call = new PartKeepr.ServiceCall("Footprint", "destroy");
		call.setParameter("id", r.get("footprintId"));
		call.setHandler(Ext.bind(function () {
			var oldRecordIndex = PartKeepr.getApplication().getFootprintStore().find("id", r.get("footprintId"));
			
			PartKeepr.getApplication().getFootprintStore().removeAt(oldRecordIndex);
			this.navigation.loadCategories();
		}, this));
		
		call.doCall();
		
		
	}
});