/**
 * Overrides the ExtJS Combobox with a configuration option to return the selected object and not their ID value
 */
Ext.define('Ext.form.field.ComboBox', {
    override: 'Ext.form.field.ComboBox',

    config: {
        returnObject: false
    },
    getValue: function () {
        if (this.getReturnObject() === true) {
            if (this.callParent(arguments) === "" && this.allowBlank === true) {
                return null;
            }
            return this.getSelection();
        } else {
            return this.callParent(arguments);
        }
    }
});
