/**
 * This card displays the database parameters for the PostgreSQL database.
 */
Ext.define('PartKeeprSetup.DatabaseParametersCard.PostgreSQL', {
	extend: 'Ext.panel.Panel',
	
	border: false,
	bodyStyle: {
		background: "none"
	},
	defaults: {
		labelWidth: 120	
	},
	
	initComponent: function () {
		this.hostname = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Hostname',
			labelWidth: this.defaults.labelWidth
		});
		
		this.username = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Username',
			labelWidth: this.defaults.labelWidth
		});
		
		this.password = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Password',
			inputType: "password",
			labelWidth: this.defaults.labelWidth
		});
		
		this.databaseName = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Name',
			labelWidth: this.defaults.labelWidth
		});
		
		this.items = [
		              this.hostname,
		              this.databaseName,
		              this.username,
		              this.password
		              ];
		
		this.callParent();
	}
});