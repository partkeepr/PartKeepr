Ext.define("PartKeepr.data.RestProxy", {
    extend: 'Ext.data.proxy.Rest',
    alias: 'proxy.PartKeeprREST',

    reader: {
        type: 'json',
        rootProperty: 'data',
        totalProperty: '_totalCount'
    },
    writer: {
        type: 'jsonwithassociations'
    },
    appendId: true,

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
});