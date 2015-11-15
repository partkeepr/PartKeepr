/**
 * This card displays the input field for the authentication key.
 */
Ext.define('PartKeeprSetup.AuthKeyCard', {
    extend: 'Ext.form.Panel',

    /**
     * Various Style Settings
     */
    margin: 20,
    autoScroll: true,
    breadCrumbTitle: 'Authentication Key',

    defaults: {
        labelWidth: 120
    },
    border: false,
    bodyStyle: 'background: none;',

    /**
     * Inits the component
     */
    initComponent: function ()
    {
        this.authKey = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Authentication Key',
            labelWidth: this.defaults.labelWidth,
            allowBlank: false,
            minLength: 32,
            maxLength: 32,
            minLengthText: "The authentication key must be 32 characters",
            maxLengthText: "The authentication key must be 32 characters",
            value: PartKeeprSetup.getApplication().getSetupConfig().authKey
        });

        this.authKey.on("change", this.onUpdateParameters, this);

        this.items = [
            {
                border: false,
                bodyStyle: 'background:none;padding-bottom: 10px;',
                html: 'In order to protect unauthorized users to re-run setup, please open the file <strong>app/authkey.php</strong> and paste the authentication key in the field below:'
            },
            this.authKey
        ];

        this.callParent();
        this.on("activate", this.onActivate, this);
    },
    /**
     * Gets called when the card is activated
     */
    onActivate: function ()
    {
        Ext.ComponentQuery.query('#nextBtn')[0].disable();
        this.authKey.focus();
        this.onUpdateParameters();
    },
    onUpdateParameters: function ()
    {
        if (this.authKey.isValid()) {
            var config = PartKeeprSetup.getApplication().getSetupConfig();

            Ext.merge(config, {authKey: this.authKey.getValue()});

            Ext.ComponentQuery.query('#nextBtn')[0].enable();
        } else {
            Ext.ComponentQuery.query('#nextBtn')[0].disable();
        }

    }
});
