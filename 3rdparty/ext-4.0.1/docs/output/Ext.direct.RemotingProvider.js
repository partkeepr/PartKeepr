Ext.data.JsonP.Ext_direct_RemotingProvider({
  "tagname": "class",
  "name": "Ext.direct.RemotingProvider",
  "doc": "<p>The <a href=\"#/api/Ext.direct.RemotingProvider\" rel=\"Ext.direct.RemotingProvider\" class=\"docClass\">RemotingProvider</a> exposes access to\nserver side methods on the client (a remote procedure call (RPC) type of\nconnection where the client can initiate a procedure on the server).</p>\n\n\n\n\n<p>This allows for code to be organized in a fashion that is maintainable,\nwhile providing a clear path between client and server, something that is\nnot always apparent when using URLs.</p>\n\n\n\n\n<p>To accomplish this the server-side needs to describe what classes and methods\nare available on the client-side. This configuration will typically be\noutputted by the server-side Ext.Direct stack when the API description is built.</p>\n\n",
  "extends": "Ext.direct.JsonProvider",
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
      "name": "actions",
      "member": "Ext.direct.RemotingProvider",
      "type": "Object",
      "doc": "<p>Object literal defining the server side actions and methods. For example, if\nthe Provider is configured with:</p>\n\n<pre><code>\"actions\":{ // each property within the 'actions' object represents a server side Class \n    \"TestAction\":[ // array of methods within each server side Class to be   \n    {              // stubbed out on client\n        \"name\":\"doEcho\", \n        \"len\":1            \n    },{\n        \"name\":\"multiply\",// name of method\n        \"len\":2           // The number of parameters that will be used to create an\n                          // array of data to send to the server side function.\n                          // Ensure the server sends back a Number, not a String. \n    },{\n        \"name\":\"doForm\",\n        \"formHandler\":true, // direct the client to use specialized form handling method \n        \"len\":1\n    }]\n}\n</code></pre>\n\n\n<p>Note that a Store is not required, a server method can be called at any time.\nIn the following example a <b>client side</b> handler is used to call the\nserver side method \"multiply\" in the server-side \"TestAction\" Class:</p>\n\n\n<pre><code>TestAction.multiply(\n    2, 4, // pass two arguments to server, so specify len=2\n    // callback function after the server is called\n    // result: the result returned by the server\n    //      e: <a href=\"#/api/Ext.direct.RemotingEvent\" rel=\"Ext.direct.RemotingEvent\" class=\"docClass\">Ext.direct.RemotingEvent</a> object\n    function(result, e){\n        var t = e.getTransaction();\n        var action = t.action; // server side Class called\n        var method = t.method; // server side method called\n        if(e.status){\n            var answer = Ext.encode(result); // 8\n    \n        }else{\n            var msg = e.message; // failure message\n        }\n    }\n);\n</code></pre>\n\n\n<p>In the example above, the server side \"multiply\" function will be passed two\narguments (2 and 4).  The \"multiply\" method should return the value 8 which will be\navailable as the <tt>result</tt> in the example above.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 34,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-actions",
      "shortDoc": "Object literal defining the server side actions and methods. For example, if\nthe Provider is configured with:\n\n\"actio..."
    },
    {
      "tagname": "cfg",
      "name": "enableBuffer",
      "member": "Ext.direct.RemotingProvider",
      "type": "Number/Boolean",
      "doc": "<p><tt>true</tt> or <tt>false</tt> to enable or disable combining of method\ncalls. If a number is specified this is the amount of time in milliseconds\nto wait before sending a batched request (defaults to <tt>10</tt>).</p>\n\n\n<br><p>Calls which are received within the specified timeframe will be\n\n\n<p>concatenated together and sent in a single request, optimizing the\napplication by reducing the amount of round trips that have to be made\nto the server.</p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 101,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-enableBuffer",
      "shortDoc": "true or false to enable or disable combining of method\ncalls. If a number is specified this is the amount of time in ..."
    },
    {
      "tagname": "cfg",
      "name": "enableUrlEncode",
      "member": "Ext.direct.RemotingProvider",
      "type": "String",
      "doc": "<p>Specify which param will hold the arguments for the method.\nDefaults to <tt>'data'</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 95,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-enableUrlEncode"
    },
    {
      "tagname": "cfg",
      "name": "id",
      "member": "Ext.direct.Provider",
      "type": "String",
      "doc": "<p>The unique id of the provider (defaults to an <a href=\"#/api/Ext-method-id\" rel=\"Ext-method-id\" class=\"docClass\">auto-assigned id</a>).\nYou should assign an id if you need to be able to access the provider later and you do\nnot have an object reference available, for example:</p>\n\n<pre><code>Ext.direct.Manager.addProvider({\n    type: 'polling',\n    url:  'php/poll.php',\n    id:   'poll-provider'\n});     \nvar p = <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a>.<a href=\"#/api/Ext.direct.Manager-method-getProvider\" rel=\"Ext.direct.Manager-method-getProvider\" class=\"docClass\">getProvider</a>('poll-provider');\np.disconnect();\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 29,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-cfg-id",
      "shortDoc": "The unique id of the provider (defaults to an auto-assigned id).\nYou should assign an id if you need to be able to ac..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "maxRetries",
      "member": "Ext.direct.RemotingProvider",
      "type": "Number",
      "doc": "<p>Number of times to re-attempt delivery on failure of a call. Defaults to <tt>1</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 113,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-maxRetries"
    },
    {
      "tagname": "cfg",
      "name": "namespace",
      "member": "Ext.direct.RemotingProvider",
      "type": "String/Object",
      "doc": "<p>Namespace for the Remoting Provider (defaults to the browser global scope of <i>window</i>).\nExplicitly specify the namespace Object, or specify a String to have a\n<a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">namespace created</a> implicitly.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 83,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-namespace",
      "shortDoc": "Namespace for the Remoting Provider (defaults to the browser global scope of window).\nExplicitly specify the namespac..."
    },
    {
      "tagname": "cfg",
      "name": "timeout",
      "member": "Ext.direct.RemotingProvider",
      "type": "Number",
      "doc": "<p>The timeout to use for each request. Defaults to <tt>undefined</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 119,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-timeout"
    },
    {
      "tagname": "cfg",
      "name": "url",
      "member": "Ext.direct.RemotingProvider",
      "type": "String",
      "doc": "<p><b>Required</b>. The url to connect to the <a href=\"#/api/Ext.direct.Manager\" rel=\"Ext.direct.Manager\" class=\"docClass\">Ext.direct.Manager</a> server-side router.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 90,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-cfg-url"
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
      "name": "connect",
      "member": "Ext.direct.Provider",
      "doc": "<p>Abstract methods for subclasses to implement.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 86,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-method-connect",
      "shortDoc": "<p>Abstract methods for subclasses to implement.</p>\n"
    },
    {
      "tagname": "method",
      "name": "createEvent",
      "member": "Ext.direct.JsonProvider",
      "doc": "<p>Create an event from a response object</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The XHR response object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.direct.Event",
        "doc": "<p>The event</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/JsonProvider.js",
      "linenr": 75,
      "html_filename": "JsonProvider.html",
      "href": "JsonProvider.html#Ext-direct-JsonProvider-method-createEvent",
      "shortDoc": "<p>Create an event from a response object</p>\n"
    },
    {
      "tagname": "method",
      "name": "disconnect",
      "member": "Ext.direct.Provider",
      "doc": "<p>Abstract methods for subclasses to implement.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 92,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-method-disconnect",
      "shortDoc": "<p>Abstract methods for subclasses to implement.</p>\n"
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.direct.RemotingProvider-method-enableBubble\" rel=\"Ext.direct.RemotingProvider-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "isConnected",
      "member": "Ext.direct.Provider",
      "doc": "<p>Returns whether or not the server-side is currently connected.\nAbstract method for subclasses to implement.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 78,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-method-isConnected",
      "shortDoc": "<p>Returns whether or not the server-side is currently connected.\nAbstract method for subclasses to implement.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.direct.RemotingProvider--mon\" rel=\"Ext.direct.RemotingProvider--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.direct.RemotingProvider--mon\" rel=\"Ext.direct.RemotingProvider--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.direct.RemotingProvider-method-suspendEvents\" rel=\"Ext.direct.RemotingProvider-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.direct.RemotingProvider-method-resumeEvents\" rel=\"Ext.direct.RemotingProvider-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.direct.RemotingProvider-method-resumeEvents\" rel=\"Ext.direct.RemotingProvider-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.direct.RemotingProvider-method-resumeEvents\" rel=\"Ext.direct.RemotingProvider-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.direct.RemotingProvider-method-removeListener\" rel=\"Ext.direct.RemotingProvider-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.direct.RemotingProvider-method-addListener\" rel=\"Ext.direct.RemotingProvider-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.direct.RemotingProvider-method-removeListener\" rel=\"Ext.direct.RemotingProvider-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforecall",
      "member": "Ext.direct.RemotingProvider",
      "doc": "<p>Fires immediately before the client-side sends off the RPC call.\nBy returning false from an event handler you can prevent the call from\nexecuting.</p>\n",
      "params": [
        {
          "type": "Ext.direct.RemotingProvider",
          "name": "provider",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.direct.Transaction",
          "name": "transaction",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "meta",
          "doc": "<p>The meta data</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 129,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-event-beforecall",
      "shortDoc": "Fires immediately before the client-side sends off the RPC call.\nBy returning false from an event handler you can pre..."
    },
    {
      "tagname": "event",
      "name": "call",
      "member": "Ext.direct.RemotingProvider",
      "doc": "<p>Fires immediately after the request to the server-side is sent. This does\nNOT fire after the response has come back from the call.</p>\n",
      "params": [
        {
          "type": "Ext.direct.RemotingProvider",
          "name": "provider",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.direct.Transaction",
          "name": "transaction",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "meta",
          "doc": "<p>The meta data</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
      "linenr": 139,
      "html_filename": "RemotingProvider.html",
      "href": "RemotingProvider.html#Ext-direct-RemotingProvider-event-call",
      "shortDoc": "Fires immediately after the request to the server-side is sent. This does\nNOT fire after the response has come back f..."
    },
    {
      "tagname": "event",
      "name": "connect",
      "member": "Ext.direct.Provider",
      "doc": "<p>Fires when the Provider connects to the server-side</p>\n",
      "params": [
        {
          "type": "Ext.direct.Provider",
          "name": "provider",
          "doc": "<p>The <a href=\"#/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 50,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-event-connect",
      "shortDoc": "<p>Fires when the Provider connects to the server-side</p>\n"
    },
    {
      "tagname": "event",
      "name": "data",
      "member": "Ext.direct.Provider",
      "doc": "<p>Fires when the Provider receives data from the server-side</p>\n",
      "params": [
        {
          "type": "Ext.direct.Provider",
          "name": "provider",
          "doc": "<p>The <a href=\"#/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n",
          "optional": false
        },
        {
          "type": "event",
          "name": "e",
          "doc": "<p>The Ext.Direct.Event type that occurred.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 62,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-event-data",
      "shortDoc": "<p>Fires when the Provider receives data from the server-side</p>\n"
    },
    {
      "tagname": "event",
      "name": "disconnect",
      "member": "Ext.direct.Provider",
      "doc": "<p>Fires when the Provider disconnects from the server-side</p>\n",
      "params": [
        {
          "type": "Ext.direct.Provider",
          "name": "provider",
          "doc": "<p>The <a href=\"#/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 56,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-event-disconnect",
      "shortDoc": "<p>Fires when the Provider disconnects from the server-side</p>\n"
    },
    {
      "tagname": "event",
      "name": "exception",
      "member": "Ext.direct.Provider",
      "doc": "<p>Fires when the Provider receives an exception from the server-side</p>\n",
      "params": [

      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/Provider.js",
      "linenr": 69,
      "html_filename": "Provider.html",
      "href": "Provider.html#Ext-direct-Provider-event-exception",
      "shortDoc": "<p>Fires when the Provider receives an exception from the server-side</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/direct/RemotingProvider.js",
  "linenr": 1,
  "html_filename": "RemotingProvider.html",
  "href": "RemotingProvider.html#Ext-direct-RemotingProvider",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.direct.Provider",
    "Ext.direct.JsonProvider"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});