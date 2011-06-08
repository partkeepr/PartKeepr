Ext.namespace('PartDB2'); 
		
Ext.Loader.setPath({
    'PartDB2': 'js'
});

PartDB2.application = null;

Ext.application({
    name: 'PartDB2',
    launch: function() {
    	Ext.setLocale('en_US');
    	
    	this.createLayout();
    	
    	PartDB2.application = this;
    	
        var o = new PartDB2.LoginDialog();
    	o.show();
    	
    	
    	Ext.QuickTips.init();
    },
    createGlobalStores: function () {
    	this.storageLocationStore = Ext.create("Ext.data.Store",
			{
				model: 'StorageLocation',
				pageSize: -1,
				autoLoad: false
			});
    	
    	this.footprintStore = Ext.create("Ext.data.Store",
    			{
    				model: 'Footprint',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.distributorStore = Ext.create("Ext.data.Store",
    			{
    				model: 'Distributor',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.manufacturerStore = Ext.create("Ext.data.Store",
    			{
    				model: 'Manufacturer',
    				pageSize: -1,
    				autoLoad: false
    			});
    	
    	this.partUnitStore = Ext.create("Ext.data.Store",
    			{
    				model: 'PartUnit',
    				pageSize: -1,
    				autoLoad: false
    			});
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
    /**
     * Reload all global stores each 100 seconds.
     * 
     * @todo In the future, it would be nice to trigger a specific
     *       store reload when something happens. Example:
     *       
     *       If the user pulls down the storage location combo box,
     *       reload it.
     *       
     */
    reloadStores: function () {
    	this.storageLocationStore.load();
    	this.footprintStore.load();
    	this.manufacturerStore.load();
    	this.distributorStore.load();
    	this.partUnitStore.load();
    	Ext.defer(PartDB2.getApplication().reloadStores, 100000, this);
    },
    createLayout: function () {

    	this.statusBar = Ext.create("PartDB2.Statusbar");
    	
    	this.messageLog = this.createMessageLog();
    	
    	this.centerPanel = Ext.create("Ext.tab.Panel", {
    			xtype: 'tabpanel',
    			region: 'center',
    			bodyStyle: 'background:#DFE8F6'
    			
    	});
    	
    	this.menuBar = Ext.create("PartDB2.MenuBar");
    	
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
    	return Ext.create("PartDB2.MessageLog", {
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
         }, 'Message');
    	 
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
PartDB2.getRESTProxy = function (service) {
	var obj = {
		batchActions: false,
		url: PartDB2.getBasePath()+ '/'+service,
		listeners: {
        	exception: function (proxy, response, operation) {
        		try {
                    var data = Ext.decode(response.responseText);
                    
                	var j = new PartDB2.ExceptionWindow();
                	j.showException(data.exception);
                } catch (ex) {
                	var exception = {
                			message: i18n("Critical Error"),
                			detail: i18n("The server returned a response which we were not able to interpret."),
                			exception: "",
                			backtrace: response.responseText
                	};
                	
             	
                	var jj = new PartDB2.ExceptionWindow();
                	jj.showException(exception);
                	
                	
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
            type: 'json'
        }
        
	};
	//Ext.data.AjaxProxy.superclass.constructor.apply(this, arguments);
	return new Ext.data.proxy.Rest(obj);
};

PartDB2.getSession = function () {
	alert("This should not be called.");
	return "hli2ong0ktnise68p9f5nu6nk1";
};

PartDB2.log = function (message) {
	PartDB2.getApplication().log(message);
};

/**
 * <p>This static method returns the instance of the application.</p>
 * @return {Object} The application
*/
PartDB2.getApplication = function () {
	return PartDB2.application;
};

PartDB2.getBasePath = function () {
	return "rest.php";
};

PartDB2.setMaxUploadSize = function (size) {
	PartDB2.maxUploadSize = size;
};

PartDB2.getMaxUploadSize = function () {
	return PartDB2.maxUploadSize;
};

PartDB2.bytesToSize = function (bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
};

PartDB2.setAvailableImageFormats = function (formats) {
	PartDB2.imageFormats = formats;
};

PartDB2.getAvailableImageFormats = function () {
	return PartDB2.imageFormats;
};

PartDB2.serializeRecords = function (records) {
	var finalData = [];
	
	for (var i=0;i<records.length;i++) {
		finalData.push(records[i].data);
	}
	
	return finalData;
};