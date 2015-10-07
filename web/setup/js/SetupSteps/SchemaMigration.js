/**
 * Sets up the database schema
 */
Ext.define('PartKeeprSetup.SchemaMigration', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'schemaMigration',
    name: "Database",
    message: "Migrating the database schema",
});
