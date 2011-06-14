Ext.define('PartKeepr.PartUnitGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.PartUnitGrid',
	columns: [
	          {header: i18n("Part Unit"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Default"),  dataIndex: 'default', width: 60, renderer: function (val) { if (val === true) { return "✓"; } else { return ""; }}}
	          ],
	addButtonText: i18n("Add Part Unit"),
    deleteButtonText: i18n("Delete Part Unit"),
    initComponent: function () {
    	this.callParent();
    	
    	this.defaultButton = Ext.create("Ext.button.Button", {
    		icon: 'resources/silkicons/accept.png',
    		tooltip: i18n('Mark Item as Default'),
    		disabled: true,
    		handler: this.onDefaultClick,
    		scope: this
    	});
    	
    	this.getSelectionModel().on("deselect", 
				Ext.bind(function (rsm, r, i) {
						this.defaultButton.disable();
				}, this));
    	
    	this.getSelectionModel().on("select", 
				Ext.bind(function (rsm, r, i) {
					this.defaultButton.enable();
				}, this));
    	this.topToolbar.insert(2, {xtype: 'tbseparator'});
    	this.topToolbar.insert(3, this.defaultButton);
    },
    onDefaultClick: function () {
    	var r = this.getSelectionModel().getLastSelected();
    	
    	var call = new PartKeepr.ServiceCall(
    			"PartUnit", 
    			"setDefault");
    	
    	call.setParameter("id", r.get("id"));
    	
    	call.setHandler(Ext.bind(this.onDefaultHandler, this));
		call.doCall();
    },
    onDefaultHandler: function () {
    	this.store.load();
    }
});