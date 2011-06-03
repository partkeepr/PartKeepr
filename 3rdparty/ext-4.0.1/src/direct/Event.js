/**
 * @class Ext.direct.Event
 * A base class for all Ext.direct events. An event is
 * created after some kind of interaction with the server.
 * The event class is essentially just a data structure
 * to hold a direct response.
 * 
 * @constructor
 * @param {Object} config The config object
 */
Ext.define('Ext.direct.Event', {
    
    /* Begin Definitions */
   
    alias: 'direct.event',
    
    requires: ['Ext.direct.Manager'],
    
    /* End Definitions */
   
    status: true,
    
    constructor: function(config) {
        Ext.apply(this, config);
    },
    
    /**
     * Return the raw data for this event.
     * @return {Object} The data from the event
     */
    getData: function(){
        return this.data;
    }
});
