Ext.define("PartKeepr.Data.store.BarcodeScannerActionsStore", {
    extend: "Ext.data.Store",
    fields: ["action", "name", "description"],
    constructor: function ()
    {
        this.callParent(arguments);

        var actions = PartKeepr.getApplication().getBarcodeScannerManager().getActions();

        for (var i = 0; i < actions.length; i++) {
            this.add({
                "action": actions[i],
                "name": Ext.ClassManager.get(actions[i]).actionName,
                "description": Ext.ClassManager.get(actions[i]).actionDescription
            });
        }

    }

});
