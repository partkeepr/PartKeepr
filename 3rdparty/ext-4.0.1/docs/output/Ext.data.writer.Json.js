Ext.data.JsonP.Ext_data_writer_Json({
  "tagname": "class",
  "name": "Ext.data.writer.Json",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in a JSON format.\nThe <a href=\"#/api/Ext.data.writer.Json-cfg-allowSingle\" rel=\"Ext.data.writer.Json-cfg-allowSingle\" class=\"docClass\">allowSingle</a> configuration can be set to false to force the records to always be\nencoded in an array, even if there is only a single record being sent.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.JsonWriter"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "allowSingle",
      "member": "Ext.data.writer.Json",
      "type": "Boolean",
      "doc": "<p>False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there is more than one record, they will always be encoded into an array.\nDefaults to <tt>true</tt>. Example:</p>\n\n<pre><code>// with allowSingle: true\n\"root\": {\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}\n\n// with allowSingle: false\n\"root\": [{\n    \"first\": \"Mark\",\n    \"last\": \"Corrigan\"\n}]\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Json.js",
      "linenr": 33,
      "html_filename": "Json2.html",
      "href": "Json2.html#Ext-data-writer-Json-cfg-allowSingle",
      "shortDoc": "False to ensure that records are always wrapped in an array, even if there is only\none record being sent. When there ..."
    },
    {
      "tagname": "cfg",
      "name": "encode",
      "member": "Ext.data.writer.Json",
      "type": "Boolean",
      "doc": "<p>True to use Ext.encode() on the data before sending. Defaults to <tt>false</tt>.\nThe encode option should only be set to true when a <a href=\"#/api/Ext.data.writer.Json-cfg-root\" rel=\"Ext.data.writer.Json-cfg-root\" class=\"docClass\">root</a> is defined, because the values will be\nsent as part of the request parameters as opposed to a raw post. The root will be the name of the parameter\nsent to the server.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Json.js",
      "linenr": 25,
      "html_filename": "Json2.html",
      "href": "Json2.html#Ext-data-writer-Json-cfg-encode",
      "shortDoc": "True to use Ext.encode() on the data before sending. Defaults to false.\nThe encode option should only be set to true ..."
    },
    {
      "tagname": "cfg",
      "name": "nameProperty",
      "member": "Ext.data.writer.Writer",
      "type": "String",
      "doc": "<p>This property is used to read the key for each value that will be sent to the server.\nFor example:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'first',\n        mapping: 'firstName'\n    }, {\n        name: 'last',\n        mapping: 'lastName'\n    }, {\n        name: 'age'\n    }]\n});\nnew Ext.data.writer.Writer({\n    writeAllFields: true,\n    nameProperty: 'mapping'\n});\n\n// This will be sent to the server\n{\n    firstName: 'first name value',\n    lastName: 'last name value',\n    age: 1\n}\n\n</code></pre>\n\n\n<p>Defaults to <tt>name</tt>. If the value is not present, the field name will always be used.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
      "linenr": 32,
      "html_filename": "Writer.html",
      "href": "Writer.html#Ext-data-writer-Writer-cfg-nameProperty",
      "shortDoc": "This property is used to read the key for each value that will be sent to the server.\nFor example:\n\nExt.define('Perso..."
    },
    {
      "tagname": "cfg",
      "name": "root",
      "member": "Ext.data.writer.Json",
      "type": "String",
      "doc": "<p>The key under which the records in this Writer will be placed. Defaults to <tt>undefined</tt>.\nExample generated request, using root: 'records':</p>\n\n<pre><code>{'records': [{name: 'my record'}, {name: 'another record'}]}\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Json.js",
      "linenr": 16,
      "html_filename": "Json2.html",
      "href": "Json2.html#Ext-data-writer-Json-cfg-root",
      "shortDoc": "The key under which the records in this Writer will be placed. Defaults to undefined.\nExample generated request, usin..."
    },
    {
      "tagname": "cfg",
      "name": "writeAllFields",
      "member": "Ext.data.writer.Writer",
      "type": "Boolean",
      "doc": "<p>True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modified. Defaults to <tt>true</tt>. Note that any fields that have\n<a href=\"#/api/Ext.data.Field-cfg-persist\" rel=\"Ext.data.Field-cfg-persist\" class=\"docClass\">Ext.data.Field.persist</a> set to false will still be ignored.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
      "linenr": 25,
      "html_filename": "Writer.html",
      "href": "Writer.html#Ext-data-writer-Writer-cfg-writeAllFields",
      "shortDoc": "True to write all fields from the record to the server. If set to false it\nwill only send the fields that were modifi..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Json",
      "member": "Ext.data.writer.Writer",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
      "linenr": 1,
      "html_filename": "Writer.html",
      "href": "Writer.html#Ext-data-writer-Writer-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getRecordData",
      "member": "Ext.data.writer.Writer",
      "doc": "<p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "record",
          "doc": "<p>The record that we are writing to the server.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
      "linenr": 87,
      "html_filename": "Writer.html",
      "href": "Writer.html#Ext-data-writer-Writer-method-getRecordData",
      "shortDoc": "Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data..."
    },
    {
      "tagname": "method",
      "name": "write",
      "member": "Ext.data.writer.Writer",
      "doc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n",
      "params": [
        {
          "type": "Ext.data.Request",
          "name": "request",
          "doc": "<p>The request object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Request",
        "doc": "<p>The modified request object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Writer.js",
      "linenr": 69,
      "html_filename": "Writer.html",
      "href": "Writer.html#Ext-data-writer-Writer-method-write",
      "shortDoc": "<p>Prepares a Proxy's <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a> object</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Json.js",
  "linenr": 1,
  "html_filename": "Json2.html",
  "href": "Json2.html#Ext-data-writer-Json",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.data.writer.Writer"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});