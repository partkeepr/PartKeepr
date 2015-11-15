/**
 * This card displays the database parameters.
 *
 * This card supports multiple database types along with their special parameters.
 */
Ext.define('PartKeeprSetup.DatabaseParametersCard', {
    extend: 'Ext.form.Panel',

    /**
     * Various Style Settings
     */
    margin: 20,
    border: false,
    bodyStyle: 'background: none;',
    autoScroll: true,
    breadCrumbTitle: 'Database Parameters',

    /**
     * Inits the component
     */
    initComponent: function ()
    {

        this.createDatabaseDropdown();

        this.databaseSettings = Ext.create("Ext.panel.Panel", {
            layout: 'card',
            border: false,
            bodyStyle: {
                background: "none"
            },
            items: [
                {
                    border: false,
                    bodyStyle: {
                        background: "none"
                    },
                    html: 'Please select a database driver'
                },
                Ext.create("PartKeeprSetup.DatabaseParametersCard.MySQL"),
                Ext.create("PartKeeprSetup.DatabaseParametersCard.PostgreSQL")
            ]
        });

        this.items = [
            {
                border: false,
                bodyStyle: 'background:none;padding-bottom: 10px;',
                html: 'Please enter your database parameters below:'
            },
            this.databaseDropdown,
            this.databaseSettings
        ];

        this.callParent();
        this.on("activate", this.onActivate, this);
    },
    /**
     * Creates the dropdown with all available database types.
     */
    createDatabaseDropdown: function ()
    {
        var databaseTypes = Ext.create('Ext.data.Store', {
            fields: ['type', 'name'],
            data: [
                {"type": "pdo_mysql", "name": "MySQL"},
                {"type": "pdo_pgsql", "name": "PostgreSQL"}
            ]
        });

        this.databaseDropdown = Ext.create('Ext.form.ComboBox', {
            labelWidth: 120,
            fieldLabel: 'Database Type',
            store: databaseTypes,
            queryMode: 'local',
            displayField: 'name',
            valueField: 'type',
            triggerAction: 'all',
            editable: false,
            value: PartKeeprSetup.getApplication().getSetupConfig().values.database_driver
        });

        this.databaseDropdown.on("change", this.onDriverSelect, this);
    },
    /**
     * This method is a callback from the database dropdown and displays
     * the correct database settings page.
     */
    onDriverSelect: function (a, value)
    {
        Ext.ComponentQuery.query('#nextBtn')[0].disable();

        switch (value) {
            case "pdo_mysql":
                this.databaseSettings.layout.setActiveItem(1);
                break;
            case "pdo_pgsql":
                this.databaseSettings.layout.setActiveItem(2);
                break;
            default:
                this.databaseSettings.layout.setActiveItem(0);
                break;
        }
    },
    /**
     * Gets called when the card is activated
     */
    onActivate: function ()
    {
        this.databaseDropdown.setValue(PartKeeprSetup.getApplication().getSetupConfig().values.database_driver);
        this.onDriverSelect(null, this.databaseDropdown.getValue());

        // Disable the "next" button, this needs to get enabled by the database cards
        Ext.ComponentQuery.query('#nextBtn')[0].disable();

        // Manually fire the activate event, in case the user switched cards back/forth.
        this.databaseSettings.layout.getActiveItem().fireEvent("activate");
    }
});
