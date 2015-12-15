/**
 * @class PartKeepr.PartDisplay
 * <p>This component displays information about a specific part.</p>
 */
Ext.define('PartKeepr.PartDisplay', {
    extend: 'Ext.panel.Panel',
    bodyCls: 'partdisplay',

    overflowY: 'auto',

    fieldConfigs: {
        "category.name": {
            displayName: i18n("Category Name")
        },
        stockLevel: {
            displayName: i18n("Stock Level")
        },
        minStockLevel: {
            displayName: i18n("Minimum Stock Level")
        },
        "footprint.name": {
            displayName: i18n("Footprint")
        },
        "storageLocation.name": {
            displayName: i18n("Storage Location")
        },
        comment: {
            displayName: i18n("Comment")
        },
        createDate: {
            displayName: i18n("Create Date"),
            type: 'date',
        },
        status: {
            displayName: i18n("Status")
        },
        partCondition: {
            displayName: i18n("Condition")
        },
        needsReview: {
            displayName: i18n("Needs Review"),
            type: 'boolean'
        },
        projectNames: {
            displayName: i18n("Used in Projects")
        },
        "@id": {
            displayName: i18n("Internal ID"),
            renderer: function (value)
            {
                var values = value.split("/");
                return values[values.length - 1];
            }
        }
    },

    /**
     * Initializes the component and adds a template as well as the add/remove stock and edit part buttons.
     */
    initComponent: function ()
    {
        /**
         * Create the "add stock" button
         */
        this.addButton = new Ext.Button({
            text: i18n("Add Stock"),
            iconCls: 'web-icon brick_add',
            handler: Ext.bind(this.addPartPrompt, this)
        });

        /**
         * Create the "remove stock" button
         */
        this.deleteButton = new Ext.Button({
            text: i18n("Remove Stock"),
            iconCls: 'web-icon brick_delete',
            handler: Ext.bind(this.deletePartPrompt, this)
        });

        /**
         * Create the "edit part" button
         */
        this.editButton = new Ext.Button({
            text: i18n("Edit Part"),
            iconCls: 'web-icon brick_edit',
            handler: Ext.bind(function ()
            {
                this.fireEvent("editPart", this.record);
            }, this)
        });

        /**
         * Create the toolbar which holds our buttons
         */
        this.tbar = Ext.create("Ext.toolbar.Toolbar", {
            enableOverflow: true,
            items: [
                this.addButton,
                this.deleteButton,
                this.editButton
            ]
        });

        /**
         * Add the event "editPart". This event is fired as soon as the "edit" button is clicked.
         *
         * @todo Add the events "addStock" and "removeStock" and manage these events from the PartManager.
         */

        this.attachmentDisplay = Ext.create("Ext.view.View", {
            title: "Foobar",
            store: null,
            itemSelector: 'div.foobar',
            selectedItemCls: "",
            focusCls: "",
            margin: 5,
            emptyText: i18n("No attachments"),
            tpl: [
                '<tpl for=".">',
                '<div class="foobar"><a href="{[values["@id"]]}/getFile" target="_blank">{[values.originalFilename]}</a></div>',
                '</tpl>'
            ]
        });

        this.imageDisplay = Ext.create("PartKeepr.PartImageDisplay", {
            title: i18n("Images"),
        });

        this.infoGrid = Ext.create("Ext.grid.property.Grid", {
            listeners: {
                'beforeedit': function (e)
                {
                    return false;
                }
            },
            hideHeaders: true,
            nameColumnWidth: 150,
            title: {
                height: 'auto',
                cls: 'x-title-wrappable-text'
            },
            cls: 'x-wrappable-grid',
            sourceConfig: this.fieldConfigs
        });

        this.items = [
            this.infoGrid, {
                xtype: 'panel',
                title: i18n("Attachments"),
                items: this.attachmentDisplay
            }, this.imageDisplay
        ];
        this.callParent();
    },
    clear: function ()
    {
        this.attachmentDisplay.bindStore(null);
        this.imageDisplay.setStore(null);

    },
    /**
     * Sets the values for the template.
     *
     * Note that the data of the record is applied with htmlentities(), i.e. <b>Test</b> will be
     * displayed as such and not in bold.
     */
    setValues: function (r)
    {
        this.record = r;

        var values = {}, value;

        var recordData = this.record.getData();

        for (var i in this.fieldConfigs) {
            value = this.record.get(i);
            if (value !== undefined) {
                if (typeof(value === "string")) {
                    values[i] = htmlentities(value); // phpjs
                } else {
                    values[i] = value;
                }
            } else {
                values[i] = i18n("none");
            }
        }

        this.attachmentDisplay.bindStore(this.record.attachments());
        this.infoGrid.setSource(values);
        this.infoGrid.setTitle(
            "<div>" + this.record.get("name") + "</div><small>" + this.record.get("description") + "</small>");
        this.imageDisplay.setStore(this.record.attachments());

        // Scroll the container to top in case the user scrolled the part, then switched to another part
        this.scrollTo(0, 0);

    },
    /**
     * Prompt the user for the stock level he wishes to add.
     */
    addPartPrompt: function ()
    {
        var j = new PartKeepr.PartStockWindow({partUnitName: this.record.get("partUnitName")});
        j.addStock(this.addPartHandler, this);
    },
    /**
     * Callback after the "add stock" dialog is complete.
     */
    addPartHandler: function (quantity, price, comment)
    {
        this.record.callPutAction("addStock", {
            quantity: quantity,
            price: price,
            comment: comment
        }, null, true);
    },
    /**
     * Prompts the user for the stock level to decrease for the item.
     */
    deletePartPrompt: function ()
    {
        var j = new PartKeepr.PartStockWindow({partUnitName: this.record.get("partUnitName")});
        j.removeStock(this.deletePartHandler, this);
    },
    /**
     * Callback after the "delete stock" dialog is complete.
     */
    deletePartHandler: function (quantity, unused_price, comment)
    {
        this.record.callPutAction("removeStock", {
            quantity: quantity,
            comment: comment,
        }, null, true);
    },
    /**
     * Load the part from the database.
     */
    loadPart: function ()
    {
        this.record.load({
            scope: this,
            success: this.onPartLoaded
        });
    },
    /**
     * Callback after the part is loaded
     */
    onPartLoaded: function (record)
    {
        this.setValues(this.record);
    }
});
