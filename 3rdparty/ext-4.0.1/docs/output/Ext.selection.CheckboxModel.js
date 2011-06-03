Ext.data.JsonP.Ext_selection_CheckboxModel({
  "tagname": "class",
  "name": "Ext.selection.CheckboxModel",
  "doc": "<p>A selection model that renders a column of checkboxes that can be toggled to\nselect or deselect rows. The default mode for this selection model is MULTI.</p>\n\n<p>The selection model will inject a header for the checkboxes in the first view\nand according to the 'injectCheckbox' configuration.</p>\n",
  "extends": "Ext.selection.RowModel",
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
      "name": "allowDeselect",
      "member": "Ext.selection.Model",
      "type": "Boolean",
      "doc": "<p>Allow users to deselect a record in a DataView, List or Grid. Only applicable when the SelectionModel's mode is 'SINGLE'. Defaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 28,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-cfg-allowDeselect",
      "shortDoc": "Allow users to deselect a record in a DataView, List or Grid. Only applicable when the SelectionModel's mode is 'SING..."
    },
    {
      "tagname": "cfg",
      "name": "checkOnly",
      "member": "Ext.selection.CheckboxModel",
      "type": "Boolean",
      "doc": "<p><tt>true</tt> if rows can only be selected by clicking on the\ncheckbox column (defaults to <tt>false</tt>).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 32,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-cfg-checkOnly"
    },
    {
      "tagname": "cfg",
      "name": "enableKeyNav",
      "member": "Ext.selection.RowModel",
      "type": "Boolean",
      "doc": "<p>Turns on/off keyboard navigation within the grid. Defaults to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/RowModel.js",
      "linenr": 21,
      "html_filename": "RowModel.html",
      "href": "RowModel.html#Ext-selection-RowModel-cfg-enableKeyNav"
    },
    {
      "tagname": "cfg",
      "name": "injectCheckbox",
      "member": "Ext.selection.CheckboxModel",
      "type": "Mixed",
      "doc": "<p>Instructs the SelectionModel whether or not to inject the checkbox header\nautomatically or not. (Note: By not placing the checkbox in manually, the\ngrid view will need to be rendered 2x on initial render.)\nSupported values are a Number index, false and the strings 'first' and 'last'.\nDefault is 0.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 22,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-cfg-injectCheckbox",
      "shortDoc": "Instructs the SelectionModel whether or not to inject the checkbox header\nautomatically or not. (Note: By not placing..."
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
    },
    {
      "tagname": "cfg",
      "name": "mode",
      "member": "Ext.selection.CheckboxModel",
      "type": "String",
      "doc": "<p>Modes of selection.\nValid values are SINGLE, SIMPLE, and MULTI. Defaults to 'MULTI'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 15,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-cfg-mode"
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
      "name": "deselect",
      "member": "Ext.selection.Model",
      "doc": "<p>Deselects a record instance by record instance or index.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model/Index",
          "name": "records",
          "doc": "<p>An array of records or an index</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>Set to false to not fire a deselect event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 262,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-deselect",
      "shortDoc": "<p>Deselects a record instance by record instance or index.</p>\n"
    },
    {
      "tagname": "method",
      "name": "deselectAll",
      "member": "Ext.selection.Model",
      "doc": "<p>Deselect all records in the view.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>True to suppress any deselect events</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 131,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-deselectAll",
      "shortDoc": "<p>Deselect all records in the view.</p>\n"
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.selection.CheckboxModel-method-enableBubble\" rel=\"Ext.selection.CheckboxModel-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
      "name": "getHeaderConfig",
      "member": "Ext.selection.CheckboxModel",
      "doc": "<p>Retrieve a configuration to be used in a HeaderContainer.\nThis should be used when injectCheckbox is set to false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 96,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-method-getHeaderConfig",
      "shortDoc": "<p>Retrieve a configuration to be used in a HeaderContainer.\nThis should be used when injectCheckbox is set to false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLastSelected",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns the last selected record.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 410,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-getLastSelected",
      "shortDoc": "<p>Returns the last selected record.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSelection",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns an array of the currently selected records.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 421,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-getSelection",
      "shortDoc": "<p>Returns an array of the currently selected records.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSelectionMode",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns the current selectionMode. SINGLE, MULTI or SIMPLE.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 428,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-getSelectionMode",
      "shortDoc": "<p>Returns the current selectionMode. SINGLE, MULTI or SIMPLE.</p>\n"
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
      "name": "hasSelection",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns true if there is a selected record.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 472,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-hasSelection",
      "shortDoc": "<p>Returns true if there is a selected record.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isFocused",
      "member": "Ext.selection.Model",
      "doc": "<p>Determines if this record is currently focused.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "Ext",
          "doc": "<p>.data.Record record</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 392,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-isFocused",
      "shortDoc": "<p>Determines if this record is currently focused.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLocked",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns true if the selections are locked.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 445,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-isLocked",
      "shortDoc": "<p>Returns true if the selections are locked.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isSelected",
      "member": "Ext.selection.Model",
      "doc": "<p>Returns <tt>true</tt> if the specified row is selected.</p>\n",
      "params": [
        {
          "type": "Record/Number",
          "name": "record",
          "doc": "<p>The record or index of the record to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 462,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-isSelected",
      "shortDoc": "<p>Returns <tt>true</tt> if the specified row is selected.</p>\n"
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
    },
    {
      "tagname": "method",
      "name": "onHeaderClick",
      "member": "Ext.selection.CheckboxModel",
      "doc": "<p>Toggle between selecting all and deselecting all when clicking on\na checkbox header.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "headerCt",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "header",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 78,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-method-onHeaderClick",
      "shortDoc": "<p>Toggle between selecting all and deselecting all when clicking on\na checkbox header.</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.selection.CheckboxModel--mon\" rel=\"Ext.selection.CheckboxModel--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.selection.CheckboxModel--mon\" rel=\"Ext.selection.CheckboxModel--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "renderer",
      "member": "Ext.selection.CheckboxModel",
      "doc": "<p>Generates the HTML to be rendered in the injected checkbox column for each row.\nCreates the standard checkbox markup by default; can be overridden to provide custom rendering.\nSee <a href=\"#/api/Ext.grid.column.Column-cfg-renderer\" rel=\"Ext.grid.column.Column-cfg-renderer\" class=\"docClass\">Ext.grid.column.Column.renderer</a> for description of allowed parameters.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "value",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "metaData",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "record",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "rowIndex",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "colIndex",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "store",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "view",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
      "linenr": 115,
      "html_filename": "CheckboxModel.html",
      "href": "CheckboxModel.html#Ext-selection-CheckboxModel-method-renderer",
      "shortDoc": "Generates the HTML to be rendered in the injected checkbox column for each row.\nCreates the standard checkbox markup ..."
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.selection.CheckboxModel-method-suspendEvents\" rel=\"Ext.selection.CheckboxModel-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "select",
      "member": "Ext.selection.Model",
      "doc": "<p>Selects a record instance by record instance or index.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model/Index",
          "name": "records",
          "doc": "<p>An array of records or an index</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "keepExisting",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>Set to false to not fire a select event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 252,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-select",
      "shortDoc": "<p>Selects a record instance by record instance or index.</p>\n"
    },
    {
      "tagname": "method",
      "name": "selectAll",
      "member": "Ext.selection.Model",
      "doc": "<p>Select all records in the view.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "suppressEvent",
          "doc": "<p>True to suppress any selects event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 111,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-selectAll",
      "shortDoc": "<p>Select all records in the view.</p>\n"
    },
    {
      "tagname": "method",
      "name": "selectRange",
      "member": "Ext.selection.Model",
      "doc": "<p>Selects a range of rows if the selection model <a href=\"#/api/Ext.selection.CheckboxModel-method-isLocked\" rel=\"Ext.selection.CheckboxModel-method-isLocked\" class=\"docClass\">is not locked</a>.\nAll rows in between startRow and endRow are also selected.</p>\n",
      "params": [
        {
          "type": "Ext.data.Model/Number",
          "name": "startRow",
          "doc": "<p>The record or index of the first row in the range</p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model/Number",
          "name": "endRow",
          "doc": "<p>The record or index of the last row in the range</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "keepExisting",
          "doc": "<p>(optional) True to retain existing selections</p>\n",
          "optional": true
        },
        {
          "type": "Object",
          "name": "dir",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 190,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-selectRange",
      "shortDoc": "Selects a range of rows if the selection model is not locked.\nAll rows in between startRow and endRow are also select..."
    },
    {
      "tagname": "method",
      "name": "setLastFocused",
      "member": "Ext.selection.Model",
      "doc": "\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>Set a record as the last focused record. This does NOT mean\nthat the record has been selected.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "supressFocus",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 380,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-setLastFocused",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "setLocked",
      "member": "Ext.selection.Model",
      "doc": "<p>Locks the current selection and disables any changes from\nhappening to the selection.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "locked",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 453,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-setLocked",
      "shortDoc": "<p>Locks the current selection and disables any changes from\nhappening to the selection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setSelectionMode",
      "member": "Ext.selection.Model",
      "doc": "<p>Sets the current selectionMode. SINGLE, MULTI or SIMPLE.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "selMode",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 435,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-method-setSelectionMode",
      "shortDoc": "<p>Sets the current selectionMode. SINGLE, MULTI or SIMPLE.</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.selection.CheckboxModel-method-resumeEvents\" rel=\"Ext.selection.CheckboxModel-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.selection.CheckboxModel-method-resumeEvents\" rel=\"Ext.selection.CheckboxModel-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.selection.CheckboxModel-method-resumeEvents\" rel=\"Ext.selection.CheckboxModel-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.selection.CheckboxModel-method-removeListener\" rel=\"Ext.selection.CheckboxModel-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.selection.CheckboxModel-method-addListener\" rel=\"Ext.selection.CheckboxModel-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.selection.CheckboxModel-method-removeListener\" rel=\"Ext.selection.CheckboxModel-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "selected",
      "member": "Ext.selection.Model",
      "type": "Object",
      "doc": "<p>READ-ONLY A MixedCollection that maintains all of the currently selected\nrecords.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 34,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-property-selected"
    }
  ],
  "event": [
    {
      "tagname": "event",
      "name": "deselect",
      "member": "Ext.selection.RowModel",
      "doc": "<p>Fired after a record is deselected</p>\n",
      "params": [
        {
          "type": "Ext.selection.RowSelectionModel",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The deselected record</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The row index deselected</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/RowModel.js",
      "linenr": 30,
      "html_filename": "RowModel.html",
      "href": "RowModel.html#Ext-selection-RowModel-event-deselect",
      "shortDoc": "<p>Fired after a record is deselected</p>\n"
    },
    {
      "tagname": "event",
      "name": "select",
      "member": "Ext.selection.RowModel",
      "doc": "<p>Fired after a record is selected</p>\n",
      "params": [
        {
          "type": "Ext.selection.RowSelectionModel",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "record",
          "doc": "<p>The selected record</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "index",
          "doc": "<p>The row index selected</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/RowModel.js",
      "linenr": 39,
      "html_filename": "RowModel.html",
      "href": "RowModel.html#Ext-selection-RowModel-event-select",
      "shortDoc": "<p>Fired after a record is selected</p>\n"
    },
    {
      "tagname": "event",
      "name": "selectionchange",
      "member": "Ext.selection.Model",
      "doc": "<p>Fired after a selection change has occurred</p>\n",
      "params": [
        {
          "type": "Ext.selection.Model",
          "name": "this",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "selected",
          "doc": "<p>The selected records</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/selection/Model.js",
      "linenr": 57,
      "html_filename": "Model2.html",
      "href": "Model2.html#Ext-selection-Model-event-selectionchange",
      "shortDoc": "<p>Fired after a selection change has occurred</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/selection/CheckboxModel.js",
  "linenr": 1,
  "html_filename": "CheckboxModel.html",
  "href": "CheckboxModel.html#Ext-selection-CheckboxModel",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.Observable",
    "Ext.selection.Model",
    "Ext.selection.RowModel"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});