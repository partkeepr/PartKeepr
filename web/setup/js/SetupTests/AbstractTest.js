/**
 * Represents a test.
 *
 * Calls a specific PHP file on the server via AJAX and interprets the response.
 */
Ext.define('PartKeeprSetup.AbstractTest', {
    mixins: {
        observable: 'Ext.util.Observable'
    },

    /**
     * Defines the URL to call
     */
    url: '../setup.php/setup/',

    action: '',

    /**
     * Defines if the call was successful or not.
     */
    success: false,

    /**
     * Defines the callback. This needs to be an object which implements the "appendTestResult" method.
     */
    callback: null,

    /**
     * Defines the name of this test.
     */
    name: null,

    resultMessage: "",

    message: "",
    errors: [],
    warnings: [],

    method: 'POST',

    /**
     * Defines if a test should be skipped. No output will be generated.
     * @var {Boolean}
     */
    skip: false,

    /**
     * Defines additional parameters which are to be sent with the request. The format is an object,
     * e.g.
     * {
	 *    username: "foo",
	 *    password: "bar"
	 * }
     *
     *
     */
    params: {},

    /**
     * Constructs the test
     */
    constructor: function (config)
    {
        this.mixins.observable.constructor.call(this, config);
    },
    /**
     * Runs a given test, and processes the response
     */
    run: function ()
    {
        this.onBeforeRunTest();

        this.callback.outputTestMessage(this);

        if (this.skip === true) {
            this.fireEvent("complete", this);
            this.success = true;
            this.resultMessage = "Skipped";
            this.callback.appendTestResult(this);
            return;
        }
        var url = this.url;

        if (this.action !== "") {
            url = url + this.action;
        }


        Ext.Ajax.request({
            url: url,
            success: this.onSuccess,
            failure: this.onFailure,
            method: this.method,
            scope: this,
            params: Ext.encode(this.params),
            timeout: 120000
        });
    },

    onFailure: function (response)
    {
        this.success = false;
        this.resultMessage = "Invalid Response from server";
        this.errors = ["Invalid Response from server", response.responseText];

        if (this.callback) {
            this.callback.appendTestResult(this);
        }

        if (this.success) {
            this.fireEvent("complete", this);
        }

    },
    /**
     * Callback for the Ext.Ajax.request method. Decodes the response, sets the object parameters, fires the "complete"
     * event and calls back the test result panel.
     *
     * @param response
     */
    onSuccess: function (response)
    {
        var obj;

        try {
            obj = Ext.decode(response.responseText);
        } catch (exception) {
            obj = {};
            obj.success = false;
            obj.message = "Invalid Response from server";
            obj.errors = ["Invalid Response from server", response.responseText];
        }

        if (!obj.success || obj.success === false) {
            if (Ext.isArray(obj.errors)) {
                this.errors = obj.errors;
            } else {
                this.errors = [];
            }

            this.success = false;
        } else {
            this.success = true;
        }

        if (obj.warnings !== undefined && Ext.isArray(obj.warnings)) {
            this.warnings = obj.warnings;
        }

        this.resultMessage = obj.message;

        if (this.callback) {
            this.callback.appendTestResult(this);
        }

        if (this.success) {
            this.fireEvent("complete", this);
        }

        this.onAfterRunTest(obj);
    },
    /**
     * Gets called prior test execution. Most tests won't use this, but some tests need to inject parameters.
     */
    onBeforeRunTest: function ()
    {
        this.params = PartKeeprSetup.getApplication().getSetupConfig();
    },
    /**
     * Gets called after test exeuction. Useful for post-processing any result
     *
     * @param data {Object} The response data as object
     */
    onAfterRunTest: function (data)
    {

    }

});
