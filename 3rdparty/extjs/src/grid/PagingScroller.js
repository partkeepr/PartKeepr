/*

This file is part of Ext JS 4

Copyright (c) 2011 Sencha Inc

Contact:  http://www.sencha.com/contact

GNU General Public License Usage
This file may be used under the terms of the GNU General Public License version 3.0 as published by the Free Software Foundation and appearing in the file LICENSE included in the packaging of this file.  Please review the following information to ensure the GNU General Public License version 3.0 requirements will be met: http://www.gnu.org/copyleft/gpl.html.

If you are unsure which license is appropriate for your use, please contact the sales department at http://www.sencha.com/contact.

*/
/**
 * @class Ext.grid.PagingScroller
 * @extends Ext.grid.Scroller
 *
 * @private
 */
Ext.define('Ext.grid.PagingScroller', {
    extend: 'Ext.grid.Scroller',
    alias: 'widget.paginggridscroller',
    //renderTpl: null,
    //tpl: [
    //    '<tpl for="pages">',
    //        '<div class="' + Ext.baseCSSPrefix + 'stretcher" style="width: {width}px;height: {height}px;"></div>',
    //    '</tpl>'
    //],
    /**
     * @cfg {Number} percentageFromEdge This is a number above 0 and less than 1 which specifies
     * at what percentage to begin fetching the next page. For example if the pageSize is 100
     * and the percentageFromEdge is the default of 0.35, the paging scroller will prefetch pages
     * when scrolling up between records 0 and 34 and when scrolling down between records 65 and 99.
     */
    percentageFromEdge: 0.35,

    /**
     * @cfg {Number} scrollToLoadBuffer This is the time in milliseconds to buffer load requests
     * when scrolling the PagingScrollbar.
     */
    scrollToLoadBuffer: 200,

    activePrefetch: true,

    chunkSize: 50,
    snapIncrement: 25,

    syncScroll: true,

    initComponent: function() {
        var me = this,
            ds = me.store;

        ds.on('guaranteedrange', this.onGuaranteedRange, this);
        this.callParent(arguments);
    },

    onGuaranteedRange: function(range, start, end) {
        var me = this,
            ds = me.store,
            rs;
        // this should never happen
        if (range.length && me.visibleStart < range[0].index) {
            return;
        }

        ds.loadRecords(range);

        if (!me.firstLoad) {
            if (me.rendered) {
                me.invalidate();
            } else {
                me.on('afterrender', this.invalidate, this, {single: true});
            }
            me.firstLoad = true;
        } else {
            // adjust to visible
            me.syncTo();
        }
    },

    syncTo: function() {
        var me            = this,
            pnl           = me.getPanel(),
            store         = pnl.store,
            scrollerElDom = this.scrollEl.dom,
            rowOffset     = me.visibleStart - store.guaranteedStart,
            scrollBy      = rowOffset * me.rowHeight,
            scrollHeight  = scrollerElDom.scrollHeight,
            clientHeight  = scrollerElDom.clientHeight,
            scrollTop     = scrollerElDom.scrollTop,
            useMaximum;

        // BrowserBug: clientHeight reports 0 in IE9 StrictMode
        // Instead we are using offsetHeight and hardcoding borders
        if (Ext.isIE9 && Ext.isStrict) {
            clientHeight = scrollerElDom.offsetHeight + 2;
        }

        // This should always be zero or greater than zero but staying
        // safe and less than 0 we'll scroll to the bottom.
        useMaximum = (scrollHeight - clientHeight - scrollTop <= 0);
        this.setViewScrollTop(scrollBy, useMaximum);
    },

    getPageData : function(){
        var panel = this.getPanel(),
            store = panel.store,
            totalCount = store.getTotalCount();

        return {
            total : totalCount,
            currentPage : store.currentPage,
            pageCount: Math.ceil(totalCount / store.pageSize),
            fromRecord: ((store.currentPage - 1) * store.pageSize) + 1,
            toRecord: Math.min(store.currentPage * store.pageSize, totalCount)
        };
    },

    onElScroll: function(e, t) {
        var me = this,
            panel = me.getPanel(),
            store = panel.store,
            pageSize = store.pageSize,
            guaranteedStart = store.guaranteedStart,
            guaranteedEnd = store.guaranteedEnd,
            totalCount = store.getTotalCount(),
            numFromEdge = Math.ceil(me.percentageFromEdge * store.pageSize),
            position = t.scrollTop,
            visibleStart = Math.floor(position / me.rowHeight),
            view = panel.down('tableview'),
            viewEl = view.el,
            visibleHeight = viewEl.getHeight(),
            visibleAhead = Math.ceil(visibleHeight / me.rowHeight),
            visibleEnd = visibleStart + visibleAhead,
            prevPage = Math.floor(visibleStart / store.pageSize),
            nextPage = Math.floor(visibleEnd / store.pageSize) + 2,
            lastPage = Math.ceil(totalCount / store.pageSize),
            //requestStart = visibleStart,
            requestStart = Math.floor(visibleStart / me.snapIncrement) * me.snapIncrement,
            requestEnd = requestStart + pageSize - 1,
            activePrefetch = me.activePrefetch;

        me.visibleStart = visibleStart;
        me.visibleEnd = visibleEnd;

        me.syncScroll = true;
        if (totalCount >= pageSize) {
            // end of request was past what the total is, grab from the end back a pageSize
            if (requestEnd > totalCount - 1) {
                this.cancelLoad();
                if (store.rangeSatisfied(totalCount - pageSize, totalCount - 1)) {
                    me.syncScroll = true;
                }
                store.guaranteeRange(totalCount - pageSize, totalCount - 1);
            // Out of range, need to reset the current data set
            } else if (visibleStart < guaranteedStart || visibleEnd > guaranteedEnd) {
                if (store.rangeSatisfied(requestStart, requestEnd)) {
                    this.cancelLoad();
                    store.guaranteeRange(requestStart, requestEnd);
                } else {
                    store.mask();
                    me.attemptLoad(requestStart, requestEnd);
                }
                // dont sync the scroll view immediately, sync after the range has been guaranteed
                me.syncScroll = false;
            } else if (activePrefetch && visibleStart < (guaranteedStart + numFromEdge) && prevPage > 0) {
                me.syncScroll = true;
                store.prefetchPage(prevPage);
            } else if (activePrefetch && visibleEnd > (guaranteedEnd - numFromEdge) && nextPage < lastPage) {
                me.syncScroll = true;
                store.prefetchPage(nextPage);
            }
        }

        if (me.syncScroll) {
            me.syncTo();
        }
    },

    getSizeCalculation: function() {
        // Use the direct ownerCt here rather than the scrollerOwner
        // because we are calculating widths/heights.
        var owner = this.ownerGrid,
            view   = owner.getView(),
            store  = this.store,
            dock   = this.dock,
            elDom  = this.el.dom,
            width  = 1,
            height = 1;

        if (!this.rowHeight) {
            this.rowHeight = view.el.down(view.getItemSelector()).getHeight(false, true);
        }

        // If the Store is *locally* filtered, use the filtered count from getCount.
        height = store[(!store.remoteFilter && store.isFiltered()) ? 'getCount' : 'getTotalCount']() * this.rowHeight;

        if (isNaN(width)) {
            width = 1;
        }
        if (isNaN(height)) {
            height = 1;
        }
        return {
            width: width,
            height: height
        };
    },

    attemptLoad: function(start, end) {
        var me = this;
        if (!me.loadTask) {
            me.loadTask = Ext.create('Ext.util.DelayedTask', me.doAttemptLoad, me, []);
        }
        me.loadTask.delay(me.scrollToLoadBuffer, me.doAttemptLoad, me, [start, end]);
    },

    cancelLoad: function() {
        if (this.loadTask) {
            this.loadTask.cancel();
        }
    },

    doAttemptLoad:  function(start, end) {
        var store = this.getPanel().store;
        store.guaranteeRange(start, end);
    },

    setViewScrollTop: function(scrollTop, useMax) {
        var owner = this.getPanel(),
            items = owner.query('tableview'),
            i = 0,
            len = items.length,
            center,
            centerEl,
            calcScrollTop,
            maxScrollTop,
            scrollerElDom = this.el.dom;

        owner.virtualScrollTop = scrollTop;

        center = items[1] || items[0];
        centerEl = center.el.dom;

        maxScrollTop = ((owner.store.pageSize * this.rowHeight) - centerEl.clientHeight);
        calcScrollTop = (scrollTop % ((owner.store.pageSize * this.rowHeight) + 1));
        if (useMax) {
            calcScrollTop = maxScrollTop;
        }
        if (calcScrollTop > maxScrollTop) {
            //Ext.Error.raise("Calculated scrollTop was larger than maxScrollTop");
            return;
            // calcScrollTop = maxScrollTop;
        }
        for (; i < len; i++) {
            items[i].el.dom.scrollTop = calcScrollTop;
        }
    }
});
