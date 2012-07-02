Ext.namespace('PartKeepr'); 
		
Ext.Loader.setPath({
    'PartKeepr': 'js'
});

PartKeepr.application = null;

Ext.application({
    name: 'PartKeepr',
    launch: function() {
    	Ext.get("loading").hide();
    	Ext.setLocale('en_US');

    	this.createLayout();

    	PartKeepr.application = this;
    	
    	// Set static data of the server
    	PartKeepr.setMaxUploadSize(window.parameters.maxUploadSize);
    	PartKeepr.setAvailableImageFormats(window.parameters.availableImageFormats);

    	this.sessionManager = new PartKeepr.SessionManager();
    	
    	/* Automatic session starting is active. This disables login/logout functionality. */
    	if (window.parameters.auto_start_session) {
    		this.getSessionManager().setSession(window.parameters.auto_start_session);
    		this.getStatusbar().connectionButton.hide();
    		this.onLogin();
    	} else {
        	// If auto login is wanted (for e.g. demo systems), put it in here
        	this.sessionManager.on("login", this.onLogin, this);
        	
        	if (window.parameters.autoLoginUsername) {
        		this.sessionManager.login(window.parameters.autoLoginUsername, window.parameters.autoLoginPassword);
        	} else {
        		this.sessionManager.login();
        	}
    	}
    	
        Ext.fly(document.body).on('contextmenu', this.onContextMenu, this);
    },
    onContextMenu: function (e, target) {
    	if (!e.ctrlKey) {
    		e.preventDefault();
    	}
    },
    /**
     * Handles the login function. Initializes the part manager window,
     * enables the menu bar and creates the stores+loads them.
     */
    onLogin: function () {
    	this.createGlobalStores();
    	
    	if (window.parameters.userPreferences) {
    		PartKeepr.getApplication().setInitialUserPreferences(window.parameters.userPreferences);
    	}
    	
    	if (PartKeepr.initialUserPreferences) {
    		var records = this.getUserPreferenceStore().getProxy().getReader().read(PartKeepr.initialUserPreferences);
        	this.getUserPreferenceStore().loadRecords(records.records);	
    	}
    	
    	this.reloadStores();
		
		var j = Ext.create("PartKeepr.PartManager", {
			title: i18n("Part Manager"),
			iconCls: 'icon-brick',
			closable: false
		});
		
		this.addItem(j);
		this.menuBar.enable();
		
		this.doSystemStatusCheck();
		this.doUnacknowledgedNoticesCheck();
		
		/* Give the user preference stuff enough time to load */
		/* @todo Load user preferences directly on login and not via delayed task */
		this.displayTipWindowTask = new Ext.util.DelayedTask(this.displayTipOfTheDayWindow, this);
		this.displayTipWindowTask.delay(100);
		
		this.setSession(this.getSessionManager().getSession());
		
		this.getStatusbar().getConnectionButton().setConnected();
		
    },
    /**
     * Sets the initial user preferences, which are applied into the userPreferenceStore after login.
     */
    setInitialUserPreferences: function (obj) {
    	PartKeepr.initialUserPreferences = obj;
    },
    /**
     * Displays the tip of the day window.
     * 
     * This method checks if the user has disabled tips, and if so, this method
     * avoids showing the window. 
     */
    displayTipOfTheDayWindow: function () {
    	if (!this.tipOfTheDayStore._loaded) {
    		this.displayTipWindowTask.delay(100);
    		return;
    	}
    	
    	if (PartKeepr.getApplication().getUserPreference("partkeepr.tipoftheday.showtips") !== false) {
    		var j = Ext.create("PartKeepr.TipOfTheDayWindow");
    		
    		if (j.getLastUnreadTip() !== null) {
    			j.show();
    		}
    	}
    },
    /**
     * Does a schema status call against the PartKeepr installation, in order to verify if the schema is up-to-date.
     * 
     * @param none
     * @return nothing
     */
    doSystemStatusCheck: function () {
    	var call = new PartKeepr.ServiceCall("System", "getSystemStatus");
		call.setHandler(Ext.bind(this.onSystemStatusCheck, this));
		call.doCall();
    },
    /**
     * Handler for the schema check 
     * @param data The data returned from the server
     */
    onSystemStatusCheck: function (data) {
    	if (data.data.schemaStatus !== "complete") {
    		alert(i18n("Your database schema is not up-to-date! Please re-run setup immediately!"));
    	}
    	
    	if (data.data.inactiveCronjobCount > 0) {
    		alert(i18n("The following cronjobs aren't running:")+"\n\n"+data.data.inactiveCronjobs.join("\n"));
    	}
    },
    /**
     * Returns the session manager
     * 
     * @returns SessionManager
     */
    getSessionManager: function () {
    	return this.sessionManager;
    },
    /*
     * Checks for unacknowledged system notices. Triggers a service call against the server.
     * 
     * Checks if a session is active; otherwise, nothing will happen.
     * 
     * @param none
     * @return nothing
     */
   	doUnacknowledgedNoticesCheck: function () {
   		if (this.getSessionManager().getSession() !== null) {
   			var call = new PartKeepr.ServiceCall("SystemNotice", "hasUnacknowledgedNotices");
   			
   	   		call.setHandler(Ext.bind(this.onUnacknowledgedNoticesCheck, this));
   			call.doCall();
   		}
   	},
   	/**
     * Handler for the unacknowledged system notices check 
     * @param data The data returned from the server
     */
   	onUnacknowledgedNoticesCheck: function (data) {
   		if (data.data.unacknowledgedNotices === true) {
   			this.statusBar.systemNoticeButton.show();
   		} else {
   			this.statusBar.systemNoticeButton.hide();
   		}
   		
   		Ext.defer(this.doUnacknowledgedNoticesCheck, 10000, this);
   	},
    logout: function () {
    	this.menuBar.disable();
    	this.centerPanel.removeAll(true);
    	this.getSessionManager().logout();
    },
    createGlobalStores: function () {
    	this.footprintStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.Footprint',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.siPrefixStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.SiPrefix',
    				pageSize: -1,
    				autoLoad: true
    			});
    	
    	this.distributorStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.Distributor',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.manufacturerStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.Manufacturer',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.partUnitStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.PartUnit',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.unitStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.Unit',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.userStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.User',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.tipOfTheDayStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.TipOfTheDay',
    				pageSize: -1,
    				autoLoad: true,
    				listeners: {
    					scope: this,
    					load: this.storeLoaded
    				}
    			});
    	
    	this.userPreferenceStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartKeepr.UserPreference',
    				pageSize: -1,
    				autoLoad: false,
    				listeners: {
    					scope: this,
    					load: this.storeLoaded
    				}
    			});
    },
    storeLoaded: function (store) {
    	store._loaded = true;
    },
    setAdmin: function (admin) {
    	this.admin = admin;
    },
    isAdmin: function () {
    	return this.admin;
    },
    getTipOfTheDayStore: function () {
    	return this.tipOfTheDayStore;
    },
    /**
     * Queries for a specific user preference. Returns either the value or a default value if
     * the preference was not found.
     * @param key The key to query
     * @param defaultValue A default value to return (optional)
     * @returns the key value, or defaultValue if preference key was not found
     */
    getUserPreference: function (key, defaultValue) {
    	var record = this.userPreferenceStore.findRecord("key", key);
    	
    	if (record) {
    		return record.get("value");
    	} else {
    		return (typeof defaultValue == "undefined") ? null : defaultValue;
    	}
    },
    /**
     * Sets a specific user preference. Directly commits the change to the server.
     * 
     * @param key The key to set
     * @param value The value to set
     */
    setUserPreference: function (key, value) {
    	var record = this.userPreferenceStore.findRecord("key", key);
    	
    	if (record) {
    		record.set("value", value);
    	} else {
    		var j = new PartKeepr.UserPreference();
    		j.set("key", key);
    		j.set("value", value);
    		
    		this.userPreferenceStore.add(j);
    	}
    	
    	this.userPreferenceStore.sync();
    },
    getUserPreferenceStore: function () {
    	return this.userPreferenceStore;
    },
    getUnitStore: function () {
    	return this.unitStore;
    },
    getPartUnitStore: function () {
    	return this.partUnitStore;
    },
    getFootprintStore: function () {
    	return this.footprintStore;
    },
    getManufacturerStore: function () {
    	return this.manufacturerStore;
    },
    getDistributorStore: function () {
    	return this.distributorStore;
    },
    getDefaultPartUnit: function () {
    	return this.partUnitStore.findRecord("default", true);
    },
    getUserStore: function () {
    	return this.userStore;
    },
    getSiPrefixStore: function () {
    	return this.siPrefixStore;
    },
    /**
     * Converts the Character "micro" (µ, available on german keyboards via AltGr+m) to the Character "Mu" (μ).
     * 
     *  The standard for Si-Prefixes defines that the "Mu"-character should be used instead of the "micro" character.
     *  
     *  Wikipedia Entry for the "Micro" Si Prefix: http://en.wikipedia.org/wiki/Micro-
     *  
     */
    convertMicroToMu: function (value) {
    	/**
    	 * Since the Si-Prefix for "micro" is μ, but keyboard have "µ" on it
    	 * (note: both chars might look identical, depending on your font), we need
    	 * to convert "µ" (on the keyboard, Unicode U+00B5) to the Mu (U+03BC).
    	 */
    	
    	return str_replace("µ", "μ", value);
    },
    /**
     * Reload all global stores each 100 seconds.
     * 
     * @todo In the future, it would be nice to trigger a specific
     *       store reload when something happens. Example:
     *       
     *       If the user pulls down the storage location combo box,
     *       reload it.
     *       
     *       YES, this is becoming nasty. We have now 6 stores, each
     *       reloading every minute. This NEEDS to be fixed soon!
     *       
     */
    reloadStores: function () {
    	if (this.getSessionManager().getSession()) {
        	this.footprintStore.load();
        	this.manufacturerStore.load();
        	this.distributorStore.load();
        	this.partUnitStore.load();
        	this.unitStore.load();
        	this.userStore.load();
        	Ext.defer(PartKeepr.getApplication().reloadStores, 100000, this);	
    	}
    },
    /**
     * Creates the main view of PartKeepr.
     */
    createLayout: function () {

    	this.statusBar = Ext.create("PartKeepr.Statusbar");
    	
    	this.messageLog = this.createMessageLog();
    	
    	this.centerPanel = Ext.create("Ext.tab.Panel", {
    			xtype: 'tabpanel',
    			border: false,
    			region: 'center',
    			bodyStyle: 'background:#DBDBDB',
    			plugins: Ext.create('Ext.ux.TabCloseMenu')
    			
    	});
    	
    	this.menuBar = Ext.create("PartKeepr.MenuBar");
    	
    	this.menuBar.disable();
    	Ext.create('Ext.container.Viewport', {
    		layout: 'fit',
    		items: [{
    			xtype: 'panel',
    			border: false,
                layout: 'border',
                items: [
                    this.centerPanel,
                    this.messageLog
                ],
                bbar: this.statusBar,
                tbar: this.menuBar
    		}]

        });
    },
    addItem: function (item) {
    	this.centerPanel.add(item);
    },
    createMessageLog: function () {
    	return Ext.create("PartKeepr.MessageLog", {
            height: 200,
            hidden: true,
            split: true,
            title: i18n("Message Log"),
            titleCollapse: true,
            collapsible: true,
            region: 'south',
            listeners: {
        		beforecollapse: Ext.bind(
        			function (obj) {
        				this.hideMessageLog();
        				return false;
        			},
        			this)
        	}
    	});
    },
    log: function (message) {
    	this.logMessage(message, "none");
    },
    logMessage: function (message, severity) {
    	if (message != i18n("Ready.")) {
    	 var r = Ext.ModelManager.create({
             message: message,
             severity: severity,
             date: new Date()
         }, 'PartKeepr.Message');
    	 
    	 this.messageLog.getStore().add(r);
    	}
    },
    hideMessageLog: function () {
    	this.messageLog.hide();
    },
    showMessageLog: function () {
    	this.messageLog.show();
    },
    toggleMessageLog: function () {
    	if (this.messageLog.isHidden()) {
    		this.showMessageLog();
    	} else {
    		this.hideMessageLog();
    	}
    	
    },
    getStatusbar: function () {
    	return this.statusBar;
    },
    getSession: function () {
    	return this.getSessionManager().getSession();
    },
    setSession: function (session) {
    	if (session) {
    		this.getStatusbar().getConnectionButton().setConnected();	
    	} else {
    		this.getStatusbar().getConnectionButton().setDisconnected();
    		this.setUsername("");
    	}
    	
    },
    /**
     * Sets the username. This should only be called from the login dialog.
     * 
     * Also updates the statusbar to reflect the username.
     * 
     * @param {string} username The username to set
     */
    setUsername: function (username) {
    	this.username = username;
    	this.getStatusbar().setCurrentUser(username);
    },
    /**
     * Returns the current username 
     * @returns {string}
     */
    getUsername: function () {
    	return this.username;
    },
    formatCurrency: function (value) {
    	var format = Ext.util.Format;
    	format.currencyPrecision = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.numdecimals", 2);
        format.currencySign = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.symbol", "€");
        format.currencyAtEnd = PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.currencySymbolAtEnd", true);
        
        if (PartKeepr.getApplication().getUserPreference("partkeepr.formatting.currency.thousandsSeparator", true) === true) {
    		// @todo This is hard-coded for now
    		format.thousandSeparator 	= ",";
    	} else {
    		format.thousandSeparator 	= "";
    	}
        
        return format.currency(value);
    }
});

