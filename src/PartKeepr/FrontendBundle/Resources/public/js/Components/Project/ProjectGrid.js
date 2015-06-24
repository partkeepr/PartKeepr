/**
 * Represents the project grid
 */
Ext.define('PartKeepr.ProjectGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.ProjectGrid',
	columns: [
	          {header: i18n("Project"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Project"),
	addButtonIcon: 'bundles/brainbitsfugueicons/icons/fugue/16/drill--plus.png',
    deleteButtonText: i18n("Delete Project"),
    deleteButtonIcon: 'bundles/brainbitsfugueicons/icons/fugue/16/drill--minus.png',
    automaticPageSize: true
});