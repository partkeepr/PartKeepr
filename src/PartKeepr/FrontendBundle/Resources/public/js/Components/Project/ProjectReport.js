/**
 * Represents the project report view
 */
Ext.define('PartKeepr.ProjectReportView', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.ProjectReportView',

    bodyStyle: 'background:#DBDBDB;padding: 5px',
    border: false,

    defaults: {
        bodyStyle: 'padding:10px'
    },

    layout: 'border',

    initComponent: function ()
    {
        this.createStores();

        this.upperGridEditing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1
        });

        this.reportList = Ext.create("PartKeepr.BaseGrid", {
            selModel: {
                mode: 'MULTI'
            },
            selType: 'checkboxmodel',
            flex: 1,
            columns: [
                {
                    header: i18n("Quantity"), dataIndex: 'quantity',
                    width: 50,
                    editor: {
                        xtype: 'numberfield'
                    }
                }, {
                    header: i18n("Project Name"), dataIndex: 'name',
                    flex: 1
                }, {
                    header: i18n("Description"), dataIndex: 'description',
                    flex: 1
                }
            ],
            store: this.store,
            plugins: [this.upperGridEditing]
        });

        this.editing = Ext.create('Ext.grid.plugin.CellEditing', {
            clicksToEdit: 1,
            listeners: {
                beforeedit: this.onBeforeEdit,
                edit: this.onEdit,
                scope: this
            }
        });

        this.reportResult = Ext.create("PartKeepr.BaseGrid", {
            flex: 1,
            features: [
                {
                    ftype: 'summary'
                }
            ],
            columns: [
                {
                    header: i18n("Quantity"), dataIndex: 'quantity',
                    width: 50
                }, {
                    header: i18n("Part Name"),
                    renderer: function (val, p, rec)
                    {
                        return rec.getPart().get("name");
                    },
                    flex: 1
                }, {
                    header: i18n("Part Description"),
                    renderer: function (val, p, rec)
                    {
                        return rec.getPart().get("description");
                    },
                    flex: 1
                }, {
                    header: i18n("Remarks"),
                    dataIndex: 'remarks',
                    flex: 1
                }, {
                    header: i18n("Projects"),
                    dataIndex: 'projects',
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
                    renderer: function (val, p, rec)
                    {
                        if (rec.getDistributor() !== null) {
                            return rec.getDistributor().get("name");
                        }
                    },
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
                    renderer: PartKeepr.getApplication().formatCurrency,
                    width: 100
                }, {
                    header: i18n("Sum"),
                    dataIndex: 'sum',
                    renderer: PartKeepr.getApplication().formatCurrency,
                    summaryType: 'sum',
                    summaryRenderer: PartKeepr.getApplication().formatCurrency,
                    width: 100
                }, {
                    header: i18n("Amount to Order"), dataIndex: 'missing',
                    width: 100
                }, {
                    header: i18n("Sum (Order)"),
                    dataIndex: 'sum_order',
                    renderer: PartKeepr.getApplication().formatCurrency,
                    summaryType: 'sum',
                    summaryRenderer: PartKeepr.getApplication().formatCurrency,
                    width: 100
                }
            ],
            store: this.projectReportStore,
            plugins: [this.editing],
            bbar: [
                Ext.create("PartKeepr.Exporter.GridExporterButton", {
                    itemId: 'export',
                    genericExporter: false,
                    tooltip: i18n("Export"),
                    iconCls: "fugue-icon application-export",
                    disabled: this.store.isLoading()
                })
            ]
        });

        this.createReportButton = Ext.create('Ext.button.Button', {
            xtype: 'button',
            text: i18n("Create Report"),
            width: 120,
            margins: {
                right: 10
            },
            listeners: {
                click: this.onCreateReportClick,
                scope: this
            }
        });

        this.autoFillButton = Ext.create('Ext.button.Button', {
            text: i18n("Autofill"),
            width: 120,
            margins: {
                right: 20
            },
            listeners: {
                click: this.onAutoFillClick,
                scope: this
            }
        });

        this.removeStockButton = Ext.create('Ext.button.Button', {
            text: i18n("Remove parts from stock"),
            width: 160,
            listeners: {
                click: this.onStockRemovalClick,
                scope: this
            }

        });

        this.items = [
            {
                title: i18n("Choose Projects to create a report for"),
                split: true,
                minHeight: 300,
                height: 300,
                bodyStyle: 'background:#DBDBDB;padding: 10px;',
                layout: {
                    type: 'vbox',
                    align: 'stretch',
                    pack: 'start'
                },
                region: 'north',
                items: [
                    this.reportList,
                    {
                        layout: {
                            type: 'hbox',
                            pack: 'start'
                        },
                        margins: {
                            top: 10
                        },
                        border: false,
                        bodyStyle: 'background:#DBDBDB',
                        items: [
                            this.createReportButton,
                            this.autoFillButton,
                            {xtype: 'tbspacer'},
                            this.removeStockButton
                        ]
                    }
                ]
            }, {
                region: 'center',
                layout: 'fit',
                bodyStyle: 'background:#DBDBDB;padding: 10px;',
                title: i18n("Project Report"),
                items: this.reportResult
            }
        ];


        this.callParent();
    },
    /**
     * Called when the distributor field is about to be edited.
     *
     * Filters the distributor list and show only distributors which are assigned to the particular item.
     * @param e
     */
    onBeforeEdit: function (e, context)
    {
        if (context.field !== "distributor") {
            return;
        }

        var distributors = context.record.getPart().distributors();

        var filterIds = [];
        for (var i = 0; i < distributors.count(); i++) {
            filterIds.push(distributors.getAt(i).getDistributor().getId());
        }

        var filter = Ext.create("Ext.util.Filter", {
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
        if (btn == "yes") {

            var store = this.reportResult.getStore();
            var removals = [];

            for (var i = 0; i < store.count(); i++) {
                var item = store.getAt(i);

                removals.push({
                    part: item.getPart().getId(),
                    amount: item.get("quantity"),
                    comment: item.get("projects")
                });
            }

            PartKeepr.PartBundle.Entity.Part.callPostCollectionAction("massRemoveStock",
                {"removals": Ext.encode(removals)});
        }
    },
    onEdit: function (editor, context)
    {
        if (context.field == "distributor" && context.record.getDistributor() !== null) {
            var partDistributors = context.record.getPart().distributors();

            for (var i = 0; i < partDistributors.count(); i++) {
                if (partDistributors.getAt(i).getDistributor().getId() == context.record.getDistributor().getId()) {
                    context.record.set("price", partDistributors.getAt(i).get("price"));
                    context.record.set("distributor_order_number", partDistributors.getAt(i).get("orderNumber"));
                    context.record.set("sum_order", context.record.get("missing") * context.record.get("price"));
                    context.record.set("sum", context.record.get("quantity") * context.record.get("price"));
                }
            }
        }

        this.reportResult.getView().refresh(true);

    },
    onAutoFillClick: function ()
    {
        var partCount = this.reportResult.store.count();
        var cheapestDistributor, activeDistributor;
        var lowestPrice;
		var firstPositive;
        var activeRecord;

        for (var i = 0; i < partCount; i++) {
            activeRecord = this.reportResult.store.getAt(i);
			firstPositive = true;
			lowestPrice = 0;
			cheapestDistributor = null;

            for (var j = 0; j < activeRecord.getPart().distributors().count(); j++) {
                activeDistributor = activeRecord.getPart().distributors().getAt(j);
				currentPrice = parseFloat(activeDistributor.get("price"));
				
				if (currentPrice != 0) 	{
					if (firstPositive) {
						lowestPrice = currentPrice;
						cheapestDistributor = activeDistributor;
						firstPositive = false;
					}
					else {
						if (currentPrice < lowestPrice) {
							lowestPrice = currentPrice;
							cheapestDistributor = activeDistributor;
						}
					}
				}
            }

            if (cheapestDistributor !== null) {
                activeRecord.setDistributor(cheapestDistributor.getDistributor());
                activeRecord.set("distributor_order_number", cheapestDistributor.get("orderNumber"));
                activeRecord.set("price", cheapestDistributor.get("price"));
                activeRecord.set("sum_order", activeRecord.get("missing") * activeRecord.get("price"));
                activeRecord.set("sum", activeRecord.get("quantity") * activeRecord.get("price"));
            }
        }

        this.reportResult.getView().refresh(true);
    },
    /**
     *
     */
    onCreateReportClick: function ()
    {
        var selection = this.reportList.getSelectionModel().getSelection();

        var projects = [];

        for (var i = 0; i < selection.length; i++) {
            projects.push({project: selection[i].getId(), quantity: selection[i].get("quantity")});
        }

        this.projectReportStore.load({
            params: {
                projects: Ext.encode(projects)
            }
        });
    },
    /**
     * Creates the store used in this view.
     */
    createStores: function ()
    {
        var config = {
            autoLoad: true,
            model: "PartKeepr.ProjectBundle.Entity.ProjectReportList",
            pageSize: 999999999
        };

        this.store = Ext.create('Ext.data.Store', config);

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
});
