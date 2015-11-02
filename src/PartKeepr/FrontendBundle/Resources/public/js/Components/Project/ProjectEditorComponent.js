/**
 * Represents the project editor component
 */
Ext.define('PartKeepr.ProjectEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.ProjectEditorComponent',
    navigationClass: 'PartKeepr.ProjectGrid',
    editorClass: 'PartKeepr.ProjectEditor',
    newItemText: i18n("New Project"),
    model: 'PartKeepr.ProjectBundle.Entity.Project',
    initComponent: function ()
    {
        this.createStore({
            sorters: [
                {
                    property: 'name',
                    direction: 'ASC'
                }
            ]
        });

        this.callParent();
    },
    statics: {
        iconCls: 'fugue-icon drill',
        title: i18n('Projects'),
        closable: true,
        menuPath: [{ text: i18n("Edit")}]
    }
});
