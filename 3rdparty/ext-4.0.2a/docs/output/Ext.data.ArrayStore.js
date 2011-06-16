Ext.data.JsonP.Ext_data_ArrayStore({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.data.AbstractStore",
    "Ext.data.Store"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "href": "ArrayStore.html#Ext-data-ArrayStore",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Boolean/Object",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called afte...",
        "static": false,
        "name": "autoLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called after creation. If the value of autoLoad is an Object, this Object will be passed to the store's\nload method. Defaults to false.</p>\n",
        "linenr": 54,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "True to automatically sync the Store with its Proxy after every edit to one of its Records. ...",
        "static": false,
        "name": "autoSync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records.\nDefaults to false.</p>\n",
        "linenr": 61,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-buffered",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Allow the store to buffer and pre-fetch pages of records. ...",
        "static": false,
        "name": "buffered",
        "owner": "Ext.data.Store",
        "doc": "<p>Allow the store to buffer and pre-fetch pages of records. This is to be used in conjunction with a view will\ntell the store to pre-fetch records ahead of a time.</p>\n",
        "linenr": 303,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-clearOnPageLoad",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "True to empty the store when loading another page via loadPage,\nnextPage or previousPage (defaults to true). ...",
        "static": false,
        "name": "clearOnPageLoad",
        "owner": "Ext.data.Store",
        "doc": "<p>True to empty the store when loading another page via <a href=\"#/api/Ext.data.ArrayStore-method-loadPage\" rel=\"Ext.data.ArrayStore-method-loadPage\" class=\"docClass\">loadPage</a>,\n<a href=\"#/api/Ext.data.ArrayStore-method-nextPage\" rel=\"Ext.data.ArrayStore-method-nextPage\" class=\"docClass\">nextPage</a> or <a href=\"#/api/Ext.data.ArrayStore-method-previousPage\" rel=\"Ext.data.ArrayStore-method-previousPage\" class=\"docClass\">previousPage</a> (defaults to true). Setting to false keeps existing records, allowing\nlarge data sets to be loaded one page at a time but rendered all together.</p>\n",
        "linenr": 282,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-data",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Optional array of Model instances or data objects to load locally. ...",
        "static": false,
        "name": "data",
        "owner": "Ext.data.Store",
        "doc": "<p>Optional array of Model instances or data objects to load locally. See \"Inline data\" above for details.</p>\n",
        "linenr": 244,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "This may be used in place of specifying a model configuration. ...",
        "static": false,
        "name": "fields",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.ArrayStore-cfg-model\" rel=\"Ext.data.ArrayStore-cfg-model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.ArrayStore-cfg-model\" rel=\"Ext.data.ArrayStore-cfg-model\" class=\"docClass\">model</a> config.</p>\n",
        "linenr": 124,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.ArrayStore-method-addListener\" rel=\"Ext.data.ArrayStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-model",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "static": false,
        "name": "model",
        "owner": "Ext.data.Store",
        "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> associated with this store</p>\n",
        "linenr": 248,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-pageSize",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "The number of records considered to form a 'page'. ...",
        "static": false,
        "name": "pageSize",
        "owner": "Ext.data.Store",
        "doc": "<p>The number of records considered to form a 'page'. This is used to power the built-in\npaging using the nextPage and previousPage functions. Defaults to 25.</p>\n",
        "linenr": 268,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "String/Ext.data.proxy.Proxy/Object",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-proxy",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "The Proxy to use for this Store. ...",
        "static": false,
        "name": "proxy",
        "owner": "Ext.data.Store",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.ArrayStore-method-setProxy\" rel=\"Ext.data.ArrayStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n",
        "linenr": 239,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-purgePageCount",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "The number of pages to keep in the cache before purging additional records. ...",
        "static": false,
        "name": "purgePageCount",
        "owner": "Ext.data.Store",
        "doc": "<p>The number of pages to keep in the cache before purging additional records. A value of 0 indicates to never purge the prefetched data.\nThis option is only relevant when the <a href=\"#/api/Ext.data.ArrayStore-cfg-buffered\" rel=\"Ext.data.ArrayStore-cfg-buffered\" class=\"docClass\">buffered</a> option is set to true.</p>\n",
        "linenr": 310,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-remoteFilter",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "True to defer any filtering operation to the server. ...",
        "static": false,
        "name": "remoteFilter",
        "owner": "Ext.data.Store",
        "doc": "<p>True to defer any filtering operation to the server. If false, filtering is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 225,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-remoteGroup",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "True if the grouping should apply on the server side, false if it is local only (defaults to false). ...",
        "static": false,
        "name": "remoteGroup",
        "owner": "Ext.data.Store",
        "doc": "<p>True if the grouping should apply on the server side, false if it is local only (defaults to false).  If the\ngrouping is local, it can be applied immediately to the data.  If it is remote, then it will simply act as a\nhelper, automatically sending the grouping information to the server.</p>\n",
        "linenr": 231,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-remoteSort",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "True to defer any sorting operation to the server. ...",
        "static": false,
        "name": "remoteSort",
        "owner": "Ext.data.Store",
        "doc": "<p>True to defer any sorting operation to the server. If false, sorting is done locally on the client. Defaults to <tt>false</tt>.</p>\n",
        "linenr": 219,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-cfg-sortOnFilter",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "For local filtering only, causes sort to be called whenever filter is called,\ncausing the sorters to be reapplied aft...",
        "static": false,
        "name": "sortOnFilter",
        "owner": "Ext.data.Store",
        "doc": "<p>For local filtering only, causes <a href=\"#/api/Ext.data.ArrayStore-method-sort\" rel=\"Ext.data.ArrayStore-method-sort\" class=\"docClass\">sort</a> to be called whenever <a href=\"#/api/Ext.data.ArrayStore-method-filter\" rel=\"Ext.data.ArrayStore-method-filter\" class=\"docClass\">filter</a> is called,\ncausing the sorters to be reapplied after filtering. Defaults to true</p>\n",
        "linenr": 297,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Optional unique identifier for this store. ...",
        "static": false,
        "name": "storeId",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Optional unique identifier for this store. If present, this Store will be registered with\nthe <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>, making it easy to reuse elsewhere. Defaults to undefined.</p>\n",
        "linenr": 119,
        "html_filename": "AbstractStore.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Creates the store. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.Store",
        "doc": "<p>Creates the store.</p>\n",
        "linenr": 319,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The data for each model</p>\n",
            "name": "data"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-add",
        "return": {
          "type": "Array",
          "doc": "<p>The array of newly created model instances</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Adds Model instances to the Store by instantiating them based on a JavaScript object. ...",
        "static": false,
        "name": "add",
        "owner": "Ext.data.Store",
        "doc": "<p>Adds Model instances to the Store by instantiating them based on a JavaScript object. When adding already-\ninstantiated Models, use <a href=\"#/api/Ext.data.ArrayStore-method-insert\" rel=\"Ext.data.ArrayStore-method-insert\" class=\"docClass\">insert</a> instead. The instances will be added at the end of the existing collection.\nThis method accepts either a single argument array of Model instances or any number of model instance arguments.\nSample usage:</p>\n\n<pre><code>myStore.add({some: 'data'}, {some: 'other data'});\n</code></pre>\n\n",
        "linenr": 798,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>Either an object with event names as properties with a value of <code>true</code> or the first\nevent name string if multiple event names are being passed as separate parameters. Usage:</p>\n\n<pre><code>this.addEvents({\n    storeloaded: true,\n    storecleared: true\n});\n</code></pre>\n",
            "name": "o"
          },
          {
            "type": "String...",
            "optional": false,
            "doc": "<p>Optional additional event names if multiple event names are being passed as separate\nparameters. Usage:</p>\n\n<pre><code>this.addEvents('storeloaded', 'storecleared');\n</code></pre>\n",
            "name": "more"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.ArrayStore-method-fireEvent\" rel=\"Ext.data.ArrayStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute. The function is called with a single parameter,\nan array of records for that group.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope to execute the function in. Defaults to the store.</p>\n",
            "name": "scope"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Any arguments to append to the function call</p>\n",
            "name": "args"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-aggregate",
        "return": {
          "type": "Object",
          "doc": "<p>An object literal with the group names and their appropriate values.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Runs the aggregate function for all the records in the store. ...",
        "static": false,
        "name": "aggregate",
        "owner": "Ext.data.Store",
        "doc": "<p>Runs the aggregate function for all the records in the store.</p>\n",
        "linenr": 2125,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The field in each record</p>\n",
            "name": "field"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the group average being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-average",
        "return": {
          "type": "Mixed/undefined",
          "doc": "<p>The average value, if no items exist, 0.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Gets the average value in the store. ...",
        "static": false,
        "name": "average",
        "owner": "Ext.data.Store",
        "doc": "<p>Gets the average value in the store.</p>\n",
        "linenr": 2092,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>If <tt>true</tt> the filter is cleared silently without firing the\n<a href=\"#/api/Ext.data.ArrayStore-event-datachanged\" rel=\"Ext.data.ArrayStore-event-datachanged\" class=\"docClass\">datachanged</a> event.</p>\n",
            "name": "suppressEvent"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-clearFilter",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Revert to a view of the Record cache with no filtering applied. ...",
        "static": false,
        "name": "clearFilter",
        "owner": "Ext.data.Store",
        "doc": "<p>Revert to a view of the Record cache with no filtering applied.</p>\n",
        "linenr": 1158,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-clearGrouping",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Clear any groupers in the store ...",
        "static": false,
        "name": "clearGrouping",
        "owner": "Ext.data.Store",
        "doc": "<p>Clear any groupers in the store</p>\n",
        "linenr": 532,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The property to collect</p>\n",
            "name": "dataIndex"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Pass true to allow null, undefined or empty string values</p>\n",
            "name": "allowNull"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Pass true to collect from all records, even ones which are filtered</p>\n",
            "name": "bypassFilter"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-collect",
        "return": {
          "type": "Array",
          "doc": "<p>An array of the unique values</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Collects unique values for a particular dataIndex from this store. ...",
        "static": false,
        "name": "collect",
        "owner": "Ext.data.Store",
        "doc": "<p>Collects unique values for a particular dataIndex from this store.</p>\n",
        "linenr": 1807,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the count for each group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-count",
        "return": {
          "type": "Number",
          "doc": "<p>the count</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Gets the count of items in the store. ...",
        "static": false,
        "name": "count",
        "owner": "Ext.data.Store",
        "doc": "<p>Gets the count of items in the store.</p>\n",
        "linenr": 1995,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call. The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> is passed as the first parameter.\nReturning <tt>false</tt> aborts and exits the iteration.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\nDefaults to the current <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Record</a> in the iteration.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-each",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Calls the specified function for each of the Records in the cache. ...",
        "static": false,
        "name": "each",
        "owner": "Ext.data.Store",
        "doc": "<p>Calls the specified function for each of the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Records</a> in the cache.</p>\n",
        "linenr": 847,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The set of filters to apply to the data. These are stored internally on the store,\nbut the filtering itself is done on the Store's <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. See\nMixedCollection's <a href=\"#/api/Ext.util.MixedCollection-method-filter\" rel=\"Ext.util.MixedCollection-method-filter\" class=\"docClass\">filter</a> method for filter syntax. Alternatively,\npass in a property string</p>\n",
            "name": "filters"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Optional value to filter by (only if using a property string as the first argument)</p>\n",
            "name": "value"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-filter",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Filters the loaded set of records by a given set of filters. ...",
        "static": false,
        "name": "filter",
        "owner": "Ext.data.Store",
        "doc": "<p>Filters the loaded set of records by a given set of filters.</p>\n",
        "linenr": 1107,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-filterBy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Filter by a function. ...",
        "static": false,
        "name": "filterBy",
        "owner": "Ext.data.Store",
        "doc": "<p>Filter by a function. The specified function will be called for each\nRecord in this Store. If the function returns <tt>true</tt> the Record is included,\notherwise it is filtered out.</p>\n",
        "linenr": 1189,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the Record field to test.</p>\n",
            "name": "fieldName"
          },
          {
            "type": "String/RegExp",
            "optional": false,
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "name": "startIndex"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
            "name": "anyMatch"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True for case sensitive comparison</p>\n",
            "name": "caseSensitive"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
            "name": "exactMatch"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-find",
        "return": {
          "type": "Number",
          "doc": "<p>The matched index or -1</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "static": false,
        "name": "find",
        "owner": "Ext.data.Store",
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
        "linenr": 1723,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "name": "scope"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "name": "startIndex"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-findBy",
        "return": {
          "type": "Number",
          "doc": "<p>The matched index or -1</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Find the index of the first matching Record in this Store by a function. ...",
        "static": false,
        "name": "findBy",
        "owner": "Ext.data.Store",
        "doc": "<p>Find the index of the first matching Record in this Store by a function.\nIf the function returns <tt>true</tt> it is considered a match.</p>\n",
        "linenr": 1791,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the Record field to test.</p>\n",
            "name": "fieldName"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to match the field against.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "name": "startIndex"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-findExact",
        "return": {
          "type": "Number",
          "doc": "<p>The matched index or -1</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Finds the index of the first matching Record in this store by a specific field value. ...",
        "static": false,
        "name": "findExact",
        "owner": "Ext.data.Store",
        "doc": "<p>Finds the index of the first matching Record in this store by a specific field value.</p>\n",
        "linenr": 1777,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the Record field to test.</p>\n",
            "name": "fieldName"
          },
          {
            "type": "String/RegExp",
            "optional": false,
            "doc": "<p>Either a string that the field value\nshould begin with, or a RegExp to test against the field.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The index to start searching at</p>\n",
            "name": "startIndex"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to match any part of the string, not just the beginning</p>\n",
            "name": "anyMatch"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True for case sensitive comparison</p>\n",
            "name": "caseSensitive"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.</p>\n",
            "name": "exactMatch"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-findRecord",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The matched record or null</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Finds the first matching Record in this store by a specific field value. ...",
        "static": false,
        "name": "findRecord",
        "owner": "Ext.data.Store",
        "doc": "<p>Finds the first matching Record in this store by a specific field value.</p>\n",
        "linenr": 1739,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to fire.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Object...",
            "optional": false,
            "doc": "<p>Variable number of parameters are passed to handlers.</p>\n",
            "name": "args"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.ArrayStore-method-addListener\" rel=\"Ext.data.ArrayStore-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.ArrayStore-method-enableBubble\" rel=\"Ext.data.ArrayStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the first record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-first",
        "return": {
          "type": "Ext.data.Model/undefined",
          "doc": "<p>The first model instance in the store, or undefined</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Convenience function for getting the first model instance in the store ...",
        "static": false,
        "name": "first",
        "owner": "Ext.data.Store",
        "doc": "<p>Convenience function for getting the first model instance in the store</p>\n",
        "linenr": 1921,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the Record to find.</p>\n",
            "name": "index"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getAt",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The Record at the passed index. Returns undefined if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Get the Record at the specified index. ...",
        "static": false,
        "name": "getAt",
        "owner": "Ext.data.Store",
        "doc": "<p>Get the Record at the specified index.</p>\n",
        "linenr": 1843,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the Record to find.</p>\n",
            "name": "id"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getById",
        "return": {
          "type": "Ext.data.Model",
          "doc": "<p>The Record with the passed id. Returns undefined if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Get the Record with the specified id. ...",
        "static": false,
        "name": "getById",
        "owner": "Ext.data.Store",
        "doc": "<p>Get the Record with the specified id.</p>\n",
        "linenr": 1862,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-getCount",
        "return": {
          "type": "Number",
          "doc": "<p>The number of Records in the Store's cache.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Gets the number of cached records. ...",
        "static": false,
        "name": "getCount",
        "owner": "Ext.data.Store",
        "doc": "<p>Gets the number of cached records.</p>\n\n<p>If using paging, this may not be the total size of the dataset. If the data object\nused by the Reader contains the dataset size, then the <a href=\"#/api/Ext.data.ArrayStore-method-getTotalCount\" rel=\"Ext.data.ArrayStore-method-getTotalCount\" class=\"docClass\">getTotalCount</a> function returns\nthe dataset size.  <b>Note</b>: see the Important note in <a href=\"#/api/Ext.data.ArrayStore-event-load\" rel=\"Ext.data.ArrayStore-event-load\" class=\"docClass\">load</a>.</p>\n\n",
        "linenr": 1821,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The model instance</p>\n",
            "name": "instance"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getGroupString",
        "return": {
          "type": "String",
          "doc": "<p>The string to compare when forming groups</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns the string to group on for a given model instance. ...",
        "static": false,
        "name": "getGroupString",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns the string to group on for a given model instance. The default implementation of this method returns\nthe model's <a href=\"#/api/Ext.data.ArrayStore-property-groupField\" rel=\"Ext.data.ArrayStore-property-groupField\" class=\"docClass\">groupField</a>, but this can be overridden to group by an arbitrary string. For example, to\ngroup by the first letter of a model's 'name' field, use the following code:</p>\n\n\n<pre><code>new Ext.data.Store({\n    groupDir: 'ASC',\n    getGroupString: function(instance) {\n        return instance.get('name')[0];\n    }\n});\n</code></pre>\n\n",
        "linenr": 739,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>(Optional) Pass in an optional groupName argument to access a specific group as defined by <a href=\"#/api/Ext.data.ArrayStore-method-getGroupString\" rel=\"Ext.data.ArrayStore-method-getGroupString\" class=\"docClass\">getGroupString</a></p>\n",
            "name": "groupName"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getGroups",
        "return": {
          "type": "Array",
          "doc": "<p>The grouped data</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns an object containing the result of applying grouping to the records in this store. ...",
        "static": false,
        "name": "getGroups",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns an object containing the result of applying grouping to the records in this store. See <a href=\"#/api/Ext.data.ArrayStore-property-groupField\" rel=\"Ext.data.ArrayStore-property-groupField\" class=\"docClass\">groupField</a>,\n<a href=\"#/api/Ext.data.ArrayStore-property-groupDir\" rel=\"Ext.data.ArrayStore-property-groupDir\" class=\"docClass\">groupDir</a> and <a href=\"#/api/Ext.data.ArrayStore-method-getGroupString\" rel=\"Ext.data.ArrayStore-method-getGroupString\" class=\"docClass\">getGroupString</a>. Example for a store containing records with a color field:</p>\n\n<pre><code>var myStore = new Ext.data.Store({\n    groupField: 'color',\n    groupDir  : 'DESC'\n});\n\nmyStore.getGroups(); //returns:\n[\n    {\n        name: 'yellow',\n        children: [\n            //all records where the color field is 'yellow'\n        ]\n    },\n    {\n        name: 'red',\n        children: [\n            //all records where the color field is 'red'\n        ]\n    }\n]\n</code></pre>\n\n",
        "linenr": 570,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
        "return": {
          "type": "Array",
          "doc": "<p>The Model instances</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. ...",
        "static": false,
        "name": "getNewRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n",
        "linenr": 450,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The record index</p>\n",
            "name": "index"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getPageFromRecordIndex",
        "return": {
          "type": "Number",
          "doc": "<p>The page the record belongs to</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Determines the page from a record index ...",
        "static": false,
        "name": "getPageFromRecordIndex",
        "owner": "Ext.data.Store",
        "doc": "<p>Determines the page from a record index</p>\n",
        "linenr": 1523,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The Proxy instance</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Returns the proxy currently attached to this proxy instance ...",
        "static": false,
        "name": "getProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n",
        "linenr": 305,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The starting index (defaults to 0)</p>\n",
            "name": "startIndex"
          },
          {
            "type": "Number",
            "optional": true,
            "doc": "<p>(optional) The ending index (defaults to the last Record in the Store)</p>\n",
            "name": "endIndex"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-getRange",
        "return": {
          "type": "Ext.data.Model[]",
          "doc": "<p>An array of Records</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns a range of Records between specified indices. ...",
        "static": false,
        "name": "getRange",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns a range of Records between specified indices.</p>\n",
        "linenr": 1852,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
        "return": {
          "type": "Array",
          "doc": "<p>The removed Model instances</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Returns any records that have been removed from the store but not yet destroyed on the proxy. ...",
        "static": false,
        "name": "getRemovedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n",
        "linenr": 476,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-getTotalCount",
        "return": {
          "type": "Number",
          "doc": "<p>The total number of Model instances available via the Proxy</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns the total number of Model instances that the Proxy\nindicates exist. ...",
        "static": false,
        "name": "getTotalCount",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns the total number of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instances that the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>\nindicates exist. This will usually differ from <a href=\"#/api/Ext.data.ArrayStore-method-getCount\" rel=\"Ext.data.ArrayStore-method-getCount\" class=\"docClass\">getCount</a> when using paging - getCount returns the\nnumber of records loaded into the Store at the moment, getTotalCount returns the number of records that\ncould be loaded into the Store if the Store contained all data</p>\n",
        "linenr": 1832,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
        "return": {
          "type": "Array",
          "doc": "<p>The updated Model instances</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy ...",
        "static": false,
        "name": "getUpdatedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n",
        "linenr": 459,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Array",
            "optional": false,
            "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of grouper configurations.</p>\n",
            "name": "groupers"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The overall direction to group the data by. Defaults to \"ASC\".</p>\n",
            "name": "direction"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-group",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Group data in the store ...",
        "static": false,
        "name": "group",
        "owner": "Ext.data.Store",
        "doc": "<p>Group data in the store</p>\n",
        "linenr": 484,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "start"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "end"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "cb"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "scope"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-guaranteeRange",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take car...",
        "static": false,
        "name": "guaranteeRange",
        "owner": "Ext.data.Store",
        "doc": "<p>Guarantee a specific range, this will load the store with a range (that\nmust be the pageSize or smaller) and take care of any loading that may\nbe necessary.</p>\n",
        "linenr": 1601,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-hasPendingRequests",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns the number of pending requests out. ...",
        "static": false,
        "name": "hasPendingRequests",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns the number of pending requests out.</p>\n",
        "linenr": 1586,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
            "name": "record"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-indexOf",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Get the index within the cache of the passed Record. ...",
        "static": false,
        "name": "indexOf",
        "owner": "Ext.data.Store",
        "doc": "<p>Get the index within the cache of the passed Record.</p>\n",
        "linenr": 1873,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the Record to find.</p>\n",
            "name": "id"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-indexOfId",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the Record. Returns -1 if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Get the index within the cache of the Record with the passed id. ...",
        "static": false,
        "name": "indexOfId",
        "owner": "Ext.data.Store",
        "doc": "<p>Get the index within the cache of the Record with the passed id.</p>\n",
        "linenr": 1892,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> object to find.</p>\n",
            "name": "record"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-indexOfTotal",
        "return": {
          "type": "Number",
          "doc": "<p>The index of the passed Record. Returns -1 if not found.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Get the index within the entire dataset. ...",
        "static": false,
        "name": "indexOfTotal",
        "owner": "Ext.data.Store",
        "doc": "<p>Get the index within the entire dataset. From 0 to the totalCount.</p>\n",
        "linenr": 1883,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "shortDoc": "Performs initialization of this mixin. ...",
        "static": false,
        "name": "initSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
        "linenr": 36,
        "html_filename": "Sortable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The start index at which to insert the passed Records.</p>\n",
            "name": "index"
          },
          {
            "type": "Ext.data.Model[]",
            "optional": false,
            "doc": "<p>An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects to add to the cache.</p>\n",
            "name": "records"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-insert",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Inserts Model instances into the Store at the given index and fires the add event. ...",
        "static": false,
        "name": "insert",
        "owner": "Ext.data.Store",
        "doc": "<p>Inserts Model instances into the Store at the given index and fires the <a href=\"#/api/Ext.data.ArrayStore-event-add\" rel=\"Ext.data.ArrayStore-event-add\" class=\"docClass\">add</a> event.\nSee also <code><a href=\"#/api/Ext.data.ArrayStore-event-add\" rel=\"Ext.data.ArrayStore-event-add\" class=\"docClass\">add</a></code>.</p>\n",
        "linenr": 761,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-isFiltered",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Returns true if this store is currently filtered ...",
        "static": false,
        "name": "isFiltered",
        "owner": "Ext.data.Store",
        "doc": "<p>Returns true if this store is currently filtered</p>\n",
        "linenr": 1180,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-isGrouped",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the store is grouped.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Checks if the store is currently grouped ...",
        "static": false,
        "name": "isGrouped",
        "owner": "Ext.data.Store",
        "doc": "<p>Checks if the store is currently grouped</p>\n",
        "linenr": 553,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Store is currently loading</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Returns true if the Store is currently performing a load operation ...",
        "static": false,
        "name": "isLoading",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n",
        "linenr": 715,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the last record being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-last",
        "return": {
          "type": "Ext.data.Model/undefined",
          "doc": "<p>The last model instance in the store, or undefined</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Convenience function for getting the last model instance in the store ...",
        "static": false,
        "name": "last",
        "owner": "Ext.data.Store",
        "doc": "<p>Convenience function for getting the last model instance in the store</p>\n",
        "linenr": 1941,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/Function",
            "optional": false,
            "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.</p>\n",
            "name": "options"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-load",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads data into the Store via the configured proxy. ...",
        "static": false,
        "name": "load",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads data into the Store via the configured <a href=\"#/api/Ext.data.ArrayStore-cfg-proxy\" rel=\"Ext.data.ArrayStore-cfg-proxy\" class=\"docClass\">proxy</a>. This uses the Proxy to make an\nasynchronous call to whatever storage backend the Proxy uses, automatically adding the retrieved\ninstances into the Store and calling an optional callback if required. Example usage:</p>\n\n\n\n\n<pre><code>store.load({\n    scope   : this,\n    callback: function(records, operation, success) {\n        //the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object contains all of the details of the load operation\n        console.log(records);\n    }\n});\n</code></pre>\n\n\n\n\n<p>If the callback scope does not need to be set, a function can simply be passed:</p>\n\n\n\n\n<pre><code>store.load(function(records, operation, success) {\n    console.log('loaded records');\n});\n</code></pre>\n\n",
        "linenr": 921,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>Array of data to load. Any non-model instances will be cast into model instances first</p>\n",
            "name": "data"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to add the records to the existing records in the store, false to remove the old ones first</p>\n",
            "name": "append"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-loadData",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads an array of data straight into the Store ...",
        "static": false,
        "name": "loadData",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads an array of data straight into the Store</p>\n",
        "linenr": 1226,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of the page to load</p>\n",
            "name": "page"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-loadPage",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads a given 'page' of data by setting the start and limit values appropriately. ...",
        "static": false,
        "name": "loadPage",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads a given 'page' of data by setting the start and limit values appropriately. Internally this just causes a normal\nload operation, passing in calculated 'start' and 'limit' params</p>\n",
        "linenr": 1299,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of records to load</p>\n",
            "name": "records"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{addRecords: true} to add these records to the existing records, false to remove the Store's existing records first</p>\n",
            "name": "options"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-loadRecords",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. ...",
        "static": false,
        "name": "loadRecords",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads an array of {@Ext.data.Model model} instances into the store, fires the datachanged event. This should only usually\nbe called internally when loading from the <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>, when adding records manually use <a href=\"#/api/Ext.data.ArrayStore-event-add\" rel=\"Ext.data.ArrayStore-event-add\" class=\"docClass\">add</a> instead</p>\n",
        "linenr": 1249,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The field in each record</p>\n",
            "name": "field"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the maximum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-max",
        "return": {
          "type": "Mixed/undefined",
          "doc": "<p>The maximum value, if no items exist, undefined.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Gets the maximum value in the store. ...",
        "static": false,
        "name": "max",
        "owner": "Ext.data.Store",
        "doc": "<p>Gets the maximum value in the store.</p>\n",
        "linenr": 2053,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The field in each record</p>\n",
            "name": "field"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the minimum in the group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-min",
        "return": {
          "type": "Mixed/undefined",
          "doc": "<p>The minimum value, if no items exist, undefined.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Gets the minimum value in the store. ...",
        "static": false,
        "name": "min",
        "owner": "Ext.data.Store",
        "doc": "<p>Gets the minimum value in the store.</p>\n",
        "linenr": 2015,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable/Element",
            "optional": false,
            "doc": "<p>The item to which to add a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) If the <code>ename</code> parameter was an event name, this is the\n<a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">addListener</a> options.</p>\n",
            "name": "opt"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.ArrayStore-method-addManagedListener\" rel=\"Ext.data.ArrayStore-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.ArrayStore-method-removeManagedListener\" rel=\"Ext.data.ArrayStore-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.ArrayStore-method-mon\" rel=\"Ext.data.ArrayStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-nextPage",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads the next 'page' in the current data set ...",
        "static": false,
        "name": "nextPage",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads the next 'page' in the current data set</p>\n",
        "linenr": 1317,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to listen for. May also be an object who's property names are\nevent names.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.ArrayStore-method-fireEvent\" rel=\"Ext.data.ArrayStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the handler function is executed. <strong>If\nomitted, defaults to the object which fired the event.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) An object containing handler configuration.</p>\n\n<p><strong>Note:</strong> Unlike in ExtJS 3.x, the options object will also be passed as the last argument to every event handler.</p>\n\n<p>This object may contain any of the following properties:</p>\n\n<ul>\n<li><p><strong>scope</strong> : Object</p>\n\n<p>The scope (<code>this</code> reference) in which the handler function is executed. <strong>If omitted, defaults to the object\nwhich fired the event.</strong></p></li>\n<li><p><strong>delay</strong> : Number</p>\n\n<p>The number of milliseconds to delay the invocation of the handler after the event fires.</p></li>\n<li><p><strong>single</strong> : Boolean</p>\n\n<p>True to add a handler to handle just the next firing of the event, and then remove itself.</p></li>\n<li><p><strong>buffer</strong> : Number</p>\n\n<p>Causes the handler to be scheduled to run in an <a href=\"#/api/Ext.util.DelayedTask\" rel=\"Ext.util.DelayedTask\" class=\"docClass\">Ext.util.DelayedTask</a> delayed by the specified number of\nmilliseconds. If the event fires again within that time, the original handler is <em>not</em> invoked, but the new\nhandler is scheduled in its place.</p></li>\n<li><p><strong>target</strong> : Observable</p>\n\n<p>Only call the handler if the event was fired on the target Observable, <em>not</em> if the event was bubbled up from a\nchild Observable.</p></li>\n<li><p><strong>element</strong> : String</p>\n\n<p><strong>This option is only valid for listeners bound to <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a>.</strong> The name of a Component\nproperty which references an element to add a listener to.</p>\n\n<p>This option is useful during Component construction to add DOM event listeners to elements of\n<a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a> which will exist only after the Component is rendered.\nFor example, to add a click listener to a Panel's body:</p>\n\n<pre><code>new Ext.panel.Panel({\n    title: 'The title',\n    listeners: {\n        click: this.handlePanelClick,\n        element: 'body'\n    }\n});\n</code></pre></li>\n</ul>\n\n\n<p><strong>Combining Options</strong></p>\n\n<p>Using the options argument, it is possible to combine different types of listeners:</p>\n\n<p>A delayed, one-time listener.</p>\n\n<pre><code>myPanel.on('hide', this.handleClick, this, {\n    single: true,\n    delay: 100\n});\n</code></pre>\n\n<p><strong>Attaching multiple handlers in 1 call</strong></p>\n\n<p>The method also allows for a single argument to be passed which is a config object containing properties which\nspecify multiple events. For example:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: this.onCellClick,\n    mouseover: this.onMouseOver,\n    mouseout: this.onMouseOut,\n    scope: this // Important. Ensure \"this\" is correct during handler execution\n});\n</code></pre>\n\n<p>One can also specify options for each event handler separately:</p>\n\n<pre><code>myGridPanel.on({\n    cellClick: {fn: this.onCellClick, scope: this, single: true},\n    mouseover: {fn: panel.onMouseOver, scope: panel}\n});\n</code></pre>\n",
            "name": "options"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.ArrayStore-method-addListener\" rel=\"Ext.data.ArrayStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.ArrayStore-event-load\" rel=\"Ext.data.ArrayStore-event-load\" class=\"docClass\">load</a></p>\n",
            "name": "options"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-prefetch",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Prefetches data the Store using its configured proxy. ...",
        "static": false,
        "name": "prefetch",
        "owner": "Ext.data.Store",
        "doc": "<p>Prefetches data the Store using its configured <a href=\"#/api/Ext.data.ArrayStore-cfg-proxy\" rel=\"Ext.data.ArrayStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
        "linenr": 1341,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The page to prefetch</p>\n",
            "name": "page"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object, passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object before loading.\nSee <a href=\"#/api/Ext.data.ArrayStore-event-load\" rel=\"Ext.data.ArrayStore-event-load\" class=\"docClass\">load</a></p>\n",
            "name": "options"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": ""
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-prefetchPage",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Prefetches a page of data. ...",
        "static": false,
        "name": "prefetchPage",
        "owner": "Ext.data.Store",
        "doc": "<p>Prefetches a page of data.</p>\n",
        "linenr": 1375,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-previousPage",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Loads the previous 'page' in the current data set ...",
        "static": false,
        "name": "previousPage",
        "owner": "Ext.data.Store",
        "doc": "<p>Loads the previous 'page' in the current data set</p>\n",
        "linenr": 1324,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Store2.html#Ext-data-Store-method-purgeRecords",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded. ...",
        "static": false,
        "name": "purgeRecords",
        "owner": "Ext.data.Store",
        "doc": "<p>Purge the least recently used records in the prefetch if the purgeCount\nhas been exceeded.</p>\n",
        "linenr": 1482,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to be called. It will be passed the following parameters:<ul>\n<li><b>record</b> : Ext.data.Model<p class=\"sub-desc\">The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a>\nto test for filtering. Access field values using <a href=\"#/api/Ext.data.Model-method-get\" rel=\"Ext.data.Model-method-get\" class=\"docClass\">Ext.data.Model.get</a>.</p></li>\n<li><b>id</b> : Object<p class=\"sub-desc\">The ID of the Record passed.</p></li>\n</ul></p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to this Store.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-queryBy",
        "return": {
          "type": "MixedCollection",
          "doc": "<p>Returns an <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a> of the matched records</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Query the cached records in this Store using a filtering function. ...",
        "static": false,
        "name": "queryBy",
        "owner": "Ext.data.Store",
        "doc": "<p>Query the cached records in this Store using a filtering function. The specified function\nwill be called with each record in this Store. If the function returns <tt>true</tt> the record is\nincluded in the results.</p>\n",
        "linenr": 1208,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The Observable whose events this object is to relay.</p>\n",
            "name": "origin"
          },
          {
            "type": "[String]",
            "optional": false,
            "doc": "<p>Array of event names to relay.</p>\n",
            "name": "events"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "prefix"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Model/Array",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instance or array of instances to remove</p>\n",
            "name": "records"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "isMove"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-remove",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'...",
        "static": false,
        "name": "remove",
        "owner": "Ext.data.Store",
        "doc": "<p>Removes the given record from the Store, firing the 'remove' event for each instance that is removed, plus a single\n'datachanged' event after removal.</p>\n",
        "linenr": 858,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Prevent the <code>clear</code> event from being fired.</p>\n",
            "name": "silent"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-removeAll",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Remove all items from the store. ...",
        "static": false,
        "name": "removeAll",
        "owner": "Ext.data.Store",
        "doc": "<p>Remove all items from the store.</p>\n",
        "linenr": 1901,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The record index</p>\n",
            "name": "index"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-removeAt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Removes the model instance at the given index ...",
        "static": false,
        "name": "removeAt",
        "owner": "Ext.data.Store",
        "doc": "<p>Removes the model instance at the given index</p>\n",
        "linenr": 909,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.ArrayStore-method-addListener\" rel=\"Ext.data.ArrayStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Observable|Element",
            "optional": false,
            "doc": "<p>The item from which to remove a listener/listeners.</p>\n",
            "name": "item"
          },
          {
            "type": "Object|String",
            "optional": false,
            "doc": "<p>The event name, or an object containing event name properties.</p>\n",
            "name": "ename"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the handler function.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional. If the <code>ename</code> parameter was an event name, this is the scope (<code>this</code> reference)\nin which the handler function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.ArrayStore-method-mon\" rel=\"Ext.data.ArrayStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.ArrayStore-method-suspendEvents\" rel=\"Ext.data.ArrayStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Object|Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n",
            "name": "proxy"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The attached Proxy object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Sets the Store's Proxy by string, config object or Proxy instance ...",
        "static": false,
        "name": "setProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n",
        "linenr": 276,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String|Array",
            "optional": false,
            "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of sorter configurations.</p>\n",
            "name": "sorters"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
            "name": "direction"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "where"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "doSort"
          }
        ],
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "static": false,
        "name": "sort",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates the actual\nsorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n     </code></pre>\n\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n\n",
        "linenr": 58,
        "html_filename": "Sortable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>A field in each record</p>\n",
            "name": "field"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>(Optional) True to perform the operation for each group\nin the store. The value returned will be an object literal with the key being the group\nname and the sum for that group being the value. The grouped parameter is only honored if\nthe store has a groupField.</p>\n",
            "name": "grouped"
          }
        ],
        "href": "Store2.html#Ext-data-Store-method-sum",
        "return": {
          "type": "Number",
          "doc": "<p>The sum</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Sums the value of property for each record between start\nand end and returns the result. ...",
        "static": false,
        "name": "sum",
        "owner": "Ext.data.Store",
        "doc": "<p>Sums the value of <tt>property</tt> for each <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">record</a> between <tt>start</tt>\nand <tt>end</tt> and returns the result.</p>\n",
        "linenr": 1962,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.ArrayStore-method-resumeEvents\" rel=\"Ext.data.ArrayStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.ArrayStore-method-resumeEvents\" rel=\"Ext.data.ArrayStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "html_filename": "Observable.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Synchronizes the Store with its Proxy. ...",
        "static": false,
        "name": "sync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n",
        "linenr": 546,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The type of event the handler was associated with.</p>\n",
            "name": "eventName"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.ArrayStore-method-addListener\" rel=\"Ext.data.ArrayStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Observable.html#Ext-util-Observable-method-un",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.ArrayStore-method-removeListener\" rel=\"Ext.data.ArrayStore-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "html_filename": "Observable.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store</p>\n",
            "name": "store"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The Model instances that were added</p>\n",
            "name": "records"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index at which the instances were inserted</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Fired when a Model instance has been added to this Store ...",
        "static": false,
        "name": "add",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired when a Model instance has been added to this Store</p>\n",
        "linenr": 141,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>This Store</p>\n",
            "name": "store"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> object that will be passed to the Proxy to load the Store</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Event description ...",
        "static": false,
        "name": "beforeload",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Event description</p>\n",
        "linenr": 181,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The associated operation</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Store2.html#Ext-data-Store-event-beforeprefetch",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Fires before a prefetch occurs. ...",
        "static": false,
        "name": "beforeprefetch",
        "owner": "Ext.data.Store",
        "doc": "<p>Fires before a prefetch occurs. Return false to cancel.</p>\n",
        "linenr": 344,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Hash of all records to be synchronized, broken down into create, update and destroy</p>\n",
            "name": "options"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Called before a call to sync is executed. ...",
        "static": false,
        "name": "beforesync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Called before a call to <a href=\"#/api/Ext.data.ArrayStore-method-sync\" rel=\"Ext.data.ArrayStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n",
        "linenr": 198,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Fired after the removeAll method is called. ...",
        "static": false,
        "name": "clear",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.ArrayStore-method-removeAll\" rel=\"Ext.data.ArrayStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n",
        "linenr": 204,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The data store</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor ...",
        "static": false,
        "name": "datachanged",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor updating the data in existing records</p>\n",
        "linenr": 173,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The store</p>\n",
            "name": "store"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The array of grouper objects</p>\n",
            "name": "groupers"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Store2.html#Ext-data-Store-event-groupchange",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Fired whenever the grouping in the grid changes ...",
        "static": false,
        "name": "groupchange",
        "owner": "Ext.data.Store",
        "doc": "<p>Fired whenever the grouping in the grid changes</p>\n",
        "linenr": 351,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>An array of records</p>\n",
            "name": "records"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True if the operation was successful.</p>\n",
            "name": "successful"
          },
          {
            "type": "Ext.data.Operation",
            "optional": false,
            "doc": "<p>The associated operation</p>\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "Store2.html#Ext-data-Store-event-load",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "Fires whenever records have been prefetched ...",
        "static": false,
        "name": "load",
        "owner": "Ext.data.Store",
        "doc": "<p>Fires whenever records have been prefetched</p>\n",
        "linenr": 358,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.data.Store",
            "optional": false,
            "doc": "<p>The Store object</p>\n",
            "name": "store"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The record that was removed</p>\n",
            "name": "record"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the record that was removed</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-remove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Fired when a Model instance has been removed from this Store ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired when a Model instance has been removed from this Store</p>\n",
        "linenr": 150,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Store",
            "optional": false,
            "doc": "\n",
            "name": "this"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The Model instance that was updated</p>\n",
            "name": "record"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The update operation being performed. Value may be one of:</p>\n\n<pre><code>               Ext.data.Model.EDIT\n               Ext.data.Model.REJECT\n               Ext.data.Model.COMMIT\n</code></pre>\n\n",
            "name": "operation"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Fires when a Record has been updated ...",
        "static": false,
        "name": "update",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires when a Record has been updated</p>\n",
        "linenr": 159,
        "html_filename": "AbstractStore.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Sortable.html#Ext-util-Sortable-property-",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "static": false,
        "name": "",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n",
        "linenr": 31,
        "html_filename": "Sortable.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "Sets the updating behavior based on batch synchronization. ...",
        "static": false,
        "name": "batchUpdateMode",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n",
        "linenr": 67,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-currentPage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "static": false,
        "name": "currentPage",
        "owner": "Ext.data.Store",
        "doc": "<p>The page that the Store has most recently loaded (see <a href=\"#/api/Ext.data.ArrayStore-method-loadPage\" rel=\"Ext.data.ArrayStore-method-loadPage\" class=\"docClass\">loadPage</a>)</p>\n",
        "linenr": 275,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-data",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "static": false,
        "name": "data",
        "owner": "Ext.data.Store",
        "doc": "<p>The MixedCollection that holds this store's local cache of records</p>\n",
        "linenr": 370,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "The string type of the Proxy to create if none is specified. ...",
        "static": false,
        "name": "defaultProxyType",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a <a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n",
        "linenr": 102,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "static": false,
        "name": "defaultSortDirection",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
        "linenr": 20,
        "html_filename": "Sortable.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "static": false,
        "name": "filterOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.ArrayStore-cfg-remoteFilter\" rel=\"Ext.data.ArrayStore-cfg-remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n",
        "linenr": 77,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "static": false,
        "name": "filters",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n",
        "linenr": 266,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-groupDir",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "The direction in which sorting should be applied when grouping. ...",
        "static": false,
        "name": "groupDir",
        "owner": "Ext.data.Store",
        "doc": "<p>The direction in which sorting should be applied when grouping. Defaults to \"ASC\" - the other supported value is \"DESC\"</p>\n",
        "linenr": 261,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-groupField",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "The (optional) field by which to group data in the store. ...",
        "static": false,
        "name": "groupField",
        "owner": "Ext.data.Store",
        "doc": "<p>The (optional) field by which to group data in the store. Internally, grouping is very similar to sorting - the\ngroupField and <a href=\"#/api/Ext.data.ArrayStore-property-groupDir\" rel=\"Ext.data.ArrayStore-property-groupDir\" class=\"docClass\">groupDir</a> are injected as the first sorter (see <a href=\"#/api/Ext.data.ArrayStore-method-sort\" rel=\"Ext.data.ArrayStore-method-sort\" class=\"docClass\">sort</a>). Stores support a single\nlevel of grouping, and groups can be fetched via the <a href=\"#/api/Ext.data.ArrayStore-method-getGroups\" rel=\"Ext.data.ArrayStore-method-getGroups\" class=\"docClass\">getGroups</a> method.</p>\n",
        "linenr": 252,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-groupers",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "static": false,
        "name": "groupers",
        "owner": "Ext.data.Store",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Grouper\" rel=\"Ext.util.Grouper\" class=\"docClass\">Groupers</a> currently applied to this Store</p>\n",
        "linenr": 392,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "True if the Store has already been destroyed via destroyStore. ...",
        "static": false,
        "name": "isDestroyed",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True if the Store has already been destroyed via destroyStore. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n",
        "linenr": 109,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "static": false,
        "name": "isSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
        "linenr": 13,
        "html_filename": "Sortable.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "Store2.html#Ext-data-Store-property-snapshot",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Store.js",
        "private": false,
        "shortDoc": "A pristine (unfiltered) collection of the records in this store. ...",
        "static": false,
        "name": "snapshot",
        "owner": "Ext.data.Store",
        "doc": "<p>A pristine (unfiltered) collection of the records in this store. This is used to reinstate\nrecords when a filter is removed or changed</p>\n",
        "linenr": 1137,
        "html_filename": "Store2.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "static": false,
        "name": "sortOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.ArrayStore-cfg-remoteSort\" rel=\"Ext.data.ArrayStore-cfg-remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n",
        "linenr": 85,
        "html_filename": "AbstractStore.html"
      },
      {
        "inheritable": false,
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "static": false,
        "name": "sorters",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
        "linenr": 44,
        "html_filename": "Sortable.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Ed Spencer",
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/ArrayStore.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.ArrayStore",
  "doc": "<p>Small helper class to make creating <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a>s from Array data easier. An ArrayStore will be\nautomatically configured with a <a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">Ext.data.reader.Array</a>.</p>\n\n<p>A store configuration would be something like:</p>\n\n<pre><code>var store = Ext.create('Ext.data.ArrayStore', {\n    // store configs\n    autoDestroy: true,\n    storeId: 'myStore',\n    // reader configs\n    idIndex: 0,\n    fields: [\n       'company',\n       {name: 'price', type: 'float'},\n       {name: 'change', type: 'float'},\n       {name: 'pctChange', type: 'float'},\n       {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'}\n    ]\n});\n</code></pre>\n\n<p>This store is configured to consume a returned object of the form:</p>\n\n<pre><code>var myData = [\n    ['3m Co',71.72,0.02,0.03,'9/1 12:00am'],\n    ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am'],\n    ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am'],\n    ['Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1 12:00am'],\n    ['Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1 12:00am']\n];\n</code></pre>\n\n<p>An object literal of this form could also be used as the <a href=\"#/api/Ext.data.ArrayStore-property-data\" rel=\"Ext.data.ArrayStore-property-data\" class=\"docClass\">data</a> config option.</p>\n\n<p><strong>Note:</strong> Although not listed here, this class accepts all of the configuration options of\n<strong><a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">ArrayReader</a></strong>.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "ArrayStore.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.data.Store"
});