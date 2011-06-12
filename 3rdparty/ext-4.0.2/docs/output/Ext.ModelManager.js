Ext.data.JsonP.Ext_ModelManager({
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
        "href": "ModelManager.html#Ext-ModelManager-method-create",
        "shortDoc": "Creates a new instance of a Model using the given data. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Data to initialize the Model's fields with</p>\n",
            "name": "data"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The name of the model to create</p>\n",
            "name": "name"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Optional unique id of the Model instance (see <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>)</p>\n",
            "name": "id"
          }
        ],
        "name": "create",
        "owner": "Ext.ModelManager",
        "doc": "<p>Creates a new instance of a Model using the given data.</p>\n",
        "linenr": 135,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "ModelManager.html"
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
        "href": "ModelManager.html#Ext-ModelManager-method-getModel",
        "shortDoc": "Returns the Ext.data.Model for a given model name ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The id of the model or the model instance.</p>\n",
            "name": "id"
          }
        ],
        "name": "getModel",
        "owner": "Ext.ModelManager",
        "doc": "<p>Returns the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for a given model name</p>\n",
        "linenr": 123,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "ModelManager.html"
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
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "ModelManager.html#Ext-ModelManager-property-associationStack",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
        "private": false,
        "name": "associationStack",
        "owner": "Ext.ModelManager",
        "doc": "<p>Private stack of associations that must be created once their associated model has been defined</p>\n",
        "linenr": 56,
        "html_filename": "ModelManager.html"
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
  "href": "ModelManager.html#Ext-ModelManager",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/ModelManager.js",
  "private": false,
  "alternateClassNames": [
    "Ext.ModelMgr"
  ],
  "name": "Ext.ModelManager",
  "doc": "<p>The ModelManager keeps track of all <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> types defined in your application.</p>\n\n<p><strong>Creating Model Instances</strong>\nModel instances can be created by using the <a href=\"#/api/Ext.ModelManager-method-create\" rel=\"Ext.ModelManager-method-create\" class=\"docClass\">create</a> function. It is also possible to do\nthis by using the Model type directly. The following snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, create through the manager\nExt.ModelManager.create({\n    first: 'Ed',\n    last: 'Spencer'\n}, 'User');\n\n// method 2, create on the type directly\nnew User({\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n\n<p><strong>Accessing Model Types</strong>\nA reference to a Model type can be obtained by using the <a href=\"#/api/Ext.ModelManager-method-getModel\" rel=\"Ext.ModelManager-method-getModel\" class=\"docClass\">getModel</a> function. Since models types\nare normal classes, you can access the type directly. The following snippets are equivalent:</p>\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['first', 'last']\n});\n\n// method 1, access model type through the manager\nvar UserType = Ext.ModelManager.getModel('User');\n\n// method 2, reference the type directly\nvar UserType = User;\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "ModelManager.html",
  "extends": "Ext.AbstractManager"
});