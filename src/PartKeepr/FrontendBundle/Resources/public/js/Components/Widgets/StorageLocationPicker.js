Ext.define("PartKeepr.StorageLocationPicker", {
    extend: "Ext.form.field.Picker",
    alias: 'widget.StorageLocationPicker',


    initComponent: function ()
    {
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.StorageLocationBundle.Entity.StorageLocation',
            autoLoad: true,
            remoteFilter: true,
            remoteSort: true,
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

    setValue: function (value) {
        this.selectedStorageLocation = value;
        PartKeepr.StorageLocationPicker.superclass.setValue.call(this, value.get("name"));
    },
     /**
     * Creates and returns the tree panel to be used as this field's picker.
     */
    createPicker: function() {
        var me = this,
            picker = new PartKeepr.StorageLocationNavigation({
                store: me.store,
                floating: true,
                minHeight: me.minPickerHeight,
                maxHeight: me.maxPickerHeight,
                manageHeight: false,
                shadow: false,
                height: 250,
                verticalLayout: true,
                dragAndDrop: false,
                categoryEditActions: false,
                itemEditActions: false,
                editItemAsObject: true,
                listeners: {
                    itemEdit: function (v) {
                        this.setValue(v);
                        this.collapse();
                    },
                    scope: this
                }
            });

        return picker;
    }
});
