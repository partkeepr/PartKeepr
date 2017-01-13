/**
 * Represents the project grid
 */
Ext.define('PartKeepr.ProjectRunGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.ProjectRunGrid',
    columns: [
        {header: i18n("Project Run"), dataIndex: 'runDateTime', flex: 1, xtype: 'datecolumn'},
        {
            header: i18n("Project"), renderer: function (r, v, rec)
        {
            if (rec.getProject() !== null) {
                return rec.getProject().get("name");
            }
            return "";
        }, flex: 1
        }
    ],
    automaticPageSize: true,
    enableEditing: false
})
;
