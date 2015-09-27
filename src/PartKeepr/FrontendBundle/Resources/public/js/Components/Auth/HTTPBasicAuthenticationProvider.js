/**
 * HTTP Basic Authentication Provider
 */
Ext.define('PartKeepr.Auth.HTTPBasicAuthenticationProvider', {
    extend: 'PartKeepr.Auth.AuthenticationProvider',

    /**
     * @method add
     * @inheritdoc PartKeepr.Auth.AuthenticationProvider#getHeaders
     */
    getHeaders: function ()
    {
        var hash = base64_encode(this.getUsername() + ":" + this.getPassword());

        return {
            "Authorization": "Basic " + hash
        };

    }
});
