/**
 * @class PartKeepr.PartEditor

 * <p>The PartEditor provides an editing form for a part. It contains multiple tabs, one for each nested record.</p>
 */
Ext.define('PartKeepr.PartEditor', {
	extend: 'PartKeepr.Editor',
	border: false,
	model: 'PartKeepr.Part',
	layout: 'fit',
	bodyStyle: 'background:#DFE8F6;',
	initComponent: function () {
		var basicEditorFields = [{
				xtype: 'textfield',
				name: 'name',
				fieldLabel: i18n("Name"),
				allowBlank: false
			},{
				xtype: 'numberfield',
				fieldLabel: i18n('Minimum Stock'),
				allowDecimals: false,
				allowBlank: false,
				name: 'minStockLevel',
				value: 0,
				minValue: 0
			},{
				xtype: 'PartUnitComboBox',
				fieldLabel: i18n("Part Unit"),
				name: 'partUnit'
			},{
				xtype: 'CategoryComboBox',
				fieldLabel: i18n("Category"),
				name: 'category'
			},{
				xtype: 'StorageLocationComboBox',
				fieldLabel: i18n("Storage Location"),
				name: 'storageLocation',
				allowBlank: false
			},{
				xtype: 'FootprintComboBox',
				fieldLabel: i18n("Footprint"),
				name: 'footprint'
			},{
				xtype: 'textarea',
				fieldLabel: i18n("Comment"),
				name: 'comment'
			}];
		
		this.partDistributorGrid = Ext.create("PartKeepr.PartDistributorGrid", {
			title: i18n("Distributors"),
			layout: 'fit'
		});
		
		this.partManufacturerGrid = Ext.create("PartKeepr.PartManufacturerGrid", {
			title: i18n("Manufacturers"),
			layout: 'fit'
		});
		
		this.partParameterGrid = Ext.create("PartKeepr.PartParameterGrid", {
			title: i18n("Parameters"),
			layout: 'fit'
		});
		
		this.partAttachmentGrid = Ext.create("PartKeepr.PartAttachmentGrid", {
			title: i18n("Attachments"),
			layout: 'fit'
		});
		
		this.items = {
				xtype: 'tabpanel',
				border: false,
				plain: true,
				items: [{
					xtype: 'panel',
					border: false,
					autoScroll: true,
					layout: 'anchor',
					defaults: {
				        anchor: '100%',
				        labelWidth: 150
				    },
					bodyStyle: 'background:#DFE8F6;padding: 10px;',
					title: i18n("Basic Data"),
					items: basicEditorFields
				},
				this.partDistributorGrid,
				this.partManufacturerGrid,
				this.partParameterGrid,
				this.partAttachmentGrid
				]
		};
		
		this.on("startEdit", this.onEditStart, this, { delay: 200 });
		this.on("itemSaved", this._onItemSaved, this);
		
		this.addEvents("partSaved", "titleChange");
		
		this.callParent();
	},
	onEditStart: function () {
		this.bindChildStores();
	},
	_onItemSaved: function () {
		this.fireEvent("partSaved", this.record);
		this.bindChildStores();
	},
	bindChildStores: function () {
		this.partDistributorGrid.bindStore(this.record.distributors());
		this.partManufacturerGrid.bindStore(this.record.manufacturers());
		this.partParameterGrid.bindStore(this.record.parameters());
		this.partAttachmentGrid.bindStore(this.record.attachments());
	},
	onItemSave: function () {
		if (!this.getForm().isValid()) {
			return;
		}
		
		this.callParent();
	},
	_setTitle: function (title) {
		var tmpTitle;
		
		if (this.record.phantom) {
			tmpTitle = i18n("Add Part");
		} else {
			tmpTitle = i18n("Edit Part");	
		}
		
		if (title !== "") {
			 tmpTitle = tmpTitle + ": " + title;
		}
		
		this.fireEvent("titleChange", tmpTitle);
	}
});
