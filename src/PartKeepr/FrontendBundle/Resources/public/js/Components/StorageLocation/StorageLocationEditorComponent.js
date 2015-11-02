Ext.define('PartKeepr.StorageLocationEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.StorageLocationEditorComponent',
	navigationClass: 'PartKeepr.StorageLocationNavigation',
	editorClass: 'PartKeepr.StorageLocationEditor',
	newItemText: i18n("New Storage Location"),
	model: 'PartKeepr.StorageLocationBundle.Entity.StorageLocation',
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
        iconCls: 'fugue-icon wooden-box',
        title: i18n('Storage Locations'),
        closable: true,
        menuPath: [{text: i18n("Edit")}]
    }
});
