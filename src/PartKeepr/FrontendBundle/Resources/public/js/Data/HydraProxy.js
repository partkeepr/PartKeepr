Ext.define("PartKeepr.data.HydraProxy", {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.Hydra',

    reader: {
        type: 'hydra'
    },
    writer: {
        type: 'jsonwithassociations',
        writeAllFields: true
    },
    appendId: false,
    limitParam: "itemsPerPage",
    defaultListenerScope: true,
    sortParam: "order",
    headers: {},

    /**
     * An ID which should be ignored when loading items. Usually we use the item ID as URL as per JSON-LD spec,
     * but sometimes you might require loading an item from the url parameter instead.
     *
     * This is mainly a workaround for ExtJS trees because we need a virtual root node for which the ID cannot be
     * changed.
     */
    ignoreLoadId: null,

    /**
     * If true, ignores IDs when updating/deletes entries. This is mostly used for entities where no primary key exists.
     */
    ignoreIds: false,

    constructor: function (config)
    {
        config.url = PartKeepr.getBasePath() + config.url;
        this.callParent(arguments);
    },
    listeners: {
        exception: function (reader, response)
        {
            this.showException(response);
        }
    },
    getHeaders: function ()
    {
        var headers = this.callParent(arguments);

        var provider = PartKeepr.Auth.AuthenticationProvider.getAuthenticationProvider();

        Ext.apply(headers, provider.getHeaders());

        return headers;
    },
    buildUrl: function (request)
    {
        var operation = request.getOperation();

        // Set the URI to the ID, as JSON-LD operates on IRIs.
        if (request.getAction() == "read") {
            if (operation.getId()) {
                if (operation.getId() !== this.ignoreLoadId) {
                    request.setUrl(operation.getId());
                }
            }
        }

        if (request.getAction() == "update") {
            if (request.getRecords().length != 1) {
                throw "The amount of records updating must be exactly one";
            }

            if (!this.ignoreIds) {
                this.api.update = request.getRecords()[0].getId();
            }
        }

        if (request.getAction() == "destroy") {
            if (request.getRecords().length != 1) {
                throw "The amount of records updating must be exactly one";
            }

            if (!this.ignoreIds) {
                this.api.destroy = request.getRecords()[0].getId();
            }
        }

        return this.callParent([request]);
    },
    /**
     * Calls a specific action on the record.
     * @todo Document on how we call actions on entities
     *
     *
     */
    callAction: function (record, action, method, parameters, callback, reload)
    {
        var url;

        if (action !== null) {
            url = record.getId() + "/" + action;
        } else {
            url = record.getId();
        }
        var request = Ext.create("Ext.data.Request");

        request.setMethod(method);
        request.setUrl(url);
        if (Ext.isObject(parameters)) {
            request.setParams(parameters);
        }

        request.setHeaders(this.getHeaders());

        request.setCallback(function (options, success, response)
        {
            this.processCallActionResponse(options, success, response);

            if (reload) {
                record.load();
            }

            if (Ext.isFunction(callback)) {
                callback(options, success, response);
            }
        }.bind(this));

        this.sendRequest(request);
    },
    /**
     * Encodes the array of {@link Ext.util.Filter} objects into a string to be sent in the request url. By default,
     * this simply JSON-encodes the filter data.
     *
     * Additionally converts any model instances to the ID representation in order to save bytes during a request.
     *
     * @param {Ext.util.Filter[]} filters The array of {@link Ext.util.Filter Filter} objects
     * @return {String} The encoded filters
     */
    encodeFilters: function (filters)
    {
        var out = [],
            length = filters.length,
            i, filter, j;

        for (i = 0; i < length; i++) {
            filter = filters[i].serialize();

            if (Object.prototype.toString.call(filter.value) === '[object Array]') {
                for (j = 0; j < filter.value.length; j++) {
                    if (filter.value[j].isModel && filter.value[j].isModel === true) {
                        filter.value[j] = filter.value[j].getId();
                    }
                }
            } else {
                if (typeof filter.value === "object" && filter.value !== null) {
                    if (filter.value.isModel && filter.value.isModel === true) {
                        filter.value = filter.value.getId();
                    }
                }
            }
            out[i] = filter;
        }

        return this.applyEncoding(out);
    },
    /**
     * Calls a specific action on the collection
     * @todo Document on how we call actions on entities
     *
     *
     */
    callCollectionAction: function (action, method, parameters, callback, ignoreException)
    {
        var url;

        if (action !== null) {
            url = this.url + "/" + action;
        } else {
            url = this.url;
        }

        var request = Ext.create("Ext.data.Request");

        request.setMethod(method);
        request.setUrl(url);
        if (Ext.isObject(parameters)) {
            request.setParams(parameters);
        }

        request.setHeaders(this.getHeaders());

        request.setCallback(function (options, success, response)
        {
            this.processCallActionResponse(options, success, response, ignoreException);

            if (Ext.isFunction(callback)) {
                callback(options, success, response);
            }
        }.bind(this));

        this.sendRequest(request);
    },
    processCallActionResponse: function (options, success, response, ignoreException)
    {
        if (success === true) {
            return;
        }

        if (!ignoreException) {
            this.showException(response);
        }
    },
    showException: function (response)
    {
        PartKeepr.ExceptionWindow.showException(response);
    }
});
