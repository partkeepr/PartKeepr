Ext.data.JsonP.Ext_dd_DragDropManager({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getBestMatch",
        "shortDoc": "Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop event...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "DragDrop[]",
            "optional": false,
            "doc": "<p>The array of drag and drop objects\ntargeted</p>\n",
            "name": "dds"
          }
        ],
        "name": "getBestMatch",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Helper function for getting the best match from the list of drag\nand drop objects returned by the drag and drop events when we are\nin INTERSECT mode.  It returns either the first object that the\ncursor is over, or the object that has the greatest overlap with\nthe dragged element.</p>\n",
        "linenr": 787,
        "return": {
          "type": "DragDrop",
          "doc": "<p>The best single match</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getCss",
        "shortDoc": "Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style) ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "name": "getCss",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the style property for the DOM element (i.e.,\ndocument.getElById(id).style)</p>\n",
        "linenr": 1079,
        "return": {
          "type": "Object",
          "doc": "<p>The style property of the element</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getDDById",
        "shortDoc": "Returns the DragDrop instance for a given id ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the DragDrop object</p>\n",
            "name": "id"
          }
        ],
        "name": "getDDById",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the DragDrop instance for a given id</p>\n",
        "linenr": 460,
        "return": {
          "type": "DragDrop",
          "doc": "<p>the drag drop object, null if it is not found</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": {
          "version": null,
          "text": "<p>use Ext.lib.Ext.getDom instead</p>\n",
          "tagname": "deprecated",
          "doc": null
        },
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getElement",
        "shortDoc": "Returns the actual DOM element ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the elment to get</p>\n",
            "name": "id"
          }
        ],
        "name": "getElement",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the actual DOM element</p>\n",
        "linenr": 1067,
        "return": {
          "type": "Object",
          "doc": "<p>The element</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getLocation",
        "shortDoc": "Returns a Region object containing the drag and drop element's position\nand size, including the padding configured fo...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "DragDrop",
            "optional": false,
            "doc": "<p>the drag and drop object to get the</p>\n\n<pre><code>                  location for\n</code></pre>\n",
            "name": "oDD"
          }
        ],
        "name": "getLocation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns a Region object containing the drag and drop element's position\nand size, including the padding configured for it</p>\n",
        "linenr": 904,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>a Region object representing the total area</p>\n\n<pre><code>                        the element occupies, including any padding\n                        the instance is configured for.\n</code></pre>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-getRelated",
        "shortDoc": "Returns the drag and drop instances that are in all groups the\npassed in instance belongs to. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "getRelated",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns the drag and drop instances that are in all groups the\npassed in instance belongs to.</p>\n",
        "linenr": 384,
        "return": {
          "type": "DragDrop[]",
          "doc": "<p>the related instances</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isDragDrop",
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop item. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id to check</p>\n",
            "name": "id"
          }
        ],
        "name": "isDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop item.</p>\n",
        "linenr": 371,
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop item,\nfalse otherwise</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isHandle",
        "shortDoc": "Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop ob...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "isHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility function to determine if a given element has been\nregistered as a drag drop handle for the given Drag Drop object.</p>\n",
        "linenr": 446,
        "return": {
          "type": "boolean",
          "doc": "<p>true if this element is a DragDrop handle, false\notherwise</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLegalTarget",
        "shortDoc": "Returns true if the specified dd target is a legal target for\nthe specifice drag obj ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "isLegalTarget",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Returns true if the specified dd target is a legal target for\nthe specifice drag obj</p>\n",
        "linenr": 410,
        "return": {
          "type": "boolean",
          "doc": "<p>true if the target is a legal target for the\ndd obj</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isLocked",
        "shortDoc": "Is drag and drop locked? ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [

        ],
        "name": "isLocked",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Is drag and drop locked?</p>\n",
        "linenr": 221,
        "return": {
          "type": "boolean",
          "doc": "<p>True if drag and drop is locked, false otherwise.</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-isTypeOfDD",
        "shortDoc": "My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>object to evaluate</p>\n",
            "name": "the"
          }
        ],
        "name": "isTypeOfDD",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>My goal is to be able to transparently determine if an object is\ntypeof DragDrop, and the exact subclass of DragDrop.  typeof\nreturns \"object\", oDD.constructor.toString() always returns\n\"DragDrop\" and not the name of the subclass.  So for now it just\nevaluates a well-known variable in DragDrop.</p>\n",
        "linenr": 431,
        "return": {
          "type": "boolean",
          "doc": "<p>true if typeof oDD = DragDrop</p>\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-lock",
        "shortDoc": "Lock all drag and drop functionality ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [

        ],
        "name": "lock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Lock all drag and drop functionality</p>\n",
        "linenr": 207,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-refreshCache",
        "shortDoc": "Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s). ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>an associative array of groups to refresh</p>\n",
            "name": "groups"
          }
        ],
        "name": "refreshCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Refreshes the cache of the top-left and bottom-right points of the\ndrag and drop objects in the specified group(s).  This is in the\nformat that is stored in the drag and drop instance, so typical\nusage is:\n<code>\nExt.dd.DragDropManager.refreshCache(ddinstance.groups);\n</code>\nAlternatively:\n<code>\nExt.dd.DragDropManager.refreshCache({group1:true, group2:true});\n</code>\n@TODO this really should be an indexed array.  Alternatively this\nmethod could accept both.</p>\n",
        "linenr": 834,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regDragDrop",
        "shortDoc": "Each DragDrop instance must be registered with the DragDropManager. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "regDragDrop",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop instance must be registered with the DragDropManager.\nThis is executed in DragDrop.init()</p>\n",
        "linenr": 304,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-regHandle",
        "shortDoc": "Each DragDrop handle element must be registered. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "regHandle",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Each DragDrop handle element must be registered.  This is done\nautomatically when executing DragDrop.setHandleElId()</p>\n",
        "linenr": 355,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-startDrag",
        "shortDoc": "Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
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
        "name": "startDrag",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Fired when either the drag pixel threshol or the mousedown hold\ntime threshold has been met.</p>\n",
        "linenr": 517,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-stopEvent",
        "shortDoc": "Utility to stop event propagation and event default, if these\nfeatures are turned on. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the event as returned by this.getEvent()</p>\n",
            "name": "e"
          }
        ],
        "name": "stopEvent",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Utility to stop event propagation and event default, if these\nfeatures are turned on.</p>\n",
        "linenr": 563,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-unlock",
        "shortDoc": "Unlock all drag and drop functionality ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [

        ],
        "name": "unlock",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Unlock all drag and drop functionality</p>\n",
        "linenr": 214,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDropManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-method-verifyEl",
        "shortDoc": "This checks to make sure an element exists and is in the DOM. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the element to check</p>\n",
            "name": "el"
          }
        ],
        "name": "verifyEl",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>This checks to make sure an element exists and is in the DOM.  The\nmain purpose is to handle cases where innerHTML is used to remove\ndrag and drop objects from the DOM.  IE provides an 'unspecified\nerror' when trying to access the offsetParent of such an element</p>\n",
        "linenr": 876,
        "return": {
          "type": "boolean",
          "doc": "<p>true if the element looks usable</p>\n"
        },
        "html_filename": "DragDropManager.html"
      }
    ],
    "property": [
      {
        "type": "int",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-INTERSECT",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "INTERSECT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In intersect mode, drag and drop interaction is defined by the\noverlap of two or more drag and drop objects.</p>\n",
        "linenr": 143,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "int",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-POINT",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "POINT",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>In point mode, drag and drop interaction is defined by the\nlocation of the cursor during the drag/drop</p>\n",
        "linenr": 134,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "int",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickPixelThresh",
        "shortDoc": "The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "clickPixelThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of pixels that the mouse needs to move after the\nmousedown before the drag is initiated.  Default=3;</p>\n",
        "linenr": 247,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "int",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-clickTimeThresh",
        "shortDoc": "The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "clickTimeThresh",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The number of milliseconds after the mousedown event to initiate the\ndrag if we don't get a mouseup event. Default=350</p>\n",
        "linenr": 256,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "int",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-mode",
        "shortDoc": "The current drag and drop mode. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "mode",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>The current drag and drop mode.  Default: POINT</p>\n",
        "linenr": 152,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-preventDefault",
        "shortDoc": "Flag to determine if we should prevent the default behavior of the\nevents we define. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "preventDefault",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should prevent the default behavior of the\nevents we define. By default this is true, but this can be set to\nfalse if you need the default behavior (not recommended)</p>\n",
        "linenr": 86,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-stopPropagation",
        "shortDoc": "Flag to determine if we should stop the propagation of the events\nwe generate. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "stopPropagation",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Flag to determine if we should stop the propagation of the events\nwe generate. This is true by default but you may want to set it to\nfalse if the html element contains other features that require the\nmouse click.</p>\n",
        "linenr": 96,
        "html_filename": "DragDropManager.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDropManager.html#Ext-dd-DragDropManager-property-useCache",
        "shortDoc": "Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
        "private": false,
        "name": "useCache",
        "owner": "Ext.dd.DragDropManager",
        "doc": "<p>Set useCache to false if you want to force object the lookup of each\ndrag and drop linked element constantly during a drag.</p>\n",
        "linenr": 238,
        "html_filename": "DragDropManager.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": true,
  "alias": null,
  "superclasses": [
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "DragDropManager.html#Ext-dd-DragDropManager",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDropManager.js",
  "private": false,
  "alternateClassNames": [
    "Ext.dd.DragDropMgr",
    "Ext.dd.DDM"
  ],
  "name": "Ext.dd.DragDropManager",
  "doc": "<p>DragDropManager is a singleton that tracks the element interaction for\nall DragDrop items in the window.  Generally, you will not call\nthis class directly, but it does have helper methods that could\nbe useful in your DragDrop implementations.</p>\n",
  "mixedInto": [

  ],
  "linenr": 10,
  "xtypes": [

  ],
  "html_filename": "DragDropManager.html",
  "extends": "Ext.Base"
});