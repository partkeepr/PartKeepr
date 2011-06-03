/**
 * @class Ext.direct.Provider
 * <p>Ext.direct.Provider is an abstract class meant to be extended.</p>
 * 
 * <p>For example ExtJs implements the following subclasses:</p>
 * <pre><code>
Provider
|
+---{@link Ext.direct.JsonProvider JsonProvider} 
    |
    +---{@link Ext.direct.PollingProvider PollingProvider}   
    |
    +---{@link Ext.direct.RemotingProvider RemotingProvider}   
 * </code></pre>
 * @abstract
 */
Ext.define('Ext.direct.Provider', {
    
    /* Begin Definitions */
   
   alias: 'direct.provider',
   
    mixins: {
        observable: 'Ext.util.Observable'   
    },
   
    /* End Definitions */
   
   /**
     * @cfg {String} id
     * The unique id of the provider (defaults to an {@link Ext#id auto-assigned id}).
     * You should assign an id if you need to be able to access the provider later and you do
     * not have an object reference available, for example:
     * <pre><code>
Ext.direct.Manager.addProvider({
    type: 'polling',
    url:  'php/poll.php',
    id:   'poll-provider'
});     
var p = {@link Ext.direct.Manager}.{@link Ext.direct.Manager#getProvider getProvider}('poll-provider');
p.disconnect();
     * </code></pre>
     */
    
    constructor : function(config){
        var me = this;
        
        Ext.apply(me, config);
        me.addEvents(
            /**
             * @event connect
             * Fires when the Provider connects to the server-side
             * @param {Ext.direct.Provider} provider The {@link Ext.direct.Provider Provider}.
             */            
            'connect',
            /**
             * @event disconnect
             * Fires when the Provider disconnects from the server-side
             * @param {Ext.direct.Provider} provider The {@link Ext.direct.Provider Provider}.
             */            
            'disconnect',
            /**
             * @event data
             * Fires when the Provider receives data from the server-side
             * @param {Ext.direct.Provider} provider The {@link Ext.direct.Provider Provider}.
             * @param {event} e The Ext.Direct.Event type that occurred.
             */            
            'data',
            /**
             * @event exception
             * Fires when the Provider receives an exception from the server-side
             */                        
            'exception'
        );
        me.mixins.observable.constructor.call(me, config);
    },
    
    /**
     * Returns whether or not the server-side is currently connected.
     * Abstract method for subclasses to implement.
     */
    isConnected: function(){
        return false;
    },

    /**
     * Abstract methods for subclasses to implement.
     * @method
     */
    connect: Ext.emptyFn,
    
    /**
     * Abstract methods for subclasses to implement.
     * @method
     */
    disconnect: Ext.emptyFn
});
