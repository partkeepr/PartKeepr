/**
 * Defines a search field, which automatically hooks into the passed store.
 *
 * The "clear" trigger is shown only when text is entered.
 */
Ext.define('PartKeepr.form.field.SearchField', {
    extend: 'Ext.form.field.Text',
    alias: 'widget.partkeepr-searchfield',

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

    /**
     * @var {Boolean} Specifies if the search field has an active search
     */
    hasSearch: false,

    /**
     * @cfg {String} Specifies the target property to search
     */
    targetField: 'query',

    /**
     * @var {Ext.util.Filter} The filter set by the search field
     */
    filter: null,

    listeners: {
        'specialkey': {
            fn: 'keyHandler',
            scope: 'this'
        }
    },

    initComponent: function ()
    {
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
    keyHandler: function (field, e)
    {
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
    resetSearch: function ()
    {
        var me = this,
            store = me.store;

        if (store.isLoading()) {
            Ext.defer(this.resetSearch, 200, this);
            return;
        }

        me.setValue('');
        this.filter.setValue('');

        if (me.hasSearch) {

            store.removeFilter(this.filter);

            store.currentPage = 1;
            store.load({start: 0});
            me.hasSearch = false;

            this.getTrigger("clear").hide();
        }
    },
    /**
     * Starts the search with the entered value.
     */
    startSearch: function ()
    {
        var me = this,
            store = me.store,
            value = me.getValue(),
            searchValue = "%" + value + "%";

        if (value.length < 1) {
            me.resetSearch();
            return;
        }

        if (store.isLoading()) {
            Ext.defer(this.startSearch, 200, this);
            return;
        }

        if (this.filter.getValue() === searchValue) {
            return;
        }
        this.filter.setValue(searchValue);
        store.addFilter(this.filter);
        store.currentPage = 1;
        store.load({start: 0});

        me.hasSearch = true;
        this.getTrigger("clear").show();
    },
    /**
     * Sets the store to use
     *
     * @param {Ext.data.Store} store The store to set
     */
    setStore: function (store)
    {
        this.store = store;
    }
});
