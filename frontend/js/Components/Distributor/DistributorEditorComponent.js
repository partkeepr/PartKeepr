Ext.define('PartKeepr.DistributorEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.DistributorEditorComponent',
	gridClass: 'PartKeepr.DistributorGrid',
	editorClass: 'PartKeepr.DistributorEditor',
	newItemText: i18n("New Distributor"),
	initComponent: function () {
		this.createStore({
			model: "Distributor",
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});