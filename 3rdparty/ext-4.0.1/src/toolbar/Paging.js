/**
 * @class Ext.toolbar.Paging
 * @extends Ext.toolbar.Toolbar
 * <p>As the amount of records increases, the time required for the browser to render
 * them increases. Paging is used to reduce the amount of data exchanged with the client.
 * Note: if there are more records/rows than can be viewed in the available screen area, vertical
 * scrollbars will be added.</p>
 * <p>Paging is typically handled on the server side (see exception below). The client sends
 * parameters to the server side, which the server needs to interpret and then respond with the
 * appropriate data.</p>
 * <p><b>Ext.toolbar.Paging</b> is a specialized toolbar that is bound to a {@link Ext.data.Store}
 * and provides automatic paging control. This Component {@link Ext.data.Store#load load}s blocks
 * of data into the <tt>{@link #store}</tt> by passing {@link Ext.data.Store#paramNames paramNames} used for
 * paging criteria.</p>
 *
 * {@img Ext.toolbar.Paging/Ext.toolbar.Paging.png Ext.toolbar.Paging component}
 *
 * <p>PagingToolbar is typically used as one of the Grid's toolbars:</p>
 * <pre><code>
 *    var itemsPerPage = 2;   // set the number of items you want per page
 *    
 *    var store = Ext.create('Ext.data.Store', {
 *        id:'simpsonsStore',
 *        autoLoad: false,
 *        fields:['name', 'email', 'phone'],
 *        pageSize: itemsPerPage, // items per page
 *        proxy: {
 *            type: 'ajax',
 *            url: 'pagingstore.js',  // url that will load data with respect to start and limit params
 *            reader: {
 *                type: 'json',
 *                root: 'items',
 *                totalProperty: 'total'
 *            }
 *        }
 *    });
 *    
 *    // specify segment of data you want to load using params
 *    store.load({
 *        params:{
 *            start:0,    
 *            limit: itemsPerPage
 *        }
 *    });
 *    
 *    Ext.create('Ext.grid.Panel', {
 *        title: 'Simpsons',
 *        store: store,
 *        columns: [
 *            {header: 'Name',  dataIndex: 'name'},
 *            {header: 'Email', dataIndex: 'email', flex:1},
 *            {header: 'Phone', dataIndex: 'phone'}
 *        ],
 *        width: 400,
 *        height: 125,
 *        dockedItems: [{
 *            xtype: 'pagingtoolbar',
 *            store: store,   // same store GridPanel is using
 *            dock: 'bottom',
 *            displayInfo: true
 *        }],
 *        renderTo: Ext.getBody()
 *    });
 * </code></pre>
 *
 * <p>To use paging, pass the paging requirements to the server when the store is first loaded.</p>
 * <pre><code>
store.load({
    params: {
        // specify params for the first page load if using paging
        start: 0,          
        limit: myPageSize,
        // other params
        foo:   'bar'
    }
});
 * </code></pre>
 * 
 * <p>If using {@link Ext.data.Store#autoLoad store's autoLoad} configuration:</p>
 * <pre><code>
var myStore = new Ext.data.Store({
    {@link Ext.data.Store#autoLoad autoLoad}: {start: 0, limit: 25},
    ...
});
 * </code></pre>
 * 
 * <p>The packet sent back from the server would have this form:</p>
 * <pre><code>
{
    "success": true,
    "results": 2000, 
    "rows": [ // <b>*Note:</b> this must be an Array 
        { "id":  1, "name": "Bill", "occupation": "Gardener" },
        { "id":  2, "name":  "Ben", "occupation": "Horticulturalist" },
        ...
        { "id": 25, "name":  "Sue", "occupation": "Botanist" }
    ]
}
 * </code></pre>
 * <p><u>Paging with Local Data</u></p>
 * <p>Paging can also be accomplished with local data using extensions:</p>
 * <div class="mdetail-params"><ul>
 * <li><a href="http://sencha.com/forum/showthread.php?t=71532">Ext.ux.data.PagingStore</a></li>
 * <li>Paging Memory Proxy (examples/ux/PagingMemoryProxy.js)</li>
 * </ul></div>
 * @constructor Create a new PagingToolbar
 * @param {Object} config The config object
 * @xtype pagingtoolbar
 */
