Ext.data.JsonP.Ext_AbstractManager({
  "tagname": "class",
  "name": "Ext.AbstractManager",
  "doc": "<p>Base Manager class</p>\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "create",
      "member": "Ext.AbstractManager",
      "doc": "<p>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "defaultType",
          "doc": "<p>If no type is discovered in the config object, we fall back to this type</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The instance of whatever this manager is managing</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 76,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-create",
      "shortDoc": "<p>Creates and returns an instance of whatever this manager manages, based on the supplied type and config object</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.AbstractManager",
      "doc": "<p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n",
      "params": [
        {
          "type": "Object",
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
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 118,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-each",
      "shortDoc": "Executes the specified function once for each item in the collection.\nReturning false from the function will cease it..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.AbstractManager",
      "doc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the item</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The item, <code>undefined</code> if not found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 31,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-get",
      "shortDoc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getCount",
      "member": "Ext.AbstractManager",
      "doc": "<p>Gets the number of items in the collection.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "<p>The number of items in the collection.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 135,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-getCount",
      "shortDoc": "<p>Gets the number of items in the collection.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isRegistered",
      "member": "Ext.AbstractManager",
      "doc": "<p>Checks if an item type is registered.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "type",
          "doc": "<p>The mnemonic string by which the class may be looked up</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>Whether the type is registered.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 67,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-isRegistered",
      "shortDoc": "<p>Checks if an item type is registered.</p>\n"
    },
    {
      "tagname": "method",
      "name": "onAvailable",
      "member": "Ext.AbstractManager",
      "doc": "<p>Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The item id</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The callback function. Called with a single parameter, the item.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 95,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-onAvailable",
      "shortDoc": "Registers a function that will be called when an item with the specified id is added to the manager. This will happen..."
    },
    {
      "tagname": "method",
      "name": "register",
      "member": "Ext.AbstractManager",
      "doc": "<p>Registers an item to be managed</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to register</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 41,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-register",
      "shortDoc": "<p>Registers an item to be managed</p>\n"
    },
    {
      "tagname": "method",
      "name": "registerType",
      "member": "Ext.AbstractManager",
      "doc": "<p>Registers a new item constructor, keyed by a type key.\n\n",
      "params": [
        {
          "type": "String",
          "name": "type",
          "doc": "<p>The mnemonic string by which the class may be looked up.</p>\n",
          "optional": false
        },
        {
          "type": "Constructor",
          "name": "cls",
          "doc": "<p>The new instance class.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 57,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-registerType",
      "shortDoc": "<p>Registers a new item constructor, keyed by a type key.\n\n"
    },
    {
      "tagname": "method",
      "name": "unregister",
      "member": "Ext.AbstractManager",
      "doc": "<p>Unregisters an item by removing it from this manager</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The item to unregister</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 49,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-method-unregister",
      "shortDoc": "<p>Unregisters an item by removing it from this manager</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "all",
      "member": "Ext.AbstractManager",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>Contains all of the items currently managed</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
      "linenr": 21,
      "html_filename": "AbstractManager.html",
      "href": "AbstractManager.html#Ext-AbstractManager-property-all"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/AbstractManager.js",
  "linenr": 1,
  "html_filename": "AbstractManager.html",
  "href": "AbstractManager.html#Ext-AbstractManager",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.ComponentManager",
    "Ext.ModelManager",
    "Ext.PluginManager"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});