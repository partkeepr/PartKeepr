/**
 * Represents a hydra exception.
 *
 * @class
 */
Ext.define('PartKeepr.data.HydraException', {
   config: {
       /**
        * @cfg {String} description
        * The description of the exception
        */
       description: undefined,

       /**
        * @cfg {String} title
        * The title of the exception
        */
       title: undefined,

       /**
         * @cfg {Array} trace
         * The trace of the exception
         */
        trace: []
   },

    /**
     * Creates the HydraException object.
     * @param {Object} [config] Config object.
     */
    constructor: function(config) {
        if (config["hydra:description"]) {
            config.description = config["hydra:description"];
        }

        if (config["hydra:title"]) {
            config.title = config["hydra:title"];
        }

        this.initConfig(config);
    }
});