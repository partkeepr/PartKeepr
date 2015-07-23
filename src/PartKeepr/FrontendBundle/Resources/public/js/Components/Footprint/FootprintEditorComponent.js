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
    }
});