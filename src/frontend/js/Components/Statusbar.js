Ext.define('PartKeepr.Statusbar', {
	extend: 'Ext.ux.statusbar.StatusBar',
	
	defaultText: i18n("Ready."),
	defaultIconCls: 'x-status-valid',
	iconCls: 'x-status-valid',
	autoClear: 3000,
	initComponent: function () {
		
		this.connectionButton = new PartKeepr.ConnectionButton();
		this.connectionButton.on("click", this.onConnectionButtonClick, this);
		this.timeDisplay = new PartKeepr.TimeDisplay();
		this.currentUserDisplay = Ext.create("Ext.toolbar.TextItem");
		
		this.currentUserDisplay.setText(i18n("Not logged in"));
		
		this.showMessageLog = Ext.create("Ext.Button",{
			icon: 'resources/silkicons/application_osx_terminal.png',
			cls: 'x-btn-icon',
			handler: function () {
				PartKeepr.getApplication().toggleMessageLog();
			}
		});
		
		this.systemNoticeButton = Ext.create("PartKeepr.SystemNoticeButton", {
			hidden: true
		});
		
		Ext.apply(this, {
			items: [
			        this.currentUserDisplay,
			        {xtype: 'tbseparator'},
			        this.timeDisplay,
			        { xtype: 'tbseparator' },
			        this.showMessageLog,
			        { xtype: 'tbseparator' },
			        this.connectionButton,
			        this.systemNoticeButton
			        
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
	},
	onConnectionButtonClick: function () {
		if (PartKeepr.getApplication().getSession()) {
			PartKeepr.getApplication().logout();
		} else {
			var o = new PartKeepr.LoginDialog();
	    	o.show();
		}
	}
});


