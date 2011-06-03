Ext.data.JsonP.Ext_draw_engine_Vml({
  "tagname": "class",
  "name": "Ext.draw.engine.Vml",
  "doc": "<p>Provides specific methods to draw with VML.</p>\n",
  "extends": "Ext.draw.Surface",
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
      "name": "height",
      "member": "Ext.draw.Surface",
      "type": "Number",
      "doc": "<p>The height of this component in pixels (defaults to auto).\n<b>Note</b> to express this dimension as a percentage or offset see <a href=\"#/api/Ext.Component--anchor\" rel=\"Ext.Component--anchor\" class=\"docClass\">Ext.Component.anchor</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 199,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-cfg-height",
      "shortDoc": "The height of this component in pixels (defaults to auto).\nNote to express this dimension as a percentage or offset s..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "width",
      "member": "Ext.draw.Surface",
      "type": "Number",
      "doc": "<p>The width of this component in pixels (defaults to auto).\n<b>Note</b> to express this dimension as a percentage or offset see <a href=\"#/api/Ext.Component--anchor\" rel=\"Ext.Component--anchor\" class=\"docClass\">Ext.Component.anchor</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 204,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-cfg-width",
      "shortDoc": "The width of this component in pixels (defaults to auto).\nNote to express this dimension as a percentage or offset se..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "add",
      "member": "Ext.draw.Surface",
      "doc": "<p>Add a Sprite to the surface. See <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a> for the configuration object to be passed into this method.</p>\n\n<p>For example:</p>\n\n<pre><code>drawComponent.surface.add({\n    type: 'circle',\n    fill: '#ffc',\n    radius: 100,\n    x: 100,\n    y: 100\n});\n</code></pre>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 474,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-add",
      "shortDoc": "Add a Sprite to the surface. See Ext.draw.Sprite for the configuration object to be passed into this method.\n\nFor exa..."
    },
    {
      "tagname": "method",
      "name": "addCls",
      "member": "Ext.draw.Surface",
      "doc": "<p>Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.</p>\n\n<p>For example:</p>\n\n<pre><code>     drawComponent.surface.addCls(sprite, 'x-visible');\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "sprite",
          "doc": "<p>The sprite to add the class to.</p>\n",
          "optional": false
        },
        {
          "type": "String/Array",
          "name": "className",
          "doc": "<p>The CSS class to add, or an array of classes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 261,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-addCls",
      "shortDoc": "Adds one or more CSS classes to the element. Duplicate classes are automatically filtered out.\n\nFor example:\n\n     dr..."
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
      "name": "addGradient",
      "member": "Ext.draw.engine.Vml",
      "doc": "<p>Adds a definition to this Surface for a linear gradient. We convert the gradient definition\nto its corresponding VML attributes and store it for later use by individual sprites.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "gradient",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/engine/Vml.js",
      "linenr": 863,
      "html_filename": "Vml.html",
      "href": "Vml.html#Ext-draw-engine-Vml-method-addGradient",
      "shortDoc": "Adds a definition to this Surface for a linear gradient. We convert the gradient definition\nto its corresponding VML ..."
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
      "name": "create",
      "member": "Ext.draw.Surface",
      "doc": "<p>Create and return a new concrete Surface instance appropriate for the current environment.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Initial configuration for the Surface instance</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "enginePriority",
          "doc": "<p>Optional order of implementations to use; the first one that is</p>\n\n<pre><code>           available in the current environment will be used. Defaults to\n           &lt;code&gt;['Svg', 'Vml']&lt;/code&gt;.\n</code></pre>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 131,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-create",
      "shortDoc": "<p>Create and return a new concrete Surface instance appropriate for the current environment.</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.draw.Surface",
      "doc": "<p>Destroys the surface. This is done by removing all components from it and\nalso removing its reference to a DOM element.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.destroy();\n</code></pre>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 823,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-destroy",
      "shortDoc": "Destroys the surface. This is done by removing all components from it and\nalso removing its reference to a DOM elemen..."
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.draw.engine.Vml-method-enableBubble\" rel=\"Ext.draw.engine.Vml-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "getGroup",
      "member": "Ext.draw.Surface",
      "doc": "<p>Returns a new group or an existent group associated with the current surface.\nThe group returned is a <a href=\"#/api/Ext.draw.CompositeSprite\" rel=\"Ext.draw.CompositeSprite\" class=\"docClass\">Ext.draw.CompositeSprite</a> group.</p>\n\n<p>For example:</p>\n\n<pre><code> var spriteGroup = drawComponent.surface.getGroup('someGroupId');\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The unique identifier of the group.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The <a href=\"#/api/Ext.draw.CompositeSprite\" rel=\"Ext.draw.CompositeSprite\" class=\"docClass\">Ext.draw.CompositeSprite</a>.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 756,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-getGroup",
      "shortDoc": "Returns a new group or an existent group associated with the current surface.\nThe group returned is a Ext.draw.Compos..."
    },
    {
      "tagname": "method",
      "name": "getId",
      "member": "Ext.draw.Surface",
      "doc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 815,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-getId",
      "shortDoc": "<p>Retrieves the id of this component.\nWill autogenerate an id if one has not already been set.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
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
      "member": "Ext.draw.Surface",
      "doc": "<p>Remove a given sprite from the surface, optionally destroying the sprite in the process.\nYou can also call the sprite own <code>remove</code> method.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.remove(sprite);\n //or...\n sprite.remove();\n</code></pre>\n",
      "params": [
        {
          "type": "Ext.draw.Sprite",
          "name": "sprite",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "destroySprite",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>the sprite's new index in the list</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 561,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-remove",
      "shortDoc": "Remove a given sprite from the surface, optionally destroying the sprite in the process.\nYou can also call the sprite..."
    },
    {
      "tagname": "method",
      "name": "removeAll",
      "member": "Ext.draw.Surface",
      "doc": "<p>Remove all sprites from the surface, optionally destroying the sprites in the process.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.removeAll();\n</code></pre>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "destroySprites",
          "doc": "<p>Whether to destroy all sprites when removing them.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The sprite's new index in the list.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 588,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-removeAll",
      "shortDoc": "Remove all sprites from the surface, optionally destroying the sprites in the process.\n\nFor example:\n\n drawComponent...."
    },
    {
      "tagname": "method",
      "name": "removeCls",
      "member": "Ext.draw.Surface",
      "doc": "<p>Removes one or more CSS classes from the element.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.removeCls(sprite, 'x-visible');\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "sprite",
          "doc": "<p>The sprite to remove the class from.</p>\n",
          "optional": false
        },
        {
          "type": "String/Array",
          "name": "className",
          "doc": "<p>The CSS class to remove, or an array of classes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 274,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-removeCls",
      "shortDoc": "Removes one or more CSS classes from the element.\n\nFor example:\n\n drawComponent.surface.removeCls(sprite, 'x-visible'..."
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.draw.engine.Vml--mon\" rel=\"Ext.draw.engine.Vml--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.draw.engine.Vml--mon\" rel=\"Ext.draw.engine.Vml--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.draw.engine.Vml-method-suspendEvents\" rel=\"Ext.draw.engine.Vml-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "setSize",
      "member": "Ext.draw.Surface",
      "doc": "<p>Sets the size of the surface. Accomodates the background (if any) to fit the new size too.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.setSize(500, 500);\n</code></pre>\n\n<p>This method is generally called when also setting the size of the draw Component.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "w",
          "doc": "<p>The new width of the canvas.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "h",
          "doc": "<p>The new height of the canvas.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 361,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-setSize",
      "shortDoc": "Sets the size of the surface. Accomodates the background (if any) to fit the new size too.\n\nFor example:\n\n drawCompon..."
    },
    {
      "tagname": "method",
      "name": "setStyle",
      "member": "Ext.draw.Surface",
      "doc": "<p>Sets CSS style attributes to an element.</p>\n\n<p>For example:</p>\n\n<pre><code> drawComponent.surface.setStyle(sprite, {\n     'cursor': 'pointer'\n });\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "sprite",
          "doc": "<p>The sprite to add, or an array of classes to</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "styles",
          "doc": "<p>An Object with CSS styles.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 287,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-setStyle",
      "shortDoc": "Sets CSS style attributes to an element.\n\nFor example:\n\n drawComponent.surface.setStyle(sprite, {\n     'cursor': 'poi..."
    },
    {
      "tagname": "method",
      "name": "setText",
      "member": "Ext.draw.Surface",
      "doc": "<p>Changes the text in the sprite element. The sprite must be a <code>text</code> sprite.\nThis method can also be called from <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>.</p>\n\n<p>For example:</p>\n\n<pre><code> var spriteGroup = drawComponent.surface.setText(sprite, 'my new text');\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "sprite",
          "doc": "<p>The Sprite to change the text.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The new text to be set.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Surface.js",
      "linenr": 797,
      "html_filename": "Surface.html",
      "href": "Surface.html#Ext-draw-Surface-method-setText",
      "shortDoc": "Changes the text in the sprite element. The sprite must be a text sprite.\nThis method can also be called from Ext.dra..."
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.draw.engine.Vml-method-resumeEvents\" rel=\"Ext.draw.engine.Vml-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.draw.engine.Vml-method-resumeEvents\" rel=\"Ext.draw.engine.Vml-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.draw.engine.Vml-method-resumeEvents\" rel=\"Ext.draw.engine.Vml-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.draw.engine.Vml-method-removeListener\" rel=\"Ext.draw.engine.Vml-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.draw.engine.Vml-method-addListener\" rel=\"Ext.draw.engine.Vml-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.draw.engine.Vml-method-removeListener\" rel=\"Ext.draw.engine.Vml-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/engine/Vml.js",
  "linenr": 1,
  "html_filename": "Vml.html",
  "href": "Vml.html#Ext-draw-engine-Vml",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.draw.Surface"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});