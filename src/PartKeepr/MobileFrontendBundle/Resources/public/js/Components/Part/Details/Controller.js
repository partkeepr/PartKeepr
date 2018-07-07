Ext.define("PartKeepr.Components.Part.Details.Controller", {
    extend: 'Ext.app.ViewController',

    alias: 'controller.PartDetailsController',

    closePanel: function () {
        this.getView().hide();
    },
    reloadPart: function () {
        this.getView().getPart().load({
            success: Ext.bind(this.getView().updatePart, this.getView())
        });
    },
    promptAddStock: function () {
        Ext.Msg.prompt(i18n("Add Stock"), i18n("Amount"), this.addStock, this);
    },
    addStock: function (button, value) {
        if (button === "ok") {
            this.getView().getPart().callPutAction("addStock",{
                quantity: value
            },Ext.bind(this.reloadPart, this),false);
        }
    },
    promptRemoveStock: function () {
        Ext.Msg.prompt(i18n("Remove Stock"), i18n("Amount"), this.removeStock, this);
    },
    removeStock: function (button, value) {
        if (button === "ok") {
            this.getView().getPart().callPutAction("removeStock",{
                quantity: value
            },Ext.bind(this.reloadPart, this),false);
        }
    }
});