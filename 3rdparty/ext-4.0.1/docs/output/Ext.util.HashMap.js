Ext.data.JsonP.Ext_util_HashMap({
  "tagname": "class",
  "name": "Ext.util.HashMap",
  "doc": "<p>\nRepresents a collection of a set of key and value pairs. Each key in the HashMap\nmust be unique, the same key cannot exist twice. Access to items is provided via\nthe key only. Sample usage:\n<pre><code>var map = new Ext.util.HashMap();\nmap.add('key1', 1);\nmap.add('key2', 2);\nmap.add('key3', 3);\n\nmap.each(function(key, value, length){\n    console.log(key, value, length);\n});\n</code></pre>\n</p>\n\n\n\n\n<p>The HashMap is an unordered class,\nthere is no guarantee when iterating over the items that they will be in any particular\norder. If this is required, then use a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.\n</p>\n\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "keyFn",
      "member": "Ext.util.HashMap",
      "type": "Function",
      "doc": "<p>A function that is used to retrieve a default key for a passed object.\nA default is provided that returns the <b>id</b> property on the object. This function is only used\nif the add method is called with a single argument.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 28,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-cfg-keyFn",
      "shortDoc": "A function that is used to retrieve a default key for a passed object.\nA default is provided that returns the id prop..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "HashMap",
      "member": "Ext.util.HashMap",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The configuration options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 1,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "add",
      "member": "Ext.util.HashMap",
      "doc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> event when complete.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to associate with the item, or the new item.</p>\n\n\n<p>If a <a href=\"#/api/Ext.util.HashMap--getKey\" rel=\"Ext.util.HashMap--getKey\" class=\"docClass\">getKey</a> implementation was specified for this HashMap,\nor if the key of the stored items is in a property called <tt><b>id</b></tt>,\nthe HashMap will be able to <i>derive</i> the key for the new item.\nIn this case just pass the new item in this parameter.</p>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The item to add.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The item added.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 115,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-add",
      "shortDoc": "<p>Adds an item to the collection. Fires the <a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> event when complete.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clear",
      "member": "Ext.util.HashMap",
      "doc": "<p>Removes all items from the hash.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "initial",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.HashMap",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 209,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-clear",
      "shortDoc": "<p>Removes all items from the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clone",
      "member": "Ext.util.HashMap",
      "doc": "<p>Performs a shallow copy on this hash.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.util.HashMap",
        "doc": "<p>The new hash object.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 306,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-clone",
      "shortDoc": "<p>Performs a shallow copy on this hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.util.HashMap",
      "doc": "<p>Checks whether a value exists in the hash.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>The value to check for.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value exists in the dictionary.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 232,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-contains",
      "shortDoc": "<p>Checks whether a value exists in the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "containsKey",
      "member": "Ext.util.HashMap",
      "doc": "<p>Checks whether a key exists in the hash.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to check for.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if they key exists in the hash.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 223,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-containsKey",
      "shortDoc": "<p>Checks whether a key exists in the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.util.HashMap",
      "doc": "<p>Executes the specified function once for each item in the hash.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the hash</p></li>\n</ul></div>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope to execute in. Defaults to <tt>this</tt>.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.HashMap",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 275,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-each",
      "shortDoc": "Executes the specified function once for each item in the hash.\nReturning false from the function will cease iteratio..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.util.HashMap",
      "doc": "<p>Retrieves an item with a particular key.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to lookup.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The value at that key. If it doesn't exist, <tt>undefined</tt> is returned.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 200,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-get",
      "shortDoc": "<p>Retrieves an item with a particular key.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getCount",
      "member": "Ext.util.HashMap",
      "doc": "<p>Gets the number of items in the hash.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The number of items in the hash.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 79,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-getCount",
      "shortDoc": "<p>Gets the number of items in the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getKeys",
      "member": "Ext.util.HashMap",
      "doc": "<p>Return all of the keys in the hash.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of keys.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 241,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-getKeys",
      "shortDoc": "<p>Return all of the keys in the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getValues",
      "member": "Ext.util.HashMap",
      "doc": "<p>Return all of the values in the hash.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of values.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 249,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-getValues",
      "shortDoc": "<p>Return all of the values in the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "remove",
      "member": "Ext.util.HashMap",
      "doc": "<p>Remove an item from the hash.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The value of the item to remove.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the item was successfully removed.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 168,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-remove",
      "shortDoc": "<p>Remove an item from the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeAtKey",
      "member": "Ext.util.HashMap",
      "doc": "<p>Remove an item from the hash.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key to remove.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the item was successfully removed.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 181,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-removeAtKey",
      "shortDoc": "<p>Remove an item from the hash.</p>\n"
    },
    {
      "tagname": "method",
      "name": "replace",
      "member": "Ext.util.HashMap",
      "doc": "<p>Replaces an item in the hash. If the key doesn't exist, the\n<a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> method will be used.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key of the item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>The new value for the item.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The new value of the item.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 147,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-method-replace",
      "shortDoc": "<p>Replaces an item in the hash. If the key doesn't exist, the\n<a href=\"#/api/Ext.util.HashMap-event-add\" rel=\"Ext.util.HashMap-event-add\" class=\"docClass\">add</a> method will be used.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [
    {
      "tagname": "event",
      "name": "add",
      "member": "Ext.util.HashMap",
      "doc": "<p>Fires when a new item is added to the hash</p>\n",
      "params": [
        {
          "type": "Ext.util.HashMap",
          "name": "this",
          "doc": "<p>.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key of the added item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>The value of the added item.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 42,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-event-add",
      "shortDoc": "<p>Fires when a new item is added to the hash</p>\n"
    },
    {
      "tagname": "event",
      "name": "clear",
      "member": "Ext.util.HashMap",
      "doc": "<p>Fires when the hash is cleared.</p>\n",
      "params": [
        {
          "type": "Ext.util.HashMap",
          "name": "this",
          "doc": "<p>.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 50,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-event-clear",
      "shortDoc": "<p>Fires when the hash is cleared.</p>\n"
    },
    {
      "tagname": "event",
      "name": "remove",
      "member": "Ext.util.HashMap",
      "doc": "<p>Fires when an item is removed from the hash.</p>\n",
      "params": [
        {
          "type": "Ext.util.HashMap",
          "name": "this",
          "doc": "<p>.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key of the removed item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>The value of the removed item.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 56,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-event-remove",
      "shortDoc": "<p>Fires when an item is removed from the hash.</p>\n"
    },
    {
      "tagname": "event",
      "name": "replace",
      "member": "Ext.util.HashMap",
      "doc": "<p>Fires when an item is replaced in the hash.</p>\n",
      "params": [
        {
          "type": "Ext.util.HashMap",
          "name": "this",
          "doc": "<p>.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "key",
          "doc": "<p>The key of the replaced item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "<p>The new value for the item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "old",
          "doc": "<p>The old value for the item.</p>\n",
          "optional": false
        }
      ],
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
      "linenr": 64,
      "html_filename": "HashMap.html",
      "href": "HashMap.html#Ext-util-HashMap-event-replace",
      "shortDoc": "<p>Fires when an item is replaced in the hash.</p>\n"
    }
  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/HashMap.js",
  "linenr": 1,
  "html_filename": "HashMap.html",
  "href": "HashMap.html#Ext-util-HashMap",
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