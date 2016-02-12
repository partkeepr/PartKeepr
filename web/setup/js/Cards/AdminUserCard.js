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
    breadCrumbTitle: 'User Data',
    layout: {
        type: 'vbox',
        pack: 'start',
        align: 'stretch'
    },
    defaults: {
        labelWidth: 150
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
            regex: /^[a-zA-Za0-9.\-_\/\\]{3,50}$/,
            regexText: "The username must be 3-50 characters in length and may only contain the following characters: a-z, A-Z, 0-9, an underscore (_), a backslash (\), a slash (/), a dot (.) or a dash (-)",
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

        this.createNewUserRadioGroup = Ext.create("Ext.form.RadioGroup", {
            columns: 1,
            items: [
                {
                    boxLabel: 'Leave existing users untouched', name: 'create', inputValue: false, columnWidth: .4
                },
                {
                    boxLabel: 'Create new user', name: 'create', inputValue: true
                }
            ]
        });

        this.createNewUserRadioGroup.on("change", this.onUserModeChanged, this);

        this.authenticationMethodRadioGroup = Ext.create("Ext.form.RadioGroup", {
            labelAlign: 'top',
            height: 75,
            fieldLabel: 'Authentication Method',
            columns: 1,
            items: [
                {
                    boxLabel: 'HTTP Basic', name: 'authentication_provider', inputValue: 'PartKeepr.Auth.HTTPBasicAuthenticationProvider'
                },
                {
                    boxLabel: 'WSSE', name: 'authentication_provider', inputValue: 'PartKeepr.Auth.WSSEAuthenticationProvider'
                }
            ]
        });

        this.authenticationMethodRadioGroup.on("change", this.onAuthenticationMethodChanged, this);

        this.userInputForm = Ext.create("Ext.Panel", {
            bodyStyle: 'background:none;padding-bottom: 10px;',
            border: false,
            items: [
                {
                    border: false,
                    bodyStyle: 'background:none;padding-bottom: 10px;',
                    html: 'Please enter the user which will become the administrator:'
                },
                this.username,
                this.password,
                this.email
            ],
            flex: 1
        });
        this.items = [
            this.createNewUserRadioGroup,
            this.userInputForm,
            this.authenticationMethodRadioGroup,
            {
                xtype: 'fieldcontainer',
                hideEmptyLabel: true,
                height: 20,
                border: false,
                bodyStyle: 'background: none;',
                html: '<a href="https://wiki.partkeepr.org/wiki/KB00006:Authentication_Provider" target="_blank">Help me decide</a>'
            }
        ];

        this.callParent();
        this.on("activate", this.onActivate, this);
    },
    onAuthenticationMethodChanged: function () {
        var values = this.authenticationMethodRadioGroup.getValue();
        PartKeeprSetup.getApplication().getSetupConfig().values.authentication_provider = values.authentication_provider;
    },
    onUserModeChanged: function ()
    {
        var values = this.createNewUserRadioGroup.getValue();

        if (values.create === true) {
            Ext.ComponentQuery.query('#nextBtn')[0].disable();
            this.userInputForm.show();
        } else {
            Ext.ComponentQuery.query('#nextBtn')[0].enable();
            this.userInputForm.hide();
        }

        PartKeeprSetup.getApplication().getSetupConfig().createUser = values.create;
    },
    /**
     * Gets called when the card is activated
     */
    onActivate: function ()
    {
        if (PartKeeprSetup.getApplication().getSetupConfig().createUser === false) {
            this.createNewUserRadioGroup.setValue({ create: false});
        } else {
            this.createNewUserRadioGroup.setValue({ create: true});
        }

        this.authenticationMethodRadioGroup.setValue({ authentication_provider: PartKeeprSetup.getApplication().getSetupConfig().values.authentication_provider});

        if (PartKeeprSetup.getApplication().getSetupConfig().existingUsers === 0) {
            this.createNewUserRadioGroup.hide();
            Ext.ComponentQuery.query('#nextBtn')[0].disable();
        }
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
