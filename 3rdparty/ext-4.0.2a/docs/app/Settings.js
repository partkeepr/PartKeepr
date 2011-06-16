/**
 * Provides access to Docs app settings.
 */
Ext.define("Docs.Settings", {
    extend: 'Docs.LocalStore',
    storeName: 'Settings',
    singleton: true,

    /**
     * Saves a setting
     *
     * @param {String} key  Name of the setting
     * @param {Mixed} value  Value of the setting
     */
    set: function(key, value) {
        var index = this.store.findExact("key", key);
        if (index > -1) {
            this.store.getAt(index).set({key: key, value: value});
        }
        else {
            this.store.add({key: key, value: value});
        }
        this.syncStore();
    },

    /**
     * Gets value of a setting.
     *
     * @param {String} key  Name of the setting
     * @return {Mixed} value of the setting or undefined.
     */
    get: function(key) {
        var index = this.store.findExact("key", key);
        return index > -1 ? this.store.getAt(index).get("value") : undefined;
    }
});
