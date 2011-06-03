/**
 * @class Ext.panel.Table
 * @extends Ext.panel.Panel
 * @xtype tablepanel
 * @private
 * @author Nicolas Ferrero
 * TablePanel is a private class and the basis of both TreePanel and GridPanel.
 *
 * TablePanel aggregates:
 *
 *  - a Selection Model
 *  - a View
 *  - a Store
 *  - Scrollers
 *  - Ext.grid.header.Container
 *
 */
Ext.define('Ext.panel.Table', {
    extend: 'Ext.panel.Panel',

    alias: 'widget.tablepanel',

    uses: [
        'Ext.selection.RowModel',
        'Ext.grid.Scroller',
        'Ext.grid.header.Container',
        'Ext.grid.Lockable'
    ],

    cls: Ext.baseCSSPrefix + 'grid',
    extraBodyCls: Ext.baseCSSPrefix + 'grid-body',

    layout: 'fit',
    /**
     * Boolean to indicate that a view has been injected into the panel.
     * @property hasView
     */
    hasView: false,

    // each panel should dictate what viewType and selType to use
    viewType: null,
    selType: 'rowmodel',

    /**
     * @cfg {Number} scrollDelta
     * Number of pixels to scroll when scrolling with mousewheel.
     * Defaults to 40.
     */
    scrollDelta: 40,

    /**
     * @cfg {String/Boolean} scroll
     * Valid values are 'both', 'horizontal' or 'vertical'. true implies 'both'. false implies 'none'.
     * Defaults to true.
     */
    scroll: true,

    /**
     * @cfg {Array} columns
     * An array of {@link Ext.grid.column.Column column} definition objects which define all columns that appear in this grid. Each
     * column definition provides the header text for the column, and a definition of where the data for that column comes from.
     */

    /**
     * @cfg {Boolean} forceFit
     * Specify as <code>true</code> to force the columns to fit into the available width. Headers are first sized according to configuration, whether that be
     * a specific width, or flex. Then they are all proportionally changed in width so that the entire content width is used..
     */

    /**
     * @cfg {Boolean} hideHeaders
     * Specify as <code>true</code> to hide the headers.
     */

    /**
     * @cfg {Boolean} sortableColumns
     * Defaults to true. Set to false to disable column sorting via clicking the
     * header and via the Sorting menu items.
     */
    sortableColumns: true,

    verticalScrollDock: 'right',
    verticalScrollerType: 'gridscroller',

    horizontalScrollerPresentCls: Ext.baseCSSPrefix + 'horizontal-scroller-present',
    verticalScrollerPresentCls: Ext.baseCSSPrefix + 'vertical-scroller-present',

    // private property used to determine where to go down to find views
    // this is here to support locking.
    scrollerOwner: true,

    invalidateScrollerOnRefresh: true,
    
    enableColumnMove: true,
    enableColumnResize: true,


    initComponent: function() {
        //<debug>
        if (!this.viewType) {
            Ext.Error.raise("You must specify a viewType config.");
        }
        if (!this.store) {
            Ext.Error.raise("You must specify a store config");
        }
        if (this.headers) {
            Ext.Error.raise("The headers config is not supported. Please specify columns instead.");
        }
        //</debug>

        var me          = this,
            scroll      = me.scroll,
            vertical    = false,
            horizontal  = false,
            headerCtCfg = me.columns || me.colModel,
            i           = 0,
            view,
            border = me.border;

        // Set our determinScrollbars method to reference a buffered call to determinScrollbars which fires on a 30ms buffer.
        me.determineScrollbars = Ext.Function.createBuffered(me.determineScrollbars, 30);
        me.invalidateScroller = Ext.Function.createBuffered(me.invalidateScroller, 30);
        me.injectView = Ext.Function.createBuffered(me.injectView, 30);

        if (me.hideHeaders) {
            border = false;
        }

        // The columns/colModel config may be either a fully instantiated HeaderContainer, or an array of Column definitions, or a config object of a HeaderContainer
        // Either way, we extract a columns property referencing an array of Column definitions.
        if (headerCtCfg instanceof Ext.grid.header.Container) {
            me.headerCt = headerCtCfg;
            me.headerCt.border = border;
            me.columns = me.headerCt.items.items;
        } else {
            if (Ext.isArray(headerCtCfg)) {
                headerCtCfg = {
                    items: headerCtCfg,
                    border: border
                };
            }
            Ext.apply(headerCtCfg, {
                forceFit: me.forceFit,
                sortable: me.sortableColumns,
                enableColumnMove: me.enableColumnMove,
                enableColumnResize: me.enableColumnResize,
                border:  border
            });
            me.columns = headerCtCfg.items;

             // If any of the Column objects contain a locked property, and are not processed, this is a lockable TablePanel, a
             // special view will be injected by the Ext.grid.Lockable mixin, so no processing of .
             if (Ext.ComponentQuery.query('{locked !== undefined}{processed != true}', me.columns).length) {
                 me.self.mixin('lockable', Ext.grid.Lockable);
                 me.injectLockable();
             }
        }

        me.store = Ext.data.StoreManager.lookup(me.store);
        me.addEvents(
            /**
             * @event scrollerhide
             * Fires when a scroller is hidden
             * @param {Ext.grid.Scroller} scroller
             * @param {String} orientation Orientation, can be 'vertical' or 'horizontal'
             */
            'scrollerhide',
            /**
             * @event scrollershow
             * Fires when a scroller is shown
             * @param {Ext.grid.Scroller} scroller
             * @param {String} orientation Orientation, can be 'vertical' or 'horizontal'
             */
            'scrollershow'
        );

        me.bodyCls = me.bodyCls || '';
        me.bodyCls += (' ' + me.extraBodyCls);

        // autoScroll is not a valid configuration
        delete me.autoScroll;

        // If this TablePanel is lockable (Either configured lockable, or any of the defined columns has a 'locked' property)
        // than a special lockable view containing 2 side-by-side grids will have been injected so we do not need to set up any UI.
        if (!me.hasView) {

            // If we were not configured with a ready-made headerCt (either by direct config with a headerCt property, or by passing
            // a HeaderContainer instance as the 'columns' property, then go ahead and create one from the config object created above.
            if (!me.headerCt) {
                me.headerCt = Ext.create('Ext.grid.header.Container', headerCtCfg);
            }

            // Extract the array of Column objects
            me.columns = me.headerCt.items.items;

            if (me.hideHeaders) {
                me.headerCt.height = 0;
                me.headerCt.border = false;
                me.headerCt.addCls(Ext.baseCSSPrefix + 'grid-header-ct-hidden');
                me.addCls(Ext.baseCSSPrefix + 'grid-header-hidden');
                // IE Quirks Mode fix
                // If hidden configuration option was used, several layout calculations will be bypassed.
                if (Ext.isIEQuirks) {
                    me.headerCt.style = {
                        display: 'none'
                    };
                }
            }

            // turn both on.
            if (scroll === true || scroll === 'both') {
                vertical = horizontal = true;
            } else if (scroll === 'horizontal') {
                horizontal = true;
            } else if (scroll === 'vertical') {
                vertical = true;
            // All other values become 'none' or false.
            } else {
                me.headerCt.availableSpaceOffset = 0;
            }

            if (vertical) {
                me.verticalScroller = me.verticalScroller || {};
                Ext.applyIf(me.verticalScroller, {
                    dock: me.verticalScrollDock,
                    xtype: me.verticalScrollerType,
                    store: me.store
                });
                me.verticalScroller = Ext.ComponentManager.create(me.verticalScroller);
                me.mon(me.verticalScroller, {
                    bodyscroll: me.onVerticalScroll,
                    scope: me
                });
            }

            if (horizontal) {
                me.horizontalScroller = Ext.ComponentManager.create({
                    xtype: 'gridscroller',
                    section: me,
                    dock: 'bottom',
                    store: me.store
                });
                me.mon(me.horizontalScroller, {
                    bodyscroll: me.onHorizontalScroll,
                    scope: me
                });
            }

            me.headerCt.on('columnresize', me.onHeaderResize, me);
            me.relayEvents(me.headerCt, ['columnresize', 'columnmove', 'columnhide', 'columnshow', 'sortchange']);
            me.features = me.features || [];
            me.dockedItems = me.dockedItems || [];
            me.dockedItems.unshift(me.headerCt);
            me.viewConfig = me.viewConfig || {};
            me.viewConfig.invalidateScrollerOnRefresh = me.invalidateScrollerOnRefresh;

            // AbstractDataView will look up a Store configured as an object
            // getView converts viewConfig into a View instance
            view = me.getView();

            if (view) {
                me.mon(view.store, {
                    load: me.onStoreLoad,
                    scope: me
                });
                me.mon(view, {
                    refresh: {
                        fn: this.onViewRefresh,
                        scope: me,
                        buffer: 50
                    },
                    itemupdate: me.onViewItemUpdate,
                    scope: me
                });
                this.relayEvents(view, [
                    /**
                     * @event beforeitemmousedown
                     * Fires before the mousedown event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemmousedown',
                    /**
                     * @event beforeitemmouseup
                     * Fires before the mouseup event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemmouseup',
                    /**
                     * @event beforeitemmouseenter
                     * Fires before the mouseenter event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemmouseenter',
                    /**
                     * @event beforeitemmouseleave
                     * Fires before the mouseleave event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemmouseleave',
                    /**
                     * @event beforeitemclick
                     * Fires before the click event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemclick',
                    /**
                     * @event beforeitemdblclick
                     * Fires before the dblclick event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemdblclick',
                    /**
                     * @event beforeitemcontextmenu
                     * Fires before the contextmenu event on an item is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforeitemcontextmenu',
                    /**
                     * @event itemmousedown
                     * Fires when there is a mouse down on an item
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemmousedown',
                    /**
                     * @event itemmouseup
                     * Fires when there is a mouse up on an item
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemmouseup',
                    /**
                     * @event itemmouseenter
                     * Fires when the mouse enters an item.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemmouseenter',
                    /**
                     * @event itemmouseleave
                     * Fires when the mouse leaves an item.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemmouseleave',
                    /**
                     * @event itemclick
                     * Fires when an item is clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemclick',
                    /**
                     * @event itemdblclick
                     * Fires when an item is double clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemdblclick',
                    /**
                     * @event itemcontextmenu
                     * Fires when an item is right clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.data.Model} record The record that belongs to the item
                     * @param {HTMLElement} item The item's element
                     * @param {Number} index The item's index
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'itemcontextmenu',
                    /**
                     * @event beforecontainermousedown
                     * Fires before the mousedown event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainermousedown',
                    /**
                     * @event beforecontainermouseup
                     * Fires before the mouseup event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainermouseup',
                    /**
                     * @event beforecontainermouseover
                     * Fires before the mouseover event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainermouseover',
                    /**
                     * @event beforecontainermouseout
                     * Fires before the mouseout event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainermouseout',
                    /**
                     * @event beforecontainerclick
                     * Fires before the click event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainerclick',
                    /**
                     * @event beforecontainerdblclick
                     * Fires before the dblclick event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainerdblclick',
                    /**
                     * @event beforecontainercontextmenu
                     * Fires before the contextmenu event on the container is processed. Returns false to cancel the default action.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'beforecontainercontextmenu',
                    /**
                     * @event containermouseup
                     * Fires when there is a mouse up on the container
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containermouseup',
                    /**
                     * @event containermouseover
                     * Fires when you move the mouse over the container.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containermouseover',
                    /**
                     * @event containermouseout
                     * Fires when you move the mouse out of the container.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containermouseout',
                    /**
                     * @event containerclick
                     * Fires when the container is clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containerclick',
                    /**
                     * @event containerdblclick
                     * Fires when the container is double clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containerdblclick',
                    /**
                     * @event containercontextmenu
                     * Fires when the container is right clicked.
                     * @param {Ext.view.View} this
                     * @param {Ext.EventObject} e The raw event object
                     */
                    'containercontextmenu',

                    /**
                     * @event selectionchange
                     * Fires when the selected nodes change. Relayed event from the underlying selection model.
                     * @param {Ext.view.View} this
                     * @param {Array} selections Array of the selected nodes
                     */
                    'selectionchange',
                    /**
                     * @event beforeselect
                     * Fires before a selection is made. If any handlers return false, the selection is cancelled.
                     * @param {Ext.view.View} this
                     * @param {HTMLElement} node The node to be selected
                     * @param {Array} selections Array of currently selected nodes
                     */
                    'beforeselect'
                ]);
            }
        }
        me.callParent(arguments);
    },

    // state management
    initStateEvents: function(){
        var events = this.stateEvents;
        // push on stateEvents if they don't exist
        Ext.each(['columnresize', 'columnmove', 'columnhide', 'columnshow', 'sortchange'], function(event){
            if (Ext.Array.indexOf(events, event)) {
                events.push(event);
            }
        });
        this.callParent();
    },

    getState: function(){
        var state = {
            columns: []
        },
        sorter = this.store.sorters.first();

        this.headerCt.items.each(function(header){
            state.columns.push({
                id: header.headerId,
                width: header.flex ? undefined : header.width,
                hidden: header.hidden,
                sortable: header.sortable
            });
        });

        if (sorter) {
            state.sort = {
                property: sorter.property,
                direction: sorter.direction
            };
        }
        return state;
    },

    applyState: function(state) {
        var headers = state.columns,
            length = headers ? headers.length : 0,
            headerCt = this.headerCt,
            items = headerCt.items,
            sorter = state.sort,
            store = this.store,
            i = 0,
            index,
            headerState,
            header;

        for (; i < length; ++i) {
            headerState = headers[i];
            header = headerCt.down('gridcolumn[headerId=' + headerState.id + ']');
            index = items.indexOf(header);
            if (i !== index) {
                headerCt.moveHeader(index, i);
            }
            header.sortable = headerState.sortable;
            if (Ext.isDefined(headerState.width)) {
                delete header.flex;
                if (header.rendered) {
                    header.setWidth(headerState.width);
                } else {
                    header.minWidth = header.width = headerState.width;
                }
            }
            header.hidden = headerState.hidden;
        }

        if (sorter) {
            if (store.remoteSort) {
                store.sorters.add(Ext.create('Ext.util.Sorter', {
                    property: sorter.property,
                    direction: sorter.direction
                }));
            }
            else {
                store.sort(sorter.property, sorter.direction);
            }
        }
    },

    /**
     * Returns the store associated with this Panel.
     * @return {Ext.data.Store} The store
     */
    getStore: function(){
        return this.store;
    },

    /**
     * Gets the view for this panel.
     * @return {Ext.view.Table}
     */
    getView: function() {
        var me = this,
            sm;

        if (!me.view) {
            sm = me.getSelectionModel();
            me.view = me.createComponent(Ext.apply({}, me.viewConfig, {
                xtype: me.viewType,
                store: me.store,
                headerCt: me.headerCt,
                selModel: sm,
                features: me.features,
                panel: me
            }));
            me.mon(me.view, {
                uievent: me.processEvent,
                scope: me
            });
            sm.view = me.view;
            me.headerCt.view = me.view;
            me.relayEvents(me.view, ['cellclick', 'celldblclick']);
        }
        return me.view;
    },

    /**
     * @private
     * @override
     * autoScroll is never valid for all classes which extend TablePanel.
     */
    setAutoScroll: Ext.emptyFn,

    // This method hijacks Ext.view.Table's el scroll method.
    // This enables us to keep the virtualized scrollbars in sync
    // with the view. It currently does NOT support animation.
    elScroll: function(direction, distance, animate) {
        var me = this,
            scroller;

        if (direction === "up" || direction === "left") {
            distance = -distance;
        }

        if (direction === "down" || direction === "up") {
            scroller = me.getVerticalScroller();
            scroller.scrollByDeltaY(distance);
        } else {
            scroller = me.getHorizontalScroller();
            scroller.scrollByDeltaX(distance);
        }
    },
    
    afterLayout: function() {
        this.callParent(arguments);
        this.injectView();
    },
    

    /**
     * @private
     * Called after this Component has achieved its correct initial size, after all layouts have done their thing.
     * This is so we can add the View only after the initial size is known. This method is buffered 30ms.
     */
    injectView: function() {
        if (!this.hasView && !this.collapsed) {
            var me   = this,
                view = me.getView();

            me.hasView = true;
            me.add(view);

            // hijack the view el's scroll method
            view.el.scroll = Ext.Function.bind(me.elScroll, me);
            // We use to listen to document.body wheel events, but that's a
            // little much. We scope just to the view now.
            me.mon(view.el, {
                mousewheel: me.onMouseWheel,
                scope: me
            });
        }
    },

    afterExpand: function() {
        this.callParent(arguments);
        if (!this.hasView) {
            this.injectView();
        }
    },

    /**
     * @private
     * Process UI events from the view. Propagate them to whatever internal Components need to process them
     * @param {String} type Event type, eg 'click'
     * @param {TableView} view TableView Component
     * @param {HtmlElement} cell Cell HtmlElement the event took place within
     * @param {Number} recordIndex Index of the associated Store Model (-1 if none)
     * @param {Number} cellIndex Cell index within the row
     * @param {EventObject} e Original event
     */
    processEvent: function(type, view, cell, recordIndex, cellIndex, e) {
        var me = this,
            header;

        if (cellIndex !== -1) {
            header = me.headerCt.getGridColumns()[cellIndex];
            return header.processEvent.apply(header, arguments);
        }
    },

    /**
     * Request a recalculation of scrollbars and put them in if they are needed.
     */
    determineScrollbars: function() {
        var me = this,
            viewElDom,
            centerScrollWidth,
            centerClientWidth,
            scrollHeight,
            clientHeight;

        if (!me.collapsed && me.view && me.view.el) {
            viewElDom = me.view.el.dom;
            //centerScrollWidth = viewElDom.scrollWidth;
            centerScrollWidth = me.headerCt.getFullWidth();
            /**
             * clientWidth often returns 0 in IE resulting in an
             * infinity result, here we use offsetWidth bc there are
             * no possible scrollbars and we don't care about margins
             */
            centerClientWidth = viewElDom.offsetWidth;
            if (me.verticalScroller && me.verticalScroller.el) {
                scrollHeight = me.verticalScroller.getSizeCalculation().height;
            } else {
                scrollHeight = viewElDom.scrollHeight;
            }

            clientHeight = viewElDom.clientHeight;

            me.suspendLayout = true;
            me.scrollbarChanged = false;
            if (!me.collapsed && scrollHeight > clientHeight) {
                me.showVerticalScroller();
            } else {
                me.hideVerticalScroller();
            }

            if (!me.collapsed && centerScrollWidth > (centerClientWidth + Ext.getScrollBarWidth() - 2)) {
                me.showHorizontalScroller();
            } else {
                me.hideHorizontalScroller();
            }
            me.suspendLayout = false;
            if (me.scrollbarChanged) {
                me.doComponentLayout();
            }
        }
    },

    onHeaderResize: function() {
        if (this.view && this.view.rendered) {
            this.determineScrollbars();
            this.invalidateScroller();
        }
    },

    /**
     * Hide the verticalScroller and remove the horizontalScrollerPresentCls.
     */
    hideHorizontalScroller: function() {
        var me = this;

        if (me.horizontalScroller && me.horizontalScroller.ownerCt === me) {
            me.scrollbarChanged = true;
            me.verticalScroller.offsets.bottom = 0;
            me.removeDocked(me.horizontalScroller, false);
            me.removeCls(me.horizontalScrollerPresentCls);
            me.fireEvent('scrollerhide', me.horizontalScroller, 'horizontal');
        }

    },

    /**
     * Show the horizontalScroller and add the horizontalScrollerPresentCls.
     */
    showHorizontalScroller: function() {
        var me = this;

        if (me.verticalScroller) {
            me.verticalScroller.offsets.bottom = Ext.getScrollBarWidth() - 2;
        }
        if (me.horizontalScroller && me.horizontalScroller.ownerCt !== me) {
            me.scrollbarChanged = true;
            me.addDocked(me.horizontalScroller);
            me.addCls(me.horizontalScrollerPresentCls);
            me.fireEvent('scrollershow', me.horizontalScroller, 'horizontal');
        }
    },

    /**
     * Hide the verticalScroller and remove the verticalScrollerPresentCls.
     */
    hideVerticalScroller: function() {
        var me = this,
            headerCt = me.headerCt;

        // only trigger a layout when reserveOffset is changing
        if (headerCt && headerCt.layout.reserveOffset) {
            headerCt.layout.reserveOffset = false;
            headerCt.doLayout();
        }
        if (me.verticalScroller && me.verticalScroller.ownerCt === me) {
            me.scrollbarChanged = true;
            me.removeDocked(me.verticalScroller, false);
            me.removeCls(me.verticalScrollerPresentCls);
            me.fireEvent('scrollerhide', me.verticalScroller, 'vertical');
        }
    },

    /**
     * Show the verticalScroller and add the verticalScrollerPresentCls.
     */
    showVerticalScroller: function() {
        var me = this,
            headerCt = me.headerCt;

        // only trigger a layout when reserveOffset is changing
        if (headerCt && !headerCt.layout.reserveOffset) {
            headerCt.layout.reserveOffset = true;
            headerCt.doLayout();
        }
        if (me.verticalScroller && me.verticalScroller.ownerCt !== me) {
            me.scrollbarChanged = true;
            me.addDocked(me.verticalScroller);
            me.addCls(me.verticalScrollerPresentCls);
            me.fireEvent('scrollershow', me.verticalScroller, 'vertical');
        }
    },

    /**
     * Invalides scrollers that are present and forces a recalculation.
     * (Not related to showing/hiding the scrollers)
     */
    invalidateScroller: function() {
        var me = this,
            vScroll = me.verticalScroller,
            hScroll = me.horizontalScroller;

        if (vScroll) {
            vScroll.invalidate();
        }
        if (hScroll) {
            hScroll.invalidate();
        }
    },

    // refresh the view when a header moves
    onHeaderMove: function(headerCt, header, fromIdx, toIdx) {
        this.view.refresh();
    },

    // Section onHeaderHide is invoked after view.
    onHeaderHide: function(headerCt, header) {
        this.invalidateScroller();
    },

    onHeaderShow: function(headerCt, header) {
        this.invalidateScroller();
    },

    getVerticalScroller: function() {
        return this.getScrollerOwner().down('gridscroller[dock=' + this.verticalScrollDock + ']');
    },

    getHorizontalScroller: function() {
        return this.getScrollerOwner().down('gridscroller[dock=bottom]');
    },

    onMouseWheel: function(e) {
        var me = this,
            browserEvent = e.browserEvent,
            vertScroller = me.getVerticalScroller(),
            horizScroller = me.getHorizontalScroller(),
            scrollDelta = me.scrollDelta,
            deltaY, deltaX,
            vertScrollerEl, horizScrollerEl,
            vertScrollerElDom, horizScrollerElDom,
            horizontalCanScrollLeft, horizontalCanScrollRight,
            verticalCanScrollDown, verticalCanScrollUp;

        // calculate whether or not both scrollbars can scroll right/left and up/down
        if (horizScroller) {
            horizScrollerEl = horizScroller.el;
            if (horizScrollerEl) {
                horizScrollerElDom = horizScrollerEl.dom;
                horizontalCanScrollRight = horizScrollerElDom.scrollLeft !== horizScrollerElDom.scrollWidth - horizScrollerElDom.clientWidth;
                horizontalCanScrollLeft  = horizScrollerElDom.scrollLeft !== 0;
            }
        }
        if (vertScroller) {
            vertScrollerEl = vertScroller.el;
            if (vertScrollerEl) {
                vertScrollerElDom = vertScrollerEl.dom;
                verticalCanScrollDown = vertScrollerElDom.scrollTop !== vertScrollerElDom.scrollHeight - vertScrollerElDom.clientHeight;
                verticalCanScrollUp   = vertScrollerElDom.scrollTop !== 0;
            }
        }

        // Webkit Horizontal Axis
        if (browserEvent.wheelDeltaX || browserEvent.wheelDeltaY) {        
            deltaX = -browserEvent.wheelDeltaX / 120 * scrollDelta / 3;
            deltaY = -browserEvent.wheelDeltaY / 120 * scrollDelta / 3;
        } else {
            // Gecko Horizontal Axis
            if (browserEvent.axis && browserEvent.axis === 1) {
                deltaX = -(scrollDelta * e.getWheelDelta()) / 3;
            } else {
                deltaY = -(scrollDelta * e.getWheelDelta() / 3);
            }
        }
        
        if (horizScroller) {
            if ((deltaX < 0 && horizontalCanScrollLeft) || (deltaX > 0 && horizontalCanScrollRight)) {
                e.stopEvent();
                horizScroller.scrollByDeltaX(deltaX);
            }
        }
        if (vertScroller) {
            if ((deltaY < 0 && verticalCanScrollUp) || (deltaY > 0 && verticalCanScrollDown)) {
                e.stopEvent();
                vertScroller.scrollByDeltaY(deltaY);    
            }
        }
    },

    /**
     * @private
     * Determine and invalidate scrollers on view refresh
     */
    onViewRefresh: function() {
        if (Ext.isIE) {
            this.syncCellHeight();
        }
        this.determineScrollbars();
        if (this.invalidateScrollerOnRefresh) {
            this.invalidateScroller();
        }
    },

    onViewItemUpdate: function(record, index, tr) {
        if (Ext.isIE) {
            this.syncCellHeight([tr]);
        }
    },

    // BrowserBug: IE will not stretch the td to fit the height of the entire
    // tr, so manually sync cellheights on refresh and when an item has been
    // updated.
    syncCellHeight: function(trs) {
        var me    = this,
            i     = 0,
            tds,
            j, tdsLn,
            tr, td,
            trsLn,
            rowHeights = [],
            cellHeights,
            cellClsSelector = ('.' + Ext.baseCSSPrefix + 'grid-cell');

        trs   = trs || me.view.getNodes();
        
        trsLn = trs.length;
        // Reading loop
        for (; i < trsLn; i++) {
            tr = trs[i];
            tds = Ext.fly(tr).query(cellClsSelector);
            tdsLn = tds.length;
            cellHeights = [];
            for (j = 0; j < tdsLn; j++) {
                td = tds[j];
                cellHeights.push(td.clientHeight);
            }
            rowHeights.push(Ext.Array.max(cellHeights));
        }

        // Setting loop
        for (i = 0; i < trsLn; i++) {
            tr = trs[i];
            tdsLn = tr.childNodes.length;
            for (j = 0; j < tdsLn; j++) {
                td = Ext.fly(tr.childNodes[j]);
                if (rowHeights[i]) {
                    if (td.is(cellClsSelector)) {
                        td.setHeight(rowHeights[i]);
                    } else {
                        td.down(cellClsSelector).setHeight(rowHeights[i]);
                    }
                }
                
            }
        }
    },

    /**
     * Sets the scrollTop of the TablePanel.
     * @param {Number} deltaY
     */
    setScrollTop: function(top) {
        var me               = this,
            rootCmp          = me.getScrollerOwner(),
            verticalScroller = me.getVerticalScroller();

        rootCmp.virtualScrollTop = top;
        if (verticalScroller) {
            verticalScroller.setScrollTop(top);
        }

    },

    getScrollerOwner: function() {
        var rootCmp = this;
        if (!this.scrollerOwner) {
            rootCmp = this.up('[scrollerOwner]');
        }
        return rootCmp;
    },

    /**
     * Scrolls the TablePanel by deltaY
     * @param {Number} deltaY
     */
    scrollByDeltaY: function(deltaY) {
        var rootCmp = this.getScrollerOwner(),
            scrollerRight;
        scrollerRight = rootCmp.down('gridscroller[dock=' + this.verticalScrollDock + ']');
        if (scrollerRight) {
            scrollerRight.scrollByDeltaY(deltaY);
        }
    },


    /**
     * Scrolls the TablePanel by deltaX
     * @param {Number} deltaY
     */
    scrollByDeltaX: function(deltaX) {
        this.horizontalScroller.scrollByDeltaX(deltaX);
    },

    /**
     * Get left hand side marker for header resizing.
     * @private
     */
    getLhsMarker: function() {
        var me = this;

        if (!me.lhsMarker) {
            me.lhsMarker = Ext.core.DomHelper.append(me.el, {
                cls: Ext.baseCSSPrefix + 'grid-resize-marker'
            }, true);
        }
        return me.lhsMarker;
    },

    /**
     * Get right hand side marker for header resizing.
     * @private
     */
    getRhsMarker: function() {
        var me = this;

        if (!me.rhsMarker) {
            me.rhsMarker = Ext.core.DomHelper.append(me.el, {
                cls: Ext.baseCSSPrefix + 'grid-resize-marker'
            }, true);
        }
        return me.rhsMarker;
    },

    /**
     * Returns the selection model being used and creates it via the configuration
     * if it has not been created already.
     * @return {Ext.selection.Model} selModel
     */
    getSelectionModel: function(){
        if (!this.selModel) {
            this.selModel = {};
        }

        var mode = 'SINGLE',
            type;
        if (this.simpleSelect) {
            mode = 'SIMPLE';
        } else if (this.multiSelect) {
            mode = 'MULTI';
        }

        Ext.applyIf(this.selModel, {
            allowDeselect: this.allowDeselect,
            mode: mode
        });

        if (!this.selModel.events) {
            type = this.selModel.selType || this.selType;
            this.selModel = Ext.create('selection.' + type, this.selModel);
        }

        if (!this.selModel.hasRelaySetup) {
            this.relayEvents(this.selModel, ['selectionchange', 'select', 'deselect']);
            this.selModel.hasRelaySetup = true;
        }

        // lock the selection model if user
        // has disabled selection
        if (this.disableSelection) {
            this.selModel.locked = true;
        }
        return this.selModel;
    },

    onVerticalScroll: function(event, target) {
        var owner = this.getScrollerOwner(),
            items = owner.query('tableview'),
            i = 0,
            len = items.length;

        for (; i < len; i++) {
            items[i].el.dom.scrollTop = target.scrollTop;
        }
    },

    onHorizontalScroll: function(event, target) {
        var owner = this.getScrollerOwner(),
            items = owner.query('tableview'),
            i = 0,
            len = items.length,
            center,
            centerEl,
            centerScrollWidth,
            centerClientWidth,
            width;

        center = items[1] || items[0];
        centerEl = center.el.dom;
        centerScrollWidth = centerEl.scrollWidth;
        centerClientWidth = centerEl.offsetWidth;
        width = this.horizontalScroller.getWidth();

        centerEl.scrollLeft = target.scrollLeft;
        this.headerCt.el.dom.scrollLeft = target.scrollLeft;
    },

    // template method meant to be overriden
    onStoreLoad: Ext.emptyFn,

    getEditorParent: function() {
        return this.body;
    },

    bindStore: function(store) {
        var me = this;
        me.store = store;
        me.getView().bindStore(store);
    },

    reconfigure: function(store, columns) {
        var me = this;

        if (me.lockable) {
            me.reconfigureLockable(store, columns);
            return;
        }

        if (columns) {
            me.headerCt.removeAll();
            me.headerCt.add(columns);
        }
        if (store) {
            store = Ext.StoreManager.lookup(store);
            me.bindStore(store);
        } else {
            me.getView().refresh();
        }
    },
    
    afterComponentLayout: function() {
        var me = this;
        me.callParent(arguments);
        me.determineScrollbars();
        me.invalidateScroller();
    }
});