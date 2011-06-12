Ext.data.JsonP.Ext_dd_StatusProxy({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropAllowed",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "name": "dropAllowed",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
        "linenr": 34,
        "html_filename": "StatusProxy.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropNotAllowed",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "name": "dropNotAllowed",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
        "linenr": 39,
        "html_filename": "StatusProxy.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new StatusProxy. ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "doc": "<p>Creates new StatusProxy.</p>\n",
        "owner": "Ext.dd.StatusProxy",
        "name": "StatusProxy",
        "html_filename": "StatusProxy.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 9
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
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getEl",
        "shortDoc": "Returns the underlying proxy Ext.Layer ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [

        ],
        "name": "getEl",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Returns the underlying proxy <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n",
        "linenr": 89,
        "return": {
          "type": "Ext.Layer",
          "doc": "<p>el</p>\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getGhost",
        "shortDoc": "Returns the ghost element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [

        ],
        "name": "getGhost",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Returns the ghost element</p>\n",
        "linenr": 97,
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>el</p>\n"
        },
        "html_filename": "StatusProxy.html"
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
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-hide",
        "shortDoc": "Hides the proxy ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to reset the status and clear the ghost contents, false to preserve them</p>\n",
            "name": "clear"
          }
        ],
        "name": "hide",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Hides the proxy</p>\n",
        "linenr": 105,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
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
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-repair",
        "shortDoc": "Causes the proxy to return to its position of origin via an animation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The XY position of the element ([x, y])</p>\n",
            "name": "xy"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call after the repair is complete.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.</p>\n",
            "name": "scope"
          }
        ],
        "name": "repair",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operation by the item being dragged.</p>\n",
        "linenr": 140,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-reset",
        "shortDoc": "Resets the status indicator to the default dropNotAllowed value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to also remove all content from the ghost, false to preserve it</p>\n",
            "name": "clearGhost"
          }
        ],
        "name": "reset",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Resets the status indicator to the default dropNotAllowed value</p>\n",
        "linenr": 58,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-setStatus",
        "shortDoc": "Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target e...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The css class for the new drop status indicator image</p>\n",
            "name": "cssClass"
          }
        ],
        "name": "setStatus",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target element.</p>\n",
        "linenr": 45,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-show",
        "shortDoc": "Displays this proxy ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [

        ],
        "name": "show",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Displays this proxy</p>\n",
        "linenr": 125,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
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
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-stop",
        "shortDoc": "Stops the repair animation if it's currently running ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [

        ],
        "name": "stop",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Stops the repair animation if it's currently running</p>\n",
        "linenr": 116,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-sync",
        "shortDoc": "Force the Layer to sync its shadow and shim positions to the element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [

        ],
        "name": "sync",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Force the Layer to sync its shadow and shim positions to the element</p>\n",
        "linenr": 133,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-update",
        "shortDoc": "Updates the contents of the ghost element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The html that will replace the current innerHTML of the ghost element, or a\nDOM node to append as the child of the ghost element (in which case the innerHTML will be cleared first).</p>\n",
            "name": "html"
          }
        ],
        "name": "update",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Updates the contents of the ghost element</p>\n",
        "linenr": 70,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "StatusProxy.html"
      }
    ],
    "property": [
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
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "StatusProxy.html#Ext-dd-StatusProxy",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.dd.StatusProxy",
  "doc": "<p>A specialized drag proxy that supports a drop status icon, <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> styles and auto-repair.  This is the\ndefault drag proxy used by all Ext.dd components.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "StatusProxy.html",
  "extends": "Ext.Base"
});