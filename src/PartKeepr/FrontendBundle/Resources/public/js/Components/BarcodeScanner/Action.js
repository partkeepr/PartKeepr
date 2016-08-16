/**
 * A barcode scanner action is an action which is executed when a barcode was scanned.
 *
 * The barcode manager decides which action(s) will be called based upon the configuration done in the system
 * preferences.
 */
Ext.define("PartKeepr.BarcodeScanner.Action", {
    statics: {
        /**
         * @var {String} The name of the action
         */
        actionName: "",

        /**
         * @var {String} The description of the action
         */
        actionDescription: ""
    },

    /**
     * @var {String} Contains the data returned by the barcode manager
     */
    data: "",

    /**
     * @var {String} Contains the configuration
     */
    config: {},


    constructor: function (config, data)
    {
        this.config = config;
        this.data = data;
    },

    /**
     * Executes an action
     */
    execute: function ()
    {
        console.error("The execute function of any PartKeepr.BarcodeScanner.Action subclass must be overridden!");
    }
});
