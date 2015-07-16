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
        }, {
            xtype: 'partkeepr.FootprintGrid',
            resizable: true,
            region: 'south',
            height: "50%"
        }
    ],

    initComponent: function () {
        this.callParent(arguments);

        this.treeStore = Ext.create("Ext.data.TreeStore",
                    {
                remoteSort: false,
                folderSort: true,
                rootVisible: true,
                autoLoad: true,
                sorters: [{
                    property: 'name',
                    direction: 'ASC'
                }],
                root: {
                    "@id": "/~felicitus/PartKeepr/web/app_dev.php/api/footprint_categories/1"
                },
                model: "PartKeepr.FootprintBundle.Entity.FootprintCategory",
                proxy: {
                    type: "Hydra",
                    appendId: false,
                    reader: {
                        type: 'json'
                    }

            }});

        this.down("partkeepr\\.FootprintTree").setStore(this.treeStore);
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
    onCategoryClick: function (tree, record) {
        var filter = Ext.create("Ext.util.Filter", {
            property: 'category',
            operator: '=',
            value: record.getId()
        });

        this.store.addFilter(filter);
    },
    /**
	 * Called when a footprint is about to be added. This prepares the to-be-edited record with the proper category id.
	 */
	onAddFootprint: function () {
        var selection = this.down("partkeepr\\.FootprintTree").getSelection();

        var category;
        if (selection.length == 0) {
            category = this.down("partkeepr\\.FootprintTree").getRootNode().getId();
        } else {
            var item = selection.shift();
            category = item.getId();
        }

        this.fireEvent("itemAdd", {
            category: category
        });
	},
    syncChanges: function () {
        this.down("partkeepr\\.FootprintGrid").getStore().load();
    },
    getSelectionModel: function () {
        "use strict";
        return this.down("partkeepr\\.FootprintGrid").getSelectionModel();
    }


});