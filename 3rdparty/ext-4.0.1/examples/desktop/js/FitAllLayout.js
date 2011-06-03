/*!
 * Ext JS Library 4.0
 * Copyright(c) 2006-2011 Sencha Inc.
 * licensing@sencha.com
 * http://www.sencha.com/license
 */

/**
 * @class Ext.ux.desktop.FitAllLayout
 * @extends Ext.layout.container.AbstractFit
 * <p>This layout applies a "fit" layout to all items, overlaying them on top of each
 * other.</p>
 */
Ext.define('Ext.ux.desktop.FitAllLayout', {
    extend: 'Ext.layout.container.AbstractFit',
    alias: 'layout.fitall',

    // @private
    onLayout : function() {
        var me = this;
        me.callParent();

        var size = me.getLayoutTargetSize();

        me.owner.items.each(function (item) {
            me.setItemBox(item, size);
        });
    },

    getTargetBox : function() {
        return this.getLayoutTargetSize();
    },

    setItemBox : function(item, box) {
        var me = this;
        if (item && box.height > 0) {
            if (me.isManaged('width') === true) {
               box.width = undefined;
            }
            if (me.isManaged('height') === true) {
               box.height = undefined;
            }

            item.getEl().position('absolute', null, 0, 0);
            me.setItemSize(item, box.width, box.height);
        }
    }
});
