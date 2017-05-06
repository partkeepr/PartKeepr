Ext.define('PartKeepr.Components.Preferences.Tree', {
    extend: 'Ext.tree.Panel',
    width: 400,
    rootVisible: false,
    initComponent: function (config) {
        var menu = {
            root: {
                expanded: true,
                children: []
            }
        };

        var target, menuItemIterator;

        for (menuItemIterator = 0; menuItemIterator < this.menuItems.length; menuItemIterator++) {
            target = Ext.ClassManager.get(this.menuItems[menuItemIterator]);

            if (!target) {
                console.log("Error: " + this.menuItems[menuItemIterator] + " not found!");
            }

            if (!target.menuPath) {
                console.log("Error: " + this.menuItems[menuItemIterator] + " has no menuPath defined!");
            }

            this.createMenu(target, Ext.clone(target.menuPath), menu.root);
        }

        this.store = Ext.create('Ext.data.TreeStore', menu);

        this.callParent(this, config);
    },

    createMenu: function (target, menuPath, root) {
        var item = menuPath.shift();
        var newItem;

        if (item === undefined) {
            newItem = {text: target.title, iconCls: target.iconCls, expanded: true, target: target, leaf: true};

            root.children.push(newItem);
            return root;
        }

        var foundItem = false;

        for (var i = 0; i < root.children.length; i++) {
            if (root.children[i].text === item.text) {
                Ext.applyIf(root.children[i], item);
                foundItem = i;
            }
        }

        if (foundItem === false) {
            newItem = {children: [], expanded: true};

            Ext.applyIf(newItem, item);

            var data = this.createMenu(target, menuPath, newItem);
            root.children.push(data);
        } else {
            this.createMenu(target, menuPath, root.children[foundItem]);
        }

        return root;
    }
});
