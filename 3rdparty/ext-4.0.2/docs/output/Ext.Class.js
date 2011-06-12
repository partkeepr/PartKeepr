Ext.data.JsonP.Ext_Class({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "members": {
    "cfg": [
      {
        "type": "[String]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "ClassManager.html#Ext-Class-cfg-alias",
        "shortDoc": "List of short aliases for class names. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "alias",
        "owner": "Ext.Class",
        "doc": "<p>List of short aliases for class names.  Most useful for defining xtypes for widgets:</p>\n\n<pre><code>Ext.define('MyApp.CoolPanel', {\n    extend: 'Ext.panel.Panel',\n    alias: ['widget.coolpanel'],\n    title: 'Yeah!'\n});\n\n// Using Ext.create\nExt.widget('widget.coolpanel');\n// Using the shorthand for widgets and in xtypes\nExt.widget('panel', {\n    items: [\n        {xtype: 'coolpanel', html: 'Foo'},\n        {xtype: 'coolpanel', html: 'Bar'}\n    ]\n});\n</code></pre>\n",
        "linenr": 850,
        "html_filename": "ClassManager.html"
      },
      {
        "type": "String/[String]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "ClassManager.html#Ext-Class-cfg-alternateClassName",
        "shortDoc": "Defines alternate names for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "alternateClassName",
        "owner": "Ext.Class",
        "doc": "<p>Defines alternate names for this class.  For example:</p>\n\n<pre><code>Ext.define('Developer', {\n    alternateClassName: ['Coder', 'Hacker'],\n    code: function(msg) {\n        alert('Typing... ' + msg);\n    }\n});\n\nvar joe = Ext.create('Developer');\njoe.code('stackoverflow');\n\nvar rms = Ext.create('Hacker');\nrms.code('hack hack');\n</code></pre>\n",
        "linenr": 927,
        "html_filename": "ClassManager.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Class.html#Ext-Class-cfg-config",
        "shortDoc": "List of configuration options with their default values, for which automatically\naccessor methods are generated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "name": "config",
        "owner": "Ext.Class",
        "doc": "<p>List of configuration options with their default values, for which automatically\naccessor methods are generated.  For example:</p>\n\n<pre><code>Ext.define('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n     constructor: function(cfg) {\n         this.initConfig(cfg);\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n</code></pre>\n",
        "linenr": 580,
        "html_filename": "Class.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Class.html#Ext-Class-cfg-extend",
        "shortDoc": "The parent class that this class extends. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "name": "extend",
        "owner": "Ext.Class",
        "doc": "<p>The parent class that this class extends. For example:</p>\n\n<pre><code>Ext.define('Person', {\n    say: function(text) { alert(text); }\n});\n\nExt.define('Developer', {\n    extend: 'Person',\n    say: function(text) { this.callParent([\"print \"+text]); }\n});\n</code></pre>\n",
        "linenr": 420,
        "html_filename": "Class.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Class.html#Ext-Class-cfg-inheritableStatics",
        "shortDoc": "List of inheritable static methods for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "name": "inheritableStatics",
        "owner": "Ext.Class",
        "doc": "<p>List of inheritable static methods for this class.\nOtherwise just like <a href=\"#/api/Ext.Class-cfg-statics\" rel=\"Ext.Class-cfg-statics\" class=\"docClass\">statics</a> but subclasses inherit these methods.</p>\n",
        "linenr": 529,
        "html_filename": "Class.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Class.html#Ext-Class-cfg-mixins",
        "shortDoc": "List of classes to mix into this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "name": "mixins",
        "owner": "Ext.Class",
        "doc": "<p>List of classes to mix into this class. For example:</p>\n\n<pre><code>Ext.define('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\nExt.define('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canSing: 'CanSing'\n     }\n})\n</code></pre>\n",
        "linenr": 556,
        "html_filename": "Class.html"
      },
      {
        "type": "[String]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Loader.html#Ext-Class-cfg-requires",
        "shortDoc": "List of classes that have to be loaded before instanciating this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "requires",
        "owner": "Ext.Class",
        "doc": "<p>List of classes that have to be loaded before instanciating this class.\nFor example:</p>\n\n<pre><code>Ext.define('Mother', {\n    requires: ['Child'],\n    giveBirth: function() {\n        // we can be sure that child class is available.\n        return new Child();\n    }\n});\n</code></pre>\n",
        "linenr": 971,
        "html_filename": "Loader.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "ClassManager.html#Ext-Class-cfg-singleton",
        "shortDoc": "When set to true, the class will be instanciated as singleton. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/ClassManager.js",
        "private": false,
        "name": "singleton",
        "owner": "Ext.Class",
        "doc": "<p>When set to true, the class will be instanciated as singleton.  For example:</p>\n\n<pre><code>Ext.define('Logger', {\n    singleton: true,\n    log: function(msg) {\n        console.log(msg);\n    }\n});\n\nLogger.log('Hello');\n</code></pre>\n",
        "linenr": 908,
        "html_filename": "ClassManager.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Class.html#Ext-Class-cfg-statics",
        "shortDoc": "List of static methods for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "name": "statics",
        "owner": "Ext.Class",
        "doc": "<p>List of static methods for this class. For example:</p>\n\n<pre><code>Ext.define('Computer', {\n     statics: {\n         factory: function(brand) {\n             // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n",
        "linenr": 499,
        "html_filename": "Class.html"
      },
      {
        "type": "[String]",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Loader.html#Ext-Class-cfg-uses",
        "shortDoc": "List of classes to load together with this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Loader.js",
        "private": false,
        "name": "uses",
        "owner": "Ext.Class",
        "doc": "<p>List of classes to load together with this class.  These aren't neccessarily loaded before\nthis class is instanciated. For example:</p>\n\n<pre><code>Ext.define('Mother', {\n    uses: ['Child'],\n    giveBirth: function() {\n        // This code might, or might not work:\n        // return new Child();\n\n        // Instead use Ext.create() to load the class at the spot if not loaded already:\n        return Ext.create('Child');\n    }\n});\n</code></pre>\n",
        "linenr": 1132,
        "html_filename": "Loader.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Class.html#Ext-Class-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new class. ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object represent the properties of this class</p>\n",
            "name": "classData"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>Optional, the callback function to be executed when this class is fully created.\nNote that the creation process can be asynchronous depending on the pre-processors used.</p>\n",
            "name": "createdFn"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "doc": "<p>Creates new class.</p>\n",
        "owner": "Ext.Class",
        "name": "Class",
        "html_filename": "Class.html",
        "return": {
          "type": "Ext.Base",
          "doc": "<p>The newly created class</p>\n"
        },
        "linenr": 207
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Class.html#Ext-Class-method-getDefaultPreprocessors",
        "shortDoc": "Retrieve the array stack of default pre-processors ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "params": [

        ],
        "name": "getDefaultPreprocessors",
        "owner": "Ext.Class",
        "doc": "<p>Retrieve the array stack of default pre-processors</p>\n",
        "linenr": 350,
        "return": {
          "type": "Function",
          "doc": "<p>defaultPreprocessors</p>\n"
        },
        "html_filename": "Class.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Class.html#Ext-Class-method-getPreprocessor",
        "shortDoc": "Retrieve a pre-processor callback function by its name, which has been registered before ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "name"
          }
        ],
        "name": "getPreprocessor",
        "owner": "Ext.Class",
        "doc": "<p>Retrieve a pre-processor callback function by its name, which has been registered before</p>\n",
        "linenr": 336,
        "return": {
          "type": "Function",
          "doc": "<p>preprocessor</p>\n"
        },
        "html_filename": "Class.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Class.html#Ext-Class-method-registerPreprocessor",
        "shortDoc": "Register a new pre-processor to be used during the class creation process registerPreprocessor ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The pre-processor's name</p>\n",
            "name": "name"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function to be executed. Typical format:</p>\n\n<pre><code>function(cls, data, fn) {\n    // Your code here\n\n    // Execute this when the processing is finished.\n    // Asynchronous processing is perfectly ok\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n});\n</code></pre>\n\n<p>Passed arguments for this function are:</p>\n\n<ul>\n<li><code>{Function} cls</code>: The created class</li>\n<li><code>{Object} data</code>: The set of properties passed in <a href=\"#/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a> constructor</li>\n<li><code>{Function} fn</code>: The callback function that <b>must</b> to be executed when this pre-processor finishes,\nregardless of whether the processing is synchronous or aynchronous</li>\n</ul>\n\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "always"
          }
        ],
        "name": "registerPreprocessor",
        "owner": "Ext.Class",
        "doc": "<p>Register a new pre-processor to be used during the class creation process registerPreprocessor</p>\n",
        "linenr": 299,
        "return": {
          "type": "Ext.Class",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Class.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Class.html#Ext-Class-method-setDefaultPreprocessorPosition",
        "shortDoc": "Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The pre-processor name. Note that it needs to be registered with\nregisterPreprocessor before this</p>\n",
            "name": "name"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n",
            "name": "offset"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "relativeName"
          }
        ],
        "name": "setDefaultPreprocessorPosition",
        "owner": "Ext.Class",
        "doc": "<p>Insert this pre-processor at a specific position in the stack, optionally relative to\nany existing pre-processor. For example:</p>\n\n<pre><code>Ext.Class.registerPreprocessor('debug', function(cls, data, fn) {\n    // Your code here\n\n    if (fn) {\n        fn.call(this, cls, data);\n    }\n}).insertDefaultPreprocessor('debug', 'last');\n</code></pre>\n",
        "linenr": 371,
        "return": {
          "type": "Ext.Class",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Class.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Class.html#Ext-Class-method-setDefaultPreprocessors",
        "shortDoc": "Set the default array stack of default pre-processors ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
        "private": false,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "\n",
            "name": "preprocessors"
          }
        ],
        "name": "setDefaultPreprocessors",
        "owner": "Ext.Class",
        "doc": "<p>Set the default array stack of default pre-processors</p>\n",
        "linenr": 359,
        "return": {
          "type": "Ext.Class",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Class.html"
      }
    ],
    "property": [

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

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Class.html#Ext-Class",
  "subclasses": [

  ],
  "static": false,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Class.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Class",
  "doc": "<p>Handles class creation throughout the whole framework. Note that most of the time <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> should\nbe used instead, since it's a higher level wrapper that aliases to <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>\nto enable namespacing and dynamic dependency resolution.</p>\n\n<h1>Basic syntax:</h1>\n\n<pre><code>Ext.define(className, properties);\n</code></pre>\n\n<p>in which <code>properties</code> is an object represent a collection of properties that apply to the class. See\n<a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a> for more detailed instructions.</p>\n\n<pre><code>Ext.define('Person', {\n     name: 'Unknown',\n\n     constructor: function(name) {\n         if (name) {\n             this.name = name;\n         }\n\n         return this;\n     },\n\n     eat: function(foodType) {\n         alert(\"I'm eating: \" + foodType);\n\n         return this;\n     }\n});\n\nvar aaron = new Person(\"Aaron\");\naaron.eat(\"Sandwich\"); // alert(\"I'm eating: Sandwich\");\n</code></pre>\n\n<p>Ext.Class has a powerful set of extensible <a href=\"#/api/Ext.Class-method-registerPreprocessor\" rel=\"Ext.Class-method-registerPreprocessor\" class=\"docClass\">pre-processors</a> which takes care of\neverything related to class creation, including but not limited to inheritance, mixins, configuration, statics, etc.</p>\n\n<h1>Inheritance:</h1>\n\n<pre><code>Ext.define('Developer', {\n     extend: 'Person',\n\n     constructor: function(name, isGeek) {\n         this.isGeek = isGeek;\n\n         // Apply a method from the parent class' prototype\n         this.callParent([name]);\n\n         return this;\n\n     },\n\n     code: function(language) {\n         alert(\"I'm coding in: \" + language);\n\n         this.eat(\"Bugs\");\n\n         return this;\n     }\n});\n\nvar jacky = new Developer(\"Jacky\", true);\njacky.code(\"JavaScript\"); // alert(\"I'm coding in: JavaScript\");\n                          // alert(\"I'm eating: Bugs\");\n</code></pre>\n\n<p>See <a href=\"#/api/Ext.Base-method-callParent\" rel=\"Ext.Base-method-callParent\" class=\"docClass\">Ext.Base.callParent</a> for more details on calling superclass' methods</p>\n\n<h1>Mixins:</h1>\n\n<pre><code>Ext.define('CanPlayGuitar', {\n     playGuitar: function() {\n        alert(\"F#...G...D...A\");\n     }\n});\n\nExt.define('CanComposeSongs', {\n     composeSongs: function() { ... }\n});\n\nExt.define('CanSing', {\n     sing: function() {\n         alert(\"I'm on the highway to hell...\")\n     }\n});\n\nExt.define('Musician', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canComposeSongs: 'CanComposeSongs',\n         canSing: 'CanSing'\n     }\n})\n\nExt.define('CoolPerson', {\n     extend: 'Person',\n\n     mixins: {\n         canPlayGuitar: 'CanPlayGuitar',\n         canSing: 'CanSing'\n     },\n\n     sing: function() {\n         alert(\"Ahem....\");\n\n         this.mixins.canSing.sing.call(this);\n\n         alert(\"[Playing guitar at the same time...]\");\n\n         this.playGuitar();\n     }\n});\n\nvar me = new CoolPerson(\"Jacky\");\n\nme.sing(); // alert(\"Ahem...\");\n           // alert(\"I'm on the highway to hell...\");\n           // alert(\"[Playing guitar at the same time...]\");\n           // alert(\"F#...G...D...A\");\n</code></pre>\n\n<h1>Config:</h1>\n\n<pre><code>Ext.define('SmartPhone', {\n     config: {\n         hasTouchScreen: false,\n         operatingSystem: 'Other',\n         price: 500\n     },\n\n     isExpensive: false,\n\n     constructor: function(config) {\n         this.initConfig(config);\n\n         return this;\n     },\n\n     applyPrice: function(price) {\n         this.isExpensive = (price &gt; 500);\n\n         return price;\n     },\n\n     applyOperatingSystem: function(operatingSystem) {\n         if (!(/^(iOS|Android|BlackBerry)$/i).test(operatingSystem)) {\n             return 'Other';\n         }\n\n         return operatingSystem;\n     }\n});\n\nvar iPhone = new SmartPhone({\n     hasTouchScreen: true,\n     operatingSystem: 'iOS'\n});\n\niPhone.getPrice(); // 500;\niPhone.getOperatingSystem(); // 'iOS'\niPhone.getHasTouchScreen(); // true;\niPhone.hasTouchScreen(); // true\n\niPhone.isExpensive; // false;\niPhone.setPrice(600);\niPhone.getPrice(); // 600\niPhone.isExpensive; // true;\n\niPhone.setOperatingSystem('AlienOS');\niPhone.getOperatingSystem(); // 'Other'\n</code></pre>\n\n<h1>Statics:</h1>\n\n<pre><code>Ext.define('Computer', {\n     statics: {\n         factory: function(brand) {\n            // 'this' in static methods refer to the class itself\n             return new this(brand);\n         }\n     },\n\n     constructor: function() { ... }\n});\n\nvar dellComputer = Computer.factory('Dell');\n</code></pre>\n\n<p>Also see <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a> and <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a> for more details on accessing\nstatic properties within class methods</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Class.html",
  "extends": null
});