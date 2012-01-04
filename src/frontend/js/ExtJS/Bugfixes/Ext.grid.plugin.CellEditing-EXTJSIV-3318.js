/**
 * This is a hackish bugfix for ExtJS 4.0.7. According to sencha, this has been fixed in EXTJSIV-3318. Remove this
 * as soon as a newer version as ExtJS 4.0.7 is out and fixes this bug.
 */
Ext.override(Ext.grid.plugin.CellEditing, {

	startEdit: function(record, columnHeader) {
        var me = this,
            value = record.get(columnHeader.dataIndex),
            context = me.getEditingContext(record, columnHeader),
            ed;

        record = context.record;
        columnHeader = context.column;

        
        
        me.completeEdit();

        context.originalValue = context.value = value;
        if (me.beforeEdit(context) === false || me.fireEvent('beforeedit', context) === false || context.cancel) {
            return false;
        }
        
        
        if (columnHeader && (!columnHeader.getEditor || !columnHeader.getEditor(record))) {
            return false;
        }
        
        ed = me.getEditor(record, columnHeader);
        if (ed) {
            me.context = context;
            me.setActiveEditor(ed);
            me.setActiveRecord(record);
            me.setActiveColumn(columnHeader);

            
            me.editTask.delay(15, ed.startEdit, ed, [me.getCell(record, columnHeader), value]);
        } else {
            
            
            
            
            me.grid.getView().getEl(columnHeader).focus((Ext.isWebKit || Ext.isIE) ? 10 : false);
        }
        
        return true;
    }
});