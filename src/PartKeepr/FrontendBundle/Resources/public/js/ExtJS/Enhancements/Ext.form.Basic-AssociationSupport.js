/**
 * Overrides Ext.form.Basic to implement getter support for loadRecord(). This enables us to directly
 * assign comboboxes to associations.
 */
Ext.define("PartKeepr.form.Basic", {
    override: "Ext.form.Basic",

    loadRecord: function (record)
    {
        this._record = record;

        var values = record.getData();

        for (var i in record.associations) {
            var getterName = record.associations[i].getterName;
            values[i] = record[getterName]();
        }

        return this.setValues(values);
    }
});