/**
 * Key-value pairs of Docs app settings.
 */
Ext.define('Docs.model.Setting', {
    fields: ['id', 'key', 'value'],
    extend: 'Ext.data.Model',
    proxy: {
        type: ('localStorage' in window && window['localStorage'] !== null) ? 'localstorage' : 'memory',
        id  : 'docs-settings'
    }
});
