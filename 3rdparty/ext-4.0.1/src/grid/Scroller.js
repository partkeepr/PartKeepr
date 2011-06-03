/**
 * @class Ext.grid.Scroller
 * @extends Ext.Component
 *
 * Docked in an Ext.grid.Panel, controls virtualized scrolling and synchronization
 * across different sections.
 *
 * @private
 */
Ext.define('Ext.grid.Scroller', {
    extend: 'Ext.Component',
    alias: 'widget.gridscroller',
    weight: 110,
    cls: Ext.baseCSSPrefix + 'scroller',
    focusable: false,
    
    renderTpl: ['<div class="' + Ext.baseCSSPrefix + 'stretcher"></div>'],
    
    initComponent: function() {
        var me       = this,
            dock     = me.dock,
            cls      = Ext.baseCSSPrefix + 'scroller-vertical',
            sizeProp = 'width',
            // Subtracting 2px would give us a perfect fit of the scroller
            // however, some browsers wont allow us to scroll content thats not
            // visible, therefore we use 1px.
            // Note: This 1px offset matches code in Ext.grid.ColumnLayout when
            // reserving room for the scrollbar
            scrollbarWidth = Ext.getScrollBarWidth() + (Ext.isIE ? 1 : -1);

        me.offsets = {bottom: 0};

        if (dock === 'top' || dock === 'bottom') {
            cls = Ext.baseCSSPrefix + 'scroller-horizontal';
            sizeProp = 'height';
        }
        me[sizeProp] = scrollbarWidth;
        
        me.cls += (' ' + cls);
        
        Ext.applyIf(me.renderSelectors, {
            stretchEl: '.' + Ext.baseCSSPrefix + 'stretcher'
        });
        me.callParent();
    },
    
    
    afterRender: function() {
        var me = this;
        me.callParent();
        me.ownerCt.on('afterlayout', me.onOwnerAfterLayout, me);
        me.mon(me.el, 'scroll', me.onElScroll, me);
        Ext.cache[me.el.id].skipGarbageCollection = true;
    },
    
    getSizeCalculation: function() {
        var owner  = this.getPanel(),
            dock   = this.dock,
            elDom  = this.el.dom,
            width  = 1,
            height = 1,
            view, tbl;
            
        if (dock === 'top' || dock === 'bottom') {
            // TODO: Must gravitate to a single region..
            // Horizontal scrolling only scrolls virtualized region
            var items  = owner.query('tableview'),
                center = items[1] || items[0];
            
            if (!center) {
                return false;
            }
            // center is not guaranteed to have content, such as when there
            // are zero rows in the grid/tree. We read the width from the
            // headerCt instead.
            width = center.headerCt.getFullWidth();
            
            if (Ext.isIEQuirks) {
                width--;
            }
            // Account for the 1px removed in Scroller.
            width--;
        } else {            
            view = owner.down('tableview:not([lockableInjected])');
            if (!view) {
                return false;
            }
            tbl = view.el;
            if (!tbl) {
                return false;
            }
            
            // needs to also account for header and scroller (if still in picture)
            // should calculate from headerCt.
            height = tbl.dom.scrollHeight;
        }
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
    
    invalidate: function(firstPass) {
        if (!this.stretchEl || !this.ownerCt) {
            return;
        }
        var size  = this.getSizeCalculation(),
            elDom = this.el.dom;
        if (size) {
            this.stretchEl.setSize(size);
        
            // BrowserBug: IE7
            // This makes the scroller enabled, when initially rendering.
            elDom.scrollTop = elDom.scrollTop;
        }
    },

    onOwnerAfterLayout: function(owner, layout) {
        this.invalidate();
    },

    /**
     * Sets the scrollTop and constrains the value between 0 and max.
     * @param {Number} scrollTop
     * @return {Number} The resulting scrollTop value after being constrained
     */
    setScrollTop: function(scrollTop) {
        if (this.el) {
            var elDom = this.el.dom;
            return elDom.scrollTop = Ext.Number.constrain(scrollTop, 0, elDom.scrollHeight - elDom.clientHeight);
        }
    },

    /**
     * Sets the scrollLeft and constrains the value between 0 and max.
     * @param {Number} scrollLeft
     * @return {Number} The resulting scrollLeft value after being constrained
     */
    setScrollLeft: function(scrollLeft) {
        if (this.el) {
            var elDom = this.el.dom;
            return elDom.scrollLeft = Ext.Number.constrain(scrollLeft, 0, elDom.scrollWidth - elDom.clientWidth);
        }
    },

    /**
     * Scroll by deltaY
     * @param {Number} delta
     * @return {Number} The resulting scrollTop value
     */
    scrollByDeltaY: function(delta) {
        if (this.el) {
            var elDom = this.el.dom;
            return this.setScrollTop(elDom.scrollTop + delta);
        }
    },

    /**
     * Scroll by deltaX
     * @param {Number} delta
     * @return {Number} The resulting scrollLeft value
     */
    scrollByDeltaX: function(delta) {
        if (this.el) {
            var elDom = this.el.dom;
            return this.setScrollLeft(elDom.scrollLeft + delta);
        }
    },
    
    
    /**
     * Scroll to the top.
     */
    scrollToTop : function(){
        this.setScrollTop(0);
    },
    
    // synchronize the scroller with the bound gridviews
    onElScroll: function(event, target) {
        this.fireEvent('bodyscroll', event, target);
    },

    getPanel: function() {
        var me = this;
        if (!me.panel) {
            me.panel = this.up('[scrollerOwner]');
        }
        return me.panel;
    }
});

