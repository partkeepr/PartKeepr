Ext.define("PartKeepr.ReloadableComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.ReloadableComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: true,
    initComponent: function () {
		this.listenersStore = this.store.mon({
				item: this,
				scope: this,
				// Workaround to remember the value when loading 
				beforeload: function () { this._oldValue = this.getValue(); },
				// Set the old value when load is complete
				load: function () { this.setValue(this._oldValue); }
    		});
		
		this.callParent();
    }
});
