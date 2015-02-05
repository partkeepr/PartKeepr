/**
 * Represents the project editor component
 */
Ext.define('PartKeepr.ProjectEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.ProjectEditorComponent',
	navigationClass: 'PartKeepr.ProjectGrid',
	editorClass: 'PartKeepr.ProjectEditor',
	newItemText: i18n("New Project"),
	model: 'PartKeepr.Project',
	initComponent: function () {
		this.createStore({
			sorters: [{
				proxy: PartKeepr.getRESTProxy("Project"),
				property: 'name',
				direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});