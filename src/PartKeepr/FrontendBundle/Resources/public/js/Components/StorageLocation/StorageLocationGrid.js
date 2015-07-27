Ext.define('PartKeepr.StorageLocationGrid', {
	extend: 'PartKeepr.EditorGrid',
	xtype: 'partkeepr.StorageLocationGrid',
	
	features: [
		{
			ftype: 'grouping',
			groupHeaderTpl: '{name} ({children.length})',
			enableNoGroups: true
		}
	],

	columns: [
	          {header: i18n("Storage Location"),  dataIndex: 'name', flex: 1}
	          ],
	addButtonText: i18n("Add Storage Location"),
	addButtonIcon: 'bundles/brainbitsfugueicons/icons/fugue/16/wooden-box--plus.png',
    deleteButtonText: i18n("Delete Storage Location"),
    deleteButtonIcon: 'bundles/brainbitsfugueicons/icons/fugue/16/wooden-box--minus.png',
    initComponent: function () {
    	this.callParent();
    	
    	// Adds a button which shows the multi-create window
    	this.multiCreateButton = Ext.create("Ext.button.Button", {
    		icon: 'bundles/partkeeprfrontend/images/icons/storagelocation_multiadd.png',
    		tooltip: i18n("Multi-create storage locations"),
    		handler: this.onMultiCreateClick,
    		scope: this
    	});
    	
    	this.topToolbar.insert(2, {xtype: 'tbseparator'});
    	this.topToolbar.insert(3, this.multiCreateButton);
    },
    /**
     * Creates a new storage location multi-create window.
     */
    onMultiCreateClick: function () {
    	var j = Ext.create("PartKeepr.StorageLocationMultiCreateWindow", {
    		listeners: {
    			destroy: {
    				fn: this.onMultiCreateWindowDestroy,
    				scope: this
    			}
    		}
    	});
    	j.show();
    },
    /**
     * Reloads the store after the multi-create window was closed
     */
    onMultiCreateWindowDestroy: function () {
    	this.store.load();
    }
});