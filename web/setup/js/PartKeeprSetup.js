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
                authentication_provider: "PartKeepr.Auth.HTTPBasicAuthenticationProvider",
                locale: "en"
            },
            adminuser: {
                username: "",
                password: "",
                email: ""
            },
            createUser: false,
            legacyAuth: false,
            existingUsers: 0,
            legacyUsers: 0,
            authKey: ""
        };

        Ext.apply(this.setupConfig, initialConfig);

        var win = Ext.create("Ext.window.Window", {
            layout: "fit",
            constrain: true,
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
