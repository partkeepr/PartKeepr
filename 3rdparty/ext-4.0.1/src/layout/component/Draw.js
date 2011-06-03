/**
 * @class Ext.layout.component.Draw
 * @extends Ext.layout.component.Component
 * @private
 *
 */

Ext.define('Ext.layout.component.Draw', {

    /* Begin Definitions */

    alias: 'layout.draw',

    extend: 'Ext.layout.component.Auto',

    /* End Definitions */

    type: 'draw',

    onLayout : function(width, height) {
        this.owner.surface.setSize(width, height);
        this.callParent(arguments);
    }
});