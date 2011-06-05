Ext.define('PartDB2.DistributorEditorComponent', {
	extend: 'PartDB2.EditorComponent',
	alias: 'widget.DistributorEditorComponent',
	gridClass: 'PartDB2.DistributorGrid',
	editorClass: 'PartDB2.DistributorEditor',
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