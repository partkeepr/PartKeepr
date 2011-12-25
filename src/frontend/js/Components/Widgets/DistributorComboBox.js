Ext.define("PartKeepr.DistributorComboBox",{
    extend:"Ext.form.field.ComboBox",
    alias: 'widget.DistributorComboBox',
    displayField: 'name',
    valueField: 'id',
    autoSelect: true,
    queryMode: 'local',
    triggerAction: 'all',
    forceSelection: true,
    editable: true,
    ignoreQuery: false,
    initComponent: function () {
		this.store = PartKeepr.getApplication().getDistributorStore();
		
		/* Workaround to remember the value when loading */
		this.store.on("beforeload", function () {
			this._oldValue = this.getValue();
		}, this);
		
		/* Set the old value when load is complete */
		this.store.on("load", function () {
			this.setValue(this._oldValue);
		}, this);
		
		this.callParent();
    },
    onTriggerClick: function() {
    	if (!this.ignoreQuery) {
    		this.callParent();
    	} else {
    		var me = this;
            if (!me.readOnly && !me.disabled) {
                if (me.isExpanded) {
                    me.collapse();
                } else {
                    me.onFocus({});
                    me.expand();
                }
                me.inputEl.focus();
            }	
    	}
        
    }
});

