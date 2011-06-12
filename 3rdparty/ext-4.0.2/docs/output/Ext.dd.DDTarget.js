Ext.data.JsonP.Ext_dd_DDTarget({
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
        "href": "DDTarget.html#Ext-dd-DDTarget-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new DDTarget. ...",
        "static": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that is a drop target</p>\n",
            "name": "id"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the group of related DragDrop objects</p>\n",
            "name": "sGroup"
          },
          {
            "type": "object",
            "optional": false,
            "doc": "<p>an object containing configurable attributes.\nValid properties for DDTarget in addition to those in DragDrop: none.</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DDTarget.js",
        "doc": "<p>Creates new DDTarget.</p>\n",
        "owner": "Ext.dd.DDTarget",
        "name": "DDTarget",
        "html_filename": "DDTarget.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 21
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleClass",
        "shortDoc": "Lets you specify a css class of elements that will not initiate a drag ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the elements you wish to ignore</p>\n",
            "name": "cssClass"
          }
        ],
        "name": "addInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you specify a css class of elements that will not initiate a drag</p>\n",
        "linenr": 861,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleId",
        "shortDoc": "Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the element id of the element you wish to ignore</p>\n",
            "name": "id"
          }
        ],
        "name": "addInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Lets you to specify an element id for a child of a drag handle\nthat should not initiate a drag</p>\n",
        "linenr": 848,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addInvalidHandleType",
        "shortDoc": "Allows you to specify a tag name that should not start a drag operation\nwhen clicked. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to exclude</p>\n",
            "name": "tagName"
          }
        ],
        "name": "addInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a tag name that should not start a drag operation\nwhen clicked.  This is designed to facilitate embedding links within a\ndrag handle that do something other than start the drag.</p>\n",
        "linenr": 836,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-addToGroup",
        "shortDoc": "Adds this instance to a group of related drag/drop objects. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the name of the group</p>\n",
            "name": "sGroup"
          }
        ],
        "name": "addToGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Adds this instance to a group of related drag/drop objects.  All\ninstances belong to at least one group, and can belong to as many\ngroups as needed.</p>\n",
        "linenr": 705,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-applyConfig",
        "shortDoc": "Applies the configuration parameters that were passed into the constructor. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "applyConfig",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Applies the configuration parameters that were passed into the constructor.\nThis is supposed to happen at each level through the inheritance chain.  So\na DDProxy implentation will execute apply config on DDProxy, DD, and\nDragDrop in order to get all of the parameters that are available in\neach object.</p>\n",
        "linenr": 615,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearConstraints",
        "shortDoc": "Clears any constraints applied to this instance. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "clearConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any constraints applied to this instance.  Also clears ticks\nsince they can't exist independent of a constraint at this time.</p>\n",
        "linenr": 1007,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-clearTicks",
        "shortDoc": "Clears any tick interval defined for this instance ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "clearTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Clears any tick interval defined for this instance</p>\n",
        "linenr": 1017,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-constrainTo",
        "shortDoc": "Initializes the drag drop object's constraints to restrict movement to a certain element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "constrainTo",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes the drag drop object's constraints to restrict movement to a certain element.</p>\n\n<p>Usage:</p>\n\n<pre><code>var dd = new Ext.dd.DDProxy(\"dragDiv1\", \"proxytest\",\n               { dragElId: \"existingProxyDiv\" });\ndd.startDrag = function(){\n    this.constrainTo(\"parent-id\");\n};\n</code></pre>\n\n<p>Or you can initalize it using the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> object:</p>\n\n<pre><code>Ext.get(\"dragDiv1\").initDDProxy(\"proxytest\", {dragElId: \"existingProxyDiv\"}, {\n    startDrag : function(){\n        this.constrainTo(\"parent-id\");\n    }\n});\n</code></pre>\n",
        "linenr": 478,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-endDrag",
        "shortDoc": "Called when we are done dragging the object ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "name": "endDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when we are done dragging the object</p>\n",
        "linenr": 435,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getDragEl",
        "shortDoc": "Returns a reference to the actual element to drag. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "getDragEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the actual element to drag.  By default this is\nthe same as the html element, but it can be assigned to another\nelement. An example of this can be found in Ext.dd.DDProxy</p>\n",
        "linenr": 547,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-getEl",
        "shortDoc": "Returns a reference to the linked element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "getEl",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns a reference to the linked element</p>\n",
        "linenr": 535,
        "return": {
          "type": "HTMLElement",
          "doc": "<p>the html element</p>\n"
        },
        "html_filename": "DragDrop.html"
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
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-init",
        "shortDoc": "Sets up the DragDrop object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "init",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Sets up the DragDrop object.  Must be called in the constructor of any\n<a href=\"#/api/Ext.dd.DragDrop\" rel=\"Ext.dd.DragDrop\" class=\"docClass\">Ext.dd.DragDrop</a> subclass</p>\n",
        "linenr": 557,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-initTarget",
        "shortDoc": "Initializes Targeting functionality only... ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "initTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Initializes Targeting functionality only... the object does not\nget a mousedown handler.</p>\n",
        "linenr": 570,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isLocked",
        "shortDoc": "Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on th...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "isLocked",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Returns true if this instance is locked, or the drag drop mgr is locked\n(meaning that all drag/drop is disabled on the page.)</p>\n",
        "linenr": 783,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this obj or all drag/drop is locked, else\nfalse</p>\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-isValidHandleChild",
        "shortDoc": "Checks the tag exclusion list to see if this click should be ignored ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>the HTMLElement to evaluate</p>\n",
            "name": "node"
          }
        ],
        "name": "isValidHandleChild",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Checks the tag exclusion list to see if this click should be ignored</p>\n",
        "linenr": 903,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if this is a valid tag type, false if not</p>\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-lock",
        "shortDoc": "Locks this instance ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "lock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Locks this instance</p>\n",
        "linenr": 183,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onAvailable",
        "shortDoc": "Override the onAvailable method to do what is needed after the initial\nposition was determined. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "onAvailable",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Override the onAvailable method to do what is needed after the initial\nposition was determined.</p>\n",
        "linenr": 460,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDrag",
        "shortDoc": "Abstract method called during the onMouseMove event while dragging an\nobject. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousemove event</p>\n",
            "name": "e"
          }
        ],
        "name": "onDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called during the onMouseMove event while dragging an\nobject.</p>\n",
        "linenr": 358,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragDrop",
        "shortDoc": "Abstract method called when this item is dropped on another DragDrop\nobj ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "onDragDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on another DragDrop\nobj</p>\n",
        "linenr": 412,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragEnter",
        "shortDoc": "Abstract method called when this element fist begins hovering over\nanother DragDrop obj ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "onDragEnter",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element fist begins hovering over\nanother DragDrop obj</p>\n",
        "linenr": 365,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOut",
        "shortDoc": "Abstract method called when we are no longer hovering over an element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "onDragOut",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when we are no longer hovering over an element</p>\n",
        "linenr": 397,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onDragOver",
        "shortDoc": "Abstract method called when this element is hovering over another\nDragDrop obj ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "onDragOver",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this element is hovering over another\nDragDrop obj</p>\n",
        "linenr": 381,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onInvalidDrop",
        "shortDoc": "Abstract method called when this item is dropped on an area with no\ndrop target ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "name": "onInvalidDrop",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called when this item is dropped on an area with no\ndrop target</p>\n",
        "linenr": 422,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseDown",
        "shortDoc": "Called when a drag/drop obj gets a mousedown ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mousedown event</p>\n",
            "name": "e"
          }
        ],
        "name": "onMouseDown",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mousedown</p>\n",
        "linenr": 448,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-onMouseUp",
        "shortDoc": "Called when a drag/drop obj gets a mouseup ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "Event",
            "optional": false,
            "doc": "<p>the mouseup event</p>\n",
            "name": "e"
          }
        ],
        "name": "onMouseUp",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Called when a drag/drop obj gets a mouseup</p>\n",
        "linenr": 454,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeFromGroup",
        "shortDoc": "Removes this instance from the supplied interaction group ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The group to drop</p>\n",
            "name": "sGroup"
          }
        ],
        "name": "removeFromGroup",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes this instance from the supplied interaction group</p>\n",
        "linenr": 716,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleClass",
        "shortDoc": "Unsets an invalid css class ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the class of the element(s) you wish to\nre-enable</p>\n",
            "name": "cssClass"
          }
        ],
        "name": "removeInvalidHandleClass",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid css class</p>\n",
        "linenr": 890,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleId",
        "shortDoc": "Unsets an invalid handle id ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element to re-enable</p>\n",
            "name": "id"
          }
        ],
        "name": "removeInvalidHandleId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an invalid handle id</p>\n",
        "linenr": 879,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-removeInvalidHandleType",
        "shortDoc": "Unsets an excluded tag name set by addInvalidHandleType ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the type of element to unexclude</p>\n",
            "name": "tagName"
          }
        ],
        "name": "removeInvalidHandleType",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unsets an excluded tag name set by addInvalidHandleType</p>\n",
        "linenr": 869,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-resetConstraints",
        "shortDoc": "Must be called if you manually reposition a dd element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "boolean",
            "optional": false,
            "doc": "\n",
            "name": "maintainOffset"
          }
        ],
        "name": "resetConstraints",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Must be called if you manually reposition a dd element.</p>\n",
        "linenr": 1048,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setDragElId",
        "shortDoc": "Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "name": "setDragElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify that an element other than the linked element\nwill be moved with the cursor during a drag</p>\n",
        "linenr": 728,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setHandleElId",
        "shortDoc": "Allows you to specify a child of the linked element that should be\nused to initiate the drag operation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to\ninitiate the drag.</p>\n",
            "name": "id"
          }
        ],
        "name": "setHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to specify a child of the linked element that should be\nused to initiate the drag operation.  An example of this would be if\nyou have a content div with text and links.  Clicking anywhere in the\ncontent area would normally start the drag operation.  Use this method\nto specify that an element inside of the content div is the element\nthat starts the drag operation.</p>\n",
        "linenr": 737,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setInitPosition",
        "shortDoc": "Stores the initial placement of the linked element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "setInitPosition",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Stores the initial placement of the linked element.</p>\n",
        "linenr": 665,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setOuterHandleElId",
        "shortDoc": "Allows you to set an element outside of the linked element as a drag\nhandle ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>the id of the element that will be used to initiate the drag</p>\n",
            "name": "id"
          }
        ],
        "name": "setOuterHandleElId",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Allows you to set an element outside of the linked element as a drag\nhandle</p>\n",
        "linenr": 755,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setPadding",
        "shortDoc": "Configures the padding for the target zone in px. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "setPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configures the padding for the target zone in px.  Effectively expands\n(or reduces) the virtual object size for targeting calculations.\nSupports css-style shorthand; if only one parameter is passed, all sides\nwill have that padding, and if only two are passed, the top and bottom\nwill have the first param, the left and right the second.</p>\n",
        "linenr": 643,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setXConstraint",
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "setXConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Use\nthis method to limit the horizontal travel of the element.  Pass in\n0,0 for the parameters if you want to lock the drag to the y axis.</p>\n",
        "linenr": 986,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-setYConstraint",
        "shortDoc": "By default, the element can be dragged any place on the screen. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "setYConstraint",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, the element can be dragged any place on the screen.  Set\nthis to limit the vertical travel of the element.  Pass in 0,0 for the\nparameters if you want to lock the drag to the x axis.</p>\n",
        "linenr": 1027,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-startDrag",
        "shortDoc": "Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
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
        "name": "startDrag",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Abstract method called after a drag/drop object is clicked\nand the drag or mousedown time thresholds have beeen met.</p>\n",
        "linenr": 344,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
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
        "href": "DragDrop.html#Ext-dd-DragDrop-method-toString",
        "shortDoc": "toString method ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "toString",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>toString method</p>\n",
        "linenr": 1113,
        "return": {
          "type": "string",
          "doc": "<p>string representation of the dd obj</p>\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unlock",
        "shortDoc": "Unlocks this instace ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "unlock",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Unlocks this instace</p>\n",
        "linenr": 198,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "DragDrop.html#Ext-dd-DragDrop-method-unreg",
        "shortDoc": "Removes all drag and drop hooks for this element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "params": [

        ],
        "name": "unreg",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Removes all drag and drop hooks for this element</p>\n",
        "linenr": 770,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "DragDrop.html"
      }
    ],
    "property": [
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-available",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "available",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The available property is false until the linked dom element is accessible.</p>\n",
        "linenr": 319,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-config",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "config",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Configuration attributes passed into the constructor</p>\n",
        "linenr": 87,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-defaultPadding",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "defaultPadding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Provides default constraint padding to \"constrainTo\" elements (defaults to <code>{left:0, right:0, top:0, bottom:0}</code>).</p>\n",
        "linenr": 467,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-groups",
        "shortDoc": "The group defines a logical collection of DragDrop objects that are\nrelated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "groups",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The group defines a logical collection of DragDrop objects that are\nrelated.  Instances only get events when interacting with other\nDragDrop object in the same group.  This lets us define multiple\ngroups using a single DragDrop subclass if we want. An object in the format {'group1':true, 'group2':true}</p>\n",
        "linenr": 164,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-hasOuterHandles",
        "shortDoc": "By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "hasOuterHandles",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, drags can only be initiated if the mousedown occurs in the\nregion the linked element is.  This is done in part to work around a\nbug in some browsers that mis-report the mousedown if the previous\nmouseup happened outside of the window.  This property is set to true\nif outer handles are defined. Defaults to false.</p>\n",
        "linenr": 326,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-id",
        "shortDoc": "The id of the element associated with this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "id",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The id of the element associated with this object.  This is what we\nrefer to as the \"linked element\" because the size and position of\nthis element is used to determine when the drag and drop objects have\ninteracted.</p>\n",
        "linenr": 77,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-ignoreSelf",
        "shortDoc": "Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "ignoreSelf",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Set to false to enable a DragDrop object to fire drag events while dragging\nover its own Element. Defaults to true - DragDrop objects do not by default\nfire drag events to themselves.</p>\n",
        "linenr": 69,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleClasses",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleClasses",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An Array of CSS class names for elements to be considered in valid as drag handles.</p>\n",
        "linenr": 139,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleIds",
        "shortDoc": "An object who's property names identify the IDs of elements to be considered invalid as drag handles. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleIds",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify the IDs of elements to be considered invalid as drag handles.\nA non-null property value identifies the ID as invalid. For example, to prevent\ndragging from being initiated on element ID \"foo\", use:</p>\n\n<pre><code>{\n    foo: true\n}</code></pre>\n\n",
        "linenr": 127,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-invalidHandleTypes",
        "shortDoc": "An object who's property names identify HTML tags to be considered invalid as drag handles. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "invalidHandleTypes",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>An object who's property names identify HTML tags to be considered invalid as drag handles.\nA non-null property value identifies the tag as invalid. Defaults to the\nfollowing value which prevents drag operations from being initiated by &lt;a> elements:</p>\n\n<pre><code>{\n    A: \"A\"\n}</code></pre>\n\n",
        "linenr": 115,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-isTarget",
        "shortDoc": "By default, all instances can be a drop target. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "isTarget",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default, all instances can be a drop target.  This can be disabled by\nsetting isTarget to false.</p>\n",
        "linenr": 205,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-maintainOffset",
        "shortDoc": "Maintain offsets when we resetconstraints. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "maintainOffset",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Maintain offsets when we resetconstraints.  Set to true when you want\nthe position of the element relative to its parent to stay the same\nwhen the page changes</p>\n",
        "linenr": 283,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-moveOnly",
        "shortDoc": "When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "moveOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>When set to true, other DD objects in cooperating DDGroups do not receive\nnotification events when this DD object is dragged over them. Defaults to false.</p>\n",
        "linenr": 190,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "[int]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-padding",
        "shortDoc": "The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "padding",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>The padding configured for this drag and drop object for calculating\nthe drop zone intersection with this object.\nAn array containing the 4 padding values: [top, right, bottom, left]</p>\n",
        "linenr": 213,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-primaryButtonOnly",
        "shortDoc": "By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed m...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "primaryButtonOnly",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>By default the drag and drop instance will only respond to the primary\nbutton click (left button for a right-handed mouse).  Set to true to\nallow drag and drop to start with any mouse click that is propogated\nby the browser</p>\n",
        "linenr": 309,
        "html_filename": "DragDrop.html"
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
        "type": "[int]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-xTicks",
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "xTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nhorizontal graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "linenr": 293,
        "html_filename": "DragDrop.html"
      },
      {
        "type": "[int]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "DragDrop.html#Ext-dd-DragDrop-property-yTicks",
        "shortDoc": "Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DragDrop.js",
        "private": false,
        "name": "yTicks",
        "owner": "Ext.dd.DragDrop",
        "doc": "<p>Array of pixel locations the element will snap to if we specified a\nvertical graduation/interval.  This array is generated automatically\nwhen you define a tick interval.</p>\n",
        "linenr": 301,
        "html_filename": "DragDrop.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.dd.DragDrop"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "DDTarget.html#Ext-dd-DDTarget",
  "subclasses": [
    "Ext.dd.DropTarget"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/DDTarget.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.dd.DDTarget",
  "doc": "<p>A DragDrop implementation that does not move, but can be a drop\ntarget.  You would get the same result by simply omitting implementation\nfor the event callbacks, but this way we reduce the processing cost of the\nevent listener and the callbacks.</p>\n",
  "mixedInto": [

  ],
  "linenr": 10,
  "xtypes": [

  ],
  "html_filename": "DDTarget.html",
  "extends": "Ext.dd.DragDrop"
});