/**
 * <p>This static method returns a REST object definition for use with any models.</p>
 * <p>It automatically sets the session (if available) and the prefix for the given REST service.</p>
 * @param {string} service The REST service to call. Only use the base name, e.g. "Footprint" instead of "FootprintService".
 * @return {Object} The RESTProxy definition
*/
PartKeepr.getRESTProxy = function (service) {
	var request,requestData = {};
	
	var obj = {
		batchActions: false,
		url: PartKeepr.getBasePath()+ '/'+service,
		listeners: {
        	exception: function (proxy, response, operation) {
        		try {
                    var data = Ext.decode(response.responseText);

                    requestData.method = operation.request.method;
                    requestData.headers = operation.request.headers;
                    requestData.jsonData = operation.request.jsonData;
                    
                    request = {
                    		request: Ext.encode(requestData),
                			response: response.responseText
                	};
                    
                	PartKeepr.ExceptionWindow.showException(data.exception, request);
                } catch (ex) {
                	var exception = {
                			message: i18n("Critical Error"),
                			detail: i18n("The server returned a response which we were not able to interpret.")
                	};
                	
             	
                    requestData.method = operation.request.method;
                    requestData.headers = operation.request.headers;
                    requestData.jsonData = operation.request.jsonData;

                	request = {
                			request: Ext.encode(requestData),
                			response: response.responseText
                	};
                	
                	PartKeepr.ExceptionWindow.showException(exception, request);
                }
        	}
        },
		reader: {
            type: 'json',
            root: 'response.data',
            successProperty: "success",
            messageProperty: 'message',
            totalProperty  : 'response.totalCount'
        },
        writer: {
            type: 'jsonwithassociations'
        }
        
	};
	//Ext.data.AjaxProxy.superclass.constructor.apply(this, arguments);
	return new Ext.data.proxy.Rest(obj);
};

PartKeepr.getSession = function () {
	alert("This should not be called.");
	return "hli2ong0ktnise68p9f5nu6nk1";
};

PartKeepr.log = function (message) {
	PartKeepr.getApplication().log(message);
};

/**
 * <p>This static method returns the instance of the application.</p>
 * @return {Object} The application
*/
PartKeepr.getApplication = function () {
	return PartKeepr.application;
};

PartKeepr.getBasePath = function () {
	return "rest.php";
};

PartKeepr.getImagePath = function () {
	return "image.php";
};

PartKeepr.setMaxUploadSize = function (size) {
	PartKeepr.maxUploadSize = size;
};

PartKeepr.getMaxUploadSize = function () {
	return PartKeepr.maxUploadSize;
};

PartKeepr.bytesToSize = function (bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)),10);
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

PartKeepr.setAvailableImageFormats = function (formats) {
	PartKeepr.imageFormats = formats;
};

PartKeepr.getAvailableImageFormats = function () {
	return PartKeepr.imageFormats;
};

PartKeepr.serializeRecords = function (records) {
	var finalData = [];
	
	for (var i=0;i<records.length;i++) {
		finalData.push(records[i].data);
	}
	
	return finalData;
};
