/**
 * @class Ext.AbstractPlugin
 * @extends Object
 *
 * Plugins are injected 
 */
Ext.define('Ext.AbstractPlugin', {
    disabled: false,
    
    constructor: function(config) {
        //<debug>
        if (!config.cmp && Ext.global.console) {
            Ext.global.console.warn("Attempted to attach a plugin ");
        }
        //</debug>
        Ext.apply(this, config);
    },
    
    getCmp: function() {
        return this.cmp;
    },

    /**
     * The init method is invoked after initComponent has been run for the
     * component which we are injecting the plugin into.
     * @method
     */
    init: Ext.emptyFn,

    /**
     * The destroy method is invoked by the owning Component at the time the Component is being destroyed.
     * Use this method to clean up an resources.
     * @method
     */
    destroy: Ext.emptyFn,

    /**
     * Enable the plugin and set the disabled flag to false.
     */
    enable: function() {
        this.disabled = false;
    },

    /**
     * Disable the plugin and set the disabled flag to true.
     */
    disable: function() {
        this.disabled = true;
    }
});
