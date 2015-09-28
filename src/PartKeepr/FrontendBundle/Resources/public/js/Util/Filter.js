Ext.define('PartKeepr.util.Filter', {
    extend: 'Ext.util.Filter',

    /**
     * Creates new Filter.
     * @param {Object} config Config object
     */
    constructor: function (config)
    {

        //config.filterFns

        this.operatorFns["notin"] = function (candidate)
        {
            var v = this._filterValue;
            return !Ext.Array.contains(v, this.getCandidateValue(candidate, v));
        };
        //<debug>
        var warn = Ext.util.Filter.isInvalid(config);
        if (warn) {
            Ext.log.warn(warn);
        }
        //</debug>
        this.initConfig(config);
    },

    preventConvert: {
        'in': 1,
        'notin': 1
    },
});
