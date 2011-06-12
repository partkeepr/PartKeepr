Ext.data.JsonP.Ext_data_writer_Writer({
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
        "name": "Writer",
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

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Writer.html#Ext-data-writer-Writer",
  "subclasses": [
    "Ext.data.writer.Xml",
    "Ext.data.writer.Json"
  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Writer.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.DataWriter",
    "Ext.data.Writer"
  ],
  "name": "Ext.data.writer.Writer",
  "doc": "<p>Base Writer class used by most subclasses of <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a>. This class is\nresponsible for taking a set of <a href=\"#/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">Ext.data.Operation</a> objects and a <a href=\"#/api/Ext.data.Request\" rel=\"Ext.data.Request\" class=\"docClass\">Ext.data.Request</a>\nobject and modifying that request based on the Operations.</p>\n\n\n\n\n<p>For example a <a href=\"#/api/Ext.data.writer.Json\" rel=\"Ext.data.writer.Json\" class=\"docClass\">Ext.data.writer.Json</a> would format the Operations and their <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> \ninstances based on the config options passed to the JsonWriter's constructor.</p>\n\n\n\n\n<p>Writers are not needed for any kind of local storage - whether via a\n<a href=\"#/api/Ext.data.proxy.WebStorage\" rel=\"Ext.data.proxy.WebStorage\" class=\"docClass\">Web Storage proxy</a> (see <a href=\"#/api/Ext.data.proxy.LocalStorage\" rel=\"Ext.data.proxy.LocalStorage\" class=\"docClass\">localStorage</a>\nand <a href=\"#/api/Ext.data.proxy.SessionStorage\" rel=\"Ext.data.proxy.SessionStorage\" class=\"docClass\">sessionStorage</a>) or just in memory via a\n<a href=\"#/api/Ext.data.proxy.Memory\" rel=\"Ext.data.proxy.Memory\" class=\"docClass\">MemoryProxy</a>.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Writer.html",
  "extends": "Object"
});