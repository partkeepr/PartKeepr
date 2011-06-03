Ext.data.JsonP.Ext_view_DragZone({
  "tagname": "class",
  "name": "Ext.view.DragZone",
  "doc": "\n",
  "extends": "Ext.dd.DragZone",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "animRepair",
      "member": "Ext.dd.DragSource",
      "type": "Boolean",
      "doc": "<p>Defaults to true. If true, animates the proxy element back to the position of the handle element used to trigger the drag.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 34,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-cfg-animRepair",
      "shortDoc": "Defaults to true. If true, animates the proxy element back to the position of the handle element used to trigger the ..."
    },
    {
      "tagname": "cfg",
      "name": "containerScroll",
      "member": "Ext.dd.DragZone",
      "type": "Boolean",
      "doc": "<p>True to register this container with the Scrollmanager\nfor auto scrolling during drag operations.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 78,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-cfg-containerScroll"
    },
    {
      "tagname": "cfg",
      "name": "ddGroup",
      "member": "Ext.dd.DragSource",
      "type": "String",
      "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract with other drag drop objects in the same group (defaults to undefined).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 16,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-cfg-ddGroup",
      "shortDoc": "A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract w..."
    },
    {
      "tagname": "cfg",
      "name": "dropAllowed",
      "member": "Ext.dd.DragSource",
      "type": "String",
      "doc": "<p>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 22,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-cfg-dropAllowed"
    },
    {
      "tagname": "cfg",
      "name": "dropNotAllowed",
      "member": "Ext.dd.DragSource",
      "type": "String",
      "doc": "<p>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 28,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-cfg-dropNotAllowed"
    },
    {
      "tagname": "cfg",
      "name": "repairHighlightColor",
      "member": "Ext.dd.DragSource",
      "type": "String",
      "doc": "<p>The color to use when visually highlighting the drag source in the afterRepair\nmethod after a failed drop (defaults to 'c3daf9' - light blue). The color must be a 6 digit hex value, without\na preceding '#'.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 40,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-cfg-repairHighlightColor",
      "shortDoc": "The color to use when visually highlighting the drag source in the afterRepair\nmethod after a failed drop (defaults t..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "DragZone",
      "member": "Ext.dd.DragZone",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The container element</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 1,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "addInvalidHandleClass",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n",
      "params": [
        {
          "type": "string",
          "name": "cssClass",
          "doc": "<p>the class of the elements you wish to ignore</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 894,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
      "shortDoc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n"
    },
    {
      "tagname": "method",
      "name": "addInvalidHandleId",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n",
      "params": [
        {
          "type": "string",
          "name": "id",
          "doc": "<p>the element id of the element you wish to ignore</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 881,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
      "shortDoc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n"
    },
    {
      "tagname": "method",
      "name": "addInvalidHandleType",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n",
      "params": [
        {
          "type": "string",
          "name": "tagName",
          "doc": "<p>the type of element to exclude</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 869,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
      "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate..."
    },
    {
      "tagname": "method",
      "name": "addToGroup",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Add this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "sGroup",
          "doc": "<p>{string} the name of the group</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 730,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
      "shortDoc": "Add this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belon..."
    },
    {
      "tagname": "method",
      "name": "afterDragDrop",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nafter a valid drag drop has occurred by providing an implementation.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dropped element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 203,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-afterDragDrop",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nafter a valid drag drop has occurr..."
    },
    {
      "tagname": "method",
      "name": "afterDragEnter",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nwhen the dragged item enters the drop target by providing an implementation.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 87,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-afterDragEnter",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nwhen the dragged item enters the d..."
    },
    {
      "tagname": "method",
      "name": "afterDragOut",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nafter the dragged item is dragged out of the target without dropping.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 162,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-afterDragOut",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nafter the dragged item is dragged ..."
    },
    {
      "tagname": "method",
      "name": "afterDragOver",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nwhile the dragged item is over the drop target by providing an implementation.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 128,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-afterDragOver",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nwhile the dragged item is over the..."
    },
    {
      "tagname": "method",
      "name": "afterInvalidDrop",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nafter an invalid drop has occurred by providing an implementation.</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dropped element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 262,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-afterInvalidDrop",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nafter an invalid drop has occurred..."
    },
    {
      "tagname": "method",
      "name": "afterRepair",
      "member": "Ext.dd.DragZone",
      "doc": "<p>Called after a repair of an invalid drop. By default, highlights this.dragData.ddel</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 108,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-method-afterRepair",
      "shortDoc": "<p>Called after a repair of an invalid drop. By default, highlights this.dragData.ddel</p>\n"
    },
    {
      "tagname": "method",
      "name": "alignElWithMouse",
      "member": "Ext.dd.DD",
      "doc": "<p>Sets the element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the location on the element\nthat was clicked.  Override this if you want to place the element in a\nlocation other than where the cursor is.</p>\n",
      "params": [
        {
          "type": "HTMLElement",
          "name": "el",
          "doc": "<p>the element to move</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iPageX",
          "doc": "<p>the X coordinate of the mousedown or drag event</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iPageY",
          "doc": "<p>the Y coordinate of the mousedown or drag event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 84,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-alignElWithMouse",
      "shortDoc": "Sets the element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the loc..."
    },
    {
      "tagname": "method",
      "name": "applyConfig",
      "member": "Ext.dd.DD",
      "doc": "<p>Sets up config options specific to this class. Overrides\nExt.dd.DragDrop, but all versions of this method through the\ninheritance chain are called</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 258,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-applyConfig",
      "shortDoc": "Sets up config options specific to this class. Overrides\nExt.dd.DragDrop, but all versions of this method through the..."
    },
    {
      "tagname": "method",
      "name": "autoOffset",
      "member": "Ext.dd.DD",
      "doc": "<p>Sets the pointer offset to the distance between the linked element's top\nleft corner and the location the element was clicked</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iPageX",
          "doc": "<p>the X coordinate of the click</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iPageY",
          "doc": "<p>the Y coordinate of the click</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 41,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-autoOffset",
      "shortDoc": "Sets the pointer offset to the distance between the linked element's top\nleft corner and the location the element was..."
    },
    {
      "tagname": "method",
      "name": "b4Drag",
      "member": "Ext.dd.DD",
      "doc": "<p>Event that fires prior to the onDrag event.  Overrides\nExt.dd.DragDrop.</p>\n",
      "params": [
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 277,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-b4Drag",
      "shortDoc": "<p>Event that fires prior to the onDrag event.  Overrides\nExt.dd.DragDrop.</p>\n"
    },
    {
      "tagname": "method",
      "name": "b4MouseDown",
      "member": "Ext.dd.DD",
      "doc": "<p>Event that fires prior to the onMouseDown event.  Overrides\nExt.dd.DragDrop.</p>\n",
      "params": [
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 268,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-b4MouseDown",
      "shortDoc": "<p>Event that fires prior to the onMouseDown event.  Overrides\nExt.dd.DragDrop.</p>\n"
    },
    {
      "tagname": "method",
      "name": "beforeDragDrop",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action before the dragged\nitem is dropped onto the target and optionally cancel the onDragDrop.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the drag drop event is valid, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 217,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-beforeDragDrop",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action before the dragged\nitem is dropped..."
    },
    {
      "tagname": "method",
      "name": "beforeDragEnter",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nbefore the dragged item enters the drop target and optionally cancel the onDragEnter.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the drag event is valid, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 100,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-beforeDragEnter",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nbefore the dragged item enters the..."
    },
    {
      "tagname": "method",
      "name": "beforeDragOut",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action before the dragged\nitem is dragged out of the target without dropping, and optionally cancel the onDragOut.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the drag event is valid, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 176,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-beforeDragOut",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action before the dragged\nitem is dragged..."
    },
    {
      "tagname": "method",
      "name": "beforeDragOver",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action\nwhile the dragged item is over the drop target and optionally cancel the onDragOver.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the drag event is valid, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 141,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-beforeDragOver",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action\nwhile the dragged item is over the..."
    },
    {
      "tagname": "method",
      "name": "beforeInvalidDrop",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action after an invalid\ndrop has occurred.</p>\n",
      "params": [
        {
          "type": "Ext.dd.DragDrop",
          "name": "target",
          "doc": "<p>The drop target</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the dragged element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the invalid drop should proceed, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 282,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-beforeInvalidDrop",
      "shortDoc": "<p>An empty function by default, but provided so that you can perform a custom action after an invalid\ndrop has occurred.</p>\n"
    },
    {
      "tagname": "method",
      "name": "cachePosition",
      "member": "Ext.dd.DD",
      "doc": "<p>Saves the most recent position so that we can reset the constraints and\ntick marks on-demand.  We need to know this so that we can calculate the\nnumber of pixels the element is offset from its original position.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "iPageX",
          "doc": "<p>the current x position (optional, this just makes it so we\ndon't have to look it up again)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "iPageY",
          "doc": "<p>the current y position (optional, this just makes it so we\ndon't have to look it up again)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 124,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-cachePosition",
      "shortDoc": "Saves the most recent position so that we can reset the constraints and\ntick marks on-demand.  We need to know this s..."
    },
    {
      "tagname": "method",
      "name": "clearConstraints",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1049,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
      "shortDoc": "Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constrain..."
    },
    {
      "tagname": "method",
      "name": "clearTicks",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Clears any tick interval defined for this instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1060,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
      "shortDoc": "<p>Clears any tick interval defined for this instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "constrainTo",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code> var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n                { dragElId: \"existingProxyDiv\" });\n dd.startDrag = function(){\n     this.constrainTo(\"parent-id\");\n };\n </code></pre>\n\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object:</p>\n\n<pre><code> Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n     startDrag : function(){\n         this.constrainTo(\"parent-id\");\n     }\n });\n </code></pre>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "constrainTo",
          "doc": "<p>The element to constrain to.</p>\n",
          "optional": false
        },
        {
          "type": "Object/Number",
          "name": "pad",
          "doc": "<p>(optional) Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to {left:4, right:4, top:4, bottom:4}) or\nan object containing the sides to pad. For example: {right:10, bottom:10}</p>\n",
          "optional": true
        },
        {
          "type": "Boolean",
          "name": "inContent",
          "doc": "<p>(optional) Constrain the draggable in the content box of the element (inside padding and borders)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 493,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
      "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element.\n\nUsage:\n\n var dd = new Ext...."
    },
    {
      "tagname": "method",
      "name": "createFrame",
      "member": "Ext.dd.DDProxy",
      "doc": "<p>Creates the proxy element if it does not yet exist</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
      "linenr": 67,
      "html_filename": "DDProxy.html",
      "href": "DDProxy.html#Ext-dd-DDProxy-method-createFrame",
      "shortDoc": "<p>Creates the proxy element if it does not yet exist</p>\n"
    },
    {
      "tagname": "method",
      "name": "endDrag",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Fired when we are done dragging the object</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mouseup event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 445,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
      "shortDoc": "<p>Fired when we are done dragging the object</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDragData",
      "member": "Ext.dd.DragZone",
      "doc": "<p>Called when a mousedown occurs in this container. Looks in <a href=\"#/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>\nfor a valid target to drag based on the mouse down. Override this method\nto provide your own lookup logic (e.g. finding a child by class name). Make sure your returned\nobject has a \"ddel\" attribute (with an HTML Element) for other functions to work.</p>\n",
      "params": [
        {
          "type": "EventObject",
          "name": "e",
          "doc": "<p>The mouse down event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The dragData</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 83,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-method-getDragData",
      "shortDoc": "Called when a mousedown occurs in this container. Looks in Ext.dd.Registry\nfor a valid target to drag based on the mo..."
    },
    {
      "tagname": "method",
      "name": "getDragEl",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in Ext.dd.DDProxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>the html element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 563,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
      "shortDoc": "Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be as..."
    },
    {
      "tagname": "method",
      "name": "getEl",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Returns a reference to the linked element</p>\n",
      "params": [

      ],
      "return": {
        "type": "HTMLElement",
        "doc": "<p>the html element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 550,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
      "shortDoc": "<p>Returns a reference to the linked element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getProxy",
      "member": "Ext.dd.DragSource",
      "doc": "<p>Returns the drag source's underlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.dd.StatusProxy",
        "doc": "<p>proxy The StatusProxy</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 345,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-getProxy",
      "shortDoc": "<p>Returns the drag source's underlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getRepairXY",
      "member": "Ext.dd.DragZone",
      "doc": "<p>Called before a repair of an invalid drop to get the XY to animate to. By default returns\nthe XY of this.dragData.ddel</p>\n",
      "params": [
        {
          "type": "EventObject",
          "name": "e",
          "doc": "<p>The mouse up event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The xy location (e.g. [100, 200])</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 119,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-method-getRepairXY",
      "shortDoc": "<p>Called before a repair of an invalid drop to get the XY to animate to. By default returns\nthe XY of this.dragData.ddel</p>\n"
    },
    {
      "tagname": "method",
      "name": "hideProxy",
      "member": "Ext.dd.DragSource",
      "doc": "<p>Hides the drag source's <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 353,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-hideProxy",
      "shortDoc": "<p>Hides the drag source's <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "init",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "id",
          "doc": "<p>the id of the linked element</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "sGroup",
          "doc": "<p>the group of related items</p>\n",
          "optional": false
        },
        {
          "type": "object",
          "name": "config",
          "doc": "<p>configuration attributes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 574,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
      "shortDoc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n"
    },
    {
      "tagname": "method",
      "name": "initFrame",
      "member": "Ext.dd.DDProxy",
      "doc": "<p>Initialization for the drag frame element.  Must be called in the\nconstructor of all subclasses</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
      "linenr": 100,
      "html_filename": "DDProxy.html",
      "href": "DDProxy.html#Ext-dd-DDProxy-method-initFrame",
      "shortDoc": "<p>Initialization for the drag frame element.  Must be called in the\nconstructor of all subclasses</p>\n"
    },
    {
      "tagname": "method",
      "name": "initTarget",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "id",
          "doc": "<p>the id of the linked element</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "sGroup",
          "doc": "<p>the group of related items</p>\n",
          "optional": false
        },
        {
          "type": "object",
          "name": "config",
          "doc": "<p>configuration attributes</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 588,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
      "shortDoc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLocked",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n",
      "params": [

      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 814,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
      "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th..."
    },
    {
      "tagname": "method",
      "name": "isValidHandleChild",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n",
      "params": [
        {
          "type": "HTMLElement",
          "name": "node",
          "doc": "<p>the HTMLElement to evaluate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if this is a valid tag type, false if not</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 940,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
      "shortDoc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n"
    },
    {
      "tagname": "method",
      "name": "lock",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Lock this instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 177,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
      "shortDoc": "<p>Lock this instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "onAvailable",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 474,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
      "shortDoc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n"
    },
    {
      "tagname": "method",
      "name": "onBeforeDrag",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action before the initial\ndrag event begins and optionally cancel it.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>An object containing arbitrary data to be shared with drop targets</p>\n",
          "optional": false
        },
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>The event object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>isValid True if the drag event is valid, else false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 307,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-onBeforeDrag",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action before the initial\ndrag event begi..."
    },
    {
      "tagname": "method",
      "name": "onDrag",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mousemove event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 358,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
      "shortDoc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n"
    },
    {
      "tagname": "method",
      "name": "onDragDrop",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mouseup event</p>\n",
          "optional": false
        },
        {
          "type": "String|DragDrop[]",
          "name": "id",
          "doc": "<p>In POINT mode, the element\nid this was dropped on.  In INTERSECT mode, an array of dd items this\nwas dropped on.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 419,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
      "shortDoc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n"
    },
    {
      "tagname": "method",
      "name": "onDragEnter",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mousemove event</p>\n",
          "optional": false
        },
        {
          "type": "String|DragDrop[]",
          "name": "id",
          "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of one or more\ndragdrop items being hovered over.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 366,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
      "shortDoc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n"
    },
    {
      "tagname": "method",
      "name": "onDragOut",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mousemove event</p>\n",
          "optional": false
        },
        {
          "type": "String|DragDrop[]",
          "name": "id",
          "doc": "<p>In POINT mode, the element\nid this was hovering over.  In INTERSECT mode, an array of dd items\nthat the mouse is no longer over.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 402,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
      "shortDoc": "<p>Abstract method called when we are no longer hovering over an element</p>\n"
    },
    {
      "tagname": "method",
      "name": "onDragOver",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mousemove event</p>\n",
          "optional": false
        },
        {
          "type": "String|DragDrop[]",
          "name": "id",
          "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of dd items\nbeing hovered over.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 384,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
      "shortDoc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n"
    },
    {
      "tagname": "method",
      "name": "onInitDrag",
      "member": "Ext.dd.DragZone",
      "doc": "<p>Called once drag threshold has been reached to initialize the proxy element. By default, it clones the\nthis.dragData.ddel</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The x position of the click on the dragged object</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>The y position of the click on the dragged object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true to continue the drag, false to cancel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 95,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-method-onInitDrag",
      "shortDoc": "Called once drag threshold has been reached to initialize the proxy element. By default, it clones the\nthis.dragData...."
    },
    {
      "tagname": "method",
      "name": "onInvalidDrop",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mouseup event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 430,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
      "shortDoc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n"
    },
    {
      "tagname": "method",
      "name": "onMouseDown",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Event handler that fires when a drag/drop obj gets a mousedown</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mousedown event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 460,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
      "shortDoc": "<p>Event handler that fires when a drag/drop obj gets a mousedown</p>\n"
    },
    {
      "tagname": "method",
      "name": "onMouseUp",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Event handler that fires when a drag/drop obj gets a mouseup</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the mouseup event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 467,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
      "shortDoc": "<p>Event handler that fires when a drag/drop obj gets a mouseup</p>\n"
    },
    {
      "tagname": "method",
      "name": "onStartDrag",
      "member": "Ext.dd.DragSource",
      "doc": "<p>An empty function by default, but provided so that you can perform a custom action once the initial\ndrag event has begun.  The drag cannot be canceled from this function.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "x",
          "doc": "<p>The x position of the click on the dragged object</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "y",
          "doc": "<p>The y position of the click on the dragged object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragSource.js",
      "linenr": 318,
      "html_filename": "DragSource.html",
      "href": "DragSource.html#Ext-dd-DragSource-method-onStartDrag",
      "shortDoc": "An empty function by default, but provided so that you can perform a custom action once the initial\ndrag event has be..."
    },
    {
      "tagname": "method",
      "name": "removeFromGroup",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Remove's this instance from the supplied interaction group</p>\n",
      "params": [
        {
          "type": "string",
          "name": "sGroup",
          "doc": "<p>The group to drop</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 742,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
      "shortDoc": "<p>Remove's this instance from the supplied interaction group</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeInvalidHandleClass",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Unsets an invalid css class</p>\n",
      "params": [
        {
          "type": "string",
          "name": "cssClass",
          "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 926,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
      "shortDoc": "<p>Unsets an invalid css class</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeInvalidHandleId",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Unsets an invalid handle id</p>\n",
      "params": [
        {
          "type": "string",
          "name": "id",
          "doc": "<p>the id of the element to re-enable</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 914,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
      "shortDoc": "<p>Unsets an invalid handle id</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeInvalidHandleType",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n",
      "params": [
        {
          "type": "string",
          "name": "tagName",
          "doc": "<p>the type of element to unexclude</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 903,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
      "shortDoc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n"
    },
    {
      "tagname": "method",
      "name": "resetConstraints",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>resetConstraints must be called if you manually reposition a dd element.</p>\n",
      "params": [
        {
          "type": "boolean",
          "name": "maintainOffset",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1093,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
      "shortDoc": "<p>resetConstraints must be called if you manually reposition a dd element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDelta",
      "member": "Ext.dd.DD",
      "doc": "<p>Sets the pointer offset.  You can call this directly to force the\noffset to be in a particular location (e.g., pass in 0,0 to set it\nto the center of the object)</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iDeltaX",
          "doc": "<p>the distance from the left</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iDeltaY",
          "doc": "<p>the distance from the top</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 54,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-setDelta",
      "shortDoc": "Sets the pointer offset.  You can call this directly to force the\noffset to be in a particular location (e.g., pass i..."
    },
    {
      "tagname": "method",
      "name": "setDragElId",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "id",
          "doc": "<p>{string} the id of the element that will be used to initiate the drag</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 755,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
      "shortDoc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDragElPos",
      "member": "Ext.dd.DD",
      "doc": "<p>Sets the drag element to the location of the mousedown or click event,\nmaintaining the cursor location relative to the location on the element\nthat was clicked.  Override this if you want to place the element in a\nlocation other than where the cursor is.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iPageX",
          "doc": "<p>the X coordinate of the mousedown or drag event</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iPageY",
          "doc": "<p>the Y coordinate of the mousedown or drag event</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 67,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-method-setDragElPos",
      "shortDoc": "Sets the drag element to the location of the mousedown or click event,\nmaintaining the cursor location relative to th..."
    },
    {
      "tagname": "method",
      "name": "setHandleElId",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "id",
          "doc": "<p>{string} the id of the element that will be used to\ninitiate the drag.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 765,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
      "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example o..."
    },
    {
      "tagname": "method",
      "name": "setInitPosition",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Stores the initial placement of the linked element.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "diffX",
          "doc": "<p>the X offset, default 0</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "diffY",
          "doc": "<p>the Y offset, default 0</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 688,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
      "shortDoc": "<p>Stores the initial placement of the linked element.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setOuterHandleElId",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "id",
          "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 784,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
      "shortDoc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n"
    },
    {
      "tagname": "method",
      "name": "setPadding",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iTop",
          "doc": "<p>Top pad</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iRight",
          "doc": "<p>Right pad</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iBot",
          "doc": "<p>Bot pad</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iLeft",
          "doc": "<p>Left pad</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 665,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
      "shortDoc": "Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targe..."
    },
    {
      "tagname": "method",
      "name": "setXConstraint",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iLeft",
          "doc": "<p>the number of pixels the element can move to the left</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iRight",
          "doc": "<p>the number of pixels the element can move to the\nright</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iTickSize",
          "doc": "<p>optional parameter for specifying that the\nelement\nshould move iTickSize pixels at a time.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1026,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
      "shortDoc": "By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of th..."
    },
    {
      "tagname": "method",
      "name": "setYConstraint",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "iUp",
          "doc": "<p>the number of pixels the element can move up</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iDown",
          "doc": "<p>the number of pixels the element can move down</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "iTickSize",
          "doc": "<p>optional parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1071,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
      "shortDoc": "By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element..."
    },
    {
      "tagname": "method",
      "name": "startDrag",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n",
      "params": [
        {
          "type": "int",
          "name": "X",
          "doc": "<p>click location</p>\n",
          "optional": false
        },
        {
          "type": "int",
          "name": "Y",
          "doc": "<p>click location</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 342,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
      "shortDoc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toString",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>toString method</p>\n",
      "params": [

      ],
      "return": {
        "type": "string",
        "doc": "<p>string representation of the dd obj</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 1160,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
      "shortDoc": "<p>toString method</p>\n"
    },
    {
      "tagname": "method",
      "name": "unlock",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Unlock this instace</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 193,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
      "shortDoc": "<p>Unlock this instace</p>\n"
    },
    {
      "tagname": "method",
      "name": "unreg",
      "member": "Ext.dd.DragDrop",
      "doc": "<p>Remove all drag and drop hooks for this element</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 800,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
      "shortDoc": "<p>Remove all drag and drop hooks for this element</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "Ext",
      "member": "Ext.dd.DDProxy",
      "type": "String",
      "doc": "<p>The default drag frame div id .dd.DDProxy.dragElId</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
      "linenr": 32,
      "html_filename": "DDProxy.html",
      "href": "DDProxy.html#Ext-dd-DDProxy-property-Ext"
    },
    {
      "tagname": "property",
      "name": "available",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 315,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-available"
    },
    {
      "tagname": "property",
      "name": "centerFrame",
      "member": "Ext.dd.DDProxy",
      "type": "boolean",
      "doc": "<p>By default the frame is positioned exactly where the drag element is, so\nwe use the cursor offset provided by <a href=\"#/api/Ext.dd.DD\" rel=\"Ext.dd.DD\" class=\"docClass\">Ext.dd.DD</a>.  Another option that works only if\nyou do not have constraints on the obj is to have the drag frame centered\naround the cursor.  Set centerFrame to true for this effect.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
      "linenr": 57,
      "html_filename": "DDProxy.html",
      "href": "DDProxy.html#Ext-dd-DDProxy-property-centerFrame",
      "shortDoc": "By default the frame is positioned exactly where the drag element is, so\nwe use the cursor offset provided by Ext.dd...."
    },
    {
      "tagname": "property",
      "name": "config",
      "member": "Ext.dd.DragDrop",
      "type": "object",
      "doc": "<p>Configuration attributes passed into the constructor</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 81,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-config"
    },
    {
      "tagname": "property",
      "name": "defaultPadding",
      "member": "Ext.dd.DragDrop",
      "type": "Object",
      "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to {left: 0, right:0, top:0, bottom:0}).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 482,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding"
    },
    {
      "tagname": "property",
      "name": "dragData",
      "member": "Ext.dd.DragZone",
      "type": "Object",
      "doc": "<p>This property contains the data representing the dragged object. This data is set up by the implementation\nof the <a href=\"#/api/Ext.view.DragZone-method-getDragData\" rel=\"Ext.view.DragZone-method-getDragData\" class=\"docClass\">getDragData</a> method. It must contain a <tt>ddel</tt> property, but can contain\nany other data according to the application's needs.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragZone.js",
      "linenr": 70,
      "html_filename": "DragZone.html",
      "href": "DragZone.html#Ext-dd-DragZone-property-dragData",
      "shortDoc": "This property contains the data representing the dragged object. This data is set up by the implementation\nof the get..."
    },
    {
      "tagname": "property",
      "name": "groups",
      "member": "Ext.dd.DragDrop",
      "type": "object",
      "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 158,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
      "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interact..."
    },
    {
      "tagname": "property",
      "name": "hasOuterHandles",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. @default false</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 322,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
      "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in..."
    },
    {
      "tagname": "property",
      "name": "id",
      "member": "Ext.dd.DragDrop",
      "type": "String",
      "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 71,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
      "shortDoc": "The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size..."
    },
    {
      "tagname": "property",
      "name": "ignoreSelf",
      "member": "Ext.dd.DragDrop",
      "type": "Boolean",
      "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 63,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
      "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - ..."
    },
    {
      "tagname": "property",
      "name": "invalidHandleClasses",
      "member": "Ext.dd.DragDrop",
      "type": "Array",
      "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 133,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses"
    },
    {
      "tagname": "property",
      "name": "invalidHandleIds",
      "member": "Ext.dd.DragDrop",
      "type": "Object",
      "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 121,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
      "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null prop..."
    },
    {
      "tagname": "property",
      "name": "invalidHandleTypes",
      "member": "Ext.dd.DragDrop",
      "type": "Object",
      "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 109,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
      "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value..."
    },
    {
      "tagname": "property",
      "name": "isTarget",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 201,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget"
    },
    {
      "tagname": "property",
      "name": "maintainOffset",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 279,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
      "shortDoc": "Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its par..."
    },
    {
      "tagname": "property",
      "name": "moveOnly",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 185,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
      "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ..."
    },
    {
      "tagname": "property",
      "name": "padding",
      "member": "Ext.dd.DragDrop",
      "type": "[int]",
      "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 209,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
      "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn ..."
    },
    {
      "tagname": "property",
      "name": "primaryButtonOnly",
      "member": "Ext.dd.DragDrop",
      "type": "boolean",
      "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 305,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
      "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m..."
    },
    {
      "tagname": "property",
      "name": "resizeFrame",
      "member": "Ext.dd.DDProxy",
      "type": "boolean",
      "doc": "<p>By default we resize the drag frame to be the same size as the element\nwe want to drag (this is to get the frame effect).  We can turn it off\nif we want a different behavior.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DDProxy.js",
      "linenr": 48,
      "html_filename": "DDProxy.html",
      "href": "DDProxy.html#Ext-dd-DDProxy-property-resizeFrame",
      "shortDoc": "By default we resize the drag frame to be the same size as the element\nwe want to drag (this is to get the frame effe..."
    },
    {
      "tagname": "property",
      "name": "scroll",
      "member": "Ext.dd.DD",
      "type": "boolean",
      "doc": "<p>When set to true, the utility automatically tries to scroll the browser\nwindow when a drag and drop element is dragged near the viewport boundary.\nDefaults to true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DD.js",
      "linenr": 32,
      "html_filename": "DD.html",
      "href": "DD.html#Ext-dd-DD-property-scroll",
      "shortDoc": "When set to true, the utility automatically tries to scroll the browser\nwindow when a drag and drop element is dragge..."
    },
    {
      "tagname": "property",
      "name": "xTicks",
      "member": "Ext.dd.DragDrop",
      "type": "[int]",
      "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 289,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
      "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is ge..."
    },
    {
      "tagname": "property",
      "name": "yTicks",
      "member": "Ext.dd.DragDrop",
      "type": "[int]",
      "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDrop.js",
      "linenr": 297,
      "html_filename": "DragDrop.html",
      "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
      "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is gene..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/view/DragZone.js",
  "linenr": 1,
  "html_filename": "DragZone3.html",
  "href": "DragZone3.html#Ext-view-DragZone",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.dd.DragDrop",
    "Ext.dd.DD",
    "Ext.dd.DDProxy",
    "Ext.dd.DragSource",
    "Ext.dd.DragZone"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});