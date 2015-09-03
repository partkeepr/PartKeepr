/**
 * Overrides the editing plugin to support editing of associations.
 */
Ext.define('PartKeepr.grid.plugin.Editing', {
    override: 'Ext.grid.plugin.Editing',
    extend: 'Ext.plugin.Abstract',
    alias: 'editing.editing',

    /**
     * @private
     * Collects all information necessary for any subclasses to perform their editing functions.
     * @param {Ext.data.Model/Number} record The record or record index to edit.
     * @param {Ext.grid.column.Column/Number} columnHeader The column of column index to edit.
     * @return {Ext.grid.CellContext/undefined} The editing context based upon the passed record and column
     */
    getEditingContext: function (record, columnHeader)
    {
        var me = this,
            grid = me.grid,
            colMgr = grid.visibleColumnManager,
            view,
            gridRow,
            rowIdx, colIdx,
            result,
            layoutView = me.grid.lockable ? me.grid : me.view;

        // The view must have had a layout to show the editor correctly, defer until that time.
        // In case a grid's startup code invokes editing immediately.
        if (!layoutView.componentLayoutCounter) {
            layoutView.on({
                boxready: Ext.Function.bind(me.startEdit, me, [record, columnHeader]),
                single: true
            });
            return;
        }

        // If disabled or grid collapsed, or view not truly visible, don't calculate a context - we cannot edit
        if (me.disabled || me.grid.collapsed || !me.grid.view.isVisible(true)) {
            return;
        }

        // They've asked to edit by column number.
        // Note that in a locked grid, the columns are enumerated in a unified set for this purpose.
        if (Ext.isNumber(columnHeader)) {
            columnHeader = colMgr.getHeaderAtIndex(columnHeader);
        }

        // No corresponding column. Possible if all columns have been moved to the other side of a lockable grid pair
        if (!columnHeader) {
            return;
        }

        // Coerce the column to the closest visible column
        if (columnHeader.hidden) {
            columnHeader = columnHeader.next(':not([hidden])') || columnHeader.prev(':not([hidden])');
        }

        // Navigate to the view and grid which the column header relates to.
        view = columnHeader.getView();
        grid = view.ownerCt;

        gridRow = view.getRow(record);

        // An intervening listener may have deleted the Record.
        if (!gridRow) {
            return;
        }

        colIdx = colMgr.getHeaderIndex(columnHeader);

        if (Ext.isNumber(record)) {
            // look up record if numeric row index was passed
            rowIdx = record;
            record = view.getRecord(gridRow);
        } else {
            rowIdx = view.indexOf(gridRow);
        }

        // The record may be removed from the store but the view
        // not yet updated, so check it exists
        if (!record) {
            return;
        }

        // Create a new CellContext
        result = new Ext.grid.CellContext(view).setAll(view, rowIdx, colIdx, record, columnHeader);

        // Add extra Editing information
        result.grid = grid;
        result.store = view.dataSource;
        result.field = columnHeader.dataIndex;

        if (record.hasField(columnHeader.dataIndex)) {
            result.value = result.originalValue = record.get(columnHeader.dataIndex);
        } else {
            if (record.associations[columnHeader.dataIndex]) {
                var getterName = record.associations[columnHeader.dataIndex].getterName;

                result.value = result.originalValue = record[getterName]();
            }
        }

        result.row = gridRow;
        result.node = view.getNode(record);
        result.cell = view.getCellByPosition(result, true);

        return result;
    },
});