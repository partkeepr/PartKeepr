Ext.define("PartKeepr.Components.Widgets.ColumnConfigurator.Window", {
    extend: "Ext.window.Window",

    width: 800,
    height: 400,

    title: i18n("Configure Columns"),

    layout: 'fit',
    modal: true,

    grid: null,

    keepConfiguration: false,

    initComponent: function () {
        this.columnConfiguratorPanel = Ext.create("PartKeepr.Components.Widgets.ColumnConfigurator.Panel", {
            grid: this.grid
        });
        this.items = this.columnConfiguratorPanel;
        this.callParent(arguments);

        this.down("#apply").on("click", this.apply, this);
        this.down("#cancel").on("click", this.doClose, this);
    },
    apply: function () {
        this.keepConfiguration = true;
        this.close();
    },
    doClose: function (keepConfig) {
        if (!this.keepConfiguration)
        {
            this.grid.reconfigure(this.grid.getStore(), this.columnConfiguratorPanel.originalColumnConfigurations);
        }
        this.callParent(arguments);
    },
    applyColumnConfigurationFromGrid: function () {
        this.columnConfiguratorPanel.applyColumnConfigurationFromGrid(this.grid);
    }
});
