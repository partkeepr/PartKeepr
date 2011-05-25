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

Ext.ns("org.jerrymouse.service");

org.jerrymouse.service.Call = function (service, call) {
	this.setService(service);
	this.setCall(call);
	this.parameters = {};
};

Ext.extend(org.jerrymouse.service.Call, Ext.util.Observable, {
	service: null,
	call: null,
	sHandler: null,
	parameters: null,
	loadMessage: null,
	anon: false,
	setAnonymous: function () {
		this.anon = true;
	},
	setService: function (service) {
		this.service = service;
	},
	setCall: function (call) {
		this.call = call;
	},
	setParameter: function (parameter, value) {
		this.parameters[parameter] = value;
	},
	setParameters: function (obj) {
		Ext.apply(this.parameters, obj);
	},
	getClassType: function () {
		return "org.jerrymouse.service.Call";
	},
	setLoadMessage: function (message) {
		this.loadMessage = message;
	},
	setHandler: function (handler) {
		this.sHandler = handler;
	},
	doCall: function () {
		Ext.getCmp("jm-statusbar").startLoad(this.loadMessage);
		
		mp = { 
				"service": this.service,
				"call": this.call,
				"lang": Ext.getLocale(),
				"parameters": Ext.encode(this.parameters)
				};
		
		if (!this.anon) {
			mp.session = Ext.getCmp("jm-main-window").getSession();
		}
		
		Ext.Ajax.request({
			url: 'service.php',
			success: this.onSuccess.createDelegate(this),
			failure: this.onError.createDelegate(this),
			method: "POST",
			params: mp
		});
	},
	onSuccess: function (responseObj) {
		Ext.getCmp("jm-statusbar").endLoad();
		
		var response = Ext.decode(responseObj.responseText);
		
				
		/* Check the status */
		if (response.status == "error") {
			this.displayError(response.exception);
			return;
		}
		
		/* Check the status */
		if (response.status == "systemerror") {
			this.displaySystemError(response);
			return;
		}
		
		
		
		if (this.sHandler) { 
			this.sHandler(response.response);
		}
	},
	onError: function (response) {
		Ext.getCmp("jm-statusbar").endLoad();
	},
	displayError: function (obj) {
		var errorMsg;
		
		if (obj.message === "") {
			errorMsg = obj.exception;
		} else {
			errorMsg = obj.message;
		}
		
		Ext.Msg.show({
			title: 'Error',
			msg: errorMsg,
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
			
		});
	},
	displaySystemError: function (obj) {
		var errorMsg;

		errorMsg = "Error Message: " + obj.message+"<br>";
		errorMsg += "Exception:"+obj.exception+"<br>";
		errorMsg += "Backtrace:<br>"+str_replace("\n", "<br>", obj.backtrace);
		
		Ext.Msg.maxWidth = 800;
		
		Ext.Msg.show({
			title: 'System Error',
			msg: errorMsg,
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
			
		});
	}
	
});