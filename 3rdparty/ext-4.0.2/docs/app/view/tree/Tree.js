/**
 * The class tree
 */
Ext.define('Docs.view.tree.Tree', {
    extend: 'Ext.tree.Panel',
    alias : 'widget.classtree',
    requires: [
        'Docs.view.HoverMenuButton',
        'Docs.Favorites',
        'Docs.History'
    ],

    cls: 'class-tree iScroll',
    folderSort: true,
    useArrows: true,
    rootVisible: false,

    border: false,
    bodyBorder: false,

    initComponent: function() {
        this.addEvents(
            /**
             * @event
             * Fired when class in tree was clicked on and needs to be loaded.
             * @param {String} cls  name of the class.
             */
            "classclick"
        );

        // Expand the main tree
        this.root.expanded = true;
        this.root.children[0].expanded = true;

        this.on("itemclick", this.onItemClick, this);

        this.dockedItems = [
            {
                xtype: 'container',
                layout: 'hbox',
                dock: 'top',
                margin: '0 0 15 0',
                items: [
                    {
                        xtype: 'hovermenubutton',
                        cls: 'icon-fav sidebar',
                        text: 'Favorites',
                        menuCfg: {
                            cls: 'sidebar',
                            emptyText: 'No favorites',
                            showCloseButtons: true
                        },
                        store: Ext.getStore('Favorites'),
                        listeners: {
                            closeclick: function(cls) {
                                Docs.Favorites.remove(cls);
                            }
                        }
                    },
                    {
                        xtype: 'hovermenubutton',
                        cls: 'icon-hist sidebar',
                        text: 'History',
                        menuCfg: {
                            cls: 'sidebar',
                            emptyText: 'No history',
                            showCloseButtons: true
                        },
                        store: Ext.getStore('History'),
                        listeners: {
                            closeclick: function(cls) {
                                Docs.History.removeClass(cls);
                            }
                        }
                    }
                ]
            }
        ];

        this.callParent();
        
        // Add links for favoriting classes
        //
        // We should be able to just listen the "render" event of tee,
        // but for some reason the tree nodes aren't quite ready when
        // "render" fires (setting text on node will cause an
        // exception because the actual dom node seems to be missing,
        // although setting text on the currently hidden nodes will
        // work).  I found a workaround by listening the "refresh"
        // event which seems to first fire when all tree nodes are
        // ready.  Most ceartanly a big hack.
        //
        // Additionally all this is done after callParent, because the
        // getRootNode() will work after initComponent has run.
        // Probably not neccessary, because "refresh" should happen
        // after that anyway, but just to play it safe.
        Docs.Favorites.setTree(this);
        Ext.getStore("Favorites").on("load", function() {
            this.getView().on("refresh", function(){
                this.getRootNode().cascadeBy(this.addFavIcons, this);
            }, this, {single: true});
        }, this);
    },

    addFavIcons: function(node) {
        if (node.get("leaf")) {
            var cls = node.raw.clsName;
            var show = Docs.Favorites.has(cls) ? "show" : "";
            node.set("text", node.get("text") + Ext.String.format('<a rel="{0}" class="fav {1}"></a>', cls, show));
            node.commit();
        }
    },

    onItemClick: function(view, node, item, index, e) {
        var clsName = node.raw ? node.raw.clsName : node.data.clsName;

        if (clsName) {
            if (e.getTarget(".fav")) {
                var favEl = Ext.get(e.getTarget(".fav"));
                if (favEl.hasCls('show')) {
                    Docs.Favorites.remove(clsName);
                }
                else {
                    Docs.Favorites.add(clsName);
                }
            }
            else {
                this.fireEvent("classclick", clsName);
            }
        }
        else if (!node.isLeaf()) {
            if (node.isExpanded()) {
                node.collapse(false);
            }
            else {
                node.expand(false);
            }
        }
    },

    /**
     * Selects class node in tree by name.
     *
     * @param {String} cls
     */
    selectClass: function(cls) {
        var r = this.findRecordByClassName(cls);
        if (r) {
            this.getSelectionModel().select(r);
            r.bubble(function(n) {
                n.expand();
            });
        }
    },

    /**
     * Sets favorite status of class on or off.
     *
     * @param {String} cls  name of the class
     * @param {Boolean} enable  true to mark class as favorite.
     */
    setFavorite: function(cls, enable) {
        var r = this.findRecordByClassName(cls);
        if (r) {
            var show = enable ? "show" : "";
            r.set("text", r.get("text").replace(/class="fav *(show)?"/, 'class="fav '+show+'"'));
            r.commit();
        }
    },

    findRecordByClassName: function(cls) {
        return this.getRootNode().findChildBy(function(n) {
            return cls === n.raw.clsName;
        }, this, true);
    }
});
