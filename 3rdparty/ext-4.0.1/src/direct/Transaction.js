/**
 * @class Ext.direct.Transaction
 * @extends Object
 * <p>Supporting Class for Ext.Direct (not intended to be used directly).</p>
 * @constructor
 * @param {Object} config
 */
Ext.define('Ext.direct.Transaction', {
    
    /* Begin Definitions */
   
    alias: 'direct.transaction',
    alternateClassName: 'Ext.Direct.Transaction',
   
    statics: {
        TRANSACTION_ID: 0
    },
   
    /* End Definitions */
   
    constructor: function(config){
        var me = this;
        
        Ext.apply(me, config);
        me.id = ++me.self.TRANSACTION_ID;
        me.retryCount = 0;
    },
   
    send: function(){
         this.provider.queueTransaction(this);
    },

    retry: function(){
        this.retryCount++;
        this.send();
    },

    getProvider: function(){
        return this.provider;
    }
});
