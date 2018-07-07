Ext.define("PartKeepr.Data.Store.BaseStore", {
    extend: "Ext.data.Store",

    autoSync: false, // Do not change. If true, new (empty) records would be immediately committed to the database.
    remoteFilter: true,
    remoteSort: true,
    pageSize: 15,

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
    searchFilter: null,

    listeners: {
        // Workaround for bug http://www.sencha.com/forum/showthread.php?133767-Store.sync()-does-not-update-dirty-flag&p=607093#post607093
        // TODO: Check if this is still present in ExtJS 6.x
        write: function (store, operation) {
            var success = operation.wasSuccessful();
            if (success) {
                Ext.each(operation.records, function (record)
                {
                    if (record.dirty) {
                        record.commit();
                    }
                });
            }
        }
    },

    constructor: function () {
        this.searchFilter = Ext.create("PartKeepr.util.Filter");
        this.callParent(arguments);
    },

    doSearch: function (searchValue) {
        if (typeof searchValue !== "string") {
            return;
        }

        var searchTerms = searchValue.split(" "),
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
                        orSubFilters.push(this.createSearchFilter(fields[i], searchTerms[j]));
                    }

                    subFilters.push(Ext.create("PartKeepr.util.Filter", {
                        type: "OR",
                        subfilters: orSubFilters
                    }));
                }

                this.searchFilter.setConfig({
                    type: "AND",
                    subfilters: subFilters
                });

            } else {
                for (i = 0; i < fields.length; i++) {
                    subFilters.push(this.createSearchFilter(fields[i], searchValue));
                }

                this.searchFilter.setConfig({
                    type: "OR",
                    subfilters: subFilters
                });
            }


        } else {
            if (splitTerms === true) {
                for (j = 0; j < searchTerms.length; j++) {
                    subFilters.push(this.createSearchFilter(this.targetField, searchTerms[j]));
                }

                this.searchFilter.setConfig({
                    type: "OR",
                    subfilters: subFilters
                });
            } else {
                this.searchFilter.setConfig({
                    property: this.targetField,
                    value: "%" + searchValue+ "%",
                    operator: 'like'
                });
            }
        }

        if (searchValue.length < 1) {
            this.resetSearch();
            return;
        }

        if (this.isLoading()) {
            Ext.defer(this.startSearch, 200, this);
            return;
        }

        this.searchFilter.setValue(searchValue);

        if (!this.getFilters().contains(this.searchFilter)) {
            this.getFilters().add(this.searchFilter);
        }

        this.getFilters().itemChanged(this.searchFilter);

        this.hasSearch = true;
    },

    createSearchFilter: function (property, term) {
        return Ext.create("PartKeepr.util.Filter", {
            property: property,
            value: "%" + term + "%",
            operator: 'like'
        });
    },
    /**
     * Resets the search field to empty and re-triggers the store to load the matching records.
     */
    resetSearch: function ()
    {
        if (this.isLoading()) {
            Ext.defer(this.resetSearch, 200, this);
            return;
        }

        this.searchFilter.setValue('');

        if (this.hasSearch) {

            if (this.getFilters().contains(this.searchFilter)) {
                this.getFilters().remove(this.searchFilter);
            }

            this.currentPage = 1;
            this.load({start: 0});
            this.hasSearch = false;

        }
    }


});