/**
 * @private
 * @class Ext.ux.layout.component.form.MultiSelect
 * @extends Ext.layout.component.field.Field
 * Layout class for {@link Ext.ux.form.MultiSelect} fields.
 * @private
 */
Ext.define('Ext.ux.layout.component.form.MultiSelect', {
    extend: 'Ext.layout.component.field.Field',
    alias: ['layout.multiselectfield'],

    type: 'multiselectfield',

    /**
     * @cfg {Number} height The height of the field. Defaults to 200.
     */
    defaultHeight: 200,

    sizeBodyContents: function(width, height) {
        var me = this;

        if (!Ext.isNumber(height)) {
            height = me.defaultHeight;
        }

        me.owner.panel.setSize(width, height);
    }
});