Ext.define("PartKeepr.ManufacturerComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.ManufacturerComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: true,
    initComponent: function () {
		this.store = PartKeepr.getApplication().getManufacturerStore();
		
		/* Workaround to remember the value when loading */
		this.store.on("beforeload", function () {
			this._oldValue = this.getValue();
		}, this);
		
		/* Set the old value when load is complete */
		this.store.on("load", function () {
			this.setValue(this._oldValue);
		}, this);
		
		this.callParent();
    }
});

