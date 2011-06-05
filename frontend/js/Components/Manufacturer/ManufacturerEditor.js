Ext.define('PartDB2.ManufacturerEditor', {
	extend: 'PartDB2.Editor',
	alias: 'widget.ManufacturerEditor',
	saveText: i18n("Save Manufacturer"),
	model: 'PartDB2.Manufacturer',
	labelWidth: 150,
	initComponent: function () {
		this.on("startEdit", Ext.bind(this.onEditStart, this));
		
		this.tpl = [
				'<tpl for=".">',
		            '<div class="thumb-wrap" id="{id}">',
				    '<div class="thumb"><img src="image.php?type=iclogo&id={id}&w=32&h=32&tmpId={tmp_id}"></div>',
				    '</div>',
		        '</tpl>',
		        '</tpl>',
		        '<div class="x-clear"></div>'
		        ];
		
		this.addLogoButton = Ext.create("Ext.button.Button", {
			cls:'x-btn-text-icon',
	        icon: "resources/silkicons/add.png",
	        text: i18n("Add Logo"),
	        handler: Ext.bind(this.uploadImage, this)
		});
		
		this.deleteLogoButton = Ext.create("Ext.button.Button", {
			cls:'x-btn-text-icon',
	        icon: "resources/silkicons/delete.png",
	        text: i18n("Delete Logo"),
	        disabled: true,
	        handler: Ext.bind(this.deleteImage, this)
		});
		
		this.iclogoGrid = Ext.create("Ext.view.View", {
			store: null,
			border: true,
			frame: true,
			style: 'background-color: white',
			emptyText: 'No images to display',
			height: 200,
			fieldLabel: i18n("Logos"),
			overItemCls: 'x-view-over',
			componentCls: 'manufacturer-ic-logos',
			itemSelector: 'div.thumb-wrap',
			singleSelect: true,
			anchor: '100%',
			tpl: this.tpl,
			listeners: {
				selectionchange: Ext.bind(function (view, selections) {
					if (selections.length > 0) {
						this.deleteLogoButton.enable();
					} else {
						this.deleteLogoButton.disable();
					}
				}, this) 
					//this.onLogoSelectionChange.createDelegate(this)
			}
		});
		
		this.items = [{
			xtype: 'textfield',
			name: 'name',
			fieldLabel: i18n("Manufacturer Name")
		},{
			xtype: 'textarea',
			name: 'address',
			fieldLabel: i18n("Address")
		},{
			xtype: 'textfield',
			name: 'url',
			fieldLabel: i18n("Website")
		},{
			xtype: 'textfield',
			name: 'email',
			fieldLabel: i18n("Email")
		},{
			xtype: 'textarea',
			name: 'comment',
			fieldLabel: i18n("Comment")
		},{
			xtype: 'fieldcontainer',
			fieldLabel: i18n("Manufacturer Logos"),
			items: [{
				xtype: 'panel',
				dockedItems: [{
					xtype: 'toolbar',
					dock: 'bottom',
					items: [ this.addLogoButton, this.deleteLogoButton ]
					}],
				items: this.iclogoGrid
			}]
			
		}];
		
		
		this.callParent();
		
	},
	onItemSave: function () {
		this.callParent();
		
		this.iclogoGrid.getStore().sync();
	},
	onFileUploaded: function (id) {
		this.iclogoGrid.getStore().add({
			type: 'tmp',
			tmp_id: id,
			manufacturer_id: this.record.get("id") 
		});
	},
	uploadImage: function () {
		var j = Ext.create("PartDB2.FileUploadDialog");
		j.on("fileUploaded", Ext.bind(this.onFileUploaded, this));
		j.show();
	},
	deleteImage: function () {
		this.iclogoGrid.store.remove(this.iclogoGrid.getSelectionModel().getLastSelected());
	},
	onEditStart: function () {
		var store = this.record.iclogos();
		store.load();
		this.iclogoGrid.bindStore(store);
	}
});