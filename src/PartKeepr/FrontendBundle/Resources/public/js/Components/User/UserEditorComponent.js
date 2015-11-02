Ext.define('PartKeepr.UserEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.UserEditorComponent',
    navigationClass: 'PartKeepr.UserGrid',
    editorClass: 'PartKeepr.UserEditor',
    newItemText: i18n("New User"),
    deleteMessage: i18n("Do you really wish to delete the user '%s'?"),
    deleteTitle: i18n("Delete User"),

    model: 'PartKeepr.AuthBundle.Entity.User',

    titleProperty: 'username',

    initComponent: function ()
    {
        this.createStore({
            sorters: [
                {
                    property: 'username',
                    direction: 'ASC'
                }
            ],
            autoLoad: false
        });

        this.callParent();
    },
    statics: {
        iconCls: 'web-icon user',
        title: i18n('Users'),
        closable: true,
        menuPath: [{text: i18n("Edit")}]
    }
});
