Ext.data.JsonP.Ext_direct_RemotingEvent({
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
        "href": "Event.html#Ext-direct-Event-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Event. ...",
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
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/direct/Event.js",
        "doc": "<p>Creates new Event.</p>\n",
        "owner": "Ext.direct.Event",
        "name": "RemotingEvent",
        "html_filename": "Event.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 20
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
        "href": "Event.html#Ext-direct-Event-method-getData",
        "shortDoc": "Return the raw data for this event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/direct/Event.js",
        "private": false,
        "params": [

        ],
        "name": "getData",
        "owner": "Ext.direct.Event",
        "doc": "<p>Return the raw data for this event.</p>\n",
        "linenr": 28,
        "return": {
          "type": "Object",
          "doc": "<p>The data from the event</p>\n"
        },
        "html_filename": "Event.html"
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
        "href": "RemotingEvent.html#Ext-direct-RemotingEvent-method-getTransaction",
        "shortDoc": "Get the transaction associated with this event. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/direct/RemotingEvent.js",
        "private": false,
        "params": [

        ],
        "name": "getTransaction",
        "owner": "Ext.direct.RemotingEvent",
        "doc": "<p>Get the transaction associated with this event.</p>\n",
        "linenr": 18,
        "return": {
          "type": "Ext.direct.Transaction",
          "doc": "<p>The transaction</p>\n"
        },
        "html_filename": "RemotingEvent.html"
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
    "Ext.Base",
    "Ext.direct.Event"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "RemotingEvent.html#Ext-direct-RemotingEvent",
  "subclasses": [
    "Ext.direct.ExceptionEvent"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/direct/RemotingEvent.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.direct.RemotingEvent",
  "doc": "<p>An event that is fired when data is received from a\n<a href=\"#/api/Ext.direct.RemotingProvider\" rel=\"Ext.direct.RemotingProvider\" class=\"docClass\">Ext.direct.RemotingProvider</a>. Contains a method to the\nrelated transaction for the direct request, see <a href=\"#/api/Ext.direct.RemotingEvent-method-getTransaction\" rel=\"Ext.direct.RemotingEvent-method-getTransaction\" class=\"docClass\">getTransaction</a></p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "RemotingEvent.html",
  "extends": "Ext.direct.Event"
});