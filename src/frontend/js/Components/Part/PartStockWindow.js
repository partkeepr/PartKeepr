/**
 * This class defines a window which is used to in- or decrease the stock level
 * for a specific part. Logic and service calls are not contained in this window,
 * and need to be implemented from the caller.
 */
Ext.define('PartKeepr.PartStockWindow', {
	extend: 'Ext.window.Window',
	
	// Configurations
	constrainHeader: true,
	width: 300,
	height: 150,
	
	resizable: false,
	layout: 'fit',
	
	// We set the title later
	title: "",
	
	// Window title texts
	removePartText: i18n("Remove Part(s)"),
	addPartText: i18n("Add Part(s)"),
	
	layout: 'anchor',
	bodyStyle: {
		padding: "5px"
	},
	
	/*
	 * Initializes the window with the quantity and price fields.
	 * The price field is hidden when a stock decrease happens.
	 */
	initComponent: function () {
		
		this.quantityField = Ext.create("Ext.form.field.Number", {
			value: 0,		// The initial value is 0, to indicate that this is a number field
			minValue: 1,	// The minimum value is 1. That way we force the user to enter a value
			width: 100,
			listeners: {
                specialkey: {
                	fn: function(field, e){
                		if (e.getKey() == e.ENTER) {
                			this.onOKClick();
                		}
                	},
                	scope: this
                }
			}
		});
		
		this.priceField = Ext.create("Ext.form.field.Number", {
			hideTrigger: true,
			keyNavEnabled: false,
	        mouseWheelEnabled: false,
	        anchor: '100%',
	        value: 0,
			fieldLabel: i18n("Price"),
			listeners: {
                specialkey: {
                	fn: function(field, e){
                		if (e.getKey() == e.ENTER) {
                			this.onOKClick();
                		}
                	},
                	scope: this
                }
			}
		});
		
		this.priceCheckbox = Ext.create("Ext.form.field.Checkbox", {
			boxLabel: i18n("Price per item"),
			hideEmptyLabel: false,
			checked: true
		});
		
		this.form = Ext.create("Ext.form.Panel", {
			bodyStyle: 'background:#DBDBDB;',
			border: false,
			items: [{
					xtype: 'fieldcontainer',
					fieldLabel: i18n("Quantity"),
					layout: 'hbox',
					items: [ this.quantityField, { width: 75, xtype: 'displayfield', margin: "0 0 0 5", value: this.partUnitName }]
			}, this.priceField, this.priceCheckbox ]
		});
		
		this.items = this.form;
		
		this.buttons = [
		                {
		                	text: i18n("Close"),
		                	handler: this.onCloseClick,
		                	scope: this
		                },{
		                	text: i18n("OK"),
		                	handler: this.onOKClick,
		                	scope: this
		                }];
		this.on("show", function () { this.quantityField.focus(); }, this);
		this.callParent();
	},
	/**
	 * Closes the window
	 */
	onCloseClick: function () {
		this.close();
	},
	/**
	 * Checks if the form is valid. If yes, execute the callback.
	 */
	onOKClick: function () {
		if (this.form.getForm().isValid()) {
			var price;
			if (this.priceCheckbox.getValue()) {
				price = this.priceField.getValue();
			} else {
				price = this.priceField.getValue() / this.quantityField.getValue();
			}
			
			Ext.callback(this.callbackFn, this.callbackScope, [ this.quantityField.getValue(), price ]);
			this.close();
		}
	},
	/**
	 * Opens the window in "add stock" mode. The target callback receives two parameters:
	 * the value of the quantity field and the value of the price field.
	 * 
	 * @param fn The callback
	 * @param scope The scope in which to execute the callback
	 */
	addStock: function (fn, scope) {
		this.callbackFn = fn;
		this.callbackScope = scope;
		this.setTitle(this.addPartText);
		this.show();
	},
	/**
	 * Opens the window in "remove stock" mode. The target callback receives one parameters:
	 * the value of the quantity field
	 * 
	 * @param fn The callback
	 * @param scope The scope in which to execute the callback
	 */
	removeStock: function (fn, scope) {
		this.callbackFn = fn;
		this.callbackScope = scope;
		this.setTitle(this.removePartText);
		this.priceField.hide();
		this.priceCheckbox.hide();
		this.show();
	}
});