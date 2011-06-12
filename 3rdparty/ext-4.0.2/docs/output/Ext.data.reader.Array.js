Ext.data.JsonP.Ext_data_reader_Array({
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
        "href": "Array.html#Ext-data-reader-Array-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Create a new ArrayReader ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Metadata configuration options.</p>\n",
            "name": "meta"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Array.js",
        "doc": "<p>Create a new ArrayReader</p>\n",
        "owner": "Ext.data.reader.Array",
        "name": "Array",
        "html_filename": "Array.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 1
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
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Array-method-readRecords\" rel=\"Ext.data.reader.Array-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
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
    "Ext.data.reader.Reader",
    "Ext.data.reader.Json"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Array.html#Ext-data-reader-Array",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Array.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.ArrayReader"
  ],
  "name": "Ext.data.reader.Array",
  "doc": "<p>Data reader class to create an Array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> objects from an Array.\nEach element of that Array represents a row of data fields. The\nfields are pulled into a Record object using as a subscript, the <code>mapping</code> property\nof the field definition if it exists, or the field's ordinal position in the definition.</p>\n\n\n\n\n<p><u>Example code:</u></p>\n\n\n\n\n<pre><code>Employee = Ext.define('Employee', {\n    extend: 'Ext.data.Model',\n    fields: [\n        'id',\n        {name: 'name', mapping: 1},         // \"mapping\" only needed if an \"id\" field is present which\n        {name: 'occupation', mapping: 2}    // precludes using the ordinal position as the index.        \n    ]\n});\n\nvar myReader = new Ext.data.reader.Array({\n    model: 'Employee'\n}, Employee);\n</code></pre>\n\n\n\n\n<p>This would consume an Array like this:</p>\n\n\n\n\n<pre><code>[ [1, 'Bill', 'Gardener'], [2, 'Ben', 'Horticulturalist'] ]\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Array.html",
  "extends": "Ext.data.reader.Json"
});