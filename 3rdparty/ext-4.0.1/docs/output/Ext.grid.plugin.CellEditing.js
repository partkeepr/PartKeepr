Ext.data.JsonP.Ext_grid_plugin_CellEditing({
  "tagname": "class",
  "name": "Ext.grid.plugin.CellEditing",
  "doc": "<p>The <a href=\"#/api/Ext.grid.plugin.CellEditing\" rel=\"Ext.grid.plugin.CellEditing\" class=\"docClass\">Ext.grid.plugin.CellEditing</a> plugin injects editing at a cell level for a Grid. Only a single\ncell will be editable at a time. The field that will be used for the editor is defined at the\n<a href=\"#/api/Ext.grid.column.Column--field\" rel=\"Ext.grid.column.Column--field\" class=\"docClass\">field</a>. The editor can be a field instance or a field configuration.</p>\n\n<p>If an editor is not specified for a particular column then that cell will not be editable and it will\nbe skipped when activated via the mouse or the keyboard.</p>\n\n<p>The editor may be shared for each column in the grid, or a different one may be specified for each column.\nAn appropriate field type should be chosen to match the data structure that it will be editing. For example,\nto edit a date, it would be useful to specify <a href=\"#/api/Ext.form.field.Date\" rel=\"Ext.form.field.Date\" class=\"docClass\">Ext.form.field.Date</a> as the editor.</p>\n\n<p><p><img src=\"doc-resources/Ext.grid.plugin.CellEditing/Ext.grid.plugin.CellEditing.png\" alt=\"Ext.grid.plugin.CellEditing plugin\"></p></p>\n\n<h2>Example Usage</h2>\n\n<pre><code>Ext.create('Ext.data.Store', {\n    storeId:'simpsonsStore',\n    fields:['name', 'email', 'phone'],\n    data:{'items':[\n        {\"name\":\"Lisa\", \"email\":\"lisa@simpsons.com\", \"phone\":\"555-111-1224\"},\n        {\"name\":\"Bart\", \"email\":\"bart@simpsons.com\", \"phone\":\"555--222-1234\"},\n        {\"name\":\"Homer\", \"email\":\"home@simpsons.com\", \"phone\":\"555-222-1244\"},\n        {\"name\":\"Marge\", \"email\":\"marge@simpsons.com\", \"phone\":\"555-222-1254\"}\n    ]},\n    proxy: {\n        type: 'memory',\n        reader: {\n            type: 'json',\n            root: 'items'\n        }\n    }\n});\n\nExt.create('Ext.grid.Panel', {\n    title: 'Simpsons',\n    store: Ext.data.StoreManager.lookup('simpsonsStore'),\n    columns: [\n        {header: 'Name',  dataIndex: 'name', field: 'textfield'},\n        {header: 'Email', dataIndex: 'email', flex:1,\n            editor: {\n                xtype:'textfield',\n                allowBlank:false\n            }\n        },\n        {header: 'Phone', dataIndex: 'phone'}\n    ],\n    selType: 'cellmodel',\n    plugins: [\n        Ext.create('Ext.grid.plugin.CellEditing', {\n            clicksToEdit: 1\n        })\n    ],\n    height: 200,\n    width: 400,\n    renderTo: Ext.getBody()\n});\n</code></pre>\n",
  "extends": "Ext.grid.plugin.Editing",
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
      "name": "clicksToEdit",
      "member": "Ext.grid.plugin.Editing",
      "type": "Number",
      "doc": "<p>The number of clicks on a grid required to display the editor (defaults to 2).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/Editing.js",
      "linenr": 26,
      "html_filename": "Editing.html",
      "href": "Editing.html#Ext-grid-plugin-Editing-cfg-clicksToEdit"
    },
    {
      "tagname": "cfg",
      "name": "listeners",
      "member": "Ext.util.Observable",
      "type": "Object",
      "doc": "<p>(optional) <p>A config object containing one or more event handlers to be added to this\nobject during initialization.  This should be a valid listeners config object as specified in the\n<a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a> example for attaching multiple handlers at once.</p></p>\n\n<br><p><b><u>DOM events from ExtJs <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Components</a></u></b></p>\n\n\n<br><p>While <i>some</i> ExtJs Component classes export selected DOM events (e.g. \"click\", \"mouseover\" etc), this\n\n\n<p>is usually only done when extra value can be added. For example the <a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">DataView</a>'s\n<b><code><a href=\"#/api/Ext.view.View--click\" rel=\"Ext.view.View--click\" class=\"docClass\">click</a></code></b> event passing the node clicked on. To access DOM\nevents directly from a child element of a Component, we need to specify the <code>element</code> option to\nidentify the Component property to add a DOM listener to:</p>\n\n<pre><code>new Ext.panel.Panel({\n    width: 400,\n    height: 200,\n    dockedItems: [{\n        xtype: 'toolbar'\n    }],\n    listeners: {\n        click: {\n            element: 'el', //bind to the underlying el property on the panel\n            fn: function(){ console.log('click el'); }\n        },\n        dblclick: {\n            element: 'body', //bind to the underlying body property on the panel\n            fn: function(){ console.log('dblclick body'); }\n        }\n    }\n});\n</code></pre>\n\n\n<p></p></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Observable.js",
      "linenr": 103,
      "html_filename": "Observable.html",
      "href": "Observable.html#Ext-util-Observable-cfg-listeners",
      "shortDoc": "(optional) A config object containing one or more event handlers to be added to this\nobject during initialization.  T..."
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
      "name": "cancelEdit",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Cancel any active editing.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 355,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-method-cancelEdit",
      "shortDoc": "<p>Cancel any active editing.</p>\n"
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
      "name": "completeEdit",
      "member": "Ext.grid.plugin.Editing",
      "doc": "<p>Complete the edit if there is an active edit in progress.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/Editing.js",
      "linenr": 310,
      "html_filename": "Editing.html",
      "href": "Editing.html#Ext-grid-plugin-Editing-method-completeEdit",
      "shortDoc": "<p>Complete the edit if there is an active edit in progress.</p>\n"
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
      "doc": "<p>Fires the specified event with the passed parameters (minus the event name).</p>\n\n\n<p>An event may be set to bubble up an Observable parent hierarchy (See <a href=\"#/api/Ext.Component-method-getBubbleTarget\" rel=\"Ext.Component-method-getBubbleTarget\" class=\"docClass\">Ext.Component.getBubbleTarget</a>)\nby calling <a href=\"#/api/Ext.grid.plugin.CellEditing-method-enableBubble\" rel=\"Ext.grid.plugin.CellEditing-method-enableBubble\" class=\"docClass\">enableBubble</a>.</p>\n\n",
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
          "doc": "<p>An object containing a series of listeners to add. See <a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a>.</p>\n",
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
      "doc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n",
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
      "shortDoc": "<p>Appends an event handler to this object (shorthand for <a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a>.)</p>\n"
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "doc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.plugin.CellEditing--mon\" rel=\"Ext.grid.plugin.CellEditing--mon\" class=\"docClass\">mon</a> method.</p>\n",
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
      "shortDoc": "<p>Removes listeners that were added by the <a href=\"#/api/Ext.grid.plugin.CellEditing--mon\" rel=\"Ext.grid.plugin.CellEditing--mon\" class=\"docClass\">mon</a> method.</p>\n"
    },
    {
      "tagname": "method",
      "name": "resumeEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Resume firing events. (see <a href=\"#/api/Ext.grid.plugin.CellEditing-method-suspendEvents\" rel=\"Ext.grid.plugin.CellEditing-method-suspendEvents\" class=\"docClass\">suspendEvents</a>)\nIf events were suspended using the <code><b>queueSuspended</b></code> parameter, then all\nevents fired during event suspension will be sent to any listeners now.</p>\n",
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
      "name": "startEdit",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Start editing the specified record, using the specified Column definition to define which field is being edited.</p>\n",
      "params": [
        {
          "type": "Model",
          "name": "record",
          "doc": "<p>The Store data record which backs the row to be edited.</p>\n",
          "optional": false
        },
        {
          "type": "Model",
          "name": "columnHeader",
          "doc": "<p>The Column object defining the column to be edited.\n@override</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 188,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-method-startEdit",
      "shortDoc": "<p>Start editing the specified record, using the specified Column definition to define which field is being edited.</p>\n"
    },
    {
      "tagname": "method",
      "name": "startEditByPosition",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Starts editing by position (row/column)</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "position",
          "doc": "<p>A position with keys of row and column.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 372,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-method-startEditByPosition",
      "shortDoc": "<p>Starts editing by position (row/column)</p>\n"
    },
    {
      "tagname": "method",
      "name": "suspendEvents",
      "member": "Ext.util.Observable",
      "doc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.grid.plugin.CellEditing-method-resumeEvents\" rel=\"Ext.grid.plugin.CellEditing-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "queueSuspended",
          "doc": "<p>Pass as true to queue up suspended events to be fired\nafter the <a href=\"#/api/Ext.grid.plugin.CellEditing-method-resumeEvents\" rel=\"Ext.grid.plugin.CellEditing-method-resumeEvents\" class=\"docClass\">resumeEvents</a> call instead of discarding all suspended events;</p>\n",
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
      "shortDoc": "<p>Suspend the firing of all events. (see <a href=\"#/api/Ext.grid.plugin.CellEditing-method-resumeEvents\" rel=\"Ext.grid.plugin.CellEditing-method-resumeEvents\" class=\"docClass\">resumeEvents</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "un",
      "member": "Ext.util.Observable",
      "doc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.grid.plugin.CellEditing-method-removeListener\" rel=\"Ext.grid.plugin.CellEditing-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n",
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
          "doc": "<p>The handler to remove. <b>This must be a reference to the function passed into the <a href=\"#/api/Ext.grid.plugin.CellEditing-method-addListener\" rel=\"Ext.grid.plugin.CellEditing-method-addListener\" class=\"docClass\">addListener</a> call.</b></p>\n",
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
      "shortDoc": "<p>Removes an event handler (shorthand for <a href=\"#/api/Ext.grid.plugin.CellEditing-method-removeListener\" rel=\"Ext.grid.plugin.CellEditing-method-removeListener\" class=\"docClass\">removeListener</a>.)</p>\n"
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforeedit",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Fires before cell editing is triggered. The edit event object has the following properties <br /></p>\n\n<ul style=\"padding:5px;padding-left:16px;\">\n<li>grid - The grid</li>\n<li>record - The record being edited</li>\n<li>field - The field name being edited</li>\n<li>value - The value for the field being edited.</li>\n<li>row - The grid table row</li>\n<li>column - The grid <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Column</a> defining the column that is being edited.</li>\n<li>rowIdx - The row index that is being edited</li>\n<li>colIdx - The column index that is being edited</li>\n<li>cancel - Set this to true to cancel the edit or return false from your handler.</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Ext.grid.plugin.Editing",
          "name": "editor",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>An edit event (see above for description)</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 68,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-event-beforeedit",
      "shortDoc": "Fires before cell editing is triggered. The edit event object has the following properties \n\n\ngrid - The grid\nrecord ..."
    },
    {
      "tagname": "event",
      "name": "edit",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Fires after a cell is edited. The edit event object has the following properties <br /></p>\n\n<ul style=\"padding:5px;padding-left:16px;\">\n<li>grid - The grid</li>\n<li>record - The record that was edited</li>\n<li>field - The field name that was edited</li>\n<li>value - The value being set</li>\n<li>originalValue - The original value for the field, before the edit.</li>\n<li>row - The grid table row</li>\n<li>column - The grid <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Column</a> defining the column that was edited.</li>\n<li>rowIdx - The row index that was edited</li>\n<li>colIdx - The column index that was edited</li>\n</ul>\n\n\n\n\n<pre><code>grid.on('edit', onEdit, this);\n\nfunction onEdit(e) {\n    // execute an XHR to send/commit data to the server, in callback do (if successful):\n    e.record.commit();\n};\n</code></pre>\n\n",
      "params": [
        {
          "type": "Ext.grid.plugin.Editing",
          "name": "editor",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>An edit event (see above for description)</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 85,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-event-edit",
      "shortDoc": "Fires after a cell is edited. The edit event object has the following properties \n\n\ngrid - The grid\nrecord - The reco..."
    },
    {
      "tagname": "event",
      "name": "validateedit",
      "member": "Ext.grid.plugin.CellEditing",
      "doc": "<p>Fires after a cell is edited, but before the value is set in the record. Return false\nto cancel the change. The edit event object has the following properties <br /></p>\n\n<ul style=\"padding:5px;padding-left:16px;\">\n<li>grid - The grid</li>\n<li>record - The record being edited</li>\n<li>field - The field name being edited</li>\n<li>value - The value being set</li>\n<li>originalValue - The original value for the field, before the edit.</li>\n<li>row - The grid table row</li>\n<li>column - The grid <a href=\"#/api/Ext.grid.column.Column\" rel=\"Ext.grid.column.Column\" class=\"docClass\">Column</a> defining the column that is being edited.</li>\n<li>rowIdx - The row index that is being edited</li>\n<li>colIdx - The column index that is being edited</li>\n<li>cancel - Set this to true to cancel the edit or return false from your handler.</li>\n</ul>\n\n\n<p>Usage example showing how to remove the red triangle (dirty record indicator) from some\nrecords (not all).  By observing the grid's validateedit event, it can be cancelled if\nthe edit occurs on a targeted row (for example) and then setting the field's new value\nin the Record directly:</p>\n\n<pre><code>grid.on('validateedit', function(e) {\n  var myTargetRow = 6;\n\n  if (e.row == myTargetRow) {\n    e.cancel = true;\n    e.record.data[e.field] = e.value;\n  }\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Ext.grid.plugin.Editing",
          "name": "editor",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "e",
          "doc": "<p>An edit event (see above for description)</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
      "linenr": 111,
      "html_filename": "CellEditing.html",
      "href": "CellEditing.html#Ext-grid-plugin-CellEditing-event-validateedit",
      "shortDoc": "Fires after a cell is edited, but before the value is set in the record. Return false\nto cancel the change. The edit ..."
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/CellEditing.js",
  "linenr": 1,
  "html_filename": "CellEditing.html",
  "href": "CellEditing.html#Ext-grid-plugin-CellEditing",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.grid.plugin.Editing"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [
    "Ext.util.Observable"
  ]
});