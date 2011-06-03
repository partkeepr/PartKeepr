/**
 * @class Ext.resizer.Handle
 * @extends Ext.Component
 *
 * Provides a handle for 9-point resizing of Elements or Components.
 */
Ext.define('Ext.resizer.Handle', {
    extend: 'Ext.Component',
    handleCls: '',
    baseHandleCls: Ext.baseCSSPrefix + 'resizable-handle',
    // Ext.resizer.Resizer.prototype.possiblePositions define the regions
    // which will be passed in as a region configuration.
    region: '',

    onRender: function() {
        this.addCls(
            this.baseHandleCls,
            this.baseHandleCls + '-' + this.region,
            this.handleCls
        );
        this.callParent(arguments);
        this.el.unselectable();
    }
});
