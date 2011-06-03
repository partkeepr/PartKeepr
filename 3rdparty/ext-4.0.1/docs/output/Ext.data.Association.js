Ext.data.JsonP.Ext_data_Association({
  "tagname": "class",
  "name": "Ext.data.Association",
  "doc": "<p>Associations enable you to express relationships between different <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>. Let's say we're\nwriting an ecommerce system where Users can make Orders - there's a relationship between these Models that we can\nexpress like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email'],\n\n    hasMany: {model: 'Order', name: 'orders'}\n});\n\nExt.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'user_id', 'status', 'price'],\n\n    belongsTo: 'User'\n});\n</code></pre>\n\n\n\n\n<p>We've set up two models - User and Order - and told them about each other. You can set up as many associations on\neach Model as you need using the two default types - <a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany</a> and\n<a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo</a>. There's much more detail on the usage of each of those inside their\ndocumentation pages. If you're not familiar with Models already, <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">there is plenty on those too</a>.</p>\n\n\n\n\n<p><u>Further Reading</u></p>\n\n\n\n\n<ul style=\"list-style-type: disc; padding-left: 20px;\">\n  <li><a href=\"#/api/Ext.data.HasManyAssociation\" rel=\"Ext.data.HasManyAssociation\" class=\"docClass\">hasMany associations</a>\n  <li><a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">belongsTo associations</a>\n  <li><a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">using Models</a>\n</ul>\n\n\n<p><b>Self association models</b></p>\n\n<p>We can also have models that create parent/child associations between the same type. Below is an example, where\ngroups can be nested inside other groups:</p>\n\n\n<pre><code>\n// Server Data\n{\n    \"groups\": {\n        \"id\": 10,\n        \"parent_id\": 100,\n        \"name\": \"Main Group\",\n        \"parent_group\": {\n            \"id\": 100,\n            \"parent_id\": null,\n            \"name\": \"Parent Group\"\n        },\n        \"child_groups\": [{\n            \"id\": 2,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 1\"\n        },{\n            \"id\": 3,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 2\"\n        },{\n            \"id\": 4,\n            \"parent_id\": 10,\n            \"name\": \"Child Group 3\"\n        }]\n    }\n}\n\n// Client code\nExt.define('Group', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'parent_id', 'name'],\n    proxy: {\n        type: 'ajax',\n        url: 'data.json',\n        reader: {\n            type: 'json',\n            root: 'groups'\n        }\n    },\n    associations: [{\n        type: 'hasMany',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'child_groups' // read child data from child_groups\n    }, {\n        type: 'belongsTo',\n        model: 'Group',\n        primaryKey: 'id',\n        foreignKey: 'parent_id',\n        autoLoad: true,\n        associationKey: 'parent_group' // read parent data from parent_group\n    }]\n});\n\n\nExt.onReady(function(){\n    \n    Group.load(10, {\n        success: function(group){\n            console.log(group.getGroup().get('name'));\n            \n            group.groups().each(function(rec){\n                console.log(rec.get('name'));\n            });\n        }\n    });\n    \n});\n</code></pre>\n\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "associatedModel",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The string name of the model that is being associated with. Required</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 124,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-cfg-associatedModel"
    },
    {
      "tagname": "cfg",
      "name": "associationKey",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 138,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-cfg-associationKey"
    },
    {
      "tagname": "cfg",
      "name": "ownerModel",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The string name of the model that owns the association. Required</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 120,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-cfg-ownerModel"
    },
    {
      "tagname": "cfg",
      "name": "primaryKey",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 128,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-cfg-primaryKey",
      "shortDoc": "The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the Ext.data.Model.idP..."
    },
    {
      "tagname": "cfg",
      "name": "reader",
      "member": "Ext.data.Association",
      "type": "Ext.data.reader.Reader",
      "doc": "<p>A special reader to read associated data</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 134,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-cfg-reader"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Association",
      "member": "Ext.data.Association",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 1,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getReader",
      "member": "Ext.data.Association",
      "doc": "<p>Get a specialized reader for reading associated data</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.reader.Reader",
        "doc": "<p>The reader, null if not supplied</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 212,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-method-getReader",
      "shortDoc": "<p>Get a specialized reader for reading associated data</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "associatedName",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 200,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-property-associatedName"
    },
    {
      "tagname": "property",
      "name": "ownerName",
      "member": "Ext.data.Association",
      "type": "String",
      "doc": "<p>The name of the model that 'owns' the association</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
      "linenr": 194,
      "html_filename": "Association.html",
      "href": "Association.html#Ext-data-Association-property-ownerName"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Association.js",
  "linenr": 1,
  "html_filename": "Association.html",
  "href": "Association.html#Ext-data-Association",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.data.BelongsToAssociation",
    "Ext.data.HasManyAssociation"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});