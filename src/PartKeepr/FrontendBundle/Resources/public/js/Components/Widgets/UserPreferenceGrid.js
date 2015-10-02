Ext.define('PartKeepr.UserPreferenceGrid', {
    extend: 'PartKeepr.BaseGrid',

    columnLines: true,

    columns: [
        {
            header: i18n("Key"),
            dataIndex: 'preferenceKey',
            flex: 0.3,
            minWidth: 200,
            renderer: Ext.util.Format.htmlEncode
        }, {
            header: i18n("Value"),
            dataIndex: 'preferenceValue',
            flex: 0.7,
            minWidth: 200,
            renderer: Ext.util.Format.htmlEncode
        }
    ],
    userId: null,

    initComponent: function ()
    {
        this.deleteButton = Ext.create("Ext.button.Button", {
            text: i18n('Delete'),
            disabled: true,
            itemId: 'delete',
            scope: this,
            iconCls: 'web-icon delete',
            handler: this.onDeleteClick
        });

        this.dockedItems = [
            {
                xtype: 'toolbar',
                items: [
                    this.deleteButton
                ]
            }
        ];
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.AuthBundle.Entity.UserPreference',
            remoteFilter: true,
            pageSize: 999999999
        });

        this.callParent();

        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },
    onDeleteClick: function ()
    {
        var selection = this.getView().getSelectionModel().getSelection()[0];

        if (selection) {
            selection.getProxy().callCollectionAction(null, "DELETE", {
                "preferenceKey": selection.get("preferenceKey")
            }, Ext.bind(this.onPreferenceDeleted, this));
        }
    },
    onPreferenceDeleted: function ()
    {
        this.store.load();
    },
    onSelectChange: function (selModel, selections)
    {
        this.deleteButton.setDisabled(selections.length === 0);
    }
});
