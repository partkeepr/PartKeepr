Ext.define("PartKeepr.Components.Project.ProjectReportList", {
    extend: "PartKeepr.BaseGrid",

    defaultListenerScope: true,
    columns: [
        {
            header: i18n("Qty"), dataIndex: 'quantity',
            width: 50,
            editor: {
                xtype: 'numberfield',
                minValue: 0
            }
        }, {
            header: i18n("Project Name"), dataIndex: 'name',
            flex: 1
        }, {
            header: i18n("Description"), dataIndex: 'description',
            flex: 1
        }
    ],

    bbar: [{
        xtype: 'button',
        text: i18n("Create Report"),
        iconCls: "fugue-icon notification-counter",
        itemId: 'createReportButton'
    }],

    cellEditingPlugin: null,

    initComponent: function ()
    {
        this.createStore();

        this.cellEditingPlugin = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        this.plugins = [this.cellEditingPlugin];

        this.callParent(arguments);
    },
    createStore: function ()
    {
        var config = {
            autoLoad: true,
            model: "PartKeepr.ProjectBundle.Entity.ProjectReportList",
            pageSize: 999999999
        };

        this.store = Ext.create('Ext.data.Store', config);
    },
    getProjectsToReport: function ()
    {
        var i, record;
        var projects = [];

        for (i = 0; i < this.getStore().getCount(); i++)
        {
            record = this.getStore().getAt(i);

            if (record.get("quantity") > 0)
            {
                projects.push(
                    {
                        project: record.getId(),
                        quantity: record.get("quantity")
                    }
                );
            }
        }

        return projects;
    }
});