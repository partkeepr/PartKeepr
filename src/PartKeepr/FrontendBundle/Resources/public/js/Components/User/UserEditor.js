Ext.define('PartKeepr.UserEditor', {
    extend: 'PartKeepr.Editor',
    alias: 'widget.UserEditor',

    saveText: i18n("Save User"),
    model: 'PartKeepr.User',
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
                name: 'password',
                fieldLabel: i18n("Password")
            }
        ];

        this.callParent();
    }});
