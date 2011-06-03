Ext.data.JsonP.Ext_grid_plugin_DragDrop({
  "tagname": "class",
  "name": "Ext.grid.plugin.DragDrop",
  "doc": "<p>This plugin provides drag and/or drop functionality for a GridView.</p>\n\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.grid.View\" rel=\"Ext.grid.View\" class=\"docClass\">GridView</a>\nand loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s methods with the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured\n with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>\n<li>view : GridView\n <div class=\"sub-desc\">The source GridView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The GridView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</div></li>\n</ul></p>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are members of the same\nddGroup which processes such data objects.</p>\n\n\n<p>Adding this plugin to a view means that two new events may be fired from the client GridView, <code><a href=\"#/api/Ext.grid.plugin.DragDrop--event-beforedrop\" rel=\"Ext.grid.plugin.DragDrop--event-beforedrop\" class=\"docClass\">beforedrop</a></code> and\n<code><a href=\"#/api/Ext.grid.plugin.DragDrop--event-drop\" rel=\"Ext.grid.plugin.DragDrop--event-drop\" class=\"docClass\">drop</a></code></p>\n\n",
  "extends": "Ext.AbstractPlugin",
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
      "name": "ddGroup",
      "member": "Ext.grid.plugin.DragDrop",
      "type": "String",
      "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\nused by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 90,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-ddGroup",
      "shortDoc": "A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\n..."
    },
    {
      "tagname": "cfg",
      "name": "dragGroup",
      "member": "Ext.grid.plugin.DragDrop",
      "type": "String",
      "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 97,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dragGroup",
      "shortDoc": "The ddGroup to which the DragZone will belong.\n\n\nThis defines which other DropZones the DragZone will interact with. ..."
    },
    {
      "tagname": "cfg",
      "name": "dropGroup",
      "member": "Ext.grid.plugin.DragDrop",
      "type": "String",
      "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 104,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-dropGroup",
      "shortDoc": "The ddGroup to which the DropZone will belong.\n\n\nThis defines which other DragZones the DropZone will interact with. ..."
    },
    {
      "tagname": "cfg",
      "name": "enableDrag",
      "member": "Ext.grid.plugin.DragDrop",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow dragging items from the View </p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 118,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrag"
    },
    {
      "tagname": "cfg",
      "name": "enableDrop",
      "member": "Ext.grid.plugin.DragDrop",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 111,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-cfg-enableDrop"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.AbstractPlugin",
      "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.\nUse this method to clean up an resources.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
      "linenr": 30,
      "html_filename": "AbstractPlugin.html",
      "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
      "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed.\nUse this method t..."
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.AbstractPlugin",
      "doc": "<p>Disable the plugin and set the disabled flag to true.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
      "linenr": 44,
      "html_filename": "AbstractPlugin.html",
      "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
      "shortDoc": "<p>Disable the plugin and set the disabled flag to true.</p>\n"
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.AbstractPlugin",
      "doc": "<p>Enable the plugin and set the disabled flag to false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
      "linenr": 37,
      "html_filename": "AbstractPlugin.html",
      "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
      "shortDoc": "<p>Enable the plugin and set the disabled flag to false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "init",
      "member": "Ext.AbstractPlugin",
      "doc": "<p>The init method is invoked after initComponent has been run for the\ncomponent which we are injecting the plugin into.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractPlugin.js",
      "linenr": 23,
      "html_filename": "AbstractPlugin.html",
      "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
      "shortDoc": "<p>The init method is invoked after initComponent has been run for the\ncomponent which we are injecting the plugin into.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "beforedrop",
      "member": "Ext.grid.plugin.DragDrop",
      "doc": "<p><b>This event is fired through the GridView. Add listeners to the GridView object</b></p>\n\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the GridView.\n\n",
      "params": [
        {
          "type": "HtmlElement",
          "name": "node",
          "doc": "<p>The GridView node <b>if any</b> over which the mouse was positioned.</p></p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy\nwill animate back to the point from which the drag began.</p>\n\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but\nthat the gesture was valid, and that the repair operation should not take place.</p>\n\n\n<p>Any other return value continues with the data transfer operation.</p>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : GridView\n <div class=\"sub-desc\">The source GridView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The GridView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</div></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "overModel",
          "doc": "<p>The Model over which the drop gesture took place.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "dropPosition",
          "doc": "<p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline of the node.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "dropFunction",
          "doc": "<p>A function to call to complete the data transfer operation and either move or copy Model instances from the source\nView's Store to the destination View's Store.</p>\n\n\n<p>This is useful when you want to perform some kind of asynchronous processing before confirming\nthe drop, such as an <a href=\"#/api/Ext.window.MessageBox-method-confirm\" rel=\"Ext.window.MessageBox-method-confirm\" class=\"docClass\">confirm</a> call, or an Ajax request.</p>\n\n\n<p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>\n\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 32,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-event-beforedrop",
      "shortDoc": "This event is fired through the GridView. Add listeners to the GridView object\n\n\nFired when a drop gesture has been t..."
    },
    {
      "tagname": "event",
      "name": "drop",
      "member": "Ext.grid.plugin.DragDrop",
      "doc": "<p><b>This event is fired through the GridView. Add listeners to the GridView object</b>\nFired when a drop operation has been completed and the data has been moved or copied.</p>\n",
      "params": [
        {
          "type": "HtmlElement",
          "name": "node",
          "doc": "<p>The GridView node <b>if any</b> over which the mouse was positioned.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the GridView's <code>copy</code> property, or <code>true</code> if the GridView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : GridView\n <div class=\"sub-desc\">The source GridView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The GridView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source GridView.</div></li>\n</ul></p>\n",
          "optional": false
        },
        {
          "type": "Ext.data.Model",
          "name": "overModel",
          "doc": "<p>The Model over which the drop gesture took place.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "dropPosition",
          "doc": "<p><code>\"before\"</code> or <code>\"after\"</code> depending on whether the mouse is above or below the midline of the node.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
      "linenr": 65,
      "html_filename": "DragDrop2.html",
      "href": "DragDrop2.html#Ext-grid-plugin-DragDrop-event-drop",
      "shortDoc": "This event is fired through the GridView. Add listeners to the GridView object\nFired when a drop operation has been c..."
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/grid/plugin/DragDrop.js",
  "linenr": 1,
  "html_filename": "DragDrop2.html",
  "href": "DragDrop2.html#Ext-grid-plugin-DragDrop",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.AbstractPlugin"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});