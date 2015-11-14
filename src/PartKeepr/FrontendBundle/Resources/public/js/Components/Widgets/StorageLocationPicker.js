Ext.define("PartKeepr.StorageLocationPicker", {
    extend: "Ext.form.field.Picker",
    alias: 'widget.StorageLocationPicker',

    /**
     * @cfg {Number} typeAheadDelay
     * The length of time in milliseconds to wait until the typeahead function is called
     */
    typeAheadDelay: 250,

    /**
     * @var {Ext.util.DelayedTask} typeAheadTask
     * The internal task for the typeAhead delay
     */
    typeAheadTask: null,

    /**
     * @var {PartKeepr.StorageLocationBundle.Entity.StorageLocation} selectedStorageLocation
     * The selected storage location
     */
    selectedStorageLocation: null,

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

        this.on("change", Ext.bind(this.onFieldChange, this));
        this.on("blur", Ext.bind(this.onBlur, this));

        this.callParent();
    },
    onFieldChange: function (f, newValue) {
        if (this.selectedStorageLocation instanceof PartKeepr.StorageLocationBundle.Entity.StorageLocation) {
            if (this.selectedStorageLocation.get("name") === newValue) {
                return;
            }
        }
        if (!this.typeAheadTask) {
            this.typeAheadTask = new Ext.util.DelayedTask(this.onTypeAhead, this, [newValue]);
        }

        this.typeAheadTask.delay(this.typeAheadDelay, false, false, [newValue]);
    },
    getValue: function () {
        return this.selectedStorageLocation;
    },
    onTypeAhead: function (newValue) {
        var picker = this.getPicker(newValue);
        picker.setSearchValue(newValue);
        this.expand();
    },
    onBlur: function () {
        var picker = this.getPicker();

        if (picker.getGrid().getStore().count() === 1) {
            this.setValue(picker.getGrid().getStore().getAt(0));
        }
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
