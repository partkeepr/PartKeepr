Ext.define('PartKeepr.FootprintEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.FootprintEditor',
	saveText: i18n("Save Footprint"),
	layout: 'column',
	defaultListenerScope: true,
	syncDirect: true,
	labelWidth: 75,
	initComponent: function () {
		this.on("startEdit", this.onEditStart, this, { delay: 50 });
		
		this.attachmentGrid = Ext.create("PartKeepr.FootprintAttachmentGrid", {
			height: 200,
			width: '100%',
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
								anchor: '100%',
								fieldLabel: i18n("Attachments"),
								items: this.attachmentGrid
							}
				        ]
			},{
				width: 370,
				height: 250,
				xtype: 'fieldcontainer',
				items: {
					xtype: 'remoteimagefield',
					itemId: 'image',
					maxHeight: 256,
					maxWidth: 256,
					listeners: {
						'fileUploaded': "onFileUploaded"
					}
				},
				labelWidth: 75,
				fieldLabel: i18n("Image")

			}];
		
		this.on("itemSaved", this._onItemSaved, this);
		this.callParent();
	},
	onFileUploaded: function (data) {
		var uploadedFile = Ext.create("PartKeepr.UploadedFileBundle.Entity.TempUploadedFile", data);

		if (this.record.getImage() === null) {
			this.record.setImage(data);
		} else {
			this.record.getImage().set("replacement", uploadedFile.getId());
		}

		this.down('#image').setValue(uploadedFile);
	},
	_onItemSaved: function (record) {
		this.attachmentGrid.bindStore(record.attachments());
	},
	onEditStart: function () {
		var store = this.record.attachments();
		this.attachmentGrid.bindStore(store);
		this.down('#image').setValue(this.record.getImage());

	}
});
