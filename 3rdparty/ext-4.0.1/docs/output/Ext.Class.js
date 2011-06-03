Ext.data.JsonP.Ext_Class({
  "tagname": "class",
  "name": "Ext.Class",
  "doc": "<p>Handles class creation throughout the whole framework. Note that most of the time <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> should\nbe used instead, since it's a higher level wrapper that aliases to <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>\nto enable namespacing and dynamic dependency resolution.</p>\n\n<h1>Basic syntax:</h1>\n\n<pre><code>Ext.define(className, properties);\n</code></pre>\n\n<p>in which <code>properties</code> is an object represent a collection of properties that apply to the class. See\n<a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a> for more detailed instructions.</p>\n\n<pre><code>Ext.define('Person', {\n     name: 'Unknown',\n\n     constructor: function(name) {\n         if (name) {\n             this.name = name;\n         }\n\n         return this;\n     },\n\n     eat: function(foodType) {\n         alert(\"I'm eating: \" + foodType);\n\n         return this;\n     }\n});\n\nvar aaron = new Person(\"Aaron\");\naaron.eat(\"Sandwich\"); // alert(\"I'm eating: Sandwich\");\n</code></pre>\n\n<p>Ext.Class has a powerful set of extensible <a href=\"#/api/Ext.Class-method-registerPreprocessor\" rel=\"Ext.Class-method-registerPreprocessor\" class=\"docClass\">pre-processors</a> which takes care of\neverything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.</p>\n\n<h1>Inheritance:</h1>\n\n<pre><code>Ext.define('Developer', {\n     extend: 'Person',\n\n     constructor: function(name, isGeek) {\n         this.isGeek = isGeek;\n\n         // Apply a method from the parent class' prototype\n         this.callParent([name]);\n\n         return this;\n\n     },\n\n     code: function(language) {\n         alert(\"I'm coding in: \" + language);\n\n         this.eat(\"Bugs\");\n\n         return this;\n     }\n});\n\nvar jacky = new Developer(\"Jacky\", true);\njacky.code(\"JavaScript\"); // alert(\"I'm coding in: JavaScript\");\n                          // alert(\"I'm eating: Bugs\");\n</code></pre>\n\n<p>See <a href=\"#/api/Ext.Base--callParent\" rel=\"Ext.Base--callParent\" class=\"docClass\">Ext.Base.callParent</a> for more details on calling superclass' methods</p>\n\n<h1>Mixins:</h1>\n\n<pre><code>Ext.define('CanPlayGuitar', {\n     playGuitar: function() {\n        alert(\"F#...G...D...A\");\n     }\n});\n\nExt.define('CanComposeSongs', {\n     composeSongs: function() { ... }\n});\n\nExt.define('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\nExt.define('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canComposeSongs: 'CanComposeSongs',\n         canSing: 'CanSing'\n     }\n})\n\nExt.define('CoolPerson', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canSing: 'CanSing'\n     },\n\n     sing: function() {\n         alert(\"Ahem....\");\n\n         this.mixins.canSing.sing.call(this);\n\n         alert(\"[Playing guitar at the same time...]\");\n\n         this.playGuitar();\n     }\n});\n\nvar me = new CoolPerson(\"Jacky\");\n\nme.sing(); // alert(\"Ahem...\");\n           // alert(\"I'm on the highway to hell...\");\n           // alert(\"[Playing guitar at the same time...]\");\n           // alert(\"F#...G...D...A\");\n</code></pre>\n\n<h1>Config:</h1>\n\n<pre><code>Ext.define('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n\n     isExpensive: false,\n\n     constructor: function(config) {\n         this.initConfig(config);\n\n         return this;\n     },\n\n     applyPrice: function(price) {\n         this.isExpensive = (price &gt; 500);\n\n         return price;\n     },\n\n     applyOperatingSystem: function(operatingSystem) {\n         if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {\n             return 'Other';\n         }\n\n         return operatingSystem;\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n\niPhone.isExpensive; // false;\niPhone.setPrice(600);\niPhone.getPrice(); // 600\niPhone.isExpensive; // true;\n\niPhone.setOperatingSystem('AlienOS');\niPhone.getOperatingSystem(); // 'Other'\n</code></pre>\n\n<h1>Statics:</h1>\n\n<pre><code>Ext.define('Computer', {\n     statics: {\n         factory: function(brand) {\n            // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n\n<p>Also see <a href=\"#/api/Ext.Base--statics\" rel=\"Ext.Base--statics\" class=\"docClass\">Ext.Base.statics</a> and <a href=\"#/api/Ext.Base--self\" rel=\"Ext.Base--self\" class=\"docClass\">Ext.Base.self</a> for more details on accessing\nstatic properties within class methods</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "getDefaultPreprocessors",
      "member": "Ext.Class",
      "doc": "<p>Retrieve the array stack of default pre-processors</p>\n",
      "params": [

      ],
      "return": {
        "type": "Function",
        "doc": "<p>defaultPreprocessors</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
      "linenr": 349,
      "html_filename": "Class.html",
      "href": "Class.html#Ext-Class-method-getDefaultPreprocessors",
      "shortDoc": "<p>Retrieve the array stack of default pre-processors</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPreprocessor",
      "member": "Ext.Class",
      "doc": "<p>Retrieve a pre-processor callback function by its name, which has been registered before</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>preprocessor</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
      "linenr": 335,
      "html_filename": "Class.html",
      "href": "Class.html#Ext-Class-method-getPreprocessor",
      "shortDoc": "<p>Retrieve a pre-processor callback function by its name, which has been registered before</p>\n"
    },
    {
      "tagname": "method",
      "name": "registerPreprocessor",
      "member": "Ext.Class",
      "doc": "<p>Register a new pre-processor to be used during the class creation process registerPreprocessor</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The pre-processor's name</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The callback function to be executed. Typical format:</p>\n\n<pre><code>function(cls, data, fn) {\n    // Your code here\n\n    // Execute this when the processing is finished.\n    // Asynchronous processing is perfectly ok\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n});\n</code></pre>\n\n<p>Passed arguments for this function are:</p>\n\n<ul>\n<li><code>{Function} cls</code>: The created class</li>\n<li><code>{Object} data</code>: The set of properties passed in <a href=\"#/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> constructor</li>\n<li><code>{Function} fn</code>: The callback function that <b>must</b> to be executed when this pre-processor finishes,\nregardless of whether the processing is synchronous or aynchronous</li>\n</ul>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "always",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Class",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
      "linenr": 298,
      "html_filename": "Class.html",
      "href": "Class.html#Ext-Class-method-registerPreprocessor",
      "shortDoc": "<p>Register a new pre-processor to be used during the class creation process registerPreprocessor</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDefaultPreprocessorPosition",
      "member": "Ext.Class",
      "doc": "<p>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. For example:</p>\n\n<pre><code>Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {\n    // Your code here\n\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n}).insertDefaultPreprocessor('debug', 'last');\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The pre-processor name. Note that it needs to be registered with\n<a href=\"#/api/Ext--registerPreprocessor\" rel=\"Ext--registerPreprocessor\" class=\"docClass\">registerPreprocessor</a> before this</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "offset",
          "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "relativeName",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Class",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
      "linenr": 370,
      "html_filename": "Class.html",
      "href": "Class.html#Ext-Class-method-setDefaultPreprocessorPosition",
      "shortDoc": "Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. For..."
    },
    {
      "tagname": "method",
      "name": "setDefaultPreprocessors",
      "member": "Ext.Class",
      "doc": "<p>Set the default array stack of default pre-processors</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "preprocessors",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Class",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
      "linenr": 358,
      "html_filename": "Class.html",
      "href": "Class.html#Ext-Class-method-setDefaultPreprocessors",
      "shortDoc": "<p>Set the default array stack of default pre-processors</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Class.js",
  "linenr": 1,
  "html_filename": "Class.html",
  "href": "Class.html#Ext-Class",
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