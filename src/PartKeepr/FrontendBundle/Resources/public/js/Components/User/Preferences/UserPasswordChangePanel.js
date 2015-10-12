Ext.define('PartKeepr.UserPasswordChangePanel', {
    extend: 'Ext.form.FormPanel',
    title: i18n("Change Password"),
    bodyStyle: 'background:#DBDBDB;padding: 10px;',
    initComponent: function ()
    {

        this.oldPassword = Ext.create("Ext.form.field.Text", {
            inputType: "password",
            name: 'password',
            labelWidth: 150,
            style: 'border-bottom: 1px solid grey; padding-bottom: 10px;',
            width: 300,
            fieldLabel: i18n("Current Password")
        });

        this.newPassword = Ext.create("Ext.form.field.Text", {
            style: 'margin-top: 10px',
            inputType: "password",
            name: 'password',
            labelWidth: 150,
            width: 300,
            fieldLabel: i18n("New Password")
        });

        this.newPasswordConfirm = Ext.create("Ext.form.field.Text", {
            inputType: "password",
            name: 'password',
            labelWidth: 150,
            width: 300,
            validator: Ext.bind(this.validatePassword, this),
            fieldLabel: i18n("New Password (Confirm)")
        });

        this.items = [
            this.oldPassword,
            this.newPassword,
            this.newPasswordConfirm,
            {
                xtype: 'fieldcontainer',
                hideEmptyLabel: false,
                width: 300,
                labelWidth: 150,
                items: {
                    xtype: 'button',
                    handler: this.onChangePassword,
                    scope: this,
                    width: 145,
                    iconCls: 'web-icon accept',
                    text: i18n("Change Password")
                }
            }
        ];

        this.callParent();
    },
    onChangePassword: function ()
    {
        if (this.getForm().isValid()) {

            var user = PartKeepr.getApplication().getLoginManager().getUser();

            user.callPutAction("changePassword", {
                "oldpassword": this.oldPassword.getValue(),
                "newpassword": this.newPassword.getValue()
            },  Ext.bind(this.onAfterPasswordChange, this));
            // @TODO Logout the user after succesful password change
        }
    },
    onAfterPasswordChange: function (data)
    {
        Ext.Msg.alert(data);
    },
    validatePassword: function ()
    {
        if (this.newPassword.getValue() != this.newPasswordConfirm.getValue()) {
            return i18n("Passwords don't match");
        }

        return true;
    }
});
