Ext.define('PartKeepr.FootprintEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.FootprintEditorComponent',
    navigationClass: 'PartKeepr.FootprintNavigation',
    editorClass: 'PartKeepr.FootprintEditor',
    newItemText: i18n("New Footprint"),
    model: 'PartKeepr.FootprintBundle.Entity.Footprint',
    initComponent: function () {
        this.createStore({
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});

        this.callParent();
    },
    deleteRecord: function (r) {
        var editor = this.findEditor(r.getId());

        if (editor !== null) {
            this.editorTabPanel.remove(editor);
        }

        var call = new PartKeepr.ServiceCall("Footprint", "destroy");
        call.setParameter("id", r.get("id"));
        call.setHandler(Ext.bind(function () {
            var oldRecordIndex = PartKeepr.getApplication().getFootprintStore().find("id", r.get("id"));

            PartKeepr.getApplication().getFootprintStore().removeAt(oldRecordIndex);
            this.navigation.loadCategories();
        }, this));

        call.doCall();
    }
});