/**
 * Component layout for tabs
 * @class Ext.layout.component.Tab
 * @extends Ext.layout.component.Button
 * @private
 */
Ext.define('Ext.layout.component.Tab', {

    alias: ['layout.tab'],

    extend: 'Ext.layout.component.Button',

    //type: 'button',

    beforeLayout: function() {
        var me = this, dirty = me.lastClosable !== me.owner.closable;

        if (dirty) {
            delete me.adjWidth;
        }

        return this.callParent(arguments) || dirty;
    },

    onLayout: function () {
        var me = this;

        me.callParent(arguments);

        me.lastClosable = me.owner.closable;
    }
});