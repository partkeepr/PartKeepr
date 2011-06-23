Ext.define('PartKeepr.LoginDialog', {
	extend: 'Ext.Window',
	title: i18n("PartKeepr: Login"),
	loginField: null,
	
	width: 400,
	height: 122,
	
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
			bbar: [
			       	{
			       		cls: 'x-btn-text-icon',
			       		text: i18n("Connect"),
			       		icon: 'resources/silkicons/connect.png',
			       		handler: Ext.bind(this.login, this)
			       	},{
			       		cls: 'x-btn-text-icon',
			       		text: i18n("Close"),
			       		handler: Ext.bind(this.close, this),
			       		icon: 'resources/silkicons/cancel.png'
			       	}]
		});
		
		this.callParent(arguments);
		
		this.on("show", function () { this.loginField.focus(); }, this);
		
		if (PartKeepr.autoLoginUsername) {
			this.loginField.setValue(PartKeepr.autoLoginUsername);
			this.passwordField.setValue(PartKeepr.autoLoginPassword);
			this.login();
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
	onLogin: function (obj) {
		PartKeepr.getApplication().setSession(obj.sessionid);
		PartKeepr.getApplication().setUsername(obj.username);
		
		if (!obj.admin) {
			Ext.getCmp("edit-users").hide();
		}
		
		PartKeepr.getApplication().createGlobalStores();
		
		PartKeepr.getApplication().reloadStores();
		
		var j = Ext.create("PartKeepr.PartManager", {
			title: i18n("Part Manager"),
			closable: false
		});
		
		PartKeepr.getApplication().addItem(j);
		j.show();
		
		PartKeepr.log(i18n("Logged in as")+" "+obj.username);
		this.close();
		
	}
});