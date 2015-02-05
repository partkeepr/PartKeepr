Ext.define("PartKeepr.DistributorComboBox",{
    extend:"PartKeepr.ReloadableComboBox",
    alias: 'widget.DistributorComboBox',
    ignoreQuery: false,
    initComponent: function () {
		this.store = PartKeepr.getApplication().getDistributorStore();
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
