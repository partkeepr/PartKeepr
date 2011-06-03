/**
 * @private
 * Private utility class for managing all {@link Ext.form.field.Radio} fields grouped by name.
 */
Ext.define('Ext.form.RadioManager', {
    extend: 'Ext.util.MixedCollection',
    singleton: true,

    getByName: function(name) {
        return this.filterBy(function(item) {
            return item.name == name;
        });
    },

    getWithValue: function(name, value) {
        return this.filterBy(function(item) {
            return item.name == name && item.inputValue == value;
        });
    },

    getChecked: function(name) {
        return this.findBy(function(item) {
            return item.name == name && item.checked;
        });
    }
});
