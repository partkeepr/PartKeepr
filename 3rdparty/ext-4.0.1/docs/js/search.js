// Search box
Ext.onReady(function() {
    var searchStore = new Ext.data.Store({
        fields: ['cls', 'member', 'type', 'doc'],
        proxy: {
            type: 'memory',
            reader: {
                type: 'json'
            }
        }
    });
    // This is the global object read from /output/members.js
    searchStore.loadData(Docs.membersData.data);
    var allRecords = searchStore.getRange();
    searchStore.removeAll();

    var panel = Ext.create('Ext.view.View', {
        store: searchStore,
        tpl: new Ext.XTemplate(
            '<tpl for=".">',
                '<div class="item {type}">',
                    '<div class="title">{member}</div>',
                    '<div class="class">{cls}</div>',
                '</div>',
            '</tpl>'
        ),
        id: 'quick-search',
        overItemCls:'x-view-over',
        trackOver: true,
        itemSelector:'div.item',
        singleSelect: true,

        handleClick: function(curItem) {
            curItem = curItem || panel.getSelectionModel().getLastSelected();
            var cls = curItem.data.cls;
            if (curItem.data.type != 'cls') {
                cls += '-' + curItem.data.type + '-' + curItem.data.member;
            }
            panel.hide();
            Docs.ClassLoader.load(cls);
        },
        listeners: {
            itemclick: function(panel, item) {
                this.handleClick(item);
            }
        }
    });

    panel.render('search-box');
    panel.hide();

    Ext.get('search-field').on('blur', function(ev, el) {
        setTimeout(function() {
            panel.hide();
        }, 100);
    });
    Ext.get('search-field').on('focus', function(ev, el) {
        panel.show();
    });

    // When a key is pressed in the search field, search for classes, methods, properties, configs, etc
    Ext.get('search-field').on('keyup', function(ev, el) {
        // Esc key
        if (ev.keyCode == 27 || el.value == '') {
            panel.hide();
            return;
        }
        else {
            panel.show();
        }

        var curItem = panel.store.indexOf(panel.getSelectionModel().getLastSelected()),
            lastItem = panel.store.data.length - 1,
            selModel = panel.getSelectionModel();

        // Up arrow
        if (ev.keyCode == 38) {
            if (curItem == undefined) {
                selModel.select(0);
            } else {
                selModel.select(curItem == 0 ? lastItem : (curItem - 1));
            }
        }
        // Down arrow
        else if (ev.keyCode == 40) {
            if (curItem == undefined) {
                selModel.select(0);
            } else {
                selModel.select(curItem == lastItem ? 0 : curItem + 1);
            }
        }
        // Enter key
        else if (ev.keyCode == 13) {
            ev.preventDefault();
            panel.handleClick();
        }
        else {
            searchExt(Ext.get(el).getValue());
        }
    });

    Ext.get(Ext.get('search-field').dom.parentNode).on('submit', function(ev, el) {
        ev.preventDefault();
    });

    var searchExt = function(term) {
        searchStore.loadData(filterMembers(term), false);
    };

    var filterMembers = function(text) {
        var results = [[], [], []];
        var safeText = Ext.escapeRe(text);
        var re0 = new RegExp("^" + safeText + "$", "i");
        var re1 = new RegExp("^" + safeText, "i");
        var re2 = new RegExp(safeText, "i");
        Ext.Array.forEach(allRecords, function(r) {
            var member = r.get("member");
            if (re0.test(member)) {
                results[0].push(r);
            }
            else if (re1.test(member)) {
                results[1].push(r);
            }
            else if (re2.test(member)) {
                results[2].push(r);
            }
        });
        // flatten results array and returns first n results
        return Ext.Array.flatten(results).slice(0, 10);
    };

});
