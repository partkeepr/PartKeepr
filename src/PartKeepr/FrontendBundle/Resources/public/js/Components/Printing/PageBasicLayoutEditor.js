Ext.define('PartKeepr.Printing.PageBasicLayoutEditor', {
	extend: 'PartKeepr.Editor',
	alias: 'widget.Printing.PageBasicLayoutEditor',
	saveText: i18n("Save Label Layout"),

	layout: 'column',

	initComponent: function () {
		this.items =  [{
			columnWidth: 1,
   			minWidth: 500,
   			layout: 'anchor',
			xtype: 'container',
			margin: '0 5 0 0',
			items: [{
			        	xtype: 'textfield',
			        	name: 'name',
			        	anchor: '100%',
			        	labelWidth: 130,
			        	fieldLabel: i18n("Layout Name")
					},
					{
						xtype: 'textfield',
						name: 'comment',
						anchor: '100%',
						labelWidth: 130,
						fieldLabel: i18n("Comment")
					},
					{
						xtype: 'textfield',
						name: 'paperSize',
						anchor: '100%',
						labelWidth: 130,
						fieldLabel: i18n("Paper Sheet Size")
					},
					{
		            	xtype: 'checkbox',
		            	hideEmptyLabel: false,
		            	fieldLabel: i18n("Portrait Sheet"),
		            	labelWidth: 130,
		            	name: 'paperPortrait'
		            },
					{
	                    xtype: 'numberfield',
	                    fieldLabel: i18n("Number of Columns"),
	                    labelWidth: 130,
	                    minValue: 1,
	                    allowDecimals: false,
	                    name: 'columnCount'
	                },
	                {
	                	xtype: 'numberfield',
	                	fieldLabel: i18n("Number of Rows"),
	                	labelWidth: 130,
	                	minValue: 1,
	                	allowDecimals: false,
	                	name: 'rowCount'
	                },
	                {
	                	xtype: 'numberfield',
	                	fieldLabel: i18n("Cell Width"),
	                	boxLabel: "mm",
	                	labelWidth: 130,
	                	minValue: 0,
	                	name: 'cellWidthInMM'
	                },
	                {
	                	xtype: 'numberfield',
	                	fieldLabel: i18n("Cell Height"),
	                	boxLabel: "mm",
	                	labelWidth: 130,
	                	minValue: 0,
	                	name: 'cellHeightInMM'
	                },
	                {
	                	xtype: 'numberfield',
	                	fieldLabel: i18n("X Position of top left"),
	                	boxLabel: "mm",
	                	labelWidth: 130,
	                	minValue: 0,
	                	name: 'topLeftXInMM'
	                },
	                {
	                	xtype: 'numberfield',
	                	fieldLabel: i18n("Y Position of top left"),
	                	boxLabel: "mm",
	                	labelWidth: 130,
	                	minValue: 0,
	                	name: 'topLeftYInMM'
	                }
					]}
		];

		this.on("startEdit", this.onStartEdit, this);
		this.callParent();
	},
	onStartEdit: function () {
		this.store.getProxy().extraParams.PageBasicLayout = this.record.get("id");
		this.store.load();
	}

});