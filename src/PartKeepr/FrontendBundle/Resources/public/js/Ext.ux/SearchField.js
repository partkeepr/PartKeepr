/**
 * Defines a search field, which automatically hooks into the passed store.
 * 
 * The "clear" trigger is shown only when text is entered.
 */
Ext.define('Ext.ux.form.SearchField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.searchfield',

    triggers: {
        clear: {
            cls: Ext.baseCSSPrefix + 'form-clear-trigger',
            hidden: true,
            handler: 'resetSearch',
            scope: 'this',
        },
        search: {
            cls: Ext.baseCSSPrefix + 'form-search-trigger',
            handler: 'startSearch',
            scope: 'this'
        }
    },

    hasSearch : false,
	
	/**
	 * Defines the parameter name which is being passed to the store's proxy.
	 */
    targetField : 'query',

    filter: null,
    
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

        this.filter = Ext.create("Ext.util.Filter", {
            property: this.targetField,
            value: '',
            operator: 'like'
        });
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
            store.removeFilter(this.filter);

            store.currentPage = 1;
            store.load({ start: 0 });
            me.hasSearch = false;

            this.getTrigger("clear").hide();
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

        this.filter.setValue("%"+value+"%");
        store.addFilter(this.filter);
        store.currentPage = 1;
        store.load({ start: 0 });
        
        me.hasSearch = true;
        this.getTrigger("clear").show();
	}
});