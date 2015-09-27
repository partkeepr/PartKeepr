/**
 * WSSE Authentication Provider
 */
Ext.define('PartKeepr.Auth.WSSEAuthenticationProvider', {
    extend: 'PartKeepr.Auth.AuthenticationProvider',

    /**
     * @var {String} The WSSE secret
     */
    secret: null,

    /**
     * @var {String} The user's salt
     */
    salt: null,

    /**
     * Retrieves the salt for the user. Note that the authentication for WSSE is a two-part process:
     * In order to authenticate, we require the salt first to build the password hash.
     */
    authenticate: function ()
    {
        PartKeepr.AuthBundle.Entity.User.callPostCollectionAction("getSalt",
            {
                username: this.getUsername()
            },
            Ext.bind(this.onSaltRetrieved, this)
        );
    },

    /**
     * Callback when the salt was received. Generates the secret and attempts to login the user.
     *
     * @param {Object} options
     * @param {Object} success
     * @param {Object} response
     */
    onSaltRetrieved: function (options, success, response)
    {
        this.salt = Ext.decode(response.responseText);

        this.generateSecret();

        PartKeepr.AuthBundle.Entity.User.callPostCollectionAction("login",
            {},
            Ext.bind(this.onLogin, this),
            true
        );

    },

    /**
     * @method add
     * @inheritdoc PartKeepr.Auth.AuthenticationProvider#getHeaders
     */
    getHeaders: function ()
    {
        if (this.secret !== null) {
            return {"X-WSSE": this.getWSSE()};
        }
    },

    /**
     * Generates the WSSE Secret
     */
    generateSecret: function ()
    {
        this.secret = CryptoJS.enc.Base64.stringify(CryptoJS.SHA512(this.getPassword() + "{" + this.salt + "}"));
    },

    /**
     * Generates the nonce
     *
     * @param {Integer} length The length of the nonce
     * @return {String} The generated nonce
     */
    generateNonce: function (length)
    {
        var nonceChars = "0123456789abcdef";
        var result = "";
        for (var i = 0; i < length; i++) {
            result += nonceChars.charAt(Math.floor(Math.random() * nonceChars.length));
        }
        return result;
    },

    /**
     * Returns a W3C-Compliant date
     *
     * @param {Object} date The DateTime object to convert
     * @return {String} The W3C-compliant date
     */
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
     * Returns the WSSE string for authentication
     *
     * @return {String}
     */
    getWSSE: function ()
    {
        var nonce = this.generateNonce(16);
        var nonce64 = base64_encode(nonce);
        var created = this.getW3CDate(new Date());

        var digest = this.encodePassword(nonce + created + this.secret, this.salt, 1);
        return "UsernameToken Username=\""
            + this.getUsername() + "\", PasswordDigest=\""
            + digest + "\", Nonce=\""
            + nonce64 + "\", Created=\""
            + created + "\"";
    },

    /**
     * Merges the password and salt
     *
     * @param {String} raw The raw password
     * @param {String} salt The salt
     */
    mergePasswordAndSalt: function (raw, salt)
    {
        return raw + "{" + salt + "}";
    },

    /**
     * Encodes the password with the salt and a specific number of iterations
     *
     * @param {String} raw The raw password
     * @param {String} salt The salt
     * @param {Integer} iterations The number of iterations
     */
    encodePassword: function (raw, salt, iterations)
    {
        var salted = this.mergePasswordAndSalt(raw, salt);

        var digest = CryptoJS.SHA512(salted);

        for (var i = 1; i < digest; i++) {
            digest = CryptoJS.SHA512(digest + salted);
        }

        return CryptoJS.enc.Base64.stringify(digest);
    }
});
