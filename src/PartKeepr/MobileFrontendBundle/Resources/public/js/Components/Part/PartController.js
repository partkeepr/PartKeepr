Ext.define("PartKeepr.Components.Part.PartController", {
    extend: 'Ext.app.ViewController',

    alias: 'controller.PartController',

    reload: function () {
        var view = this.getView();

        view.down("PartGrid").getStore().reload();
    },
    search: function (field) {
        var value = field.getValue();
        this.getView().down("#searchField").hide();
        this.getView().down("PartGrid").getStore().doSearch(value);
    },
    resetSearch: function () {
        this.getView().down("PartGrid").getStore().resetSearch();
        this.getView().down("#searchField").hide();
    },
    revealSearchField: function () {
        if (this.getView().down("#searchField").isHidden())
        {
            this.getView().down("#searchField").show();
            this.getView().down("#searchField").focus();
        } else {
            this.getView().down("#searchField").hide();
            this.getView().down("PartGrid").getStore().doSearch(
                this.getView().down("#searchField").getValue()
            )
        }
    },
    showPartDetails: function (part) {
        Ext.Viewport.down("PartDetails").setPart(part);
        Ext.Viewport.down("PartDetails").show();
    }

 });