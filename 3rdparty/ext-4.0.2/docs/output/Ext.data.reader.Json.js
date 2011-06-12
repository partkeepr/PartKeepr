Ext.data.JsonP.Ext_data_reader_Json({
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
        "href": "Json.html#Ext-data-reader-Json-cfg-record",
        "shortDoc": "The optional location within the JSON response that the record data itself can be found at. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "record",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>The optional location within the JSON response that the record data itself can be found at.\nSee the JsonReader intro docs for more details. This is not often needed and defaults to undefined.</p>\n",
        "linenr": 167,
        "html_filename": "Json.html"
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
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Json.html#Ext-data-reader-Json-cfg-useSimpleAccessors",
        "shortDoc": "True to ensure that field names/mappings are treated as literals when\nreading values. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "useSimpleAccessors",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>True to ensure that field names/mappings are treated as literals when\nreading values. Defalts to <tt>false</tt>.\nFor example, by default, using the mapping \"foo.bar.baz\" will try and read a property foo from the root, then a property bar\nfrom foo, then a property baz from bar. Setting the simple accessors to true will read the property with the name\n\"foo.bar.baz\" direct from the root object.</p>\n",
        "linenr": 172,
        "html_filename": "Json.html"
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
        "name": "Json",
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
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Json-method-readRecords\" rel=\"Ext.data.reader.Json-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
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
        "href": "Json.html#Ext-data-reader-Json-method-readRecords",
        "shortDoc": "Reads a JSON object and returns a ResultSet. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The raw JSON data</p>\n",
            "name": "data"
          }
        ],
        "name": "readRecords",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>Reads a JSON object and returns a ResultSet. Uses the internal getTotal and getSuccess extractors to\nretrieve meta data from the response, and extractData to turn the JSON data into model instances.</p>\n",
        "linenr": 181,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>A ResultSet containing model instances and meta data about the results</p>\n"
        },
        "html_filename": "Json.html"
      }
    ],
    "property": [
      {
        "type": "Mixed",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Json.html#Ext-data-reader-Json-property-jsonData",
        "shortDoc": "DEPRECATED - will be removed in Ext JS 5.0. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
        "private": false,
        "name": "jsonData",
        "owner": "Ext.data.reader.Json",
        "doc": "<p>DEPRECATED - will be removed in <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 5.0. This is just a copy of this.rawData - use that instead</p>\n",
        "linenr": 193,
        "html_filename": "Json.html"
      },
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
    "Ext.data.reader.Reader"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Json.html#Ext-data-reader-Json",
  "subclasses": [
    "Ext.data.reader.Array"
  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Json.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.JsonReader"
  ],
  "name": "Ext.data.reader.Json",
  "doc": "<p>The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually\nhappens as a result of loading a Store - for example we might create something like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\nvar store = new Ext.data.Store({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're\nnot already familiar with them.</p>\n\n\n\n\n<p>We created the simplest type of JSON Reader possible by simply telling our <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s \n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a> that we want a JSON Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:\n\n<pre><code>reader: {\n    type : 'json',\n    model: 'User'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>[\n    {\n        \"id\": 1,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Abe Elias\",\n        \"email\": \"abe@sencha.com\"\n    }\n]\n</code></pre>\n\n<p><u>Reading other JSON formats</u></p>\n\n<p>If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually\npass JsonReader a couple of configuration options to make it parse your format. For example, we can use the \n<a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration to parse data that comes back like this:</p>\n\n<pre><code>{\n    \"users\": [\n       {\n           \"id\": 1,\n           \"name\": \"Ed Spencer\",\n           \"email\": \"ed@sencha.com\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Abe Elias\",\n           \"email\": \"abe@sencha.com\"\n       }\n    ]\n}\n</code></pre>\n\n<p>To parse this we just pass in a <a href=\"#/api/Ext.data.reader.Json-cfg-root\" rel=\"Ext.data.reader.Json-cfg-root\" class=\"docClass\">root</a> configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    root: 'users'\n}\n</code></pre>\n\n<p>Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata\naround each record inside a nested structure like this:</p>\n\n<pre><code>{\n    \"total\": 122,\n    \"offset\": 0,\n    \"users\": [\n        {\n            \"id\": \"ed-spencer-1\",\n            \"value\": 1,\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Ed Spencer\",\n                \"email\": \"ed@sencha.com\"\n            }\n        }\n    ]\n}\n</code></pre>\n\n<p>In the case above the record data is nested an additional level inside the \"users\" array as each \"user\" item has\nadditional metadata surrounding it ('id' and 'value' in this case). To parse data out of each \"user\" item in the \nJSON above we need to specify the <a href=\"#/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a> configuration like this:</p>\n\n<pre><code>reader: {\n    type  : 'json',\n    root  : 'users',\n    record: 'user'\n}\n</code></pre>\n\n<p><u>Response metadata</u></p>\n\n<p>The server can return additional data in its response, such as the <a href=\"#/api/Ext.data.reader.Json-cfg-totalProperty\" rel=\"Ext.data.reader.Json-cfg-totalProperty\" class=\"docClass\">total number of records</a> \nand the <a href=\"#/api/Ext.data.reader.Json-cfg-successProperty\" rel=\"Ext.data.reader.Json-cfg-successProperty\" class=\"docClass\">success status of the response</a>. These are typically included in the JSON response\nlike this:</p>\n\n<pre><code>{\n    \"total\": 100,\n    \"success\": true,\n    \"users\": [\n        {\n            \"id\": 1,\n            \"name\": \"Ed Spencer\",\n            \"email\": \"ed@sencha.com\"\n        }\n    ]\n}\n</code></pre>\n\n<p>If these properties are present in the JSON response they can be parsed out by the JsonReader and used by the\nStore that loaded it. We can set up the names of these properties by specifying a final pair of configuration \noptions:</p>\n\n<pre><code>reader: {\n    type : 'json',\n    root : 'users',\n    totalProperty  : 'total',\n    successProperty: 'success'\n}\n</code></pre>\n\n<p>These final options are not necessary to make the Reader work, but can be useful when the server needs to report\nan error or if it needs to indicate that there is a lot of data available of which only a subset is currently being\nreturned.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Json.html",
  "extends": "Ext.data.reader.Reader"
});