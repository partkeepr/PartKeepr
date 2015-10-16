/**
 * Base class for authentication providers
 */
Ext.define('PartKeepr.Auth.AuthenticationProvider', {

    mixins: ['Ext.mixin.Observable'],

    /**
     * @var {String} The username
     */
    username: null,

    /**
     * @var {String} The password
     */
    password: null,

    /**
     * @var {Object} The authenaticated user
     */
    user: null,

    constructor: function (config)
    {
        this.mixins.observable.constructor.call(this, config);
    },

    /**
     * Returns any additional headers for the requests.
     *
     * Must be overriden in the child classes.
     *
     * @return {Object} An object with all additional headers
     */
    getHeaders: function ()
    {
        return {};
    },

    /**
     * Sets the username for authentication
     *
     * @param {String} username The username
     */
    setUsername: function (username)
    {
        this.username = username;
    },

    /**
     * Returns the username for authentication
     *
     * @return {String} The username
     */
    getUsername: function ()
    {
        return this.username;
    },

    /**
     * Sets the password for authentication
     *
     * @param {String} password The password
     */
    setPassword: function (password)
    {
        this.password = password;
    },

    /**
     * Returns the password for authentication
     *
     * @return {String} The password
     */
    getPassword: function ()
    {
        return this.password;
    },

    /**
     * Triggers the authentication. By default, this simply calls the /api/users/login action, but
     * can be overriden in child classes to provide advanced logic.
     */
    authenticate: function ()
    {
        PartKeepr.AuthBundle.Entity.User.callPostCollectionAction("login",
            {},
            Ext.bind(this.onLogin, this),
            true
        );
    },
    /**
     * Sets the user object
     *
     * @var {Object} user The user object
     */
    setUser: function (user)
    {
        this.user = user;
    },
    /**
     * Returns the user object
     *
     * @return {Object} The user object
     */
    getUser: function ()
    {
        return this.user;
    },
    /**
     * Callback handler for the login action. Checks if the response contains a status code of 401.
     *
     * @param {Object} options The options object
     * @param {Boolean} success If the request was successful
     * @param {Object} response The response object
     */
    onLogin: function (options, success, response)
    {
        if (response.status == "401") {
            this.fireEvent("authenticate", false);
        } else {
            var records = PartKeepr.AuthBundle.Entity.User.getProxy().getReader().read(response);
            this.setUser(records.getRecords()[0]);
            this.fireEvent("authenticate", true);
        }
    },
    statics: {
        /**
         * @var {Object} The current authentication provider
         */
        authenticationProvider: null,

        /**
         * Retrieves the authentication provider. If no authentication provider is set, automatically
         * returns the base class, which doesn't have any functionality.
         *
         * @return {Object} The authentication provider
         */
        getAuthenticationProvider: function ()
        {
            if (!(this.authenticationProvider instanceof PartKeepr.Auth.AuthenticationProvider)) {
                this.authenticationProvider = Ext.create("PartKeepr.Auth.AuthenticationProvider");
            }

            return this.authenticationProvider;
        },

        /**
         * Sets the authentication provider
         *
         * @param {Object} The authentication provider
         */
        setAuthenticationProvider: function (authenticationProvider)
        {
            this.authenticationProvider = authenticationProvider;

        }
    }
});
