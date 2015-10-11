Ext.define('PartKeepr.ManufacturerEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.ManufacturerEditor',
    saveText: i18n("Save Manufacturer"),
    labelWidth: 150,
    initComponent: function ()
    {
        this.on("startEdit", Ext.bind(this.onEditStart, this));

        this.tpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<div class="dataview-multisort-item iclogo"><img src="{[values["@id"]]}/getImage?maxWidth=100&maxHeight=100"/></div>',
            '</tpl>');

        this.addLogoButton = Ext.create("Ext.button.Button", {
            iconCls: "web-icon add",
            text: i18n("Add Logo"),
            handler: Ext.bind(this.uploadImage, this)
        });

        this.deleteLogoButton = Ext.create("Ext.button.Button", {
            iconCls: "web-icon delete",
            text: i18n("Delete Logo"),
            disabled: true,
            handler: Ext.bind(this.deleteImage, this)
        });

        this.iclogoGrid = Ext.create("Ext.view.View", {
            store: null,
            border: true,
            frame: true,
            style: 'background-color: white',
            emptyText: 'No images to display',
            height: 200,
            fieldLabel: i18n("Logos"),
            componentCls: 'manufacturer-ic-logos',
            itemSelector: 'div.dataview-multisort-item',
            singleSelect: true,
            anchor: '100%',
            tpl: this.tpl,
            listeners: {
                selectionchange: Ext.bind(function (view, selections)
                {
                    if (selections.length > 0) {
                        this.deleteLogoButton.enable();
                    } else {
                        this.deleteLogoButton.disable();
                    }
                }, this)
            }
        });

        this.items = [
            {
                xtype: 'textfield',
                name: 'name',
                fieldLabel: i18n("Manufacturer Name")
            }, {
                xtype: 'textarea',
                name: 'address',
                fieldLabel: i18n("Address")
            }, {
                xtype: 'urltextfield',
                name: 'url',
                fieldLabel: i18n("Website")
            }, {
                xtype: 'textfield',
                name: 'email',
                fieldLabel: i18n("Email")
            }, {
                xtype: 'textfield',
                name: 'phone',
                fieldLabel: i18n("Phone")
            }, {
                xtype: 'textfield',
                name: 'fax',
                fieldLabel: i18n("Fax")
            }, {
                xtype: 'textarea',
                name: 'comment',
                fieldLabel: i18n("Comment")
            }, {
                xtype: 'fieldcontainer',
                fieldLabel: i18n("Manufacturer Logos"),
                items: [
                    {
                        xtype: 'panel',
                        dockedItems: [
                            {
                                xtype: 'toolbar',
                                dock: 'bottom',
                                items: [this.addLogoButton, this.deleteLogoButton]
                            }
                        ],
                        items: this.iclogoGrid
                    }
                ]

            }
        ];


        this.on("itemSaved", this._onItemSaved, this);
        this.callParent();

    },
    _onItemSaved: function (record)
    {
        this.iclogoGrid.bindStore(record.icLogos());
    },
    onFileUploaded: function (response)
    {
        this.iclogoGrid.getStore().add(response);
    },
    uploadImage: function ()
    {
        var j = Ext.create("PartKeepr.FileUploadDialog", {imageUpload: true});
        j.on("fileUploaded", Ext.bind(this.onFileUploaded, this));
        j.show();
    },
    deleteImage: function ()
    {
        this.iclogoGrid.getStore().remove(this.iclogoGrid.getSelectionModel().getLastSelected());
    },
    onEditStart: function ()
    {
        var store = this.record.icLogos();
        this.iclogoGrid.bindStore(store);
    }
});
