Ext.define("PartKeepr.Util.FilterPlugin", {
    extend: "Ext.AbstractPlugin",

    ptype: 'filter',

    mixins: [
        'Ext.mixin.Observable'
    ],

    filter: null,
    enabled: false,

    constructor: function (config)
    {
        this.mixins.observable.constructor.call(this, config);
        this.callParent([config]);
    },
    init: function (ownerComponent)
    {
        this.ownerComponent = ownerComponent;

        ownerComponent.disableFilter = Ext.bind(this.disable, this);
        ownerComponent.enableFilter = Ext.bind(this.enable, this);
    },
    getFilter: function ()
    {
        var filter = this.getFilterFn.call(this.scope);

        if (this.filter === null) {
            this.filter = Ext.create("PartKeepr.util.Filter", filter);
        } else {
            this.filter.setConfig(filter);
        }

        return this.filter;
    },
    isEnabled: function ()
    {
        return this.enabled;
    },
    enable: function ()
    {
        this.fireEvent("enable");
        this.enabled = true;
    },
    disable: function ()
    {
        this.fireEvent("disable");
        this.enabled = false;
    }
});
