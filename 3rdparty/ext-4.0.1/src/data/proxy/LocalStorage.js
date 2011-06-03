/**
 * @author Ed Spencer
 * @class Ext.data.proxy.LocalStorage
 * @extends Ext.data.proxy.WebStorage
 * 
 * <p>The LocalStorageProxy uses the new HTML5 localStorage API to save {@link Ext.data.Model Model} data locally on
 * the client browser. HTML5 localStorage is a key-value store (e.g. cannot save complex objects like JSON), so
 * LocalStorageProxy automatically serializes and deserializes data when saving and retrieving it.</p>
 * 
 * <p>localStorage is extremely useful for saving user-specific information without needing to build server-side 
 * infrastructure to support it. Let's imagine we're writing a Twitter search application and want to save the user's
 * searches locally so they can easily perform a saved search again later. We'd start by creating a Search model:</p>
 * 
<pre><code>
Ext.define('Search', {
    fields: ['id', 'query'],
    extend: 'Ext.data.Model',
    proxy: {
        type: 'localstorage',
        id  : 'twitter-Searches'
    }
});
</code></pre>
 * 
 * <p>Our Search model contains just two fields - id and query - plus a Proxy definition. The only configuration we
 * need to pass to the LocalStorage proxy is an {@link #id}. This is important as it separates the Model data in this
 * Proxy from all others. The localStorage API puts all data into a single shared namespace, so by setting an id we
 * enable LocalStorageProxy to manage the saved Search data.</p>
 * 
 * <p>Saving our data into localStorage is easy and would usually be done with a {@link Ext.data.Store Store}:</p>
 * 
<pre><code>
//our Store automatically picks up the LocalStorageProxy defined on the Search model
var store = new Ext.data.Store({
    model: "Search"
});

//loads any existing Search data from localStorage
store.load();

//now add some Searches
store.add({query: 'Sencha Touch'});
store.add({query: 'Ext JS'});

//finally, save our Search data to localStorage
store.sync();
</code></pre>
 * 
 * <p>The LocalStorageProxy automatically gives our new Searches an id when we call store.sync(). It encodes the Model
 * data and places it into localStorage. We can also save directly to localStorage, bypassing the Store altogether:</p>
 * 
<pre><code>
var search = Ext.ModelManager.create({query: 'Sencha Animator'}, 'Search');

//uses the configured LocalStorageProxy to save the new Search to localStorage
search.save();
</code></pre>
 * 
 * <p><u>Limitations</u></p>
 * 
 * <p>If this proxy is used in a browser where local storage is not supported, the constructor will throw an error.
 * A local storage proxy requires a unique ID which is used as a key in which all record data are stored in the
 * local storage object.</p>
 * 
 * <p>It's important to supply this unique ID as it cannot be reliably determined otherwise. If no id is provided
 * but the attached store has a storeId, the storeId will be used. If neither option is presented the proxy will
 * throw an error.</p>
 */
Ext.define('Ext.data.proxy.LocalStorage', {
    extend: 'Ext.data.proxy.WebStorage',
    alias: 'proxy.localstorage',
    alternateClassName: 'Ext.data.LocalStorageProxy',
    
    //inherit docs
    getStorageObject: function() {
        return window.localStorage;
    }
});