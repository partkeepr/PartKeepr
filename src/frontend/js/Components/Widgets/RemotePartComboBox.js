/**
 * Represents a part chooser which supports type-ahead and remote querying.
 */
Ext.define("PartKeepr.RemotePartComboBox", {
	extend : "Ext.form.field.ComboBox",
	alias : 'widget.RemotePartComboBox',
	
	// Fixed configurations for the data
	displayField : 'name',
	valueField : 'id',
	queryMode : 'remote',
	triggerAction : 'all',
	
	// Typing configuration
	typeAhead : true,
	typeAheadDelay : 100,
	minChars : 2,
	
	// Misc settings
	pageSize : 30,
	forceSelection : true,
	
	/**
	 * Initializes the component. Applies a custom list configuration and an own store, then calls the ComboBox
	 * superclass.
	 */
	initComponent : function() {

		// Custom list configuration to display additional information about the part
		this.listConfig = {
			loadingText : i18n('Searching...'),
			emptyText : i18n('No matching parts found.'),

			itemTpl : Ext.create(	'Ext.XTemplate',
									'<div style="margin-bottom: 5px;">',
									'<h2>{name}</h2>',
									'<p>{categoryPath}</p>',
									'<p>{description}</p>',
									'<p>{footprintName}</p>',
									'</div>')
		};

		// Create a separate store used for querying parts
		this.store = Ext.create("Ext.data.Store", {
			model : 'PartKeepr.Part',
			proxy : PartKeepr.getRESTProxy("Part"),
			autoLoad : true
		});

		this.callParent();
	}
});
