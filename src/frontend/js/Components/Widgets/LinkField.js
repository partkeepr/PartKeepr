Ext.define('Ext.ux.linkField', {
	extend: 'Ext.form.field.Trigger',
	alias: 'widget.linkField',
	
	initComponent: function () {
		var me = this;
		this.callParent();
	},

	// override onTriggerClick
	onTriggerClick: function() {
		if (this.linkUrl !== null)
			window.open(this.linkUrl, '_blank');
	}
});
