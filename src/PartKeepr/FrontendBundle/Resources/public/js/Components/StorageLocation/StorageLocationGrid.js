Ext.define('PartKeepr.StorageLocationGrid', {
    extend: 'PartKeepr.EditorGrid',
    xtype: 'partkeepr.StorageLocationGrid',

    features: [
        {
            ftype: 'grouping',
            groupHeaderTpl: '{name} ({children.length})',
            enableNoGroups: true
        }
    ],

    columns: [
        {header: i18n("Storage Location"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Storage Location"),
    addButtonIconCls: 'fugue-icon wooden-box--plus',
    deleteButtonText: i18n("Delete Storage Location"),
    deleteButtonIconCls: 'fugue-icon wooden-box--minus',
    initComponent: function ()
    {
        this.callParent();

        if (this.enableEditing) {
            // Adds a button which shows the multi-create window
            this.multiCreateButton = Ext.create("Ext.button.Button", {
                iconCls: 'partkeepr-icon storagelocation_multiadd',
                tooltip: i18n("Multi-create storage locations"),
                handler: this.onMultiCreateClick,
                scope: this
            });

            this.topToolbar.insert(2, {xtype: 'tbseparator'});
            this.topToolbar.insert(3, this.multiCreateButton);
        }
    },
    /**
     * Creates a new storage location multi-create window.
     */
    onMultiCreateClick: function ()
    {
        this.fireEvent("storageLocationMultiAdd");
    }
});
