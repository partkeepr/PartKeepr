/**
 * @class Ext.multisort.Panel
 * @extends Ext.panel.Panel
 * @author Ed Spencer
 * 
 * 
 */
Ext.define('Ext.multisort.Panel', {
    extend: 'Ext.panel.Panel',
    
    width: 800,
    height: 450,
    title: 'Multisort DataView',
    autoScroll: true,
    
    requires: ['Ext.toolbar.TextItem', 'Ext.view.View'],
    
    initComponent: function() {
        this.tbar = Ext.create('Ext.toolbar.Toolbar', {
            plugins : Ext.create('Ext.ux.BoxReorderer', {
                listeners: {
                    scope: this,
                    drop: function() {
                        this.down('dataview').store.sort(this.getSorters());
                    }
                }
            }),
            defaults: {
                listeners: {
                    scope: this,
                    changeDirection: this.updateStoreSorters
                }
            },
            items: [{
                xtype: 'tbtext',
                text: 'Sort on these fields:',
                reorderable: false
            }, {
                xtype: 'sortbutton',
                text : 'Type',
                dataIndex: 'type'
            }, {
               xtype: 'sortbutton',
                text : 'Name',
                dataIndex: 'name'
            }]
        });
        
        this.items = {
            xtype: 'dataview',
            tpl: [
                '<tpl for=".">',
                    '<div class="item">',
                        (!Ext.isIE6? '<img src="../../datasets/touch-icons/{thumb}" />' : 
                        '<div style="position:relative;width:74px;height:74px;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src=\'../../datasets/touch-icons/{thumb}\')"></div>'),
                        '<h3>{name}</h3>',
                    '</div>',
                '</tpl>'
            ],
            plugins: [Ext.create('Ext.ux.DataView.Animated')],
            itemSelector: 'div.item',
            store: Ext.create('Ext.data.Store', {
                autoLoad: true,
                sortOnLoad: true,
                storeId: 'test',
                fields: ['name', 'thumb', 'url', 'type'],
                proxy: {
                    type: 'ajax',
                    url : '../../datasets/sencha-touch-examples.json',
                    reader: {
                        type: 'json',
                        root: ''
                    }
                }
            })
        };
        
        this.callParent(arguments);
        this.updateStoreSorters();
    },
    
    /**
     * Returns the array of Ext.util.Sorters defined by the current toolbar button order
     * @return {Array} The sorters
     */
    getSorters: function() {
        var buttons = this.query('toolbar sortbutton'),
            sorters = [];
        Ext.Array.each(buttons, function(button) {
            sorters.push({
                property : button.getDataIndex(),
                direction: button.getDirection()
            });
        });
        
        return sorters;
    },
    
    /**
     * @private
     * Updates the DataView's Store's sorters based on the current Toolbar button configuration
     */
    updateStoreSorters: function() {
        //FIXME: shouldn't have to make the first call
        this.down('dataview').store.sort();
        this.down('dataview').store.sort(this.getSorters());
    }
});