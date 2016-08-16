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
     * @cfg {String} Specifies the system property which defines all fields to be searched
     */
    searchFieldSystemPreference: null,

    /**
     * @cfg {Array} Specifies the default fields to be searched
     */
    searchFieldSystemPreferenceDefaults: [],

    /**
     * @cfg {String} Specifies the system property which defines if the search terms should be splitted
     */
    splitSearchTermSystemPreference: null,

    /**
     * @cfg {String} Specifies the default for search term splitting
     */
    splitSearchTermSystemPreferenceDefaults: true,

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
        this.store.on("filterchange", this.onFilterChange, this);
        this.filter = Ext.create("PartKeepr.util.Filter");
        this.callParent(arguments);
    },
    onFilterChange: function ()
    {
        if (!this.store.getFilters().contains(this.filter)) {
            this.setValue("");

            this.getTrigger("clear").hide();
            this.hasSearch = false;
        }

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

            if (store.getFilters().contains(this.filter)) {
                store.getFilters().remove(this.filter);
            }

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
            searchValue = me.getValue(),
            searchTerms = searchValue.split(" "),
            splitTerms = true,
            orSubFilters = [],
            i,
            j,
            subFilters = [];

        if (this.splitSearchTermSystemPreference !== null) {
            splitTerms = Boolean(PartKeepr.getApplication().getSystemPreference(this.splitSearchTermSystemPreference,
                this.splitSearchTermSystemPreferenceDefaults));
        }

        if (this.searchFieldSystemPreference !== null) {
            var fields = PartKeepr.getApplication().getSystemPreference(this.searchFieldSystemPreference,
                this.searchFieldSystemPreferenceDefaults);

            if (splitTerms === true) {
                for (j = 0; j < searchTerms.length; j++) {
                    orSubFilters = [];
                    for (i = 0; i < fields.length; i++) {
                        orSubFilters.push(this.createFilter(fields[i], searchTerms[j]));
                    }

                    subFilters.push(Ext.create("PartKeepr.util.Filter", {
                        type: "OR",
                        subfilters: orSubFilters
                    }));
                }

                this.filter.setConfig({
                type: "AND",
                subfilters: subFilters
            });

            } else {
                for (i = 0; i < fields.length; i++) {
                    subFilters.push(this.createFilter(fields[i], searchValue));
                }

                this.filter.setConfig({
                type: "OR",
                subfilters: subFilters
            });
            }


        } else {
            if (splitTerms === true) {
                for (j = 0; j < searchTerms.length; j++) {
                    subFilters.push(this.createFilter(this.targetField, searchTerms[j]));
                }

                this.filter.setConfig({
                    type: "OR",
                    subfilters: subFilters
                });
            } else {
                this.filter.setConfig({
                    property: this.targetField,
                    value: "%" + searchValue+ "%",
                    operator: 'like'
                });
            }
        }

        if (searchValue.length < 1) {
            me.resetSearch();
            return;
        }

        if (store.isLoading()) {
            Ext.defer(this.startSearch, 200, this);
            return;
        }

        this.filter.setValue(searchValue);

        if (!store.getFilters().contains(this.filter)) {
            store.getFilters().add(this.filter);
        }

        store.getFilters().itemChanged(this.filter);

        me.hasSearch = true;
        this.getTrigger("clear").show();
    },
    createFilter: function (property, term)
    {
        return Ext.create("PartKeepr.util.Filter", {
            property: property,
            value: "%" + term + "%",
            operator: 'like'
        });
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
