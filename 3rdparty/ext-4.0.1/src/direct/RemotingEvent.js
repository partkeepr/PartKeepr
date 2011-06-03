/**
 * @class Ext.direct.RemotingEvent
 * @extends Ext.direct.Event
 * An event that is fired when data is received from a 
 * {@link Ext.direct.RemotingProvider}. Contains a method to the
 * related transaction for the direct request, see {@link #getTransaction}
 */
Ext.define('Ext.direct.RemotingEvent', {
    
    /* Begin Definitions */
   
    extend: 'Ext.direct.Event',
    
    alias: 'direct.rpc',
    
    /* End Definitions */
    
    /**
     * Get the transaction associated with this event.
     * @return {Ext.direct.Transaction} The transaction
     */
    getTransaction: function(){
        return this.transaction || Ext.direct.Manager.getTransaction(this.tid);
    }
});
