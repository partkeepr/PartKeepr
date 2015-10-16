Ext.define("PartKeepr.data.TreeReader", {
    extend: 'Ext.data.reader.Json',

    alias: 'reader.tree',

   getResponseData: function(response) {
       var data = this.callParent(arguments);
        return {
            children: data
        };
    }
});

