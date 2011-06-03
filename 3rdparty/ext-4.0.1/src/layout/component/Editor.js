/**
 * Component layout for editors
 * @class Ext.layout.component.Editor
 * @extends Ext.layout.component.Component
 * @private
 */
Ext.define('Ext.layout.component.Editor', {

    /* Begin Definitions */

    alias: ['layout.editor'],

    extend: 'Ext.layout.component.Component',

    /* End Definitions */

    onLayout: function(width, height) {
        var me = this,
            owner = me.owner,
            autoSize = owner.autoSize;
            
        if (autoSize === true) {
            autoSize = {
                width: 'field',
                height: 'field'    
            };
        }
        
        if (autoSize) {
            width = me.getDimension(owner, autoSize.width, 'Width', width);
            height = me.getDimension(owner, autoSize.height, 'Height', height);
        }
        me.setTargetSize(width, height);
        owner.field.setSize(width, height);
    },
    
    getDimension: function(owner, type, dimension, actual){
        var method = 'get' + dimension;
        switch (type) {
            case 'boundEl':
                return owner.boundEl[method]();
            case 'field':
                return owner.field[method]();
            default:
                return actual;
        }
    }
});