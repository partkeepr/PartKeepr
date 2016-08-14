Ext.define('PartKeepr.util.Filter', {
    extend: 'Ext.util.Filter',

    config: {
        /**
         * @cfg {String} [property=null]
         * The property to filter on. Required unless a {@link #filterFn} is passed.
         */
        subfilters: [],
    },
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
        var warn = PartKeepr.util.Filter.isInvalid(config);
        if (warn) {
            Ext.log.warn(warn);
        }
        //</debug>
        this.initConfig(config);
    },
    getFilterDescription: function () {
        var config = this.getInitialConfig(),
            i, subfilterData = [];

        if (config.property !== null && config.value !== null && config.operator !== null) {
            subfilterData.push(config.property + " " + config.operator + " " + config.value);
        }

        if (config.subfilters instanceof Array && config.subfilters.length > 0) {
            for (i=0;i<config.subfilters.length;i++) {
                subfilterData.push("(" + config.subfilters[i].getFilterDescription()+ ")");
            }
        }

        if (config.type && config.type.toLowerCase() == "or") {
            return subfilterData.join(" OR ");
        } else {
            return subfilterData.join(" AND ");
        }
    },

    preventConvert: {
        'in': 1,
        'notin': 1
    },
    /**
     * Returns this filter's state.
     * @return {Object}
     */
    getState: function () {
        var config = this.getInitialConfig(),
            result = {},
            name;

        for (name in config) {
            // We only want the instance properties in this case, not inherited ones,
            // so we need hasOwnProperty to filter out our class values.

            if (name === "subfilters") {
                if (config[name] instanceof Array) {
                    var tempConfigs = new Array();

                    for (var i=0;i<config[name].length;i++) {
                        tempConfigs.push(config[name][i].getState());
                    }

                    result[name] = tempConfigs;
                }
            } else if (config.hasOwnProperty(name)) {
                    result[name] = config[name];

            }
        }

        delete result.root;

        if (config["subfilters"] instanceof Array) {
            // Do nothing for now
        } else {
            result.value = this.getValue();
        }
        return result;
    },
    inheritableStatics: {
        /**
         * Checks whether the filter will produce a meaningful value. Since filters
         * may be used in conjunction with data binding, this is a sanity check to
         * check whether the resulting filter will be able to match.
         *
         * @param {Object} cfg The filter config object
         * @return {Boolean} `true` if the filter will produce a valid value
         *
         * @private
         */
        isInvalid: function(cfg) {
            return false;
            if (!cfg.filterFn) {
                // If we don't have a filterFn, we must have a property
                if (!cfg.property) {
                    return 'A Filter requires either a property or a filterFn to be set';
                }

                if (!cfg.hasOwnProperty('value') && !cfg.operator) {
                    return 'A Filter requires either a property and value, or a filterFn to be set';
                }

            }
            return false;
        }
    }
});
