Ext.data.JsonP.Ext_data_writer_Json({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Json2.html#Ext-data-writer-Json-cfg-allowSingle",
        "shortDoc": "False to ensure that records are always wrapped in an array, even if there is only\none record being sent. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "allowSingle",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there is more than one record, they will always be encoded into an array.\nDefaults to <tt>true</tt>. Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n\n",
        "linenr": 33,
        "html_filename": "Json2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Json2.html#Ext-data-writer-Json-cfg-encode",
        "shortDoc": "True to use Ext.encode() on the data before sending. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "encode",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.\nThe encode option should only be set to true when a <a href=\"#/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be\nsent as part of the request parameters as opposed to a raw post. The root will be the name of the parameter\nsent to the server.</p>\n",
        "linenr": 25,
        "html_filename": "Json2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-nameProperty",
        "shortDoc": "This property is used to read the key for each value that will be sent to the server. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "nameProperty",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'first',\n        mapping: 'firstName'\n    }, {\n        name: 'last',\n        mapping: 'lastName'\n    }, {\n        name: 'age'\n    }]\n});\nnew Ext.data.writer.Writer({\n    writeAllFields: true,\n    nameProperty: 'mapping'\n});\n\n// This will be sent to the server\n{\n    firstName: 'first name value',\n    lastName: 'last name value',\n    age: 1\n}\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n",
        "linenr": 29,
        "html_filename": "Writer.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Json2.html#Ext-data-writer-Json-cfg-root",
        "shortDoc": "The key under which the records in this Writer will be placed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
        "private": false,
        "name": "root",
        "owner": "Ext.data.writer.Json",
        "doc": "<p>The key under which the records in this Writer will be placed. Defaults to <tt>undefined</tt>.\nExample generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n",
        "linenr": 16,
        "html_filename": "Json2.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Writer.html#Ext-data-writer-Writer-cfg-writeAllFields",
        "shortDoc": "True to write all fields from the record to the server. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "name": "writeAllFields",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n",
        "linenr": 22,
        "html_filename": "Writer.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Writer.html#Ext-data-writer-Writer-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Writer. ...",
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
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "doc": "<p>Creates new Writer.</p>\n",
        "owner": "Ext.data.writer.Writer",
        "name": "Json",
        "html_filename": "Writer.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 62
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Writer.html#Ext-data-writer-Writer-method-getRecordData",
        "shortDoc": "Formats the data for each record before sending it to the server. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The record that we are writing to the server.</p>\n",
            "name": "record"
          }
        ],
        "name": "getRecordData",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n",
        "linenr": 88,
        "return": {
          "type": "Object",
          "doc": "<p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n"
        },
        "html_filename": "Writer.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Writer.html#Ext-data-writer-Writer-method-write",
        "shortDoc": "Prepares a Proxy's Ext.data.Request object ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Request",
            "optional": false,
            "doc": "<p>The request object</p>\n",
            "name": "request"
          }
        ],
        "name": "write",
        "owner": "Ext.data.writer.Writer",
        "doc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n",
        "linenr": 70,
        "return": {
          "type": "Ext.data.Request",
          "doc": "<p>The modified request object</p>\n"
        },
        "html_filename": "Writer.html"
      }
    ],
    "property": [

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
    "Ext.data.writer.Writer"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Json2.html#Ext-data-writer-Json",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Json.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.JsonWriter"
  ],
  "name": "Ext.data.writer.Json",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Json2.html",
  "extends": "Ext.data.writer.Writer"
});