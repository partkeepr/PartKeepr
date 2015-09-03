/**
 * This is a bugfix when a save operation on a model does not update associations returned by the server.
 *
 * The forum thread can be found at https://www.sencha.com/forum/showthread.php?302635-Ext.data.operation.Operation.doProcess-doesn-t-update-associations&p=1106828
 */
Ext.define("PartKeepr.data.Model", {
    override: 'Ext.data.Model',

    hasField: function (fieldName) {
        var fields = this.getFields();


        for (var i in fields) {
            if (fields[i].name == fieldName && fields[i].reference === null) {
                return true;
            }
        }

        return false;
    },
    /**
     * Saves the model instance using the configured proxy.
     * @param {Object} [options] Options to pass to the proxy. Config object for {@link Ext.data.operation.Operation}.
     * @return {Ext.data.operation.Operation} The operation
     */
    save: function (options) {
        options = Ext.apply({}, options);

        var me = this,
            phantom = me.phantom,
            dropped = me.dropped,
            action = dropped ? 'destroy' : (phantom ? 'create' : 'update'),
            scope = options.scope || me,
            callback = options.callback,
            proxy = me.getProxy(),
            operation;

        options.records = [me];

        options.recordCreator = function (data, type, readOptions) {
            // Important to change this here, because we might be loading associations,
            // so we do not want this to propagate down. If we have a session, use that
            // so that we end up getting the same record. Otherwise, just remove it.
            var session = me.session;
            if (readOptions) {
                readOptions.recordCreator = session ? session.recordCreator : null;
            }
            me.set(data, me._commitOptions);
            //<debug>
            // Do the id check after set since converters may have run
            /*if (doIdCheck && me.getId() !== id) {
             Ext.Error.raise('Invalid record id returned for ' + id + '@' + me.entityName);
             }*/
            //</debug>
            return me;
        };

        options.internalCallback = function (operation) {
            var args = [me, operation],
                success = operation.wasSuccessful();
            if (success) {
                Ext.callback(options.success, scope, args);
            } else {
                Ext.callback(options.failure, scope, args);
            }
            args.push(success);
            Ext.callback(callback, scope, args);
        };
        delete options.callback;

        operation = proxy.createOperation(action, options);

        // Not a phantom, then we must perform this operation on the remote datasource.
        // Record will be removed from the store in the callback upon a success response
        if (dropped && phantom) {
            // If it's a phantom, then call the callback directly with a dummy successful ResultSet
            operation.setResultSet(Ext.data.reader.Reader.prototype.nullResultSet);
            me.setErased();
            operation.setSuccessful(true);
        } else {
            operation.execute();
        }
        return operation;
    }
});

Ext.define('PartKeepr.data.operation.Update', {
    override: 'Ext.data.operation.Update',

    action: 'update',

    isUpdateOperation: true,

    order: 20,
    doProcess: Ext.emptyFn,
    doExecute: function () {
        return this.getProxy().update(this);
    }
});

Ext.define('PartKeepr.data.operation.Create', {
    override: 'Ext.data.operation.Create',

    action: 'create',

    isCreateOperation: true,

    order: 10,
    doProcess: Ext.emptyFn,
    doExecute: function() {
        return this.getProxy().create(this);
    }
});

Ext.define("PartKeepr.data.schema.Role", {
    override: "Ext.data.schema.Role",

    getAssociatedStore: function (inverseRecord, options, scope, records, isComplete) {
        // Consider the Comment entity with a ticketId to a Ticket entity. The Comment
        // is on the left (the FK holder's side) so we are implementing the guts of
        // the comments() method to load the Store of Comment entities. This trek
        // begins from a Ticket (inverseRecord).

        var me = this,
            storeName = me.getStoreName(),
            store = inverseRecord[storeName],
            load = options && options.reload,
            source = inverseRecord.$source,
            session = inverseRecord.session,
            args, i, len, raw, rec, sourceStore;

        if (!store) {
            // We want to check whether we can automatically get the store contents from the parent session.
            // For this to occur, we need to have a parent in the session, and the store needs to be created
            // and loaded with the initial dataset.
            if (!records && source) {
                source = source[storeName];
                if (source && !source.isLoading()) {
                    sourceStore = source;
                    records = [];
                    raw = source.getData().items;

                    for (i = 0, len = raw.length; i < len; ++i) {
                        rec = raw[i];
                        records.push(session.getRecord(rec.self, rec.id));
                    }
                    isComplete = true;
                }
            }
            store = me.createAssociationStore(session, inverseRecord, records, isComplete);
            store.$source = sourceStore;

            if (!records && (me.autoLoad || options)) {
                load = true;
            }

            inverseRecord[storeName] = store;
        } else {
            if (records) {
                store.loadData(records);
            }
        }

        if (options) {
            // We need to trigger a load or the store is already loading. Defer
            // callbacks until that happens
            if (load || store.isLoading()) {
                store.on('load', function (store, records, success, operation) {
                    args = [store, operation];
                    scope = scope || options.scope || inverseRecord;

                    if (success) {
                        Ext.callback(options.success, scope, args);
                    } else {
                        Ext.callback(options.failure, scope, args);
                    }
                    args.push(success);
                    Ext.callback(options, scope, args);
                    Ext.callback(options.callback, scope, args);
                }, null, {single: true});
            } else {
                // Trigger straight away
                args = [store, null];
                scope = scope || options.scope || inverseRecord;

                Ext.callback(options.success, scope, args);
                args.push(true);
                Ext.callback(options, scope, args);
                Ext.callback(options.callback, scope, args);
            }
        }

        if (load && !store.isLoading()) {
            store.load();
        }

        return store;
    },
});

Ext.define("PartKeepr.data.proxy.Proxy", {
    override: "Ext.data.proxy.Proxy",

    batch: function (options, /* deprecated */listeners) {
        return this.callParent(arguments);
    }
});