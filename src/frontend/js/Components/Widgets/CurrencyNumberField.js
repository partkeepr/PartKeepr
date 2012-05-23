/**
 * Extends the Ext.ux.NumericField and applies defaults stored within the user preferences.
 */
Ext.define("PartKeepr.CurrencyField", {
	extend: "Ext.ux.NumericField",
    alias: 'widget.CurrencyField',
    
    initComponent: function () {
    	this.decimalPrecision 	= PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.numdecimals", 2);
    	this.currencySign 		= PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.symbol", "€");
    	this.currencyAtEnd		= PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.currencySymbolAtEnd", true);
    	
    	if (PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.thousandsSeparator", true) === true) {
    		// @todo This is hard-coded for now
    		this.thousandSeparator 	= ",";
    	} else {
    		this.thousandSeparator 	= "";
    	}
    	 
    	
    	
    	this.callParent();
    }
});