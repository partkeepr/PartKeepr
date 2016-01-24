Ext.define('PartKeepr.StorageLocationEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.StorageLocationEditor',
    saveText: i18n("Save Storage Location"),

    layout: 'column',
    defaultListenerScope: true,

    initComponent: function ()
    {
        var config = {};

        Ext.Object.merge(config, {
            autoLoad: false,
            model: "PartKeepr.PartBundle.Entity.Part",
            autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
            remoteFilter: true,
            remoteSort: true,
            pageSize: 15
        });

        this.store = Ext.create('Ext.data.Store', config);

        this.bottomToolbar = Ext.create("PartKeepr.PagingToolbar", {
            store: this.store,
            enableOverflow: true,
            dock: 'bottom',
            displayInfo: false
        });

        this.gridPanel = Ext.create("PartKeepr.BaseGrid", {
            store: this.store,
            columnLines: true,
            dockedItems: [this.bottomToolbar],
            columns: [
                {
                    header: i18n("Name"),
                    dataIndex: 'name',
                    flex: 1,
                    minWidth: 200,
                    renderer: Ext.util.Format.htmlEncode
                },
                {
                    header: i18n("Qty"),
                    width: 50,
                    dataIndex: 'stockLevel'
                }
            ]
        });

        var container = Ext.create("Ext.form.FieldContainer", {
            fieldLabel: i18n("Contained Parts"),
            labelWidth: 110,
            layout: 'fit',
            height: 246,
            itemId: 'containedParts',
            items: this.gridPanel
        });


        this.items = [
            {
                columnWidth: 1,
                minWidth: 500,
                layout: 'anchor',
                xtype: 'container',
                margin: '0 5 0 0',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        anchor: '100%',
                        labelWidth: 110,
                        fieldLabel: i18n("Storage Location")
                    },
                    container
                ]
            }, {
                width: 370,
                height: 250,
                xtype: 'fieldcontainer',
                items: {
                    xtype: 'remoteimagefield',
                    itemId: 'image',
                    maxHeight: 256,
                    maxWidth: 256,
                    listeners: {
                        'fileUploaded': "onFileUploaded"
                    }
                },
                labelWidth: 75,
                fieldLabel: i18n("Image")
            }
        ];

        this.on("startEdit", this.onStartEdit, this);
        this.callParent();
    },
    onFileUploaded: function (data)
    {
        var uploadedFile = Ext.create("PartKeepr.UploadedFileBundle.Entity.TempUploadedFile", data);

        if (this.record.getImage() === null) {
            this.record.setImage(data);
        } else {
            this.record.getImage().set("replacement", uploadedFile.getId());
        }

        this.down('#image').setValue(uploadedFile);
    },
    /**
     * Gets called as soon as storage location editing begins.
     */
    onStartEdit: function ()
    {
        if (!this.record.phantom) {
            this.down('#containedParts').setVisible(true);
            var filter = Ext.create("Ext.util.Filter", {
                property: "storageLocation",
                operator: "=",
                value: this.record.getId()
            });

            this.store.addFilter(filter);
            this.store.load();
        } else {
            this.down('#containedParts').setVisible(false);
        }


        this.down('#image').setValue(this.record.getImage());
    }
});
