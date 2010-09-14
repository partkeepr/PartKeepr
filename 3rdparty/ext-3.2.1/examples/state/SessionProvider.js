/*!
 * Ext JS Library 3.2.1
 * Copyright(c) 2006-2010 Ext JS, Inc.
 * licensing@extjs.com
 * http://www.extjs.com/license
 */
Ext.state.SessionProvider = Ext.extend(Ext.state.CookieProvider, {
    readCookies : function(){
        if(this.state){
            for(var k in this.state){
                if(typeof this.state[k] == 'string'){
                    this.state[k] = this.decodeValue(this.state[k]);
                }
            }
        }
        return Ext.apply(this.state || {}, Ext.state.SessionProvider.superclass.readCookies.call(this));
    }
});