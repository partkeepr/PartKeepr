Ext.data.JsonP.Ext_dd_DragTracker({
  "tagname": "class",
  "name": "Ext.dd.DragTracker",
  "doc": "<p>A DragTracker listens for drag events on an Element and fires events at the start and end of the drag,\nas well as during the drag. This is useful for components such as <a href=\"#/api/Ext.slider.Multi\" rel=\"Ext.slider.Multi\" class=\"docClass\">Ext.slider.Multi</a>, where there is\nan element that can be dragged around to change the Slider's value.\nDragTracker provides a series of template methods that should be overridden to provide functionality\nin response to detected drag operations. These are onBeforeStart, onStart, onDrag and onEnd.\nSee <a href=\"#/api/Ext.slider.Multi\" rel=\"Ext.slider.Multi\" class=\"docClass\">Ext.slider.Multi</a>'s initEvents function for an example implementation.</p>\n",
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
      "name": "autoStart",
      "member": "Ext.dd.DragTracker",
      "type": "Boolean/Number",
      "doc": "<p>Defaults to <code>false</code>. Specify <code>true</code> to defer trigger start by 1000 ms.\nSpecify a Number for the number of milliseconds to defer trigger start.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 63,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-autoStart",
      "shortDoc": "Defaults to false. Specify true to defer trigger start by 1000 ms.\nSpecify a Number for the number of milliseconds to..."
    },
    {
      "tagname": "cfg",
      "name": "constrainTo",
      "member": "Ext.dd.DragTracker",
      "type": "Ext.util.Region/Element",
      "doc": "<p>A <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> (Or an element from which a Region measurement will be read) which is used to constrain\nthe result of the <a href=\"#/api/Ext.dd.DragTracker-method-getOffset\" rel=\"Ext.dd.DragTracker-method-getOffset\" class=\"docClass\">getOffset</a> call.</p>\n\n\n<p>This may be set any time during the DragTracker's lifecycle to set a dynamic constraining region.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 49,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-constrainTo",
      "shortDoc": "A Region (Or an element from which a Region measurement will be read) which is used to constrain\nthe result of the ge..."
    },
    {
      "tagname": "cfg",
      "name": "delegate",
      "member": "Ext.dd.DragTracker",
      "type": "String",
      "doc": "<p>Optional. <p>A <a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">DomQuery</a> selector which identifies child elements within the DragTracker's encapsulating\nElement which are the tracked elements. This limits tracking to only begin when the matching elements are mousedowned.</p></p>\n\n<p>This may also be a specific child element within the DragTracker's encapsulating element to use as the tracked element.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 70,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-delegate",
      "shortDoc": "Optional. A DomQuery selector which identifies child elements within the DragTracker's encapsulating\nElement which ar..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "overCls",
      "member": "Ext.dd.DragTracker",
      "type": "String",
      "doc": "<p>A CSS class to add to the DragTracker's target element when the element (or, if the <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> option is used,\nwhen a delegate element) is mouseovered.</p>\n\n\n<p><b>If the <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> option is used, these events fire only when a delegate element is entered of left.</b>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 42,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-overCls",
      "shortDoc": "A CSS class to add to the DragTracker's target element when the element (or, if the delegate option is used,\nwhen a d..."
    },
    {
      "tagname": "cfg",
      "name": "preventDefault",
      "member": "Ext.dd.DragTracker",
      "type": "Boolean",
      "doc": "<p>Specify <code>false</code> to enable default actions on onMouseDown events. Defaults to <code>true</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 77,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-preventDefault"
    },
    {
      "tagname": "cfg",
      "name": "stopEvent",
      "member": "Ext.dd.DragTracker",
      "type": "Boolean",
      "doc": "<p>Specify <code>true</code> to stop the <code>mousedown</code> event from bubbling to outer listeners from the target element (or its delegates). Defaults to <code>false</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 82,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-stopEvent",
      "shortDoc": "Specify true to stop the mousedown event from bubbling to outer listeners from the target element (or its delegates)...."
    },
    {
      "tagname": "cfg",
      "name": "tolerance",
      "member": "Ext.dd.DragTracker",
      "type": "Number",
      "doc": "<p>Number of pixels the drag target must be moved before dragging is\nconsidered to have started. Defaults to <code>5</code>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 56,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-tolerance"
    },
    {
      "tagname": "cfg",
      "name": "trackOver",
      "member": "Ext.dd.DragTracker",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>false</code>. Set to true to fire mouseover and mouseout events when the mouse enters or leaves the target element.</p>\n\n\n<p>This is implicitly set when an <a href=\"#/api/Ext.dd.DragTracker-cfg-overCls\" rel=\"Ext.dd.DragTracker-cfg-overCls\" class=\"docClass\">overCls</a> is specified.</p>\n\n\n<p><b>If the <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> option is used, these events fire only when a delegate element is entered of left.</b>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 34,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-cfg-trackOver",
      "shortDoc": "Defaults to false. Set to true to fire mouseover and mouseout events when the mouse enters or leaves the target eleme..."
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.dd.DragTracker-method-enableBubble\" rel=\"Ext.dd.DragTracker-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "getDragTarget",
      "member": "Ext.dd.DragTracker",
      "doc": "<p></p>Returns the drag target. This is usually the DragTracker's encapsulating element.</p></p>\n\n<p>If the <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> option is being used, this may be a child element which matches the\n<a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> selector.</p>\n\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>The element currently being tracked.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 417,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-getDragTarget",
      "shortDoc": "Returns the drag target. This is usually the DragTracker's encapsulating element.\n\nIf the delegate option is being us..."
    },
    {
      "tagname": "method",
      "name": "getOffset",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Returns the X, Y offset of the current mouse position from the mousedown point.</p>\n\n\n<p>This method may optionally constrain the real offset values, and returns a point coerced in one\nof two modes:</p>\n\n\n<ul>\n<li><code>point</code><div class=\"sub-desc\">The current mouse position is coerced into the\n<a href=\"#/api/Ext.dd.DragTracker--constrainRegion\" rel=\"Ext.dd.DragTracker--constrainRegion\" class=\"docClass\">constrainRegion</a>, and the resulting position is returned.</div></li>\n<li><code>dragTarget</code><div class=\"sub-desc\">The new <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Region</a> of the\n<a href=\"#/api/Ext.dd.DragTracker-method-getDragTarget\" rel=\"Ext.dd.DragTracker-method-getDragTarget\" class=\"docClass\">dragTarget</a> is calculated based upon the current mouse position, and then\ncoerced into the <a href=\"#/api/Ext.dd.DragTracker--constrainRegion\" rel=\"Ext.dd.DragTracker--constrainRegion\" class=\"docClass\">constrainRegion</a>. The returned mouse position is then adjusted by the\nsame delta as was used to coerce the region.</div></li>\n</ul>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "constrainMode",
          "doc": "<p>{String} Optional. If omitted the true mouse position is returned. May be passed\nas <code>'point'</code> or <code>'dragTarget'. See above.</code>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The <code>X, Y</code> offset from the mousedown point, optionally constrained.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 461,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-getOffset",
      "shortDoc": "Returns the X, Y offset of the current mouse position from the mousedown point.\n\n\nThis method may optionally constrai..."
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
      "name": "initEl",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Initializes the DragTracker on a given element.</p>\n",
      "params": [
        {
          "type": "Ext.core.Element/HTMLElement",
          "name": "el",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 176,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-initEl",
      "shortDoc": "<p>Initializes the DragTracker on a given element.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "onBeforeStart",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when the user first clicks and\nholds the mouse button down. Return false to disallow the drag</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 382,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-onBeforeStart",
      "shortDoc": "Template method which should be overridden by each DragTracker instance. Called when the user first clicks and\nholds ..."
    },
    {
      "tagname": "method",
      "name": "onDrag",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Template method which should be overridden by each DragTracker instance. Called whenever a drag has been detected.</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 400,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-onDrag",
      "shortDoc": "<p>Template method which should be overridden by each DragTracker instance. Called whenever a drag has been detected.</p>\n"
    },
    {
      "tagname": "method",
      "name": "onEnd",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when a drag operation has been completed\n(e.g. the user clicked and held the mouse down, dragged the element and then released the mouse button)</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 408,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-onEnd",
      "shortDoc": "Template method which should be overridden by each DragTracker instance. Called when a drag operation has been comple..."
    },
    {
      "tagname": "method",
      "name": "onStart",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Template method which should be overridden by each DragTracker instance. Called when a drag operation starts\n(e.g. the user has moved the tracked element beyond the specified tolerance)</p>\n",
      "params": [
        {
          "type": "Ext.EventObject",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 391,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-method-onStart",
      "shortDoc": "Template method which should be overridden by each DragTracker instance. Called when a drag operation starts\n(e.g. th..."
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.dd.DragTracker--mon\" rel=\"Ext.dd.DragTracker--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.dd.DragTracker--mon\" rel=\"Ext.dd.DragTracker--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.dd.DragTracker-method-suspendEvents\" rel=\"Ext.dd.DragTracker-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.dd.DragTracker-method-resumeEvents\" rel=\"Ext.dd.DragTracker-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.dd.DragTracker-method-resumeEvents\" rel=\"Ext.dd.DragTracker-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.dd.DragTracker-method-resumeEvents\" rel=\"Ext.dd.DragTracker-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.dd.DragTracker-method-removeListener\" rel=\"Ext.dd.DragTracker-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.dd.DragTracker-method-addListener\" rel=\"Ext.dd.DragTracker-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.dd.DragTracker-method-removeListener\" rel=\"Ext.dd.DragTracker-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "active",
      "member": "Ext.dd.DragTracker",
      "type": "Boolean",
      "doc": "<p>Read-only property indicated whether the user is currently dragging this\ntracker.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 18,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-property-active"
    },
    {
      "tagname": "property",
      "name": "dragTarget",
      "member": "Ext.dd.DragTracker",
      "type": "HtmlElement",
      "doc": "<p><b>Only valid during drag operations. Read-only.</b></p>\n\n\n<p>The element being dragged.</p>\n\n\n<p>If the <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> option is used, this will be the delegate element which was mousedowned.</p>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 26,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-property-dragTarget",
      "shortDoc": "Only valid during drag operations. Read-only.\n\n\nThe element being dragged.\n\n\nIf the delegate option is used, this wil..."
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforestart",
      "member": "Ext.dd.DragTracker",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 133,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-beforestart",
      "shortDoc": "\n"
    },
    {
      "tagname": "event",
      "name": "drag",
      "member": "Ext.dd.DragTracker",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 154,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-drag",
      "shortDoc": "\n"
    },
    {
      "tagname": "event",
      "name": "dragend",
      "member": "Ext.dd.DragTracker",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 147,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-dragend",
      "shortDoc": "\n"
    },
    {
      "tagname": "event",
      "name": "dragstart",
      "member": "Ext.dd.DragTracker",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 140,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-dragstart",
      "shortDoc": "\n"
    },
    {
      "tagname": "event",
      "name": "mousedown",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Fires when the mouse button is pressed down, but before a drag operation begins. The\ndrag operation begins after either the mouse has been moved by <a href=\"#/api/Ext.dd.DragTracker-cfg-tolerance\" rel=\"Ext.dd.DragTracker-cfg-tolerance\" class=\"docClass\">tolerance</a> pixels, or after\nthe <a href=\"#/api/Ext.dd.DragTracker-cfg-autoStart\" rel=\"Ext.dd.DragTracker-cfg-autoStart\" class=\"docClass\">autoStart</a> timer fires.</p>\n\n\n<p>Return false to veto the drag operation.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 109,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-mousedown",
      "shortDoc": "Fires when the mouse button is pressed down, but before a drag operation begins. The\ndrag operation begins after eith..."
    },
    {
      "tagname": "event",
      "name": "mousemove",
      "member": "Ext.dd.DragTracker",
      "doc": "<p>Fired when the mouse is moved. Returning false cancels the drag operation.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 126,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-mousemove",
      "shortDoc": "<p>Fired when the mouse is moved. Returning false cancels the drag operation.</p>\n"
    },
    {
      "tagname": "event",
      "name": "mouseout",
      "member": "Ext.dd.DragTracker",
      "doc": "<p><b>Only available when <a href=\"#/api/Ext.dd.DragTracker-cfg-trackOver\" rel=\"Ext.dd.DragTracker-cfg-trackOver\" class=\"docClass\">trackOver</a> is <code>true</code></b></p>\n\n\n<p>Fires when the mouse exits the DragTracker's target element (or if <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> is\nused, when the mouse exits a delegate element).</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 100,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseout",
      "shortDoc": "Only available when trackOver is true\n\n\nFires when the mouse exits the DragTracker's target element (or if delegate i..."
    },
    {
      "tagname": "event",
      "name": "mouseover",
      "member": "Ext.dd.DragTracker",
      "doc": "<p><b>Only available when <a href=\"#/api/Ext.dd.DragTracker-cfg-trackOver\" rel=\"Ext.dd.DragTracker-cfg-trackOver\" class=\"docClass\">trackOver</a> is <code>true</code></b></p>\n\n\n<p>Fires when the mouse enters the DragTracker's target element (or if <a href=\"#/api/Ext.dd.DragTracker-cfg-delegate\" rel=\"Ext.dd.DragTracker-cfg-delegate\" class=\"docClass\">delegate</a> is\nused, when the mouse enters a delegate element).</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        },
        {
          "type": "HtmlElement",
          "name": "target",
          "doc": "<p>The element mouseovered.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 90,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseover",
      "shortDoc": "Only available when trackOver is true\n\n\nFires when the mouse enters the DragTracker's target element (or if delegate ..."
    },
    {
      "tagname": "event",
      "name": "mouseup",
      "member": "Ext.dd.DragTracker",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>event object</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
      "linenr": 119,
      "html_filename": "DragTracker.html",
      "href": "DragTracker.html#Ext-dd-DragTracker-event-mouseup",
      "shortDoc": "\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragTracker.js",
  "linenr": 1,
  "html_filename": "DragTracker.html",
  "href": "DragTracker.html#Ext-dd-DragTracker",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.resizer.ResizeTracker",
    "Ext.resizer.SplitterTracker",
    "Ext.util.ComponentDragger"
  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});