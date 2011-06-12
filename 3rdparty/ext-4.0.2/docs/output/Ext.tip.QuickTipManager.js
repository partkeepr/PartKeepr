Ext.data.JsonP.Ext_tip_QuickTipManager({
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-destroy",
        "shortDoc": "Destroy the QuickTips instance. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [

        ],
        "name": "destroy",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Destroy the QuickTips instance.</p>\n",
        "linenr": 150,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-disable",
        "shortDoc": "Disable quick tips globally. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [

        ],
        "name": "disable",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Disable quick tips globally.</p>\n",
        "linenr": 187,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-enable",
        "shortDoc": "Enable quick tips globally. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [

        ],
        "name": "enable",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Enable quick tips globally.</p>\n",
        "linenr": 177,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-getQuickTip",
        "shortDoc": "Gets the single QuickTip instance used to show tips from all registered elements. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [

        ],
        "name": "getQuickTip",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Gets the single <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> instance used to show tips from all registered elements.</p>\n",
        "linenr": 205,
        "return": {
          "type": "Ext.tip.QuickTip",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-init",
        "shortDoc": "Initialize the global QuickTips instance and prepare any quick tips. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to render the QuickTips container immediately to\npreload images. (Defaults to true)</p>\n",
            "name": "autoRender"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An optional config object for the created QuickTip. By\ndefault, the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class is instantiated, but this can\nbe changed by supplying an xtype property or a className property in this object.\nAll other properties on this object are configuration for the created component.</p>\n",
            "name": "config"
          }
        ],
        "name": "init",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Initialize the global QuickTips instance and prepare any quick tips.</p>\n",
        "linenr": 103,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-isEnabled",
        "shortDoc": "Returns true if quick tips are enabled, else false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [

        ],
        "name": "isEnabled",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Returns true if quick tips are enabled, else false.</p>\n",
        "linenr": 197,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-register",
        "shortDoc": "Configures a new quick tip instance and assigns it to a target element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The config object</p>\n",
            "name": "config"
          }
        ],
        "name": "register",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Configures a new quick tip instance and assigns it to a target element.  See\n<a href=\"#/api/Ext.tip.QuickTip-method-register\" rel=\"Ext.tip.QuickTip-method-register\" class=\"docClass\">Ext.tip.QuickTip.register</a> for details.</p>\n",
        "linenr": 213,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-tips",
        "shortDoc": "Alias of register. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The config object</p>\n",
            "name": "config"
          }
        ],
        "name": "tips",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Alias of <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a>.</p>\n",
        "linenr": 230,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "QuickTipManager.html#Ext-tip-QuickTipManager-method-unregister",
        "shortDoc": "Removes any registered quick tip from the target element and destroys it. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement/Element",
            "optional": false,
            "doc": "<p>The element from which the quick tip is to be removed.</p>\n",
            "name": "el"
          }
        ],
        "name": "unregister",
        "owner": "Ext.tip.QuickTipManager",
        "doc": "<p>Removes any registered quick tip from the target element and destroys it.</p>\n",
        "linenr": 222,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "QuickTipManager.html"
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
  "singleton": true,
  "alias": null,
  "superclasses": [
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "QuickTipManager.html#Ext-tip-QuickTipManager",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/tip/QuickTipManager.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.tip.QuickTipManager",
  "doc": "<p>Provides attractive and customizable tooltips for any element. The QuickTips\nsingleton is used to configure and manage tooltips globally for multiple elements\nin a generic manner.  To create individual tooltips with maximum customizability,\nyou should consider either <a href=\"#/api/Ext.tip.Tip\" rel=\"Ext.tip.Tip\" class=\"docClass\">Ext.tip.Tip</a> or <a href=\"#/api/Ext.tip.ToolTip\" rel=\"Ext.tip.ToolTip\" class=\"docClass\">Ext.tip.ToolTip</a>.</p>\n\n<p>Quicktips can be configured via tag attributes directly in markup, or by\nregistering quick tips programmatically via the <a href=\"#/api/Ext.tip.QuickTipManager-method-register\" rel=\"Ext.tip.QuickTipManager-method-register\" class=\"docClass\">register</a> method.</p>\n\n<p>The singleton's instance of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a> is available via\n<a href=\"#/api/Ext.tip.QuickTipManager-method-getQuickTip\" rel=\"Ext.tip.QuickTipManager-method-getQuickTip\" class=\"docClass\">getQuickTip</a>, and supports all the methods, and all the all the\nconfiguration properties of <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a>. These settings will apply to all\ntooltips shown by the singleton.</p>\n\n<p>Below is the summary of the configuration properties which can be used.\nFor detailed descriptions see the config options for the <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">QuickTip</a> class</p>\n\n<h2>QuickTips singleton configs (all are optional)</h2>\n\n<ul>\n<li><code>dismissDelay</code></li>\n<li><code>hideDelay</code></li>\n<li><code>maxWidth</code></li>\n<li><code>minWidth</code></li>\n<li><code>showDelay</code></li>\n<li><code>trackMouse</code></li>\n</ul>\n\n\n<h2>Target element configs (optional unless otherwise noted)</h2>\n\n<ul>\n<li><code>autoHide</code></li>\n<li><code>cls</code></li>\n<li><code>dismissDelay</code> (overrides singleton value)</li>\n<li><code>target</code> (required)</li>\n<li><code>text</code> (required)</li>\n<li><code>title</code></li>\n<li><code>width</code></li>\n</ul>\n\n\n<p>Here is an example showing how some of these config options could be used:</p>\n\n<p><p><img src=\"doc-resources/Ext.tip.QuickTipManager/Ext.tip.QuickTipManager.png\" alt=\"Ext.tip.QuickTipManager component\"></p></p>\n\n<h2>Code</h2>\n\n<pre><code>// Init the singleton.  Any tag-based quick tips will start working.\nExt.tip.QuickTipManager.init();\n\n// Apply a set of config properties to the singleton\nExt.apply(Ext.tip.QuickTipManager.getQuickTip(), {\n    maxWidth: 200,\n    minWidth: 100,\n    showDelay: 50      // Show 50ms after entering target\n});\n\n// Create a small panel to add a quick tip to\nExt.create('Ext.container.Container', {\n    id: 'quickTipContainer',\n    width: 200,\n    height: 150,\n    style: {\n        backgroundColor:'#000000'\n    },\n    renderTo: Ext.getBody()\n});\n\n\n// Manually register a quick tip for a specific element\nExt.tip.QuickTipManager.register({\n    target: 'quickTipContainer',\n    title: 'My Tooltip',\n    text: 'This tooltip was added in code',\n    width: 100,\n    dismissDelay: 10000 // Hide after 10 seconds hover\n});\n</code></pre>\n\n<p>To register a quick tip in markup, you simply add one or more of the valid QuickTip attributes prefixed with\nthe <strong>data-</strong> namespace.  The HTML element itself is automatically set as the quick tip target. Here is the summary\nof supported attributes (optional unless otherwise noted):</p>\n\n<ul>\n<li><code>hide</code>: Specifying \"user\" is equivalent to setting autoHide = false.  Any other value will be the same as autoHide = true.</li>\n<li><code>qclass</code>: A CSS class to be applied to the quick tip (equivalent to the 'cls' target element config).</li>\n<li><code>qtip (required)</code>: The quick tip text (equivalent to the 'text' target element config).</li>\n<li><code>qtitle</code>: The quick tip title (equivalent to the 'title' target element config).</li>\n<li><code>qwidth</code>: The quick tip width (equivalent to the 'width' target element config).</li>\n</ul>\n\n\n<p>Here is an example of configuring an HTML element to display a tooltip from markup:</p>\n\n<pre><code>// Add a quick tip to an HTML button\n&lt;input type=\"button\" value=\"OK\" data-qtitle=\"OK Button\" data-qwidth=\"100\"\n     data-qtip=\"This is a quick tip from markup!\"&gt;&lt;/input&gt;\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "QuickTipManager.html",
  "extends": "Ext.Base"
});