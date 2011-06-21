Ext.namespace('PartKeepr'); 
		
Ext.Loader.setPath({
    'PartKeepr': 'js'
});

PartKeepr.application = null;

Ext.application({
    name: 'PartKeepr',
    launch: function() {
    	Ext.setLocale('en_US');
    	
    	this.createLayout();
    	
    	PartKeepr.application = this;
    	
        var o = new PartKeepr.LoginDialog();
    	o.show();
    	
    	
    	Ext.QuickTips.init();
    },
    createGlobalStores: function () {
    	this.storageLocationStore = Ext.create("Ext.data.Store",
			{
				model: 'PartKeepr.StorageLocation',
				pageSize: -1,
				autoLoad: false
			});
    	
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
    },
    getUnitStore: function () {
    	return this.unitStore;
    },
    getPartUnitStore: function () {
    	return this.partUnitStore;
    },
    getStorageLocationStore: function () {
    	return this.storageLocationStore;
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
    	this.storageLocationStore.load();
    	this.footprintStore.load();
    	this.manufacturerStore.load();
    	this.distributorStore.load();
    	this.partUnitStore.load();
    	this.unitStore.load();
    	Ext.defer(PartKeepr.getApplication().reloadStores, 100000, this);
    },
    createLayout: function () {

    	this.statusBar = Ext.create("PartKeepr.Statusbar");
    	
    	this.messageLog = this.createMessageLog();
    	
    	this.centerPanel = Ext.create("Ext.tab.Panel", {
    			xtype: 'tabpanel',
    			region: 'center',
    			bodyStyle: 'background:#DFE8F6'
    			
    	});
    	
    	this.menuBar = Ext.create("PartKeepr.MenuBar");
    	
    	Ext.create('Ext.container.Viewport', {
    		layout: 'fit',
    		items: [{
    			xtype: 'panel',
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
    	return this.session;
    },
    setSession: function (session) {
    	this.session = session;
    	
    	this.getStatusbar().getConnectionButton().setConnected();
    },
    setUsername: function (username) {
    	this.username = username;
    	
    	this.getStatusbar().setCurrentUser(username);
    }
});

/**
 * <p>This static method returns a REST object definition for use with any models.</p>
 * <p>It automatically sets the session (if available) and the prefix for the given REST service.</p>
 * @param {string} service The REST service to call. Only use the base name, e.g. "Footprint" instead of "FootprintService".
 * @return {Object} The RESTProxy definition
*/
PartKeepr.getRESTProxy = function (service) {
	var obj = {
		batchActions: false,
		url: PartKeepr.getBasePath()+ '/'+service,
		listeners: {
        	exception: function (proxy, response, operation) {
        		try {
                    var data = Ext.decode(response.responseText);
                    
                	PartKeepr.ExceptionWindow.showException(data.exception);
                } catch (ex) {
                	var exception = {
                			message: i18n("Critical Error"),
                			detail: i18n("The server returned a response which we were not able to interpret."),
                			exception: "",
                			backtrace: response.responseText
                	};
                	
             	
                	PartKeepr.ExceptionWindow.showException(exception);
                	
                	
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