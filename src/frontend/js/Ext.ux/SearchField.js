/**
 * Defines a search field, which automatically hooks into the passed store.
 * 
 * The "clear" trigger is shown only when text is entered.
 */
Ext.define('Ext.ux.form.SearchField', {
    extend: 'Ext.form.field.Trigger',
    alias: 'widget.searchfield',

	/**
	 * Define the clear trigger
	 */
    trigger1Cls: Ext.baseCSSPrefix + 'form-clear-trigger',
    
	/**
	 * Define the clear trigger
	 */
    trigger2Cls: Ext.baseCSSPrefix + 'form-search-trigger',
    
    hasSearch : false,
	
	/**
	 * Defines the parameter name which is being passed to the store's proxy.
	 */
    paramName : 'query',
    
	/**
	 * Initializes the component. Binds the enter key to startSearch.
	 */
    initComponent: function(){
        this.callParent(arguments);
        this.on('specialkey', function(f, e){
            if(e.getKey() == e.ENTER){
                this.startSearch();
            }
        }, this);
    },
	/**
	 * Hides the "clear" trigger as soon as the component is rendered.
	 */
    afterRender: function(){
        this.callParent();
        this.triggerCell.item(0).setDisplayed('none');
        this.doComponentLayout();
    },
    /**
	 * Handler for the "reset search" trigger
	 */
    onTrigger1Click : function(){
        this.resetSearch();
    },
	/**
	 * Handler for the "start search" trigger
	 */
    onTrigger2Click : function(){
       this.startSearch();
    },
	
	/**
	 * Resets the search field to empty and re-triggers the store to load the matching records.
	 */
	resetSearch: function () {
		var me = this,
            store = me.store,
            proxy = store.getProxy(),
            val;
            
        if (me.hasSearch) {
            me.setValue('');
            proxy.extraParams[me.paramName] = '';
            store.currentPage = 1;
            store.load({ start: 0 });
            me.hasSearch = false;
            
            me.triggerCell.item(0).setDisplayed('none');
            me.doComponentLayout();
        }
	},
	/**
	 * Starts the search with the entered value.
	 */
	startSearch: function () {
		 var me = this,
            store = me.store,
            proxy = store.getProxy(),
            value = me.getValue();
            
        if (value.length < 1) {
            me.resetSearch();
            return;
        }
        proxy.extraParams[me.paramName] = value;
        store.currentPage = 1;
        store.load({ start: 0 });
        
        me.hasSearch = true;
        me.triggerCell.item(0).setDisplayed('block');
        me.doComponentLayout();
	}
});