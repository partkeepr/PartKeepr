Ext.data.JsonP.Ext_data_Types({
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
      }
    ],
    "property": [
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-AUTO",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "AUTO",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that no conversion is applied to the raw data before it is placed into a Record.</p>\n",
        "linenr": 66,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-BOOL",
        "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "BOOL",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOLEAN</code> is equivalent.</p>\n\n",
        "linenr": 123,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-BOOLEAN",
        "shortDoc": "This data type means that the raw data is converted into a boolean before it is placed into\na Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "BOOLEAN",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a boolean before it is placed into\na Record. The string \"true\" and the number 1 are converted to boolean <code>true</code>.</p>\n\n\n<p>The synonym <code>BOOL</code> is equivalent.</p>\n\n",
        "linenr": 176,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-DATE",
        "shortDoc": "This data type means that the raw data is converted into a Date before it is placed into a Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "DATE",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a Date before it is placed into a Record.\nThe date format is specified in the constructor of the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> to which this type is\nbeing applied.</p>\n",
        "linenr": 141,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-FLOAT",
        "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "FLOAT",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>NUMBER</code> is equivalent.</p>\n\n",
        "linenr": 108,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-INT",
        "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "INT",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INTEGER</code> is equivalent.</p>\n\n",
        "linenr": 93,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-INTEGER",
        "shortDoc": "This data type means that the raw data is converted into an integer before it is placed into a Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "INTEGER",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into an integer before it is placed into a Record.</p>\n\n<p>The synonym <code>INT</code> is equivalent.</p>\n\n",
        "linenr": 185,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-NUMBER",
        "shortDoc": "This data type means that the raw data is converted into a number before it is placed into a Record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "NUMBER",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a number before it is placed into a Record.</p>\n\n<p>The synonym <code>FLOAT</code> is equivalent.</p>\n\n",
        "linenr": 193,
        "html_filename": "Types.html"
      },
      {
        "type": "Object.",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-STRING",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "STRING",
        "owner": "Ext.data.Types",
        "doc": "<p>This data type means that the raw data is converted into a String before it is placed into a Record.</p>\n",
        "linenr": 79,
        "html_filename": "Types.html"
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
        "type": "Regexp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Types.html#Ext-data-Types-property-stripRe",
        "shortDoc": "A regular expression for stripping non-numeric characters from a numeric value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
        "private": false,
        "name": "stripRe",
        "owner": "Ext.data.Types",
        "doc": "<p>A regular expression for stripping non-numeric characters from a numeric value. Defaults to <tt>/[\\$,%]/g</tt>.\nThis should be overridden for localization.</p>\n",
        "linenr": 58,
        "html_filename": "Types.html"
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
  "href": "Types.html#Ext-data-Types",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Types.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.Types",
  "doc": "<p>This is s static class containing the system-supplied data types which may be given to a <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a>.<p/>\n<p>The properties in this class are used as type indicators in the <a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Field</a> class, so to\ntest whether a Field is of a certain type, compare the <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">type</a> property against properties\nof this class.</p>\n<p>Developers may add their own application-specific data types to this class. Definition names must be UPPERCASE.\neach type definition must contain three properties:</p>\n<div class=\"mdetail-params\"><ul>\n<li><code>convert</code> : <i>Function</i><div class=\"sub-desc\">A function to convert raw data values from a data block into the data\nto be stored in the Field. The function is passed the collowing parameters:\n<div class=\"mdetail-params\"><ul>\n<li><b>v</b> : Mixed<div class=\"sub-desc\">The data value as read by the Reader, if undefined will use\nthe configured <tt><a href=\"#/api/Ext.data.Field-cfg-defaultValue\" rel=\"Ext.data.Field-cfg-defaultValue\" class=\"docClass\">defaultValue</a></tt>.</div></li>\n<li><b>rec</b> : Mixed<div class=\"sub-desc\">The data object containing the row as read by the Reader.\nDepending on the Reader type, this could be an Array (<a href=\"#/api/Ext.data.reader.Array\" rel=\"Ext.data.reader.Array\" class=\"docClass\">ArrayReader</a>), an object\n(<a href=\"#/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">JsonReader</a>), or an XML element.</div></li>\n</ul></div></div></li>\n<li><code>sortType</code> : <i>Function</i> <div class=\"sub-desc\">A function to convert the stored data into comparable form, as defined by <a href=\"#/api/Ext.data.SortTypes\" rel=\"Ext.data.SortTypes\" class=\"docClass\">Ext.data.SortTypes</a>.</div></li>\n<li><code>type</code> : <i>String</i> <div class=\"sub-desc\">A textual data type name.</div></li>\n</ul></div>\n<p>For example, to create a VELatLong field (See the Microsoft Bing Mapping API) containing the latitude/longitude value of a datapoint on a map from a JsonReader data block\nwhich contained the properties <code>lat</code> and <code>long</code>, you would define a new data type like this:</p>\n<pre><code>// Add a new Field data type which stores a VELatLong object in the Record.\nExt.data.Types.VELATLONG = {\n    convert: function(v, data) {\n        return new VELatLong(data.lat, data.long);\n    },\n    sortType: function(v) {\n        return v.Latitude;  // When sorting, order by latitude\n    },\n    type: 'VELatLong'\n};\n</code></pre>\n<p>Then, when declaring a Model, use \n<pre><code>var types = Ext.data.Types; // allow shorthand type access\nExt.define('Unit',\n    extend: 'Ext.data.Model', \n    fields: [\n        { name: 'unitName', mapping: 'UnitName' },\n        { name: 'curSpeed', mapping: 'CurSpeed', type: types.INT },\n        { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n        { name: 'latitude', mapping: 'lat', type: types.FLOAT },\n        { name: 'position', type: types.VELATLONG }\n    ]\n});\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Types.html",
  "extends": "Ext.Base"
});