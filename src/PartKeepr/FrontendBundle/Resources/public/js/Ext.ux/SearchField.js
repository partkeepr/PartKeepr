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

    listeners: {
        'specialkey': {
            fn: 'keyHandler',
            scope: 'this'
        }
    },
    
	/**
	 * Initializes the component. Binds the enter key to startSearch.
	 */
    initComponent: function(){
        this.callParent(arguments);

        this.filter = Ext.create("Ext.util.Filter", {
            property: this.targetField,
            value: '',
            operator: 'like'
        });
    },
    /**
     * Handles special keys used in this field.
     *
     * Enter: Starts the search
     * Escape: Removes the search and clears the field contents
     */
    keyHandler: function (field, e) {
        switch (e.getKey()) {
            case e.ENTER:
                this.startSearch();
                break;
            case e.ESC:
                this.resetSearch();
                break;
        }
    },
 	/**
	 * Resets the search field to empty and re-triggers the store to load the matching records.
	 */
	resetSearch: function () {
		var me = this,
            store = me.store,
            val;

        me.setValue('');

        if (me.hasSearch) {

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