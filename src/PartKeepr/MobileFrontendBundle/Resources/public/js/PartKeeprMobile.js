Ext.application({
    name: 'PartKeepr',

    launch: function () {
        Ext.get("loader-wrapper").hide();

        PartKeepr.application = this;

        var authenticationProvider = Ext.create(window.parameters.authentication_provider);
        PartKeepr.Auth.AuthenticationProvider.setAuthenticationProvider(authenticationProvider);

        var config = {};

        if (window.parameters.autoLoginUsername) {
            config.autoLogin = true;
            config.autoLoginUsername = window.parameters.autoLoginUsername;
            config.autoLoginPassword = window.parameters.autoLoginPassword;
        }

        this.loginManager = Ext.create("PartKeepr.Auth.LoginManager", config);
        this.loginManager.on("login", this.onLogin, this);
        this.loginManager.on("logout", this.onLogout, this);
        this.loginManager.login();
    },

    test: function () {
        var config = {
            autoLoad: true,
            model: "PartKeepr.PartBundle.Entity.Part",
            autoSync: false, // Do not change. If true, new (empty) records would be immediately committed to the database.
            remoteFilter: true,
            remoteSort: true,
            pageSize: 50,
            groupField: 'categoryPath',
            sorters: [
                {
                    property: 'category.categoryPath',
                    direction: 'ASC'
                },
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        };

        var store = Ext.create("Ext.data.Store", config);

        var grid = Ext.create('Ext.grid.Grid', {

            store: store,

            grouped: true,
            features: [{ftype: 'grouping', groupHeaderTpl: 'Subject: {name}'}],

            columns: [
                {
                    text: 'Name',
                    hidden: true,
                    dataIndex: "categoryPath",
                    flex: 1,
                    // Adjust the header text when grouped by this column:
                },
                {
                    text: i18n("Name"),
                    dataIndex: 'name',
                    flex: 1,
                    minWidth: 150
                }
            ],


        });

        var panel = Ext.create("Ext.panel.Panel", {
           title: 'Parts List',
            iconCls: 'partkeeprLogo',
            tools: [
                {type: 'refresh'},
                {type: 'search'},
                {type: 'menu'}
            ],
            items: [grid],
            layout: 'fit',
            fullscreen: true
        });
    },
    getLoginManager: function ()
    {
        return this.loginManager;
    },
    /**
     * Queries for a specific user preference. Returns either the value or a default value if
     * the preference was not found.
     * @param key The key to query
     * @param defaultValue A default value to return (optional)
     * @returns the key value, or defaultValue if preference key was not found
     */
    getUserPreference: function (key, defaultValue)
    {
        var record = this.userPreferenceStore.findRecord("preferenceKey", key);

        if (record) {
            var value = record.get("preferenceValue");
            var decodedValue = Ext.decode(value, true);

            if (decodedValue === null) {
                return value;
            } else {
                return decodedValue;
            }
        } else {
            return (typeof defaultValue == "undefined") ? null : defaultValue;
        }
    },
    /**
     * Sets a specific user preference. Directly commits the change to the server.
     *
     * @param key The key to set
     * @param value The value to set
     */
    setUserPreference: function (key, value)
    {
        var record = this.userPreferenceStore.findRecord("preferenceKey", key);
        value = Ext.encode(value);

        if (record) {
            if (record.get("preferenceValue") != value) {
                record.set("preferenceValue", value);
                record.save();
            }
        } else {
            var j = new PartKeepr.AuthBundle.Entity.UserPreference();
            j.set("preferenceKey", key);
            j.set("preferenceValue", value);
            j.save();
            this.userPreferenceStore.add(j);
        }
    },
    getUserPreferenceStore: function ()
    {
        return this.userPreferenceStore;
    },

    /**
     * Handles the login function. Initializes the part manager window,
     * enables the menu bar and creates the stores+loads them.
     */
    onLogin: function () {
        this.createGlobalStores();

        var initialUserPreferences = Ext.decode(this.getLoginManager().getUser().get("initialUserPreferences"));

        var records = this.getUserPreferenceStore().getProxy().getReader().read(initialUserPreferences);

        this.getUserPreferenceStore().loadRecords(records.records);

        this.test();
    },

    onLogout: function ()
    {
        this.menuBar.disable();
        this.centerPanel.removeAll(true);
        this.getStatusbar().setDisconnected();

        Ext.TaskManager.stop(this.unacknowledgedNoticesTask);
    },

    createGlobalStores: function ()
    {
        this.footprintStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.FootprintBundle.Entity.Footprint',
                pageSize: 99999999,
                autoLoad: true
            });

        this.siPrefixStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.SiPrefixBundle.Entity.SiPrefix',
                pageSize: 99999999,
                autoLoad: true
            });

        this.currencyStore = Ext.create("PartKeepr.Data.Store.CurrencyStore", {
            autoLoad: true
        });

        this.distributorStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.DistributorBundle.Entity.Distributor',
                pageSize: 99999999,
                autoLoad: true
            });

        this.manufacturerStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.ManufacturerBundle.Entity.Manufacturer',
                pageSize: 99999999,
                autoLoad: true
            });

        this.partUnitStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.PartBundle.Entity.PartMeasurementUnit',
                pageSize: 99999999,
                autoLoad: true
            });

        this.unitStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.UnitBundle.Entity.Unit',
                pageSize: 99999999,
                autoLoad: true
            });

        this.userStore = Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.AuthBundle.Entity.User',
                pageSize: 99999999,
                autoLoad: true
            });

        this.userPreferenceStore = Ext.create("PartKeepr.data.store.UserPreferenceStore",
            {
                model: 'PartKeepr.AuthBundle.Entity.UserPreference',
                autoLoad: false
            });


    },
    getSystemPreferenceStore: function ()
    {
        return this.systemPreferenceStore;
    },
    /**
     * Queries for a specific system preference. Returns either the value or a default value if
     * the preference was not found.
     * @param key The key to query
     * @param defaultValue A default value to return (optional)
     * @returns the key value, or defaultValue if preference key was not found
     */
    getSystemPreference: function (key, defaultValue)
    {
        if (this.systemPreferenceStore === undefined) {
            return defaultValue;
        }
        var record = this.systemPreferenceStore.findRecord("preferenceKey", key);

        if (record) {
            var value = record.get("preferenceValue");
            var decodedValue = Ext.decode(value, true);

            if (decodedValue === null) {
                return value;
            } else {
                return decodedValue;
            }
        } else {
            return (typeof defaultValue == "undefined") ? null : defaultValue;
        }
    },
    /**
     * Sets a specific system preference. Directly commits the change to the server.
     *
     * @param key The key to set
     * @param value The value to set
     */
    setSystemPreference: function (key, value)
    {
        var record = this.systemPreferenceStore.findRecord("preferenceKey", key);
        value = Ext.encode(value);

        if (record) {
            if (record.get("preferenceValue") != value) {
                record.set("preferenceValue", value);
                record.save();
            }
        } else {
            var j = new PartKeepr.SystemPreferenceBundle.Entity.SystemPreference();
            j.set("preferenceKey", key);
            j.set("preferenceValue", value);
            j.save();
            this.systemPreferenceStore.add(j);
        }
    },
});

PartKeepr.getBasePath = function ()
{
    var href = document.getElementsByTagName('base')[0].href;


    if (href.substr(-2) === '//') {
        return href.substr(0, href.length - 2);
    }

    if (href.substr(-1) === '/') {
        return href.substr(0, href.length - 1);
    }

    return href;
};

/**
 * <p>This static method returns the instance of the application.</p>
 * @return {PartKeepr} The application
 */
PartKeepr.getApplication = function ()
{
    return PartKeepr.application;
};