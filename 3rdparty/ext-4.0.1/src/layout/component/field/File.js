/**
 * @private
 * @class Ext.layout.component.field.File
 * @extends Ext.layout.component.field.Field
 * Layout class for {@link Ext.form.field.File} fields. Adjusts the input field size to accommodate
 * the file picker trigger button.
 * @private
 */

Ext.define('Ext.layout.component.field.File', {
    alias: ['layout.filefield'],
    extend: 'Ext.layout.component.field.Field',

    type: 'filefield',

    sizeBodyContents: function(width, height) {
        var me = this,
            owner = me.owner;

        if (!owner.buttonOnly) {
            // Decrease the field's width by the width of the button and the configured buttonMargin.
            // Both the text field and the button are floated left in CSS so they'll stack up side by side.
            me.setElementSize(owner.inputEl, Ext.isNumber(width) ? width - owner.button.getWidth() - owner.buttonMargin : width);
        }
    }
});