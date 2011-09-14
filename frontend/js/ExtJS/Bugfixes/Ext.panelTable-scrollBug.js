/**
 * Bugfix for Ext.panel.Table:
 * 
 * Vertical scroller isn't activated until 4-5 records more than necessary are added to the grid
 * 
 * Bugfix source:
 * http://www.sencha.com/forum/showthread.php?137993-4.0.2-only-layout-fit-grid-scrollbar-when-used-does-not-scroll-content&p=640289&viewfull=1#post640289
 */
Ext.override(Ext.panel.Table, {
    determineScrollbars: function() {
        var me = this,
            box,
            tableEl,
            scrollWidth,
            clientWidth,
            scrollHeight,
            clientHeight,
            verticalScroller = me.verticalScroller,
            horizontalScroller = me.horizontalScroller,
            curScrollbars = (verticalScroller   && verticalScroller.ownerCt === me ? 1 : 0) |
                            (horizontalScroller && horizontalScroller.ownerCt === me ? 2 : 0),
            reqScrollbars = 0; // 1 = vertical, 2 = horizontal, 3 = both


        // If we are not collapsed, and the view has been rendered AND filled, then we can determine scrollbars
        if (!me.collapsed && me.view && me.view.el && me.view.el.dom.firstChild && !me.changingScrollBars) {


            // Calculate maximum, *scrollbarless* space which the view has available.
            // It will be the Fit Layout's calculated size, plus the widths of any currently shown scrollbars
            //####### THIS IS ONLY CHANGE I HAVE MADE, USE VIEW SIZE RATHER THAN FULL PANEL SIZE #######
            box = me.view.getSize();


            clientWidth  = box.width  + ((curScrollbars & 1) ? verticalScroller.width : 0);
            clientHeight = box.height + ((curScrollbars & 2) ? horizontalScroller.height : 0);


            // Calculate the width of the scrolling block
            // There will never be a horizontal scrollbar if all columns are flexed.


            scrollWidth = (me.headerCt.query('[flex]').length && !me.headerCt.layout.tooNarrow) ? 0 : me.headerCt.getFullWidth();


            // Calculate the height of the scrolling block
            if (verticalScroller && verticalScroller.el) {
                scrollHeight = verticalScroller.getSizeCalculation().height;
            } else {
                tableEl = me.view.el.child('table', true);
                scrollHeight = tableEl ? tableEl.offsetHeight : 0;
            }


            // View is too high.
            // Definitely need a vertical scrollbar
            if (scrollHeight > clientHeight) {
                reqScrollbars = 1;


                // But if scrollable block width goes into the zone required by the vertical scrollbar, we'll also need a horizontal
                if (horizontalScroller && ((clientWidth - scrollWidth) < verticalScroller.width)) {
                    reqScrollbars = 3;
                }
            }


            // View height fits. But we stil may need a horizontal scrollbar, and this might necessitate a vertical one.
            else {
                // View is too wide.
                // Definitely need a horizontal scrollbar
                if (scrollWidth > clientWidth) {
                    reqScrollbars = 2;


                    // But if scrollable block height goes into the zone required by the horizontal scrollbar, we'll also need a vertical
                    if (verticalScroller && ((clientHeight - scrollHeight) < horizontalScroller.height)) {
                        reqScrollbars = 3;
                    }
                }
            }


            // If scrollbar requirements have changed, change 'em...
            if (reqScrollbars !== curScrollbars) {


                // Suspend component layout while we add/remove the docked scrollers
                me.suspendLayout = true;
                if (reqScrollbars & 1) {
                    me.showVerticalScroller();
                } else {
                    me.hideVerticalScroller();
                }
                if (reqScrollbars & 2) {
                    me.showHorizontalScroller();
                } else {
                    me.hideHorizontalScroller();
                }
                me.suspendLayout = false;
            }
            // Lay out the Component.
            // Set a flag so that afterComponentLayout does not recurse back into here.
            me.changingScrollBars = true;
            me.doComponentLayout();
            me.changingScrollBars = false;
        }
    }
});