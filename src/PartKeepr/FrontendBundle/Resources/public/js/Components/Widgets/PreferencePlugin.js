Ext.define('PartKeepr.Components.Widgets.PreferencePlugin', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.preference',

    /**
     * @var {String} Specifies the preference key to bind the component to.
     */
    preferenceKey: null,

    /**
     * @var {String} Specifies if the preference is a system or user preference. Allowed values are "system" or "user".
     */
    preferenceScope: "system",

    preferenceDefault: null,

    pluginId: 'preference',

    init: function (cmp)
    {
        this.setCmp(cmp);

        cmp.on("beforerender", this.loadPreference, this);
    },
    loadPreference: function ()
    {
        if (this.preferenceScope === "system")
        {
            this.getCmp().setValue(
                PartKeepr.getApplication().getSystemPreference(this.preferenceKey, this.preferenceDefault)
            );
        } else
        {
            this.getCmp().setValue(
                PartKeepr.getApplication().getUserPreference(this.preferenceKey, this.preferenceDefault)
            );
        }
    },
    savePreference: function ()
    {
        if (this.preferenceScope === "system")
        {
            PartKeepr.getApplication().setSystemPreference(this.preferenceKey, this.getCmp().getValue());
        } else
        {
            PartKeepr.getApplication().setUserPreference(this.preferenceKey, this.getCmp().getValue());
        }
    }
});
