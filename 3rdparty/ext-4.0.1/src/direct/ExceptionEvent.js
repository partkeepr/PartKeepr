/**
 * @class Ext.direct.ExceptionEvent
 * @extends Ext.direct.RemotingEvent
 * An event that is fired when an exception is received from a {@link Ext.direct.RemotingProvider}
 */
Ext.define('Ext.direct.ExceptionEvent', {
    
    /* Begin Definitions */
   
    extend: 'Ext.direct.RemotingEvent',
    
    alias: 'direct.exception',
    
    /* End Definitions */
   
   status: false
});
