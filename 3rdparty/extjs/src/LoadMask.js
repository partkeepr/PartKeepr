/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.LoadMask
 * A simple utility class for generically masking elements while loading data.  If the {@link #store}
 * config option is specified, the masking will be automatically synchronized with the store's loading
 * process and the mask element will be cached for reuse.
 * <p>Example usage:</p>
 * <pre><code>
// Basic mask:
var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
myMask.show();
</code></pre>

 */

Ext.define('Ext.LoadMask', {

    /* Begin Definitions */

    mixins: {
        observable: 'Ext.util.Observable'
    },

    requires: ['Ext.data.StoreManager'],

    /* End Definitions */

    /**
     * @cfg {Ext.data.Store} store
     * Optional Store to which the mask is bound. The mask is displayed when a load request is issued, and
     * hidden on either load success, or load fail.
     */

    /**
     * @cfg {String} msg
     * The text to display in a centered loading message box (defaults to 'Loading...')
     */
    msg : 'Loading...',
    /**
     * @cfg {String} msgCls
     * The CSS class to apply to the loading message element (defaults to "x-mask-loading")
     */
    msgCls : Ext.baseCSSPrefix + 'mask-loading',
    
    /**
     * @cfg {Boolean} useMsg
     * Whether or not to use a loading message class or simply mask the bound element.
     */
    useMsg: true,

    /**
     * Read-only. True if the mask is currently disabled so that it will not be displayed (defaults to false)
     * @type Boolean
     */
    disabled: false,

    /**
     * Creates new LoadMask.
     * @param {Mixed} el The element, element ID, or DOM node you wish to mask.
     * Also, may be a Component who's element you wish to mask.
     * @param {Object} config (optional) The config object
     */
    constructor : function(el, config) {
        var me = this;

        if (el.isComponent) {
            me.bindComponent(el);
        } else {
            me.el = Ext.get(el);
        }
        Ext.apply(me, config);

        me.addEvents('beforeshow', 'show', 'hide');
        if (me.store) {
            me.bindStore(me.store, true);
        }
        me.mixins.observable.constructor.call(me, config);
    },

    bindComponent: function(comp) {
        var me = this,
            listeners = {
                resize: me.onComponentResize,
                scope: me
            };

        if (comp.el) {
            me.onComponentRender(comp);
        } else {
            listeners.render = {
                fn: me.onComponentRender,
                scope: me,
                single: true
            };
        }
        me.mon(comp, listeners);
    },

    /**
     * @private
     * Called if we were configured with a Component, and that Component was not yet rendered. Collects the element to mask.
     */
    onComponentRender: function(comp) {
        this.el = comp.getContentTarget();
    },

    /**
     * @private
     * Called when this LoadMask's Component is resized. The isMasked method also re-centers any displayed message.
     */
    onComponentResize: function(comp, w, h) {
        this.el.isMasked();
    },

    /**
     * Changes the data store bound to this LoadMask.
     * @param {Store} store The store to bind to this LoadMask
     */
    bindStore : function(store, initial) {
        var me = this;

        if (!initial && me.store) {
            me.mun(me.store, {
                scope: me,
                beforeload: me.onBeforeLoad,
                load: me.onLoad,
                exception: me.onLoad
            });
            if(!store) {
                me.store = null;
            }
        }
        if (store) {
            store = Ext.data.StoreManager.lookup(store);
            me.mon(store, {
                scope: me,
                beforeload: me.onBeforeLoad,
                load: me.onLoad,
                exception: me.onLoad
            });

        }
        me.store = store;
        if (store && store.isLoading()) {
            me.onBeforeLoad();
        }
    },

    /**
     * Disables the mask to prevent it from being displayed
     */
    disable : function() {
        var me = this;

       me.disabled = true;
       if (me.loading) {
           me.onLoad();
       }
    },

    /**
     * Enables the mask so that it can be displayed
     */
    enable : function() {
        this.disabled = false;
    },

    /**
     * Method to determine whether this LoadMask is currently disabled.
     * @return {Boolean} the disabled state of this LoadMask.
     */
    isDisabled : function() {
        return this.disabled;
    },

    // private
    onLoad : function() {
        var me = this;

        me.loading = false;
        me.el.unmask();
        me.fireEvent('hide', me, me.el, me.store);
    },

    // private
    onBeforeLoad : function() {
        var me = this;

        if (!me.disabled && !me.loading && me.fireEvent('beforeshow', me, me.el, me.store) !== false) {
            if (me.useMsg) {
                me.el.mask(me.msg, me.msgCls, false);
            } else {
                me.el.mask();
            }
            
            me.fireEvent('show', me, me.el, me.store);
            me.loading = true;
        }
    },

    /**
     * Show this LoadMask over the configured Element.
     */
    show: function() {
        this.onBeforeLoad();
    },

    /**
     * Hide this LoadMask.
     */
    hide: function() {
        this.onLoad();
    },

    // private
    destroy : function() {
        this.hide();
        this.clearListeners();
    }
});

