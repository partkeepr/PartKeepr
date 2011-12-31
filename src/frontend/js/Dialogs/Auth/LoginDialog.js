Ext.define('PartKeepr.LoginDialog', {
	extend: 'Ext.Window',
	title: i18n("PartKeepr: Login"),
	loginField: null,
	
	width: 400,
	height: 125,
	
	modal: true,
	resizable: false,
	
	layout: 'anchor',
	
	initComponent: function () {
		
		this.loginField = Ext.ComponentMgr.create({
	    	xtype: 'textfield',
	    	value: "",
	    	fieldLabel: i18n("Username"),
	    	anchor: '100%'
	    });

		this.passwordField = Ext.ComponentMgr.create({
        	xtype: 'textfield',
        	inputType: "password",
        	value: "",
        	fieldLabel: i18n("Password"),
        	anchor: '100%'
        });
		
		Ext.apply(this, {
			
			keys: [{
				key: Ext.EventObject.ENTER,
				handler: this.login,
				scope: this
			}],
			bodyStyle: 'padding: 5px;',
			items: [
			        	this.loginField,
			        	this.passwordField
			],
			dockedItems: [{
			       xtype: 'toolbar',
			       enableOverflow: true,
			       dock: 'bottom',
			       ui: 'footer',
			       pack: 'start',
			       defaults: {minWidth: 100},
			       items: [
			       	{
			       		text: i18n("Connect"),
			       		icon: 'resources/silkicons/connect.png',
			       		handler: Ext.bind(this.login, this)
			       	},{
			       		text: i18n("Close"),
			       		handler: Ext.bind(this.close, this),
			       		icon: 'resources/silkicons/cancel.png'
			       	}]
			}]
		});
		
		this.callParent(arguments);
		
		this.on("show", function () { this.loginField.focus(); }, this);
		
		if (PartKeepr.autoLoginUsername) {
			this.loginField.setValue(PartKeepr.autoLoginUsername);
			this.passwordField.setValue(PartKeepr.autoLoginPassword);
			this.login();
			
			PartKeepr.autoLoginUsername = null;
		}
	},
	login: function () {
		var call = new PartKeepr.ServiceCall("Auth", "login");
		
		call.setParameter("username", this.loginField.getValue());
		call.setParameter("password", md5(this.passwordField.getValue()));
		call.setLoadMessage(i18n("Logging in..."));
		call.enableAnonymous();
		call.setHandler(Ext.bind(this.onLogin, this));
		call.doCall();
	},
	/**
	 * Callback after the login call was completed.
	 * 
	 * @param obj The response object from the server
	 */
	onLogin: function (obj) {
		// Set session + username
		PartKeepr.getApplication().setSession(obj.sessionid);
		PartKeepr.getApplication().setUsername(obj.username);
		
		// @todo Disable the "edit users" menu somehow else
		if (!obj.admin) {
			Ext.getCmp("edit-users").hide();
		} else {
			Ext.getCmp("edit-users").show();
		}
		
		// Set the admin flag
		PartKeepr.getApplication().setAdmin(obj.admin);
		
		// Call the "login" method, which initializes the system with the user
		PartKeepr.getApplication().login();
		
		// Write out a logging message
		PartKeepr.log(i18n("Logged in as")+" "+obj.username);
		
		// Close the window
		this.close();
		
	}
});