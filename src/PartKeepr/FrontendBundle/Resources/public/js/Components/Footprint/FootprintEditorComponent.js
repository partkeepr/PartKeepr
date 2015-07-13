Ext.define('PartKeepr.FootprintEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.FootprintEditorComponent',
    navigationClass: 'PartKeepr.FootprintTree',
    editorClass: 'PartKeepr.FootprintEditor',
    newItemText: i18n("New Footprint"),
    model: 'PartKeepr.FootprintBundle.Entity.FootprintCategory',
    storeType: "Ext.data.TreeStore",
    initComponent: function () {
        this.createStore(
            {
            remoteSort: false,
            folderSort: true,
            rootVisible: true,
            autoLoad: true,
            sorters: [{
                property: 'name',
                direction: 'ASC'
            }],
            root: {
                "@id": "/~felicitus/PartKeepr/web/app_dev.php/api/footprint_categories/1"
            },
            model: "PartKeepr.FootprintBundle.Entity.FootprintCategory",
            proxy: {
                type: "Hydra",
                appendId: false,
                reader: {
                    type: 'json'
                }
            }
        });

        this.callParent();
    },
    deleteRecord: function (r) {
        var editor = this.findEditor(r.get("id"));

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