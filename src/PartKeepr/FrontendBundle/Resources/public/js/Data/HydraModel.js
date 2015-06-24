Ext.define("PartKeepr.data.HydraModel", {
    extend: 'Ext.data.Model',

    /**
     * Calls an action relative to the entity.
     *
     * For example, if the entity has a method called "setDefault" and your ID is
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1", callAction would call
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1/setDefault" as a result.
     *
     * @param {String} action The action name
     * @param {Object} parameters (optional) The parameters as JS object
     * @param {Function} callback (optional) A callback function
     */
    callAction: function (action, parameters, callback) {
        var proxy = this.getProxy();

        proxy.callAction(this, action, parameters, callback);
    }
});