Ext.data.JsonP.Ext_tree_ViewDDPlugin({
  "tagname": "class",
  "name": "Ext.tree.ViewDDPlugin",
  "doc": "<p>This plugin provides drag and/or drop functionality for a TreeView.</p>\n\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.tree.View\" rel=\"Ext.tree.View\" class=\"docClass\">TreeView</a>\nand loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s methods with the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are members of the same\nddGroup which processes such data objects.</p>\n\n\n<p>Adding this plugin to a view means that two new events may be fired from the client TreeView, <code><a href=\"#/api/Ext.tree.ViewDDPlugin--event-beforedrop\" rel=\"Ext.tree.ViewDDPlugin--event-beforedrop\" class=\"docClass\">beforedrop</a></code> and\n<code><a href=\"#/api/Ext.tree.ViewDDPlugin--event-drop\" rel=\"Ext.tree.ViewDDPlugin--event-drop\" class=\"docClass\">drop</a></code></p>\n\n",
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
      "name": "allowContainerDrop",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>True if drops on the tree container (outside of a specific tree node) are allowed (defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 100,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-allowContainerDrop"
    },
    {
      "tagname": "cfg",
      "name": "allowParentInsert",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "Boolean",
      "doc": "<p>Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the parent when dropped (defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 93,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-allowParentInsert",
      "shortDoc": "Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the ..."
    },
    {
      "tagname": "cfg",
      "name": "appendOnly",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>True if the tree should only allow append drops (use for trees which are sorted, defaults to false)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 106,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-appendOnly"
    },
    {
      "tagname": "cfg",
      "name": "ddGroup",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\nused by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 112,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-ddGroup",
      "shortDoc": "A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\n..."
    },
    {
      "tagname": "cfg",
      "name": "dragGroup",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 119,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-dragGroup",
      "shortDoc": "The ddGroup to which the DragZone will belong.\n\n\nThis defines which other DropZones the DragZone will interact with. ..."
    },
    {
      "tagname": "cfg",
      "name": "dropGroup",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 126,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-dropGroup",
      "shortDoc": "The ddGroup to which the DropZone will belong.\n\n\nThis defines which other DragZones the DropZone will interact with. ..."
    },
    {
      "tagname": "cfg",
      "name": "enableDrag",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow dragging items from the View </p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 147,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-enableDrag"
    },
    {
      "tagname": "cfg",
      "name": "enableDrop",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "Boolean",
      "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 140,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-enableDrop"
    },
    {
      "tagname": "cfg",
      "name": "expandDelay",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target (defaults to 1000)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 133,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-expandDelay",
      "shortDoc": "The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target..."
    },
    {
      "tagname": "cfg",
      "name": "nodeHighlightColor",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "String",
      "doc": "<p>The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without\na preceding '#'. See also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 154,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightColor",
      "shortDoc": "The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). The colo..."
    },
    {
      "tagname": "cfg",
      "name": "nodeHighlightOnDrop",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "Boolean",
      "doc": "<p>Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 161,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightOnDrop",
      "shortDoc": "Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. Defaults to the value of E..."
    },
    {
      "tagname": "cfg",
      "name": "nodeHighlightOnRepair",
      "member": "Ext.tree.ViewDDPlugin",
      "type": "Boolean",
      "doc": "<p>Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 169,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightOnRepair",
      "shortDoc": "Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. Defaults to the value o..."
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
      "member": "Ext.tree.ViewDDPlugin",
      "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b></p>\n\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the TreeView.\n\n",
      "params": [
        {
          "type": "HtmlElement",
          "name": "node",
          "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p></p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy\nwill animate back to the point from which the drag began.</p>\n\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but\nthat the gesture was valid, and that the repair operation should not take place.</p>\n\n\n<p>Any other return value continues with the data transfer operation.</p>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
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
          "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 33,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-event-beforedrop",
      "shortDoc": "This event is fired through the TreeView. Add listeners to the TreeView object\n\n\nFired when a drop gesture has been t..."
    },
    {
      "tagname": "event",
      "name": "drop",
      "member": "Ext.tree.ViewDDPlugin",
      "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b>\nFired when a drop operation has been completed and the data has been moved or copied.</p>\n",
      "params": [
        {
          "type": "HtmlElement",
          "name": "node",
          "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
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
          "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
      "linenr": 67,
      "html_filename": "TreeViewDragDrop.html",
      "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-event-drop",
      "shortDoc": "This event is fired through the TreeView. Add listeners to the TreeView object\nFired when a drop operation has been c..."
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
  "linenr": 1,
  "html_filename": "TreeViewDragDrop.html",
  "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin",
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