/**
 * @class Ext.layout.container.boxOverflow.None
 * @extends Object
 * @private
 * Base class for Box Layout overflow handlers. These specialized classes are invoked when a Box Layout
 * (either an HBox or a VBox) has child items that are either too wide (for HBox) or too tall (for VBox)
 * for its container.
 */
Ext.define('Ext.layout.container.boxOverflow.None', {
    
    alternateClassName: 'Ext.layout.boxOverflow.None',
    
    constructor: function(layout, config) {
        this.layout = layout;
        Ext.apply(this, config || {});
    },

    handleOverflow: Ext.emptyFn,

    clearOverflow: Ext.emptyFn,
    
    onRemove: Ext.emptyFn,

    /**
     * @private
     * Normalizes an item reference, string id or numerical index into a reference to the item
     * @param {Ext.Component|String|Number} item The item reference, id or index
     * @return {Ext.Component} The item
     */
    getItem: function(item) {
        return this.layout.owner.getComponent(item);
    },
    
    onRemove: Ext.emptyFn
});