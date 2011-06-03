Ext.data.JsonP.Ext_data_reader_Json({
  "tagname": "class",
  "name": "Ext.data.reader.Json",
  "doc": "<p>The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually\nhappens as a result of loading a Store - for example we might create something like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\nvar store = new Ext.data.Store({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're\nnot already familiar with them.</p>\n\n\n\n\n<p>We created the simplest type of JSON Reader possible by simply telling our <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s \n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a> that we want a JSON Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:\n\n<pre><code>reader: {\n    type : 'json',\n    model: 'User'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>[\n    {\n        \"id\": 1,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Abe Elias\",\n        \"email\": \"abe@sencha.com\"\n    }\n]\n</code></pre>\n\n<p><u>Reading other JSON formats</u></p>\n\n<p>If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually\npass JsonReader a couple of configuration options to make it parse your format. For example, we can use the \n<a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration to parse data that comes back like this:</p>\n\n<pre><code>{\n    \"users\": [\n       {\n           \"id\": 1,\n           \"name\": \"Ed Spencer\",\n           \"email\": \"ed@sencha.com\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Abe Elias\",\n           \"email\": \"abe@sencha.com\"\n       }\n    ]\n}\n</code></pre>\n\n<p>To parse this we just pass in a <a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    root: 'users'\n}\n</code></pre>\n\n<p>Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata\naround each record inside a nested structure like this:</p>\n\n<pre><code>{\n    \"total\": 122,\n    \"offset\": 0,\n    \"users\": [\n        {\n            \"id\": \"ed-spencer-1\",\n            \"value\": 1,\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Ed Spencer\",\n                \"email\": \"ed@sencha.com\"\n            }\n        }\n    ]\n}\n</code></pre>\n\n<p>In the case above the record data is nested an additional level inside the \"users\" array as each \"user\" item has\nadditional metadata surrounding it ('id' and 'value' in this case). To parse data out of each \"user\" item in the \nJSON above we need to specify the <a href=\"#/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a> configuration like this:</p>\n\n<pre><code>reader: {\n    type  : 'json',\n    root  : 'users',\n    record: 'user'\n}\n</code></pre>\n\n<p><u>Response metadata</u></p>\n\n<p>The server can return additional data in its response, such as the <a href=\"#/api/Ext.data.reader.Json-cfg-totalProperty\" rel=\"Ext.data.reader.Json-cfg-totalProperty\" class=\"docClass\">total number of records</a> \nand the <a href=\"#/api/Ext.data.reader.Json-cfg-successProperty\" rel=\"Ext.data.reader.Json-cfg-successProperty\" class=\"docClass\">success status of the response</a>. These are typically included in the JSON response\nlike this:</p>\n\n<pre><code>{\n    \"total\": 100,\n    \"success\": true,\n    \"users\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ed Spencer\",\n            \"email\": \"ed@sencha.com\"\n        }\n    ]\n}\n</code></pre>\n\n<p>If these properties are present in the JSON response they can be parsed out by the JsonReader and used by the\nStore that loaded it. We can set up the names of these properties by specifying a final pair of configuration \noptions:</p>\n\n<pre><code>reader: {\n    type : 'json',\n    root : 'users',\n    totalProperty  : 'total',\n    successProperty: 'success'\n}\n</code></pre>\n\n<p>These final options are not necessary to make the Reader work, but can be useful when the server needs to report\nan error or if it needs to indicate that there is a lot of data available of which only a subset is currently being\nreturned.</p>\n\n",
  "extends": "Ext.data.reader.Reader",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.JsonReader"
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
      "name": "record",
      "member": "Ext.data.reader.Json",
      "type": "String",
      "doc": "<p>The optional location within the JSON response that the record data itself can be found at.\nSee the JsonReader intro docs for more details. This is not often needed and defaults to undefined.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Json.js",
      "linenr": 167,
      "html_filename": "Json.html",
      "href": "Json.html#Ext-data-reader-Json-cfg-record",
      "shortDoc": "The optional location within the JSON response that the record data itself can be found at.\nSee the JsonReader intro ..."
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
    },
    {
      "tagname": "cfg",
      "name": "useSimpleAccessors",
      "member": "Ext.data.reader.Json",
      "type": "Boolean",
      "doc": "<p>True to ensure that field names/mappings are treated as literals when\nreading values. Defalts to <tt>false</tt>.\nFor example, by default, using the mapping \"foo.bar.baz\" will try and read a property foo from the root, then a property bar\nfrom foo, then a property baz from bar. Setting the simple accessors to true will read the property with the name\n\"foo.bar.baz\" direct from the root object.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Json.js",
      "linenr": 172,
      "html_filename": "Json.html",
      "href": "Json.html#Ext-data-reader-Json-cfg-useSimpleAccessors",
      "shortDoc": "True to ensure that field names/mappings are treated as literals when\nreading values. Defalts to false.\nFor example, ..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Json",
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
      "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Json-method-readRecords\" rel=\"Ext.data.reader.Json-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
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
      "member": "Ext.data.reader.Json",
      "doc": "<p>Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to\nretrieve meta data from the response, and extractData to turn the JSON data into model instances.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The raw JSON data</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.ResultSet",
        "doc": "<p>A ResultSet containing model instances and meta data about the results</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Json.js",
      "linenr": 181,
      "html_filename": "Json.html",
      "href": "Json.html#Ext-data-reader-Json-method-readRecords",
      "shortDoc": "Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to\nretrieve meta da..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "jsonData",
      "member": "Ext.data.reader.Json",
      "type": "Mixed",
      "doc": "<p>DEPRECATED - will be removed in <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 5.0. This is just a copy of this.rawData - use that instead</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Json.js",
      "linenr": 193,
      "html_filename": "Json.html",
      "href": "Json.html#Ext-data-reader-Json-property-jsonData"
    },
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Json.js",
  "linenr": 1,
  "html_filename": "Json.html",
  "href": "Json.html#Ext-data-reader-Json",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.reader.Reader"
  ],
  "subclasses": [
    "Ext.data.reader.Array"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});