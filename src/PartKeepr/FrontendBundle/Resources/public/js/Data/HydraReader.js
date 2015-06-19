Ext.define("PartKeepr.data.HydraReader", {
    extend: 'Ext.data.reader.Json',
    alias: 'reader.hydra',

    totalProperty: 'hydra:totalItems',

    getResponseData: function (response) {
        var data = this.callParent([response]);

        if (data["@type"] == "hydra:PagedCollection") {
            this.setRootProperty("hydra:member");
        } else {
            this.setRootProperty("");
        }
        return data;
    }
});