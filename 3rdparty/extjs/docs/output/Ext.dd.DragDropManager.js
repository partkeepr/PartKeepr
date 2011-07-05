Ext.data.JsonP.Ext_dd_DragDropManager({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
  "members": {
    "cfg": [

    ],
    "method": [
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
      }
    ]
  },
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
  "private": false,
  "alternateClassNames": [
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
  ],
  "static": false,
  "name": "Ext.dd.DragDropManager",
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 10,
  "xtypes": [

  ],
  "html_filename": "DragDropManager.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "DragDrop[]",
            "optional": false,
            "doc": "<p>The array of drag and drop objects\ntargeted</p>\n",
            "name": "dds"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
        "return": {
          "type": "DragDrop",
          "doc": "<p>The best single match</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...",
        "static": true,
        "name": "getBestMatch",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n",
        "linenr": 787,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
        "return": {
          "type": "Object",
          "doc": "<p>The style property of the element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...",
        "static": true,
        "name": "getCss",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n",
        "linenr": 1079,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the DragDrop object</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
        "return": {
          "type": "DragDrop",
          "doc": "<p>the drag drop object, null if it is not found</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns the DragDrop instance for a given id ...",
        "static": true,
        "name": "getDDById",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the DragDrop instance for a given id</p>\n",
        "linenr": 460,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": {
          "version": null,
          "text": "<p>use Ext.lib.Ext.getDom instead</p>\n",
          "tagname": "deprecated",
          "doc": null
        },
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
        "return": {
          "type": "Object",
          "doc": "<p>The element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns the actual DOM element ...",
        "static": true,
        "name": "getElement",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the actual DOM element</p>\n",
        "linenr": 1067,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n",
            "name": "oDD"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...",
        "static": true,
        "name": "getLocation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n",
        "linenr": 904,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the obj to get related data for</p>\n",
            "name": "p_oDD"
          },
          {
            "type": "boolean",
            "optional": false,
            "doc": "<p>if true, only return targetable objs</p>\n",
            "name": "bTargetsOnly"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
        "return": {
          "type": "DragDrop[]",
          "doc": "<p>the related instances</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...",
        "static": true,
        "name": "getRelated",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n",
        "linenr": 384,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id to check</p>\n",
            "name": "id"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop item. ...",
        "static": true,
        "name": "isDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n",
        "linenr": 371,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id to check</p>\n",
            "name": "id"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "sHandleId"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...",
        "static": true,
        "name": "isHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n",
        "linenr": 446,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the drag obj</p>\n",
            "name": "oDD"
          },
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the target</p>\n",
            "name": "oTargetDD"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
        "return": {
          "type": "boolean",
          "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...",
        "static": true,
        "name": "isLegalTarget",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n",
        "linenr": 410,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
        "return": {
          "type": "boolean",
          "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Is drag and drop locked? ...",
        "static": true,
        "name": "isLocked",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Is drag and drop locked?</p>\n",
        "linenr": 221,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>object to evaluate</p>\n",
            "name": "the"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
        "return": {
          "type": "boolean",
          "doc": "<p>true if typeof oDD = DragDrop</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...",
        "static": true,
        "name": "isTypeOfDD",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n",
        "linenr": 431,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Lock all drag and drop functionality ...",
        "static": true,
        "name": "lock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Lock all drag and drop functionality</p>\n",
        "linenr": 207,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>an associative array of groups to refresh</p>\n",
            "name": "groups"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...",
        "static": true,
        "name": "refreshCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n",
        "linenr": 834,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the DragDrop object to register</p>\n",
            "name": "oDD"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the name of the group this element belongs to</p>\n",
            "name": "sGroup"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Each DragDrop instance must be registered with the DragDropManager. ...",
        "static": true,
        "name": "regDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n",
        "linenr": 304,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the DragDrop id this element is a handle for</p>\n",
            "name": "sDDId"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that is the drag\nhandle</p>\n",
            "name": "sHandleId"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Each DragDrop handle element must be registered. ...",
        "static": true,
        "name": "regHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n",
        "linenr": 355,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{int} the X position of the original mousedown</p>\n",
            "name": "x"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>{int} the Y position of the original mousedown</p>\n",
            "name": "y"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...",
        "static": true,
        "name": "startDrag",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n",
        "linenr": 517,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the event as returned by this.getEvent()</p>\n",
            "name": "e"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Utility to stop event propagation and event default, if these\nfeatures are turned on. ...",
        "static": true,
        "name": "stopEvent",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n",
        "linenr": 563,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Unlock all drag and drop functionality ...",
        "static": true,
        "name": "unlock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Unlock all drag and drop functionality</p>\n",
        "linenr": 214,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the element to check</p>\n",
            "name": "el"
          }
        ],
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
        "return": {
          "type": "boolean",
          "doc": "<p>true if the element looks usable</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "This checks to make sure an element exists and is in the DOM. ...",
        "static": true,
        "name": "verifyEl",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n",
        "linenr": 876,
        "html_filename": "DragDropManager.html"
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
        "type": "int",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "static": true,
        "name": "INTERSECT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n",
        "linenr": 143,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "int",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "static": true,
        "name": "POINT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n",
        "linenr": 134,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "int",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...",
        "static": true,
        "name": "clickPixelThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n",
        "linenr": 247,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "int",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...",
        "static": true,
        "name": "clickTimeThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n",
        "linenr": 256,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "int",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "The current drag and drop mode. ...",
        "static": true,
        "name": "mode",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n",
        "linenr": 152,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. ...",
        "static": true,
        "name": "preventDefault",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n",
        "linenr": 86,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. ...",
        "static": true,
        "name": "stopPropagation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n",
        "linenr": 96,
        "html_filename": "DragDropManager.html"
      },
      {
        "inheritable": false,
        "type": "boolean",
        "deprecated": null,
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...",
        "static": true,
        "name": "useCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n",
        "linenr": 238,
        "html_filename": "DragDropManager.html"
      }
    ]
  },
  "extends": "Ext.Base"
});