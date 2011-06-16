/**
 * Controller for search.
 */
Ext.define('Docs.controller.Search', {
    extend: 'Ext.app.Controller',

    views: [
        'search.Dropdown'
    ],

    stores: ['Search'],

    init: function() {
        this.control({
            '#search-dropdown': {
                itemclick: function(dropdown, record) {
                    this.loadRecord(record);
                }
            },
            '#search-field': {
                keyup: function(el, ev) {
                    var dropdown = this.getDropdown();

                    el.setHideTrigger(el.getValue().length === 0);

                    if (ev.keyCode === Ext.EventObject.ESC || !el.value) {
                        dropdown.hide();
                        el.setValue("");
                        return;
                    }
                    else {
                        dropdown.show();
                    }

                    var selModel = dropdown.getSelectionModel();
                    var record = selModel.getLastSelected();
                    var curIndex = dropdown.store.indexOf(record);
                    var lastIndex = dropdown.store.getCount() - 1;

                    if (ev.keyCode === Ext.EventObject.UP) {
                        if (curIndex === undefined) {
                            selModel.select(0);
                        } else {
                            selModel.select(curIndex === 0 ? lastIndex : (curIndex - 1));
                        }
                    }
                    else if (ev.keyCode === Ext.EventObject.DOWN) {
                        if (curIndex === undefined) {
                            selModel.select(0);
                        } else {
                            selModel.select(curIndex === lastIndex ? 0 : curIndex + 1);
                        }
                    }
                    else if (ev.keyCode === Ext.EventObject.ENTER) {
                        ev.preventDefault();
                        record && this.loadRecord(record);
                    }
                    else {
                        // Wait a bit before actually performing the search.
                        // When user is typing fast, the value of el.value
                        // might not right away be the final value.  For example
                        // user might type "tre" but we will get three keyup events
                        // where el.value === "t".
                        clearTimeout(this.searchTimeout);
                        this.searchTimeout = Ext.Function.defer(function() {
                            this.search(el.value);
                        }, 50, this);
                    }
                },
                focus: function(el) {
                    if (el.value && this.getDropdown().store.getCount() > 0) {
                        this.getDropdown().show();
                    }
                },
                blur: function() {
                    // Don't hide the dropdown right away, otherwise
                    // we don't receive the itemclick event when focus
                    // was lost because we clicked on dropdown item.
                    // Not really a good solution, but I can't
                    // currently think of anything better.  Behaves
                    // badly when you make a long mouse press on
                    // dropdown item.
                    var dropdown = this.getDropdown();
                    Ext.Function.defer(dropdown.hide, 500, dropdown);
                }
            }
        });
    },

    getDropdown: function() {
        return this.dropdown || (this.dropdown = Ext.getCmp('search-dropdown'));
    },

    // loads class/method corrseponding to the record
    loadRecord: function(record) {
        var name = record.get("cls");
        if (record.get("type") !== 'cls') {
            name += '-' + record.get("type") + '-' + record.get("member");
        }
        Docs.App.getController('Classes').loadClass(name);
        this.getDropdown().hide();
    },

    search: function(term) {
        // perform search and load results to store
        var limit = 10;
        var results = this.filterMembers(term);
        this.getDropdown().setTotal(results.length);
        this.getDropdown().getStore().loadData(results.slice(0, limit));
        // position dropdown below search box
        this.getDropdown().alignTo('search-field', 'bl', [-23, 2]);
        // hide dropdown when nothing found
        if (results.length === 0) {
            this.getDropdown().hide();
        }
        else {
            // auto-select first result
            this.getDropdown().getSelectionModel().select(0);
        }
    },

    filterMembers: function(text) {
        var results = [[], [], [], [], []];
        var xFull=0, nFull=1, xBeg=2, nBeg=3, nMid=4;
        var hasDot = /\./.test(text);
        var safeText = Ext.escapeRe(text);
        var reFull = new RegExp("^" + safeText + "$", "i");
        var reBeg = new RegExp("^" + safeText, "i");
        var reMid = new RegExp(safeText, "i");

        Ext.Array.forEach(Docs.membersData.data, function(r) {
            // when search text has "." in it, search from the full name (e.g. "Ext.Component.focus")
            // Otherwise search from just the member name (e.g. "focus" or "Component")
            var name = hasDot ? r.cls + (r.type === "cls" ? "" : "." + r.member) : r.member;

            if (r.xtypes && Ext.Array.some(r.xtypes, function(x) {return reFull.test(x);})) {
                results[xFull].push(r);
            }
            else if (r.xtypes && Ext.Array.some(r.xtypes, function(x) {return reBeg.test(x);})) {
                results[xBeg].push(r);
            }
            else if (reFull.test(name)) {
                results[nFull].push(r);
            }
            else if (reBeg.test(name)) {
                results[nBeg].push(r);
            }
            else if (reMid.test(name)) {
                results[nMid].push(r);
            }
        });

        return Ext.Array.flatten(results);
    }

});
