/**
 * Represents the project grid
 */
Ext.define('PartKeepr.ProjectGrid', {
    extend: 'PartKeepr.EditorGrid',
    alias: 'widget.ProjectGrid',
    columns: [
        {header: i18n("Project"), dataIndex: 'name', flex: 1}
    ],
    addButtonText: i18n("Add Project"),
    addButtonIconCls: 'fugue-icon drill--plus',
    deleteButtonText: i18n("Delete Project"),
    deleteButtonIconCls: 'fugue-icon drill--minus',
    automaticPageSize: true
});
