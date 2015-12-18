/**
 * @class PartKeepr.PartManager
 * @todo Document the editor system a bit better
 *
 * The part manager encapsulates the category tree, the part display grid and the part detail view.
 */
Ext.define('PartKeepr.PartManager', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.PartManager',
    layout: 'border',
    id: 'partkeepr-partmanager',
    border: false,
    padding: 5,
    dragAndDrop: true,

    /**
     * Defines if the border layout should be compact or regular.
     *
     * Compact style stacks the tree panel and the part detail panel on top of each other to save space, which is a bit
     * odd in terms of usability. Regular style means that the layout will be Category Tree->Part List->Part details.
     *
     * @var boolean True if compact layout should be used, false otherwise.
     */
    compactLayout: false,

    selectedCategory: null,

    initComponent: function ()
    {

        /**
         * Create the store with the default sorter "name ASC"
         */
        this.createStore({
            model: 'PartKeepr.PartBundle.Entity.Part',
            groupField: 'categoryPath',
            sorters: [
                {
                    property: 'category.categoryPath',
                    direction: 'ASC'
                },
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });

        var treeConfig = {
            region: 'west',
            ddGroup: 'CategoryTree'
        };

        if (this.compactLayout) {
            treeConfig.region = 'center';
        } else {
            treeConfig.floatable = false;
            treeConfig.split = true;
            treeConfig.width = 300; // @todo Make this configurable
            treeConfig.title = i18n("Categories");
            treeConfig.collapsible = true; // We want to collapse the tree panel on small screens
        }

        // Create the tree
        this.tree = Ext.create("PartKeepr.PartCategoryTree", treeConfig);

        // Trigger a grid reload on category change
        this.tree.on("itemclick", this.onCategoryClick, this);

        // Create the detail panel
        this.detail = Ext.create("PartKeepr.PartDisplay", {title: i18n("Part Details")});
        this.detail.on("editPart", this.onEditPart, this);

        var gridConfig = {
            title: i18n("Parts List"), region: 'center', layout: 'fit', store: this.getStore()
        };

        if (this.dragAndDrop) {
            gridConfig.viewConfig = {
                plugins: {
                    ddGroup: 'PartTree',
                    ptype: 'gridviewdragdrop',
                    enableDrop: false
                }
            };

            gridConfig.enableDragDrop = true;
        }

        // Create the grid
        this.grid = Ext.create("PartKeepr.PartsGrid", gridConfig);
        this.grid.on("editPart", this.onEditPart, this);

        // Create the grid listeners
        this.grid.on("itemSelect", this.onItemSelect, this);
        this.grid.on("itemDeselect", this.onItemSelect, this);
        this.grid.on("itemAdd", this.onItemAdd, this);
        this.grid.on("itemDelete", this.onItemDelete, this);
        this.grid.on("duplicateItemWithBasicData", this.onDuplicateItemWithBasicData, this);
        this.grid.on("duplicateItemWithAllData", this.onDuplicateItemWithAllData, this);
        this.tree.on("syncCategory", this.onSyncCategory, this);

        // Create the stock level panel
        this.stockLevel = Ext.create("PartKeepr.PartStockHistory", {title: "Stock History"});

        var detailPanelConfig = {
            title: i18n("Part Details"),
            collapsed: true,
            collapsible: true,
            region: 'east',
            floatable: false,
            titleCollapse: true,
            split: true,
            animCollapse: false,
            items: [this.detail, this.stockLevel]
        };

        if (this.compactLayout) {
            detailPanelConfig.height = 300;
            detailPanelConfig.region = 'south';
        } else {
            detailPanelConfig.width = 300;
        }

        this.detailPanel = Ext.create("Ext.tab.Panel", detailPanelConfig);

        this.filterPanel = Ext.create("PartKeepr.PartFilterPanel", {
            title: i18n("Filter"),
            region: 'south',
            height: 225,
            animCollapse: false,
            floatable: false,
            titleCollapse: true,
            split: true,
            collapsed: true,
            collapsible: true,
            store: this.store,
            partManager: this
        });

        if (this.compactLayout) {
            // Create two border layouts: One for the center panel and one for the left panel. Each border layout
            // has two columns each, containing Categories+Part Details and Part List+Part Filter Panel.
            this.items = [
                {
                    layout: 'border',
                    border: false,
                    region: 'west',
                    animCollapse: false,
                    width: 300,
                    split: true,
                    title: i18n("Categories / Part Details"),
                    titleCollapse: true,
                    collapsed: false,
                    collapsible: true,
                    items: [this.tree, this.detailPanel]
                }, {
                    layout: 'border',
                    border: false,
                    region: 'center',
                    items: [this.grid, this.filterPanel]
                }
            ];
        } else {
            // The regular 3-column layout. The tree, then the part list+part filter, then the part details.
            this.items = [
                this.tree, {
                    layout: 'border',
                    border: false,
                    region: 'center',
                    items: [this.grid, this.filterPanel]
                }, this.detailPanel
            ];
        }

        this.callParent();
    },
    /**
     * Applies the category filter to the store when a category is selected
     *
     * @param {Ext.tree.View} tree The tree view
     * @param {Ext.data.Model} record the selected record
     */
    onCategoryClick: function (tree, record)
    {
        this.selectedCategory = record;

        var filter = Ext.create("Ext.util.Filter", {
            id: 'categoryFilter',
            property: 'category',
            operator: 'IN',
            value: this.getChildrenIds(record)
        });

        if (record.parentNode.isRoot()) {
            // Workaround for big installations: Passing all child categories for the root node
            // to the filter exceeds the HTTP URI length. See
            // https://github.com/partkeepr/PartKeepr/issues/473
            this.store.removeFilter(filter);
        } else {
            this.store.addFilter(filter);
        }
    },
    getSelectedCategory: function ()
    {
        return this.selectedCategory;
    },
    /**
     * Returns the ID for this node and all child nodes
     *
     * @param {Ext.data.Model} The node
     * @return Array
     */
    getChildrenIds: function (node)
    {
        var childNodes = [node];

        if (node.hasChildNodes()) {
            for (var i = 0; i < node.childNodes.length; i++) {
                childNodes = childNodes.concat(this.getChildrenIds(node.childNodes[i]));
            }
        }

        return childNodes;
    },
    /**
     * Called when the sync button was clicked. Highlights the category
     * of the selected part for a short time. We can't select the category
     * as this would affect the parts grid.
     */
    onSyncCategory: function ()
    {
        var r = this.grid.getSelectionModel().getSelection();

        if (r.length != 1) {
            return;
        }

        var rootNode = this.tree.getRootNode();
        var cat = r[0].getCategory().getId();

        var node = rootNode.findChild("@id", cat, true);

        if (node) {
            this.tree.getView().ensureVisible(node);
            this.tree.getView().focusNode(node);
        }
    },
    /**
     * Called when the delete button was clicked.
     *
     * Prompts the user if he really wishes to delete the part. If yes, it calls deletePart.
     */
    onItemDelete: function ()
    {
        var r = this.grid.getSelectionModel().getLastSelected();

        Ext.Msg.confirm(i18n("Delete Part"), sprintf(i18n("Do you really wish to delete the part %s?"), r.get("name")),
            this.deletePart, this);
    },
    /**
     * Creates a duplicate with the basic data only from the selected item. Loads the selected part and calls
     * createPartDuplicate after the part was loaded.
     *
     * @param none
     * @return nothing
     */
    onDuplicateItemWithBasicData: function ()
    {
        var r = this.grid.getSelectionModel().getLastSelected();

        this.loadPart(r.getId(), Ext.bind(this.createPartDuplicate, this));
    },
    /**
     * Creates a full duplicate from the selected item. Loads the selected part and calls createPartDuplicate
     * after the part was loaded.
     *
     * @param none
     * @return nothing
     */
    onDuplicateItemWithAllData: function ()
    {
        var r = this.grid.getSelectionModel().getLastSelected();

        this.loadPart(r.getId(), Ext.bind(this.createFullPartDuplicate, this));
    },
    /**
     * Creates a part duplicate from the given record and opens the editor window.
     * @param rec The record to duplicate
     */
    createPartDuplicate: function (rec)
    {
        var data = rec.getData();
        var associationData = rec.getAssociationData();

        var newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
        newItem.set(data);
        newItem.setAssociationData({
            category: associationData.category,
            partUnit: associationData.partUnit,
            storageLocation: associationData.storageLocation,
            footprint: associationData.footprint
        });

        var j = Ext.create("PartKeepr.PartEditorWindow", {
            partMode: 'create'
        });

        j.editor.on("partSaved", this.onNewPartSaved, this);
        j.editor.editItem(newItem);
        j.show();
    },
    /**
     * Creates a part duplicate from the given record and opens the editor window.
     * @param rec The record to duplicate
     */
    createFullPartDuplicate: function (rec)
    {
        var data = rec.getData();

        var newItem = Ext.create("PartKeepr.PartBundle.Entity.Part");
        newItem.set(data);
        newItem.setAssociationData(rec.getAssociationData());

        var j = Ext.create("PartKeepr.PartEditorWindow", {
            partMode: 'create'
        });

        j.editor.on("partSaved", this.onNewPartSaved, this);
        j.editor.editItem(newItem);
        j.show();
    },
    /**
     * Deletes the selected part.
     *
     * @param {String} btn The clicked button in the message box window.
     * @todo We use the current selection of the grid. If for some reason the selection changes during the user is prompted,
     * we delete the wrong part. Fix that to pass the selected item to the onItemDelete then to this function.
     */
    deletePart: function (btn)
    {
        var r = this.grid.getSelectionModel().getLastSelected();

        if (btn == "yes") {
            this.detailPanel.collapse();
            this.detail.clear();
            r.erase();
        }
    },
    /**
     * Creates a new, empty part editor window
     */
    onItemAdd: function ()
    {
        var j = Ext.create("PartKeepr.PartEditorWindow", {
            partMode: 'create'
        });

        var defaultPartUnit = PartKeepr.getApplication().getPartUnitStore().findRecord("default", true);

        var record = Ext.create("PartKeepr.PartBundle.Entity.Part");

        if (this.getSelectedCategory() !== null) {
            record.setCategory(this.getSelectedCategory());
        } else {
            record.setCategory(this.tree.getRootNode().firstChild);
        }

        record.setPartUnit(defaultPartUnit);

        j.editor.editItem(record);
        j.editor.on("partSaved", this.onNewPartSaved, this);
        j.show();

        return j;
    },
    /**
     * Called when a part was edited. Refreshes the grid.
     */
    onEditPart: function (part)
    {
        var j = Ext.create("PartKeepr.PartEditorWindow");
        j.editor.on("partSaved", this.onPartSaved, this);
        j.editor.editItem(part);
        j.show();
    },
    onNewPartSaved: function (record)
    {
        this.grid.getStore().reload();
    },
    onPartSaved: function (record)
    {
        this.detail.setValues(record);
    },
    /**
     * Called when a part was selected in the grid. Displays the details for this part.
     */
    onItemSelect: function ()
    {
        if (this.grid.getSelection().length > 1) {
            this.detailPanel.collapse();
            this.tree.syncButton.disable();
        } else {
            if (this.grid.getSelection().length == 1) {
                var selection = this.grid.getSelection();

                var r = selection[0];

                this.detailPanel.setActiveTab(this.detail);
                this.detailPanel.expand();
                this.detail.setValues(r);
                this.stockLevel.part = r.getId();

                this.tree.syncButton.enable();
            } else {
                this.tree.syncButton.disable();
            }
        }

    },
    /**
     * Triggers loading of a part
     * @param {Integer} id The ID of the part to load
     * @param {Function} handler The callback to call when the part was loaded
     */
    loadPart: function (id, handler)
    {
        // @todo we have this method duplicated in PartEditor

        PartKeepr.PartBundle.Entity.Part.load(id, {
            scope: this,
            success: handler
        });
    },
    /**
     * Creates the store
     */
    createStore: function (config)
    {
        Ext.Object.merge(config, {
            autoLoad: true,
            autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
            remoteFilter: true,
            remoteSort: true,
            pageSize: 50
        });

        this.store = Ext.create('Ext.data.Store', config);

        // Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
        this.store.on('write', function (store, operation)
        {
            var success = operation.wasSuccessful();
            if (success) {
                Ext.each(operation.records, function (record)
                {
                    if (record.dirty) {
                        record.commit();
                    }
                });
            }
        });
    },
    /**
     * Returns the store
     */
    getStore: function ()
    {
        return this.store;
    }
});
