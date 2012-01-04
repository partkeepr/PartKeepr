Ext.define('PartKeepr.DistributorEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.DistributorEditorComponent',
	navigationClass: 'PartKeepr.DistributorGrid',
	editorClass: 'PartKeepr.DistributorEditor',
	newItemText: i18n("New Distributor"),
	model: 'PartKeepr.Distributor',
	initComponent: function () {
		this.createStore({
			proxy: PartKeepr.getRESTProxy("Distributor"),
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	}
});