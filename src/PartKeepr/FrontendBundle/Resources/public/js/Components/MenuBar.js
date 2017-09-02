Ext.define('PartKeepr.MenuBar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: "widget.MenuBar",

    baseCls: Ext.baseCSSPrefix + 'toolbar mainMenu',

    menu: {
        text: "Root",
        menu: []
    },

    createMenu: function (target, menuPath, root) {
        var item = menuPath.shift(), newItem;

        if (item === undefined) {
            newItem = {text: target.title, iconCls: target.iconCls, target: target};

            root.menu.push(newItem);
            return root;
        }

        var foundItem = false;

        for (var i = 0; i < root.menu.length; i++) {
            if (root.menu[i].text === item.text) {
                Ext.applyIf(root.menu[i], item);
                foundItem = i;
            }
        }

        if (foundItem === false) {
            newItem = {menu: []};

            Ext.applyIf(newItem, item);

            var data = this.createMenu(target, menuPath, newItem);
            root.menu.push(data);
        } else {
            this.createMenu(target, menuPath, root.menu[foundItem]);

        }

        return root;
    },
    initComponent: function () {
        var target, menuItemIterator;

        this.ui = "mainmenu";

        var menuItems = [
            // System Menu
            "PartKeepr.Components.UserPreferences.Panel",
            "PartKeepr.Components.SystemPreferences.Panel",
            "PartKeepr.Actions.LogoutAction",

            // Edit Menu
            "PartKeepr.ProjectEditorComponent",
            "PartKeepr.FootprintEditorComponent",
            "PartKeepr.ManufacturerEditorComponent",
            "PartKeepr.StorageLocationEditorComponent",
            "PartKeepr.DistributorEditorComponent",
            "PartKeepr.UserEditorComponent",
            "PartKeepr.PartMeasurementUnitEditorComponent",
            "PartKeepr.UnitEditorComponent",
            "PartKeepr.BatchJobEditorComponent",

            // View Menu
            "PartKeepr.SummaryStatisticsPanel",
            "PartKeepr.StatisticsChartPanel",
            "PartKeepr.SystemInformationGrid",
            "PartKeepr.ProjectReportView",
            'PartKeepr.ProjectRunEditorComponent',
            "PartKeepr.SystemNoticeEditorComponent",
            "PartKeepr.StockHistoryGrid"
        ];

        this.menu.menu.push({xtype: 'tbspacer'});

        for (menuItemIterator = 0; menuItemIterator < menuItems.length; menuItemIterator++) {
            target = Ext.ClassManager.get(menuItems[menuItemIterator]);

            if (!target) {
                Ext.raise("Error: " + menuItems[menuItemIterator] + " not found!");
            }

            if (!target.menuPath) {
                Ext.raise("Error: " + menuItems[menuItemIterator] + " has no menuPath defined!");
            }
            this.createMenu(target, target.menuPath, this.menu);
        }

        this.themesMenu = [];
        var checked;

        this.themesMenu.push({
            text: "Warning: Theme support is a beta-feature!",
            disabled: true
        });

        for (var i in window.themes) {
            checked = window.theme === i;
            this.themesMenu.push({
                text: window.themes[i].themeName,
                theme: i,
                group: 'theme',
                checked: checked
            });
        }


        this.menu.menu.push({text: i18n("Theme"), type: 'themes', menu: this.themesMenu});
        this.menu.menu.push({xtype: 'tbspacer', width: 50});

        this.menu.menu.push({
            xtype: 'button',
            text: i18n("Patreon Status"),
            iconCls: 'patreonLogo',
            handler: this.showPatreonStatusDialog,
            scope: this
        });
        if (Ext.isObject(window.parameters.patreonStatus)) {
            this.menu.menu.push({
                xtype: 'progressbar',
                value: (window.parameters.patreonStatus.pledgeSum / window.parameters.patreonStatus.goal),
                width: 50
            });
        }

        this.menu.menu.push({xtype: 'tbfill'});
        this.menu.menu.push({xtype: 'button', iconCls: 'partkeeprLogo'});
        this.menu.menu.push({xtype: 'tbspacer', width: 10});

        this.items = this.menu.menu;

        this.callParent();
    },
    showPatreonStatusDialog: function () {
        var window = Ext.create("PartKeepr.Components.PatreonStatusDialog");
        window.show();
    },
    selectTheme: function (theme) {
        var i, j, menuItem;

        for (i = 0; i < this.items.getCount(); i++) {
            if (this.items.getAt(i).type === "themes") {
                for (j = 0; j < this.items.getAt(i).menu.items.getCount(); j++) {
                    menuItem = this.items.getAt(i).menu.items.getAt(j);

                    if (menuItem.theme === theme) {
                        menuItem.setChecked(true);
                    }
                }

            }
        }
    }
});
