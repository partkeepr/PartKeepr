Ext.define("PartKeepr.FootprintComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.FootprintComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: true,
    initComponent: function () {
		this.store = PartKeepr.getApplication().getFootprintStore();
		
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

