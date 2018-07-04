/**
 * Defines the login dialog
 */
Ext.define('PartKeepr.LoginDialog', {
    extend: 'Ext.form.Panel',

    title: i18n("PartKeepr: Login"),

    controller: 'LoginController',

    keyMap: {
        ESC: 'onEsc',
        ENTER: 'login'
    },

    floated: true,
    centered: true,
    shadow: true,

    showAnimation: {
        type: 'fadeIn',
        duration: 250
    },

    items: [{
        xtype: "fieldset",
        items: [{
            xtype: 'textfield',
            itemId: 'username',
            label: i18n("Username")
        }, {
            xtype: 'passwordfield',
            itemId: 'password',
            label: i18n("Password")
        }]
    }, {
        docked: 'bottom',
        xtype: 'toolbar',
        shadow: false,
        items: [{
            xtype: 'button',
            text: 'Login',
            handler: 'login'
        }]
    }],
    /**
     * Initializes the login dialog component
     *
     */
    initialize: function () {
        this.callParent(arguments);

        // Focus the login field on show
        // @workaround Set the focus 100ms after the dialog has been shown.
        this.on("show", function () {
            this.down("#username").focus();
        }, this, {delay: 100});
    },
    getUsername: function () {
        return this.down("#username").getValue();
    },
    getPassword: function () {
        return this.down("#password").getValue();
    }

});