/**
 * Defines the login dialog
 */
Ext.define('PartKeepr.LoginDialog', {
    extend: 'Ext.Window',

    title: i18n("PartKeepr: Login"),

    controller: 'LoginController',

    maxWidth: 400,

    modal: true,
    resizable: false,

    layout: 'anchor',
    bodyStyle: 'padding: 5px;',

    keyMap: {
        ESC: 'onEsc',
        ENTER: 'login'
    },

    /**
     * Initializes the login dialog component
     *
     * @todo Get rid of this stuff and implement it ExtJS5 (modern style)
     */
    initComponent: function ()
    {

        this.loginField = Ext.ComponentMgr.create({
            xtype: 'textfield',
            value: "",
            itemId: 'username',
            fieldLabel: i18n("Username"),
            anchor: '100%'
        });

        this.passwordField = Ext.ComponentMgr.create({
            xtype: 'textfield',
            inputType: "password",
            itemId: 'password',
            value: "",
            fieldLabel: i18n("Password"),
            anchor: '100%'
        });

        Ext.apply(this, {
            items: [
                this.loginField,
                this.passwordField
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    enableOverflow: false,
                    dock: 'bottom',
                    ui: 'footer',
                    pack: 'start',
                    defaults: {minWidth: 100},
                    items: [
                        {
                            text: i18n("Connect"),
                            iconCls: "web-icon connect",
                            handler: 'login'
                        }, {
                            text: i18n("Close"),
                            iconCls: "web-icon cancel",
                            handler: Ext.bind(this.close, this)
                        }
                    ]
                }
            ]
        });

        this.callParent(arguments);

        // Focus the login field on show
        // @workaround Set the focus 100ms after the dialog has been shown.
        this.on("show", function ()
        {
            this.loginField.focus();
        }, this, {delay: 100});
    },
    getUsername: function () {
        return this.down("#username").getValue();
    },
    getPassword: function () {
        return this.down("#password").getValue();
    }
});
