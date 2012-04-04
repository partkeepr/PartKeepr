Ext.define('PartKeepr.StorageLocationEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.StorageLocationEditor',
	saveText: i18n("Save Storage Location"),
	
	layout: 'column',
	
	initComponent: function () {
		var config = {};
		
		Ext.Object.merge(config, {
			autoLoad: false,
			model: "PartKeepr.Part",
			autoSync: false, // Do not change. If true, new (empty) records would be immediately commited to the database.
			remoteFilter: true,
			remoteSort: true,
			proxy: PartKeepr.getRESTProxy("Part"),
			pageSize: 15});
	
		this.store = Ext.create('Ext.data.Store', config);
	
		this.gridPanel = Ext.create("PartKeepr.BaseGrid", {
			store: this.store,
			columnLines: true,
			columns: [
			           {
		        	  header: i18n("Name"),
		        	  dataIndex: 'name',
		        	  flex: 1,
		        	  minWidth: 200,
		        	  renderer: Ext.util.Format.htmlEncode
		          },{
		        	  header: i18n("Qty"),
		        	  width: 50,
		        	  dataIndex: 'stockLevel'
		          }
			          ]
		});
		
		var container = Ext.create("Ext.form.FieldContainer", {
			fieldLabel: i18n("Contained Parts"),
			labelWidth: 110,
			layout: 'fit',
			height: 246,
			items: this.gridPanel
		});
		
		
		
		this.items =  [{
			columnWidth: 1,
   			minWidth: 500,
   			layout: 'anchor',
			xtype: 'container',
			margin: '0 5 0 0',
			items: [{
			        	xtype: 'textfield',
			        	name: 'name',
			        	labelWidth: 110,
			        	fieldLabel: i18n("Storage Location")
					},
					container
					]},
					{
						width: 370,
						height: 250,
						xtype: 'remoteimagefield',
						name: 'image_id',
						imageType: 'storagelocation',
						imageWidth: 256,
						imageHeight: 256,
						labelWidth: 110,
						fieldLabel: i18n("Image")
					}];
		
		this.on("startEdit", this.onStartEdit, this);
		this.callParent();
	},
	onStartEdit: function () {
		this.store.getProxy().extraParams.storageLocation = this.record.get("name");
		this.store.load();
	}
	
});