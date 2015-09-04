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
    },
    /**
     * Persists the values in this form into the passed {@link Ext.data.Model} object in a beginEdit/endEdit block.
     * If the record is not specified, it will attempt to update (if it exists) the record provided to loadRecord.
     * @param {Ext.data.Model} [record] The record to edit
     * @return {Ext.form.Basic} this
     */
    updateRecord: function(record) {
        record = record || this._record;
        if (!record) {
            //<debug>
            Ext.raise("A record is required.");
            //</debug>
            return this;
        }

        var fields = record.self.fields,
            values = this.getFieldValues(),
            obj = {},
            associations = {},
            i = 0,
            len = fields.length,
            name;

        for (; i < len; ++i) {
            name  = fields[i].name;

            if (values.hasOwnProperty(name)) {
                if (record.hasField(name)) {
                    obj[name] = values[name];
                } else {
                    associations[name] = values[name];
                }
            }
        }

        record.beginEdit();
        record.set(obj);

        for (i in associations) {
            if (record.associations[i]) {
                var setterName = record.associations[i].setterName;
                record[setterName](associations[i]);
            }
        }
        record.endEdit();

        return this;
    },
});