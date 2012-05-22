/**
 * Extends the Ext.ux.NumericField and applies defaults stored within the user preferences.
 */
Ext.define("PartKeepr.CurrencyField", {
	extend: "Ext.ux.NumericField",
    alias: 'widget.CurrencyField',
    
    initComponent: function () {
    	this.decimalPrecision 		= PartKeepr.getApplication().getUserPreference("partkeepr.currency.decimals", 4);
    	this.currencySign 			= PartKeepr.getApplication().getUserPreference("partkeepr.currency.symbol", "€");
    	this.useThousandSeparator 	= PartKeepr.getApplication().getUserPreference("partkeepr.currency.thousandsSeparator", true);
    	this.currencyAtEnd			= PartKeepr.getApplication().getUserPreference("partkeepr.currency.currencySymbolAtEnd", true);
    	
    	this.callParent();
    }
});