Ext.define("PartKeepr.data.HydraModel", {
    extend: 'Ext.data.Model',

    mixins: ['PartKeepr.data.CallActions'],

    getData: function (options)
    {
        var data = this.callParent(arguments);

        if (this.phantom) {
            delete data[this.idProperty];
        }

        return data;
    },
    get: function (fieldName) {
        var ret, role, item;

        ret = this.callParent(arguments);

        if (ret === undefined) {
            // The field is undefined, attempt to retrieve data via associations
            var parts = fieldName.split(".");

            if (parts.length < 2)  {
                return ret;
            }

            if (this.associations[parts[0]]) {
                role = this.associations[parts[0]];
                item = role.getAssociatedItem(this);

                if (item !== null) {
                    parts.shift();
                    return item.get(parts.join("."));
                }
            }
        }
        return ret;
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
        var setterName, getterName, roleName, store, idProperty;

        for (roleName in data) {
            if (this.associations[roleName]) {

                if (this.associations[roleName].isMany === true) {
                    getterName = this.associations[roleName].getterName;
                    store = this[getterName]();

                    for (var i=0;i<data[roleName].length;i++) {
                        // Delete existing IDs for duplicated data
                        if (data[roleName][i].isEntity) {
                            idProperty = data[roleName][i].idProperty;
                            delete data[roleName][i].data[idProperty];
                        }
                    }
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
