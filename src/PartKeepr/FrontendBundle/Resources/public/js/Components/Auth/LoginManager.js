/**
 * The login manager is responsible for handling logins. Depending on the configuration, the user may be
 * pre-authenticated or the system needs to display a login dialog.
 */
Ext.define('PartKeepr.Auth.LoginManager', {

    mixins: ['Ext.mixin.Observable'],

    /**
     * @var {Object} An instance of the login dialog
     */
    loginDialog: null,

    /**
     * @var {Object} The authentication provider
     */
    provider: null,

    /**
     * @var {Boolean} If the user is logged in or not
     */
    loggedIn: false,

    config: {
        /**
         * @var {Boolean} True if auto-login is required
         */
        autoLogin: false,

        /**
         * @var {String} The username to use for auto-login
         */
        autoLoginUsername: null,

        /**
         * @var {String} The password to use for auto-login
         */
        autoLoginPassword: null
    },

    constructor: function (config)
    {
        this.mixins.observable.constructor.call(this, config);
        this.provider = PartKeepr.Auth.AuthenticationProvider.getAuthenticationProvider();
        this.provider.on("authenticate", this.onAuthenticate, this);

        this.loginDialog = Ext.create("PartKeepr.LoginDialog");
        this.loginDialog.on("login", this.onLoginDialog, this);
    },
    /**
     * Triggers the login process. If auto-login is required, directly calls authenticate(). If not, the
     * login dialog is shown.
     */
    login: function ()
    {
        if (this.config.autoLogin) {
            this.provider.setUsername(this.config.autoLoginUsername);
            this.provider.setPassword(this.config.autoLoginPassword);
            this.provider.authenticate();
        } else {
            this.loginDialog.show();
        }
    },
    /**
     * Triggers the logout process by calling the backend's logout function, which in turn
     * clears the session information and de-authenticates the user.
     */
    logout: function ()
    {
        PartKeepr.AuthBundle.Entity.User.callGetCollectionAction("logout",
            {},
            Ext.bind(this.onLogout, this),
            true
        );
    },
    /**
     * Callback for the logout action. Fires the logout event, which destroys
     * all windows.
     */
    onLogout: function () {
        this.loggedIn = false;
        this.fireEvent("logout");
    },
    /**
     * Callback when the authentication has completed. Fires the "login" event if the authentication was successful.
     * Displays an error message if the authentication was not successful.
     *
     * @param {Boolean} success If the authentication was successful or not
     */
    onAuthenticate: function (success)
    {
        if (success) {
            this.loginDialog.hide();
            this.fireEvent("login");
            this.loggedIn = true;
        } else {
            Ext.Msg.alert(i18n("Error"), i18n('Username or password invalid.'),
                function ()
                {
                    this.loginDialog.show();
                },
                this
            );
        }
    },
    /**
     * Returns the authenticated user
     *
     * @return {Object} The user object
     */
    getUser: function ()
    {
        return this.provider.getUser();
    },
    /**
     * Callback when the login dialog fired the "login" event. Passes the login data to the authentication provider
     * and starts the authentication process
     *
     * @param {String} username The username
     * @param {String} password The password
     */
    onLoginDialog: function (username, password)
    {
        this.provider.setUsername(username);
        this.provider.setPassword(password);
        this.provider.authenticate();
    },
    /**
     * Returns if the user is logged in or not
     *
     * @return {Boolean}
     */
    isLoggedIn: function ()
    {
        return this.loggedIn;
    }

});
