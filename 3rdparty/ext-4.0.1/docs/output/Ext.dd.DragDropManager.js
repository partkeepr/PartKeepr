Ext.data.JsonP.Ext_dd_DragDropManager({
  "tagname": "class",
  "name": "Ext.dd.DragDropManager",
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "getBestMatch",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n",
      "params": [
        {
          "type": "DragDrop[]",
          "name": "dds",
          "doc": "<p>The array of drag and drop objects\ntargeted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "DragDrop",
        "doc": "<p>The best single match</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 787,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
      "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event..."
    },
    {
      "tagname": "method",
      "name": "getCss",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>the id of the elment to get</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The style property of the element</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 1079,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
      "shortDoc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDDById",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns the DragDrop instance for a given id</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>the id of the DragDrop object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "DragDrop",
        "doc": "<p>the drag drop object, null if it is not found</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 460,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
      "shortDoc": "<p>Returns the DragDrop instance for a given id</p>\n"
    },
    {
      "tagname": "method",
      "name": "getElement",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns the actual DOM element</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>the id of the elment to get</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The element\n@deprecated use Ext.lib.Ext.getDom instead</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 1067,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
      "shortDoc": "<p>Returns the actual DOM element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLocation",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n",
      "params": [
        {
          "type": "DragDrop",
          "name": "oDD",
          "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 904,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
      "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo..."
    },
    {
      "tagname": "method",
      "name": "getRelated",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n",
      "params": [
        {
          "type": "DragDrop",
          "name": "p_oDD",
          "doc": "<p>the obj to get related data for</p>\n",
          "optional": false
        },
        {
          "type": "boolean",
          "name": "bTargetsOnly",
          "doc": "<p>if true, only return targetable objs</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "DragDrop[]",
        "doc": "<p>the related instances</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 384,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
      "shortDoc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDragDrop",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>the element id to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 371,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
      "shortDoc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isHandle",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>the element id to check</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "sHandleId",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 446,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
      "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob..."
    },
    {
      "tagname": "method",
      "name": "isLegalTarget",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n",
      "params": [
        {
          "type": "DragDrop",
          "name": "oDD",
          "doc": "<p>the drag obj</p>\n",
          "optional": false
        },
        {
          "type": "DragDrop",
          "name": "oTargetDD",
          "doc": "<p>the target</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 410,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
      "shortDoc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n"
    },
    {
      "tagname": "method",
      "name": "isLocked",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Is drag and drop locked?</p>\n",
      "params": [

      ],
      "return": {
        "type": "boolean",
        "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 221,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
      "shortDoc": "<p>Is drag and drop locked?</p>\n"
    },
    {
      "tagname": "method",
      "name": "isTypeOfDD",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "the",
          "doc": "<p>object to evaluate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if typeof oDD = DragDrop</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 431,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
      "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop...."
    },
    {
      "tagname": "method",
      "name": "lock",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Lock all drag and drop functionality</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 207,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
      "shortDoc": "<p>Lock all drag and drop functionality</p>\n"
    },
    {
      "tagname": "method",
      "name": "refreshCache",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "groups",
          "doc": "<p>an associative array of groups to refresh</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 834,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
      "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  ..."
    },
    {
      "tagname": "method",
      "name": "regDragDrop",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n",
      "params": [
        {
          "type": "DragDrop",
          "name": "oDD",
          "doc": "<p>the DragDrop object to register</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "sGroup",
          "doc": "<p>the name of the group this element belongs to</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 304,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
      "shortDoc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n"
    },
    {
      "tagname": "method",
      "name": "regHandle",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n",
      "params": [
        {
          "type": "String",
          "name": "sDDId",
          "doc": "<p>the DragDrop id this element is a handle for</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "sHandleId",
          "doc": "<p>the id of the element that is the drag\nhandle</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 355,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
      "shortDoc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n"
    },
    {
      "tagname": "method",
      "name": "startDrag",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "x",
          "doc": "<p>{int} the X position of the original mousedown</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "y",
          "doc": "<p>{int} the Y position of the original mousedown</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 517,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
      "shortDoc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n"
    },
    {
      "tagname": "method",
      "name": "stopEvent",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n",
      "params": [
        {
          "type": "Event",
          "name": "e",
          "doc": "<p>the event as returned by this.getEvent()</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 563,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
      "shortDoc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n"
    },
    {
      "tagname": "method",
      "name": "unlock",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>Unlock all drag and drop functionality</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 214,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
      "shortDoc": "<p>Unlock all drag and drop functionality</p>\n"
    },
    {
      "tagname": "method",
      "name": "verifyEl",
      "member": "Ext.dd.DragDropManager",
      "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n",
      "params": [
        {
          "type": "HTMLElement",
          "name": "el",
          "doc": "<p>the element to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "boolean",
        "doc": "<p>true if the element looks usable</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 876,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
      "shortDoc": "This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "INTERSECT",
      "member": "Ext.dd.DragDropManager",
      "type": "int",
      "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 143,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT"
    },
    {
      "tagname": "property",
      "name": "POINT",
      "member": "Ext.dd.DragDropManager",
      "type": "int",
      "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 134,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT"
    },
    {
      "tagname": "property",
      "name": "clickPixelThresh",
      "member": "Ext.dd.DragDropManager",
      "type": "int",
      "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 247,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh"
    },
    {
      "tagname": "property",
      "name": "clickTimeThresh",
      "member": "Ext.dd.DragDropManager",
      "type": "int",
      "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 256,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh"
    },
    {
      "tagname": "property",
      "name": "mode",
      "member": "Ext.dd.DragDropManager",
      "type": "int",
      "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 152,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode"
    },
    {
      "tagname": "property",
      "name": "preventDefault",
      "member": "Ext.dd.DragDropManager",
      "type": "boolean",
      "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 86,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
      "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but thi..."
    },
    {
      "tagname": "property",
      "name": "stopPropagation",
      "member": "Ext.dd.DragDropManager",
      "type": "boolean",
      "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 96,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
      "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may wa..."
    },
    {
      "tagname": "property",
      "name": "useCache",
      "member": "Ext.dd.DragDropManager",
      "type": "boolean",
      "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
      "linenr": 238,
      "html_filename": "DragDropManager.html",
      "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
      "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/DragDropManager.js",
  "linenr": 10,
  "html_filename": "DragDropManager.html",
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});