/**
 * Represents the project editor component
 */
Ext.define('PartKeepr.ProjectRunEditorComponent', {
    extend: 'PartKeepr.EditorComponent',
    alias: 'widget.ProjectRunEditorComponent',
    navigationClass: 'PartKeepr.ProjectRunGrid',
    editorClass: 'PartKeepr.ProjectRunEditor',
    titleProperty: 'project.name',
    model: 'PartKeepr.ProjectBundle.Entity.ProjectRun',
    initComponent: function ()
    {
        this.createStore({
            sorters: [
                {
                    property: 'runDateTime',
                    direction: 'DESC'
                }
            ]
        });

        this.callParent();
    },
    statics: {
        iconCls: 'fugue-icon drill',
        title: i18n('Project Runs'),
        closable: true,
        menuPath: [{ text: i18n("View")}]
    }
});
