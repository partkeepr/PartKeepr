Ext.define('PartKeepr.FootprintEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.FootprintEditor',
	saveText: i18n("Save Footprint"),
	layout: 'column',
	syncDirect: true,
	labelWidth: 75,
	initComponent: function () {
		this.on("startEdit", this.onEditStart, this, { delay: 50 });
		
		this.attachmentGrid = Ext.create("PartKeepr.FootprintAttachmentGrid", {
			height: 200,
			anchor: '100%',
			border: true
		});
		
		this.items = [{
			columnWidth: 1,
			minWidth: 500,
			layout: 'anchor',
			xtype: 'container',
			margin: '0 5 0 0',
			items: [				
							{
								xtype: 'textfield',
								name: 'name',
								labelWidth: 75,
								anchor: '100%',
								fieldLabel: i18n("Name")
							},{
								labelWidth: 75,
								xtype: 'textarea',
								name: 'description',
								anchor: '100%',
								fieldLabel: i18n("Description")
							},{
								labelWidth: 75,
								xtype: 'fieldcontainer',
								fieldLabel: i18n("Attachments"),
								items: this.attachmentGrid
							}
				        ]
			},{
				width: 370,
				height: 250,
				xtype: 'remoteimagefield',
				name: 'image_id',
				imageType: 'footprint',
				imageWidth: 256,
				imageHeight: 256,
				labelWidth: 75,
				fieldLabel: i18n("Image")
			}];
		
		this.on("itemSaved", this._onItemSaved, this);
		this.callParent();
	},
	_onItemSaved: function (record) {
		this.attachmentGrid.store.each(function (record) {
			record.set("footprint_id", this.record.get("id"));
		}, this);
		
		this.attachmentGrid.store.sync();
	},
	onEditStart: function () {
		var store = this.record.attachments();
		this.attachmentGrid.bindStore(store);
	}
});