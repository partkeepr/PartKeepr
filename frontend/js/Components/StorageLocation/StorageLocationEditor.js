Ext.define('PartKeepr.StorageLocationEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.StorageLocationEditor',
	saveText: i18n("Save Storage Location"),
	
	initComponent: function () {
		var config = {};
		
		Ext.Object.merge(config, {
			autoLoad: false,
			model: "PartKeepr.Part",
			autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
			remoteFilter: true,
			remoteSort: true,
			pageSize: 15});
	
		this.store = Ext.create('Ext.data.Store', config);
	
		this.gridPanel = Ext.create("Ext.grid.Panel", {
			store: this.store,
			columnLines: true,
			columns: [
			           {
		        	  header: i18n("Name"),
		        	  dataIndex: 'name',
		        	  flex: 1,
		        	  minWidth: 200,
		        	  renderer: Ext.util.Format.htmlEncode
		          }
			          ]
		});
		
		var container = Ext.create("Ext.form.FieldContainer", {
			fieldLabel: i18n("Contained Parts"),
			labelWidth: 150,
			layout: 'fit',
			height: 200,
			items: this.gridPanel
		});
		
		this.items =  [{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: i18n("Storage Location")
		}, container ];
		
		this.on("startEdit", this.onStartEdit, this);
		this.callParent();
	},
	onStartEdit: function () {
		this.store.getProxy().extraParams.storageLocation = this.record.get("name");
		this.store.load();
	}
	
});