Ext.data.JsonP.Ext_data_TreeStore({
  "allMixins": [
    "Ext.util.Observable",
    "Ext.util.Sortable"
  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Boolean/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoLoad",
        "shortDoc": "If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called afte...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "autoLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If data is not specified, and if autoLoad is true or an Object, this store's load method\nis automatically called after creation. If the value of autoLoad is an Object, this Object will be passed to the store's\nload method. Defaults to false.</p>\n",
        "linenr": 54,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-autoSync",
        "shortDoc": "True to automatically sync the Store with its Proxy after every edit to one of its Records. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "autoSync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True to automatically sync the Store with its Proxy after every edit to one of its Records.\nDefaults to false.</p>\n",
        "linenr": 61,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-clearOnLoad",
        "shortDoc": "Remove previously existing child nodes before loading. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "clearOnLoad",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Remove previously existing child nodes before loading. Default to true.</p>\n",
        "linenr": 42,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootId",
        "shortDoc": "The default root id. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "defaultRootId",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The default root id. Defaults to 'root'</p>\n",
        "linenr": 55,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-defaultRootProperty",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "defaultRootProperty",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The root property to specify on the reader if one is not explicitly defined.</p>\n",
        "linenr": 61,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-fields",
        "shortDoc": "This may be used in place of specifying a model configuration. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>This may be used in place of specifying a model configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the model config.</p>\n",
        "linenr": 124,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-folderSort",
        "shortDoc": "Set to true to automatically prepend a leaf sorter. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "folderSort",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Set to true to automatically prepend a leaf sorter. Defaults to <code>undefined</code>.</p>\n",
        "linenr": 67,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Observable.html#Ext-util-Observable-cfg-listeners",
        "shortDoc": "A config object containing one or more event handlers to be added to this object during initialization. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "name": "listeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>A config object containing one or more event handlers to be added to this object during initialization. This\nshould be a valid listeners config object as specified in the <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple\nhandlers at once.</p>\n\n<p><strong>DOM events from ExtJS <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></strong></p>\n\n<p>While <em>some</em> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this is usually\nonly done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s <strong><code><a href=\"#/api/Ext.view.View-event-itemclick\" rel=\"Ext.view.View-event-itemclick\" class=\"docClass\">itemclick</a></code></strong> event passing the node clicked on. To access DOM events directly from a\nchild element of a Component, we need to specify the <code>element</code> option to identify the Component property to add a\nDOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 102,
        "html_filename": "Observable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-nodeParam",
        "shortDoc": "The name of the parameter sent to the server which contains the identifier of the node. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "nodeParam",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The name of the parameter sent to the server which contains the identifier of the node.\nDefaults to 'node'.</p>\n",
        "linenr": 48,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "String/Ext.data.proxy.Proxy/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-proxy",
        "shortDoc": "The Proxy to use for this Store. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "proxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.TreeStore-method-setProxy\" rel=\"Ext.data.TreeStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n",
        "linenr": 49,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "TreeStore.html#Ext-data-TreeStore-cfg-root",
        "shortDoc": "The root node for this store. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>The root node for this store. For example:</p>\n\n<pre><code>root: {\n    expanded: true, \n    text: \"My Root\",\n    children: [\n        { text: \"Child 1\", leaf: true },\n        { text: \"Child 2\", expanded: true, children: [\n            { text: \"GrandChild\", leaf: true }\n        ] }\n    ]\n}\n</code></pre>\n\n<p>Setting the <code>root</code> config option is the same as calling <a href=\"#/api/Ext.data.TreeStore-method-setRootNode\" rel=\"Ext.data.TreeStore-method-setRootNode\" class=\"docClass\">setRootNode</a>.</p>\n",
        "linenr": 24,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-storeId",
        "shortDoc": "Optional unique identifier for this store. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "storeId",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Optional unique identifier for this store. If present, this Store will be registered with\nthe <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Ext.data.StoreManager</a>, making it easy to reuse elsewhere. Defaults to undefined.</p>\n",
        "linenr": 119,
        "html_filename": "AbstractStore.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addEvents",
        "shortDoc": "Adds the specified events to the list of events which this Observable may fire. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "addEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds the specified events to the list of events which this Observable may fire.</p>\n",
        "linenr": 494,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addListener",
        "shortDoc": "Appends an event handler to this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "name": "addListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Appends an event handler to this object.</p>\n",
        "linenr": 278,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-addManagedListener",
        "shortDoc": "Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "addManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 156,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-capture",
        "shortDoc": "Starts capture on the specified Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to capture events from.</p>\n",
            "name": "o"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call when an event is fired.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to\nthe Observable firing the event.</p>\n",
            "name": "scope"
          }
        ],
        "name": "capture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Starts capture on the specified Observable. All events will be passed to the supplied function with the event\nname + standard signature of the event <strong>before</strong> the event is fired. If the supplied function returns false,\nthe event will not fire.</p>\n",
        "linenr": 54,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearListeners",
        "shortDoc": "Removes all listeners for this object including the managed listeners ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all listeners for this object including the managed listeners</p>\n",
        "linenr": 425,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-clearManagedListeners",
        "shortDoc": "Removes all managed listeners for this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "clearManagedListeners",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes all managed listeners for this object.</p>\n",
        "linenr": 454,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-enableBubble",
        "shortDoc": "Enables events fired by this Observable to bubble up an owner hierarchy by calling this.getBubbleTarget() if\npresent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The event name to bubble, or an Array of event names.</p>\n",
            "name": "events"
          }
        ],
        "name": "enableBubble",
        "owner": "Ext.util.Observable",
        "doc": "<p>Enables events fired by this Observable to bubble up an owner hierarchy by calling <code>this.getBubbleTarget()</code> if\npresent. There is no implementation in the Observable base class.</p>\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers.\nSee <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>. The default implementation in <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the\nComponent's immediate owner. But if a known target is required, this can be overridden to access the\nrequired target more quickly.</p>\n\n<p>Example:</p>\n\n<pre><code>Ext.override(Ext.form.field.Base, {\n    //  Add functionality to Field's initComponent to enable the change event to bubble\n    initComponent : Ext.Function.createSequence(Ext.form.field.Base.prototype.initComponent, function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field's events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n",
        "linenr": 609,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-fireEvent",
        "shortDoc": "Fires the specified event with the passed parameters (minus the event name, plus the options object passed\nto addList...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "fireEvent",
        "owner": "Ext.util.Observable",
        "doc": "<p>Fires the specified event with the passed parameters (minus the event name, plus the <code>options</code> object passed\nto <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>).</p>\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>) by\ncalling <a href=\"#/api/Ext.data.TreeStore-method-enableBubble\" rel=\"Ext.data.TreeStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n",
        "linenr": 233,
        "return": {
          "type": "Boolean",
          "doc": "<p>returns false if any of the handlers return false otherwise it returns true.</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getNewRecords",
        "shortDoc": "Returns all Model instances that are either currently a phantom (e.g. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "getNewRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that are either currently a phantom (e.g. have no id), or have an ID but have not\nyet been saved on this Store (this happens when adding a non-phantom record from another Store into this one)</p>\n",
        "linenr": 450,
        "return": {
          "type": "Array",
          "doc": "<p>The Model instances</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TreeStore.html#Ext-data-TreeStore-method-getNodeById",
        "shortDoc": "Returns the record node by id ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "id"
          }
        ],
        "name": "getNodeById",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Returns the record node by id</p>\n",
        "linenr": 409,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "\n"
        },
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getProxy",
        "shortDoc": "Returns the proxy currently attached to this proxy instance ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "getProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns the proxy currently attached to this proxy instance</p>\n",
        "linenr": 305,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The Proxy instance</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getRemovedRecords",
        "shortDoc": "Returns any records that have been removed from the store but not yet destroyed on the proxy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "getRemovedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns any records that have been removed from the store but not yet destroyed on the proxy.</p>\n",
        "linenr": 476,
        "return": {
          "type": "Array",
          "doc": "<p>The removed Model instances</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TreeStore.html#Ext-data-TreeStore-method-getRootNode",
        "shortDoc": "Returns the root node for this tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [

        ],
        "name": "getRootNode",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Returns the root node for this tree.</p>\n",
        "linenr": 401,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "\n"
        },
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-getUpdatedRecords",
        "shortDoc": "Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "getUpdatedRecords",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns all Model instances that have been updated in the Store but not yet synchronized with the Proxy</p>\n",
        "linenr": 459,
        "return": {
          "type": "Array",
          "doc": "<p>The updated Model instances</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-hasListener",
        "shortDoc": "Checks to see if this object has any listeners for a specified event ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the event to check for</p>\n",
            "name": "eventName"
          }
        ],
        "name": "hasListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Checks to see if this object has any listeners for a specified event</p>\n",
        "linenr": 530,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the event is being listened for, else false</p>\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
        "shortDoc": "Performs initialization of this mixin. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "params": [

        ],
        "name": "initSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
        "linenr": 36,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Sortable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-isLoading",
        "shortDoc": "Returns true if the Store is currently performing a load operation ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "isLoading",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Returns true if the Store is currently performing a load operation</p>\n",
        "linenr": 715,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Store is currently loading</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TreeStore.html#Ext-data-TreeStore-method-load",
        "shortDoc": "Loads the Store using its configured proxy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object. This is passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>\nobject that is created and then sent to the proxy's <a href=\"#/api/Ext.data.proxy.Proxy-method-read\" rel=\"Ext.data.proxy.Proxy-method-read\" class=\"docClass\">Ext.data.proxy.Proxy.read</a> function.\nThe options can also contain a node, which indicates which node is to be loaded. If not specified, it will\ndefault to the root node.</p>\n",
            "name": "options"
          }
        ],
        "name": "load",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Loads the Store using its configured <a href=\"#/api/Ext.data.TreeStore-cfg-proxy\" rel=\"Ext.data.TreeStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
        "linenr": 417,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mon",
        "shortDoc": "Shorthand for addManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "mon",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addManagedListener\" rel=\"Ext.data.TreeStore-method-addManagedListener\" class=\"docClass\">addManagedListener</a>.</p>\n\n<p>Adds listeners to any Observable object (or Element) which are automatically removed when this Component is\ndestroyed.</p>\n",
        "linenr": 681,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeManagedListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-mun",
        "shortDoc": "Shorthand for removeManagedListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "mun",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeManagedListener\" rel=\"Ext.data.TreeStore-method-removeManagedListener\" class=\"docClass\">removeManagedListener</a>.</p>\n\n<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 687,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-observe",
        "shortDoc": "Sets observability on the passed class constructor. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The class constructor to make observable.</p>\n",
            "name": "c"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
            "name": "listeners"
          }
        ],
        "name": "observe",
        "owner": "Ext.util.Observable",
        "doc": "<p>Sets observability on the passed class constructor.</p>\n\n<p>This makes any event fired on any instance of the passed class also fire a single event through\nthe <strong>class</strong> allowing for central handling of events on many instances at once.</p>\n\n<p>Usage:</p>\n\n<pre><code>Ext.util.Observable.observe(Ext.data.Connection);\nExt.data.Connection.on('beforerequest', function(con, options) {\n    console.log('Ajax request made to ' + options.url);\n});\n</code></pre>\n",
        "linenr": 69,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "addListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-on",
        "shortDoc": "Shorthand for addListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
            "doc": "<p>The method the event invokes.  Will be called with arguments given to\n<a href=\"#/api/Ext.data.TreeStore-method-fireEvent\" rel=\"Ext.data.TreeStore-method-fireEvent\" class=\"docClass\">fireEvent</a> plus the <code>options</code> parameter described below.</p>\n",
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
        "name": "on",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n\n<p>Appends an event handler to this object.</p>\n",
        "linenr": 669,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-relayEvents",
        "shortDoc": "Relays selected events from the specified Observable as if the events were fired by this. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "relayEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Relays selected events from the specified Observable as if the events were fired by <code>this</code>.</p>\n",
        "linenr": 573,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-releaseCapture",
        "shortDoc": "Removes all added captures from the Observable. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Observable",
            "optional": false,
            "doc": "<p>The Observable to release</p>\n",
            "name": "o"
          }
        ],
        "name": "releaseCapture",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes <strong>all</strong> added captures from the Observable.</p>\n",
        "linenr": 44,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-removeAll",
        "shortDoc": "Removes all records from the store. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "removeAll",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Removes all records from the store. This method does a \"fast remove\",\nindividual remove events are not called. The <a href=\"#/api/Ext.data.TreeStore-event-clear\" rel=\"Ext.data.TreeStore-event-clear\" class=\"docClass\">clear</a> event is\nfired upon completion.</p>\n",
        "linenr": 705,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeListener",
        "shortDoc": "Removes an event handler. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "removeListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes an event handler.</p>\n",
        "linenr": 392,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-removeManagedListener",
        "shortDoc": "Removes listeners that were added by the mon method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
        "name": "removeManagedListener",
        "owner": "Ext.util.Observable",
        "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.TreeStore-method-mon\" rel=\"Ext.data.TreeStore-method-mon\" class=\"docClass\">mon</a> method.</p>\n",
        "linenr": 197,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-resumeEvents",
        "shortDoc": "Resumes firing events (see suspendEvents). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [

        ],
        "name": "resumeEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Resumes firing events (see <a href=\"#/api/Ext.data.TreeStore-method-suspendEvents\" rel=\"Ext.data.TreeStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>).</p>\n\n<p>If events were suspended using the <code>**queueSuspended**</code> parameter, then all events fired\nduring event suspension will be sent to any listeners now.</p>\n",
        "linenr": 554,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-setProxy",
        "shortDoc": "Sets the Store's Proxy by string, config object or Proxy instance ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [
          {
            "type": "String|Object|Ext.data.proxy.Proxy",
            "optional": false,
            "doc": "<p>The new Proxy, which can be either a type string, a configuration object\nor an <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a> instance</p>\n",
            "name": "proxy"
          }
        ],
        "name": "setProxy",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the Store's Proxy by string, config object or Proxy instance</p>\n",
        "linenr": 276,
        "return": {
          "type": "Ext.data.proxy.Proxy",
          "doc": "<p>The attached Proxy object</p>\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "TreeStore.html#Ext-data-TreeStore-method-setRootNode",
        "shortDoc": "Sets the root node for this store. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Model/Ext.data.NodeInterface/Object",
            "optional": false,
            "doc": "\n",
            "name": "root"
          }
        ],
        "name": "setRootNode",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Sets the root node for this store.  See also the <a href=\"#/api/Ext.data.TreeStore-cfg-root\" rel=\"Ext.data.TreeStore-cfg-root\" class=\"docClass\">root</a> config option.</p>\n",
        "linenr": 364,
        "return": {
          "type": "Ext.data.NodeInterface",
          "doc": "<p>The new root</p>\n"
        },
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Sortable.html#Ext-util-Sortable-method-sort",
        "shortDoc": "Sorts the data in the Store by one or more of its properties. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
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
        "name": "sort",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates the actual\nsorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n     </code></pre>\n\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n\n",
        "linenr": 58,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Sortable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-suspendEvents",
        "shortDoc": "Suspends the firing of all events. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events.</p>\n",
            "name": "queueSuspended"
          }
        ],
        "name": "suspendEvents",
        "owner": "Ext.util.Observable",
        "doc": "<p>Suspends the firing of all events. (see <a href=\"#/api/Ext.data.TreeStore-method-resumeEvents\" rel=\"Ext.data.TreeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
        "linenr": 541,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractStore.html#Ext-data-AbstractStore-method-sync",
        "shortDoc": "Synchronizes the Store with its Proxy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [

        ],
        "name": "sync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Synchronizes the Store with its Proxy. This asks the Proxy to batch together any new, updated\nand deleted records in the store, updating the Store's internal representation of the records\nas each operation completes.</p>\n",
        "linenr": 546,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": {
          "tagname": "alias",
          "cls": "Ext.util.Observable",
          "doc": null,
          "owner": "removeListener"
        },
        "protected": false,
        "tagname": "method",
        "href": "Observable.html#Ext-util-Observable-method-un",
        "shortDoc": "Shorthand for removeListener. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Observable.js",
        "private": false,
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
            "doc": "<p>The handler to remove. <strong>This must be a reference to the function passed into the\n<a href=\"#/api/Ext.data.TreeStore-method-addListener\" rel=\"Ext.data.TreeStore-method-addListener\" class=\"docClass\">addListener</a> call.</strong></p>\n",
            "name": "handler"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope originally specified for the handler.</p>\n",
            "name": "scope"
          }
        ],
        "name": "un",
        "owner": "Ext.util.Observable",
        "doc": "<p>Shorthand for <a href=\"#/api/Ext.data.TreeStore-method-removeListener\" rel=\"Ext.data.TreeStore-method-removeListener\" class=\"docClass\">removeListener</a>.</p>\n\n<p>Removes an event handler.</p>\n",
        "linenr": 675,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Observable.html"
      }
    ],
    "property": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Sortable.html#Ext-util-Sortable-property-",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The property in each item that contains the data to sort.</p>\n",
        "linenr": 31,
        "html_filename": "Sortable.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-batchUpdateMode",
        "shortDoc": "Sets the updating behavior based on batch synchronization. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "batchUpdateMode",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Sets the updating behavior based on batch synchronization. 'operation' (the default) will update the Store's\ninternal representation of the data after each operation of the batch has completed, 'complete' will wait until\nthe entire batch has been completed before updating the Store's data. 'complete' is a good choice for local\nstorage proxies, 'operation' is better for remote proxies, where there is a comparatively high latency.</p>\n",
        "linenr": 67,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-defaultProxyType",
        "shortDoc": "The string type of the Proxy to create if none is specified. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "defaultProxyType",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The string type of the Proxy to create if none is specified. This defaults to creating a <a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">memory proxy</a>.</p>\n",
        "linenr": 102,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "defaultSortDirection",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
        "linenr": 20,
        "html_filename": "Sortable.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "TreeStore.html#Ext-data-TreeStore-property-fields",
        "shortDoc": "If we have no fields declare for the store, add some defaults. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "name": "fields",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>If we have no fields declare for the store, add some defaults.\nThese will be ignored if a model is explicitly specified.</p>\n",
        "linenr": 80,
        "html_filename": "TreeStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filterOnLoad",
        "shortDoc": "If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "filterOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if remoteFilter is true</p>\n",
        "linenr": 77,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-filters",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "filters",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Filter\" rel=\"Ext.util.Filter\" class=\"docClass\">Filters</a> currently applied to this Store</p>\n",
        "linenr": 266,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-isDestroyed",
        "shortDoc": "True if the Store has already been destroyed via destroyStore. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "isDestroyed",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>True if the Store has already been destroyed via destroyStore. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n",
        "linenr": 109,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Sortable.html#Ext-util-Sortable-property-isSortable",
        "shortDoc": "Flag denoting that this object is sortable. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "isSortable",
        "owner": "Ext.util.Sortable",
        "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
        "linenr": 13,
        "html_filename": "Sortable.html"
      },
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractStore.html#Ext-data-AbstractStore-property-sortOnLoad",
        "shortDoc": "If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "name": "sortOnLoad",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if remoteSort is true</p>\n",
        "linenr": 85,
        "html_filename": "AbstractStore.html"
      },
      {
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Sortable.html#Ext-util-Sortable-property-sorters",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sortable.js",
        "private": false,
        "name": "sorters",
        "owner": "Ext.util.Sortable",
        "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
        "linenr": 44,
        "html_filename": "Sortable.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-add",
        "shortDoc": "Fired when a Model instance has been added to this Store ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "add",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired when a Model instance has been added to this Store</p>\n",
        "linenr": 141,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-append",
        "shortDoc": "Fires when a new child node is appended to a node in this store's tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The newly appended node</p>\n",
            "name": "node"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index of the newly appended node</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "append",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a new child node is appended to a node in this store's tree.</p>\n",
        "linenr": 95,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeappend",
        "shortDoc": "Fires before a new child is appended to a node in this store's tree, return false to cancel the append. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be appended</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeappend",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a new child is appended to a node in this store's tree, return false to cancel the append.</p>\n",
        "linenr": 135,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforecollapse",
        "shortDoc": "Fires before this node is collapsed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforecollapse",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before this node is collapsed.</p>\n",
        "linenr": 195,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeexpand",
        "shortDoc": "Fires before this node is expanded. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeexpand",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before this node is expanded.</p>\n",
        "linenr": 188,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeinsert",
        "shortDoc": "Fires before a new child is inserted in a node in this store's tree, return false to cancel the insert. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node is being inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeinsert",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a new child is inserted in a node in this store's tree, return false to cancel the insert.</p>\n",
        "linenr": 164,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforeload",
        "shortDoc": "Event description ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "beforeload",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Event description</p>\n",
        "linenr": 181,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforemove",
        "shortDoc": "Fires before a node is moved to a new location in the store's tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node being moved</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent of the node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent the node is moving to</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it is being moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforemove",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a node is moved to a new location in the store's tree. Return false to cancel the move.</p>\n",
        "linenr": 153,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-beforeremove",
        "shortDoc": "Fires before a child is removed from a node in this store's tree, return false to cancel the remove. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node to be removed</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "beforeremove",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires before a child is removed from a node in this store's tree, return false to cancel the remove.</p>\n",
        "linenr": 144,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-beforesync",
        "shortDoc": "Called before a call to sync is executed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "beforesync",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Called before a call to <a href=\"#/api/Ext.data.TreeStore-method-sync\" rel=\"Ext.data.TreeStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n",
        "linenr": 198,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-clear",
        "shortDoc": "Fired after the removeAll method is called. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "clear",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fired after the <a href=\"#/api/Ext.data.TreeStore-method-removeAll\" rel=\"Ext.data.TreeStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n",
        "linenr": 204,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-collapse",
        "shortDoc": "Fires when this node is collapsed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The collapsing node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "collapse",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when this node is collapsed.</p>\n",
        "linenr": 181,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-datachanged",
        "shortDoc": "Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "datachanged",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires whenever the records in the Store have changed in some way - this could include adding or removing records,\nor updating the data in existing records</p>\n",
        "linenr": 173,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-expand",
        "shortDoc": "Fires when this node is expanded. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The expanding node</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "expand",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when this node is expanded.</p>\n",
        "linenr": 174,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-insert",
        "shortDoc": "Fires when a new child node is inserted in a node in this store's tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node inserted</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node the node was inserted before</p>\n",
            "name": "refNode"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "insert",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a new child node is inserted in a node in this store's tree.</p>\n",
        "linenr": 125,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-load",
        "shortDoc": "Fires whenever the store reads data from a remote data source. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Store",
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
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "load",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires whenever the store reads data from a remote data source.</p>\n",
        "linenr": 189,
        "html_filename": "AbstractStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-move",
        "shortDoc": "Fires when a node is moved to a new location in the store's tree ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node moved</p>\n",
            "name": "node"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The old parent of this node</p>\n",
            "name": "oldParent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The new parent of this node</p>\n",
            "name": "newParent"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The index it was moved to</p>\n",
            "name": "index"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "move",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a node is moved to a new location in the store's tree</p>\n",
        "linenr": 114,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-remove",
        "shortDoc": "Fires when a child node is removed from a node in this store's tree. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Tree",
            "optional": false,
            "doc": "<p>The owner tree</p>\n",
            "name": "tree"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The parent node</p>\n",
            "name": "parent"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The child node removed</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "remove",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when a child node is removed from a node in this store's tree.</p>\n",
        "linenr": 105,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-rootchange",
        "shortDoc": "Fires when the root node on this TreeStore is changed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.TreeStore",
            "optional": false,
            "doc": "<p>This TreeStore</p>\n",
            "name": "store"
          },
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>new root node.</p>\n",
            "name": "The"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "rootchange",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when the root node on this TreeStore is changed.</p>\n",
        "linenr": 237,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "TreeStore.html#Ext-data-TreeStore-event-sort",
        "shortDoc": "Fires when this TreeStore is sorted. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
        "private": false,
        "params": [
          {
            "type": "Node",
            "optional": false,
            "doc": "<p>The node that is sorted.</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "sort",
        "owner": "Ext.data.TreeStore",
        "doc": "<p>Fires when this TreeStore is sorted.</p>\n",
        "linenr": 202,
        "html_filename": "TreeStore.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "AbstractStore.html#Ext-data-AbstractStore-event-update",
        "shortDoc": "Fires when a Record has been updated ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/AbstractStore.js",
        "private": false,
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
        "name": "update",
        "owner": "Ext.data.AbstractStore",
        "doc": "<p>Fires when a Record has been updated</p>\n",
        "linenr": 159,
        "html_filename": "AbstractStore.html"
      }
    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.data.AbstractStore"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "TreeStore.html#Ext-data-TreeStore",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/TreeStore.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.TreeStore",
  "doc": "<p>The TreeStore is a store implementation that is backed by by an <a href=\"#/api/Ext.data.Tree\" rel=\"Ext.data.Tree\" class=\"docClass\">Ext.data.Tree</a>.\nIt provides convenience methods for loading nodes, as well as the ability to use\nthe hierarchical tree structure combined with a store. This class is generally used\nin conjunction with <a href=\"#/api/Ext.tree.Panel\" rel=\"Ext.tree.Panel\" class=\"docClass\">Ext.tree.Panel</a>. This class also relays many events from\nthe Tree for convenience.</p>\n\n<h1>Using Models</h1>\n\n<p>If no Model is specified, an implicit model will be created that implements <a href=\"#/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a>.\nThe standard Tree fields will also be copied onto the Model for maintaining their state.</p>\n\n<h1>Reading Nested Data</h1>\n\n<p>For the tree to read nested data, the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> must be configured with a root property,\nso the reader can find nested data for each node. If a root is not specified, it will default to\n'children'.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "TreeStore.html",
  "extends": "Ext.data.AbstractStore"
});