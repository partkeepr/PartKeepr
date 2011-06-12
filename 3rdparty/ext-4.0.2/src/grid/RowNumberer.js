/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.grid.RowNumberer
 * @extends Ext.grid.column.Column
 * This is a utility class that can be passed into a {@link Ext.grid.column.Column} as a column config that provides
 * an automatic row numbering column.
 * <br>Usage:<br><pre><code>
columns: [
    Ext.create('Ext.grid.RowNumberer'),
    {text: "Company", flex: 1, sortable: true, dataIndex: 'company'},
    {text: "Price", width: 120, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
    {text: "Change", width: 120, sortable: true, dataIndex: 'change'},
    {text: "% Change", width: 120, sortable: true, dataIndex: 'pctChange'},
    {text: "Last Updated", width: 120, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
]
 *</code></pre>
 */
Ext.define('Ext.grid.RowNumberer', {
    extend: 'Ext.grid.column.Column',
    alias: 'widget.rownumberer',
    /**
     * @cfg {String} text Any valid text or HTML fragment to display in the header cell for the row
     * number column (defaults to '&#160').
     */
    text: "&#160",

    /**
     * @cfg {Number} width The default width in pixels of the row number column (defaults to 23).
     */
    width: 23,

    /**
     * @cfg {Boolean} sortable True if the row number column is sortable (defaults to false).
     * @hide
     */
    sortable: false,

    align: 'right',

    constructor : function(config){
        this.callParent(arguments);
        if (this.rowspan) {
            this.renderer = Ext.Function.bind(this.renderer, this);
        }
    },

    // private
    fixed: true,
    hideable: false,
    menuDisabled: true,
    dataIndex: '',
    cls: Ext.baseCSSPrefix + 'row-numberer',
    rowspan: undefined,

    // private
    renderer: function(value, metaData, record, rowIdx, colIdx, store) {
        if (this.rowspan){
            metaData.cellAttr = 'rowspan="'+this.rowspan+'"';
        }

        metaData.tdCls = Ext.baseCSSPrefix + 'grid-cell-special';
        return store.indexOfTotal(record) + 1;
    }
});

