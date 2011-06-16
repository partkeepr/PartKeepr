Ext.data.JsonP.Ext_data_reader_Reader({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [
    "Ext.data.reader.Xml",
    "Ext.data.reader.Json"
  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Reader.html#Ext-data-reader-Reader",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property within a row object\nthat contains a record identifier value. ...",
        "static": false,
        "name": "idProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>The id of the model</tt>.\nIf an idProperty is explicitly specified it will override that of the one specified\non the model</p>\n",
        "linenr": 151,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "True to automatically parse models nested within other models in a response\nobject. ...",
        "static": false,
        "name": "implicitIncludes",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n",
        "linenr": 188,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "The name of the property which contains a response message. ...",
        "static": false,
        "name": "messageProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The name of the property which contains a response message.\nThis property is optional.</p>\n",
        "linenr": 183,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Required. ...",
        "static": false,
        "name": "root",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n",
        "linenr": 174,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property from which to\nretrieve the success attribute. ...",
        "static": false,
        "name": "successProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a>.exception\nfor additional information.</p>\n",
        "linenr": 166,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property from which to\nretrieve the total number of records in the dataset. ...",
        "static": false,
        "name": "totalProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n",
        "linenr": 158,
        "html_filename": "Reader.html"
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
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Creates new Reader. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Creates new Reader.</p>\n",
        "linenr": 196,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The responce object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
        "return": {
          "type": "Object",
          "doc": "<p>The useful data from the response</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "static": false,
        "name": "getResponseData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n",
        "linenr": 460,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The parsed ResultSet object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Reads the given response object. ...",
        "static": false,
        "name": "read",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Reader-method-readRecords\" rel=\"Ext.data.reader.Reader-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
        "linenr": 228,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The raw data object</p>\n",
            "name": "data"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-readRecords",
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>A ResultSet object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Abstracts common functionality used by all Reader subclasses. ...",
        "static": false,
        "name": "readRecords",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call\nthis function before running its own logic and returning the <a href=\"#/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most\nReaders additional processing should not be needed.</p>\n",
        "linenr": 248,
        "html_filename": "Reader.html"
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
        "type": "Mixed",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "static": false,
        "name": "rawData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n",
        "linenr": 268,
        "html_filename": "Reader.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.Reader",
    "Ext.data.DataReader"
  ],
  "static": false,
  "name": "Ext.data.reader.Reader",
  "doc": "<p>Readers are used to interpret data to be loaded into a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\n- usually in response to an AJAX request. This is normally handled transparently by passing some configuration to either the \n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> or the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> in question - see their documentation for further details.</p>\n\n\n\n\n<p><u>Loading Nested Data</u></p>\n\n\n\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a>\nconfigured on each Model. Below is an example demonstrating the flexibility of these associations in a fictional CRM system which\nmanages a User, their Orders, OrderItems and Products. First we'll define the models:\n\n<pre><code>Ext.define(\"User\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.define(\"Order\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.define(\"OrderItem\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.define(\"Product\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems. Finally,\neach OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the Orders\nfor each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case), and finally\nthe Product associated with each OrderItem. Now we can read the data and use it as follows:\n\n<pre><code>var store = new Ext.data.Store({\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Reader.html",
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
  "extends": "Object"
});