/**
 * Overrides the editing plugin to support editing of associations.
 */
Ext.define('PartKeepr.grid.plugin.CellEditing', {
    alias: 'plugin.cellediting',
    extend: 'Ext.grid.plugin.Editing',
    override: 'Ext.grid.plugin.CellEditing',
    requires: ['Ext.grid.CellEditor', 'Ext.util.DelayedTask'],

    onEditComplete: function (ed, value, startValue)
    {
        var me = this,
            context = ed.context,
            view, record;

        view = context.view;
        record = context.record;
        context.value = value;
        if (!me.validateEdit(context)) {
            me.editing = false;
            return;
        }

        // Only update the record if the new value is different than the
        // startValue. When the view refreshes its el will gain focus
        if (!record.isEqual(value, startValue)) {
            if (record.hasField(context.column.dataIndex)) {
                record.set(context.column.dataIndex, value);
            } else {
                if (record.associations[context.column.dataIndex]) {
                    var setterName = record.associations[context.column.dataIndex].setterName;

                    record[setterName](value);
                }
            }
            // Changing the record may impact the position
            context.rowIdx = view.indexOf(record);
        }

        me.fireEvent('edit', me, context);

        // We clear down our context here in response to the CellEditor completing.
        // We only do this if we have not already started editing a new context.
        if (me.context === context) {
            me.setActiveEditor(null);
            me.setActiveColumn(null);
            me.setActiveRecord(null);
            me.editing = false;
        }
    },
});
