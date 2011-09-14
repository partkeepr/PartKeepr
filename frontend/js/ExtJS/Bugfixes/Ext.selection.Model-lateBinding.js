/**
 * Bugfix for Ext.selection.Model:
 * 
 * If a store isn't bound yet, defer binding.
 */
Ext.override(Ext.selection.Model, {
	/**
     * @private
     * Defines if the selection model is already bound to a store.
     */
	_bound: false,
	
	constructor: function (cfg) {
		/**
         * @event _bind
         * Fires as soon as a store is bound
         */
		this.addEvents("_bind");
		
		this.callOverridden(arguments);
	},
	select: function(records, keepExisting, suppressEvent) {
		// Check if we are bound to a store. If not, delay the select operation until the store is bound
		if (this._bound) {
			this.doSelect(records, keepExisting, suppressEvent);
		} else {
			this.on("_bind", function () {
				this.doSelect(records, keepExisting, suppressEvent);
			}, this, { single: true });
		}
        
    },
    bind: function(store, initial) {
		this.callOverridden(arguments);
		
		this._bound = true;
		this.fireEvent("_bind");
	}
});
