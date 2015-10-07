/**
 * Sets up the database schema
 */
Ext.define('PartKeeprSetup.SchemaSetup', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'schemaSetup',
    name: "Database",
    message: "Setting up the database schema",
});
