/**
 * Represents a part combobox which supports type-ahead and remote querying. 
 */
Ext.define("PartKeepr.RemotePartComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.RemotePartComboBox',
    displayField: 'name',
    valueField: 'id',
    queryMode: 'remote',
    triggerAction: 'all',
    typeAhead: true,
    typeAheadDelay: 100,
    minChars: 2,
    forceSelection: true,
    initComponent: function () {
    	this.store = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.Part',
    				pageSize: 30,
    				autoLoad: true
    			});
		this.callParent();
    }
});

