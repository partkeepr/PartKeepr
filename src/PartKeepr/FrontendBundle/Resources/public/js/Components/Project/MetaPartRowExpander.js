Ext.define("PartKeepr.Components.ProjectReport.MetaPartRowExpander", {
    extend: "Ext.grid.plugin.RowWidget",

    ptype: 'metapartrowexpander',

    getHeaderConfig: function() {
        var config = this.callParent(arguments);

        config.renderer = function (v,p,rec) {
            if (rec.get("metaPart")) {
                return '<div class="' + Ext.baseCSSPrefix + 'grid-row-expander" role="presentation" tabIndex="0"></div>';
            } else {
                return '';
            }
        };

        return config;
    }
});