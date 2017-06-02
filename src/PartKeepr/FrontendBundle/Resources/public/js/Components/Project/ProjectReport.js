
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

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                beforeedit: this.onBeforeEdit,
                edit: this.onEdit,
                scope: this
            }
        });

        this.subGrid = {
            xtype: 'gridfoo',
            bind: {
                store: '{record.subParts}',
                parentRecord: '{record}'
            }
        };

        var gridPresetButton = Ext.create("PartKeepr.Components.Grid.GridPresetButton");

        this.autoFillButton = Ext.create('Ext.button.Button', {
            text: i18n("Autofill Distributors"),
            iconCls: 'fugue-icon notification-counter-02',
            listeners: {
                click: this.onAutoFillClick,
                scope: this
            }
        });

        this.removeStockButton = Ext.create('Ext.button.Button', {
            text: i18n("Remove parts from stock"),
            iconCls: 'fugue-icon notification-counter-03',
            listeners: {
                click: this.onStockRemovalClick,
                scope: this
            }

        });

        this.rowExpander = new PartKeepr.Components.ProjectReport.MetaPartRowExpander({
           widget: this.subGrid
        });

        this.reportResult = Ext.create("PartKeepr.Components.Project.ProjectReportResultGrid", {
                flex: 1,

                plugins: [
                    this.rowExpander, this.editing
                ],

                store: this.projectReportStore,
                bbar: [
                    this.autoFillButton,
                    this.removeStockButton,
                    {xtype: 'tbspacer'},
                    Ext.create("PartKeepr.Exporter.GridExporterButton", {
                        itemId: 'export',
                        genericExporter: false,
                        tooltip: i18n("Export"),
                        iconCls: "fugue-icon application-export",
                        disabled: this.reportList.getStore().isLoading()
                    }),
                    gridPresetButton
                ]
            }
        );


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

        gridPresetButton.setGrid(this.reportResult);
    },

    /**
     * Called when the distributor field is about to be edited.
     *
     * Filters the distributor list and show only distributors which are assigned to the particular item.
     * @param e
     * @param context
     */
    onBeforeEdit: function (e, context)
    {
        if (context.field !== "distributor")
        {
            return;
        }

        var distributors = context.record.getPart().distributors();

        var filterIds = [];
        for (var i = 0; i < distributors.count(); i++)
        {
            if (distributors.getAt(i).getDistributor().get("enabledForReports") === false) {
                continue;
            }

            if (distributors.getAt(i).get("ignoreForReports")) {
                continue;
            }

            filterIds.push(distributors.getAt(i).getDistributor().getId());
        }

        var filter = Ext.create("PartKeepr.util.Filter", {
            property: "@id",
            operator: 'in',
            value: filterIds
        });

        context.column.getEditor().store.clearFilter();
        context.column.getEditor().store.addFilter(filter);
    },
    /**
     * Removes all parts in the project view.
     */
    onStockRemovalClick: function ()
    {
        Ext.Msg.confirm(i18n("Remove parts from stock"),
            i18n("Do you really want to remove the parts in the project report from the stock?"),
            this.removeStocks, this);
    },
    removeStocks: function (btn)
    {
        if (btn === "yes")
        {

            var store = this.reportResult.getStore();
            var removals = [];

            for (var i = 0; i < store.count(); i++)
            {
                var item = store.getAt(i);


                removals.push({
                    part: item.getPart().getId(),
                    amount: item.get("quantity"),
                    comment: item.get("projectNames"),
                    lotNumber: item.get("lotNumber"),
                    projects: item.get("projects")
                });
            }

            PartKeepr.PartBundle.Entity.Part.callPostCollectionAction("massRemoveStock",
                {"removals": Ext.encode(removals), "projects": Ext.encode(this.reportedProjects)});
        }
    },
    onEdit: function (editor, context)
    {
        if (context.field === "distributor" && context.record.getDistributor() !== null)
        {
            var partDistributors = context.record.getPart().distributors();

            for (var i = 0; i < partDistributors.count(); i++)
            {
                if (partDistributors.getAt(i).getDistributor().getId() === context.record.getDistributor().getId())
                {
                    context.record.set("price", partDistributors.getAt(i).get("price"));
                    context.record.set("distributor_order_number", partDistributors.getAt(i).get("orderNumber"));
                    context.record.set("sum_order", context.record.get("missing") * context.record.get("price"));
                    context.record.set("sum", context.record.get("quantity") * context.record.get("price"));
                }
            }
        }

    },
    onAutoFillClick: function ()
    {
        var partCount = this.reportResult.store.count();
        var activeRecord;

        this.projectPartStack = [];


        for (var i = 0; i < partCount; i++)
        {

            activeRecord = this.reportResult.store.getAt(i);

            this.projectPartStack.push(activeRecord);
        }

        this.processCheapestDistributorStack(this.projectPartStack.length);

        if (this.waitMessage instanceof Ext.window.MessageBox)
        {
            this.waitMessage.hide();
        }
    },
    processCheapestDistributorStack: function (totalCount)
    {
        if (this.projectPartStack.length === 0)
        {
            if (this.waitMessage instanceof Ext.window.MessageBox)
            {
                this.waitMessage.hide();
            }
            return;
        }
        this.displayWaitWindow(
            i18n("Processing distributors…"),
            (totalCount - this.projectPartStack.length) + " / " + totalCount,
            1 / totalCount * (totalCount - this.projectPartStack.length));
        this.processCheapestDistributorForProjectPart(this.projectPartStack.shift());

        Ext.defer(this.processCheapestDistributorStack, 1, this, [totalCount]);
    },
    processCheapestDistributorForProjectPart: function (projectPart)
    {
        var cheapestDistributor = this.getCheapestDistributor(projectPart.getPart());

        if (cheapestDistributor !== null)
        {
            projectPart.setDistributor(cheapestDistributor.getDistributor());
            projectPart.set("distributor_order_number", cheapestDistributor.get("orderNumber"));
            projectPart.set("price", cheapestDistributor.get("price"));
            projectPart.set("sum_order", projectPart.get("missing") * projectPart.get("price"));
            projectPart.set("sum", projectPart.get("quantity") * projectPart.get("price"));
        }
    },
    getCheapestDistributor: function (part)
    {
        var cheapestDistributor = null;
        var currentPrice;
        var activeDistributor;
        var lowestPrice;
        var firstPositive;

        firstPositive = true;
        lowestPrice = 0;

        for (var j = 0; j < part.distributors().count(); j++)
        {
            activeDistributor = part.distributors().getAt(j);

            if (activeDistributor.getDistributor().get("enabledForReports") === false) {
                continue;
            }

            if (activeDistributor.get("ignoreForReports") === true) {
                continue;
            }

            currentPrice = parseFloat(activeDistributor.get("price"));

            if (currentPrice !== 0)
            {
                if (firstPositive)
                {
                    lowestPrice = currentPrice;
                    cheapestDistributor = activeDistributor;
                    firstPositive = false;
                }
                else
                {
                    if (currentPrice < lowestPrice)
                    {
                        lowestPrice = currentPrice;
                        cheapestDistributor = activeDistributor;
                    }
                }
            }
        }

        return cheapestDistributor;
    },
    displayWaitWindow: function (text, description, value)
    {
        this.waitMessage = Ext.MessageBox.show({
            msg: text,
            title: i18n("Applying distributors…"),
            progressText: description,
            progress: true,
            width: 300
        });

        this.waitMessage.updateProgress(value);

    },
    /**
     *
     */
    onCreateReportClick: function ()
    {
        this.reportedProjects = this.reportList.getProjectsToReport();

        this.projectReportStore.load({
            params: {
                projects: Ext.encode(this.reportedProjects)
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
