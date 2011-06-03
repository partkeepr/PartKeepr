/**
 * @author Ed Spencer
 * @class Ext.data.proxy.Memory
 * @extends Ext.data.proxy.Client
 *
 * <p>In-memory proxy. This proxy simply uses a local variable for data storage/retrieval, so its contents are lost on
 * every page refresh.</p>
 *
 * <p>Usually this Proxy isn't used directly, serving instead as a helper to a {@link Ext.data.Store Store} where a
 * reader is required to load data. For example, say we have a Store for a User model and have some inline data we want
 * to load, but this data isn't in quite the right format: we can use a MemoryProxy with a JsonReader to read it into
 * our Store:</p>
 *
<pre><code>
//this is the model we will be using in the store
Ext.define('User', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id',    type: 'int'},
        {name: 'name',  type: 'string'},
        {name: 'phone', type: 'string', mapping: 'phoneNumber'}
    ]
});

//this data does not line up to our model fields - the phone field is called phoneNumber
var data = {
    users: [
        {
            id: 1,
            name: 'Ed Spencer',
            phoneNumber: '555 1234'
        },
        {
            id: 2,
            name: 'Abe Elias',
            phoneNumber: '666 1234'
        }
    ]
};

//note how we set the 'root' in the reader to match the data structure above
var store = new Ext.data.Store({
    autoLoad: true,
    model: 'User',
    data : data,
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'users'
        }
    }
});
</code></pre>
 */
Ext.define('Ext.data.proxy.Memory', {
    extend: 'Ext.data.proxy.Client',
    alias: 'proxy.memory',
    alternateClassName: 'Ext.data.MemoryProxy',

    /**
     * @cfg {Array} data Optional array of Records to load into the Proxy
     */

    constructor: function(config) {
        this.callParent([config]);

        //ensures that the reader has been instantiated properly
        this.setReader(this.reader);
    },

    /**
     * Reads data from the configured {@link #data} object. Uses the Proxy's {@link #reader}, if present
     * @param {Ext.data.Operation} operation The read Operation
     * @param {Function} callback The callback to call when reading has completed
     * @param {Object} scope The scope to call the callback function in
     */
    read: function(operation, callback, scope) {
        var me     = this,
            reader = me.getReader(),
            result = reader.read(me.data);

        Ext.apply(operation, {
            resultSet: result
        });

        operation.setCompleted();
        operation.setSuccessful();
        Ext.callback(callback, scope || me, [operation]);
    },

    clear: Ext.emptyFn
});
