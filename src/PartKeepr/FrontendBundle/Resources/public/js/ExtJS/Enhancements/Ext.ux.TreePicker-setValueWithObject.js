/**
 * Enhancements for Ext.ux.TreePicker:
 *
 * - Allow setValue to be a model. If it's a model, select by the idProperty
 * - Use | as separator for getPath/selectPath, because the default "/" separator doesn't work with JSON-LD IDs
 */
Ext.define("PartKeepr.ux.TreePicker", {
    override: "Ext.ux.TreePicker",

   /**
     * Sets the specified value into the field
     * @param {Mixed} value
     * @return {Ext.ux.TreePicker} this
     */
    setValue: function(value) {
        var me = this,
            record;

        me.value = value;

        if (me.store.loading) {
            // Called while the Store is loading. Ensure it is processed by the onLoad method.
            return me;
        }

        // try to find a record in the store that matches the value
        record = value ? me.store.getNodeById(value) : me.store.getRoot();
        if (value === undefined || value === null) {
            record = me.store.getRoot().firstChild;
            me.value = record.getId();
        } else {
            if (value.isModel) {
                record = me.store.getNodeById(value.getId());
            } else {
                record = me.store.getNodeById(value);
            }
        }

        // set the raw value to the record's display field if a record was found
        me.setRawValue(record ? record.get(me.displayField) : '');

        return me;
    },
    /**
     * Runs when the picker is expanded.  Selects the appropriate tree node based on the value of the input element,
     * and focuses the picker so that keyboard navigation will work.
     * @private
     */
    onExpand: function()
    {
        var me = this,
            picker = me.picker,
            store = picker.store,
            value = me.value,
            node;

        if (value) {
            if (value.isModel) {
                node = store.getNodeById(value.getId());
            } else {
                node = store.getNodeById(value);
            }
        }

        if (!node) {
            node = store.getRoot();
        }

        var path = node.getPath("@id", "|");

        picker.selectPath(path, "@id", "|");
    },
     /**
     * Changes the selection to a given record and closes the picker
     * @private
     * @param {Ext.data.Model} record
     */
    selectItem: function(record) {
        var me = this;
        me.setValue(record);
        me.fireEvent('select', me, record);
        me.collapse();
    },
});
