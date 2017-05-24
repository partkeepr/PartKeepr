Ext.define("PartKeepr.ExtJS.Enhancements.addMoreMenu", {
    override: "Ext.grid.header.Container",

    /**
     * Returns an array of menu CheckItems corresponding to all immediate children
     * of the passed Container which have been configured as hideable.
     */
    getColumnMenu: function (headerContainer)
    {
        var menuItems = [],
            i = 0,
            item,
            items = headerContainer.query('>gridcolumn[hideable]'),
            itemsLn = items.length,
            menuItem;

        for (; i < itemsLn; i++)
        {
            item = items[i];
            menuItem = new Ext.menu.CheckItem({
                text: item.menuText || item.text,
                checked: !item.hidden,
                hideOnClick: false,
                headerId: item.id,
                menu: item.isGroupHeader ? this.getColumnMenu(item) : undefined,
                checkHandler: this.onColumnCheckChange,
                scope: this
            });
            menuItems.push(menuItem);
        }

        menuItems.push('-');

        menuItems.push(Ext.menu.CheckItem({
            text: i18n("Customize…"),
            iconCls: 'fugue-icon table--pencil',
            menu: item.isGroupHeader ? this.getColumnMenu(item) : undefined,
            handler: this.foo,
            scope: this
        }));

        // Prevent creating a submenu if we have no items
        return menuItems.length ? menuItems : null;
    },
    foo: function () {
        var j = Ext.create("PartKeepr.Components.Widgets.ColumnConfigurator.Window", {
            grid: this.grid
        });
        j.applyColumnConfigurationFromGrid();
        j.show();
    }
});
