Ext.data.JsonP.Ext_data_BelongsToAssociation({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.data.Association"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-cfg-associatedModel",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "The string name of the model that is being associated with. ...",
        "static": false,
        "name": "associatedModel",
        "owner": "Ext.data.Association",
        "doc": "<p>The string name of the model that is being associated with. Required</p>\n",
        "linenr": 122,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-cfg-associationKey",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "The name of the property in the data to read the association from. ...",
        "static": false,
        "name": "associationKey",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the property in the data to read the association from.\nDefaults to the name of the associated model.</p>\n",
        "linenr": 136,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-foreignKey",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "shortDoc": "The name of the foreign key on the owner model that links it to the associated\nmodel. ...",
        "static": false,
        "name": "foreignKey",
        "owner": "Ext.data.BelongsToAssociation",
        "doc": "<p>The name of the foreign key on the owner model that links it to the associated\nmodel. Defaults to the lowercased name of the associated model plus \"_id\", e.g. an association with a\nmodel called Product would set up a product_id foreign key.</p>\n\n<pre><code>Ext.define('Order', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'date'],\n    hasMany: 'Product'\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'order_id'], // refers to the id of the order that this product belongs to\n    belongsTo: 'Group'\n});\nvar product = new Product({\n    id: 1,\n    name: 'Product 1',\n    order_id: 22\n}, 1);\nproduct.getOrder(); // Will make a call to the server asking for order_id 22\n\n</code></pre>\n\n",
        "linenr": 123,
        "html_filename": "BelongsToAssociation.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-getterName",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "shortDoc": "The name of the getter function that will be added to the local model's prototype. ...",
        "static": false,
        "name": "getterName",
        "owner": "Ext.data.BelongsToAssociation",
        "doc": "<p>The name of the getter function that will be added to the local model's prototype.\nDefaults to 'get' + the name of the foreign model, e.g. getCategory</p>\n",
        "linenr": 149,
        "html_filename": "BelongsToAssociation.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-cfg-ownerModel",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "The string name of the model that owns the association. ...",
        "static": false,
        "name": "ownerModel",
        "owner": "Ext.data.Association",
        "doc": "<p>The string name of the model that owns the association. Required</p>\n",
        "linenr": 118,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-cfg-primaryKey",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "The name of the primary key on the associated model. ...",
        "static": false,
        "name": "primaryKey",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the primary key on the associated model. Defaults to 'id'.\nIn general this will be the <a href=\"#/api/Ext.data.Model-cfg-idProperty\" rel=\"Ext.data.Model-cfg-idProperty\" class=\"docClass\">Ext.data.Model.idProperty</a> of the Model.</p>\n",
        "linenr": 126,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "Ext.data.reader.Reader",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-cfg-reader",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "static": false,
        "name": "reader",
        "owner": "Ext.data.Association",
        "doc": "<p>A special reader to read associated data</p>\n",
        "linenr": 132,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-setterName",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "shortDoc": "The name of the setter function that will be added to the local model's prototype. ...",
        "static": false,
        "name": "setterName",
        "owner": "Ext.data.BelongsToAssociation",
        "doc": "<p>The name of the setter function that will be added to the local model's prototype.\nDefaults to 'set' + the name of the foreign model, e.g. setCategory</p>\n",
        "linenr": 154,
        "html_filename": "BelongsToAssociation.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "BelongsToAssociation.html#Ext-data-BelongsToAssociation-cfg-type",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
        "private": false,
        "shortDoc": "The type configuration can be used when creating associations using a configuration object. ...",
        "static": false,
        "name": "type",
        "owner": "Ext.data.BelongsToAssociation",
        "doc": "<p>The type configuration can be used when creating associations using a configuration object.\nUse 'belongsTo' to create a HasManyAssocation</p>\n\n<pre><code>associations: [{\n    type: 'belongsTo',\n    model: 'User'\n}]\n</code></pre>\n\n",
        "linenr": 159,
        "html_filename": "BelongsToAssociation.html"
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
        "href": "Association.html#Ext-data-Association-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "Creates the Association object. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.Association",
        "doc": "<p>Creates the Association object.</p>\n",
        "linenr": 170,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Association.html#Ext-data-Association-method-getReader",
        "return": {
          "type": "Ext.data.reader.Reader",
          "doc": "<p>The reader, null if not supplied</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "Get a specialized reader for reading associated data ...",
        "static": false,
        "name": "getReader",
        "owner": "Ext.data.Association",
        "doc": "<p>Get a specialized reader for reading associated data</p>\n",
        "linenr": 214,
        "html_filename": "Association.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-property-associatedName",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "shortDoc": "The name of the model is on the other end of the association (e.g. ...",
        "static": false,
        "name": "associatedName",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the model is on the other end of the association (e.g. if a User model hasMany Orders, this is 'Order')</p>\n",
        "linenr": 202,
        "html_filename": "Association.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Association.html#Ext-data-Association-property-ownerName",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Association.js",
        "private": false,
        "static": false,
        "name": "ownerName",
        "owner": "Ext.data.Association",
        "doc": "<p>The name of the model that 'owns' the association</p>\n",
        "linenr": 196,
        "html_filename": "Association.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Ed Spencer",
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/BelongsToAssociation.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.BelongsToAssociation",
  "doc": "<p>Represents a many to one association with another model. The owner model is expected to have\na foreign key which references the primary key of the associated model:</p>\n\n\n\n\n<pre><code>Ext.define('Category', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id',   type: 'int'},\n        {name: 'name', type: 'string'}\n    ]\n});\n\nExt.define('Product', {\n    extend: 'Ext.data.Model',\n    fields: [\n        {name: 'id',          type: 'int'},\n        {name: 'category_id', type: 'int'},\n        {name: 'name',        type: 'string'}\n    ],\n    // we can use the belongsTo shortcut on the model to create a belongsTo association\n    belongsTo: {type: 'belongsTo', model: 'Category'}\n});\n</code></pre>\n\n\n<p>In the example above we have created models for Products and Categories, and linked them together\nby saying that each Product belongs to a Category. This automatically links each Product to a Category\nbased on the Product's category_id, and provides new functions on the Product model:</p>\n\n\n\n\n<p><u>Generated getter function</u></p>\n\n\n\n\n<p>The first function that is added to the owner model is a getter function:</p>\n\n\n\n\n<pre><code>var product = new Product({\n    id: 100,\n    category_id: 20,\n    name: 'Sneakers'\n});\n\nproduct.getCategory(function(category, operation) {\n    //do something with the category object\n    alert(category.get('id')); //alerts 20\n}, this);\n</code></pre>\n\n\n\n\n<p>The getCategory function was created on the Product model when we defined the association. This uses the\nCategory's configured <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">proxy</a> to load the Category asynchronously, calling the provided\ncallback when it has loaded.</p>\n\n\n\n\n<p>The new getCategory function will also accept an object containing success, failure and callback properties\n- callback will always be called, success will only be called if the associated model was loaded successfully\nand failure will only be called if the associatied model could not be loaded:</p>\n\n\n\n\n<pre><code>product.getCategory({\n    callback: function(category, operation) {}, //a function that will always be called\n    success : function(category, operation) {}, //a function that will only be called if the load succeeded\n    failure : function(category, operation) {}, //a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n\n\n\n<p>In each case above the callbacks are called with two arguments - the associated model instance and the\n<a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object that was executed to load that instance. The Operation object is\nuseful when the instance could not be loaded.</p>\n\n\n\n\n<p><u>Generated setter function</u></p>\n\n\n\n\n<p>The second generated function sets the associated model instance - if only a single argument is passed to\nthe setter then the following two calls are identical:</p>\n\n\n\n\n<pre><code>//this call\nproduct.setCategory(10);\n\n//is equivalent to this call:\nproduct.set('category_id', 10);\n</code></pre>\n\n\n<p>If we pass in a second argument, the model will be automatically saved and the second argument passed to\nthe owner model's <a href=\"#/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method:</p>\n\n\n<pre><code>product.setCategory(10, function(product, operation) {\n    //the product has been saved\n    alert(product.get('category_id')); //now alerts 10\n});\n\n//alternative syntax:\nproduct.setCategory(10, {\n    callback: function(product, operation), //a function that will always be called\n    success : function(product, operation), //a function that will only be called if the load succeeded\n    failure : function(product, operation), //a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n})\n</code></pre>\n\n\n\n\n<p><u>Customisation</u></p>\n\n\n\n\n<p>Associations reflect on the models they are linking to automatically set up properties such as the\n<a href=\"#/api/Ext.data.BelongsToAssociation-cfg-primaryKey\" rel=\"Ext.data.BelongsToAssociation-cfg-primaryKey\" class=\"docClass\">primaryKey</a> and <a href=\"#/api/Ext.data.BelongsToAssociation-cfg-foreignKey\" rel=\"Ext.data.BelongsToAssociation-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. These can alternatively be specified:</p>\n\n\n\n\n<pre><code>Ext.define('Product', {\n    fields: [...],\n\n    associations: [\n        {type: 'belongsTo', model: 'Category', primaryKey: 'unique_id', foreignKey: 'cat_id'}\n    ]\n});\n </code></pre>\n\n\n\n\n<p>Here we replaced the default primary key (defaults to 'id') and foreign key (calculated as 'category_id')\nwith our own settings. Usually this will not be needed.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "BelongsToAssociation.html",
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
  "extends": "Ext.data.Association"
});