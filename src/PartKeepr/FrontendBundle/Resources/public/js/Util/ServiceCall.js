Ext.define('PartKeepr.ServiceCall', {
	extend: 'Ext.util.Observable',
	
	service: null,
	call: null,
	
	sHandler: null,
	parameters: {},
	loadMessage: null,
	anonymous: false,

	constructor: function (service,call) {
		this.setService(service);
		this.setCall(call);
		this.parameters = {};
	},
	
	/**
	 * <p>This method activates anonymous mode.</p>
	 * <p>Anonymous mode defines that the service is called without passing a valid session. Usually, the only anonymous call is to authenticate a user.</p>
	*/
	enableAnonymous: function () {
		this.anonymous = true;
	},
	/**
	 * <p>This method deactivates anonymous mode.</p>
 	*/
	disableAnonymous: function () {
		this.anonymous = false;
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
	setLoadMessage: function (message) {
		this.loadMessage = message;
	},
	setHandler: function (handler) {
		this.sHandler = handler;
	},
	doCall: function () {
		/* Update the status bar to indicate that the call is in progress. */
		PartKeepr.getApplication().getStatusbar().startLoad(this.loadMessage);
		
		var callDefinition = Ext.encode(this.parameters);
		
		var headers = {
			"call": this.call,
			"lang": Ext.getLocale()
		};
		
		if (!this.anonymous) {
			headers.session = PartKeepr.getApplication().getSessionManager().getSession();
		}
		
		Ext.Ajax.request({
			url: PartKeepr.getBasePath() + '/' + this.service + "/"+this.call,
			success: Ext.bind(this.onSuccess, this),
			failure: Ext.bind(this.onError, this),
			method: "POST",
			params: callDefinition,
			headers: headers
		});
	},
	onSuccess: function (responseObj, options) {
		PartKeepr.getApplication().getStatusbar().endLoad();
		
		try {
			var response = Ext.decode(responseObj.responseText);	
		} catch (ex) {
			var exception = {
        			message: i18n("Critical Error"),
        			detail: i18n("The server returned a response which we were not able to interpret.")
        	};
        	
     	
			var request = {
        			response: responseObj.responseText,
        			request: Ext.encode(options)
        	};
			
        	PartKeepr.ExceptionWindow.showException(exception, request);
        	return;
		}
		
				
		/* Check the status */
		if (response.status == "error") {
			this.displayError(response.exception);
			PartKeepr.getApplication().getStatusbar().setStatus({
				text: this.getErrorMessage(response.exception),
				iconCls: 'x-status-error',
				clear: {
					useDefaults: true,
					anim: false
				}
			});
			return;
		}
		
		/* Check the status */
		if (response.status == "systemerror") {
			this.displaySystemError(response);
			PartKeepr.getApplication().getStatusbar().setStatus({
				text: this.getErrorMessage(response),
				iconCls: 'x-status-error',
				clear: {
					useDefaults: true,
					anim: false
				}
			});
    

			return;
		}
		
		
		
		if (this.sHandler) { 
			this.sHandler(response.response);
		}
	},
	onError: function (response, options) {
		var request;
		
		try {
            var data = Ext.decode(response.responseText);
            
            request = {
        			response: response.responseText,
        			request: Ext.encode(options)
        	};
            
        	PartKeepr.ExceptionWindow.showException(data.exception, request);
        } catch (ex) {
        	var exception = {
        			message: i18n("Critical Error"),
        			detail: i18n("The server returned a response which we were not able to interpret."),
        			backtrace: response.responseText
        	};
        	
        	request = {
        			response: response.responseText,
        			request: Ext.encode(options)
        	};
        	
        	PartKeepr.ExceptionWindow.showException(exception, request);
        	
        	
        }
        
		PartKeepr.getApplication().getStatusbar().endLoad();
	},
	displayError: function (obj) {
		Ext.Msg.show({
			title: i18n("Error"),
			msg: this.getErrorMessage(obj),
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
			
		});
	},
	getErrorMessage: function (obj) {
		var errorMsg;
		
		if (obj.message === "") {
			errorMsg = obj.exception;
		} else {
			errorMsg = obj.message;
		}
		
		return errorMsg;
	},
	displaySystemError: function (obj) {
		var errorMsg;

		errorMsg = "Error Message: " + obj.message+"<br>";
		errorMsg += "Exception:"+obj.exception+"<br>";
		errorMsg += "Backtrace:<br>"+str_replace("\n", "<br>", obj.backtrace);
		
		Ext.Msg.maxWidth = 800;
		
		Ext.Msg.show({
			title: i18n("System Error"),
			msg: errorMsg,
			buttons: Ext.MessageBox.OK,
			icon: Ext.MessageBox.ERROR
			
		});
	}
	
});