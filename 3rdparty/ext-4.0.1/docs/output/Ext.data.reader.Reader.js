Ext.data.JsonP.Ext_data_reader_Reader({
  "tagname": "class",
  "name": "Ext.data.reader.Reader",
  "doc": "<p>Readers are used to interpret data to be loaded into a <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> instance or a <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>\n- usually in response to an AJAX request. This is normally handled transparently by passing some configuration to either the \n<a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> or the <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a> in question - see their documentation for further details.</p>\n\n\n\n\n<p><u>Loading Nested Data</u></p>\n\n\n\n\n<p>Readers have the ability to automatically load deeply-nested data objects based on the <a href=\"#/api/Ext.data.Association\" rel=\"Ext.data.Association\" class=\"docClass\">associations</a>\nconfigured on each Model. Below is an example demonstrating the flexibility of these associations in a fictional CRM system which\nmanages a User, their Orders, OrderItems and Products. First we'll define the models:\n\n<pre><code>Ext.define(\"User\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: {model: 'Order', name: 'orders'},\n\n    proxy: {\n        type: 'rest',\n        url : 'users.json',\n        reader: {\n            type: 'json',\n            root: 'users'\n        }\n    }\n});\n\nExt.define(\"Order\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'total'\n    ],\n\n    hasMany  : {model: 'OrderItem', name: 'orderItems', associationKey: 'order_items'},\n    belongsTo: 'User'\n});\n\nExt.define(\"OrderItem\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'price', 'quantity', 'order_id', 'product_id'\n    ],\n\n    belongsTo: ['Order', {model: 'Product', associationKey: 'product'}]\n});\n\nExt.define(\"Product\", {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id', 'name'\n    ],\n\n    hasMany: 'OrderItem'\n});\n</code></pre>\n\n<p>This may be a lot to take in - basically a User has many Orders, each of which is composed of several OrderItems. Finally,\neach OrderItem has a single Product. This allows us to consume data like this:</p>\n\n<pre><code>{\n    \"users\": [\n        {\n            \"id\": 123,\n            \"name\": \"Ed\",\n            \"orders\": [\n                {\n                    \"id\": 50,\n                    \"total\": 100,\n                    \"order_items\": [\n                        {\n                            \"id\"      : 20,\n                            \"price\"   : 40,\n                            \"quantity\": 2,\n                            \"product\" : {\n                                \"id\": 1000,\n                                \"name\": \"MacBook Pro\"\n                            }\n                        },\n                        {\n                            \"id\"      : 21,\n                            \"price\"   : 20,\n                            \"quantity\": 3,\n                            \"product\" : {\n                                \"id\": 1001,\n                                \"name\": \"iPhone\"\n                            }\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n</code></pre>\n\n<p>The JSON response is deeply nested - it returns all Users (in this case just 1 for simplicity's sake), all of the Orders\nfor each User (again just 1 in this case), all of the OrderItems for each Order (2 order items in this case), and finally\nthe Product associated with each OrderItem. Now we can read the data and use it as follows:\n\n<pre><code>var store = new Ext.data.Store({\n    model: \"User\"\n});\n\nstore.load({\n    callback: function() {\n        //the user that was loaded\n        var user = store.first();\n\n        console.log(\"Orders for \" + user.get('name') + \":\")\n\n        //iterate over the Orders for each User\n        user.orders().each(function(order) {\n            console.log(\"Order ID: \" + order.getId() + \", which contains items:\");\n\n            //iterate over the OrderItems for each Order\n            order.orderItems().each(function(orderItem) {\n                //we know that the Product data is already loaded, so we can use the synchronous getProduct\n                //usually, we would use the asynchronous version (see <a href=\"#/api/Ext.data.BelongsToAssociation\" rel=\"Ext.data.BelongsToAssociation\" class=\"docClass\">Ext.data.BelongsToAssociation</a>)\n                var product = orderItem.getProduct();\n\n                console.log(orderItem.get('quantity') + ' orders of ' + product.get('name'));\n            });\n        });\n    }\n});\n</code></pre>\n\n<p>Running the code above results in the following:</p>\n\n<pre><code>Orders for Ed:\nOrder ID: 50, which contains items:\n2 orders of MacBook Pro\n3 orders of iPhone\n</code></pre>\n\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.Reader",
    "Ext.data.DataReader"
  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "idProperty",
      "member": "Ext.data.reader.Reader",
      "type": "String",
      "doc": "<p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>The id of the model</tt>.\nIf an idProperty is explicitly specified it will override that of the one specified\non the model</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 153,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
      "shortDoc": "Name of the property within a row object\nthat contains a record identifier value.  Defaults to The id of the model.\nI..."
    },
    {
      "tagname": "cfg",
      "name": "implicitIncludes",
      "member": "Ext.data.reader.Reader",
      "type": "Boolean",
      "doc": "<p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 190,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
      "shortDoc": "True to automatically parse models nested within other models in a response\nobject. See the Ext.data.reader.Reader in..."
    },
    {
      "tagname": "cfg",
      "name": "messageProperty",
      "member": "Ext.data.reader.Reader",
      "type": "String",
      "doc": "<p>The name of the property which contains a response message.\nThis property is optional.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 185,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty"
    },
    {
      "tagname": "cfg",
      "name": "root",
      "member": "Ext.data.reader.Reader",
      "type": "String",
      "doc": "<p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 176,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
      "shortDoc": "Required.  The name of the property\nwhich contains the Array of row objects.  Defaults to undefined.\nAn exception wil..."
    },
    {
      "tagname": "cfg",
      "name": "successProperty",
      "member": "Ext.data.reader.Reader",
      "type": "String",
      "doc": "<p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a>.<a href=\"#/api/Ext.data.proxy.Proxy--exception\" rel=\"Ext.data.proxy.Proxy--exception\" class=\"docClass\">exception</a>\nfor additional information.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 168,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
      "shortDoc": "Name of the property from which to\nretrieve the success attribute. Defaults to success.  See\nExt.data.proxy.Proxy.exc..."
    },
    {
      "tagname": "cfg",
      "name": "totalProperty",
      "member": "Ext.data.reader.Reader",
      "type": "String",
      "doc": "<p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 160,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
      "shortDoc": "Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the wh..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Reader",
      "member": "Ext.data.reader.Reader",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 1,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getResponseData",
      "member": "Ext.data.reader.Reader",
      "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The responce object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The useful data from the response</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 458,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
      "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemen..."
    },
    {
      "tagname": "method",
      "name": "read",
      "member": "Ext.data.reader.Reader",
      "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Reader-method-readRecords\" rel=\"Ext.data.reader.Reader-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "response",
          "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.ResultSet",
        "doc": "<p>The parsed ResultSet object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 226,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-method-read",
      "shortDoc": "Reads the given response object. This method normalizes the different types of response object that may be passed\nto ..."
    },
    {
      "tagname": "method",
      "name": "readRecords",
      "member": "Ext.data.reader.Reader",
      "doc": "<p>Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call\nthis function before running its own logic and returning the <a href=\"#/api/Ext.data.ResultSet\" rel=\"Ext.data.ResultSet\" class=\"docClass\">Ext.data.ResultSet</a> instance. For most\nReaders additional processing should not be needed.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "data",
          "doc": "<p>The raw data object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.ResultSet",
        "doc": "<p>A ResultSet object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 246,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-method-readRecords",
      "shortDoc": "Abstracts common functionality used by all Reader subclasses. Each subclass is expected to call\nthis function before ..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "rawData",
      "member": "Ext.data.reader.Reader",
      "type": "Mixed",
      "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
      "linenr": 266,
      "html_filename": "Reader.html",
      "href": "Reader.html#Ext-data-reader-Reader-property-rawData"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Reader.js",
  "linenr": 1,
  "html_filename": "Reader.html",
  "href": "Reader.html#Ext-data-reader-Reader",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.data.reader.Json",
    "Ext.data.reader.Xml"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});