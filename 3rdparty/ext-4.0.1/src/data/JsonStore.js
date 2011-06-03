/**
 * @author Ed Spencer
 * @class Ext.data.JsonStore
 * @extends Ext.data.Store
 * @ignore
 *
 * <p>Small helper class to make creating {@link Ext.data.Store}s from JSON data easier.
 * A JsonStore will be automatically configured with a {@link Ext.data.reader.Json}.</p>
 *
 * <p>A store configuration would be something like:</p>
 *
<pre><code>
var store = new Ext.data.JsonStore({
    // store configs
    autoDestroy: true,
    storeId: 'myStore'

    proxy: {
        type: 'ajax',
        url: 'get-images.php',
        reader: {
            type: 'json',
            root: 'images',
            idProperty: 'name'
        }
    },

    //alternatively, a {@link Ext.data.Model} name can be given (see {@link Ext.data.Store} for an example)
    fields: ['name', 'url', {name:'size', type: 'float'}, {name:'lastmod', type:'date'}]
});
</code></pre>
 *
 * <p>This store is configured to consume a returned object of the form:<pre><code>
{
    images: [
        {name: 'Image one', url:'/GetImage.php?id=1', size:46.5, lastmod: new Date(2007, 10, 29)},
        {name: 'Image Two', url:'/GetImage.php?id=2', size:43.2, lastmod: new Date(2007, 10, 30)}
    ]
}
</code></pre>
 *
 * <p>An object literal of this form could also be used as the {@link #data} config option.</p>
 *
 * @constructor
 * @param {Object} config
 * @xtype jsonstore
 */
Ext.define('Ext.data.JsonStore',  {
    extend: 'Ext.data.Store',
    alias: 'store.json',

    /**
     * @cfg {Ext.data.DataReader} reader @hide
     */
    constructor: function(config) {
        config = config || {};

        Ext.applyIf(config, {
            proxy: {
                type  : 'ajax',
                reader: 'json',
                writer: 'json'
            }
        });

        this.callParent([config]);
    }
});
