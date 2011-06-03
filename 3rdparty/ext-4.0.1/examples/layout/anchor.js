Ext.onReady(function() {
    Ext.create('Ext.Viewport', {
        layout:'anchor',
        items:[{
            title:'Item 1',
            html:'100% 20%',
            anchor:'100% 20%'
        },{
            title:'Item 2',
            html:'50% 30%',
            anchor:'50% 30%'
        },{
            title:'Item 3',
            html:'-100 50%',
            anchor:'-100 50%'
        }]
    });
});