Ext.data.JsonP.Ext_ComponentManager({
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
        "href": "ComponentManager.html#Ext-ComponentManager-method-create",
        "shortDoc": "Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to in...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>A configuration object for the Component you wish to create.</p>\n",
            "name": "config"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The constructor to provide the default Component type if\nthe config object does not contain a <code>xtype</code>. (Optional if the config contains a <code>xtype</code>).</p>\n",
            "name": "defaultType"
          }
        ],
        "name": "create",
        "owner": "Ext.ComponentManager",
        "doc": "<p>Creates a new Component from the specified config object using the\nconfig object's xtype to determine the class to instantiate.</p>\n",
        "linenr": 25,
        "return": {
          "type": "Ext.Component",
          "doc": "<p>The newly instantiated Component.</p>\n"
        },
        "html_filename": "ComponentManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-each",
        "shortDoc": "Executes the specified function once for each item in the collection. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
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
        "owner": "Ext.AbstractManager",
        "doc": "<p>Executes the specified function once for each item in the collection.\nReturning false from the function will cease iteration.</p>\n\n<p>The paramaters passed to the function are:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>key</b> : String<p class=\"sub-desc\">The key of the item</p></li>\n<li><b>value</b> : Number<p class=\"sub-desc\">The value of the item</p></li>\n<li><b>length</b> : Number<p class=\"sub-desc\">The total number of items in the collection</p></li>\n</ul></div>\n\n",
        "linenr": 116,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-get",
        "shortDoc": "Returns an item by id. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The id of the item</p>\n",
            "name": "id"
          }
        ],
        "name": "get",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Returns an item by id.\nFor additional details see <a href=\"#/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n",
        "linenr": 29,
        "return": {
          "type": "Mixed",
          "doc": "<p>The item, <code>undefined</code> if not found.</p>\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-getCount",
        "shortDoc": "Gets the number of items in the collection. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [

        ],
        "name": "getCount",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Gets the number of items in the collection.</p>\n",
        "linenr": 133,
        "return": {
          "type": "Number",
          "doc": "<p>The number of items in the collection.</p>\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-isRegistered",
        "shortDoc": "Checks if an item type is registered. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The mnemonic string by which the class may be looked up</p>\n",
            "name": "type"
          }
        ],
        "name": "isRegistered",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Checks if an item type is registered.</p>\n",
        "linenr": 65,
        "return": {
          "type": "Boolean",
          "doc": "<p>Whether the type is registered.</p>\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-onAvailable",
        "shortDoc": "Registers a function that will be called when an item with the specified id is added to the manager. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The item id</p>\n",
            "name": "id"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The callback function. Called with a single parameter, the item.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the item.</p>\n",
            "name": "scope"
          }
        ],
        "name": "onAvailable",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers a function that will be called when an item with the specified id is added to the manager. This will happen on instantiation.</p>\n",
        "linenr": 93,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-register",
        "shortDoc": "Registers an item to be managed ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to register</p>\n",
            "name": "item"
          }
        ],
        "name": "register",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers an item to be managed</p>\n",
        "linenr": 39,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-registerType",
        "shortDoc": "Registers a new item constructor, keyed by a type key. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The mnemonic string by which the class may be looked up.</p>\n",
            "name": "type"
          },
          {
            "type": "Constructor",
            "optional": false,
            "doc": "<p>The new instance class.</p>\n",
            "name": "cls"
          }
        ],
        "name": "registerType",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Registers a new item constructor, keyed by a type key.\n\n",
        "linenr": 55,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractManager.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "AbstractManager.html#Ext-AbstractManager-method-unregister",
        "shortDoc": "Unregisters an item by removing it from this manager ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The item to unregister</p>\n",
            "name": "item"
          }
        ],
        "name": "unregister",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Unregisters an item by removing it from this manager</p>\n",
        "linenr": 47,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "AbstractManager.html"
      }
    ],
    "property": [
      {
        "type": "Ext.util.MixedCollection",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "AbstractManager.html#Ext-AbstractManager-property-all",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/AbstractManager.js",
        "private": false,
        "name": "all",
        "owner": "Ext.AbstractManager",
        "doc": "<p>Contains all of the items currently managed</p>\n",
        "linenr": 19,
        "html_filename": "AbstractManager.html"
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
    "Ext.AbstractManager"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "ComponentManager.html#Ext-ComponentManager",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ComponentManager.js",
  "private": false,
  "alternateClassNames": [
    "Ext.ComponentMgr"
  ],
  "name": "Ext.ComponentManager",
  "doc": "<p>Provides a registry of all Components (instances of <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> or any subclass\nthereof) on a page so that they can be easily accessed by <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">component</a>\n<a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a> (see <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">get</a>, or the convenience method <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a>).</p>\n\n\n<p>This object also provides a registry of available Component <i>classes</i>\nindexed by a mnemonic code known as the Component's xtype.\nThe <code>xtype</code> provides a way to avoid instantiating child Components\nwhen creating a full, nested config object for a complete <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> page.</p>\n\n\n<p>A child Component may be specified simply as a <i>config object</i>\nas long as the correct <code>xtype</code> is specified so that if and when the Component\nneeds rendering, the correct type can be looked up for lazy instantiation.</p>\n\n\n<p>For a list of all available <code>xtypes</code>, see <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "ComponentManager.html",
  "extends": "Ext.AbstractManager"
});