/**
 * @class PartKeepr.PartDisplay
 * <p>This component displays information about a specific part.</p>
 */
Ext.define('PartKeepr.PartDisplay', {
    extend: 'Ext.panel.Panel',
    bodyCls: 'partdisplay',

    overflowY: 'auto',

    fieldConfigs:
        {
            categoryName: {
                displayName: i18n("Category Name")
            },
            stockLevel: {
                displayName: i18n("Stock Level")
            },
            minStockLevel: {
                displayName: i18n("Minimum Stock Level")
            },
            footprintName: {
                displayName: i18n("Footprint")
            },
            storageLocationName: {
                displayName: i18n("Storage Location")
            },
            comment: {
                displayName: i18n("Comment")
            },
            createDate: {
                displayName: i18n("Create Date")
            },
            status: {
                displayName: i18n("Status")
            },
            partCondition: {
                displayName: i18n("Condition")
            },
            needsReview: {
                displayName: i18n("Needs Review")
            },
            projects: {
                displayName: i18n("Projects")
            }
        }
    ,

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
            icon: 'resources/silkicons/brick_add.png',
            handler: Ext.bind(this.addPartPrompt, this)
        });

        /**
         * Create the "remove stock" button
         */
        this.deleteButton = new Ext.Button({
            text: i18n("Remove Stock"),
            icon: 'resources/silkicons/brick_delete.png',
            handler: Ext.bind(this.deletePartPrompt, this)
        });

        /**
         * Create the "edit part" button
         */
        this.editButton = new Ext.Button({
            text: i18n("Edit Part"),
            icon: 'resources/silkicons/brick_edit.png',
            handler: Ext.bind(function ()
            {
                this.fireEvent("editPart", this.record.getId());
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
            hideHeaders: true,
            title: {
                height: 'auto',
                cls: 'x-title-wrappable-text'
            },
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
    /**
     * Sets the values for the template.
     *
     * Note that the data of the record is applied with htmlentities(), i.e. <b>Test</b> will be
     * displayed as such and not in bold.
     */
    setValues: function (r)
    {
        this.record = r;

        var values = {};

        var recordData = this.record.getData();

        for (var i in recordData) {
            if (this.fieldConfigs[i]) {
                if (recordData[i] !== null) {
                    values[i] = htmlentities(recordData[i]); // phpjs
                } else {
                    values[i] = recordData[i];
                }
            }
        }

        this.attachmentDisplay.bindStore(this.record.attachments());
        this.infoGrid.setSource(values);
        this.infoGrid.setTitle("<div>"+this.record.get("name") + "</div><small>"+this.record.get("description")+"</small>");
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
        var call = new PartKeepr.ServiceCall(
            "Part",
            "addStock");
        call.setParameter("stock", quantity);
        call.setParameter("price", price);
        call.setParameter("comment", comment);
        call.setParameter("part", this.record.get("id"));
        call.setHandler(Ext.bind(this.reloadPart, this));
        call.doCall();
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
    deletePartHandler: function (quantity)
    {
        var call = new PartKeepr.ServiceCall(
            "Part",
            "deleteStock");
        call.setParameter("stock", quantity);
        call.setParameter("part", this.record.getId());
        call.setHandler(Ext.bind(this.reloadPart, this));
        call.doCall();
    },
    /**
     * Reloads the current part
     */
    reloadPart: function ()
    {
        this.loadPart(this.record.getId());
    },
    /**
     * Load the part from the database.
     */
    loadPart: function (id)
    {
        PartKeepr.Part.load(id, {
            scope: this,
            success: this.onPartLoaded
        });
    },
    /**
     * Callback after the part is loaded
     */
    onPartLoaded: function (record)
    {
        this.record = record;
        this.setValues(this.record);
        this.record.commit();
    }
});
