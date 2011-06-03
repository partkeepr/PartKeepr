Ext.data.JsonP.Ext_data_reader_Array({
  "tagname": "class",
  "name": "Ext.data.reader.Array",
  "doc": "<p>Data reader class to create an Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects from an Array.\nEach element of that Array represents a row of data fields. The\nfields are pulled into a Record object using as a subscript, the <code>mapping</code> property\nof the field definition if it exists, or the field's ordinal position in the definition.</p>\n\n\n\n\n<p><u>Example code:</u></p>\n\n\n\n\n<pre><code>Employee = Ext.define('Employee', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id',\n        {name: 'name', mapping: 1},         // \"mapping\" only needed if an \"id\" field is present which\n        {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        \n    ]\n});\n\nvar myReader = new Ext.data.reader.Array({\n    model: 'Employee'\n}, Employee);\n</code></pre>\n\n\n\n\n<p>This would consume an Array like this:</p>\n\n\n\n\n<pre><code>[ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]\n</code></pre>\n\n",
  "extends": "Ext.data.reader.Json",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.ArrayReader"
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
      "name": "Array",
      "member": "Ext.data.reader.Array",
      "doc": "<p>Create a new ArrayReader</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "meta",
          "doc": "<p>Metadata configuration options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Array.js",
      "linenr": 1,
      "html_filename": "Array.html",
      "href": "Array.html#Ext-data-reader-Array-method-constructor",
      "shortDoc": "<p>Create a new ArrayReader</p>\n"
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
      "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Array-method-readRecords\" rel=\"Ext.data.reader.Array-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/reader/Array.js",
  "linenr": 1,
  "html_filename": "Array.html",
  "href": "Array.html#Ext-data-reader-Array",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.reader.Reader",
    "Ext.data.reader.Json"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});