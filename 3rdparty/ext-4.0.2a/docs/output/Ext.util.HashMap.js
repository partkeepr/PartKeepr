Ext.data.JsonP.Ext_util_HashMap({
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
  "href": "HashMap.html#Ext-util-HashMap",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Function",
        "deprecated": null,
        "href": "HashMap.html#Ext-util-HashMap-cfg-keyFn",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "A function that is used to retrieve a default key for a passed object. ...",
        "static": false,
        "name": "keyFn",
        "owner": "Ext.util.HashMap",
        "doc": "<p>A function that is used to retrieve a default key for a passed object.\nA default is provided that returns the <b>id</b> property on the object. This function is only used\nif the add method is called with a single argument.</p>\n",
        "linenr": 26,
        "html_filename": "HashMap.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Creates new HashMap. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Creates new HashMap.</p>\n",
        "linenr": 36,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-method-add",
        "return": {
          "type": "Object",
          "doc": "<p>The item added.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Adds an item to the collection. ...",
        "static": false,
        "name": "add",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
        "linenr": 123,
        "html_filename": "HashMap.html"
      },
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
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "initial"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-clear",
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Removes all items from the hash. ...",
        "static": false,
        "name": "clear",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Removes all items from the hash.</p>\n",
        "linenr": 217,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "HashMap.html#Ext-util-HashMap-method-clone",
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>The new hash object.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Performs a shallow copy on this hash. ...",
        "static": false,
        "name": "clone",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Performs a shallow copy on this hash.</p>\n",
        "linenr": 314,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value to check for.</p>\n",
            "name": "value"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-contains",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value exists in the dictionary.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Checks whether a value exists in the hash. ...",
        "static": false,
        "name": "contains",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Checks whether a value exists in the hash.</p>\n",
        "linenr": 240,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to check for.</p>\n",
            "name": "key"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-containsKey",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if they key exists in the hash.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Checks whether a key exists in the hash. ...",
        "static": false,
        "name": "containsKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Checks whether a key exists in the hash.</p>\n",
        "linenr": 231,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-method-each",
        "return": {
          "type": "Ext.util.HashMap",
          "doc": "<p>this</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Executes the specified function once for each item in the hash. ...",
        "static": false,
        "name": "each",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Executes the specified function once for each item in the hash.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the hash</p></li>\n</ul></div>\n\n",
        "linenr": 283,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to lookup.</p>\n",
            "name": "key"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-get",
        "return": {
          "type": "Object",
          "doc": "<p>The value at that key. If it doesn't exist, <tt>undefined</tt> is returned.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Retrieves an item with a particular key. ...",
        "static": false,
        "name": "get",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Retrieves an item with a particular key.</p>\n",
        "linenr": 208,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "HashMap.html#Ext-util-HashMap-method-getCount",
        "return": {
          "type": "Number",
          "doc": "<p>The number of items in the hash.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Gets the number of items in the hash. ...",
        "static": false,
        "name": "getCount",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Gets the number of items in the hash.</p>\n",
        "linenr": 88,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The object to get the key from</p>\n",
            "name": "o"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-getKey",
        "return": {
          "type": "String",
          "doc": "<p>The key to use.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Extracts the key from an object. ...",
        "static": false,
        "name": "getKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Extracts the key from an object. This is a default implementation, it may be overridden</p>\n",
        "linenr": 114,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "HashMap.html#Ext-util-HashMap-method-getKeys",
        "return": {
          "type": "Array",
          "doc": "<p>An array of keys.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Return all of the keys in the hash. ...",
        "static": false,
        "name": "getKeys",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Return all of the keys in the hash.</p>\n",
        "linenr": 249,
        "html_filename": "HashMap.html"
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

        ],
        "href": "HashMap.html#Ext-util-HashMap-method-getValues",
        "return": {
          "type": "Array",
          "doc": "<p>An array of values.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Return all of the values in the hash. ...",
        "static": false,
        "name": "getValues",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Return all of the values in the hash.</p>\n",
        "linenr": 257,
        "html_filename": "HashMap.html"
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
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The value of the item to remove.</p>\n",
            "name": "o"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-remove",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the item was successfully removed.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Remove an item from the hash. ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Remove an item from the hash.</p>\n",
        "linenr": 176,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The key to remove.</p>\n",
            "name": "key"
          }
        ],
        "href": "HashMap.html#Ext-util-HashMap-method-removeAtKey",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the item was successfully removed.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Remove an item from the hash. ...",
        "static": false,
        "name": "removeAtKey",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Remove an item from the hash.</p>\n",
        "linenr": 189,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-method-replace",
        "return": {
          "type": "Object",
          "doc": "<p>The new value of the item.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Replaces an item in the hash. ...",
        "static": false,
        "name": "replace",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Replaces an item in the hash. If the key doesn't exist, the\n<a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> method will be used.</p>\n",
        "linenr": 155,
        "html_filename": "HashMap.html"
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
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-event-add",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Fires when a new item is added to the hash ...",
        "static": false,
        "name": "add",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when a new item is added to the hash</p>\n",
        "linenr": 47,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-event-clear",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Fires when the hash is cleared. ...",
        "static": false,
        "name": "clear",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when the hash is cleared.</p>\n",
        "linenr": 55,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-event-remove",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Fires when an item is removed from the hash. ...",
        "static": false,
        "name": "remove",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when an item is removed from the hash.</p>\n",
        "linenr": 61,
        "html_filename": "HashMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "HashMap.html#Ext-util-HashMap-event-replace",
        "protected": false,
        "tagname": "event",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
        "private": false,
        "shortDoc": "Fires when an item is replaced in the hash. ...",
        "static": false,
        "name": "replace",
        "owner": "Ext.util.HashMap",
        "doc": "<p>Fires when an item is replaced in the hash.</p>\n",
        "linenr": 69,
        "html_filename": "HashMap.html"
      }
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
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/HashMap.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.util.HashMap",
  "doc": "<p>\nRepresents a collection of a set of key and value pairs. Each key in the HashMap\nmust be unique, the same key cannot exist twice. Access to items is provided via\nthe key only. Sample usage:\n<pre><code>var map = new Ext.util.HashMap();\nmap.add('key1', 1);\nmap.add('key2', 2);\nmap.add('key3', 3);\n\nmap.each(function(key, value, length){\n    console.log(key, value, length);\n});\n</code></pre>\n</p>\n\n\n\n\n<p>The HashMap is an unordered class,\nthere is no guarantee when iterating over the items that they will be in any particular\norder. If this is required, then use a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.\n</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "HashMap.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.Base"
});