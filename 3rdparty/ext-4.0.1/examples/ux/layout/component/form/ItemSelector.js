/**
 * @private
 * @class Ext.ux.layout.component.form.ItemSelector
 * @extends Ext.layout.component.field.Field
 * Layout class for {@link Ext.ux.form.ItemSelector} fields.
 * @private
 */
Ext.define('Ext.ux.layout.component.form.ItemSelector', {
    extend: 'Ext.layout.component.field.Field',
    alias: ['layout.itemselectorfield'],

    type: 'itemselectorfield',

    /**
     * @cfg {Number} height The height of the field. Defaults to 200.
     */
    defaultHeight: 200,

    sizeBodyContents: function(width, height) {
        var me = this;

        if (!Ext.isNumber(height)) {
            height = me.defaultHeight;
        }

        me.owner.innerCt.setSize(width, height);
    }
});