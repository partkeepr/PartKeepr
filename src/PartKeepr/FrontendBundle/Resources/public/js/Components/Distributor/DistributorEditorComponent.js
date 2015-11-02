Ext.define('PartKeepr.DistributorEditorComponent', {
	extend: 'PartKeepr.EditorComponent',
	alias: 'widget.DistributorEditorComponent',
	navigationClass: 'PartKeepr.DistributorGrid',
	editorClass: 'PartKeepr.DistributorEditor',
	newItemText: i18n("New Distributor"),
	model: 'PartKeepr.DistributorBundle.Entity.Distributor',
	initComponent: function () {
		this.createStore({
			sorters: [{
	              property: 'name',
	              direction:'ASC'
	          }]
		});
		
		this.callParent();
	},
    statics: {
        iconCls: 'web-icon lorry',
        title: i18n('Distributors'),
        closable: true,
        menuPath: [{text: i18n("Edit")}]
    }
});
