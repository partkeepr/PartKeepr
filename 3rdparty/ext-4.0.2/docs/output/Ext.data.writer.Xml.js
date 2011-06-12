Ext.data.JsonP.Ext_data_writer_Xml({
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
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "defaultDocumentRoot",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The root to be used if <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n",
        "linenr": 31,
        "html_filename": "Xml2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-documentRoot",
        "shortDoc": "The name of the root element of the document. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "documentRoot",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n",
        "linenr": 24,
        "html_filename": "Xml2.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-header",
        "shortDoc": "A header to use in the XML document (such as setting the encoding or version). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "header",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n",
        "linenr": 37,
        "html_filename": "Xml2.html"
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
        "href": "Xml2.html#Ext-data-writer-Xml-cfg-record",
        "shortDoc": "The name of the node to use for each record. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
        "private": false,
        "name": "record",
        "owner": "Ext.data.writer.Xml",
        "doc": "<p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n",
        "linenr": 43,
        "html_filename": "Xml2.html"
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
        "name": "Xml",
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
  "href": "Xml2.html#Ext-data-writer-Xml",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/writer/Xml.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.XmlWriter"
  ],
  "name": "Ext.data.writer.Xml",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Xml2.html",
  "extends": "Ext.data.writer.Writer"
});