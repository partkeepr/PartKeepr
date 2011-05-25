/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.data.HttpProxy
 * @extends Ext.data.DataProxy
 * <p>An implementation of {@link Ext.data.DataProxy} that processes data requests within the same
 * domain of the originating page.</p>
 * <p><b>Note</b>: this class cannot be used to retrieve data from a domain other
 * than the domain from which the running page was served. For cross-domain requests, use a
 * {@link Ext.data.ScriptTagProxy ScriptTagProxy}.</p>
 * <p>Be aware that to enable the browser to parse an XML document, the server must set
 * the Content-Type header in the HTTP response to "<tt>text/xml</tt>".</p>
 * @constructor
 * @param {Object} conn
 * An {@link Ext.data.Connection} object, or options parameter to {@link Ext.Ajax#request}.
 * <p>Note that if this HttpProxy is being used by a {@link Ext.data.Store Store}, then the
 * Store's call to {@link #load} will override any specified <tt>callback</tt> and <tt>params</tt>
 * options. In this case, use the Store's {@link Ext.data.Store#events events} to modify parameters,
 * or react to loading events. The Store's {@link Ext.data.Store#baseParams baseParams} may also be
 * used to pass parameters known at instantiation time.</p>
 * <p>If an options parameter is passed, the singleton {@link Ext.Ajax} object will be used to make
 * the request.</p>
 */

/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
/**
 * @class Ext.data.MemoryProxy
 * @extends Ext.data.DataProxy
 * An implementation of Ext.data.DataProxy that simply passes the data specified in its constructor
 * to the Reader when its load method is called.
 * @constructor
 * @param {Object} data The data object which the Reader uses to construct a block of Ext.data.Records.
 */
ServiceCallDataProxy = function(call){
	
	this.call = call;
    // Must define a dummy api with "read" action to satisfy DataProxy#doRequest and Ext.data.Api#prepare *before* calling super
    var api = {};
    api[Ext.data.Api.actions.read] = true;
    ServiceCallDataProxy.superclass.constructor.call(this, {
        api: api
    });

};

Ext.extend(ServiceCallDataProxy, Ext.data.DataProxy, {
    /**
     * @event loadexception
     * Fires if an exception occurs in the Proxy during data loading. Note that this event is also relayed
     * through {@link Ext.data.Store}, so you can listen for it directly on any Store instance.
     * @param {Object} this
     * @param {Object} arg The callback's arg object passed to the {@link #load} function
     * @param {Object} null This parameter does not apply and will always be null for MemoryProxy
     * @param {Error} e The JavaScript Error object caught if the configured Reader could not read the data
     */

       /**
     * MemoryProxy implementation of DataProxy#doRequest
     * @param {String} action
     * @param {Ext.data.Record/Ext.data.Record[]} rs If action is load, rs will be null
     * @param {Object} params An object containing properties which are to be used as HTTP parameters
     * for the request to the remote server.
     * @param {Ext.data.DataReader} reader The Reader object which converts the data
     * object into a block of Ext.data.Records.
     * @param {Function} callback The function into which to pass the block of Ext.data.Records.
     * The function must be passed <ul>
     * <li>The Record block object</li>
     * <li>The "arg" argument from the load function</li>
     * <li>A boolean success indicator</li>
     * </ul>
     * @param {Object} scope The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.
     * @param {Object} arg An optional argument which is passed to the callback as its second parameter.
     */
    doRequest : function(action, rs, params, reader, callback, scope, arg) {
	
	for (var i in params) {
		this.call.setParameter(i, params[i]);
	}
        // No implementation for CRUD in MemoryProxy.  Assumes all actions are 'load'
        params = params || {};
        var result;
        
        this.call.setHandler(
        	function (response) {
        		 try {
	                 result = reader.readRecords(response);
	             }catch(e){
	                 // @deprecated loadexception
	                 this.fireEvent("loadexception", this, null, arg, e);
	
	                 this.fireEvent('exception', this, 'response', action, arg, null, e);
	                 callback.call(scope, null, arg, false);
	                 return;
	             }
	             callback.call(scope, result, arg, true);
	         }.createDelegate(this));
    	
    	this.call.doCall();
	}
       
});
