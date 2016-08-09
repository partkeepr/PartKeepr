Ext.define('PartKeepr.Components.SystemPreferences.Panel', {
    extend: 'Ext.panel.Panel',
    title: i18n("System Preferences"),
    layout: 'border',

    initComponent: function ()
    {
        var settings = [
            "PartKeepr.Components.SystemPreferences.Preferences.FulltextSearch",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartFields",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartManufacturerFields",
            "PartKeepr.Components.SystemPreferences.Preferences.RequiredPartDistributorFields"
        ];

        var settingItems = [], item;

        settingItems.push(new Ext.create("Ext.panel.Panel", {
            layout: "center",
            items: {
                width: "100%",
                border: false,
                bodyStyle: "text-align: center;",
                html: "<h1>" + i18n("Select an item to edit") + "</h1>"
            }
        }));

        for (var i = 0; i < settings; i++) {
            item = Ext.create(settings[i]);
            settingItems.push(item);
        }

        this.navigation = Ext.create("PartKeepr.Components.SystemPreferences.Tree",
            {
                menuItems: settings,
                region: "west",
                width: 200
            });

        this.navigation.on("itemclick", function (record, item)
        {
            if (typeof item.data.target === "function") {
                this.openSettingsItem(item.data.target.$className);
            }
        }, this);

        this.cards = Ext.create("Ext.panel.Panel", {
            region: 'center',
            layout: 'card',
            items: settingItems
        });

        this.items = [
            this.navigation,
            this.cards
        ];

        this.callParent();
    },
    openSettingsItem: function (target)
    {
        var targetClass = Ext.ClassManager.get(target);

        var config = {
            title: targetClass.title,
            closable: targetClass.closable,
            iconCls: targetClass.iconCls
        };

        for (var i = 0; i < this.cards.items.length; i++) {
            if (this.cards.items.getAt(i).$className === targetClass.$className) {
                this.cards.setActiveItem(this.cards.items.getAt(i));
                return;
            }
        }

        var j = Ext.create(target, config);
        this.cards.items.add(j);
        this.cards.setActiveItem(j);

    },
    statics: {
        iconCls: 'fugue-icon gear',
        title: i18n('System Preferences'),
        closable: true,
        menuPath: [{text: i18n("System")}]
    }

});
