/**
 * Represents the system notice editor component
 */
Ext.define('PartKeepr.SystemNoticeEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.SystemNoticeEditorComponent',
    navigationClass: 'PartKeepr.SystemNoticeGrid',
    editorClass: 'PartKeepr.SystemNoticeEditor',
    newItemText: i18n("New System Notice"),
    model: 'PartKeepr.CoreBundle.Entity.SystemNotice',
    titleProperty: "title",
    initComponent: function ()
    {
        this.createStore({
            filters: [
                {
                    property: 'acknowledged',
                    operator: "=",
                    value: false
                }
            ],
            sorters: [
                {
                    property: 'date',
                    direction: 'DESC'
                },

            ]
        });

        this.callParent();
    }
});
