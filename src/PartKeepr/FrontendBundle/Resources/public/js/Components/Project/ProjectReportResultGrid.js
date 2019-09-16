Ext.define("PartKeepr.Components.Project.ProjectReportResultGrid", {
    extend: "PartKeepr.BaseGrid",

    features: [
        {
            ftype: 'summary'
        }
    ],

    viewConfig: {
        markDirty: false
    },

    initComponent: function ()
    {

        this.subGrid = {
            xtype: 'gridfoo',
            bind: {
                store: '{record.subParts}',
                parentRecord: '{record}'
            }
        };

        this.columns = [
            {
                header: i18n("Qty"), dataIndex: 'quantity',
                width: 100,
                renderers: [{
                    rtype: "projectReportQuantity",
                    rendererConfig: {
                        quantityField: "quantity"
                    }
                }]
            }, {
                header: i18n("Part Name"),
                renderers: [{
                    rtype: "projectReportMetaPart"
                }],
                flex: 2
            }, {
                header: i18n("Part Description"),
                dataIndex: "part.description",
                flex: 2
            }, {
                header: i18n("Remarks"),
                dataIndex: 'remarks',
                renderers: [{
                    rtype: "projectReportRemarks"
                }],
                flex: 1
            }, {
                header: i18n("Production Remarks"),
                dataIndex: 'productionRemarks',
                flex: 1
            }, {
                header: i18n("Projects"),
                dataIndex: 'projectNames',
                flex: 1
            }, {
                header: i18n("Storage Location"), dataIndex: 'part.storageLocation.name',
                width: 100
            }, {
                header: i18n("Available"),
                dataIndex: "part.stockLevel",
                renderers: [{
                    rtype: "projectReportMetaPartAvailability"
                }],
                width: 75
            }, {
                header: i18n("Distributor"),
                dataIndex: 'distributor',
                renderers: [{
                    rtype: 'objectField',
                    rendererConfig: {
                        displayField: 'distributor.name'
                    }
                }],
                flex: 1,
                editor: {
                    xtype: 'DistributorComboBox',
                    returnObject: true,
                    triggerAction: 'query',
                    ignoreQuery: true,
                    forceSelection: true,
                    editable: false
                }
            }, {
                header: i18n("Distributor Order Number"), dataIndex: 'distributorOrderNumber',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                header: i18n("Item Price"), dataIndex: 'part.averagePrice',
                renderers: [{
                    rtype: 'currency'
                }],
                width: 100
            }, {
                header: i18n("Sum"),
                dataIndex: 'itemSum',
                renderers: [{
                    rtype: 'currency'
                }],
                summaryType: 'sum',
                summaryRenderer: PartKeepr.getApplication().formatCurrency,
                width: 100
            }, {
                header: i18n("Order Amount"), dataIndex: 'missing',
                renderers: [{
                    rtype: "projectReportQuantity",
                    rendererConfig: {
                        quantityField: "missing"
                    }
                }],
                width: 100
            }, {
                header: i18n("Sum (Order)"),
                dataIndex: 'orderSum',
                renderers: [{
                    rtype: 'currency'
                }],
                summaryType: 'sum',
                summaryRenderer: PartKeepr.getApplication().formatCurrency,
                width: 100
            }
        ];

        this.nextMetaPart = Ext.create("Ext.button.Button", {
            text: i18n("Next Meta-Part"),
            iconCls: 'partkeepr-icon bricks_down',
            listeners: {
                click: this.jumpToNextMetaPart,
                scope: this
            }
        });

        this.previousMetaPart = Ext.create("Ext.button.Button", {
            text: i18n("Previous Meta-Part"),
            iconCls: 'partkeepr-icon bricks_up',
            listeners: {
                click: this.jumpToPreviousMetaPart,
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

        this.saveReportButton = Ext.create('Ext.button.Button', {
            text: i18n("Save Project Report"),
            iconCls: 'fugue-icon notification-counter-04',
            listeners: {
                click: this.onSaveReportClick,
                scope: this
            }
        });

        this.autoFillButton = Ext.create('Ext.button.Button', {
            text: i18n("Auto-Fill Distributors"),
            iconCls: 'fugue-icon notification-counter-02',
            listeners: {
                click: this.onAutoFillClick,
                scope: this
            }
        });

        this.rowExpander = new PartKeepr.Components.ProjectReport.MetaPartRowExpander({
            widget: this.subGrid
        });

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                beforeedit: this.onBeforeEdit,
                edit: this.onEdit,
                scope: this
            }
        });

        this.plugins = [
            this.rowExpander, this.editing
        ];

        this.bbar = [
            this.autoFillButton,
            this.removeStockButton,
            this.saveReportButton,
            {xtype: 'tbseparator'},
            this.nextMetaPart,
            this.previousMetaPart,
            {xtype: 'tbseparator'},
            Ext.create("PartKeepr.Exporter.GridExporterButton", {
                itemId: 'export',
                genericExporter: false,
                tooltip: i18n("Export"),
                iconCls: "fugue-icon application-export"
            }),
            Ext.create("PartKeepr.Components.Grid.GridPresetButton", {
                grid: this
            })

        ];

        this.callParent(arguments);

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
            if (distributors.getAt(i).getDistributor().get("enabledForReports") === false)
            {
                continue;
            }

            if (distributors.getAt(i).get("ignoreForReports"))
            {
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
    onSaveReportClick: function ()
    {
        Ext.Msg.prompt(
            i18n("Project Report Name"),
            i18n("Please enter the project report name:"),
            this.doSaveReport,
            this,
            false,
            this.projectReport.get("name")
        );
    },
    doSaveReport: function (button, value)
    {
        if (button === "ok")
        {
            this.projectReport.set("name", value);
            this.projectReportManager.doSaveProjectReport();
        }
    },
    /**
     * Removes all parts in the project view.
     */
    onStockRemovalClick: function ()
    {
        if (this.hasMetaParts())
        {
            Ext.Msg.alert(i18n("Unassigned Meta-Parts"),
                i18n("You have unassigned meta-parts. In order to remove parts from stock, you need to assign the meta-parts first."));
            return;
        }

        Ext.Msg.confirm(i18n("Remove parts from stock"),
            i18n("Do you really want to remove the parts in the project report from the stock?"),
            this.removeStocks, this);
    },
    jumpToPreviousMetaPart: function ()
    {
        var i;

        for (i = this.getSelectedMetaPartStartIndex() - 1; i >= 0; i--)
        {
            if (this.selectMetaPart(i))
            {
                break;
            }
        }
    },
    jumpToNextMetaPart: function ()
    {
        var i;

        for (i = this.getSelectedMetaPartStartIndex() + 1; i < this.getStore().getCount(); i++)
        {
            if (this.selectMetaPart(i))
            {
                break;
            }
        }
    },
    selectMetaPart: function (index)
    {
        var record = this.getStore().getAt(index);

        if (record.get("metaPart"))
        {
            this.ensureVisible(record);
            this.getSelectionModel().select(record);
            return true;
        }

        return false;
    },
    getSelectedMetaPartStartIndex: function ()
    {
        var selection = this.getSelection();

        if (selection.length === 1)
        {
            return this.getStore().indexOf(selection[0]);
        } else
        {
            return 0;
        }
    },

    removeStocks: function (btn)
    {
        if (btn === "yes")
        {

            var store = this.getStore();
            var removals = [];

            for (var i = 0; i < store.count(); i++)
            {
                var item = store.getAt(i);

                removals.push({
                    part: item.getPart().getId(),
                    amount: item.get("quantity"),
                    comment: item.getReport().reportProjects().getFieldValues("project.name").join(", "),
                    lotNumber: item.projectParts().getFieldValues("lotNumber").join(", "),
                    projects: [] 
                });
            }

            PartKeepr.PartBundle.Entity.Part.callPostCollectionAction("massRemoveStock",
                {
                    "removals": Ext.encode(removals),
                    "projects": Ext.encode(this.getProjectsToReport())
                },
                function (options, success)
                {
                    if (success)
                    {
                        Ext.Msg.alert(
                            i18n("Stock Removal Complete"),
                            i18n("Removed stock and created a new project run.")
                        );
                    }
                }
            );
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
                    context.record.set("itemPrice", partDistributors.getAt(i).get("price"));
                    context.record.set("distributorOrderNumber", partDistributors.getAt(i).get("orderNumber"));
                    context.record.set("orderSum", context.record.get("missing") * context.record.get("itemPrice"));
                    context.record.set("itemSum", context.record.get("quantity") * context.record.get("itemPrice"));
                }
            }
        }

    },
    onAutoFillClick: function ()
    {
        var partCount = this.getStore().getCount();
        var activeRecord;

        this.projectPartStack = [];


        for (var i = 0; i < partCount; i++)
        {

            activeRecord = this.getStore().getAt(i);

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
            projectPart.set("distributorOrderNumber", cheapestDistributor.get("orderNumber"));
            projectPart.set("itemPrice", cheapestDistributor.get("price"));
            projectPart.set("orderSum", projectPart.get("missing") * projectPart.get("itemPrice"));
            projectPart.set("itemSum", projectPart.get("quantity") * projectPart.get("itemPrice"));
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

            if (activeDistributor.getDistributor().get("enabledForReports") === false)
            {
                continue;
            }

            if (activeDistributor.get("ignoreForReports") === true)
            {
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
    hasMetaParts: function ()
    {
        var i, record;
        for (i = 0; i < this.getStore().getCount(); i++)
        {
            record = this.getStore().getAt(i);
            if (record.get("metaPart"))
            {
                return true;
            }
        }

        return false;
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
    setProjectsToReport: function (projects)
    {
        this.reportedProjects = projects;
    },
    getProjectsToReport: function ()
    {
        return this.reportedProjects;
    }
});
