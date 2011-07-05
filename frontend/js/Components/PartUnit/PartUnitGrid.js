Ext.define('PartKeepr.PartUnitGrid', {
	extend: 'PartKeepr.EditorGrid',
	alias: 'widget.PartUnitGrid',
	columns: [
	          {header: i18n("Part Measurement Unit"),  dataIndex: 'name', flex: 1},
	          {header: i18n("Default"),  dataIndex: 'default', width: 60, renderer: function (val) { if (val === true) { return "✓"; } else { return ""; }}}
	          ],
	addButtonText: i18n("Add Part Measurement Unit"),
	addButtonIcon: "resources/fugue-icons/icons/ruler--plus.png",
    deleteButtonText: i18n("Delete Part Measurement Unit"),
    deleteButtonIcon: "resources/fugue-icons/icons/ruler--minus.png",
    defaultButtonIcon: "resources/fugue-icons/icons/ruler--pencil.png",
    initComponent: function () {
    	this.callParent();
    	
    	this.defaultButton = Ext.create("Ext.button.Button", {
    		icon: this.defaultButtonIcon,
    		tooltip: i18n('Mark Part Measurement Unit as Default'),
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