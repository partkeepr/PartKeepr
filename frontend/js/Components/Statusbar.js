Ext.define('PartDB2.Statusbar', {
	extend: 'Ext.ux.StatusBar',
	
	defaultText: i18n("Ready."),
	defaultIconCls: 'x-status-valid',
	iconCls: 'x-status-valid',
	autoClear: 3000,
	initComponent: function () {
		
		this.connectionButton = new PartDB2.ConnectionButton();
		this.timeDisplay = new PartDB2.TimeDisplay();
		this.currentUserDisplay = Ext.create("Ext.toolbar.TextItem");
		
		this.currentUserDisplay.setText(i18n("Not logged in"));
		
		this.showMessageLog = Ext.create("Ext.Button",{
			icon: 'resources/silkicons/application_osx_terminal.png',
			cls: 'x-btn-icon',
			handler: function () {
				PartDB2.getApplication().toggleMessageLog();
			}
		});
		
		Ext.apply(this, {
			items: [
			        this.currentUserDisplay,
			        {xtype: 'tbseparator'},
			        this.timeDisplay,
			        { xtype: 'tbseparator' },
			        this.showMessageLog,
			        { xtype: 'tbseparator' },
			        this.connectionButton
			        
			        ]
		});
		
		
		this.callParent();
	},
	getConnectionButton: function () {
		return this.connectionButton;
	},
	setCurrentUser: function (username) {
		this.currentUserDisplay.setText(i18n("Logged in as")+": "+username);
	},
	startLoad: function (message) {
		if (message !== null) {
			this.showBusy({text: message, iconCls: "x-status-busy"});
		} else {
			this.showBusy();
		}
	}, 
	endLoad: function () {
		this.clearStatus({useDefaults: true});
	}
     
	
	
	
});


