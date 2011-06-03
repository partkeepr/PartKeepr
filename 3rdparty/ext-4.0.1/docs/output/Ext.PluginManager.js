Ext.data.JsonP.Ext_PluginManager({
  "tagname": "class",
  "name": "Ext.PluginManager",
  "doc": "<p>Provides a registry of available Plugin <i>classes</i> indexed by a mnemonic code known as the Plugin's ptype.\nThe <code><a href=\"#/api/Ext.Component--xtype\" rel=\"Ext.Component--xtype\" class=\"docClass\">xtype</a></code> provides a way to avoid instantiating child Components\nwhen creating a full, nested config object for a complete <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> page.</p>\n\n\n<p>A child Component may be specified simply as a <i>config object</i>\nas long as the correct <code><a href=\"#/api/Ext.Component--xtype\" rel=\"Ext.Component--xtype\" class=\"docClass\">xtype</a></code> is specified so that if and when the Component\nneeds rendering, the correct type can be looked up for lazy instantiation.</p>\n\n\n<p>For a list of all available <code><a href=\"#/api/Ext.Component--xtype\" rel=\"Ext.Component--xtype\" class=\"docClass\">xtypes</a></code>, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n\n",
  "extends": "Ext.AbstractManager",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.PluginMgr"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "create",
      "member": "Ext.PluginManager",
      "doc": "<p>Creates a new Plugin from the specified config object using the\nconfig object's ptype to determine the class to instantiate.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>A configuration object for the Plugin you wish to create.</p>\n",
          "optional": false
        },
        {
          "type": "Constructor",
          "name": "defaultType",
          "doc": "<p>The constructor to provide the default Plugin type if\nthe config object does not contain a <code>ptype</code>. (Optional if the config contains a <code>ptype</code>).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>The newly instantiated Plugin.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/PluginManager.js",
      "linenr": 19,
      "html_filename": "PluginManager.html",
      "href": "PluginManager.html#Ext-PluginManager-method-create",
      "shortDoc": "Creates a new Plugin from the specified config object using the\nconfig object's ptype to determine the class to insta..."
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
      "name": "findByType",
      "member": "Ext.PluginManager",
      "doc": "<p>Returns all plugins registered with the given type. Here, 'type' refers to the type of plugin, not its ptype.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "type",
          "doc": "<p>The type to search for</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "defaultsOnly",
          "doc": "<p>True to only return plugins of this type where the plugin's isDefault property is truthy</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>All matching plugins</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/PluginManager.js",
      "linenr": 61,
      "html_filename": "PluginManager.html",
      "href": "PluginManager.html#Ext-PluginManager-method-findByType",
      "shortDoc": "<p>Returns all plugins registered with the given type. Here, 'type' refers to the type of plugin, not its ptype.</p>\n"
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/PluginManager.js",
  "linenr": 1,
  "html_filename": "PluginManager.html",
  "href": "PluginManager.html#Ext-PluginManager",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.AbstractManager"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});