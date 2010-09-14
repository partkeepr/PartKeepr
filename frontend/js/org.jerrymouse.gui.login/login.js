/*
 * This file is part of the JerryMouse Framework.
 *
 * JerryMouse is free software; you can redistribute and/or modify it under the
 * terms of the GNU General Public License version 2 as published by the
 * Free Software Foundation.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Library General Public License for more details.
 *
 */

Ext.ns("org.jerrymouse.gui.login");

org.jerrymouse.gui.login.dialog = Ext.extend(org.jerrymouse.gui.widgets.window, {
	tools: [{
		id: 'help',
		qtip: "$[org.jerrymouse.gui.help]",
		handler: org.jerrymouse.gui.contexthelp.handler
	}],
	title: "${JM.FRONTEND.TITLE}: $[org.jerrymouse.gui.login.login]",
	loginField: null,
	
	initComponent: function () {
		this.loginField = Ext.ComponentMgr.create({
	    	xtype: 'textfield',
	    	helpId: 'org.jerrymouse.gui.login.username',
	    	value: "test",
	    	fieldLabel: '$[org.jerrymouse.gui.login.username_label]',
	    	anchor: '100%'
	    });

		this.passwordField = Ext.ComponentMgr.create({
        	xtype: 'textfield',
        	inputType: "password",
        	value: "test",
        	helpId: 'org.jerrymouse.gui.login.password',
        	fieldLabel: '$[org.jerrymouse.gui.login.password_label]',
        	anchor: '100%'
        });
		
		Ext.apply(this, {
			width: 400,
			modal: true,
			height: 142,
			resizable: false,
			layout: 'form',
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
			       		text: '$[org.jerrymouse.gui.login.login_button]',
			       		icon: 'resources/silkicons/connect.png',
			       		helpId: 'org.jerrymouse.gui.login.connect',
			       		handler: this.login.createDelegate(this)
			       	},{
			       		cls: 'x-btn-text-icon',
			       		text: '$[org.jerrymouse.gui.login.close_button]',
			       		helpId: 'org.jerrymouse.gui.login.close',
			       		handler: this.close.createDelegate(this),
			       		icon: 'resources/silkicons/cancel.png'
			       	}, '->', {
			       		xtype: 'org.jerrymouse.gui.widgets.LanguageChooser',
			       		helpId: 'org.jerrymouse.gui.login.languagechooser',
			       	}]
		});
		
		org.jerrymouse.gui.login.dialog.superclass.initComponent.call(this);
		
		this.login();
	},
	login: function () {

		var call = new org.jerrymouse.service.Call(
				"de.RaumZeitLabor.PartDB2.Auth.AuthManagerService", 
				"login");
		
		call.setParameter("username", this.loginField.getValue());
		call.setParameter("password", md5(this.passwordField.getValue()));
		call.setLoadMessage('$[org.jerrymouse.gui.login.login_loading_message]');
		call.setAnonymous(true);
		call.setHandler(this.onLogin.createDelegate(this))
		call.doCall();
	},
	onLogin: function (obj) {

		Ext.getCmp("jm-main-window").setSession(obj.sessionid);
		this.close();
		
	}
});