Ext.require(['*']);
Ext.onReady(function() {
    var cw;
    
    Ext.create('Ext.Viewport', {
        layout: {
            type: 'border',
            padding: 5
        },
        defaults: {
            split: true
        },
        items: [{
            region: 'north',
            collapsible: true,
            title: 'North',
            split: true,
            height: 100,
            html: 'north'
        },{
            region: 'west',
            collapsible: true,
            title: 'Starts at width 30%',
            split: true,
            width: '30%',
            html: 'west<br>I am floatable'
        },{
            region: 'center',
            layout: 'border',
            border: false,
            items: [{
                region: 'center',
                html: 'center center',
                title: 'Center',
                items: [cw = Ext.create('Ext.Window', {
                    xtype: 'window',
                    closable: false,
                    minimizable: true,
                    title: 'Constrained Window',
                    height: 200,
                    width: 400,
                    constrain: true,
                    html: 'I am in a Container',
                    itemId: 'center-window',
                    minimize: function() {
                        this.floatParent.down('button#toggleCw').toggle();
                    }
                })],
                dockedItems: [{
                    xtype: 'toolbar',
                    dock: 'bottom',
                    items: ['Text followed by a spacer',
                        ' ', {
                            itemId: 'toggleCw',
                            text: 'Constrained Window',
                            enableToggle: true,
                            toggleHandler: function() {
                            cw.setVisible(!cw.isVisible());
                        }
                    }]
                }]
            },{
                region: 'south',
                height: 100,
                split: true,
                collapsible: true,
                title: 'Splitter above me',
                html: 'center south'
            }]
        },{
            region: 'east',
            collapsible: true,
            floatable: true,
            split: true,
            width: 200,
            title: 'East',
            layout: {
                type: 'vbox',
                padding: 5,
                align: 'stretch'
            },
            items: [{
                xtype: 'textfield',
                fieldLabel: 'Text field'
            }, {
                xtype: 'component',
                html: 'I am floatable'
            }]
        },{
            region: 'south',
            collapsible: true,
            split: true,
            height: 200,
            title: 'South',
            layout: {
                type: 'border',
                padding: 5
            },
            items: [{
                title: 'South Central',
                region: 'center',
                html: 'South Central'
            }, {
                title: 'South Eastern',
                region: 'east',
                flex: 1,
                html: 'South Eastern',
                split: true,
                collapsible: true
            }, {
                title: 'South Western',
                region: 'west',
                flex: 1,
                html: 'South Western<br>I collapse to nothing',
                split: true,
                collapsible: true,
                collapseMode: 'mini'
            }]
        }]
    });
});