Ext.onReady(function() {
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.get('text-ph'),
        viewBox: false,
        autoSize: true,
        height: 350,
        padding: 20,
        items: [{
            type: 'text',
            text: 'With Ext JS 4.0 Drawing',
            fill: '#000',
            font: '18px Arial',
            rotate: {
                degrees: 45
            }
        }]
    });
    
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.get('text-ph'),
        viewBox: false,
        autoSize: true,
        height: 350,
        padding: 20,
        items: [{
            type: 'text',
            text: 'Creating a rotated Text component',
            fill: '#000',
            font: '18px Arial',
            rotate: {
                degrees: 90
            }
        }]
    });
    
    Ext.create('Ext.draw.Component', {
        renderTo: Ext.get('text-ph'),
        id: 'snappy',
        viewBox: false,
        height: 350,
        width: 200,
        padding: 20,
        items: [{
            type: 'text',
            text: 'Is a snap!',
            fill: '#000',
            font: '18px Arial',
            y: 50,
            rotate: {
                degrees: 315
            }
        }]
    });
    
    Ext.create('Ext.slider.Single', {
        renderTo: Ext.get('slider-ph'),
        hideLabel: true,
        width: 400,
        minValue: 0,
        maxValue: 360,
        value: 315,
        listeners: {
            change: function(slider, value) {
                var sprite = Ext.getCmp('snappy').surface.items.first();
                sprite.setAttributes({
                    rotation: {
                        degrees: value
                    }
                }, true);
            }
        }
    });
});