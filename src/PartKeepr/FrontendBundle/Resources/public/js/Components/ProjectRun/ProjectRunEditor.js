/**
 * Represents the project editor view
 */
Ext.define('PartKeepr.ProjectRunEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.ProjectRunEditor',

    defaults: {
        anchor: '100%',
        labelWidth: 110
    },
    enableButtons: false,
    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'start'
    },

    /**
     * Initializes the component
     */
    initComponent: function ()
    {
        /**
         * Due to an ExtJS issue, we need to delay the event
         * for a bit.
         *
         * @todo Fix this in a cleaner way
         */
        this.on("startEdit", this.onEditStart, this, {
            delay: 200
        });

        var config = {};

        // Build the initial (empty) store for the project parts
        Ext.Object.merge(config, {
            autoLoad: false,
            model: "PartKeepr.ProjectBundle.Entity.ProjectRunPart",
            autoSync: false, // Do not change. If true, new (empty) records would be immediately committed to the database.
            remoteFilter: false,
            remoteSort: false
        });

        this.store = Ext.create('Ext.data.Store', config);

        this.partGrid = Ext.create("Ext.grid.Panel", {
            columns: [
                {
                    header: i18n("Part Name"),
                    renderer: function (r, v, rec)
                    {
                        if (rec.getPart() !== null) {
                            return rec.getPart().get("name");
                        }
                        return "";
                    }
                }, {
                    header: i18n("Qty"),
                    dataIndex: 'quantity'
                }, {
                    header: i18n("Lot Number"),
                    dataIndex: 'lotNumber'
                }

            ],
            store: this.store
        });

        var container = Ext.create("Ext.form.FieldContainer", {
            fieldLabel: i18n("Project Parts"),
            labelWidth: 110,
            layout: 'fit',
            flex: 1,
            items: this.partGrid
        });

        this.items = [
            {
                xtype: 'displayfield',
                itemId: 'projectName',
                height: 20,
                fieldLabel: i18n("Project Name")
            }, {
                xtype: 'datefield',
                name: 'runDateTime',
                fieldLabel: i18n("Run Date/Time"),
                readOnly: true
            },
            container
        ];
        this.callParent();

    },
    /**
     * Bind the store as soon as the view was rendered.
     *
     * @todo This is a hack, because invocation of this method is delayed.
     */
    onEditStart: function ()
    {
        var store = this.record.parts();
        this.partGrid.bindStore(store);

        this.down("#projectName").setValue(this.record.get("project.name"));
    }
});
