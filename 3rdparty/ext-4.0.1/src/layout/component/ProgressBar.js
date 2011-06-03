/**
 * @class Ext.layout.component.ProgressBar
 * @extends Ext.layout.component.Component
 * @private
 */

Ext.define('Ext.layout.component.ProgressBar', {

    /* Begin Definitions */

    alias: ['layout.progressbar'],

    extend: 'Ext.layout.component.Component',

    /* End Definitions */

    type: 'progressbar',

    onLayout: function(width, height) {
        var me = this,
            owner = me.owner,
            textEl = owner.textEl;
        
        me.setElementSize(owner.el, width, height);
        textEl.setWidth(owner.el.getWidth(true));
        
        me.callParent([width, height]);
        
        owner.updateProgress(owner.value);
    }
});