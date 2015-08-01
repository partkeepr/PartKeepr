/**
 * Represents a session against the PartKeepr Server.
 */
Ext.define("PartKeepr.SessionManager", {
    extend: 'Ext.util.Observable',

    /**
     * Holds the current session ID, or null if no session is active
     *
     * @var string
     */
    session: null,

    /**
     * Holds an instance of the login dialog, or "null" if no login dialog is active.
     *
     * @var object
     */
    loginDialog: null,


    /**
     * Constructs a new SessionManager.
     *
     * @param config Optional: Specifies a configuration object
     */
    constructor: function (config)
    {
        this.callParent(arguments);
    },
    generateNonce: function (length)
    {
        var nonceChars = "0123456789abcdef";
        var result = "";
        for (var i = 0; i < length; i++) {
            result += nonceChars.charAt(Math.floor(Math.random() * nonceChars.length));
        }
        return result;
    },
    getW3CDate: function (date)
    {
        var yyyy = date.getUTCFullYear();
        var mm = (date.getUTCMonth() + 1);
		if (mm < 10) {
			mm = "0" + mm;
		}
        var dd = (date.getUTCDate());
		if (dd < 10) {
			dd = "0" + dd;
		}
        var hh = (date.getUTCHours());
		if (hh < 10) {
			hh = "0" + hh;
		}
        var mn = (date.getUTCMinutes());
		if (mn < 10) {
			mn = "0" + mn;
		}
        var ss = (date.getUTCSeconds());
		if (ss < 10) {
			ss = "0" + ss;
		}
        return yyyy + "-" + mm + "-" + dd + "T" + hh + ":" + mn + ":" + ss + "Z";
    },
    /**
     * Creates and shows the login dialog, as well as setting up any event handlers.
     */
    login: function (username, password)
    {
        this.loginDialog = Ext.create("PartKeepr.LoginDialog");

        if (username && password) {
            this.onLogin(username, password);
        } else {
            this.loginDialog.on("login", this.onLogin, this);
            this.loginDialog.show();
        }
    },
    onSaltRetrieved: function (salt)
    {
        this.salt = salt;


        this.secret = CryptoJS.enc.Base64.stringify(CryptoJS.SHA512(this.password + "{" + this.salt + "}"));
        this.fireEvent("login");
    },
    getWSSE: function () {
        var nonce = this.generateNonce(16);
        var nonce64 = base64_encode(nonce);
        var created = this.getW3CDate(new Date());

        var digest = this.encodePassword(nonce + created + this.secret, this.salt, 1);
        return "UsernameToken Username=\""
            + this.username + "\", PasswordDigest=\""
            + digest + "\", Nonce=\""
            + nonce64 + "\", Created=\""
            + created + "\"";
    },
    mergePasswordAndSalt: function (raw, salt)
    {
        "use strict";
        return raw + "{" + salt + "}";
    },
    encodePassword: function (raw, salt, iterations)
    {
        "use strict";
        var salted = this.mergePasswordAndSalt(raw, salt);

        var digest = CryptoJS.SHA512(salted);

        for (var i = 1; i < digest; i++) {
            digest = CryptoJS.SHA512(digest + salted);
        }

        return CryptoJS.enc.Base64.stringify(digest);
    },
    /**
     * Removes the current session.
     */
    logout: function ()
    {
        this.session = null;
    },
    /**
     * Callback from the login dialog when the "login" button was clicked.
     *
     * @param username The username, as entered in the login dialog
     * @param password The password, as entered
     */
    onLogin: function (username, password)
    {
        this.username = username;
        this.password = password;

        var k = new PartKeepr.ServiceCall("auth", "getSalt");
        k.setParameter("username", username);
        k.setHandler(Ext.bind(this.onSaltRetrieved, this));
        k.doCall();

    },
    /**
     * Callback when the service call is complete.
     *
     * @param response The session ID
     */
    onAfterLogin: function (response)
    {
        console.log(response);
        this.setSession(response.sessionId);
        this.loginDialog.destroy();

        PartKeepr.getApplication().setAdmin(response.isAdmin);
        PartKeepr.getApplication().setUsername(response.username);

        PartKeepr.getApplication().setInitialUserPreferences(response.userPreferences);

        this.fireEvent("login");

    },
    /**
     * Sets the session
     */
    setSession: function (sessionid)
    {
        this.session = sessionid;
    },
    /**
     * Returns the current session
     *
     * @returns the session, or null if no session is available
     */
    getSession: function ()
    {
        return this.session;
    }
});