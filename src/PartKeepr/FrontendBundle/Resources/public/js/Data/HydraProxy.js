Ext.define("PartKeepr.data.HydraProxy", {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.Hydra',

    reader: {
        type: 'hydra'
    },
    writer: {
        type: 'jsonwithassociations'
    },
    appendId: false,
    limitParam: "itemsPerPage",
    defaultListenerScope: true,
    sortParam: "order",

    constructor: function (config)
    {
        config.url = PartKeepr.getBasePath() + config.url;
        this.callParent(arguments);
    },
    listeners: {
        exception: function (reader, response, operation, eOpts)
        {
            this.showException(response);
        }
    },
    buildUrl: function (request)
    {
        var operation = request.getOperation();

        // Set the URI to the ID, as JSON-LD operates on IRIs.
        if (request.getAction() == "read") {
            if (operation.getId()) {
                request.setUrl(operation.getId());
            }
        }

        if (request.getAction() == "update") {
            if (request.getRecords().length != 1) {
                throw "The amount of records updating must be exactly one";
            }
            this.api.update = request.getRecords()[0].getId();
        }

        if (request.getAction() == "destroy") {
            if (request.getRecords().length != 1) {
                throw "The amount of records updating must be exactly one";
            }
            this.api.destroy = request.getRecords()[0].getId();
        }

        return this.callParent([request]);
    },
    /**
     * Calls a specific action on the record.
     * @todo Document on how we call actions on entities
     *
     *
     */
    callAction: function (record, action, parameters, callback)
    {
        var url = record.getId() + "/" + action;
        var request = Ext.create("Ext.data.Request");

        request.setMethod("PUT");
        request.setUrl(url);
        if (Ext.isObject(parameters)) {
            request.setParams(parameters);
        }

        request.setCallback(function (options, success, response)
        {
            this.processCallActionResponse(options, success, response);

            if (Ext.isFunction(callback)) {
                callback(options, success, response);
            }
        }.bind(this));

        this.sendRequest(request);
    },
    processCallActionResponse: function (options, success, response)
    {
        if (success !== false) {
            return;
        }

        this.showException(response);
    },
    showException: function (response) {
        PartKeepr.ExceptionWindow.showException(response);
    }
});