/**
 * Overrides the renderCell method so it uses the record.get() call and not the dataIndex on the record's data
 * array itself. This allows to use nested queries like storageLocation.name
 */
Ext.define("PartKeepr.ExtJS.Enhancements.renderCell", {
    override: 'Ext.view.Table',

    /**
     * @private
     * Emits the HTML representing a single grid cell into the passed output stream (which is an array of strings).
     *
     * @param {Ext.grid.column.Column} column The column definition for which to render a cell.
     * @param {Ext.data.Model} record The record being edited
     * @param {Number} recordIndex The row index (zero based within the {@link #store}) for which to render the cell.
     * @param {Number} rowIndex The row index (zero based within this view for which to render the cell.
     * @param {Number} columnIndex The column index (zero based) for which to render the cell.
     * @param {String[]} out The output stream into which the HTML strings are appended.
     */
    renderCell: function (column, record, recordIndex, rowIndex, columnIndex, out) {
        var me = this,
            fullIndex,
            selModel = me.selectionModel,
            cellValues = me.cellValues,
            classes = cellValues.classes,
            fieldValue,
            cellTpl = me.cellTpl,
            enableTextSelection = column.enableTextSelection,
            value, clsInsertPoint,
            lastFocused = me.navigationModel.getPosition();

        fieldValue = record.get(column.dataIndex);

        // Only use the view's setting if it's not been overridden on the column
        if (enableTextSelection == null) {
            enableTextSelection = me.enableTextSelection;
        }

        cellValues.record = record;
        cellValues.column = column;
        cellValues.recordIndex = recordIndex;
        cellValues.rowIndex = rowIndex;
        cellValues.columnIndex = cellValues.cellIndex = columnIndex;
        cellValues.align = column.textAlign;
        cellValues.innerCls = column.innerCls;
        cellValues.tdCls = cellValues.tdStyle = cellValues.tdAttr = cellValues.style = "";
        cellValues.unselectableAttr = enableTextSelection ? '' : 'unselectable="on"';

        // Begin setup of classes to add to cell
        classes[1] = column.getCellId();

        // On IE8, array[len] = 'foo' is twice as fast as array.push('foo')
        // So keep an insertion point and use assignment to help IE!
        clsInsertPoint = 2;

        if (column.renderer && column.renderer.call) {
            fullIndex = me.ownerCt.columnManager.getHeaderIndex(column);
            value = column.renderer.call(column.usingDefaultRenderer ? column : column.scope || me.ownerCt, fieldValue, cellValues, record, recordIndex, fullIndex, me.dataSource, me);
            if (cellValues.css) {
                // This warning attribute is used by the compat layer
                // TODO: remove when compat layer becomes deprecated
                record.cssWarning = true;
                cellValues.tdCls += ' ' + cellValues.css;
                cellValues.css = null;
            }

            // Add any tdCls which was added to the cellValues by the renderer.
            if (cellValues.tdCls) {
                classes[clsInsertPoint++] = cellValues.tdCls;
            }
        } else {
            value = fieldValue;
        }

        cellValues.value = (value == null || value.length === 0) ? column.emptyCellText : value;

        if (column.tdCls) {
            classes[clsInsertPoint++] = column.tdCls;
        }
        if (me.markDirty && record.dirty && record.isModified(column.dataIndex)) {
            classes[clsInsertPoint++] = me.dirtyCls;

            if (column.dirtyTextElementId) {
                cellValues.tdAttr = (cellValues.tdAttr ? cellValues.tdAttr + ' ' : '') +
                                    'aria-describedby="' + column.dirtyTextElementId + '"';
            }
        }
        if (column.isFirstVisible) {
            classes[clsInsertPoint++] = me.firstCls;
        }
        if (column.isLastVisible) {
            classes[clsInsertPoint++] = me.lastCls;
        }
        if (!enableTextSelection) {
            classes[clsInsertPoint++] = me.unselectableCls;
        }
        if (selModel && (selModel.isCellModel || selModel.isSpreadsheetModel) && selModel.isCellSelected(me, recordIndex, column)) {
            classes[clsInsertPoint++] = me.selectedCellCls;
        }
        if (lastFocused && lastFocused.record.id === record.id && lastFocused.column === column) {
            classes[clsInsertPoint++] = me.focusedItemCls;
        }

        // Chop back array to only what we've set
        classes.length = clsInsertPoint;

        cellValues.tdCls = classes.join(' ');

        cellTpl.applyOut(cellValues, out);

        // Dereference objects since cellValues is a persistent var in the XTemplate's scope chain
        cellValues.column = cellValues.record = null;
    }
});
