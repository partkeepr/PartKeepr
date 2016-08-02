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

    initComponent: function () {
        this.callParent(arguments);
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
            store = me.store;

        if (store.isLoading()) {
            Ext.defer(this.resetSearch, 200, this);
            return;
        }

        me.setValue('');
        this.filter.setValue('');

        if (me.hasSearch) {

            store.getFilters().clear();

            store.currentPage = 1;
            store.load({start: 0});
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
            searchValue = me.getValue(),
            searchTerms = searchValue.split(" "),
            splitTerms = true,
            i,
            j,
            subFilters = [];

        if (this.splitSearchTermSystemPreference !== null) {
            splitTerms = Boolean(PartKeepr.getApplication().getSystemPreference(this.splitSearchTermSystemPreference, this.splitSearchTermSystemPreferenceDefaults));
        }

        if (this.searchFieldSystemPreference !== null) {
            var fields = PartKeepr.getApplication().getSystemPreference(this.searchFieldSystemPreference, this.searchFieldSystemPreferenceDefaults)

            for (i = 0; i < fields.length; i++) {
                if (splitTerms === true) {
                    for (j = 0; j < searchTerms.length; j++) {
                        subFilters.push(this.createFilter(fields[i], searchTerms[j]));
                    }
                } else {
                    subFilters.push(this.createFilter(fields[i], searchValue));
                }

            }

            this.filter = Ext.create("PartKeepr.util.Filter", {
                type: "OR",
                subfilters: subFilters
            });
        } else {
            if (splitTerms === true) {
                for (j = 0; j < searchTerms.length; j++) {
                    for (j = 0; j < searchTerms.length; j++) {
                        subFilters.push(this.createFilter(this.targetField, searchTerms[j]));
                    }
                }

                this.filter = Ext.create("PartKeepr.util.Filter", {
                    type: "OR",
                    subfilters: subFilters
                });
            } else {
                this.filter = this.createFilter(this.targetField, searchValue);
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
        store.getFilters().clear();
        store.setFilters(this.filter);
        store.currentPage = 1;
        store.load({start: 0});

        me.hasSearch = true;
        this.getTrigger("clear").show();
    },
    createFilter: function (property, term) {
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
    setStore: function (store) {
        this.store = store;
    }
});
