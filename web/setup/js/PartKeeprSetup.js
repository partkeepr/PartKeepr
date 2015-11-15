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
            values: {
                database_driver: "",
                database_host: "",
                database_port: "",
                database_name: "",
                database_user: "",
                database_password: "",
                authentication_provider: "PartKeepr.Auth.WSSEAuthenticationProvider",
                locale: "en"
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
