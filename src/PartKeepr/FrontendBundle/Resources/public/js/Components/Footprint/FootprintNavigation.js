Ext.define("PartKeepr.FootprintNavigation", {
    extend: 'Ext.panel.Panel',

    layout: 'border',

    /**
     * @var {Ext.data.Store}
     */
    store: null,
    items: [
        {
            xtype: 'partkeepr.FootprintTree',
            region: 'center',
            rootVisible: false
        }, {
            xtype: 'partkeepr.FootprintGrid',
            resizable: true,
            split: true,
            region: 'south',
            height: "50%",
            titleProperty: "name",
            viewConfig: {
                plugins: {
                    ddGroup: 'FootprintCategoryTree',
                    ptype: 'gridviewdragdrop',
                    enableDrop: false
                }
            },
            enableDragDrop: true
        }
    ],

    initComponent: function ()
    {
        this.callParent(arguments);

        this.down("partkeepr\\.FootprintTree").on("itemclick", this.onCategoryClick, this);
        this.down("partkeepr\\.FootprintGrid").setStore(this.store);
        this.down("partkeepr\\.FootprintGrid").on("itemAdd", this.onAddFootprint, this);
        this.down("partkeepr\\.FootprintGrid").on("itemDelete", function (id)
            {
                this.fireEvent("itemDelete", id);
            }, this
        );
        this.down("partkeepr\\.FootprintGrid").on("itemEdit", function (id)
            {
                this.fireEvent("itemEdit", id);
            }, this
        );

    },
    /**
     * Applies the category filter to the store when a category is selected
     *
     * @param {Ext.tree.View} tree The tree view
     * @param {Ext.data.Model} record the selected record
     */
    onCategoryClick: function (tree, record)
    {
        var filter = Ext.create("Ext.util.Filter", {
            property: 'category',
            operator: 'IN',
            value: this.getChildrenIds(record)
        });

        this.store.addFilter(filter);
    },
    /**
     * Returns the ID for this node and all child nodes
     *
     * @param {Ext.data.Model} The node
     * @return Array
     */
    getChildrenIds: function (node)
    {
        var childNodes = [node.getId()];

        if (node.hasChildNodes()) {
            for (var i = 0; i < node.childNodes.length; i++) {
                childNodes = childNodes.concat(this.getChildrenIds(node.childNodes[i]));
            }
        }

        return childNodes;
    },
    /**
     * Called when a footprint is about to be added. This prepares the to-be-edited record with the proper category id.
     */
    onAddFootprint: function ()
    {
        var selection = this.down("partkeepr\\.FootprintTree").getSelection();

        var category;
        if (selection.length === 0) {
            category = this.down("partkeepr\\.FootprintTree").getRootNode().firstChild.getId();
        } else {
            var item = selection.shift();
            category = item.getId();
        }

        this.fireEvent("itemAdd", {
            category: category
        });
    },
    /**
     * Triggers a reload of the store when an edited record affects the store
     */
    syncChanges: function ()
    {
        this.down("partkeepr\\.FootprintGrid").getStore().load();
    },
    /**
     * Returns the selection model of the footprint grid
     * @return {Ext.selection.Model} The selection model
     */
    getSelectionModel: function ()
    {
        "use strict";
        return this.down("partkeepr\\.FootprintGrid").getSelectionModel();
    }


});
