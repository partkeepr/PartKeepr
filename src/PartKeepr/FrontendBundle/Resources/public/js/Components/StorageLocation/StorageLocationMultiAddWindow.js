/**
 * Represents the multi create window.
 * @class PartKeepr.StorageLocationMultiCreateWindow
 */
Ext.define("PartKeepr.StorageLocationMultiCreateWindow", {
    extend: 'Ext.Window',

    // Layout stuff
    layout: 'fit',
    width: 500,
    height: 250,

    // Title
    title: i18n("Multi-Create Storage Locations"),

    /**
     * Initializes the window by adding the buttons and the form
     */
    initComponent: function () {
        this.form = Ext.create("PartKeepr.StorageLocationMultiAddDialog");

        this.items = [this.form];

        // Creates the add button as instance, so we can disable it easily.
        this.addButton = Ext.create("Ext.button.Button", {
            text: i18n("Create Storage Locations"),
            iconCls: 'web-icon add',
            handler: this.onAddClick,
            scope: this
        });

        this.dockedItems = [{
            xtype: 'toolbar',
            defaults: {minWidth: 100},
            dock: 'bottom',
            ui: 'footer',
            pack: 'start',
            items: [this.addButton,
                {
                    text: i18n("Close"),
                    handler: this.onCloseClick,
                    scope: this,
                    iconCls: 'web-icon cancel'
                }]
        }];

        this.callParent();
    },
    /**
     * Called when the "Add" button was clicked. Sends a call to the server
     * to create the storage locations
     */
    onAddClick: function () {
        this.addButton.disable();

        var storageLocations = this.form.getStorageLocations();

        for (var i=0;i<storageLocations.length;i++) {
            var j = Ext.create("PartKeepr.StorageLocationBundle.Entity.StorageLocation");
            j.setCategory(this.category);
            j.set("name", storageLocations[i]);


            if (i == storageLocations.length -1) {
                j.save({
                    scope: this,
                    success: function (a) {
                        this.close();
                    }
                });
            } else {
                j.save();
            }
        }
    },
    /**
     * Called when the service call was completed. Displays an error dialog
     * if something went wrong.
     * @param response The server response
     */
    onAdded: function (response) {
        this.addButton.enable();

        if (response.data.length > 0) {
            Ext.Msg.alert(i18n("Errors occured"), implode("<br>", response.data));
        } else {
            this.close();
        }
    },
    /**
     * Close the dialog
     */
    onCloseClick: function () {
        this.close();
    }

});
