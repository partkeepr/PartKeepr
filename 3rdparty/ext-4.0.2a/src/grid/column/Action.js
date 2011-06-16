/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.grid.column.Action
 * @extends Ext.grid.column.Column
 * <p>A Grid header type which renders an icon, or a series of icons in a grid cell, and offers a scoped click
 * handler for each icon.</p>
 *
 * {@img Ext.grid.column.Action/Ext.grid.column.Action.png Ext.grid.column.Action grid column}
 *  
 * ## Code
 *     Ext.create('Ext.data.Store', {
 *         storeId:'employeeStore',
 *         fields:['firstname', 'lastname', 'senority', 'dep', 'hired'],
 *         data:[
 *             {firstname:"Michael", lastname:"Scott"},
 *             {firstname:"Dwight", lastname:"Schrute"},
 *             {firstname:"Jim", lastname:"Halpert"},
 *             {firstname:"Kevin", lastname:"Malone"},
 *             {firstname:"Angela", lastname:"Martin"}                        
 *         ]
 *     });
 *     
 *     Ext.create('Ext.grid.Panel', {
 *         title: 'Action Column Demo',
 *         store: Ext.data.StoreManager.lookup('employeeStore'),
 *         columns: [
 *             {text: 'First Name',  dataIndex:'firstname'},
 *             {text: 'Last Name',  dataIndex:'lastname'},
 *             {
 *                 xtype:'actioncolumn', 
 *                 width:50,
 *                 items: [{
 *                     icon: 'images/edit.png',  // Use a URL in the icon config
 *                     tooltip: 'Edit',
 *                     handler: function(grid, rowIndex, colIndex) {
 *                         var rec = grid.getStore().getAt(rowIndex);
 *                         alert("Edit " + rec.get('firstname'));
 *                     }
 *                 },{
 *                     icon: 'images/delete.png',
 *                     tooltip: 'Delete',
 *                     handler: function(grid, rowIndex, colIndex) {
 *                         var rec = grid.getStore().getAt(rowIndex);
 *                         alert("Terminate " + rec.get('firstname'));
 *                     }                
 *                 }]
 *             }
 *         ],
 *         width: 250,
 *         renderTo: Ext.getBody()
 *     });
 * <p>The action column can be at any index in the columns array, and a grid can have any number of
 * action columns. </p>
 */
