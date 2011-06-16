/**
 * Previously visited classes / guides
 */
Ext.define('Docs.model.History', {
    fields: ['id', 'cls'],
    extend: 'Ext.data.Model',
    proxy: {
        type: ('localStorage' in window && window['localStorage'] !== null) ? 'localstorage' : 'memory',
        id  : 'docs-history'
    }
});
