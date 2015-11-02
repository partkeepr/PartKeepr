/**
 * This class represents a list of all system information records.
 */
Ext.define('PartKeepr.SystemInformationGrid', {
    extend: 'PartKeepr.BaseGrid',

    /* Define the columns */
    columns: [
        {
            header: 'Name',
            dataIndex: 'name',
            width: 200
        }, {
            header: 'Value',
            dataIndex: 'value',
            renderer: Ext.util.Format.htmlEncode,
            flex: 1
        }, {
            header: 'Category',
            dataIndex: 'category',
            hidden: true
        }
    ],

    /**
     * Initializes the component
     */
    initComponent: function ()
    {

        /* Add grouping */
        var groupingFeature = Ext.create('Ext.grid.feature.Grouping', {
            groupHeaderTpl: '{name}'
        });

        this.features = [groupingFeature];

        /* Create the store using an in-memory proxy */
        this.store = Ext.create("Ext.data.Store", {
            model: 'PartKeepr.SystemInformationRecord',
            sorters: ['category', 'name'],
            groupField: 'category'
        });


        /* Add the refresh button */
        this.refreshButton = Ext.create("Ext.button.Button", {
            handler: function () { this.store.load(); },
            scope: this,
            text: i18n("Refresh")
        });

        this.bottomToolbar = Ext.create("Ext.toolbar.Toolbar", {
            dock: 'bottom',
            ui: 'footer',
            items: [this.refreshButton]
        });

        this.dockedItems = [this.bottomToolbar];

        // Initialize the panel
        this.callParent();

        // Retrieve the system information
       this.store.load();
    },
    statics: {
        iconCls: 'fugue-icon system-monitor',
        title: i18n('System Information'),
        closable: true,
        menuPath: [{text: i18n("View")}]
    }
});
