Ext.define("PartKeepr.Components.Project.ProjectReportResultGrid", {
    extend: "PartKeepr.BaseGrid",

    features: [
        {
            ftype: 'summary'
        }
    ],

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
                width: 50,
                renderers: [{
                    rtype: "projectReportQuantity"
                }]
            }, {
                header: i18n("Part Name"),
                renderers: [{
                    rtype: "projectReportMetaPart"
                }],
                flex: 1
            }, {
                header: i18n("Part Description"),
                dataIndex: "part.description",
                flex: 1
            }, {
                header: i18n("Remarks"),
                dataIndex: 'remarks',
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
                header: i18n("Storage Location"), dataIndex: 'storageLocation_name',
                width: 100
            }, {
                header: i18n("Available"), dataIndex: 'available',
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
                header: i18n("Distributor Order Number"), dataIndex: 'distributor_order_number',
                flex: 1,
                editor: {
                    xtype: 'textfield'
                }
            }, {
                header: i18n("Price per Item"), dataIndex: 'price',
                renderers: [{
                    rtype: 'currency'
                }],
                width: 100
            }, {
                header: i18n("Sum"),
                dataIndex: 'sum',
                renderers: [{
                    rtype: 'currency'
                }],
                summaryType: 'sum',
                summaryRenderer: PartKeepr.getApplication().formatCurrency,
                width: 100
            }, {
                header: i18n("Amount to Order"), dataIndex: 'missing',
                width: 100
            }, {
                header: i18n("Sum (Order)"),
                dataIndex: 'sum_order',
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
    /**
     * Removes all parts in the project view.
     */
    onStockRemovalClick: function ()
    {
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

    }
});