Ext.define('Ext.grid.column.Action', {
    extend: 'Ext.grid.column.Column',
    alias: ['widget.actioncolumn'],
    alternateClassName: 'Ext.grid.ActionColumn',

    /**
     * @cfg {String} icon
     * The URL of an image to display as the clickable element in the column. 
     * Optional - defaults to <code>{@link Ext#BLANK_IMAGE_URL Ext.BLANK_IMAGE_URL}</code>.
     */
    /**
     * @cfg {String} iconCls
     * A CSS class to apply to the icon image. To determine the class dynamically, configure the Column with a <code>{@link #getClass}</code> function.
     */
    /**
     * @cfg {Function} handler A function called when the icon is clicked.
     * The handler is passed the following parameters:<div class="mdetail-params"><ul>
     * <li><code>view</code> : TableView<div class="sub-desc">The owning TableView.</div></li>
     * <li><code>rowIndex</code> : Number<div class="sub-desc">The row index clicked on.</div></li>
     * <li><code>colIndex</code> : Number<div class="sub-desc">The column index clicked on.</div></li>
     * <li><code>item</code> : Object<div class="sub-desc">The clicked item (or this Column if multiple 
     * {@link #items} were not configured).</div></li>
     * <li><code>e</code> : Event<div class="sub-desc">The click event.</div></li>
     * </ul></div>
     */
    /**
     * @cfg {Object} scope The scope (<tt><b>this</b></tt> reference) in which the <code>{@link #handler}</code>
     * and <code>{@link #getClass}</code> fuctions are executed. Defaults to this Column.
     */
    /**
     * @cfg {String} tooltip A tooltip message to be displayed on hover. {@link Ext.tip.QuickTipManager#init Ext.tip.QuickTipManager} must have 
     * been initialized.
     */
    /**
     * @cfg {Boolean} stopSelection Defaults to <code>true</code>. Prevent grid <i>row</i> selection upon mousedown.
     */
    /**
     * @cfg {Function} getClass A function which returns the CSS class to apply to the icon image.
     * The function is passed the following parameters:<ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul>
     */
    /**
     * @cfg {Array} items An Array which may contain multiple icon definitions, each element of which may contain:
     * <div class="mdetail-params"><ul>
     * <li><code>icon</code> : String<div class="sub-desc">The url of an image to display as the clickable element 
     * in the column.</div></li>
     * <li><code>iconCls</code> : String<div class="sub-desc">A CSS class to apply to the icon image.
     * To determine the class dynamically, configure the item with a <code>getClass</code> function.</div></li>
     * <li><code>getClass</code> : Function<div class="sub-desc">A function which returns the CSS class to apply to the icon image.
     * The function is passed the following parameters:<ul>
     *     <li><b>v</b> : Object<p class="sub-desc">The value of the column's configured field (if any).</p></li>
     *     <li><b>metadata</b> : Object<p class="sub-desc">An object in which you may set the following attributes:<ul>
     *         <li><b>css</b> : String<p class="sub-desc">A CSS class name to add to the cell's TD element.</p></li>
     *         <li><b>attr</b> : String<p class="sub-desc">An HTML attribute definition string to apply to the data container element <i>within</i> the table cell
     *         (e.g. 'style="color:red;"').</p></li>
     *     </ul></p></li>
     *     <li><b>r</b> : Ext.data.Record<p class="sub-desc">The Record providing the data.</p></li>
     *     <li><b>rowIndex</b> : Number<p class="sub-desc">The row index..</p></li>
     *     <li><b>colIndex</b> : Number<p class="sub-desc">The column index.</p></li>
     *     <li><b>store</b> : Ext.data.Store<p class="sub-desc">The Store which is providing the data Model.</p></li>
     * </ul></div></li>
     * <li><code>handler</code> : Function<div class="sub-desc">A function called when the icon is clicked.</div></li>
     * <li><code>scope</code> : Scope<div class="sub-desc">The scope (<code><b>this</b></code> reference) in which the 
     * <code>handler</code> and <code>getClass</code> functions are executed. Fallback defaults are this Column's
     * configured scope, then this Column.</div></li>
     * <li><code>tooltip</code> : String<div class="sub-desc">A tooltip message to be displayed on hover. 
     * {@link Ext.tip.QuickTipManager#init Ext.tip.QuickTipManager} must have been initialized.</div></li>
     * </ul></div>
     */
    header: '&#160;',

    actionIdRe: /x-action-col-(\d+)/,

    /**
     * @cfg {String} altText The alt text to use for the image element. Defaults to <tt>''</tt>.
     */
    altText: '',
    
    sortable: false,

    constructor: function(config) {
        var me = this,
            cfg = Ext.apply({}, config),
            items = cfg.items || [me],
            l = items.length,
            i,
            item;

        // This is a Container. Delete the items config to be reinstated after construction.
        delete cfg.items;
        me.callParent([cfg]);

        // Items is an array property of ActionColumns
        me.items = items;

//      Renderer closure iterates through items creating an <img> element for each and tagging with an identifying 
//      class name x-action-col-{n}
        me.renderer = function(v, meta) {
//          Allow a configured renderer to create initial value (And set the other values in the "metadata" argument!)
            v = Ext.isFunction(cfg.renderer) ? cfg.renderer.apply(this, arguments)||'' : '';

            meta.tdCls += ' ' + Ext.baseCSSPrefix + 'action-col-cell';
            for (i = 0; i < l; i++) {
                item = items[i];
                v += '<img alt="' + (item.altText || me.altText) + '" src="' + (item.icon || Ext.BLANK_IMAGE_URL) +
                    '" class="' + Ext.baseCSSPrefix + 'action-col-icon ' + Ext.baseCSSPrefix + 'action-col-' + String(i) + ' ' +  (item.iconCls || '') + 
                    ' ' + (Ext.isFunction(item.getClass) ? item.getClass.apply(item.scope||me.scope||me, arguments) : (me.iconCls || '')) + '"' +
                    ((item.tooltip) ? ' data-qtip="' + item.tooltip + '"' : '') + ' />';
            }
            return v;
        };
    },

    destroy: function() {
        delete this.items;
        delete this.renderer;
        return this.callParent(arguments);
    },

    /**
     * @private
     * Process and refire events routed from the GridView's processEvent method.
     * Also fires any configured click handlers. By default, cancels the mousedown event to prevent selection.
     * Returns the event handler's status to allow canceling of GridView's bubbling process.
     */
    processEvent : function(type, view, cell, recordIndex, cellIndex, e){
        var me = this,
            match = e.getTarget().className.match(me.actionIdRe),
            item, fn;
        if (match) {
            item = me.items[parseInt(match[1], 10)];
            if (item) {
                if (type == 'click') {
                    fn = item.handler || me.handler;
                    if (fn) {
                        fn.call(item.scope || me.scope || me, view, recordIndex, cellIndex, item, e);
                    }
                } else if (type == 'mousedown' && item.stopSelection !== false) {
                    return false;
                }
            }
        }
        return me.callParent(arguments);
    },

    cascade: function(fn, scope) {
        fn.call(scope||this, this);
    },

    // Private override because this cannot function as a Container, and it has an items property which is an Array, NOT a MixedCollection.
    getRefItems: function() {
        return [];
    }
});
