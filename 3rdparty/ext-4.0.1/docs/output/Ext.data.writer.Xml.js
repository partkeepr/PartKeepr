Ext.data.JsonP.Ext_data_writer_Xml({
  "tagname": "class",
  "name": "Ext.data.writer.Xml",
  "doc": "<p>This class is used to write <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n",
  "extends": "Ext.data.writer.Writer",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.data.XmlWriter"
  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "defaultDocumentRoot",
      "member": "Ext.data.writer.Xml",
      "type": "String",
      "doc": "<p>The root to be used if <a href=\"#/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
      "linenr": 31,
      "html_filename": "Xml2.html",
      "href": "Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot"
    },
    {
      "tagname": "cfg",
      "name": "documentRoot",
      "member": "Ext.data.writer.Xml",
      "type": "String",
      "doc": "<p>The name of the root element of the document. Defaults to <tt>'xmlData'</tt>.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
      "linenr": 24,
      "html_filename": "Xml2.html",
      "href": "Xml2.html#Ext-data-writer-Xml-cfg-documentRoot",
      "shortDoc": "The name of the root element of the document. Defaults to 'xmlData'.\nIf there is more than 1 record and the root is n..."
    },
    {
      "tagname": "cfg",
      "name": "header",
      "member": "Ext.data.writer.Xml",
      "type": "String",
      "doc": "<p>A header to use in the XML document (such as setting the encoding or version).\nDefaults to <tt>''</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
      "linenr": 37,
      "html_filename": "Xml2.html",
      "href": "Xml2.html#Ext-data-writer-Xml-cfg-header"
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
      "name": "record",
      "member": "Ext.data.writer.Xml",
      "type": "String",
      "doc": "<p>The name of the node to use for each record. Defaults to <tt>'record'</tt>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
      "linenr": 43,
      "html_filename": "Xml2.html",
      "href": "Xml2.html#Ext-data-writer-Xml-cfg-record"
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
      "name": "Xml",
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
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/writer/Xml.js",
  "linenr": 1,
  "html_filename": "Xml2.html",
  "href": "Xml2.html#Ext-data-writer-Xml",
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