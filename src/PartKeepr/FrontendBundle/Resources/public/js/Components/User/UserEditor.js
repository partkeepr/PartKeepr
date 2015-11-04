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
                value: i18n('This user is a legacy user. You must provide a password in order to change the user. Please read <a href="https://wiki.partkeepr.org/wiki/Authentication" target="_blank">the PartKeepr Wiki regarding Authentication</a> for further information.'),
                hidden: true
            }
        ];

        this.on("startEdit", this.toggleLegacyField, this, {delay: 200});
        this.callParent();
    },
    toggleLegacyField: function ()
    {
        if (this.record.get("legacy") === true) {
            this.down("#legacyField").setVisible(true);
        } else {
            this.down("#legacyField").setVisible(false);
        }
    }
});
