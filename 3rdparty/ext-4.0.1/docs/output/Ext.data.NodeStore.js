Ext.data.JsonP.Ext_data_NodeStore({
  "tagname": "class",
  "name": "Ext.data.NodeStore",
  "doc": "<p>Node Store</p>\n",
  "extends": "Ext.data.AbstractStore",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
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
      "name": "fields",
      "member": "Ext.data.AbstractStore",
      "type": "Array",
      "doc": "<p>This may be used in place of specifying a <a href=\"#/api/Ext.data.NodeStore--model\" rel=\"Ext.data.NodeStore--model\" class=\"docClass\">model</a> configuration. The fields should be a\nset of <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> configuration objects. The store will automatically create a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>\nwith these fields. In general this configuration option should be avoided, it exists for the purposes of\nbackwards compatibility. For anything more complicated, such as specifying a particular id property or\nassocations, a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> should be defined and specified for the <a href=\"#/api/Ext.data.NodeStore--model\" rel=\"Ext.data.NodeStore--model\" class=\"docClass\">model</a> config.</p>\n",
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
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "node",
      "member": "Ext.data.NodeStore",
      "type": "Ext.data.Record",
      "doc": "<p>The Record you want to bind this Store to. Note that\nthis record will be decorated with the <a href=\"#/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a> if this is not the\ncase yet.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeStore.js",
      "linenr": 12,
      "html_filename": "NodeStore.html",
      "href": "NodeStore.html#Ext-data-NodeStore-cfg-node",
      "shortDoc": "The Record you want to bind this Store to. Note that\nthis record will be decorated with the Ext.data.NodeInterface if..."
    },
    {
      "tagname": "cfg",
      "name": "proxy",
      "member": "Ext.data.AbstractStore",
      "type": "String/Ext.data.proxy.Proxy/Object",
      "doc": "<p>The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see <a href=\"#/api/Ext.data.NodeStore-method-setProxy\" rel=\"Ext.data.NodeStore-method-setProxy\" class=\"docClass\">setProxy</a> for details.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 51,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-cfg-proxy",
      "shortDoc": "The Proxy to use for this Store. This can be either a string, a config\nobject or a Proxy instance - see setProxy for ..."
    },
    {
      "tagname": "cfg",
      "name": "recursive",
      "member": "Ext.data.NodeStore",
      "type": "Boolean",
      "doc": "<p>Set this to true if you want this NodeStore to represent\nall the descendents of the node in its flat data collection. This is useful for\nrendering a tree structure to a DataView and is being used internally by\nthe TreeView. Any records that are moved, removed, inserted or appended to the\nnode at any depth below the node this store is bound to will be automatically\nupdated in this Store's internal flat data structure.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeStore.js",
      "linenr": 19,
      "html_filename": "NodeStore.html",
      "href": "NodeStore.html#Ext-data-NodeStore-cfg-recursive",
      "shortDoc": "Set this to true if you want this NodeStore to represent\nall the descendents of the node in its flat data collection...."
    },
    {
      "tagname": "cfg",
      "name": "rootVisible",
      "member": "Ext.data.NodeStore",
      "type": "Boolean",
      "doc": "<p><tt>false</tt> to not include the root node in this Stores collection (defaults to <tt>true</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeStore.js",
      "linenr": 29,
      "html_filename": "NodeStore.html",
      "href": "NodeStore.html#Ext-data-NodeStore-cfg-rootVisible"
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
      "name": "fireEvent",
      "member": "Ext.util.Observable",
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.data.NodeStore-method-enableBubble\" rel=\"Ext.data.NodeStore-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "load",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Loads the Store using its configured <a href=\"#/api/Ext.data.NodeStore-cfg-proxy\" rel=\"Ext.data.NodeStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>Optional config object. This is passed into the <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Operation</a>\nobject that is created and then sent to the proxy's <a href=\"#/api/Ext.data.proxy.Proxy-method-read\" rel=\"Ext.data.proxy.Proxy-method-read\" class=\"docClass\">Ext.data.proxy.Proxy.read</a> function</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 609,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-load",
      "shortDoc": "<p>Loads the Store using its configured <a href=\"#/api/Ext.data.NodeStore-cfg-proxy\" rel=\"Ext.data.NodeStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
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
      "name": "removeAll",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Removes all records from the store. This method does a \"fast remove\",\nindividual remove events are not called. The <a href=\"#/api/Ext.data.NodeStore-event-clear\" rel=\"Ext.data.NodeStore-event-clear\" class=\"docClass\">clear</a> event is\nfired upon completion.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 707,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-method-removeAll",
      "shortDoc": "Removes all records from the store. This method does a \"fast remove\",\nindividual remove events are not called. The cl..."
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.NodeStore--mon\" rel=\"Ext.data.NodeStore--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.data.NodeStore--mon\" rel=\"Ext.data.NodeStore--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.data.NodeStore-method-suspendEvents\" rel=\"Ext.data.NodeStore-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.NodeStore-method-resumeEvents\" rel=\"Ext.data.NodeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.data.NodeStore-method-resumeEvents\" rel=\"Ext.data.NodeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.data.NodeStore-method-resumeEvents\" rel=\"Ext.data.NodeStore-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
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
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.NodeStore-method-removeListener\" rel=\"Ext.data.NodeStore-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.data.NodeStore-method-addListener\" rel=\"Ext.data.NodeStore-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.data.NodeStore-method-removeListener\" rel=\"Ext.data.NodeStore-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
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
      "doc": "<p>If true, any filters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, ignored if <a href=\"#/api/Ext.data.NodeStore--remoteFilter\" rel=\"Ext.data.NodeStore--remoteFilter\" class=\"docClass\">remoteFilter</a> is true</p>\n",
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
      "name": "isDestroyed",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>True if the Store has already been destroyed via <a href=\"#/api/Ext.data.NodeStore--destroyStore\" rel=\"Ext.data.NodeStore--destroyStore\" class=\"docClass\">destroyStore</a>. If this is true, the reference to Store should be deleted\nas it will not function correctly any more.</p>\n",
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
      "name": "sortOnLoad",
      "member": "Ext.data.AbstractStore",
      "type": "Boolean",
      "doc": "<p>If true, any sorters attached to this Store will be run after loading data, before the datachanged event is fired.\nDefaults to true, igored if <a href=\"#/api/Ext.data.NodeStore--remoteSort\" rel=\"Ext.data.NodeStore--remoteSort\" class=\"docClass\">remoteSort</a> is true</p>\n",
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
      "name": "beforesync",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Called before a call to <a href=\"#/api/Ext.data.NodeStore-method-sync\" rel=\"Ext.data.NodeStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n",
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
      "shortDoc": "<p>Called before a call to <a href=\"#/api/Ext.data.NodeStore-method-sync\" rel=\"Ext.data.NodeStore-method-sync\" class=\"docClass\">sync</a> is executed. Return false from any listener to cancel the synv</p>\n"
    },
    {
      "tagname": "event",
      "name": "clear",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fired after the <a href=\"#/api/Ext.data.NodeStore-method-removeAll\" rel=\"Ext.data.NodeStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n",
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
      "shortDoc": "<p>Fired after the <a href=\"#/api/Ext.data.NodeStore-method-removeAll\" rel=\"Ext.data.NodeStore-method-removeAll\" class=\"docClass\">removeAll</a> method is called.</p>\n"
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
      "name": "load",
      "member": "Ext.data.AbstractStore",
      "doc": "<p>Fires whenever the store reads data from a remote data source.</p>\n",
      "params": [
        {
          "type": "Ext.data.Store",
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
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/AbstractStore.js",
      "linenr": 191,
      "html_filename": "AbstractStore.html",
      "href": "AbstractStore.html#Ext-data-AbstractStore-event-load",
      "shortDoc": "<p>Fires whenever the store reads data from a remote data source.</p>\n"
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/NodeStore.js",
  "linenr": 1,
  "html_filename": "NodeStore.html",
  "href": "NodeStore.html#Ext-data-NodeStore",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.AbstractStore"
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