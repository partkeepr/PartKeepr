Ext.define("PartKeepr.data.HydraModel", {
    extend: 'Ext.data.Model',

    mixins: ['PartKeepr.data.CallActions'],

    getData: function ()
    {
        var data = this.callParent(arguments);

        if (this.phantom) {
            delete data[this.idProperty];
        }

        return data;
    },
    isPartiallyEqualTo: function (model, fields)
    {
        var i;

        for (i = 0; i < fields.length; i++) {
            if (this.get(fields[i]) != model.get(fields[i])) {
                return false;
            }
        }

        return true;
    },
    get: function (fieldName)
    {
        var ret, role, item, openingBracket, closingBracket, subEntity, index, subEntityStore;

        ret = this.callParent(arguments);

        if (ret === undefined) {
            // The field is undefined, attempt to retrieve data via associations

            if (typeof(fieldName) !== "string") {
                return undefined;
            }

            var parts = fieldName.split(".");

            if (parts.length < 2) {
                return ret;
            }

            if (this.associations[parts[0]] && this.getFieldType(parts[0]).type === "onetomany") {
                role = this.associations[parts[0]];
                item = role.getAssociatedItem(this);

                if (item !== null) {
                    parts.shift();
                    return item.get(parts.join("."));
                }
            } else {
                openingBracket = parts[0].indexOf("[");

                if (openingBracket !== -1) {
                    subEntity = parts[0].substring(0, openingBracket);
                    closingBracket = parts[0].indexOf("]", openingBracket);
                    index = parts[0].substring(openingBracket+1, closingBracket);
                }
                else {
                    // No index was passed for retrieving this field, try to return the first array member
                    subEntity = parts[0];
                    index = 0;    
                }

                subEntityStore = this[this.associations[subEntity].role]();
                item = subEntityStore.getAt(index);

                if (item !== null) {
                    parts.shift();
                    return item.get(parts.join("."));
                }
            }
        }
        return ret;
    },
    /**
     * Returns the field type for a given field path as an object with the following properties:
     *
     * {
     *  type: "field", "onetomany" or "manytoone"
     *  reference: Only set if the type is "onetomany" or "manytoone" - holds the class name for the relation
     * }
     */
    getFieldType: function (fieldName)
    {
        var ret = null, role, tmp, i;

        for (i=0;i<this.fields.length;i++) {
            if (this.fields[i].getName() === fieldName) {
                if (this.fields[i].reference !== null) {
                    return {
                        type: "onetomany",
                        reference: this.fields[i].reference
                    };
                } else {
                    ret = {
                        type: "field"
                    };
                }
            }
        }

        if (this.associations[fieldName]) {
            return {
                type: "manytoone",
                reference: this.associations[fieldName].type
            };
        }

        if (ret === null) {
            // The field is undefined, attempt to retrieve data via associations
            var parts = fieldName.split(".");

            if (parts.length < 2) {
                return null;
            }

            for (i=0;i<this.fields.length;i++) {
                if (this.fields[i].getName() === parts[0]) {
                    parts.shift();
                    tmp = Ext.create(this.fields[i].reference.type);
                    return tmp.getFieldType(parts.join("."));
                }
            }

            if (this.associations[parts[0]]) {
                role = this.associations[parts[0]];
                tmp = Ext.create(role.type);
                parts.shift();
                return tmp.getFieldType(parts.join("."));
            }
        }
        return ret;
    },
    /**
     * Gets all of the data from this Models *loaded* associations. It does this
     * recursively. For example if we have a User which hasMany Orders, and each Order
     * hasMany OrderItems, it will return an object like this:
     *
     *     {
     *         orders: [
     *             {
     *                 id: 123,
     *                 status: 'shipped',
     *                 orderItems: [
     *                     ...
     *                 ]
     *             }
     *         ]
     *     }
     *
     * @param {Object} [result] The object on to which the associations will be added. If
     * no object is passed one is created. This object is then returned.
     * @param {Boolean/Object} [options] An object containing options describing the data
     * desired.
     * @param {Boolean} [options.associated=true] Pass `true` to include associated data from
     * other associated records.
     * @param {Boolean} [options.changes=false] Pass `true` to only include fields that
     * have been modified. Note that field modifications are only tracked for fields that
     * are not declared with `persist` set to `false`. In other words, only persistent
     * fields have changes tracked so passing `true` for this means `options.persist` is
     * redundant.
     * @param {Boolean} [options.critical] Pass `true` to include fields set as `critical`.
     * This is only meaningful when `options.changes` is `true` since critical fields may
     * not have been modified.
     * @param {Boolean} [options.persist] Pass `true` to only return persistent fields.
     * This is implied when `options.changes` is set to `true`.
     * @param {Boolean} [options.serialize=false] Pass `true` to invoke the `serialize`
     * method on the returned fields.
     * @return {Object} The nested data set for the Model's loaded associations.
     */
    getAssociatedData: function (result, options)
    {
        var me = this,
            associations = me.associations,
            deep, i, item, items, itemData, length,
            record, role, roleName, opts, clear, associated;

        result = result || {};

        me.$gathering = 1;

        if (options) {
            options = Ext.Object.chain(options);
        }

        for (roleName in associations) {
            role = associations[roleName];

            item = role.getAssociatedItem(me);
            if (!item || item.$gathering) {
                continue;
            }

            if (item.isStore) {
                item.$gathering = 1;

                items = item.getData().items; // get the records for the store
                length = items.length;
                itemData = [];

                for (i = 0; i < length; ++i) {
                    // NOTE - we don't check whether the record is gathering here because
                    // we cannot remove it from the store (it would invalidate the index
                    // values and misrepresent the content). Instead we tell getData to
                    // only get the fields vs descend further.
                    record = items[i];
                    deep = !record.$gathering;
                    record.$gathering = 1;
                    if (options) {
                        associated = options.associated;
                        if (associated === undefined) {
                            options.associated = deep;
                            clear = true;
                        } else {
                            if (!deep) {
                                options.associated = false;
                                clear = true;
                            }
                        }
                        opts = options;
                    } else {
                        opts = deep ? me._getAssociatedOptions : me._getNotAssociatedOptions;
                    }
                    itemData.push(record.getData(opts));
                    if (clear) {
                        options.associated = associated;
                        clear = false;
                    }
                    delete record.$gathering;
                }

                delete item.$gathering;
            } else {
                opts = options || me._getAssociatedOptions;
                if (options && options.associated === undefined) {
                    opts.associated = true;
                }

                if (this.getField(roleName) !== null && this.getField(roleName).byReference) {
                    itemData = item.getId();
                } else {
                    itemData = item.getData(opts);
                }
            }

            result[roleName] = itemData;
        }

        delete me.$gathering;

        return result;
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

                    for (var i = 0; i < data[roleName].length; i++) {
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