Ext.define('Ext.toolbar.Paging', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.pagingtoolbar',
    alternateClassName: 'Ext.PagingToolbar',
    requires: ['Ext.toolbar.TextItem', 'Ext.form.field.Number'],
    /**
     * @cfg {Ext.data.Store} store
     * The {@link Ext.data.Store} the paging toolbar should use as its data source (required).
     */
    /**
     * @cfg {Boolean} displayInfo
     * <tt>true</tt> to display the displayMsg (defaults to <tt>false</tt>)
     */
    displayInfo: false,
    /**
     * @cfg {Boolean} prependButtons
     * <tt>true</tt> to insert any configured <tt>items</tt> <i>before</i> the paging buttons.
     * Defaults to <tt>false</tt>.
     */
    prependButtons: false,
    /**
     * @cfg {String} displayMsg
     * The paging status message to display (defaults to <tt>'Displaying {0} - {1} of {2}'</tt>).
     * Note that this string is formatted using the braced numbers <tt>{0}-{2}</tt> as tokens
     * that are replaced by the values for start, end and total respectively. These tokens should
     * be preserved when overriding this string if showing those values is desired.
     */
    displayMsg : 'Displaying {0} - {1} of {2}',
    /**
     * @cfg {String} emptyMsg
     * The message to display when no records are found (defaults to 'No data to display')
     */
    emptyMsg : 'No data to display',
    /**
     * @cfg {String} beforePageText
     * The text displayed before the input item (defaults to <tt>'Page'</tt>).
     */
    beforePageText : 'Page',
    /**
     * @cfg {String} afterPageText
     * Customizable piece of the default paging text (defaults to <tt>'of {0}'</tt>). Note that
     * this string is formatted using <tt>{0}</tt> as a token that is replaced by the number of
     * total pages. This token should be preserved when overriding this string if showing the
     * total page count is desired.
     */
    afterPageText : 'of {0}',
    /**
     * @cfg {String} firstText
     * The quicktip text displayed for the first page button (defaults to <tt>'First Page'</tt>).
     * <b>Note</b>: quick tips must be initialized for the quicktip to show.
     */
    firstText : 'First Page',
    /**
     * @cfg {String} prevText
     * The quicktip text displayed for the previous page button (defaults to <tt>'Previous Page'</tt>).
     * <b>Note</b>: quick tips must be initialized for the quicktip to show.
     */
    prevText : 'Previous Page',
    /**
     * @cfg {String} nextText
     * The quicktip text displayed for the next page button (defaults to <tt>'Next Page'</tt>).
     * <b>Note</b>: quick tips must be initialized for the quicktip to show.
     */
    nextText : 'Next Page',
    /**
     * @cfg {String} lastText
     * The quicktip text displayed for the last page button (defaults to <tt>'Last Page'</tt>).
     * <b>Note</b>: quick tips must be initialized for the quicktip to show.
     */
    lastText : 'Last Page',
    /**
     * @cfg {String} refreshText
     * The quicktip text displayed for the Refresh button (defaults to <tt>'Refresh'</tt>).
     * <b>Note</b>: quick tips must be initialized for the quicktip to show.
     */
    refreshText : 'Refresh',
    /**
     * @cfg {Number} inputItemWidth
     * The width in pixels of the input field used to display and change the current page number (defaults to 30).
     */
    inputItemWidth : 30,
    
    /**
     * Gets the standard paging items in the toolbar
     * @private
     */
    getPagingItems: function() {
        var me = this;
        
        return [{
            itemId: 'first',
            tooltip: me.firstText,
            overflowText: me.firstText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-first',
            disabled: true,
            handler: me.moveFirst,
            scope: me
        },{
            itemId: 'prev',
            tooltip: me.prevText,
            overflowText: me.prevText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-prev',
            disabled: true,
            handler: me.movePrevious,
            scope: me
        },
        '-',
        me.beforePageText,
        {
            xtype: 'numberfield',
            itemId: 'inputItem',
            name: 'inputItem',
            cls: Ext.baseCSSPrefix + 'tbar-page-number',
            allowDecimals: false,
            minValue: 1,
            hideTrigger: true,
            enableKeyEvents: true,
            selectOnFocus: true,
            submitValue: false,
            width: me.inputItemWidth,
            margins: '-1 2 3 2',
            listeners: {
                scope: me,
                keydown: me.onPagingKeyDown,
                blur: me.onPagingBlur
            }
        },{
            xtype: 'tbtext',
            itemId: 'afterTextItem',
            text: Ext.String.format(me.afterPageText, 1)
        },
        '-',
        {
            itemId: 'next',
            tooltip: me.nextText,
            overflowText: me.nextText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-next',
            disabled: true,
            handler: me.moveNext,
            scope: me
        },{
            itemId: 'last',
            tooltip: me.lastText,
            overflowText: me.lastText,
            iconCls: Ext.baseCSSPrefix + 'tbar-page-last',
            disabled: true,
            handler: me.moveLast,
            scope: me
        },
        '-',
        {
            itemId: 'refresh',
            tooltip: me.refreshText,
            overflowText: me.refreshText,
            iconCls: Ext.baseCSSPrefix + 'tbar-loading',
            handler: me.doRefresh,
            scope: me
        }];
    },

    initComponent : function(){
        var me = this,
            pagingItems = me.getPagingItems(),
            userItems   = me.items || me.buttons || [];
            
        if (me.prependButtons) {
            me.items = userItems.concat(pagingItems);
        } else {
            me.items = pagingItems.concat(userItems);
        }
        delete me.buttons;
        
        if (me.displayInfo) {
            me.items.push('->');
            me.items.push({xtype: 'tbtext', itemId: 'displayItem'});
        }
        
        me.callParent();
        
        me.addEvents(
            /**
             * @event change
             * Fires after the active page has been changed.
             * @param {Ext.toolbar.Paging} this
             * @param {Object} pageData An object that has these properties:<ul>
             * <li><code>total</code> : Number <div class="sub-desc">The total number of records in the dataset as
             * returned by the server</div></li>
             * <li><code>currentPage</code> : Number <div class="sub-desc">The current page number</div></li>
             * <li><code>pageCount</code> : Number <div class="sub-desc">The total number of pages (calculated from
             * the total number of records in the dataset as returned by the server and the current {@link #pageSize})</div></li>
             * <li><code>toRecord</code> : Number <div class="sub-desc">The starting record index for the current page</div></li>
             * <li><code>fromRecord</code> : Number <div class="sub-desc">The ending record index for the current page</div></li>
             * </ul>
             */
            'change',
            /**
             * @event beforechange
             * Fires just before the active page is changed.
             * Return false to prevent the active page from being changed.
             * @param {Ext.toolbar.Paging} this
             * @param {Number} page The page number that will be loaded on change 
             */
            'beforechange'
        );
        me.on('afterlayout', me.onLoad, me, {single: true});

        me.bindStore(me.store, true);
    },
    // private
    updateInfo : function(){
        var me = this,
            displayItem = me.child('#displayItem'),
            store = me.store,
            pageData = me.getPageData(),
            count, msg;

        if (displayItem) {
            count = store.getCount();
            if (count === 0) {
                msg = me.emptyMsg;
            } else {
                msg = Ext.String.format(
                    me.displayMsg,
                    pageData.fromRecord,
                    pageData.toRecord,
                    pageData.total
                );
            }
            displayItem.setText(msg);
            me.doComponentLayout();
        }
    },

    // private
    onLoad : function(){
        var me = this,
            pageData,
            currPage,
            pageCount,
            afterText;
            
        if (!me.rendered) {
            return;
        }

        pageData = me.getPageData();
        currPage = pageData.currentPage;
        pageCount = pageData.pageCount;
        afterText = Ext.String.format(me.afterPageText, isNaN(pageCount) ? 1 : pageCount);

        me.child('#afterTextItem').setText(afterText);
        me.child('#inputItem').setValue(currPage);
        me.child('#first').setDisabled(currPage === 1);
        me.child('#prev').setDisabled(currPage === 1);
        me.child('#next').setDisabled(currPage === pageCount);
        me.child('#last').setDisabled(currPage === pageCount);
        me.child('#refresh').enable();
        me.updateInfo();
        me.fireEvent('change', me, pageData);
    },

    // private
    getPageData : function(){
        var store = this.store,
            totalCount = store.getTotalCount();
            
        return {
            total : totalCount,
            currentPage : store.currentPage,
            pageCount: Math.ceil(totalCount / store.pageSize),
            //pageCount :  store.getPageCount(),
            fromRecord: ((store.currentPage - 1) * store.pageSize) + 1,
            toRecord: Math.min(store.currentPage * store.pageSize, totalCount)
            
        };
    },

    // private
    onLoadError : function(){
        if (!this.rendered) {
            return;
        }
        this.child('#refresh').enable();
    },

    // private
    readPageFromInput : function(pageData){
        var v = this.child('#inputItem').getValue(),
            pageNum = parseInt(v, 10);
            
        if (!v || isNaN(pageNum)) {
            this.child('#inputItem').setValue(pageData.currentPage);
            return false;
        }
        return pageNum;
    },

    onPagingFocus : function(){
        this.child('#inputItem').select();
    },

    //private
    onPagingBlur : function(e){
        var curPage = this.getPageData().currentPage;
        this.child('#inputItem').setValue(curPage);
    },

    // private
    onPagingKeyDown : function(field, e){
        var k = e.getKey(),
            pageData = this.getPageData(),
            increment = e.shiftKey ? 10 : 1,
            pageNum,
            me = this;

        if (k == e.RETURN) {
            e.stopEvent();
            pageNum = me.readPageFromInput(pageData);
            if (pageNum !== false) {
                pageNum = Math.min(Math.max(1, pageNum), pageData.total);
                if(me.fireEvent('beforechange', me, pageNum) !== false){
                    me.store.loadPage(pageNum);
                }
            }
        } else if (k == e.HOME || k == e.END) {
            e.stopEvent();
            pageNum = k == e.HOME ? 1 : pageData.pageCount;
            field.setValue(pageNum);
        } else if (k == e.UP || k == e.PAGEUP || k == e.DOWN || k == e.PAGEDOWN) {
            e.stopEvent();
            pageNum = me.readPageFromInput(pageData);
            if (pageNum) {
                if (k == e.DOWN || k == e.PAGEDOWN) {
                    increment *= -1;
                }
                pageNum += increment;
                if (pageNum >= 1 && pageNum <= pageData.pages) {
                    field.setValue(pageNum);
                }
            }
        }
    },

    // private
    beforeLoad : function(){
        if(this.rendered && this.refresh){
            this.refresh.disable();
        }
    },

    // private
    doLoad : function(start){
        if(this.fireEvent('beforechange', this, o) !== false){
            this.store.load();
        }
    },

    /**
     * Move to the first page, has the same effect as clicking the 'first' button.
     */
    moveFirst : function(){
        var me = this;
        if(me.fireEvent('beforechange', me, 1) !== false){
            me.store.loadPage(1);
        }
    },

    /**
     * Move to the previous page, has the same effect as clicking the 'previous' button.
     */
    movePrevious : function(){
        var me = this,
            prev = me.store.currentPage - 1;
        
        if(me.fireEvent('beforechange', me, prev) !== false){
            me.store.previousPage();
        }
    },

    /**
     * Move to the next page, has the same effect as clicking the 'next' button.
     */
    moveNext : function(){
        var me = this;        
        if(me.fireEvent('beforechange', me, me.store.currentPage + 1) !== false){
            me.store.nextPage();
        }
    },

    /**
     * Move to the last page, has the same effect as clicking the 'last' button.
     */
    moveLast : function(){
        var me = this, 
            last = this.getPageData().pageCount;
        
        if(me.fireEvent('beforechange', me, last) !== false){
            me.store.loadPage(last);
        }
    },

    /**
     * Refresh the current page, has the same effect as clicking the 'refresh' button.
     */
    doRefresh : function(){
        var me = this,
            current = me.store.currentPage;
        
        if(me.fireEvent('beforechange', me, current) !== false){
            me.store.loadPage(current);
        }
    },

    /**
     * Binds the paging toolbar to the specified {@link Ext.data.Store}
     * @param {Store} store The store to bind to this toolbar
     * @param {Boolean} initial (Optional) true to not remove listeners
     */
    bindStore : function(store, initial){
        var me = this;
        
        if (!initial && me.store) {
            if(store !== me.store && me.store.autoDestroy){
                me.store.destroy();
            }else{
                me.store.un('beforeload', me.beforeLoad, me);
                me.store.un('load', me.onLoad, me);
                me.store.un('exception', me.onLoadError, me);
            }
            if(!store){
                me.store = null;
            }
        }
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
            store.on({
                scope: me,
                beforeload: me.beforeLoad,
                load: me.onLoad,
                exception: me.onLoadError
            });
        }
        me.store = store;
    },

    /**
     * Unbinds the paging toolbar from the specified {@link Ext.data.Store} <b>(deprecated)</b>
     * @param {Ext.data.Store} store The data store to unbind
     */
    unbind : function(store){
        this.bindStore(null);
    },

    /**
     * Binds the paging toolbar to the specified {@link Ext.data.Store} <b>(deprecated)</b>
     * @param {Ext.data.Store} store The data store to bind
     */
    bind : function(store){
        this.bindStore(store);
    },

    // private
    onDestroy : function(){
        this.bindStore(null);
        this.callParent();
    }
});
