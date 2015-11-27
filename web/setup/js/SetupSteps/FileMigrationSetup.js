/**
 * Moves legacy directories
 */
Ext.define('PartKeeprSetup.FileMigrationSetup', {
    extend: 'PartKeeprSetup.AbstractTest',
    action: 'migrateFiles',
    name: "Legacy Files",
    message: "Moving legacy files",
});
