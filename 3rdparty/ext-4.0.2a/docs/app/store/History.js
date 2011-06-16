/**
 * History Store
 */
Ext.define('Docs.store.History', {
    extend: 'Ext.data.Store',
    model: 'Docs.model.History',
    // Sort history with latest on top
    sorters: [
        { property: 'id', direction: 'DESC' }
    ]
});
