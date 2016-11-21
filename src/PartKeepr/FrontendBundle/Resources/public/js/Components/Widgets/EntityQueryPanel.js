Ext.define("PartKeepr.Widgets.EntityQueryPanel", {
    extend: "Ext.panel.Panel",
    layout: 'border',
    items: [
        {
            title: i18n("Results"),
            xtype: 'grid',
            region: 'center',
            itemId: 'grid',
        }, {
            title: i18n("Available fields"),
            xtype: 'treepanel',
            region: 'east',
            width: 265,
            itemId: 'fieldTree',
            split: true,
            store: {
                folderSort: true,
                sorters: [
                    {
                        property: 'text',
                        direction: 'ASC'
                    }
                ]
            },
            useArrows: true
        }
    ],
    /**
     * @var {Array} Contains the models already in the field tree
     */
    visitedModels: [],

    /**
     * @var {Array} All configured columns
     */
    columns: [],

    /**
     * @var {Ext.data.Store} The store
     */
    store: null,

    initComponent: function ()
    {
        this.callParent(arguments);
        this.visitedModels = [];

        var rootNode = this.down("#fieldTree").getRootNode();
        this.down("#fieldTree").on("itemdblclick", this.onTreeDblClick, this);
        rootNode.set("text", this.model.getName());

        this.treeMaker(rootNode, this.model, "");
        rootNode.expand();

        this.store = Ext.create("Ext.data.Store", {
            model: this.model.getName(),
            autoLoad: true
        });

        this.down("#fieldTree").addDocked({
            xtype: 'toolbar',
            items: [
                {
                    xtype: 'button',
                    iconCls: 'web-icon add',
                    handler: "onAddColumn",
                    scope: this
                },
                {
                    xtype: 'button',
                    iconCls: 'web-icon delete',
                    handler: "onRemoveColumn",
                    scope: this
                }
            ]
        });
        this.down("#grid").addDocked(this.bottomToolbar);

        this.down("#grid").reconfigure(this.store, this.columns);
    },
    /**
     * Returns the parameters for the query string.
     * @return {Object} An object containing all parameters
     */
    getParams: function ()
    {
        var i, originalColumns, columns = [];
        originalColumns = this.down('#grid').getColumns();
        for (i = 0; i < originalColumns.length; i++) {
            columns.push(originalColumns[i].dataIndex);
        }

        return {
            itemsPerPage: 9999999,
            columns: Ext.encode(columns)
        };

    },
    /**
     * Event handler for the add button
     */
    onAddColumn: function ()
    {
        var selModel = this.down("#fieldTree").getSelectionModel();
        if (!selModel.hasSelection()) {
            return;
        }

        var record = this.down("#fieldTree").getSelectionModel().getSelection()[0];
        this.addColumn(record);
    },
    /**
     * Event handler for the remove button
     */
    onRemoveColumn: function ()
    {
        var selModel = this.down("#fieldTree").getSelectionModel();
        if (!selModel.hasSelection()) {
            return;
        }

        var record = this.down("#fieldTree").getSelectionModel().getSelection()[0];
        this.removeColumn(record);
    },
    /**
     * Adds a specific column to the grid. Must be a record and has the "data" property defined.
     *
     * @param {Ext.data.Model} The record to process
     */
    addColumn: function (record)
    {
        var columns;
        if (this.hasColumn(record) || record.get("data") === undefined) {
            return;
        }

        columns = this.down('#grid').getColumns();

        this.syncColumns();

        this.columns.push({
            dataIndex: record.get("data"),
            text: record.get("data"),
            renderer: function (value, metadata, record, rowIndex, colIndex)
            {
                return record.get(this.getColumns()[colIndex].dataIndex);
            },
            scope: this.down('#grid')
        });

        this.down("#grid").reconfigure(this.store, this.columns);
    },
    /**
     * Removes a specific column to the grid. Must be a record and has the "data" property defined.
     *
     * @param {Ext.data.Model} The record to process
     */
    removeColumn: function (record)
    {
        var i;

        if (!this.hasColumn(record) || record.get("data") === undefined) {
            return;
        }

        this.syncColumns();

        for (i = 0; i < this.columns.length; i++) {
            if (this.columns[i].dataIndex === record.get("data")) {
                Ext.Array.removeAt(this.columns, i);
            }
        }
        this.down("#grid").reconfigure(this.store, this.columns);

    },
    /**
     * Syncronizes the internal columns storage with the grid. The reason it is done that way is because we can't
     * operate on the return value of getColumns() directly, as these are instanciated objects which get removed
     * during a reconfigure operation.
     */
    syncColumns: function ()
    {
        var columns, i;
        this.columns = [];

        columns = this.down('#grid').getColumns();

        for (i = 0; i < columns.length; i++) {
            this.columns.push({
                dataIndex: columns[i].dataIndex,
                text: columns[i].text,
                renderer: this.columnRenderer,
                scope: this.down('#grid')
            });
        }
    },
    columnRenderer: function (value, metadata, record, rowIndex, colIndex)
    {
        return record.get(this.getColumns()[colIndex].dataIndex);
    },
    /**
     * Returns if a specific column exists in the grid.Must be a record and has the "data" property defined.
     *
     * @param {Ext.data.Model} The record to process
     * @return {Boolean} true if the column exist, false otherwise
     */
    hasColumn: function (record)
    {
        var i, columns = this.down('#grid').getColumns();

        for (i = 0; i < columns.length; i++) {
            if (columns[i].dataIndex === record.get("data")) {
                return true;
            }
        }

        return false;
    },
    /**
     * Handles the double click on the tree. Adds the item if it doesn't exist, or remove it otherwise
     *
     * @param {Ext.tree.Tree} The tree panel
     * @param {Ext.data.Model} The double clicked record
     */
    onTreeDblClick: function (tree, record)
    {
        if (this.hasColumn(record)) {
            this.removeColumn(record);
        } else {
            this.addColumn(record);
        }
    },
    /**
     * Builds the field tree recursively. Handles infinite recursions (e.g. in trees).
     *
     * @param {Ext.data.NodeInterface} The current node
     * @param {Ext.data.Model} The model
     * @param {String} The prefix. Omit if first called
     */
    treeMaker: function (node, model, prefix)
    {
        var fields = model.getFields();
        this.visitedModels.push(model.getName());
        for (var i = 0; i < fields.length; i++) {

            if (fields[i]["$reference"] === undefined) {
                node.appendChild({
                    text: fields[i].name,
                    leaf: true,
                    data: prefix + fields[i].name
                });
            } else {
                for (var j = 0; j < this.visitedModels.length; j++) {
                    if (this.visitedModels[j] === fields[i].reference.cls.getName()) {
                        return;
                    }
                }

                var childNode = node.appendChild({
                    text: fields[i].name,
                    leaf: false
                });

                this.treeMaker(childNode, fields[i].reference.cls, prefix + fields[i].name + ".");
            }
        }
    }
});
