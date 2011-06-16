/**
 * Renders search results list.
 */
Ext.define('Docs.view.search.Dropdown', {
    extend: 'Ext.view.View',
    alias: 'widget.searchdropdown',

    floating: true,
    autoShow: false,
    autoRender: true,
    toFrontOnShow: true,
    focusOnToFront: false,

    store: 'Search',

    id: 'search-dropdown',
    overItemCls:'x-view-over',
    trackOver: true,
    itemSelector:'div.item',
    singleSelect: true,

    initComponent: function() {
        this.tpl = new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="item {type}">',
                    '<div class="title">{member}</div>',
                    '<div class="class">{cls}</div>',
                '</div>',
            '</tpl>',
            '<div class="total">{[values.length]} of {[this.getTotal()]}</div>',
            {
                getTotal: Ext.bind(this.getTotal, this)
            }
        );
        this.callParent(arguments);
    },

    /**
     * Sets number of total search results
     * @param {Number} total
     */
    setTotal: function(total) {
        this.total = total;
    },

    /**
     * Returns number of total search results
     * @return {Number}
     */
    getTotal: function() {
        return this.total;
    }
});
