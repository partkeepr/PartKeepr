Ext.define('PartKeepr.UserEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.UserEditor',

    saveText: i18n("Save User"),
    titleProperty: 'username',

    initComponent: function ()
    {
        this.items = [
            {
                xtype: 'textfield',
                name: 'username',
                regex: /^[a-zA-Za0-9.\-_\/\\]{3,50}$/,
                regexText: i18n("The username must be 3-50 characters in length and may only contain the following characters: a-z, A-Z, 0-9, an underscore (_), a backslash (\), a slash (/), a dot (.) or a dash (-)"),
                fieldLabel: i18n("User")
            }, {
                xtype: 'textfield',
                name: 'email',
                vtype: 'email',
                fieldLabel: i18n("E-Mail")
            }, {
                xtype: 'textfield',
                inputType: "password",
                name: 'newPassword',
                fieldLabel: i18n("Password")
            }, {
                xtype: 'displayfield',
                itemId: 'legacyField',
                fieldLabel: i18n("Legacy User"),
                value: i18n(
                    'This user is a legacy user. You must provide a password in order to change the user. Please read <a href="https://wiki.partkeepr.org/wiki/Authentication" target="_blank">the PartKeepr Wiki regarding Authentication</a> for further information.'),
                hidden: true
            }, {
                xtype: 'checkbox',
                itemId: 'activeCheckbox',
                fieldLabel: i18n("Active"),
                name: "active",
                hidden: true
            }, {
                value: i18n("This is a protected user, which may not be changed"),
                xtype: 'displayfield',
                itemId: 'protectedNotice',
                hidden: true
            }
        ];

        this.on("startEdit", this.onStartEdit, this, {delay: 200});
        this.callParent();
    },
    onStartEdit: function ()
    {
        if (this.record.get("protected") === true) {
            this.items.each(function (item) {
                if (item instanceof Ext.form.field.Base && !(item instanceof Ext.form.field.Display)) {
                    item.disable();
                }
            });
            this.saveButton.disable();
        } else {
            this.items.each(function (item) {
                if (item instanceof Ext.form.field.Base && !(item instanceof Ext.form.field.Display)) {
                    item.enable();
                }
            });
            this.saveButton.enable();
        }

        var isBuiltInProvider = this.record.getProvider() !== null &&
            this.record.getProvider().get("type") === "Builtin" &&
            this.record.get("legacy") === false;

        if (isBuiltInProvider || this.record.phantom === true) {
            this.down("#activeCheckbox").setVisible(true);
        } else {
            this.down("#activeCheckbox").setVisible(false);
        }

        if (this.record.phantom) {
            this.down("#activeCheckbox").setValue(true);
        }

        if (this.record.get("protected") === true) {
            this.down("#protectedNotice").setVisible(true);
        } else {
            this.down("#protectedNotice").setVisible(false);
        }

        if (this.record.get("legacy") === true) {
            this.down("#legacyField").setVisible(true);
        } else {
            this.down("#legacyField").setVisible(false);
        }
    }
});
