Ext.define("PartKeepr.data.RestProxy", {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.PartKeeprREST',

    reader: {
        type: 'hydra',
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
        exception: function (proxy, response, operation) {
            try {
                var data = Ext.decode(response.responseText);

                var requestData = {};
                requestData.method = operation.request.method;
                requestData.headers = operation.request.headers;
                requestData.jsonData = operation.request.jsonData;

                request = {
                    request: Ext.encode(requestData),
                    response: response.responseText
                };

                PartKeepr.ExceptionWindow.showException(data.exception, request);
            } catch (ex) {
                var exception = {
                    message: i18n("Critical Error"),
                    detail: i18n("The server returned a response which we were not able to interpret.")
                };


                requestData.method = operation.request.method;
                requestData.headers = operation.request.headers;
                requestData.jsonData = operation.request.jsonData;

                request = {
                    request: Ext.encode(requestData),
                    response: response.responseText
                };

                PartKeepr.ExceptionWindow.showException(exception, request);
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
            if (request.getRecords().length > 1) {
                throw "The amount of records updating must be exactly one";
            }
            this.api.update = request.getRecords()[0].getId();
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
    }
});