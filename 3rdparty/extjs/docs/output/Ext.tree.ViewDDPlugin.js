Ext.data.JsonP.Ext_tree_ViewDDPlugin({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.AbstractPlugin"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-allowContainerDrop",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "static": false,
        "name": "allowContainerDrop",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>True if drops on the tree container (outside of a specific tree node) are allowed (defaults to false)</p>\n",
        "linenr": 100,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-allowParentInsert",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the ...",
        "static": false,
        "name": "allowParentInsert",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>Allow inserting a dragged node between an expanded parent node and its first child that will become a\nsibling of the parent when dropped (defaults to false)</p>\n",
        "linenr": 93,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-appendOnly",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "static": false,
        "name": "appendOnly",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>True if the tree should only allow append drops (use for trees which are sorted, defaults to false)</p>\n",
        "linenr": 106,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-ddGroup",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "static": false,
        "name": "ddGroup",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then both the DragZones and DropZone\nused by this plugin will only interact with other drag drop objects in the same group (defaults to 'TreeDD').</p>\n",
        "linenr": 112,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-dragGroup",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "The ddGroup to which the DragZone will belong. ...",
        "static": false,
        "name": "dragGroup",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>The ddGroup to which the DragZone will belong.</p>\n\n\n<p>This defines which other DropZones the DragZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
        "linenr": 119,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-dropGroup",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "The ddGroup to which the DropZone will belong. ...",
        "static": false,
        "name": "dropGroup",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>The ddGroup to which the DropZone will belong.</p>\n\n\n<p>This defines which other DragZones the DropZone will interact with. Drag/DropZones only interact with other Drag/DropZones\nwhich are members of the same ddGroup.</p>\n\n",
        "linenr": 126,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-enableDrag",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "static": false,
        "name": "enableDrag",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow dragging items from the View </p>\n\n",
        "linenr": 147,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-enableDrop",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "static": false,
        "name": "enableDrop",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>Defaults to <code>true</code></p>\n\n\n<p>Set to <code>false</code> to disallow the View from accepting drop gestures</p>\n\n",
        "linenr": 140,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-expandDelay",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target...",
        "static": false,
        "name": "expandDelay",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>The delay in milliseconds to wait before expanding a target tree node while dragging a droppable node\nover the target (defaults to 1000)</p>\n",
        "linenr": 133,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightColor",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). ...",
        "static": false,
        "name": "nodeHighlightColor",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>The color to use when visually highlighting the dragged\nor dropped node (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without\na preceding '#'. See also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
        "linenr": 154,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightOnDrop",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. ...",
        "static": false,
        "name": "nodeHighlightOnDrop",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>Whether or not to highlight any nodes after they are\nsuccessfully dropped on their target. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnRepair\" class=\"docClass\">nodeHighlightOnRepair</a>.</p>\n",
        "linenr": 161,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-cfg-nodeHighlightOnRepair",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. ...",
        "static": false,
        "name": "nodeHighlightOnRepair",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p>Whether or not to highlight any nodes after they are\nrepaired from an unsuccessful drag/drop. Defaults to the value of <code>Ext.enableFx</code>.\nSee also <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightColor\" class=\"docClass\">nodeHighlightColor</a> and <a href=\"#/api/Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" rel=\"Ext.tree.ViewDDPlugin-cfg-nodeHighlightOnDrop\" class=\"docClass\">nodeHighlightOnDrop</a>.</p>\n",
        "linenr": 169,
        "html_filename": "TreeViewDragDrop.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "shortDoc": "The destroy method is invoked by the owning Component at the time the Component is being destroyed. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The destroy method is invoked by the owning Component at the time the Component is being destroyed.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin cleanup in their own implementation of this method.</p>\n\n",
        "linenr": 42,
        "html_filename": "AbstractPlugin.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "shortDoc": "The base implementation just sets the plugin's disabled flag to true\n\n\nPlugin subclasses which need more complex proc...",
        "static": false,
        "name": "disable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>true</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "linenr": 57,
        "html_filename": "AbstractPlugin.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "shortDoc": "The base implementation just sets the plugin's disabled flag to false\n\n\nPlugin subclasses which need more complex pro...",
        "static": false,
        "name": "enable",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The base implementation just sets the plugin's <code>disabled</code> flag to <code>false</code></p>\n\n\n<p>Plugin subclasses which need more complex processing may implement an overriding implementation.</p>\n\n",
        "linenr": 49,
        "html_filename": "AbstractPlugin.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Component",
            "optional": false,
            "doc": "<p>The client Component which owns this plugin.</p>\n",
            "name": "client"
          }
        ],
        "href": "AbstractPlugin.html#Ext-AbstractPlugin-method-init",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractPlugin.js",
        "private": false,
        "shortDoc": "The init method is invoked after initComponent has been run for the client Component. ...",
        "static": false,
        "name": "init",
        "owner": "Ext.AbstractPlugin",
        "doc": "<p>The init method is invoked after initComponent has been run for the client Component.</p>\n\n\n<p>The supplied implementation is empty. Subclasses should perform plugin initialization, and set up bidirectional\nlinks between the plugin and its client Component in their own implementation of this method.</p>\n\n",
        "linenr": 33,
        "html_filename": "AbstractPlugin.html"
      }
    ],
    "event": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p></p>\n\n<p>Returning <code>false</code> to this event signals that the drop gesture was invalid, and if the drag proxy\nwill animate back to the point from which the drag began.</p>\n\n\n<p>Returning <code>0</code> To this event signals that the data transfer operation should not take place, but\nthat the gesture was valid, and that the repair operation should not take place.</p>\n\n\n<p>Any other return value continues with the data transfer operation.</p>\n\n",
            "name": "node"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
            "name": "data"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The Model over which the drop gesture took place.</p>\n",
            "name": "overModel"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
            "name": "dropPosition"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>A function to call to complete the data transfer operation and either move or copy Model instances from the source\nView's Store to the destination View's Store.</p>\n\n\n<p>This is useful when you want to perform some kind of asynchronous processing before confirming\nthe drop, such as an <a href=\"#/api/Ext.window.MessageBox-method-confirm\" rel=\"Ext.window.MessageBox-method-confirm\" class=\"docClass\">confirm</a> call, or an Ajax request.</p>\n\n\n<p>Return <code>0</code> from this event handler, and call the <code>dropFunction</code> at any time to perform the data transfer.</p>\n\n",
            "name": "dropFunction"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-event-beforedrop",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "This event is fired through the TreeView. ...",
        "static": false,
        "name": "beforedrop",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b></p>\n\n\n<p>Fired when a drop gesture has been triggered by a mouseup event in a valid drop position in the TreeView.\n\n",
        "linenr": 33,
        "html_filename": "TreeViewDragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HtmlElement",
            "optional": false,
            "doc": "<p>The TreeView node <b>if any</b> over which the mouse was positioned.</p>\n",
            "name": "node"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The data object gathered at mousedown time by the cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s\n<a href=\"#/api/Ext.dd.DragZone-method-getDragData\" rel=\"Ext.dd.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method it contains the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> and the control key was pressed when the drag operation was begun</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n",
            "name": "data"
          },
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The Model over which the drop gesture took place.</p>\n",
            "name": "overModel"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p><code>\"before\"</code>, <code>\"after\"</code> or <code>\"append\"</code> depending on whether the mouse is above or below the midline of the node,\nor the node is a branch node which accepts new child nodes.</p>\n",
            "name": "dropPosition"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "href": "TreeViewDragDrop.html#Ext-tree-ViewDDPlugin-event-drop",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
        "private": false,
        "shortDoc": "This event is fired through the TreeView. ...",
        "static": false,
        "name": "drop",
        "owner": "Ext.tree.ViewDDPlugin",
        "doc": "<p><b>This event is fired through the TreeView. Add listeners to the TreeView object</b>\nFired when a drop operation has been completed and the data has been moved or copied.</p>\n",
        "linenr": 67,
        "html_filename": "TreeViewDragDrop.html"
      }
    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tree/plugin/TreeViewDragDrop.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.tree.ViewDDPlugin",
  "doc": "<p>This plugin provides drag and/or drop functionality for a TreeView.</p>\n\n\n<p>It creates a specialized instance of <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> which knows how to drag out of a <a href=\"#/api/Ext.tree.View\" rel=\"Ext.tree.View\" class=\"docClass\">TreeView</a>\nand loads the data object which is passed to a cooperating <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>'s methods with the following properties:<ul>\n<li>copy : Boolean\n <div class=\"sub-desc\">The value of the TreeView's <code>copy</code> property, or <code>true</code> if the TreeView was configured\n with <code>allowCopy: true</code> <u>and</u> the control key was pressed when the drag operation was begun.</div></li>\n<li>view : TreeView\n <div class=\"sub-desc\">The source TreeView from which the drag originated.</div></li>\n<li>ddel : HtmlElement\n <div class=\"sub-desc\">The drag proxy element which moves with the mouse</div></li>\n<li>item : HtmlElement\n <div class=\"sub-desc\">The TreeView node upon which the mousedown event was registered.</div></li>\n<li>records : Array\n <div class=\"sub-desc\">An Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>s representing the selected data being dragged from the source TreeView.</div></li>\n</ul></p>\n\n\n<p>It also creates a specialized instance of <a href=\"#/api/Ext.dd.DropZone\" rel=\"Ext.dd.DropZone\" class=\"docClass\">Ext.dd.DropZone</a> which cooperates with other DropZones which are members of the same\nddGroup which processes such data objects.</p>\n\n\n<p>Adding this plugin to a view means that two new events may be fired from the client TreeView, <code>beforedrop</code> and\n<code>drop</code></p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "TreeViewDragDrop.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.AbstractPlugin"
});