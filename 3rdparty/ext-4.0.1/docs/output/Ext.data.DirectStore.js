Ext.data.JsonP.Ext_data_DirectStore({
  "tagname": "class",
  "name": "Ext.data.DirectStore",
  "doc": "<p>Small helper class to create an <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> configured with an\n<a href=\"#/api/Ext.data.proxy.Direct\" rel=\"Ext.data.proxy.Direct\" class=\"docClass\">Ext.data.proxy.Direct</a> and <a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">Ext.data.reader.Json</a> to make interacting\nwith an <a href=\"#/api/Ext.Direct\" rel=\"Ext.Direct\" class=\"docClass\">Ext.Direct</a> Server-side <a href=\"#/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a> easier.\nTo create a different proxy/reader combination create a basic <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>\nconfigured as needed.</p>\n\n\n\n\n<p><b>*Note:</b> Although they are not listed, this class inherits all of the config options of:</p>\n\n\n<div><ul class=\"mdetail-params\">\n<li><b><a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a></b></li>\n<div class=\"sub-desc\"><ul class=\"mdetail-params\">\n\n</ul></div>\n<li><b><a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a></b></li>\n<div class=\"sub-desc\"><ul class=\"mdetail-params\">\n<li><tt><b><a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a></b></tt></li>\n<li><tt><b><a href=\"#/api/Ext.data.reader.Json-cfg-idProperty\" rel=\"Ext.data.reader.Json-cfg-idProperty\" class=\"docClass\">idProperty</a></b></tt></li>\n<li><tt><b><a href=\"#/api/Ext.data.reader.Json-cfg-totalProperty\" rel=\"Ext.data.reader.Json-cfg-totalProperty\" class=\"docClass\">totalProperty</a></b></tt></li>\n</ul></div>\n\n<li><b><a href=\"#/api/Ext.data.proxy.Direct\" rel=\"Ext.data.proxy.Direct\" class=\"docClass\">DirectProxy</a></b></li>\n<div class=\"sub-desc\"><ul class=\"mdetail-params\">\n<li><tt><b><a href=\"#/api/Ext.data.proxy.Direct-cfg-directFn\" rel=\"Ext.data.proxy.Direct-cfg-directFn\" class=\"docClass\">directFn</a></b></tt></li>\n<li><tt><b><a href=\"#/api/Ext.data.proxy.Direct-cfg-paramOrder\" rel=\"Ext.data.proxy.Direct-cfg-paramOrder\" class=\"docClass\">paramOrder</a></b></tt></li>\n<li><tt><b><a href=\"#/api/Ext.data.proxy.Direct-cfg-paramsAsHash\" rel=\"Ext.data.proxy.Direct-cfg-paramsAsHash\" class=\"docClass\">paramsAsHash</a></b></tt></li>\n</ul></div>\n</ul></div>\n\n",
  "extends": "Ext.data.Store",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "autoLoad",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean/Object",
      "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called after creation. If the value of autoLoad is an Object, this Object will be passed to the store's\nload method. Defaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 56,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
      "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called afte..."
    },
    {
      "tagname": "cfg",
      "name": "autoSync",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records.\nDefaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 63,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync"
    },
    {
      "tagname": "cfg",
      "name": "buffered",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>Allow the store to buffer and pre-fetch pages of records. This is to be used in conjunction with a view will\ntell the store to pre-fetch records ahead of a time.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 305,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-buffered",
      "shortDoc": "Allow the store to buffer and pre-fetch pages of records. This is to be used in conjunction with a view will\ntell the..."
    },
    {
      "tagname": "cfg",
      "name": "clearOnPageLoad",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>True to empty the store when loading another page via <a href=\"#/api/Ext.data.DirectStore-method-loadPage\" rel=\"Ext.data.DirectStore-method-loadPage\" class=\"docClass\">loadPage</a>,\n<a href=\"#/api/Ext.data.DirectStore-method-nextPage\" rel=\"Ext.data.DirectStore-method-nextPage\" class=\"docClass\">nextPage</a> or <a href=\"#/api/Ext.data.DirectStore-method-previousPage\" rel=\"Ext.data.DirectStore-method-previousPage\" class=\"docClass\">previousPage</a> (defaults to true). Setting to false keeps existing records, allowing\nlarge data sets to be loaded one page at a time but rendered all together.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 284,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-clearOnPageLoad",
      "shortDoc": "True to empty the store when loading another page via loadPage,\nnextPage or previousPage (defaults to true). Setting ..."
    },
    {
      "tagname": "cfg",
      "name": "data",
      "member": "Ext.data.Store",
      "type": "Array",
      "doc": "<p>Optional array of Model instances or data objects to load locally. See \"Inline data\" above for details.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 246,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-data"
    },
    {
      "tagname": "cfg",
      "name": "fields",
      "member": "Ext.data.AbstractStore",
      "type": "Array",
      "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.DirectStore-cfg-model\" rel=\"Ext.data.DirectStore-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.DirectStore-cfg-model\" rel=\"Ext.data.DirectStore-cfg-model\" class=\"docClass\">model</a> config.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 126,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
      "shortDoc": "This may be used in place of specifying a model configuration. The fields should be a\nset of Ext.data.Field configura..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "model",
      "member": "Ext.data.Store",
      "type": "String",
      "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> associated with this store</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 250,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-model"
    },
    {
      "tagname": "cfg",
      "name": "pageSize",
      "member": "Ext.data.Store",
      "type": "Number",
      "doc": "<p>The number of records considered to form a 'page'. This is used to power the built-in\npaging using the nextPage and previousPage functions. Defaults to 25.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 270,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-pageSize",
      "shortDoc": "The number of records considered to form a 'page'. This is used to power the built-in\npaging using the nextPage and p..."
    },
    {
      "tagname": "cfg",
      "name": "proxy",
      "member": "Ext.data.Store",
      "type": "String/Ext.data.proxy.Proxy/Object",
      "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.DirectStore-method-setProxy\" rel=\"Ext.data.DirectStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 241,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-proxy",
      "shortDoc": "The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see setProxy for ..."
    },
    {
      "tagname": "cfg",
      "name": "purgePageCount",
      "member": "Ext.data.Store",
      "type": "Number",
      "doc": "<p>The number of pages to keep in the cache before purging additional records. A value of 0 indicates to never purge the prefetched data.\nThis option is only relevant when the <a href=\"#/api/Ext.data.DirectStore-cfg-buffered\" rel=\"Ext.data.DirectStore-cfg-buffered\" class=\"docClass\">buffered</a> option is set to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 312,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-purgePageCount",
      "shortDoc": "The number of pages to keep in the cache before purging additional records. A value of 0 indicates to never purge the..."
    },
    {
      "tagname": "cfg",
      "name": "remoteFilter",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>True to defer any filtering operation to the server. If false, filtering is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 227,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-remoteFilter",
      "shortDoc": "True to defer any filtering operation to the server. If false, filtering is done locally on the client. Defaults to f..."
    },
    {
      "tagname": "cfg",
      "name": "remoteGroup",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>True if the grouping should apply on the server side, false if it is local only (defaults to false).  If the\ngrouping is local, it can be applied immediately to the data.  If it is remote, then it will simply act as a\nhelper, automatically sending the grouping information to the server.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 233,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-remoteGroup",
      "shortDoc": "True if the grouping should apply on the server side, false if it is local only (defaults to false).  If the\ngrouping..."
    },
    {
      "tagname": "cfg",
      "name": "remoteSort",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>True to defer any sorting operation to the server. If false, sorting is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 221,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-remoteSort"
    },
    {
      "tagname": "cfg",
      "name": "sortOnFilter",
      "member": "Ext.data.Store",
      "type": "Boolean",
      "doc": "<p>For local filtering only, causes <a href=\"#/api/Ext.data.DirectStore-method-sort\" rel=\"Ext.data.DirectStore-method-sort\" class=\"docClass\">sort</a> to be called whenever <a href=\"#/api/Ext.data.DirectStore-method-filter\" rel=\"Ext.data.DirectStore-method-filter\" class=\"docClass\">filter</a> is called,\ncausing the sorters to be reapplied after filtering. Defaults to true</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 299,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-cfg-sortOnFilter",
      "shortDoc": "For local filtering only, causes sort to be called whenever filter is called,\ncausing the sorters to be reapplied aft..."
    },
    {
      "tagname": "cfg",
      "name": "storeId",
      "member": "Ext.data.AbstractStore",
      "type": "String",
      "doc": "<p>Optional unique identifier for this store. If present, this Store will be registered with\nthe <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>, making it easy to reuse elsewhere. Defaults to undefined.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 121,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
      "shortDoc": "Optional unique identifier for this store. If present, this Store will be registered with\nthe Ext.data.StoreManager, ..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "DirectStore",
      "member": "Ext.data.DirectStore",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/DirectStore.js",
      "linenr": 1,
      "html_filename": "DirectStore.html",
      "href": "DirectStore.html#Ext-data-DirectStore-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "add",
      "member": "Ext.data.Store",
      "doc": "<p>Adds Model instances to the Store by instantiating them based on a JavaScript object. When adding already-\ninstantiated Models, use <a href=\"#/api/Ext.data.DirectStore-method-insert\" rel=\"Ext.data.DirectStore-method-insert\" class=\"docClass\">insert</a> instead. The instances will be added at the end of the existing collection.\nThis method accepts either a single argument array of Model instances or any number of model instance arguments.\nSample usage:</p>\n\n<pre><code>myStore.add({some: 'data'}, {some: 'other data'});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The data for each model</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The array of newly created model instances</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 797,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-add",
      "shortDoc": "Adds Model instances to the Store by instantiating them based on a JavaScript object. When adding already-\ninstantiat..."
    },
    {
      "tagname": "method",
      "name": "addEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "o",
          "doc": "<p>Either an object with event names as properties with a value of <code>true</code>\nor the first event name string if multiple event names are being passed as separate parameters.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "",
          "doc": "<p>[additional] Optional additional event names if multiple event names are being passed as separate parameters.\nUsage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 452,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addEvents",
      "shortDoc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to listen for. May also be an object who's property names are event names. See</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.\nproperties. This may contain any of the following properties:<ul>\n<li><b>scope</b> : Object<div class=\"sub-desc\">The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></div></li>\n<li><b>delay</b> : Number<div class=\"sub-desc\">The number of milliseconds to delay the invocation of the handler after the event fires.</div></li>\n<li><b>single</b> : Boolean<div class=\"sub-desc\">True to add a handler to handle just the next firing of the event, and then remove itself.</div></li>\n<li><b>buffer</b> : Number<div class=\"sub-desc\">Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed\nby the specified number of milliseconds. If the event fires again within that time, the original\nhandler is <em>not</em> invoked, but the new handler is scheduled in its place.</div></li>\n<li><b>target</b> : Observable<div class=\"sub-desc\">Only call the handler if the event was fired on the target Observable, <i>not</i>\nif the event was bubbled up from a child Observable.</div></li>\n<li><b>element</b> : String<div class=\"sub-desc\"><b>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</b>\nThe name of a Component property which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which\nwill exist only after the Component is rendered. For example, to add a click listener to a Panel's body:\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></p>\n\n\n<p>When added in this way, the options available are the options applicable to <a href=\"#/api/Ext.core.Element-method-addListener\" rel=\"Ext.core.Element-method-addListener\" class=\"docClass\">Ext.core.Element.addListener</a></p>\n\n\n<p></div></li>\n</ul><br></p>\n\n<p>\n<b>Combining Options</b><br>\nUsing the options argument, it is possible to combine different types of listeners:<br>\n<br>\nA delayed, one-time listener.\n<pre><code>myPanel.on('hide', this.handleClick, this, {\nsingle: true,\ndelay: 100\n});</code></pre>\n<p>\n<b>Attaching multiple handlers in 1 call</b><br>\nThe method also allows for a single argument to be passed which is a config object containing properties\nwhich specify multiple events. For example:\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>.\n<p>\n\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 271,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addListener",
      "shortDoc": "<p>Appends an event handler to this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "addManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n",
      "params": [
        {
          "type": "Observable/Element",
          "name": "item",
          "doc": "<p>The item to which to add a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object/String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "opt",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 155,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
      "shortDoc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component\nis destroyed.\n\n"
    },
    {
      "tagname": "method",
      "name": "aggregate",
      "member": "Ext.data.Store",
      "doc": "<p>Runs the aggregate function for all the records in the store.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute. The function is called with a single parameter,\nan array of records for that group.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope to execute the function in. Defaults to the store.</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) Any arguments to append to the function call</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object literal with the group names and their appropriate values.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 2124,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-aggregate",
      "shortDoc": "<p>Runs the aggregate function for all the records in the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "average",
      "member": "Ext.data.Store",
      "doc": "<p>Gets the average value in the store.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "field",
          "doc": "<p>The field in each record</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed/undefined",
        "doc": "<p>The average value, if no items exist, 0.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 2091,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-average",
      "shortDoc": "<p>Gets the average value in the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "capture",
      "member": "Ext.util.Observable",
      "doc": "<p>Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + standard signature of the event\n<b>before</b> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to capture events from.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call when an event is fired.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Observable firing the event.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 55,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-capture",
      "shortDoc": "Starts capture on the specified Observable. All events will be passed\nto the supplied function with the event name + ..."
    },
    {
      "tagname": "method",
      "name": "clearFilter",
      "member": "Ext.data.Store",
      "doc": "<p>Revert to a view of the Record cache with no filtering applied.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>If <tt>true</tt> the filter is cleared silently without firing the\n<a href=\"#/api/Ext.data.DirectStore-event-datachanged\" rel=\"Ext.data.DirectStore-event-datachanged\" class=\"docClass\">datachanged</a> event.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1157,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-clearFilter",
      "shortDoc": "<p>Revert to a view of the Record cache with no filtering applied.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearGrouping",
      "member": "Ext.data.Store",
      "doc": "<p>Clear any groupers in the store</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 531,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-clearGrouping",
      "shortDoc": "<p>Clear any groupers in the store</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 383,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearListeners",
      "shortDoc": "<p>Removes all listeners for this object including the managed listeners</p>\n"
    },
    {
      "tagname": "method",
      "name": "clearManagedListeners",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes all managed listeners for this object.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 412,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
      "shortDoc": "<p>Removes all managed listeners for this object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "collect",
      "member": "Ext.data.Store",
      "doc": "<p>Collects unique values for a particular dataIndex from this store.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "dataIndex",
          "doc": "<p>The property to collect</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "allowNull",
          "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "bypassFilter",
          "doc": "<p>(optional) Pass true to collect from all records, even ones which are filtered</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of the unique values</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1806,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-collect",
      "shortDoc": "<p>Collects unique values for a particular dataIndex from this store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "count",
      "member": "Ext.data.Store",
      "doc": "<p>Gets the count of items in the store.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the count for each group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>the count</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1994,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-count",
      "shortDoc": "<p>Gets the count of items in the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.data.Store",
      "doc": "<p>Calls the specified function for each of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Records</a> in the cache.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call. The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> is passed as the first parameter.\nReturning <tt>false</tt> aborts and exits the iteration.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the current <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> in the iteration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 846,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-each",
      "shortDoc": "<p>Calls the specified function for each of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Records</a> in the cache.</p>\n"
    },
    {
      "tagname": "method",
      "name": "enableBubble",
      "member": "Ext.util.Observable",
      "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default\nimplementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n//  Add functionality to Field&#39;s initComponent to enable the change event to bubble\ninitComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n    this.enableBubble('change');\n}),\n\n//  We know that we want Field&#39;s events to bubble directly to the FormPanel.\ngetBubbleTarget : function() {\n    if (!this.formPanel) {\n        this.formPanel = this.findParentByType('form');\n    }\n    return this.formPanel;\n}\n});\n\nvar myForm = new Ext.formPanel({\ntitle: 'User Details',\nitems: [{\n    ...\n}],\nlisteners: {\n    change: function() {\n        // Title goes red if form has been modified.\n        myForm.header.setStyle('color', 'red');\n    }\n}\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "String/Array",
          "name": "events",
          "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 554,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-enableBubble",
      "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present...."
    },
    {
      "tagname": "method",
      "name": "filter",
      "member": "Ext.data.Store",
      "doc": "<p>Filters the loaded set of records by a given set of filters.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "filters",
          "doc": "<p>The set of filters to apply to the data. These are stored internally on the store,\nbut the filtering itself is done on the Store's <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. See\nMixedCollection's <a href=\"#/api/Ext.util.MixedCollection-method-filter\" rel=\"Ext.util.MixedCollection-method-filter\" class=\"docClass\">filter</a> method for filter syntax. Alternatively,\npass in a property string</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>Optional value to filter by (only if using a property string as the first argument)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1106,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-filter",
      "shortDoc": "<p>Filters the loaded set of records by a given set of filters.</p>\n"
    },
    {
      "tagname": "method",
      "name": "filterBy",
      "member": "Ext.data.Store",
      "doc": "<p>Filter by a function. The specified function will be called for each\nRecord in this Store. If the function returns <tt>true</tt> the Record is included,\notherwise it is filtered out.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1188,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-filterBy",
      "shortDoc": "Filter by a function. The specified function will be called for each\nRecord in this Store. If the function returns tr..."
    },
    {
      "tagname": "method",
      "name": "find",
      "member": "Ext.data.Store",
      "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "fieldName",
          "doc": "<p>The name of the Record field to test.</p>\n",
          "optional": false
        },
        {
          "type": "String/RegExp",
          "name": "value",
          "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The index to start searching at</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "anyMatch",
          "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "caseSensitive",
          "doc": "<p>(optional) True for case sensitive comparison</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "exactMatch",
          "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The matched index or -1</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1722,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-find",
      "shortDoc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findBy",
      "member": "Ext.data.Store",
      "doc": "<p>Find the index of the first matching Record in this Store by a function.\nIf the function returns <tt>true</tt> it is considered a match.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The index to start searching at</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The matched index or -1</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1790,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-findBy",
      "shortDoc": "Find the index of the first matching Record in this Store by a function.\nIf the function returns true it is considere..."
    },
    {
      "tagname": "method",
      "name": "findExact",
      "member": "Ext.data.Store",
      "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "fieldName",
          "doc": "<p>The name of the Record field to test.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to match the field against.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The index to start searching at</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The matched index or -1</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1776,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-findExact",
      "shortDoc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n"
    },
    {
      "tagname": "method",
      "name": "findRecord",
      "member": "Ext.data.Store",
      "doc": "<p>Finds the first matching Record in this store by a specific field value.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "fieldName",
          "doc": "<p>The name of the Record field to test.</p>\n",
          "optional": false
        },
        {
          "type": "String/RegExp",
          "name": "value",
          "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The index to start searching at</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "anyMatch",
          "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "caseSensitive",
          "doc": "<p>(optional) True for case sensitive comparison</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "exactMatch",
          "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The matched record or null</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1738,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-findRecord",
      "shortDoc": "<p>Finds the first matching Record in this store by a specific field value.</p>\n"
    },
    {
      "tagname": "method",
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.data.DirectStore-method-enableBubble\" rel=\"Ext.data.DirectStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to fire.</p>\n",
          "optional": false
        },
        {
          "type": "Object...",
          "name": "args",
          "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 232,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-fireEvent",
      "shortDoc": "Fires the specified event with the passed parameters (minus the event name).\n\n\nAn event may be set to bubble up an Ob..."
    },
    {
      "tagname": "method",
      "name": "first",
      "member": "Ext.data.Store",
      "doc": "<p>Convenience function for getting the first model instance in the store</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the first record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model/undefined",
        "doc": "<p>The first model instance in the store, or undefined</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1920,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-first",
      "shortDoc": "<p>Convenience function for getting the first model instance in the store</p>\n"
    },
    {
      "tagname": "method",
      "name": "getAt",
      "member": "Ext.data.Store",
      "doc": "<p>Get the Record at the specified index.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index of the Record to find.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The Record at the passed index. Returns undefined if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1842,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getAt",
      "shortDoc": "<p>Get the Record at the specified index.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getById",
      "member": "Ext.data.Store",
      "doc": "<p>Get the Record with the specified id.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the Record to find.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The Record with the passed id. Returns undefined if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1861,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getById",
      "shortDoc": "<p>Get the Record with the specified id.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getCount",
      "member": "Ext.data.Store",
      "doc": "<p>Gets the number of cached records.</p>\n\n<p>If using paging, this may not be the total size of the dataset. If the data object\nused by the Reader contains the dataset size, then the <a href=\"#/api/Ext.data.DirectStore-method-getTotalCount\" rel=\"Ext.data.DirectStore-method-getTotalCount\" class=\"docClass\">getTotalCount</a> function returns\nthe dataset size.  <b>Note</b>: see the Important note in <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a>.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The number of Records in the Store's cache.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1820,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getCount",
      "shortDoc": "Gets the number of cached records.\n\nIf using paging, this may not be the total size of the dataset. If the data objec..."
    },
    {
      "tagname": "method",
      "name": "getGroupString",
      "member": "Ext.data.Store",
      "doc": "<p>Returns the string to group on for a given model instance. The default implementation of this method returns\nthe model's <a href=\"#/api/Ext.data.DirectStore-property-groupField\" rel=\"Ext.data.DirectStore-property-groupField\" class=\"docClass\">groupField</a>, but this can be overridden to group by an arbitrary string. For example, to\ngroup by the first letter of a model's 'name' field, use the following code:</p>\n\n\n<pre><code>new Ext.data.Store({\n    groupDir: 'ASC',\n    getGroupString: function(instance) {\n        return instance.get('name')[0];\n    }\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "instance",
          "doc": "<p>The model instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The string to compare when forming groups</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 738,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getGroupString",
      "shortDoc": "Returns the string to group on for a given model instance. The default implementation of this method returns\nthe mode..."
    },
    {
      "tagname": "method",
      "name": "getGroups",
      "member": "Ext.data.Store",
      "doc": "<p>Returns an object containing the result of applying grouping to the records in this store. See <a href=\"#/api/Ext.data.DirectStore-property-groupField\" rel=\"Ext.data.DirectStore-property-groupField\" class=\"docClass\">groupField</a>,\n<a href=\"#/api/Ext.data.DirectStore-property-groupDir\" rel=\"Ext.data.DirectStore-property-groupDir\" class=\"docClass\">groupDir</a> and <a href=\"#/api/Ext.data.DirectStore-method-getGroupString\" rel=\"Ext.data.DirectStore-method-getGroupString\" class=\"docClass\">getGroupString</a>. Example for a store containing records with a color field:</p>\n\n<pre><code>var myStore = new Ext.data.Store({\n    groupField: 'color',\n    groupDir  : 'DESC'\n});\n\nmyStore.getGroups(); //returns:\n[\n    {\n        name: 'yellow',\n        children: [\n            //all records where the color field is 'yellow'\n        ]\n    },\n    {\n        name: 'red',\n        children: [\n            //all records where the color field is 'red'\n        ]\n    }\n]\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "groupName",
          "doc": "<p>(Optional) Pass in an optional groupName argument to access a specific group as defined by <a href=\"#/api/Ext.data.DirectStore-method-getGroupString\" rel=\"Ext.data.DirectStore-method-getGroupString\" class=\"docClass\">getGroupString</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The grouped data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 569,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getGroups",
      "shortDoc": "Returns an object containing the result of applying grouping to the records in this store. See groupField,\ngroupDir a..."
    },
    {
      "tagname": "method",
      "name": "getNewRecords",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The Model instances</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 452,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
      "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet bee..."
    },
    {
      "tagname": "method",
      "name": "getPageFromRecordIndex",
      "member": "Ext.data.Store",
      "doc": "<p>Determines the page from a record index</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The record index</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The page the record belongs to</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1522,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getPageFromRecordIndex",
      "shortDoc": "<p>Determines the page from a record index</p>\n"
    },
    {
      "tagname": "method",
      "name": "getProxy",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.proxy.Proxy",
        "doc": "<p>The Proxy instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 307,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
      "shortDoc": "<p>Returns the proxy currently attached to this proxy instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRange",
      "member": "Ext.data.Store",
      "doc": "<p>Returns a range of Records between specified indices.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "startIndex",
          "doc": "<p>(optional) The starting index (defaults to 0)</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "endIndex",
          "doc": "<p>(optional) The ending index (defaults to the last Record in the Store)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Ext.data.Model[]",
        "doc": "<p>An array of Records</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1851,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getRange",
      "shortDoc": "<p>Returns a range of Records between specified indices.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRemovedRecords",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The removed Model instances</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 478,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
      "shortDoc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getTotalCount",
      "member": "Ext.data.Store",
      "doc": "<p>Returns the total number of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances that the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>\nindicates exist. This will usually differ from <a href=\"#/api/Ext.data.DirectStore-method-getCount\" rel=\"Ext.data.DirectStore-method-getCount\" class=\"docClass\">getCount</a> when using paging - getCount returns the\nnumber of records loaded into the Store at the moment, getTotalCount returns the number of records that\ncould be loaded into the Store if the Store contained all data</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The total number of Model instances available via the Proxy</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1831,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-getTotalCount",
      "shortDoc": "Returns the total number of Model instances that the Proxy\nindicates exist. This will usually differ from getCount wh..."
    },
    {
      "tagname": "method",
      "name": "getUpdatedRecords",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>The updated Model instances</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 461,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
      "shortDoc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "group",
      "member": "Ext.data.Store",
      "doc": "<p>Group data in the store</p>\n",
      "params": [
        {
          "type": "String|Array",
          "name": "groupers",
          "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of grouper configurations.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>The overall direction to group the data by. Defaults to \"ASC\".</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 483,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-group",
      "shortDoc": "<p>Group data in the store</p>\n"
    },
    {
      "tagname": "method",
      "name": "guaranteeRange",
      "member": "Ext.data.Store",
      "doc": "<p>Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take care of any loading that may\nbe necessary.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "start",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "end",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "cb",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1600,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-guaranteeRange",
      "shortDoc": "Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take car..."
    },
    {
      "tagname": "method",
      "name": "hasListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The name of the event to check for</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the event is being listened for, else false</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 480,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-hasListener",
      "shortDoc": "<p>Checks to see if this object has any listeners for a specified event</p>\n"
    },
    {
      "tagname": "method",
      "name": "hasPendingRequests",
      "member": "Ext.data.Store",
      "doc": "<p>Returns the number of pending requests out.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1585,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-hasPendingRequests",
      "shortDoc": "<p>Returns the number of pending requests out.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOf",
      "member": "Ext.data.Store",
      "doc": "<p>Get the index within the cache of the passed Record.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1872,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-indexOf",
      "shortDoc": "<p>Get the index within the cache of the passed Record.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOfId",
      "member": "Ext.data.Store",
      "doc": "<p>Get the index within the cache of the Record with the passed id.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the Record to find.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The index of the Record. Returns -1 if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1891,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-indexOfId",
      "shortDoc": "<p>Get the index within the cache of the Record with the passed id.</p>\n"
    },
    {
      "tagname": "method",
      "name": "indexOfTotal",
      "member": "Ext.data.Store",
      "doc": "<p>Get the index within the entire dataset. From 0 to the totalCount.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1882,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-indexOfTotal",
      "shortDoc": "<p>Get the index within the entire dataset. From 0 to the totalCount.</p>\n"
    },
    {
      "tagname": "method",
      "name": "initSortable",
      "member": "Ext.util.Sortable",
      "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 37,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
      "shortDoc": "Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own in..."
    },
    {
      "tagname": "method",
      "name": "insert",
      "member": "Ext.data.Store",
      "doc": "<p>Inserts Model instances into the Store at the given index and fires the <a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a> event.\nSee also <code><a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a></code>.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The start index at which to insert the passed Records.</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model[]",
          "name": "records",
          "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects to add to the cache.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 760,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-insert",
      "shortDoc": "<p>Inserts Model instances into the Store at the given index and fires the <a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a> event.\nSee also <code><a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isFiltered",
      "member": "Ext.data.Store",
      "doc": "<p>Returns true if this store is currently filtered</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1179,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-isFiltered",
      "shortDoc": "<p>Returns true if this store is currently filtered</p>\n"
    },
    {
      "tagname": "method",
      "name": "isGrouped",
      "member": "Ext.data.Store",
      "doc": "<p>Checks if the store is currently grouped</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the store is grouped.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 552,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-isGrouped",
      "shortDoc": "<p>Checks if the store is currently grouped</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLoading",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the Store is currently loading</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 717,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
      "shortDoc": "<p>Returns true if the Store is currently performing a load operation</p>\n"
    },
    {
      "tagname": "method",
      "name": "last",
      "member": "Ext.data.Store",
      "doc": "<p>Convenience function for getting the last model instance in the store</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the last record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model/undefined",
        "doc": "<p>The last model instance in the store, or undefined</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1940,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-last",
      "shortDoc": "<p>Convenience function for getting the last model instance in the store</p>\n"
    },
    {
      "tagname": "method",
      "name": "load",
      "member": "Ext.data.Store",
      "doc": "<p>Loads data into the Store via the configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>. This uses the Proxy to make an\nasynchronous call to whatever storage backend the Proxy uses, automatically adding the retrieved\ninstances into the Store and calling an optional callback if required. Example usage:</p>\n\n\n\n\n<pre><code>store.load({\n    scope   : this,\n    callback: function(records, operation, success) {\n        //the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object contains all of the details of the load operation\n        console.log(records);\n    }\n});\n</code></pre>\n\n\n\n\n<p>If the callback scope does not need to be set, a function can simply be passed:</p>\n\n\n\n\n<pre><code>store.load(function(records, operation, success) {\n    console.log('loaded records');\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object/Function",
          "name": "options",
          "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 920,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-load",
      "shortDoc": "Loads data into the Store via the configured proxy. This uses the Proxy to make an\nasynchronous call to whatever stor..."
    },
    {
      "tagname": "method",
      "name": "loadData",
      "member": "Ext.data.Store",
      "doc": "<p>Loads an array of data straight into the Store</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "data",
          "doc": "<p>Array of data to load. Any non-model instances will be cast into model instances first</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "append",
          "doc": "<p>True to add the records to the existing records in the store, false to remove the old ones first</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1225,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-loadData",
      "shortDoc": "<p>Loads an array of data straight into the Store</p>\n"
    },
    {
      "tagname": "method",
      "name": "loadPage",
      "member": "Ext.data.Store",
      "doc": "<p>Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a normal\nload operation, passing in calculated 'start' and 'limit' params</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "page",
          "doc": "<p>The number of the page to load</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1298,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-loadPage",
      "shortDoc": "Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a norma..."
    },
    {
      "tagname": "method",
      "name": "loadRecords",
      "member": "Ext.data.Store",
      "doc": "<p>Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. This should only usually\nbe called internally when loading from the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, when adding records manually use <a href=\"#/api/Ext.data.DirectStore-event-add\" rel=\"Ext.data.DirectStore-event-add\" class=\"docClass\">add</a> instead</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "records",
          "doc": "<p>The array of records to load</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>{addRecords: true} to add these records to the existing records, false to remove the Store's existing records first</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1248,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-loadRecords",
      "shortDoc": "Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. This should only usu..."
    },
    {
      "tagname": "method",
      "name": "max",
      "member": "Ext.data.Store",
      "doc": "<p>Gets the maximum value in the store.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "field",
          "doc": "<p>The field in each record</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the maximum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed/undefined",
        "doc": "<p>The maximum value, if no items exist, undefined.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 2052,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-max",
      "shortDoc": "<p>Gets the maximum value in the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "min",
      "member": "Ext.data.Store",
      "doc": "<p>Gets the minimum value in the store.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "field",
          "doc": "<p>The field in each record</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the minimum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed/undefined",
        "doc": "<p>The minimum value, if no items exist, undefined.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 2014,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-min",
      "shortDoc": "<p>Gets the minimum value in the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "nextPage",
      "member": "Ext.data.Store",
      "doc": "<p>Loads the next 'page' in the current data set</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1316,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-nextPage",
      "shortDoc": "<p>Loads the next 'page' in the current data set</p>\n"
    },
    {
      "tagname": "method",
      "name": "observe",
      "member": "Ext.util.Observable",
      "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "c",
          "doc": "<p>The class constructor to make observable.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "listeners",
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 69,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-observe",
      "shortDoc": "Sets observability on the passed class constructor.\n\nThis makes any event fired on any instance of the passed class a..."
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.Observable",
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event to listen for</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The method the event invokes</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the handler function is executed.\n<b>If omitted, defaults to the object which fired the event.</b></p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) An object containing handler configuration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 616,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-on",
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "prefetch",
      "member": "Ext.data.Store",
      "doc": "<p>Prefetches data the Store using its configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1340,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-prefetch",
      "shortDoc": "<p>Prefetches data the Store using its configured <a href=\"#/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "prefetchPage",
      "member": "Ext.data.Store",
      "doc": "<p>Prefetches a page of data.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "page",
          "doc": "<p>The page to prefetch</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.DirectStore-event-load\" rel=\"Ext.data.DirectStore-event-load\" class=\"docClass\">load</a></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1374,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-prefetchPage",
      "shortDoc": "<p>Prefetches a page of data.</p>\n"
    },
    {
      "tagname": "method",
      "name": "previousPage",
      "member": "Ext.data.Store",
      "doc": "<p>Loads the previous 'page' in the current data set</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1323,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-previousPage",
      "shortDoc": "<p>Loads the previous 'page' in the current data set</p>\n"
    },
    {
      "tagname": "method",
      "name": "purgeRecords",
      "member": "Ext.data.Store",
      "doc": "<p>Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1481,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-purgeRecords",
      "shortDoc": "<p>Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded.</p>\n"
    },
    {
      "tagname": "method",
      "name": "queryBy",
      "member": "Ext.data.Store",
      "doc": "<p>Query the cached records in this Store using a filtering function. The specified function\nwill be called with each record in this Store. If the function returns <tt>true</tt> the record is\nincluded in the results.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "MixedCollection",
        "doc": "<p>Returns an <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a> of the matched records</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1207,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-queryBy",
      "shortDoc": "Query the cached records in this Store using a filtering function. The specified function\nwill be called with each re..."
    },
    {
      "tagname": "method",
      "name": "relayEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "origin",
          "doc": "<p>The Observable whose events this object is to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "events",
          "doc": "<p>Array of event names to relay.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "prefix",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 520,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-relayEvents",
      "shortDoc": "<p>Relays selected events from the specified Observable as if the events were fired by <code><b>this</b></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "releaseCapture",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n",
      "params": [
        {
          "type": "Observable",
          "name": "o",
          "doc": "<p>The Observable to release</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 46,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
      "shortDoc": "<p>Removes <b>all</b> added captures from the Observable.</p>\n"
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.data.Store",
      "doc": "<p>Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'datachanged' event after removal.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model/Array",
          "name": "records",
          "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance or array of instances to remove</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "isMove",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 857,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-remove",
      "shortDoc": "Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'..."
    },
    {
      "tagname": "method",
      "name": "removeAll",
      "member": "Ext.data.Store",
      "doc": "<p>Remove all items from the store.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "silent",
          "doc": "<p>Prevent the <code>clear</code> event from being fired.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1900,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-removeAll",
      "shortDoc": "<p>Remove all items from the store.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAt",
      "member": "Ext.data.Store",
      "doc": "<p>Removes the model instance at the given index</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The record index</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 908,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-removeAt",
      "shortDoc": "<p>Removes the model instance at the given index</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 352,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeListener",
      "shortDoc": "<p>Removes an event handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeManagedListener",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.DirectStore--mon\" rel=\"Ext.data.DirectStore--mon\" class=\"docClass\">mon</a> method.</p>\n",
      "params": [
        {
          "type": "Observable|Element",
          "name": "item",
          "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
          "optional": false
        },
        {
          "type": "Object|String",
          "name": "ename",
          "doc": "<p>The event name, or an object containing event name properties.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the handler function.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this\nis the scope (<code>this</code> reference) in which the handler function is executed.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 196,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.DirectStore--mon\" rel=\"Ext.data.DirectStore--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.data.DirectStore-method-suspendEvents\" rel=\"Ext.data.DirectStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 502,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
      "shortDoc": "Resume firing events. (see suspendEvents)\nIf events were suspended using the queueSuspended parameter, then all\nevent..."
    },
    {
      "tagname": "method",
      "name": "setProxy",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n",
      "params": [
        {
          "type": "String|Object|Ext.data.proxy.Proxy",
          "name": "proxy",
          "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.proxy.Proxy",
        "doc": "<p>The attached Proxy object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 278,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
      "shortDoc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "sort",
      "member": "Ext.util.Sortable",
      "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates the actual\nsorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n     </code></pre>\n\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n\n",
      "params": [
        {
          "type": "String|Array",
          "name": "sorters",
          "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of sorter configurations.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "where",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "doSort",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 59,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-sort",
      "shortDoc": "Sorts the data in the Store by one or more of its properties. Example usage:\n\n\n//sort by a single field\nmyStore.sort(..."
    },
    {
      "tagname": "method",
      "name": "sum",
      "member": "Ext.data.Store",
      "doc": "<p>Sums the value of <tt>property</tt> for each <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a> between <tt>start</tt>\nand <tt>end</tt> and returns the result.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "field",
          "doc": "<p>A field in each record</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "grouped",
          "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the sum for that group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The sum</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1961,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-method-sum",
      "shortDoc": "<p>Sums the value of <tt>property</tt> for each <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a> between <tt>start</tt>\nand <tt>end</tt> and returns the result.</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.DirectStore-method-resumeEvents\" rel=\"Ext.data.DirectStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.DirectStore-method-resumeEvents\" rel=\"Ext.data.DirectStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 490,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.DirectStore-method-resumeEvents\" rel=\"Ext.data.DirectStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "sync",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 548,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
      "shortDoc": "Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in ..."
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.DirectStore-method-removeListener\" rel=\"Ext.data.DirectStore-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>The type of event the handler was associated with.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "handler",
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.DirectStore-method-addListener\" rel=\"Ext.data.DirectStore-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 608,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-method-un",
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.DirectStore-method-removeListener\" rel=\"Ext.data.DirectStore-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "batchUpdateMode",
      "member": "Ext.data.AbstractStore",
      "type": "String",
      "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 69,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
      "shortDoc": "Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal..."
    },
    {
      "tagname": "property",
      "name": "currentPage",
      "member": "Ext.data.Store",
      "type": "Number",
      "doc": "<p>The page that the Store has most recently loaded (see <a href=\"#/api/Ext.data.DirectStore-method-loadPage\" rel=\"Ext.data.DirectStore-method-loadPage\" class=\"docClass\">loadPage</a>)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 277,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-currentPage"
    },
    {
      "tagname": "property",
      "name": "data",
      "member": "Ext.data.Store",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The MixedCollection that holds this store's local cache of records</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 369,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-data"
    },
    {
      "tagname": "property",
      "name": "defaultProxyType",
      "member": "Ext.data.AbstractStore",
      "type": "String",
      "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a <a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 104,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType"
    },
    {
      "tagname": "property",
      "name": "defaultSortDirection",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 20,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection"
    },
    {
      "tagname": "property",
      "name": "filterOnLoad",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.DirectStore-cfg-remoteFilter\" rel=\"Ext.data.DirectStore-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 79,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
      "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDe..."
    },
    {
      "tagname": "property",
      "name": "filters",
      "member": "Ext.data.AbstractStore",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 268,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters"
    },
    {
      "tagname": "property",
      "name": "groupDir",
      "member": "Ext.data.Store",
      "type": "String",
      "doc": "<p>The direction in which sorting should be applied when grouping. Defaults to \"ASC\" - the other supported value is \"DESC\"</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 263,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-groupDir"
    },
    {
      "tagname": "property",
      "name": "groupField",
      "member": "Ext.data.Store",
      "type": "String",
      "doc": "<p>The (optional) field by which to group data in the store. Internally, grouping is very similar to sorting - the\ngroupField and <a href=\"#/api/Ext.data.DirectStore-property-groupDir\" rel=\"Ext.data.DirectStore-property-groupDir\" class=\"docClass\">groupDir</a> are injected as the first sorter (see <a href=\"#/api/Ext.data.DirectStore-method-sort\" rel=\"Ext.data.DirectStore-method-sort\" class=\"docClass\">sort</a>). Stores support a single\nlevel of grouping, and groups can be fetched via the <a href=\"#/api/Ext.data.DirectStore-method-getGroups\" rel=\"Ext.data.DirectStore-method-getGroups\" class=\"docClass\">getGroups</a> method.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 254,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-groupField",
      "shortDoc": "The (optional) field by which to group data in the store. Internally, grouping is very similar to sorting - the\ngroup..."
    },
    {
      "tagname": "property",
      "name": "groupers",
      "member": "Ext.data.Store",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The collection of <a href=\"#/api/Ext.util.Grouper\" rel=\"Ext.util.Grouper\" class=\"docClass\">Groupers</a> currently applied to this Store</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 391,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-groupers"
    },
    {
      "tagname": "property",
      "name": "isDestroyed",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>True if the Store has already been destroyed via <a href=\"#/api/Ext.data.DirectStore--destroyStore\" rel=\"Ext.data.DirectStore--destroyStore\" class=\"docClass\">destroyStore</a>. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 111,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
      "shortDoc": "True if the Store has already been destroyed via destroyStore. If this is true, the reference to Store should be dele..."
    },
    {
      "tagname": "property",
      "name": "isSortable",
      "member": "Ext.util.Sortable",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 13,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-isSortable"
    },
    {
      "tagname": "property",
      "name": "snapshot",
      "member": "Ext.data.Store",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>A pristine (unfiltered) collection of the records in this store. This is used to reinstate\nrecords when a filter is removed or changed</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 1136,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-property-snapshot",
      "shortDoc": "A pristine (unfiltered) collection of the records in this store. This is used to reinstate\nrecords when a filter is r..."
    },
    {
      "tagname": "property",
      "name": "sortOnLoad",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.DirectStore-cfg-remoteSort\" rel=\"Ext.data.DirectStore-cfg-remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 87,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
      "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDe..."
    },
    {
      "tagname": "property",
      "name": "sortRoot",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The property in each item that contains the data to sort. (defaults to null)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 31,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sortRoot"
    },
    {
      "tagname": "property",
      "name": "sorters",
      "member": "Ext.util.Sortable",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 45,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sorters"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "add",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fired when a Model instance has been added to this Store</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "store",
          "doc": "<p>The store</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "records",
          "doc": "<p>The Model instances that were added</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index at which the instances were inserted</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 143,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
      "shortDoc": "<p>Fired when a Model instance has been added to this Store</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeload",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Event description</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "store",
          "doc": "<p>This Store</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object that will be passed to the Proxy to load the Store</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 183,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
      "shortDoc": "<p>Event description</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforeprefetch",
      "member": "Ext.data.Store",
      "doc": "<p>Fires before a prefetch occurs. Return false to cancel.</p>\n",
      "params": [
        {
          "type": "Ext.data.store",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The associated operation</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 343,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-event-beforeprefetch",
      "shortDoc": "<p>Fires before a prefetch occurs. Return false to cancel.</p>\n"
    },
    {
      "tagname": "event",
      "name": "beforesync",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Called before a call to <a href=\"#/api/Ext.data.DirectStore-method-sync\" rel=\"Ext.data.DirectStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Hash of all records to be synchronized, broken down into create, update and destroy</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 200,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
      "shortDoc": "<p>Called before a call to <a href=\"#/api/Ext.data.DirectStore-method-sync\" rel=\"Ext.data.DirectStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n"
    },
    {
      "tagname": "event",
      "name": "clear",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fired after the <a href=\"#/api/Ext.data.DirectStore-method-removeAll\" rel=\"Ext.data.DirectStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "this",
          "doc": "\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 206,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
      "shortDoc": "<p>Fired after the <a href=\"#/api/Ext.data.DirectStore-method-removeAll\" rel=\"Ext.data.DirectStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n"
    },
    {
      "tagname": "event",
      "name": "datachanged",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor updating the data in existing records</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "this",
          "doc": "<p>The data store</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 175,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
      "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor ..."
    },
    {
      "tagname": "event",
      "name": "groupchange",
      "member": "Ext.data.Store",
      "doc": "<p>Fired whenever the grouping in the grid changes</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "store",
          "doc": "<p>The store</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "groupers",
          "doc": "<p>The array of grouper objects</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 350,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-event-groupchange",
      "shortDoc": "<p>Fired whenever the grouping in the grid changes</p>\n"
    },
    {
      "tagname": "event",
      "name": "load",
      "member": "Ext.data.Store",
      "doc": "<p>Fires whenever records have been prefetched</p>\n",
      "params": [
        {
          "type": "Ext.data.store",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "records",
          "doc": "<p>An array of records</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "successful",
          "doc": "<p>True if the operation was successful.</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Operation",
          "name": "operation",
          "doc": "<p>The associated operation</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Store.js",
      "linenr": 357,
      "html_filename": "Store2.html",
      "href": "Store2.html#Ext-data-Store-event-load",
      "shortDoc": "<p>Fires whenever records have been prefetched</p>\n"
    },
    {
      "tagname": "event",
      "name": "remove",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fired when a Model instance has been removed from this Store</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
          "name": "store",
          "doc": "<p>The Store object</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The record that was removed</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The index of the record that was removed</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 152,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-remove",
      "shortDoc": "<p>Fired when a Model instance has been removed from this Store</p>\n"
    },
    {
      "tagname": "event",
      "name": "update",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fires when a Record has been updated</p>\n",
      "params": [
        {
          "type": "Store",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The Model instance that was updated</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "operation",
          "doc": "<p>The update operation being performed. Value may be one of:</p>\n\n<pre><code>               Ext.data.Model.EDIT\n               Ext.data.Model.REJECT\n               Ext.data.Model.COMMIT\n</code></pre>\n\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 161,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
      "shortDoc": "<p>Fires when a Record has been updated</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/DirectStore.js",
  "linenr": 1,
  "html_filename": "DirectStore.html",
  "href": "DirectStore.html#Ext-data-DirectStore",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.AbstractStore",
    "Ext.data.Store"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ]
});