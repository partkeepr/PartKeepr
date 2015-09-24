/**
 * A part picker with an attached grid.
 */
Ext.define("PartKeepr.RemotePartComboBox", {
    extend: "Ext.form.field.Picker",
    alias: 'widget.RemotePartComboBox',
    requires: ["Ext.grid.Panel"],
    selectedValue: null,
    editable: false,

    /**
     * Initializes the component.
     */
    initComponent: function ()
    {
        /**
         * Create the store with the default sorter "name ASC"
         */
        this.createStore({
            model: 'PartKeepr.PartBundle.Entity.Part',
            groupField: 'categoryPath',
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });

        this.callParent();
        this.createPicker();

        // Automatically expand field when focused
        this.on("focus", function ()
        {
            this.onTriggerClick();
        }, this);
    },
    // Creates a store. To be called from child's initComponent
    createStore: function (config)
    {
        Ext.Object.merge(config, {
            autoLoad: true,
            autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
            remoteFilter: true,
            remoteSort: true,
            pageSize: 15
        });

        this.store = Ext.create('Ext.data.Store', config);

        // Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
        this.store.on('write', function (store, operation)
        {
            var success = operation.wasSuccessful();
            if (success) {
                Ext.each(operation.records, function (record)
                {
                    if (record.dirty) {
                        record.commit();
                    }
                });
            }
        });
    },
    createPicker: function ()
    {
        this.partsGrid = Ext.create("PartKeepr.PartsGrid", {
            enableTopToolbar: true,
            enableEditing: false,
            store: this.store,
            region: 'center'
        });

        this.filter = Ext.create("PartKeepr.PartFilterPanel", {
            region: 'south',
            floatable: false,
            titleCollapse: true,
            height: 225,
            autoScroll: true,
            store: this.store,
            title: i18n("Part Filter"),
            split: true,
            collapsed: true,
            collapsible: true,
            listeners: {
                beforeCollapse: function ()
                {
                    this.partsGrid.focus();
                },
                scope: this
            }
        });

        this.picker = Ext.create("Ext.panel.Panel", {
            shrinkWrapDock: 2,
            layout: 'border',
            floating: true,
            focusOnToFront: false,
            manageHeight: false,
            height: 300,
            minWidth: 350,
            shadow: false,
            ownerCmp: this,
            items: [this.partsGrid, this.filter]
        });

        this.picker.on({
            show: function ()
            {
                this.partsGrid.searchField.setValue(this.getDisplayValue());
                this.partsGrid.searchField.startSearch();
            },
            scope: this
        });

        this.partsGrid.on("select",
            function (selModel, record)
            {
                this.setSelectedValue(record);
                this.setDisplayValue(record.get("name"));
                this.collapse();
            }, this);

        return this.picker;
    },
    getDisplayValue: function ()
    {
        return this.displayValue;
    },
    setSelectedValue: function (data)
    {
        this.selectedValue = data;
    },
    getValue: function ()
    {
        return this.selectedValue;
    },
    setDisplayValue: function (value)
    {
        this.setRawValue(value);
        this.displayValue = value;
    },
    setValue: function (data)
    {
        this.selectedValue = data;

        if (data instanceof Ext.data.Model) {
            this.setDisplayValue(data.get("name"));
        } else {
            this.setDisplayValue("");
        }

    },
    _selectRecords: function (r)
    {
        this.picker.getView().select(r);
        this.picker.getView().ensureVisible(r);
        this.picker.getView().scrollIntoView(r);
    },
    getErrors: function (value)
    {
        if (this.getValue() === null) {
            return [i18n("You need to select a part")];
        }

        return [];
    }
});
