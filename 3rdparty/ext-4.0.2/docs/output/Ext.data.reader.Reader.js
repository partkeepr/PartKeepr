Ext.data.JsonP.Ext_data_reader_Reader({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "shortDoc": "Name of the property within a row object\nthat contains a record identifier value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "idProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>The id of the model</tt>.\nIf an idProperty is explicitly specified it will override that of the one specified\non the model</p>\n",
        "linenr": 151,
        "html_filename": "Reader.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "shortDoc": "True to automatically parse models nested within other models in a response\nobject. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "implicitIncludes",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n",
        "linenr": 188,
        "html_filename": "Reader.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "shortDoc": "The name of the property which contains a response message. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "messageProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The name of the property which contains a response message.\nThis property is optional.</p>\n",
        "linenr": 183,
        "html_filename": "Reader.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "shortDoc": "Required. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n",
        "linenr": 174,
        "html_filename": "Reader.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "shortDoc": "Name of the property from which to\nretrieve the success attribute. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "successProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a>.exception\nfor additional information.</p>\n",
        "linenr": 166,
        "html_filename": "Reader.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "shortDoc": "Name of the property from which to\nretrieve the total number of records in the dataset. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "totalProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n",
        "linenr": 158,
        "html_filename": "Reader.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Reader. ...",
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
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "doc": "<p>Creates new Reader.</p>\n",
        "owner": "Ext.data.reader.Reader",
        "name": "Reader",
        "html_filename": "Reader.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 196
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The responce object</p>\n",
            "name": "response"
          }
        ],
        "name": "getResponseData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n",
        "linenr": 460,
        "return": {
          "type": "Object",
          "doc": "<p>The useful data from the response</p>\n"
        },
        "html_filename": "Reader.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
        "shortDoc": "Reads the given response object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
            "name": "response"
          }
        ],
        "name": "read",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Reader-method-readRecords\" rel=\"Ext.data.reader.Reader-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
        "linenr": 228,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The parsed ResultSet object</p>\n"
        },
        "html_filename": "Reader.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Reader.html#Ext-data-reader-Reader-method-readRecords",
        "shortDoc": "Abstracts common functionality used by all Reader subclasses. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The raw data object</p>\n",
            "name": "data"
          }
        ],
        "name": "readRecords",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call\nthis function before running its own logic and returning the <a href=\"#/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most\nReaders additional processing should not be needed.</p>\n",
        "linenr": 248,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>A ResultSet object</p>\n"
        },
        "html_filename": "Reader.html"
      }
    ],
    "property": [
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "name": "rawData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n",
        "linenr": 268,
        "html_filename": "Reader.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Reader.html#Ext-data-reader-Reader",
  "subclasses": [
    "Ext.data.reader.Xml",
    "Ext.data.reader.Json"
  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.Reader",
    "Ext.data.DataReader"
  ],
  "name": "Ext.data.reader.Reader",
  "doc": "<p>Readers are used to interpret data to be loaded into a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\n- usually in response to an AJAX request. This is normally handled transparently by passing some configuration to either the \n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> or the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> in question - see their documentation for further details.</p>\n\n\n\n\n<p><u>Loading Nested Data</u></p>\n\n\n\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a>\nconfigured on each Model. Below is an example demonstrating the flexibility of these associations in a fictional CRM system which\nmanages a User, their Orders, OrderItems and Products. First we'll define the models:\n\n<pre><code>Ext.define(\"User\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.define(\"Order\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.define(\"OrderItem\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.define(\"Product\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems. Finally,\neach OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the Orders\nfor each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case), and finally\nthe Product associated with each OrderItem. Now we can read the data and use it as follows:\n\n<pre><code>var store = new Ext.data.Store({\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Reader.html",
  "extends": "Object"
});