/**
 * This card displays the database parameters for the MySQL database.
 */
Ext.define('PartKeeprSetup.DatabaseParametersCard.MySQL', {
	extend: 'Ext.panel.Panel',
	
	/*
	 * Various style settings
	 */
	border: false,
	layout: 'column',
	bodyStyle: {
		background: "none"
	},
	defaults: {
		labelWidth: 120	
	},
	
	/**
	 * Initializes the component and creates the various fields
	 */
	initComponent: function () {
		this.createHintTemplate = Ext.create("Ext.Template", [
			"<code>CREATE DATABASE {dbname} CHARACTER SET UTF8;<br/>GRANT USAGE ON *.* TO {user}@{host} IDENTIFIED BY '{password}';<br/>GRANT ALL PRIVILEGES ON {dbname}.* TO {user}@{host};<br/><br/>"
			]);
		
		this.masterTemplate = Ext.create("Ext.Template", ["The database must be manually created prior installation. Please note that we don't support UNIX sockets at this time - only TCP connections are supported." ]);	                                                
		                                                
		this.hostname = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Hostname',
			labelWidth: this.defaults.labelWidth
		});
		
		this.hostname.on("change", this.onUpdateParameters, this);
		
		this.username = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Username',
			labelWidth: this.defaults.labelWidth
		});
		
		this.username.on("change", this.onUpdateParameters, this);
		
		this.password = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Password',
			inputType: "password",
			labelWidth: this.defaults.labelWidth
		});
		
		this.password.on("change", this.onUpdateParameters, this);
		
		this.databaseName = Ext.create("Ext.form.field.Text", {
			fieldLabel: 'Database Name',
			labelWidth: this.defaults.labelWidth
		});
		
		this.databaseName.on("change", this.onUpdateParameters, this);
		
		this.port = Ext.create("Ext.form.field.Number", {
			fieldLabel: 'Database Port',
			minValue: 0,
			value: '3306',
			labelWidth: this.defaults.labelWidth,
			validateOnBlur: true,
			validateOnChange: false,
			validator: function (value) {
				if (value === "" || value === 0) {
					this.setValue(3306);
				}
				return true;
			}
		});
		
		this.showHintCheckbox = Ext.create("Ext.form.field.Checkbox", {
					xtype: 'checkboxfield',
					boxLabel: 'Show commands to create the database',
					listeners: {
						change: this.onUpdateParameters,
						scope: this
					}
		});
		
		this.items = [{
			xtype: 'panel',
			border: false,
			width: "300px",
			bodyStyle: {
				background: "none"
			},
			items: [
			        this.hostname,
		            this.databaseName,
		            this.username,
		            this.password,
		            this.port
		            ]
			},{
				xtype: 'panel',
				border: false,
				bodyStyle: {
					background: "none"
				},
				items: [
				 this.showHintCheckbox,
				{
					border: false,
					style: 'overflow: auto;',
					width: "450px",
					height: "100px",
					autoScroll: true,
					layout: 'fit',
					id: 'mysql-parameters-hint',
					html: "&nbsp"
				}]
			}];
		
		this.callParent();
		
		this.on("activate", this.onUpdateParameters, this);
	},
	/**
	 * This method gets fired as soon as something in the form was changed.
	 * 
	 * We do this because of the real-time update of the "hints" message, which
	 * assists the user with commands to execute on the database.
	 */
	onUpdateParameters: function () {
		if (this.showHintCheckbox.checked) {
			this.createHintTemplate.overwrite(Ext.get("mysql-parameters-hint"), {
				host: this.hostname.getValue(),
				user: this.username.getValue(),
				password: this.password.getValue(),
				dbname: this.databaseName.getValue()
			});
			
			this.masterTemplate.append(Ext.get("mysql-parameters-hint"));
		} else {
			this.masterTemplate.overwrite(Ext.get("mysql-parameters-hint"));
		}
		
		if (this.hostname.getValue() !== "" && this.username.getValue() !== "" && this.password.getValue() !== "" &&
			this.databaseName.getValue() !== "") {
			
			this.paramsheet.ownerCt.ownerCt.nextButton.setDisabled(false);
		}
		
		this.paramsheet.dbparams = {
				driver: 'mysql',
				host: this.hostname.getValue(),
				user: this.username.getValue(),
				password: this.password.getValue(),
				dbname: this.databaseName.getValue()
		};
		
		if (this.port.getValue() != 3306) {
			this.paramsheet.dbparams.port = this.port.getValue();
		}
	}
});