/**
 * @class Ext.grid.feature.Chunking
 * @extends Ext.grid.feature.Feature
 */
Ext.define('Ext.grid.feature.Chunking', {
    extend: 'Ext.grid.feature.Feature',
    alias: 'feature.chunking',
    
    chunkSize: 20,
    rowHeight: Ext.isIE ? 27 : 26,
    visibleChunk: 0,
    hasFeatureEvent: false,
    attachEvents: function() {
        var grid = this.view.up('gridpanel'),
            scroller = grid.down('gridscroller[dock=right]');
        scroller.el.on('scroll', this.onBodyScroll, this, {buffer: 300});
        //this.view.on('bodyscroll', this.onBodyScroll, this, {buffer: 300});
    },
    
    onBodyScroll: function(e, t) {
        var view = this.view,
            top  = t.scrollTop,
            nextChunk = Math.floor(top / this.rowHeight / this.chunkSize);
        if (nextChunk !== this.visibleChunk) {
        
            this.visibleChunk = nextChunk;
            view.refresh();
            view.el.dom.scrollTop = top;
            //BrowserBug: IE6,7,8 quirks mode takes setting scrollTop 2x.
            view.el.dom.scrollTop = top;
        }
    },
    
    collectData: function(records, preppedRecords, startIndex, fullWidth, orig) {
        var o = {
            fullWidth: orig.fullWidth,
            chunks: []
        },
        //headerCt = this.view.headerCt,
        //colums = headerCt.getColumnsForTpl(),
        recordCount = orig.rows.length,
        start = 0,
        i = 0,
        visibleChunk = this.visibleChunk,
        chunk,
        rows,
        chunkLength;

        for (; start < recordCount; start+=this.chunkSize, i++) {
            if (start+this.chunkSize > recordCount) {
                chunkLength = recordCount - start;
            } else {
                chunkLength = this.chunkSize;
            }
            
            if (i >= visibleChunk - 1 && i <= visibleChunk + 1) {
                rows = orig.rows.slice(start, start+this.chunkSize);
            } else {
                rows = [];
            }
            o.chunks.push({
                rows: rows,
                fullWidth: fullWidth,
                chunkHeight: chunkLength * this.rowHeight
            });
        }
        
        
        return o;
    },
    
    getTableFragments: function() {
        return {
            openTableWrap: function() {
                return '<tpl for="chunks"><div class="' + Ext.baseCSSPrefix + 'grid-chunk" style="height: {chunkHeight}px;">';
            },
            closeTableWrap: function() {
                return '</div></tpl>';
            }
        };
    }
});
