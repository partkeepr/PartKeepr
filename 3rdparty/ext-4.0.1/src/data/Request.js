/**
 * @author Ed Spencer
 * @class Ext.data.Request
 * @extends Object
 * 
 * <p>Simple class that represents a Request that will be made by any {@link Ext.data.proxy.Server} subclass.
 * All this class does is standardize the representation of a Request as used by any ServerProxy subclass,
 * it does not contain any actual logic or perform the request itself.</p>
 * 
 * @constructor
 * @param {Object} config Optional config object
 */
Ext.define('Ext.data.Request', {
    /**
     * @cfg {String} action The name of the action this Request represents. Usually one of 'create', 'read', 'update' or 'destroy'
     */
    action: undefined,
    
    /**
     * @cfg {Object} params HTTP request params. The Proxy and its Writer have access to and can modify this object.
     */
    params: undefined,
    
    /**
     * @cfg {String} method The HTTP method to use on this Request (defaults to 'GET'). Should be one of 'GET', 'POST', 'PUT' or 'DELETE'
     */
    method: 'GET',
    
    /**
     * @cfg {String} url The url to access on this Request
     */
    url: undefined,

    constructor: function(config) {
        Ext.apply(this, config);
    }
});