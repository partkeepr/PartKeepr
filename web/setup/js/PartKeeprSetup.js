Ext.application({
    name: 'PartKeeprSetup',
    launch: function ()
    {
        PartKeeprSetup.application = this;
        this.createLayout();
    },
    setupConfig: {},
    /**
     * Creates the main viewport
     */
    createLayout: function ()
    {
        var initialConfig = {
            database: {
                driver: "",
                host: "",
                name: "",
                user: "",
                password: "",
                port: null
            },
            adminuser: {
                username: "",
                password: "",
                email: ""
            },
            existingConfig: false,
            legacyAuth: false,
            authKey: ""
        };

        Ext.apply(this.setupConfig, initialConfig);

        var win = Ext.create("Ext.window.Window", {
            layout: "fit",
            title: "PartKeepr Setup",
            items: Ext.create("PartKeeprSetup.SetupWizard")
        });

        win.show();
    },
    getSetupConfig: function ()
    {
        return this.setupConfig;

    },
    statics: {
        getApplication: function ()
        {
            return PartKeeprSetup.application;
        }
    }
});
