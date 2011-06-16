/**
 * Browser history management using Ext.util.History.
 */
Ext.define("Docs.History", {
    extend: 'Docs.LocalStore',
    storeName: 'History',
    singleton: true,

    // Maximum number of items to keep in history store
    maxHistoryLength: 25,

    /**
     * Initializes history management.
     */
    init: function() {
        Ext.util.History.init(function() {
            this.navigate(Ext.util.History.getToken());
        }, this);
        Ext.util.History.on("change", this.navigate, this);
        this.callParent();
    },

    // Parses current URL and navigates to the page
    navigate: function(token) {
        if (this.ignoreChange) {
            this.ignoreChange = false;
            return;
        }

        var url = this.parseToken(token);
        if (url.type === "api") {
            Docs.App.getController('Classes').loadClass(url.key, true);
        }
        else if (url.type === "guide") {
            Docs.App.getController('Classes').showGuide(url.key, true);
        }
        else {
            Ext.getCmp('container').layout.setActiveItem(0);
        }
    },

    // Parses current browser location
    parseToken: function(token) {
        var matches = token && token.match(/\/(api|guide)\/(.*)/);
        return matches ? {type: matches[1], key: matches[2]} : {};
    },

    // Extracts class name from history token
    // Returns false when it's not class-related token.
    parseClassName: function(token) {
        var url = this.parseToken(token);
        if (url.type === "api") {
            return url.key.replace(/-.*$/, '');
        }
        else {
            return false;
        }
    },

    /**
     * Adds URL to history
     *
     * @param {String} token  the part of URL after #
     */
    push: function(token) {
        this.ignoreChange = true;
        Ext.util.History.add(token);

        // Add class name to history store if it's not there already
        var cls = this.parseClassName(token);
        if (cls) {
            // When class already in history remove it and add again.
            // This way the most recently visited items will always be at the top.
            var oldIndex = this.store.findExact('cls', cls);
            if (oldIndex > -1) {
                this.store.removeAt(oldIndex);
            }

            // Add new item at the beginning
            this.store.insert(0, {cls: cls});

            // Remove items from the end of history if there are too many
            while (this.store.getAt(this.maxHistoryLength)) {
                this.store.removeAt(this.maxHistoryLength);
            }
            this.syncStore();
        }
    },

    /**
     * Removes class from History store
     *
     * @param {String} cls
     */
    removeClass: function(cls) {
        var index = this.store.findExact('cls', cls);
        this.store.removeAt(index);
        this.syncStore();
    }
});
