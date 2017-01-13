/**
 * This class represents a field which can handle a number (value) bound to a specific SI prefix.
 *
 * Internally, we use an object as value. Example:
 *
 * {
 *     value: 10 		// The base value, in our case 10
 *     symbol: "n" 		// The symbol for display
 *     power: -9    	// The power
 *     siprefix_id: 5	// The ID of the siprefix record  
 * }
 *
 */
Ext.define("PartKeepr.SiUnitField", {
    extend: "Ext.form.FieldContainer",
    alias: 'widget.SiUnitField',

    xtype: 'SiUnitField',

    layout: {
        type: 'hbox'
    },
    initComponent: function ()
    {
        this.numberField = Ext.create({
                xtype: 'numberfield',
                hideTrigger: true,
                emptyText: i18n("Value"),
                decimalPrecision: 20,
                name: this.name,
                flex: 1
            });

        this.items = [
            this.numberField, {
                xtype: 'SiUnitCombo',
                itemId: this.siUnitItemId,
                returnObject: true,
                caseSensitive: true,
                name: this.siFieldName,
                width: 40
            }
        ];

        this.callParent(arguments);
        this.down("#"+this.siUnitItemId).setStore(Ext.create("Ext.data.Store",
            {
                model: 'PartKeepr.SiPrefixBundle.Entity.SiPrefix',
                pageSize: 99999999,
                autoLoad: true
            }));
    },
    getValue: function () {
        return this.numberField.getValue();
    }
});
