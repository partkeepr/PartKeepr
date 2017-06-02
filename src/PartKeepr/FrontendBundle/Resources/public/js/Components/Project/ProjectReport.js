/**
 * Represents the project report view
 */
Ext.define('PartKeepr.ProjectReportView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectReportView',

    bodyStyle: 'background:#DBDBDB;padding: 5px',
    border: false,

    layout: 'border',

    reportedProjects: [],

    viewModel: {
        data: {
            store: null,
            parentRecord: null
        }
    },

    initComponent: function ()
    {
        this.createStores();

        this.reportList = Ext.create("PartKeepr.Components.Project.ProjectReportList", {
            region: 'west',
            collapsible: true,
            title: i18n("Choose Projects to create a report for"),
            split: true,
            minWidth: 300,
            width: 500
        });

        this.reportResult = Ext.create("PartKeepr.Components.Project.ProjectReportResultGrid", {
            store: this.projectReportStore
        });


        this.items = [
            this.reportList, {
                region: 'center',
                layout: 'fit',
                title: i18n("Project Report"),
                items: this.reportResult
            }
        ];


        this.callParent();

        this.down("#createReportButton").on("click", this.onCreateReportClick, this);
    },
    /**
     *
     */
    onCreateReportClick: function ()
    {
        this.reportResult.setProjectsToReport(this.reportList.getProjectsToReport());

        this.projectReportStore.load({
            params: {
                projects: Ext.encode(this.reportList.getProjectsToReport())
            }
        });
    },
    /**
     * Creates the store used in this view.
     */
    createStores: function ()
    {
        this.projectReportStore = Ext.create('Ext.data.Store', {
            model: "PartKeepr.ProjectBundle.Entity.ProjectReport",
            pageSize: -1
        });
    },
    statics: {
        iconCls: 'fugue-icon drill',
        title: i18n('Project Reports'),
        closable: true,
        menuPath: [{text: i18n("View")}]
    }
})
;
