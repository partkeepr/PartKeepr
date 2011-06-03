Ext.data.JsonP.Ext_Ajax({
  "tagname": "class",
  "name": "Ext.Ajax",
  "doc": "<p>A singleton instance of an <a href=\"#/api/Ext.data.Connection\" rel=\"Ext.data.Connection\" class=\"docClass\">Ext.data.Connection</a>. This class\nis used to communicate with your server side code. It can be used as follows:</p>\n\n<pre><code>Ext.Ajax.request({\n    url: 'page.php',\n    params: {\n        id: 1\n    },\n    success: function(response){\n        var text = response.responseText;\n        // process server response here\n    }\n});\n</code></pre>\n\n<p>Default options for all requests can be set by changing a property on the <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> class:</p>\n\n<pre><code>Ext.Ajax.timeout = 60000; // 60 seconds\n</code></pre>\n\n<p>Any options specified in the request method for the Ajax request will override any\ndefaults set on the <a href=\"#/api/Ext.Ajax\" rel=\"Ext.Ajax\" class=\"docClass\">Ext.Ajax</a> class. In the code sample below, the timeout for the\nrequest will be 60 seconds.</p>\n\n<pre><code>Ext.Ajax.timeout = 120000; // 120 seconds\nExt.Ajax.request({\n    url: 'page.aspx',\n    timeout: 60000\n});\n</code></pre>\n\n<p>In general, this class will be used for all Ajax requests in your application.\nThe main reason for creating a separate <a href=\"#/api/Ext.data.Connection\" rel=\"Ext.data.Connection\" class=\"docClass\">Ext.data.Connection</a> is for a\nseries of requests that share common settings that are different to all other\nrequests in the application.</p>\n",
  "extends": "Ext.data.Connection",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "disableCaching",
      "member": "Ext.data.Connection",
      "type": "Boolean",
      "doc": "<p>(Optional) True to add a unique cache-buster param to GET requests. (defaults to true)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 48,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-cfg-disableCaching"
    },
    {
      "tagname": "cfg",
      "name": "disableCachingParam",
      "member": "Ext.data.Connection",
      "type": "String",
      "doc": "<p>(Optional) Change the parameter which is sent went disabling caching\nthrough a cache buster. Defaults to '_dc'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 53,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-cfg-disableCachingParam"
    },
    {
      "tagname": "cfg",
      "name": "extraParams",
      "member": "Ext.data.Connection",
      "type": "Object",
      "doc": "<p>(Optional) Any parameters to be appended to the request.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 64,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-cfg-extraParams"
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "timeout",
      "member": "Ext.data.Connection",
      "type": "Number",
      "doc": "<p>(Optional) The timeout in milliseconds to be used for requests. (defaults to 30000)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 59,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-cfg-timeout"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "abort",
      "member": "Ext.data.Connection",
      "doc": "<p>Aborts any outstanding request.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "request",
          "doc": "<p>(Optional) defaults to the last request</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 636,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-abort",
      "shortDoc": "<p>Aborts any outstanding request.</p>\n"
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.Ajax-method-enableBubble\" rel=\"Ext.Ajax-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "isLoading",
      "member": "Ext.data.Connection",
      "doc": "<p>Determine whether this object has a request outstanding.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "request",
          "doc": "<p>(Optional) defaults to the last transaction</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if there is an outstanding request.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 622,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-isLoading",
      "shortDoc": "<p>Determine whether this object has a request outstanding.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "parseStatus",
      "member": "Ext.data.Connection",
      "doc": "<p>Check if the response status was successful</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "status",
          "doc": "<p>The status code</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing success/status state</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 732,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-parseStatus",
      "shortDoc": "<p>Check if the response status was successful</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.Ajax--mon\" rel=\"Ext.Ajax--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.Ajax--mon\" rel=\"Ext.Ajax--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "request",
      "member": "Ext.data.Connection",
      "doc": "<p>Sends an HTTP request to a remote server.</p>\n\n\n<p><b>Important:</b> Ajax server requests are asynchronous, and this call will\nreturn before the response has been received. Process any returned data\nin a callback function.</p>\n\n\n<pre><code>Ext.Ajax.request({\nurl: 'ajax_demo/sample.json',\nsuccess: function(response, opts) {\n  var obj = Ext.decode(response.responseText);\n  console.dir(obj);\n},\nfailure: function(response, opts) {\n  console.log('server-side failure with status code ' + response.status);\n}\n});\n</code></pre>\n\n\n<p>To execute a callback function in the correct scope, use the <tt>scope</tt> option.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>An object which may contain the following properties:<ul>\n<li><b>url</b> : String/Function (Optional)<div class=\"sub-desc\">The URL to\nwhich to send the request, or a function to call which returns a URL string. The scope of the\nfunction is specified by the <tt>scope</tt> option. Defaults to the configured\n<tt><a href=\"#/api/Ext.Ajax-property-url\" rel=\"Ext.Ajax-property-url\" class=\"docClass\">url</a></tt>.</div></li>\n<li><b>params</b> : Object/String/Function (Optional)<div class=\"sub-desc\">\nAn object containing properties which are used as parameters to the\nrequest, a url encoded string or a function to call to get either. The scope of the function\nis specified by the <tt>scope</tt> option.</div></li>\n<li><b>method</b> : String (Optional)<div class=\"sub-desc\">The HTTP method to use\nfor the request. Defaults to the configured method, or if no method was configured,\n\"GET\" if no parameters are being sent, and \"POST\" if parameters are being sent.  Note that\nthe method name is case-sensitive and should be all caps.</div></li>\n<li><b>callback</b> : Function (Optional)<div class=\"sub-desc\">The\nfunction to be called upon receipt of the HTTP response. The callback is\ncalled regardless of success or failure and is passed the following\nparameters:<ul>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n<li><b>success</b> : Boolean<div class=\"sub-desc\">True if the request succeeded.</div></li>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">http://www.w3.org/TR/XMLHttpRequest/</a> for details about\naccessing elements of the response.</div></li>\n</ul></div></li>\n<li><a id=\"request-option-success\"></a><b>success</b> : Function (Optional)<div class=\"sub-desc\">The function\nto be called upon success of the request. The callback is passed the following\nparameters:<ul>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.</div></li>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n</ul></div></li>\n<li><b>failure</b> : Function (Optional)<div class=\"sub-desc\">The function\nto be called upon failure of the request. The callback is passed the\nfollowing parameters:<ul>\n<li><b>response</b> : Object<div class=\"sub-desc\">The XMLHttpRequest object containing the response data.</div></li>\n<li><b>options</b> : Object<div class=\"sub-desc\">The parameter to the request call.</div></li>\n</ul></div></li>\n<li><b>scope</b> : Object (Optional)<div class=\"sub-desc\">The scope in\nwhich to execute the callbacks: The \"this\" object for the callback function. If the <tt>url</tt>, or <tt>params</tt> options were\nspecified as functions from which to draw values, then this also serves as the scope for those function calls.\nDefaults to the browser window.</div></li>\n<li><b>timeout</b> : Number (Optional)<div class=\"sub-desc\">The timeout in milliseconds to be used for this request. Defaults to 30 seconds.</div></li>\n<li><b>form</b> : Element/HTMLElement/String (Optional)<div class=\"sub-desc\">The <tt>&lt;form&gt;</tt>\nElement or the id of the <tt>&lt;form&gt;</tt> to pull parameters from.</div></li>\n<li><a id=\"request-option-isUpload\"></a><b>isUpload</b> : Boolean (Optional)<div class=\"sub-desc\"><b>Only meaningful when used\nwith the <tt>form</tt> option</b>.</p>\n\n<p>True if the form object is a file upload (will be set automatically if the form was\nconfigured with <b><tt>enctype</tt></b> \"multipart/form-data\").</p>\n\n\n<p>File uploads are not performed using normal \"Ajax\" techniques, that is they are <b>not</b>\nperformed using XMLHttpRequests. Instead the form is submitted in the standard manner with the\nDOM <tt>&lt;form></tt> element temporarily modified to have its\n<a href=\"http://www.w3.org/TR/REC-html40/present/frames.html#adef-target\">target</a> set to refer\nto a dynamically generated, hidden <tt>&lt;iframe></tt> which is inserted into the document\nbut removed after the return data has been gathered.</p>\n\n\n<p>The server response is parsed by the browser to create the document for the IFRAME. If the\nserver is using JSON to send the return object, then the\n<a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17\">Content-Type</a> header\nmust be set to \"text/html\" in order to tell the browser to insert the text unchanged into the document body.</p>\n\n\n<p>The response text is retrieved from the document, and a fake XMLHttpRequest object\nis created containing a <tt>responseText</tt> property in order to conform to the\nrequirements of event handlers and callbacks.</p>\n\n\n<p>Be aware that file upload packets are sent with the content type <a href=\"http://www.faqs.org/rfcs/rfc2388.html\">multipart/form</a>\nand some server technologies (notably JEE) may require some custom processing in order to\nretrieve parameter names and parameter values from the packet content.</p>\n\n\n<p></div></li>\n<li><b>headers</b> : Object (Optional)<div class=\"sub-desc\">Request\nheaders to set for the request.</div></li>\n<li><b>xmlData</b> : Object (Optional)<div class=\"sub-desc\">XML document\nto use for the post. Note: This will be used instead of params for the post\ndata. Any params will be appended to the URL.</div></li>\n<li><b>jsonData</b> : Object/String (Optional)<div class=\"sub-desc\">JSON\ndata to use as the post. Note: This will be used instead of params for the post\ndata. Any params will be appended to the URL.</div></li>\n<li><b>disableCaching</b> : Boolean (Optional)<div class=\"sub-desc\">True\nto add a unique cache-buster param to GET requests.</div></li>\n</ul></p></p>\n\n<p>The options object may also contain any other property which might be needed to perform\npostprocessing in a callback because it is passed to callback functions.</p>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>request The request object. This may be used\nto cancel the request.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 112,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-request",
      "shortDoc": "Sends an HTTP request to a remote server.\n\n\nImportant: Ajax server requests are asynchronous, and this call will\nretu..."
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.Ajax-method-suspendEvents\" rel=\"Ext.Ajax-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "setOptions",
      "member": "Ext.data.Connection",
      "doc": "<p>Set various options such as the url, params for the request</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The initial options</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope to execute in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The params for the request</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 409,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-setOptions",
      "shortDoc": "<p>Set various options such as the url, params for the request</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.Ajax-method-resumeEvents\" rel=\"Ext.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.Ajax-method-resumeEvents\" rel=\"Ext.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.Ajax-method-resumeEvents\" rel=\"Ext.Ajax-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.Ajax-method-removeListener\" rel=\"Ext.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.Ajax-method-addListener\" rel=\"Ext.Ajax-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.Ajax-method-removeListener\" rel=\"Ext.Ajax-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "upload",
      "member": "Ext.data.Connection",
      "doc": "<p>Upload a form using a hidden iframe.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "form",
          "doc": "<p>The form to upload</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "url",
          "doc": "<p>The url to post to</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "params",
          "doc": "<p>Any extra parameters to pass</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The initial options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 280,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-method-upload",
      "shortDoc": "<p>Upload a form using a hidden iframe.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "autoAbort",
      "member": "Ext.Ajax",
      "type": "Boolean",
      "doc": "<p>Whether a new request should abort any pending requests. (defaults to false)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 106,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-autoAbort"
    },
    {
      "tagname": "property",
      "name": "defaultHeaders",
      "member": "Ext.Ajax",
      "type": "Object",
      "doc": "<p>An object containing request headers which are added to each request made by this object\n(defaults to undefined).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 87,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-defaultHeaders"
    },
    {
      "tagname": "property",
      "name": "disableCaching",
      "member": "Ext.Ajax",
      "type": "Boolean",
      "doc": "<p>True to add a unique cache-buster param to GET requests. (defaults to true)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 68,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-disableCaching"
    },
    {
      "tagname": "property",
      "name": "extraParams",
      "member": "Ext.Ajax",
      "type": "Object",
      "doc": "<p>An object containing properties which are used as extra parameters to each request made\nby this object (defaults to undefined). Session information and other data that you need\nto pass with each request are commonly put here.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 80,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-extraParams",
      "shortDoc": "An object containing properties which are used as extra parameters to each request made\nby this object (defaults to u..."
    },
    {
      "tagname": "property",
      "name": "method",
      "member": "Ext.Ajax",
      "type": "String",
      "doc": "<p>The default HTTP method to be used for requests. Note that this is case-sensitive and\nshould be all caps (defaults to undefined; if not set but params are present will use\n<tt>\"POST\"</tt>, otherwise will use <tt>\"GET\"</tt>.)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 93,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-method",
      "shortDoc": "The default HTTP method to be used for requests. Note that this is case-sensitive and\nshould be all caps (defaults to..."
    },
    {
      "tagname": "property",
      "name": "timeout",
      "member": "Ext.Ajax",
      "type": "Number",
      "doc": "<p>The timeout in milliseconds to be used for requests. (defaults to 30000)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 100,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-timeout"
    },
    {
      "tagname": "property",
      "name": "url",
      "member": "Ext.Ajax",
      "type": "String",
      "doc": "<p>The default URL to be used for requests to the server. (defaults to undefined)\nIf the server receives all requests through one URL, setting this once is easier than\nentering it on every request.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
      "linenr": 73,
      "html_filename": "Ajax.html",
      "href": "Ajax.html#Ext-Ajax-property-url",
      "shortDoc": "The default URL to be used for requests to the server. (defaults to undefined)\nIf the server receives all requests th..."
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforerequest",
      "member": "Ext.data.Connection",
      "doc": "<p>Fires before a network request is made to retrieve a data object.</p>\n",
      "params": [
        {
          "type": "Connection",
          "name": "conn",
          "doc": "<p>This Connection object.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 78,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-event-beforerequest",
      "shortDoc": "<p>Fires before a network request is made to retrieve a data object.</p>\n"
    },
    {
      "tagname": "event",
      "name": "requestcomplete",
      "member": "Ext.data.Connection",
      "doc": "<p>Fires if the request was successfully completed.</p>\n",
      "params": [
        {
          "type": "Connection",
          "name": "conn",
          "doc": "<p>This Connection object.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The XHR object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">The XMLHttpRequest Object</a>\nfor details.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 85,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-event-requestcomplete",
      "shortDoc": "<p>Fires if the request was successfully completed.</p>\n"
    },
    {
      "tagname": "event",
      "name": "requestexception",
      "member": "Ext.data.Connection",
      "doc": "<p>Fires if an error HTTP status was returned from the server.\nSee <a href=\"http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html\">HTTP Status Code Definitions</a>\nfor details of HTTP status codes.</p>\n",
      "params": [
        {
          "type": "Connection",
          "name": "conn",
          "doc": "<p>This Connection object.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The XHR object containing the response data.\nSee <a href=\"http://www.w3.org/TR/XMLHttpRequest/\">The XMLHttpRequest Object</a>\nfor details.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options config object passed to the <a href=\"#/api/Ext.Ajax-method-request\" rel=\"Ext.Ajax-method-request\" class=\"docClass\">request</a> method.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Connection.js",
      "linenr": 95,
      "html_filename": "Connection.html",
      "href": "Connection.html#Ext-data-Connection-event-requestexception",
      "shortDoc": "Fires if an error HTTP status was returned from the server.\nSee HTTP Status Code Definitions\nfor details of HTTP stat..."
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/Ajax.js",
  "linenr": 1,
  "html_filename": "Ajax.html",
  "href": "Ajax.html#Ext-Ajax",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.Connection"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});