Ext.define('PartKeepr.FootprintEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.FootprintEditorComponent',
    navigationClass: 'PartKeepr.FootprintNavigation',
    editorClass: 'PartKeepr.FootprintEditor',
    newItemText: i18n("New Footprint"),
    model: 'PartKeepr.FootprintBundle.Entity.Footprint',
    initComponent: function () {
        this.createStore({
			sorters: [
                {
                    property: 'category.categoryPath',
                    direction: 'ASC'
                },{
                    property: 'name',
                    direction:'ASC'
                }
        ],
            groupField: 'categoryPath'
		});

        this.callParent();
    },
    statics: {
        iconCls: 'fugue-icon fingerprint',
        title: i18n('Footprints'),
        closable: true,
        menuPath: [{ text: i18n("Edit")}]
    }
});
