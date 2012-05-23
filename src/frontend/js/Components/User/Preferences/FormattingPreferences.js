/**
 * Contains the formatting preferences for various places throughout the system
 */
Ext.define('PartKeepr.FormattingPreferencesPanel', {
	extend: 'Ext.form.FormPanel',
	title: i18n("Formatting"),
	bodyStyle: 'background:#DBDBDB;padding: 10px;',
	
	initComponent: function () {

		this.createWidgets();
		this.loadDefaults();
		

		this.items = [
		              this.priceNumDecimalsField,
		              this.useThousandSeparatorCheckbox,
		              this.currencySymbolField,
		              this.currencyAtEndCheckbox
		              ];

		this.callParent();
	},
	/**
	 * Loads the defaults for the user preferences
	 * 
	 * @param none
	 * @return nothing
	 */
	loadDefaults: function () {
		var numDecimals = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.numdecimals", 2);
		this.priceNumDecimalsField.setValue(numDecimals);
		
		var useThousandsSeparator = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.thousandsSeparator", true);
		this.useThousandSeparatorCheckbox.setValue(useThousandsSeparator);
		
		
		var currencyAtEnd = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.currencySymbolAtEnd", true);
		this.currencyAtEndCheckbox.setValue(currencyAtEnd);
		
		var currencySymbol = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.symbol", true);
		this.currencySymbolField.setValue(currencySymbol);
	},
	/**
	 * Creates the widgets used in this form.
	 * 
	 * @param none
	 * @return nothing
	 * 
	 */
	createWidgets: function () {
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
					PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.numdecimals", newValue);
				}
			}
		});
		
		this.useThousandSeparatorCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Separate thousands"),
			listeners: {
				change: function(field, newValue) {
					PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.thousandsSeparator", newValue);
				}
			}
		});
		
		this.currencySymbolField = Ext.create("Ext.form.field.Text", {
			fieldLabel: i18n("Currency Symbol"),
			maxLength: 5,
			listeners: {
				change: function(field, newValue) {
					PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.symbol", newValue);
				}
			}
		});
		
		this.currencyAtEndCheckbox =  Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Currency at end"),
			listeners: {
				change: function(field, newValue) {
					PartKeepr.getApplication().setUserPreference("partkeepr.formatting.currency.currencySymbolAtEnd", newValue);
				}
			}
		});
	}
});