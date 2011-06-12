Ext.define('PartDB2.LoginDialog', {
	extend: 'Ext.Window',
	title: i18n("PartDB2: Login"),
	loginField: null,
	
	width: 400,
	height: 122,
	
	modal: true,
	resizable: false,
	
	layout: 'anchor',
	
	initComponent: function () {
		
		this.loginField = Ext.ComponentMgr.create({
	    	xtype: 'textfield',
	    	value: "test",
	    	fieldLabel: i18n("Username"),
	    	anchor: '100%'
	    });

		this.passwordField = Ext.ComponentMgr.create({
        	xtype: 'textfield',
        	inputType: "password",
        	value: "test",
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
		
		this.login();
		
		this.callParent(arguments);
	},
	login: function () {
		var call = new PartDB2.ServiceCall("Auth", "login");
		
		call.setParameter("username", this.loginField.getValue());
		call.setParameter("password", md5(this.passwordField.getValue()));
		call.setLoadMessage(i18n("Logging in..."));
		call.enableAnonymous();
		call.setHandler(Ext.bind(this.onLogin, this));
		call.doCall();
	},
	onLogin: function (obj) {
		PartDB2.getApplication().setSession(obj.sessionid);
		PartDB2.getApplication().setUsername(obj.username);
		
		if (!obj.admin) {
			Ext.getCmp("edit-users").hide();
		}
		
		PartDB2.getApplication().createGlobalStores();
		
		PartDB2.getApplication().reloadStores();
		
		var j = Ext.create("PartDB2.PartManager", {
			title: i18n("Part Manager"),
			closable: false
		});
		
		PartDB2.getApplication().addItem(j);
		j.show();
		
		PartDB2.log(i18n("Logged in as")+" "+obj.username);
		this.close();
		
	}
});