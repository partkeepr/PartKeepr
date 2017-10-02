Ext.define("PartKeepr.data.Store", {
    override: "Ext.data.Store",

    /**
     * Retrieves a specific field from all records in the store
     * @param field
     * @returns {Array}
     */
    getFieldValues: function (field) {
        var i;
        var result = [];

        for (i=0;i<this.getCount();i++) {
            console.log(this.getAt(i));
            result.push(this.getAt(i).get(field));
        }

        return result;
    }
});
