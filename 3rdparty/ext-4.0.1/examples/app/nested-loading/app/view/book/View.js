/**
 * The view which displays information about a speficied book
 * @extends Ext.panel.Panel
 */
Ext.define('Books.view.book.View', {
    alias: 'widget.bookview',
    extend: 'Ext.panel.Panel',
    
    initComponent: function() {
        Ext.apply(this, {
            id        : 'itemCt',
            cls       : 'item-ct',
            flex      : 2,
            border    : false,
            autoScroll: true,
            
            layout: {
                type : 'hbox',
                align: 'middle',
                pack : 'center'
            },
            
            items: [
                {
                    id    : 'imgCt',
                    border: false,
                    margin: '0 10 0 0',
                    width : 250,
                    height: 308
                },
                {
                    id    : 'contentCt',
                    width : 500,
                    border: false
                }
            ]
        });
                
        this.callParent(arguments);
    },
    
    /**
     * Binds a record to this view
     */
    bind: function(record) {
        var imgCt = Ext.getCmp('imgCt'),
            contentCt = Ext.getCmp('contentCt');
        
        var imgTpl = new Ext.XTemplate(
            '<img src="{image}" />'
        );
        
        var contentTpl = new Ext.XTemplate(
            '<div class="name">{name} <span>${price}</span></div>',
            '<div class="author">By {author}</div>',
            '<div class="detail">{detail}</div>'
        );
        
        imgTpl.overwrite(imgCt.el, record.data);
        contentTpl.overwrite(contentCt.el, record.data);
        
        //update the layout of the contentTpl
        contentCt.setHeight('auto');
        this.doLayout();
    }
});