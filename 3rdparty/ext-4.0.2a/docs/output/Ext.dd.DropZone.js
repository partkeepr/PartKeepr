Ext.data.JsonP.Ext_dd_DropZone({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.dd.DragDrop",
    "Ext.dd.DDTarget",
    "Ext.dd.DropTarget"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "DropZone.html#Ext-dd-DropZone",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-ddGroup",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "shortDoc": "A named drag drop group to which this object belongs. ...",
        "static": false,
        "name": "ddGroup",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>A named drag drop group to which this object belongs.  If a group is specified, then this object will only\ninteract with other drag drop objects in the same group (defaults to undefined).</p>\n",
        "linenr": 29,
        "html_filename": "DropTarget.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropAllowed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "static": false,
        "name": "dropAllowed",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class returned to the drag source when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
        "linenr": 38,
        "html_filename": "DropTarget.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-dropNotAllowed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "static": false,
        "name": "dropNotAllowed",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class returned to the drag source when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
        "linenr": 43,
        "html_filename": "DropTarget.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "DropTarget.html#Ext-dd-DropTarget-cfg-overClass",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "static": false,
        "name": "overClass",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>The CSS class applied to the drop target element while the drag source is over it (defaults to \"\").</p>\n",
        "linenr": 34,
        "html_filename": "DropTarget.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The container element</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "DropTarget.html#Ext-dd-DropTarget-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropTarget.js",
        "private": false,
        "shortDoc": "Creates new DropTarget. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.dd.DropTarget",
        "doc": "<p>Creates new DropTarget.</p>\n",
        "linenr": 11,
        "html_filename": "DropTarget.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the elements you wish to ignore</p>\n",
            "name": "cssClass"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Lets you specify a css class of elements that will not initiate a drag ...",
        "static": false,
        "name": "addInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n",
        "linenr": 861,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id of the element you wish to ignore</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag ...",
        "static": false,
        "name": "addInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n",
        "linenr": 848,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to exclude</p>\n",
            "name": "tagName"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked. ...",
        "static": false,
        "name": "addInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n",
        "linenr": 836,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the name of the group</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Adds this instance to a group of related drag/drop objects. ...",
        "static": false,
        "name": "addToGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Adds this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n",
        "linenr": 705,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-applyConfig",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Applies the configuration parameters that were passed into the constructor. ...",
        "static": false,
        "name": "applyConfig",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Applies the configuration parameters that were passed into the constructor.\nThis is supposed to happen at each level through the inheritance chain.  So\na DDProxy implentation will execute apply config on DDProxy, DD, and\nDragDrop in order to get all of the parameters that are available in\neach object.</p>\n",
        "linenr": 615,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Clears any constraints applied to this instance. ...",
        "static": false,
        "name": "clearConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n",
        "linenr": 1007,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Clears any tick interval defined for this instance ...",
        "static": false,
        "name": "clearTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any tick interval defined for this instance</p>\n",
        "linenr": 1017,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to constrain to.</p>\n",
            "name": "constrainTo"
          },
          {
            "type": "Object/Number",
            "optional": true,
            "doc": "<p>(optional) Pad provides a way to specify \"padding\" of the constraints,\nand can be either a number for symmetrical padding (4 would be equal to <code>{left:4, right:4, top:4, bottom:4}</code>) or\nan object containing the sides to pad. For example: <code>{right:10, bottom:10}</code></p>\n",
            "name": "pad"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Constrain the draggable in the content box of the element (inside padding and borders)</p>\n",
            "name": "inContent"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element. ...",
        "static": false,
        "name": "constrainTo",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code>var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n               { dragElId: \"existingProxyDiv\" });\ndd.startDrag = function(){\n    this.constrainTo(\"parent-id\");\n};\n</code></pre>\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object:</p>\n\n<pre><code>Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n    startDrag : function(){\n        this.constrainTo(\"parent-id\");\n    }\n});\n</code></pre>\n",
        "linenr": 478,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Called when we are done dragging the object ...",
        "static": false,
        "name": "endDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when we are done dragging the object</p>\n",
        "linenr": 435,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Returns a reference to the actual element to drag. ...",
        "static": false,
        "name": "getDragEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in Ext.dd.DDProxy</p>\n",
        "linenr": 547,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Returns a reference to the linked element ...",
        "static": false,
        "name": "getEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the linked element</p>\n",
        "linenr": 535,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-getTargetFromEvent",
        "return": {
          "type": "Object",
          "doc": "<p>data The custom data</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Returns a custom data object associated with the DOM node that is the target of the event. ...",
        "static": false,
        "name": "getTargetFromEvent",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Returns a custom data object associated with the DOM node that is the target of the event.  By default\nthis looks up the event target in the <a href=\"#/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>, although you can override this method to\nprovide your own custom lookup.</p>\n",
        "linenr": 72,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the linked element</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the group of related items</p>\n",
            "name": "sGroup"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>configuration attributes</p>\n",
            "name": "config"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Sets up the DragDrop object. ...",
        "static": false,
        "name": "init",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n",
        "linenr": 557,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the linked element</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the group of related items</p>\n",
            "name": "sGroup"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>configuration attributes</p>\n",
            "name": "config"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Initializes Targeting functionality only... ...",
        "static": false,
        "name": "initTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n",
        "linenr": 570,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...",
        "static": false,
        "name": "isLocked",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n",
        "linenr": 783,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the HTMLElement to evaluate</p>\n",
            "name": "node"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this is a valid tag type, false if not</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Checks the tag exclusion list to see if this click should be ignored ...",
        "static": false,
        "name": "isValidHandleChild",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n",
        "linenr": 903,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Locks this instance ...",
        "static": false,
        "name": "lock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Locks this instance</p>\n",
        "linenr": 183,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyDrop",
        "return": {
          "type": "Boolean",
          "doc": "<p>False if the drop was invalid.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the dragged item has\nbeen dropped on it. ...",
        "static": false,
        "name": "notifyDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the dragged item has\nbeen dropped on it.  The drag zone will look up the target node based on the event passed in, and if there\nis a node registered for that event, it will delegate to <a href=\"#/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a> for node-specific handling,\notherwise it will call <a href=\"#/api/Ext.dd.DropZone-method-onContainerDrop\" rel=\"Ext.dd.DropZone-method-onContainerDrop\" class=\"docClass\">onContainerDrop</a>.</p>\n",
        "linenr": 234,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyEnter",
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the source is now over\nthe zone. ...",
        "static": false,
        "name": "notifyEnter",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source is now over\nthe zone.  The default implementation returns this.dropNotAllowed and expects that only registered drop\nnodes can process drag drop operations, so if you need the drop zone itself to be able to process drops\nyou should override this method and provide a custom implementation.</p>\n",
        "linenr": 172,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop target</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag zone</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyOut",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "The function a Ext.dd.DragSource calls once to notify this drop zone that the source has been dragged\nout of the zone...",
        "static": false,
        "name": "notifyOut",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls once to notify this drop zone that the source has been dragged\nout of the zone without dropping.  If the drag source is currently over a registered node, the notification\nwill be delegated to <a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a> for node-specific handling, otherwise it will be ignored.</p>\n",
        "linenr": 219,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-notifyOver",
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "The function a Ext.dd.DragSource calls continuously while it is being dragged over the drop zone. ...",
        "static": false,
        "name": "notifyOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>The function a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> calls continuously while it is being dragged over the drop zone.\nThis method will be called on every mouse movement while the drag source is over the drop zone.\nIt will call <a href=\"#/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a> while the drag source is over a registered node, and will also automatically\ndelegate to the appropriate node-specific methods as necessary when the drag source enters and exits\nregistered nodes (<a href=\"#/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>). If the drag source is not currently over a\nregistered node, it will call <a href=\"#/api/Ext.dd.DropZone-method-onContainerOver\" rel=\"Ext.dd.DropZone-method-onContainerOver\" class=\"docClass\">onContainerOver</a>.</p>\n",
        "linenr": 187,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Override the onAvailable method to do what is needed after the initial\nposition was determined. ...",
        "static": false,
        "name": "onAvailable",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n",
        "linenr": 460,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onContainerDrop",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the drop was valid, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dropped on it,\nbut not on any of its registered...",
        "static": false,
        "name": "onContainerDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped on it,\nbut not on any of its registered drop nodes.  The default implementation returns false, so it should be\noverridden to provide the appropriate processing of the drop event if you need the drop zone itself to\nbe able to accept drops.  It should return true when valid so that the drag source's repair action does not run.</p>\n",
        "linenr": 158,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onContainerOver",
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called while the DropZone determines that a Ext.dd.DragSource is being dragged over it,\nbut not over any of its regis...",
        "static": false,
        "name": "onContainerOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called while the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is being dragged over it,\nbut not over any of its registered drop nodes.  The default implementation returns this.dropNotAllowed, so\nit should be overridden to provide the proper feedback if necessary.</p>\n",
        "linenr": 144,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called during the onMouseMove event while dragging an\nobject. ...",
        "static": false,
        "name": "onDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n",
        "linenr": 358,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this was dropped on.  In INTERSECT mode, an array of dd items this\nwas dropped on.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called when this item is dropped on another DragDrop\nobj ...",
        "static": false,
        "name": "onDragDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n",
        "linenr": 412,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of one or more\ndragdrop items being hovered over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called when this element fist begins hovering over\nanother DragDrop obj ...",
        "static": false,
        "name": "onDragEnter",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n",
        "linenr": 365,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String/[DragDrop]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this was hovering over.  In INTERSECT mode, an array of dd items\nthat the mouse is no longer over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called when we are no longer hovering over an element ...",
        "static": false,
        "name": "onDragOut",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n",
        "linenr": 397,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          },
          {
            "type": "String|DragDrop[]",
            "optional": false,
            "doc": "<p>In POINT mode, the element\nid this is hovering over.  In INTERSECT mode, an array of dd items\nbeing hovered over.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called when this element is hovering over another\nDragDrop obj ...",
        "static": false,
        "name": "onDragOver",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n",
        "linenr": 381,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called when this item is dropped on an area with no\ndrop target ...",
        "static": false,
        "name": "onInvalidDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n",
        "linenr": 422,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousedown event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Called when a drag/drop obj gets a mousedown ...",
        "static": false,
        "name": "onMouseDown",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mousedown</p>\n",
        "linenr": 448,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Called when a drag/drop obj gets a mouseup ...",
        "static": false,
        "name": "onMouseUp",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mouseup</p>\n",
        "linenr": 454,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeDrop",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the drop was valid, else false</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dropped onto\nthe drop node. ...",
        "static": false,
        "name": "onNodeDrop",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dropped onto\nthe drop node.  The default implementation returns false, so it should be overridden to provide the\nappropriate processing of the drop event and return true so that the drag source's repair action does not run.</p>\n",
        "linenr": 129,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeEnter",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has entered a drop node\nthat has either been registered ...",
        "static": false,
        "name": "onNodeEnter",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has entered a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThis method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n",
        "linenr": 83,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeOut",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called when the DropZone determines that a Ext.dd.DragSource has been dragged out of\nthe drop node without dropping. ...",
        "static": false,
        "name": "onNodeOut",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called when the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> has been dragged out of\nthe drop node without dropping.  This method has no default implementation and should be overridden to provide\nnode-specific processing if necessary.</p>\n",
        "linenr": 115,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The custom data associated with the drop node (this is the same value returned from\n<a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> for this node)</p>\n",
            "name": "nodeData"
          },
          {
            "type": "Ext.dd.DragSource",
            "optional": false,
            "doc": "<p>The drag source that was dragged over this drop zone</p>\n",
            "name": "source"
          },
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>The event</p>\n",
            "name": "e"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object containing arbitrary data supplied by the drag source</p>\n",
            "name": "data"
          }
        ],
        "href": "DropZone.html#Ext-dd-DropZone-method-onNodeOver",
        "return": {
          "type": "String",
          "doc": "<p>status The CSS class that communicates the drop status back to the source so that the\nunderlying <a href=\"#/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a> can be updated</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
        "private": false,
        "shortDoc": "Called while the DropZone determines that a Ext.dd.DragSource is over a drop node\nthat has either been registered or ...",
        "static": false,
        "name": "onNodeOver",
        "owner": "Ext.dd.DropZone",
        "doc": "<p>Called while the DropZone determines that a <a href=\"#/api/Ext.dd.DragSource\" rel=\"Ext.dd.DragSource\" class=\"docClass\">Ext.dd.DragSource</a> is over a drop node\nthat has either been registered or detected by a configured implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a>.\nThe default implementation returns this.dropNotAllowed, so it should be\noverridden to provide the proper feedback.</p>\n",
        "linenr": 98,
        "html_filename": "DropZone.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group to drop</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Removes this instance from the supplied interaction group ...",
        "static": false,
        "name": "removeFromGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes this instance from the supplied interaction group</p>\n",
        "linenr": 716,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n",
            "name": "cssClass"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Unsets an invalid css class ...",
        "static": false,
        "name": "removeInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid css class</p>\n",
        "linenr": 890,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element to re-enable</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Unsets an invalid handle id ...",
        "static": false,
        "name": "removeInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid handle id</p>\n",
        "linenr": 879,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to unexclude</p>\n",
            "name": "tagName"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Unsets an excluded tag name set by addInvalidHandleType ...",
        "static": false,
        "name": "removeInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n",
        "linenr": 869,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "boolean",
            "optional": false,
            "doc": "\n",
            "name": "maintainOffset"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Must be called if you manually reposition a dd element. ...",
        "static": false,
        "name": "resetConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Must be called if you manually reposition a dd element.</p>\n",
        "linenr": 1048,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag ...",
        "static": false,
        "name": "setDragElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n",
        "linenr": 728,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to\ninitiate the drag.</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation. ...",
        "static": false,
        "name": "setHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n",
        "linenr": 737,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the X offset, default 0</p>\n",
            "name": "diffX"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the Y offset, default 0</p>\n",
            "name": "diffY"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Stores the initial placement of the linked element. ...",
        "static": false,
        "name": "setInitPosition",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Stores the initial placement of the linked element.</p>\n",
        "linenr": 665,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Allows you to set an element outside of the linked element as a drag\nhandle ...",
        "static": false,
        "name": "setOuterHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n",
        "linenr": 755,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Top pad</p>\n",
            "name": "iTop"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Right pad</p>\n",
            "name": "iRight"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Bot pad</p>\n",
            "name": "iBot"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>Left pad</p>\n",
            "name": "iLeft"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Configures the padding for the target zone in px. ...",
        "static": false,
        "name": "setPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n",
        "linenr": 643,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move to the left</p>\n",
            "name": "iLeft"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move to the\nright</p>\n",
            "name": "iRight"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>optional parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "name": "iTickSize"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "static": false,
        "name": "setXConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n",
        "linenr": 986,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move up</p>\n",
            "name": "iUp"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>the number of pixels the element can move down</p>\n",
            "name": "iDown"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>optional parameter for specifying that the\nelement should move iTickSize pixels at a time.</p>\n",
            "name": "iTickSize"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "static": false,
        "name": "setYConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n",
        "linenr": 1027,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "int",
            "optional": false,
            "doc": "<p>click location</p>\n",
            "name": "X"
          },
          {
            "type": "int",
            "optional": false,
            "doc": "<p>click location</p>\n",
            "name": "Y"
          }
        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met. ...",
        "static": false,
        "name": "startDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n",
        "linenr": 344,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
        "return": {
          "type": "string",
          "doc": "<p>string representation of the dd obj</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "toString method ...",
        "static": false,
        "name": "toString",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>toString method</p>\n",
        "linenr": 1113,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Unlocks this instace ...",
        "static": false,
        "name": "unlock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unlocks this instace</p>\n",
        "linenr": 198,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Removes all drag and drop hooks for this element ...",
        "static": false,
        "name": "unreg",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes all drag and drop hooks for this element</p>\n",
        "linenr": 770,
        "html_filename": "DragDrop.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-available",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "static": false,
        "name": "available",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n",
        "linenr": 319,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "object",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-config",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "static": false,
        "name": "config",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configuration attributes passed into the constructor</p>\n",
        "linenr": 87,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "static": false,
        "name": "defaultPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to <code>{left:0, right:0, top:0, bottom:0}</code>).</p>\n",
        "linenr": 467,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "object",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated. ...",
        "static": false,
        "name": "groups",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n",
        "linenr": 164,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...",
        "static": false,
        "name": "hasOuterHandles",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. Defaults to false.</p>\n",
        "linenr": 326,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "The id of the element associated with this object. ...",
        "static": false,
        "name": "id",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n",
        "linenr": 77,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...",
        "static": false,
        "name": "ignoreSelf",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n",
        "linenr": 69,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "static": false,
        "name": "invalidHandleClasses",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n",
        "linenr": 139,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...",
        "static": false,
        "name": "invalidHandleIds",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n",
        "linenr": 127,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles. ...",
        "static": false,
        "name": "invalidHandleTypes",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n",
        "linenr": 115,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "By default, all instances can be a drop target. ...",
        "static": false,
        "name": "isTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n",
        "linenr": 205,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Maintain offsets when we resetconstraints. ...",
        "static": false,
        "name": "maintainOffset",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n",
        "linenr": 283,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...",
        "static": false,
        "name": "moveOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n",
        "linenr": 190,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "[int]",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...",
        "static": false,
        "name": "padding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n",
        "linenr": 213,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...",
        "static": false,
        "name": "primaryButtonOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n",
        "linenr": 309,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "type": "[int]",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...",
        "static": false,
        "name": "xTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "linenr": 293,
        "html_filename": "DragDrop.html"
      },
      {
        "inheritable": false,
        "type": "[int]",
        "deprecated": null,
        "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...",
        "static": false,
        "name": "yTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "linenr": 301,
        "html_filename": "DragDrop.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DropZone.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.dd.DropZone",
  "doc": "<p>This class provides a container DD instance that allows dropping on multiple child target nodes.</p>\n\n<p>By default, this class requires that child nodes accepting drop are registered with <a href=\"#/api/Ext.dd.Registry\" rel=\"Ext.dd.Registry\" class=\"docClass\">Ext.dd.Registry</a>.\nHowever a simpler way to allow a DropZone to manage any number of target elements is to configure the\nDropZone with an implementation of <a href=\"#/api/Ext.dd.DropZone-method-getTargetFromEvent\" rel=\"Ext.dd.DropZone-method-getTargetFromEvent\" class=\"docClass\">getTargetFromEvent</a> which interrogates the passed\nmouse event to see if it has taken place within an element, or class of elements. This is easily done\nby using the event's <a href=\"#/api/Ext.EventObject-method-getTarget\" rel=\"Ext.EventObject-method-getTarget\" class=\"docClass\">getTarget</a> method to identify a node based on a\n<a href=\"#/api/Ext.DomQuery\" rel=\"Ext.DomQuery\" class=\"docClass\">Ext.DomQuery</a> selector.</p>\n\n<p>Once the DropZone has detected through calling getTargetFromEvent, that the mouse is over\na drop target, that target is passed as the first parameter to <a href=\"#/api/Ext.dd.DropZone-method-onNodeEnter\" rel=\"Ext.dd.DropZone-method-onNodeEnter\" class=\"docClass\">onNodeEnter</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeOver\" rel=\"Ext.dd.DropZone-method-onNodeOver\" class=\"docClass\">onNodeOver</a>,\n<a href=\"#/api/Ext.dd.DropZone-method-onNodeOut\" rel=\"Ext.dd.DropZone-method-onNodeOut\" class=\"docClass\">onNodeOut</a>, <a href=\"#/api/Ext.dd.DropZone-method-onNodeDrop\" rel=\"Ext.dd.DropZone-method-onNodeDrop\" class=\"docClass\">onNodeDrop</a>. You may configure the instance of DropZone with implementations\nof these methods to provide application-specific behaviour for these events to update both\napplication state, and UI state.</p>\n\n<p>For example to make a GridPanel a cooperating target with the example illustrated in\n<a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a>, the following technique might be used:</p>\n\n<pre><code>myGridPanel.on('render', function() {\n    myGridPanel.dropZone = new Ext.dd.DropZone(myGridPanel.getView().scroller, {\n\n        // If the mouse is over a grid row, return that node. This is\n        // provided as the \"target\" parameter in all \"onNodeXXXX\" node event handling functions\n        getTargetFromEvent: function(e) {\n            return e.getTarget(myGridPanel.getView().rowSelector);\n        },\n\n        // On entry into a target node, highlight that node.\n        onNodeEnter : function(target, dd, e, data){ \n            Ext.fly(target).addCls('my-row-highlight-class');\n        },\n\n        // On exit from a target node, unhighlight that node.\n        onNodeOut : function(target, dd, e, data){ \n            Ext.fly(target).removeCls('my-row-highlight-class');\n        },\n\n        // While over a target node, return the default drop allowed class which\n        // places a \"tick\" icon into the drag proxy.\n        onNodeOver : function(target, dd, e, data){ \n            return Ext.dd.DropZone.prototype.dropAllowed;\n        },\n\n        // On node drop we can interrogate the target to find the underlying\n        // application object that is the real target of the dragged data.\n        // In this case, it is a Record in the GridPanel's Store.\n        // We can use the data set up by the DragZone's getDragData method to read\n        // any data we decided to attach in the DragZone's getDragData method.\n        onNodeDrop : function(target, dd, e, data){\n            var rowIndex = myGridPanel.getView().findRowIndex(target);\n            var r = myGridPanel.getStore().getAt(rowIndex);\n            Ext.Msg.alert('Drop gesture', 'Dropped Record id ' + data.draggedRecord.id +\n                ' on Record id ' + r.id);\n            return true;\n        }\n    });\n}\n</code></pre>\n\n<p>See the <a href=\"#/api/Ext.dd.DragZone\" rel=\"Ext.dd.DragZone\" class=\"docClass\">DragZone</a> documentation for details about building a DragZone which\ncooperates with this DropZone.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "DropZone.html",
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
  "extends": "Ext.dd.DropTarget"
});