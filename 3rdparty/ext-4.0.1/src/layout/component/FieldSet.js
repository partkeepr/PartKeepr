/**
 * Component layout for Ext.form.FieldSet components
 * @class Ext.layout.component.FieldSet
 * @extends Ext.layout.component.Body
 * @private
 */
Ext.define('Ext.layout.component.FieldSet', {
    extend: 'Ext.layout.component.Body',
    alias: ['layout.fieldset'],

    type: 'fieldset',

    doContainerLayout: function() {
        // Prevent layout/rendering of children if the fieldset is collapsed
        if (!this.owner.collapsed) {
            this.callParent();
        }
    }
});