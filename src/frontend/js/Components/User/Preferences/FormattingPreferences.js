Ext.define('PartKeepr.FormattingPreferencesPanel', {
	extend: 'Ext.form.FormPanel',
	title: i18n("Formatting"),
	bodyStyle: 'background:#DBDBDB;padding: 10px;',
	initComponent: function () {
		this.priceNumDecimalsField = Ext.create("Ext.form.field.Number", {
			name: 'priceNumDecimalsField',
			fieldLabel: i18n('Decimal precision'),
			labelWidth: 150,
			columnWidth: 0.5,
			minValue: 0,
			maxValue: 4,
			allowDecimals: false,
			listeners: {
				change: function(field, newValue) {
					PartKeepr.getApplication().setUserPreference("partkeepr.formatting.price.numdecimals", newValue);
				}
			}
		});

		var numDecimals = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.price.numdecimals", 2);
		this.priceNumDecimalsField.setValue(numDecimals);

		this.items = [ this.priceNumDecimalsField ];

		this.callParent();
	}
});

