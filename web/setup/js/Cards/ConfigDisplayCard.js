/**
 * This card tests the database connectivity for the MySQL database.
 * 
 * Basically this submits all connection settings to a special PHP script,
 * which then attempts to establish the database connection.
 */
Ext.define('PartKeeprSetup.ConfigDisplayCard', {
	extend: 'Ext.panel.Panel',

	/**
	 * Misc style settings
	 */
	border: false,
	bodyStyle: 'background: none;',
	layout: {
	    type: 'vbox',
	    align : 'stretch',
	    pack  : 'start'
	},

	/**
	 * Inits the component
	 */
	initComponent: function () {
		
		/**
		 * Creates a text area which displays the configuration file
		 */
		this.textArea = new Ext.form.field.TextArea({
			fieldStyle: "font-family: monospace;",
			readOnly: true,
			flex: 1,
			anchor: '100%'
		});
		
		this.items = [
		              {
		            	  xtype: 'displayfield',
		            	  value: "Copy and paste the contents into the config.php file, which needs to be placed " +
		            	  		 "in your PartKeepr's root directory."
		              },
		              this.textArea
		              ];
		
		this.callParent();
		
		this.on("activateCard", this.onActivate, this);
	},
	/**
	 * When the card is activated, automatically invoke all tests.
	 */
	onActivate: function () {
		var params = Ext.getCmp("database-parameters-card").dbparams;
		params.mode = "display";
		params.step = "configfile";
		
		Ext.Ajax.request({
			url: "setup.php",
			success: this.onConfigFileRetrieved,
			scope: this,
			params: params,
			timeout: 120000
		});
	},
	/**
	 * Fills the text area with the config file.
	 * 
	 * @param data The data as received from the AJAX call
	 */
	onConfigFileRetrieved: function (data) {
		var obj = Ext.decode(data.responseText);
		
		this.textArea.setValue(obj.config);
		
		this.ownerCt.ownerCt.ownerCt.nextButton.setDisabled(false);
	}
});
