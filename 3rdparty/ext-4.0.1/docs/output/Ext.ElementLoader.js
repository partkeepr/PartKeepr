Ext.data.JsonP.Ext_ElementLoader({
  "tagname": "class",
  "name": "Ext.ElementLoader",
  "doc": "<p>A class used to load remote content to an Element. Sample usage:</p>\n\n<pre><code>Ext.get('el').load({\n    url: 'myPage.php',\n    scripts: true,\n    params: {\n        id: 1\n    }\n});\n</code></pre>\n\n\n<p>\nIn general this class will not be instanced directly, rather the <a href=\"#/api/Ext.core.Element-event-load\" rel=\"Ext.core.Element-event-load\" class=\"docClass\">Ext.core.Element.load</a> method\nwill be used.\n</p>\n\n",
  "extends": null,
  "mixins": [
    "Ext.util.Observable"
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
      "name": "ajaxOptions",
      "member": "Ext.ElementLoader",
      "type": "Object",
      "doc": "<p>Any additional options to be passed to the request, for example timeout or headers. Defaults to <tt>null</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 75,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-ajaxOptions"
    },
    {
      "tagname": "cfg",
      "name": "autoLoad",
      "member": "Ext.ElementLoader",
      "type": "Boolean/Object",
      "doc": "<p>True to have the loader make a request as soon as it is created. Defaults to <tt>false</tt>.\nThis argument can also be a set of options that will be passed to <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">load</a> is called.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 59,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-autoLoad",
      "shortDoc": "True to have the loader make a request as soon as it is created. Defaults to false.\nThis argument can also be a set o..."
    },
    {
      "tagname": "cfg",
      "name": "baseParams",
      "member": "Ext.ElementLoader",
      "type": "Object",
      "doc": "<p>Params that will be attached to every request. These parameters\nwill not be overridden by any params in the load options. Defaults to <tt>null</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 53,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-baseParams",
      "shortDoc": "Params that will be attached to every request. These parameters\nwill not be overridden by any params in the load opti..."
    },
    {
      "tagname": "cfg",
      "name": "failure",
      "member": "Ext.ElementLoader",
      "type": "Function",
      "doc": "<p>A function to be called when a load request fails.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 89,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-failure"
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "loadMask",
      "member": "Ext.ElementLoader",
      "type": "Mixed",
      "doc": "<p>True or a string to show when the element is loading.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 70,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-loadMask"
    },
    {
      "tagname": "cfg",
      "name": "params",
      "member": "Ext.ElementLoader",
      "type": "Object",
      "doc": "<p>Any params to be attached to the Ajax request. These parameters will\nbe overridden by any params in the load options. Defaults to <tt>null</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 47,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-params",
      "shortDoc": "Any params to be attached to the Ajax request. These parameters will\nbe overridden by any params in the load options...."
    },
    {
      "tagname": "cfg",
      "name": "renderer",
      "member": "Ext.ElementLoader",
      "type": "Function",
      "doc": "<p>A custom function to render the content to the element. The passed parameters\nare</p>\n\n<ul>\n<li>The loader</li>\n<li>The response</li>\n<li>The active request</li>\n</ul>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 97,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-renderer",
      "shortDoc": "A custom function to render the content to the element. The passed parameters\nare\n\n\nThe loader\nThe response\nThe activ..."
    },
    {
      "tagname": "cfg",
      "name": "scope",
      "member": "Ext.ElementLoader",
      "type": "Object",
      "doc": "<p>The scope to execute the <a href=\"#/api/Ext.ElementLoader-cfg-success\" rel=\"Ext.ElementLoader-cfg-success\" class=\"docClass\">success</a> and <a href=\"#/api/Ext.ElementLoader-cfg-failure\" rel=\"Ext.ElementLoader-cfg-failure\" class=\"docClass\">failure</a> functions in.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 93,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-scope"
    },
    {
      "tagname": "cfg",
      "name": "scripts",
      "member": "Ext.ElementLoader",
      "type": "Boolean",
      "doc": "<p>True to parse any inline script tags in the response.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 80,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-scripts"
    },
    {
      "tagname": "cfg",
      "name": "success",
      "member": "Ext.ElementLoader",
      "type": "Function",
      "doc": "<p>A function to be called when a load request is successful.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 85,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-success"
    },
    {
      "tagname": "cfg",
      "name": "target",
      "member": "Ext.ElementLoader",
      "type": "Mixed",
      "doc": "<p>The target element for the loader. It can be the DOM element, the id or an Ext.Element.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 65,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-target"
    },
    {
      "tagname": "cfg",
      "name": "url",
      "member": "Ext.ElementLoader",
      "type": "String",
      "doc": "<p>The url to retrieve the content from. Defaults to <tt>null</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 42,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-cfg-url"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "abort",
      "member": "Ext.ElementLoader",
      "doc": "<p>Aborts the active load request</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 180,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-abort",
      "shortDoc": "<p>Aborts the active load request</p>\n"
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
      "name": "destroy",
      "member": "Ext.ElementLoader",
      "doc": "<p>Destroys the loader. Any active requests will be aborted.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 364,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-destroy",
      "shortDoc": "<p>Destroys the loader. Any active requests will be aborted.</p>\n"
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.ElementLoader-method-enableBubble\" rel=\"Ext.ElementLoader-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "getTarget",
      "member": "Ext.ElementLoader",
      "doc": "<p>Get the target of this loader.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>target The target, null if none exists.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 172,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-getTarget",
      "shortDoc": "<p>Get the target of this loader.</p>\n"
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
      "name": "isAutoRefreshing",
      "member": "Ext.ElementLoader",
      "doc": "<p>Checks whether the loader is automatically refreshing. See <a href=\"#/api/Ext.ElementLoader-method-startAutoRefresh\" rel=\"Ext.ElementLoader-method-startAutoRefresh\" class=\"docClass\">startAutoRefresh</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the loader is automatically refreshing</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 356,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-isAutoRefreshing",
      "shortDoc": "<p>Checks whether the loader is automatically refreshing. See <a href=\"#/api/Ext.ElementLoader-method-startAutoRefresh\" rel=\"Ext.ElementLoader-method-startAutoRefresh\" class=\"docClass\">startAutoRefresh</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "load",
      "member": "Ext.ElementLoader",
      "doc": "<p>Load new data from the server.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options for the request. They can be any configuration option that can be specified for\nthe class, with the exception of the target option. Note that any options passed to the method will override any\nclass defaults.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 211,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-load",
      "shortDoc": "<p>Load new data from the server.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.ElementLoader--mon\" rel=\"Ext.ElementLoader--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.ElementLoader--mon\" rel=\"Ext.ElementLoader--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.ElementLoader-method-suspendEvents\" rel=\"Ext.ElementLoader-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "setTarget",
      "member": "Ext.ElementLoader",
      "doc": "<p>Set an {Ext.Element} as the target of this loader. Note that if the target is changed,\nany active requests will be aborted.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "target",
          "doc": "<p>The element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 158,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-setTarget",
      "shortDoc": "Set an {Ext.Element} as the target of this loader. Note that if the target is changed,\nany active requests will be ab..."
    },
    {
      "tagname": "method",
      "name": "startAutoRefresh",
      "member": "Ext.ElementLoader",
      "doc": "<p>Automatically refreshes the content over a specified period.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "interval",
          "doc": "<p>The interval to refresh in ms.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>(optional) The options to pass to the load method. See <a href=\"#/api/Ext.ElementLoader-method-load\" rel=\"Ext.ElementLoader-method-load\" class=\"docClass\">load</a></p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 335,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-startAutoRefresh",
      "shortDoc": "<p>Automatically refreshes the content over a specified period.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopAutoRefresh",
      "member": "Ext.ElementLoader",
      "doc": "<p>Clears any auto refresh. See <a href=\"#/api/Ext.ElementLoader-method-startAutoRefresh\" rel=\"Ext.ElementLoader-method-startAutoRefresh\" class=\"docClass\">startAutoRefresh</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 348,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-method-stopAutoRefresh",
      "shortDoc": "<p>Clears any auto refresh. See <a href=\"#/api/Ext.ElementLoader-method-startAutoRefresh\" rel=\"Ext.ElementLoader-method-startAutoRefresh\" class=\"docClass\">startAutoRefresh</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.ElementLoader-method-resumeEvents\" rel=\"Ext.ElementLoader-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.ElementLoader-method-resumeEvents\" rel=\"Ext.ElementLoader-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.ElementLoader-method-resumeEvents\" rel=\"Ext.ElementLoader-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.ElementLoader-method-removeListener\" rel=\"Ext.ElementLoader-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.ElementLoader-method-addListener\" rel=\"Ext.ElementLoader-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.ElementLoader-method-removeListener\" rel=\"Ext.ElementLoader-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforeload",
      "member": "Ext.ElementLoader",
      "doc": "<p>Fires before a load request is made to the server.\nReturning false from an event listener can prevent the load\nfrom occurring.</p>\n",
      "params": [
        {
          "type": "Ext.ElementLoader",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options passed to the request</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 117,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-event-beforeload",
      "shortDoc": "Fires before a load request is made to the server.\nReturning false from an event listener can prevent the load\nfrom o..."
    },
    {
      "tagname": "event",
      "name": "exception",
      "member": "Ext.ElementLoader",
      "doc": "<p>Fires after a successful load.</p>\n",
      "params": [
        {
          "type": "Ext.ElementLoader",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The response from the server</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>The options passed to the request</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
      "linenr": 136,
      "html_filename": "ElementLoader.html",
      "href": "ElementLoader.html#Ext-ElementLoader-event-exception",
      "shortDoc": "<p>Fires after a successful load.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ElementLoader.js",
  "linenr": 1,
  "html_filename": "ElementLoader.html",
  "href": "ElementLoader.html#Ext-ElementLoader",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.ComponentLoader"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});