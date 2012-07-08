/**
 * Defines the login dialog
 */
Ext.define('PartKeepr.LoginDialog', {
	extend: 'Ext.Window',
	/* Various style settings */
	title: i18n("PartKeepr: Login"),
	
	width: 400,
	height: 125,
	
	modal: true,
	resizable: false,
	
	layout: 'anchor',
	
	bodyStyle: 'padding: 5px;',
	
	/**
	 * Initializes the login dialog component 
	 */
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
			items: [
			        	this.loginField,
			        	this.passwordField
			],
			dockedItems: [{
			       xtype: 'toolbar',
			       enableOverflow: false,
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

		this.on("render", this.assignEnterKey, this);
		// Focus the login field on show
		// @workaround Set the focus 100ms after the dialog has been shown.
		this.on("show", function () { this.loginField.focus(); }, this, { delay: 100 });
	},
	/**
	 * Assigns the enter key to the login window.
	 */
	assignEnterKey: function () {
		var keyMap = this.getKeyMap();
    	keyMap.on(Ext.EventObject.ENTER, this.login, this);
	},
	/**
	 * Fires the "login" event
	 */
	login: function () {
		this.fireEvent("login", this.loginField.getValue(), this.passwordField.getValue());
	}

});