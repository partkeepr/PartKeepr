Ext.define("PartKeepr.data.CallActions", {
    /**
     * Calls an action relative to the entity.
     *
     * For example, if the entity has a method called "setDefault" and your ID is
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1", callAction would call
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1/setDefault" as a result.
     *
     * @param {String} action The action name
     * @param {Object} parameters (optional) The parameters as JS object
     * @param {Function} callback (optional) A callback function, or null if not required
     * @param {boolean} reload (optional) Triggers a reload of the model after executing the action
     */
    callPutAction: function (action, parameters, callback, reload)
    {
        var proxy = this.getProxy();

        proxy.callAction(this, action, "PUT", parameters, callback, reload);
    },
    /**
     * Calls an action relative to the entity.
     *
     * For example, if the entity has a method called "setDefault" and your ID is
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1", callAction would call
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1/setDefault" as a result.
     *
     * @param {String} action The action name
     * @param {Object} parameters (optional) The parameters as JS object
     * @param {Function} callback (optional) A callback function, or null if not required
     * @param {boolean} reload (optional) Triggers a reload of the model after executing the action
     */
    callGetAction: function (action, parameters, callback, reload)
    {
        var proxy = this.getProxy();

        proxy.callAction(this, action, "GET", parameters, callback, reload);
    },
    /**
     * Calls an action relative to the entity.
     *
     * For example, if the entity has a method called "setDefault" and your ID is
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1", callAction would call
     * "/PartKeepr/web/app_dev.php/api/part_measurement_units/1/setDefault" as a result.
     *
     * @param {String} action The action name
     * @param {Object} parameters (optional) The parameters as JS object
     * @param {Function} callback (optional) A callback function, or null if not required
     * @param {boolean} reload (optional) Triggers a reload of the model after executing the action
     */
    callDeleteAction: function (action, parameters, callback, reload)
    {
        var proxy = this.getProxy();

        proxy.callAction(this, action, "DELETE", parameters, callback, reload);
    },
    getData: function (options)
    {
        var data = this.callParent(options);

        if (this.phantom) {
            delete data[this.idProperty];
        }

        return data;
    },
    /**
     * Returns data from all associations
     *
     * @return {Object} An object containing the associations as properties
     */
    getAssociationData: function ()
    {
        var roleName, values = [], role, item, store;

        for (roleName in this.associations) {
            role = this.associations[roleName];
            item = role.getAssociatedItem(this);
            if (!item || item.$gathering) {
                continue;
            }

            var getterName = this.associations[roleName].getterName;

            if (item.isStore) {
                store = this[getterName]();
                values[roleName] = store.getData().items;
            } else {
                values[roleName] = this[getterName]();
            }
        }

        return values;
    },
    /**
     * Sets data to all associations
     *
     * @param {Object} data The associations to set. Silently ignores non-existant associations.
     */
    setAssociationData: function (data)
    {
        var setterName, getterName, roleName, store;

        for (roleName in data) {
            if (this.associations[roleName]) {

                if (this.associations[roleName].isMany === true) {
                    getterName = this.associations[roleName].getterName;
                    store = this[getterName]();
                    store.add(data[roleName]);
                } else {
                    setterName = this.associations[roleName].setterName;
                    this[setterName](data[roleName]);
                }
            }
        }
    },
    inheritableStatics: {
        callPostCollectionAction: function (action, parameters, callback, ignoreException)
        {
            var proxy = this.getProxy();

            proxy.callCollectionAction(action, "POST", parameters, callback, ignoreException);
        },
        callGetCollectionAction: function (action, parameters, callback, ignoreException)
        {
            var proxy = this.getProxy();

            proxy.callCollectionAction(action, "GET", parameters, callback, ignoreException);
        }
    }
});
