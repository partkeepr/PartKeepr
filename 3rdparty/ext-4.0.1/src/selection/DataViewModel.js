/**
 * @class Ext.selection.DataViewModel
 * @ignore
 */
Ext.define('Ext.selection.DataViewModel', {
    extend: 'Ext.selection.Model',
    
    requires: ['Ext.util.KeyNav'],

    deselectOnContainerClick: true,
    
    /**
     * @cfg {Boolean} enableKeyNav
     * 
     * Turns on/off keyboard navigation within the DataView. Defaults to true.
     */
    enableKeyNav: true,
    
    constructor: function(cfg){
        this.addEvents(
            /**
             * @event deselect
             * Fired after a record is deselected
             * @param {Ext.selection.DataViewModel} this
             * @param  {Ext.data.Model} record The deselected record
             */
            'deselect',
            
            /**
             * @event select
             * Fired after a record is selected
             * @param {Ext.selection.DataViewModel} this
             * @param  {Ext.data.Model} record The selected record
             */
            'select'
        );
        this.callParent(arguments);
    },
    
    bindComponent: function(view) {
        var me = this,
            eventListeners = {
                refresh: me.refresh,
                scope: me
            };

        me.view = view;
        me.bind(view.getStore());

        view.on(view.triggerEvent, me.onItemClick, me);
        view.on(view.triggerCtEvent, me.onContainerClick, me);

        view.on(eventListeners);

        if (me.enableKeyNav) {
            me.initKeyNav(view);
        }
    },

    onItemClick: function(view, record, item, index, e) {
        this.selectWithEvent(record, e);
    },

    onContainerClick: function() {
        if (this.deselectOnContainerClick) {
            this.deselectAll();
        }
    },
    
    initKeyNav: function(view) {
        var me = this;
        
        if (!view.rendered) {
            view.on('render', Ext.Function.bind(me.initKeyNav, me, [view], 0), me, {single: true});
            return;
        }
        
        view.el.set({
            tabIndex: -1
        });
        me.keyNav = Ext.create('Ext.util.KeyNav', view.el, {
            down: Ext.pass(me.onNavKey, [1], me),
            right: Ext.pass(me.onNavKey, [1], me),
            left: Ext.pass(me.onNavKey, [-1], me),
            up: Ext.pass(me.onNavKey, [-1], me),
            scope: me
        });
    },
    
    onNavKey: function(step) {
        step = step || 1;
        var me = this,
            view = me.view,
            selected = me.getSelection()[0],
            numRecords = me.view.store.getCount(),
            idx;
                
        if (selected) {
            idx = view.indexOf(view.getNode(selected)) + step;
        } else {
            idx = 0;
        }
        
        if (idx < 0) {
            idx = numRecords - 1;
        } else if (idx >= numRecords) {
            idx = 0;
        }
        
        me.select(idx);
    },

    // Allow the DataView to update the ui
    onSelectChange: function(record, isSelected, suppressEvent) {
        var me = this,
            view = me.view,
            allowSelect = true;
        
        if (isSelected) {
            if (!suppressEvent) {
                allowSelect = me.fireEvent('beforeselect', me, record) !== false;
            }
            if (allowSelect) {
                view.onItemSelect(record);
                if (!suppressEvent) {
                    me.fireEvent('select', me, record);
                }
            }
        } else {
            view.onItemDeselect(record);
            if (!suppressEvent) {
                me.fireEvent('deselect', me, record);
            }
        }
    }
});
