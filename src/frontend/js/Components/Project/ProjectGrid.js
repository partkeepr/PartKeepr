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
	addButtonIcon: 'resources/fugue-icons/icons/drill--plus.png',
    deleteButtonText: i18n("Delete Project"),
    deleteButtonIcon: 'resources/fugue-icons/icons/drill--minus.png'
});