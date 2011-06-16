/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.grid.ColumnLayout
 * @extends Ext.layout.container.HBox
 * @private
 *
 * <p>This class is used only by the grid's HeaderContainer docked child.</p>
 *
 * <p>This class adds the ability to shrink the vertical size of the inner container element back if a grouped
 * column header has all its child columns dragged out, and the whole HeaderContainer needs to shrink back down.</p>
 *
 * <p>It also enforces the grid's HeaderContainer's forceFit config by, after every calaculateChildBoxes call, converting
 * all pixel widths into flex values, so that propertions are maintained upon width change of the grid.</p>
 *
 * <p>Also, after every layout, after all headers have attained their 'stretchmax' height, it goes through and calls
 * <code>setPadding</code> on the columns so that they lay out correctly. TODO: implement a ColumnHeader component
 * layout which takes responsibility for this, and will run upon resize.</p>
 */
Ext.define('Ext.grid.ColumnLayout', {
    extend: 'Ext.layout.container.HBox',
    alias: 'layout.gridcolumn',
    type : 'column',

    reserveOffset: false,

    // Height-stretched innerCt must be able to revert back to unstretched height
    clearInnerCtOnLayout: false,

    beforeLayout: function() {
        var me = this,
            i = 0,
            items = me.getLayoutItems(),
            len = items.length,
            item, returnValue,
            s;

        // Scrollbar offset defined by width of any vertical scroller in the owning grid
        if (!Ext.isDefined(me.availableSpaceOffset)) {
            s = me.owner.up('tablepanel').verticalScroller;
            me.availableSpaceOffset = s ? s.width-1 : 0;
        }

        returnValue = me.callParent(arguments);

        // Size to a sane minimum height before possibly being stretched to accommodate grouped headers
        me.innerCt.setHeight(23);

        // Unstretch child items before the layout which stretches them.
        if (me.align == 'stretchmax') {
            for (; i < len; i++) {
                item = items[i];
                item.el.setStyle({
                    height: 'auto'
                });
                item.titleContainer.setStyle({
                    height: 'auto',
                    paddingTop: '0'
                });
                if (item.componentLayout && item.componentLayout.lastComponentSize) {
                    item.componentLayout.lastComponentSize.height = item.el.dom.offsetHeight;
                }
            }
        }
        return returnValue;
    },

    // Override to enforce the forceFit config.
    calculateChildBoxes: function(visibleItems, targetSize) {
        var me = this,
            calculations = me.callParent(arguments),
            boxes = calculations.boxes,
            metaData = calculations.meta,
            len = boxes.length, i = 0, box, item;

        if (targetSize.width && !me.isColumn) {
            // If configured forceFit then all columns will be flexed
            if (me.owner.forceFit) {

                for (; i < len; i++) {
                    box = boxes[i];
                    item = box.component;

                    // Set a sane minWidth for the Box layout to be able to squeeze flexed Headers down to.
                    item.minWidth = Ext.grid.plugin.HeaderResizer.prototype.minColWidth;

                    // For forceFit, just use allocated width as the flex value, and the proportions
                    // will end up the same whatever HeaderContainer width they are being forced into.
                    item.flex = box.width;
                }

                // Recalculate based upon all columns now being flexed instead of sized.
                calculations = me.callParent(arguments);
            }
            else if (metaData.tooNarrow) {
                targetSize.width = metaData.desiredSize;
            }
        }

        return calculations;
    },

    afterLayout: function() {
        var me = this,
            i = 0,
            items = me.getLayoutItems(),
            len = items.length;

        me.callParent(arguments);

        // Set up padding in items
        if (!me.owner.hideHeaders && me.align == 'stretchmax') {
            for (; i < len; i++) {
                items[i].setPadding();
            }
        }
    },

    // FIX: when flexing we actually don't have enough space as we would
    // typically because of the scrollOffset on the GridView, must reserve this
    updateInnerCtSize: function(tSize, calcs) {
        var me = this,
            extra;

        // Columns must not account for scroll offset
        if (!me.isColumn) {
            me.tooNarrow = calcs.meta.tooNarrow;
            extra = (me.reserveOffset ? me.availableSpaceOffset : 0);

            if (calcs.meta.tooNarrow) {
                tSize.width = calcs.meta.desiredSize + extra;
            } else {
                tSize.width += extra;
            }
        }

        return me.callParent(arguments);
    },

    doOwnerCtLayouts: function() {
        var ownerCt = this.owner.ownerCt;
        if (!ownerCt.componentLayout.layoutBusy) {
            ownerCt.doComponentLayout();
        }
    }
});
