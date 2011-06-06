Ext.define("PartDB2.PartUnitComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.PartUnitComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: false,
    initComponent: function () {
		this.store = PartDB2.getApplication().getPartUnitStore();
		
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

