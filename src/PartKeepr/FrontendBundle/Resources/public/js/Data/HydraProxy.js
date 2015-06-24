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
    sortParam: "",

    constructor: function (config) {
        config.url = PartKeepr.getBasePath() + config.url;
        this.callParent(arguments);
    },
    listeners: {
        exception: function (reader, response, operation, eOpts) {
            var request = operation.getRequest();

            var requestParams = {
                method: response.request.options.method,
                request: response.request.options.jsonData,
                response: response.responseText
            };
            try {
                var data = Ext.decode(response.responseText);

                PartKeepr.ExceptionWindow.showException(data.exception, response);
            } catch (ex) {
                var exception = {
                    message: i18n("Critical Error"),
                    detail: i18n("The server returned a response which we were not able to interpret.")
                };

                PartKeepr.ExceptionWindow.showException(exception, response);
            }
        }
    },
    buildUrl: function (request) {
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
    getParams: function (operation) {
        if (!operation.isReadOperation) {
            return {};
        }

        var params = this.callParent(arguments);
        var out = [],
            i,
            sorters = operation.getSorters();

        if (sorters) {
            for (i = 0; i < operation.getSorters().length; i++) {
                params["order[" + sorters[i].getProperty() + "]"] = sorters[i].getDirection();
            }
        }

        return params;
    },
    callAction: function (record, action, parameters, callback) {
        var url = record.getId() + "/" + action;
        var request = Ext.create("Ext.data.Request");

        request.setMethod("PUT");
        request.setUrl(url);
        if (typeof parameters == "object") {
            request.setParams(parameters);
        }

        request.setCallback(callback);

        this.sendRequest(request);
    }
});