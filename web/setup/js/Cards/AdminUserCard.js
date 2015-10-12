/**
 * This card displays the admin user parameters
 */
Ext.define('PartKeeprSetup.AdminUserCard', {
    extend: 'Ext.form.Panel',

    /**
     * Various Style Settings
     */
    margin: 20,
    border: false,
    bodyStyle: 'background: none;',

    autoScroll: true,
    breadCrumbTitle: 'Admin User',
    layout: 'card',
    defaults: {
        labelWidth: 120
    },

    /**
     * Inits the component
     */
    initComponent: function ()
    {
        this.username = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Username',
            labelWidth: this.defaults.labelWidth,
            allowBlank: false,
            value: PartKeeprSetup.getApplication().getSetupConfig().adminuser.username
        });

        this.username.on("change", this.onUpdateParameters, this);

        this.password = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'Password',
            inputType: "password",
            allowBlank: false,
            labelWidth: this.defaults.labelWidth,
            value: PartKeeprSetup.getApplication().getSetupConfig().adminuser.password

        });

        this.password.on("change", this.onUpdateParameters, this);

        this.email = Ext.create("Ext.form.field.Text", {
            fieldLabel: 'E-Mail',
            labelWidth: this.defaults.labelWidth,
            vtype: 'email',
            allowBlank: false,
            value: PartKeeprSetup.getApplication().getSetupConfig().adminuser.email

        });

        this.email.on("change", this.onUpdateParameters, this);

        this.items = [
            {

                items: [{
                    border: false,
                    bodyStyle: 'background:none;padding-bottom: 10px;',
                    html: 'Please enter the user which will become the administrator:'
                },
                this.username,
                this.password,
                this.email
                ]
            }, {
                    border: false,
                    bodyStyle: 'background:none;padding-bottom: 10px;',
                    html: 'An existing installation has been detected, no new user will be created. Click Next to continue.'
                }

        ];

        this.callParent();
        this.on("activate", this.onActivate, this);
    },
    /**
     * Gets called when the card is activated
     */
    onActivate: function ()
    {
        if (PartKeeprSetup.getApplication().getSetupConfig().existingConfig === true) {
            this.layout.setActiveItem(1);
        } else {
            this.layout.setActiveItem(0);
        }

        // Disable the "next" button, this needs to get enabled by the database cards
        Ext.ComponentQuery.query('#nextBtn')[0].disable();
        this.onUpdateParameters();
    },
    onUpdateParameters: function ()
    {
        if (this.username.isValid() && this.password.isValid() && this.email.isValid()) {
            var config = PartKeeprSetup.getApplication().getSetupConfig();

            Ext.apply(config, {
                adminuser: {
                    username: this.username.getValue(),
                    password: this.password.getValue(),
                    email: this.email.getValue()
                }
            });

            Ext.ComponentQuery.query('#nextBtn')[0].enable();
        } else {
            Ext.ComponentQuery.query('#nextBtn')[0].disable();
        }

    }
});
