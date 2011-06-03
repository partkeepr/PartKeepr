/**
* @class Ext.layout.container.Container
* @extends Ext.layout.container.AbstractContainer
* @private
* <p>This class is intended to be extended or created via the <tt><b>{@link Ext.container.Container#layout layout}</b></tt>
* configuration property.  See <tt><b>{@link Ext.container.Container#layout}</b></tt> for additional details.</p>
*/
Ext.define('Ext.layout.container.Container', {

    /* Begin Definitions */

    extend: 'Ext.layout.container.AbstractContainer',
    alternateClassName: 'Ext.layout.ContainerLayout',
    
    /* End Definitions */

    layoutItem: function(item, box) {
        box = box || {};
        if (item.componentLayout.initialized !== true) {
            this.setItemSize(item, box.width || item.width || undefined, box.height || item.height || undefined);
            // item.doComponentLayout(box.width || item.width || undefined, box.height || item.height || undefined);
        }
    },

    getLayoutTargetSize : function() {
        var target = this.getTarget(),
            ret;

        if (target) {
            ret = target.getViewSize();

            // IE in will sometimes return a width of 0 on the 1st pass of getViewSize.
            // Use getStyleSize to verify the 0 width, the adjustment pass will then work properly
            // with getViewSize
            if (Ext.isIE && ret.width == 0){
                ret = target.getStyleSize();
            }

            ret.width -= target.getPadding('lr');
            ret.height -= target.getPadding('tb');
        }
        return ret;
    },

    beforeLayout: function() {
        if (this.owner.beforeLayout(arguments) !== false) {
            return this.callParent(arguments);
        }
        else {
            return false;
        }
    },

    afterLayout: function() {
        this.owner.afterLayout(arguments);
        this.callParent(arguments);
    },

    /**
     * @protected
     * Returns all items that are rendered
     * @return {Array} All matching items
     */
    getRenderedItems: function() {
        var me = this,
            target = me.getTarget(),
            items = me.getLayoutItems(),
            ln = items.length,
            renderedItems = [],
            i, item;

        for (i = 0; i < ln; i++) {
            item = items[i];
            if (item.rendered && me.isValidParent(item, target, i)) {
                renderedItems.push(item);
            }
        }

        return renderedItems;
    },

    /**
     * @protected
     * Returns all items that are both rendered and visible
     * @return {Array} All matching items
     */
    getVisibleItems: function() {
        var target   = this.getTarget(),
            items = this.getLayoutItems(),
            ln = items.length,
            visibleItems = [],
            i, item;

        for (i = 0; i < ln; i++) {
            item = items[i];
            if (item.rendered && this.isValidParent(item, target, i) && item.hidden !== true) {
                visibleItems.push(item);
            }
        }

        return visibleItems;
    }
});