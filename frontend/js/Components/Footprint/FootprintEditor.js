Ext.define('PartKeepr.FootprintEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.FootprintEditor',
	saveText: i18n("Save Footprint"),
	model: 'PartKeepr.Footprint',
	initComponent: function () {
		this.on("startEdit", this.onEditStart, this, { delay: 50 });
		
		this.attachmentGrid = Ext.create("PartKeepr.FootprintAttachmentGrid", {
			height: 200,
			border: true
		});
		
		this.items = [{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: i18n("Footprint")
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: i18n("Attachments"),
			items: this.attachmentGrid
		}];
		
		this.callParent();
	},
	onEditStart: function () {
		var store = this.record.attachments();
		store.load();
		this.attachmentGrid.bindStore(store);
	},
	onItemSave: function () {
		this.callParent();
		
		this.attachmentGrid.getStore().sync();
	}
});