Ext.data.JsonP.Ext_util_HashMap({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "HashMap.html#Ext-util-HashMap-cfg-keyFn",
        "shortDoc": "A function that is used to retrieve a default key for a passed object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "name": "keyFn",
        "owner": "Ext.util.HashMap",
        "doc": "<p>A function that is used to retrieve a default key for a passed object.\nA default is provided that returns the <b>id</b> property on the object. This function is only used\nif the add method is called with a single argument.</p>\n",
        "linenr": 26,
        "html_filename": "HashMap.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "HashMap.html#Ext-util-HashMap-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new HashMap. ...",
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
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "doc": "<p>Creates new HashMap.</p>\n",
        "owner": "Ext.util.HashMap",
        "name": "HashMap",
        "html_filename": "HashMap.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 36
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-add",
        "shortDoc": "Adds an item to the collection. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to associate with the item, or the new item.</p>\n\n\n<p>If a <a href=\"#/api/Ext.util.HashMap-method-getKey\" rel=\"Ext.util.HashMap-method-getKey\" class=\"docClass\">getKey</a> implementation was specified for this HashMap,\nor if the key of the stored items is in a property called <tt><b>id</b></tt>,\nthe HashMap will be able to <i>derive</i> the key for the new item.\nIn this case just pass the new item in this parameter.</p>\n\n",
            "name": "key"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The item to add.</p>\n",
            "name": "o"
          }
        ],
        "name": "add",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "linenr": 123,
        "return": {
          "type": "Object",
          "doc": "<p>The item added.</p>\n"
        },
        "html_filename": "HashMap.html"
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
        "href": "HashMap.html#Ext-util-HashMap-method-clear",
        "shortDoc": "Removes all items from the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "initial"
          }
        ],
        "name": "clear",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Removes all items from the hash.</p>\n",
        "linenr": 217,
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-clone",
        "shortDoc": "Performs a shallow copy on this hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [

        ],
        "name": "clone",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Performs a shallow copy on this hash.</p>\n",
        "linenr": 314,
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>The new hash object.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-contains",
        "shortDoc": "Checks whether a value exists in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value to check for.</p>\n",
            "name": "value"
          }
        ],
        "name": "contains",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Checks whether a value exists in the hash.</p>\n",
        "linenr": 240,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value exists in the dictionary.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-containsKey",
        "shortDoc": "Checks whether a key exists in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to check for.</p>\n",
            "name": "key"
          }
        ],
        "name": "containsKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Checks whether a key exists in the hash.</p>\n",
        "linenr": 231,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if they key exists in the hash.</p>\n"
        },
        "html_filename": "HashMap.html"
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
        "href": "HashMap.html#Ext-util-HashMap-method-each",
        "shortDoc": "Executes the specified function once for each item in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n",
            "name": "scope"
          }
        ],
        "name": "each",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Executes the specified function once for each item in the hash.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the hash</p></li>\n</ul></div>\n\n",
        "linenr": 283,
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-get",
        "shortDoc": "Retrieves an item with a particular key. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to lookup.</p>\n",
            "name": "key"
          }
        ],
        "name": "get",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Retrieves an item with a particular key.</p>\n",
        "linenr": 208,
        "return": {
          "type": "Object",
          "doc": "<p>The value at that key. If it doesn't exist, <tt>undefined</tt> is returned.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-getCount",
        "shortDoc": "Gets the number of items in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [

        ],
        "name": "getCount",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Gets the number of items in the hash.</p>\n",
        "linenr": 88,
        "return": {
          "type": "Number",
          "doc": "<p>The number of items in the hash.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-getKey",
        "shortDoc": "Extracts the key from an object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to get the key from</p>\n",
            "name": "o"
          }
        ],
        "name": "getKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Extracts the key from an object. This is a default implementation, it may be overridden</p>\n",
        "linenr": 114,
        "return": {
          "type": "String",
          "doc": "<p>The key to use.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-getKeys",
        "shortDoc": "Return all of the keys in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [

        ],
        "name": "getKeys",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Return all of the keys in the hash.</p>\n",
        "linenr": 249,
        "return": {
          "type": "Array",
          "doc": "<p>An array of keys.</p>\n"
        },
        "html_filename": "HashMap.html"
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
        "href": "HashMap.html#Ext-util-HashMap-method-getValues",
        "shortDoc": "Return all of the values in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [

        ],
        "name": "getValues",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Return all of the values in the hash.</p>\n",
        "linenr": 257,
        "return": {
          "type": "Array",
          "doc": "<p>An array of values.</p>\n"
        },
        "html_filename": "HashMap.html"
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
        "href": "HashMap.html#Ext-util-HashMap-method-remove",
        "shortDoc": "Remove an item from the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value of the item to remove.</p>\n",
            "name": "o"
          }
        ],
        "name": "remove",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Remove an item from the hash.</p>\n",
        "linenr": 176,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the item was successfully removed.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-removeAtKey",
        "shortDoc": "Remove an item from the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to remove.</p>\n",
            "name": "key"
          }
        ],
        "name": "removeAtKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Remove an item from the hash.</p>\n",
        "linenr": 189,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the item was successfully removed.</p>\n"
        },
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "HashMap.html#Ext-util-HashMap-method-replace",
        "shortDoc": "Replaces an item in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key of the item.</p>\n",
            "name": "key"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The new value for the item.</p>\n",
            "name": "value"
          }
        ],
        "name": "replace",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Replaces an item in the hash. If the key doesn't exist, the\n<a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> method will be used.</p>\n",
        "linenr": 155,
        "return": {
          "type": "Object",
          "doc": "<p>The new value of the item.</p>\n"
        },
        "html_filename": "HashMap.html"
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
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "HashMap.html#Ext-util-HashMap-event-add",
        "shortDoc": "Fires when a new item is added to the hash ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.HashMap",
            "optional": false,
            "doc": "<p>.</p>\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key of the added item.</p>\n",
            "name": "key"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value of the added item.</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "add",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when a new item is added to the hash</p>\n",
        "linenr": 47,
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "HashMap.html#Ext-util-HashMap-event-clear",
        "shortDoc": "Fires when the hash is cleared. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.HashMap",
            "optional": false,
            "doc": "<p>.</p>\n",
            "name": "this"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "clear",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when the hash is cleared.</p>\n",
        "linenr": 55,
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "HashMap.html#Ext-util-HashMap-event-remove",
        "shortDoc": "Fires when an item is removed from the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.HashMap",
            "optional": false,
            "doc": "<p>.</p>\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key of the removed item.</p>\n",
            "name": "key"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value of the removed item.</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "remove",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when an item is removed from the hash.</p>\n",
        "linenr": 61,
        "html_filename": "HashMap.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "event",
        "href": "HashMap.html#Ext-util-HashMap-event-replace",
        "shortDoc": "Fires when an item is replaced in the hash. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.HashMap",
            "optional": false,
            "doc": "<p>.</p>\n",
            "name": "this"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key of the replaced item.</p>\n",
            "name": "key"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The new value for the item.</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The old value for the item.</p>\n",
            "name": "old"
          },
          {
            "type": "Object",
            "tagname": "param",
            "name": "options",
            "doc": "<p>The options object passed to <a href=\"#/api/Ext.util.Observable-method-addListener\" rel=\"Ext.util.Observable-method-addListener\" class=\"docClass\">Ext.util.Observable.addListener</a>.</p>\n"
          }
        ],
        "name": "replace",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when an item is replaced in the hash.</p>\n",
        "linenr": 69,
        "html_filename": "HashMap.html"
      }
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
  "href": "HashMap.html#Ext-util-HashMap",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.HashMap",
  "doc": "<p>\nRepresents a collection of a set of key and value pairs. Each key in the HashMap\nmust be unique, the same key cannot exist twice. Access to items is provided via\nthe key only. Sample usage:\n<pre><code>var map = new Ext.util.HashMap();\nmap.add('key1', 1);\nmap.add('key2', 2);\nmap.add('key3', 3);\n\nmap.each(function(key, value, length){\n    console.log(key, value, length);\n});\n</code></pre>\n</p>\n\n\n\n\n<p>The HashMap is an unordered class,\nthere is no guarantee when iterating over the items that they will be in any particular\norder. If this is required, then use a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.\n</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "HashMap.html",
  "extends": "Ext.Base"
});