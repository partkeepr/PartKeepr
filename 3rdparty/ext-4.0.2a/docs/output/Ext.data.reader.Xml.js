Ext.data.JsonP.Ext_data_reader_Xml({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.data.reader.Reader"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Xml.html#Ext-data-reader-Xml",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-idProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property within a row object\nthat contains a record identifier value. ...",
        "static": false,
        "name": "idProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property within a row object\nthat contains a record identifier value.  Defaults to <tt>The id of the model</tt>.\nIf an idProperty is explicitly specified it will override that of the one specified\non the model</p>\n",
        "linenr": 151,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-implicitIncludes",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "True to automatically parse models nested within other models in a response\nobject. ...",
        "static": false,
        "name": "implicitIncludes",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>True to automatically parse models nested within other models in a response\nobject. See the <a href=\"#/api/Ext.data.reader.Reader\" rel=\"Ext.data.reader.Reader\" class=\"docClass\">Ext.data.reader.Reader</a> intro docs for full explanation. Defaults to true.</p>\n",
        "linenr": 188,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-messageProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "The name of the property which contains a response message. ...",
        "static": false,
        "name": "messageProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The name of the property which contains a response message.\nThis property is optional.</p>\n",
        "linenr": 183,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Xml.html#Ext-data-reader-Xml-cfg-record",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Xml.js",
        "private": false,
        "static": false,
        "name": "record",
        "owner": "Ext.data.reader.Xml",
        "doc": "<p>The DomQuery path to the repeated element which contains record information.</p>\n",
        "linenr": 171,
        "html_filename": "Xml.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-root",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Required. ...",
        "static": false,
        "name": "root",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p><b>Required</b>.  The name of the property\nwhich contains the Array of row objects.  Defaults to <tt>undefined</tt>.\nAn exception will be thrown if the root property is undefined. The data\npacket value for this property should be an empty array to clear the data\nor show no data.</p>\n",
        "linenr": 174,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-successProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property from which to\nretrieve the success attribute. ...",
        "static": false,
        "name": "successProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the success attribute. Defaults to <tt>success</tt>.  See\n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Ext.data.proxy.Proxy</a>.exception\nfor additional information.</p>\n",
        "linenr": 166,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-cfg-totalProperty",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Name of the property from which to\nretrieve the total number of records in the dataset. ...",
        "static": false,
        "name": "totalProperty",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Name of the property from which to\nretrieve the total number of records in the dataset. This is only needed\nif the whole dataset is not passed in one go, but is being paged from\nthe remote server.  Defaults to <tt>total</tt>.</p>\n",
        "linenr": 158,
        "html_filename": "Reader.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Creates new Reader. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Creates new Reader.</p>\n",
        "linenr": 196,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The raw data object</p>\n",
            "name": "data"
          }
        ],
        "href": "Xml.html#Ext-data-reader-Xml-method-getData",
        "return": {
          "type": "Object",
          "doc": "<p>Returns the documentElement property of the data object if present, or the same object if not</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Xml.js",
        "private": false,
        "shortDoc": "Normalizes the data object ...",
        "static": false,
        "name": "getData",
        "owner": "Ext.data.reader.Xml",
        "doc": "<p>Normalizes the data object</p>\n",
        "linenr": 221,
        "html_filename": "Xml.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The responce object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-getResponseData",
        "return": {
          "type": "Object",
          "doc": "<p>The useful data from the response</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Takes a raw response object (as passed to this.read) and returns the useful data segment of it. ...",
        "static": false,
        "name": "getResponseData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Takes a raw response object (as passed to this.read) and returns the useful data segment of it. This must be implemented by each subclass</p>\n",
        "linenr": 460,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The response object. This may be either an XMLHttpRequest object or a plain JS object</p>\n",
            "name": "response"
          }
        ],
        "href": "Reader.html#Ext-data-reader-Reader-method-read",
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The parsed ResultSet object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "Reads the given response object. ...",
        "static": false,
        "name": "read",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>Reads the given response object. This method normalizes the different types of response object that may be passed\nto it, before handing off the reading of records to the <a href=\"#/api/Ext.data.reader.Xml-method-readRecords\" rel=\"Ext.data.reader.Xml-method-readRecords\" class=\"docClass\">readRecords</a> function.</p>\n",
        "linenr": 228,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Parsed XML document</p>\n",
            "name": "doc"
          }
        ],
        "href": "Xml.html#Ext-data-reader-Xml-method-readRecords",
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The parsed result set</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Xml.js",
        "private": false,
        "shortDoc": "Parses an XML document and returns a ResultSet containing the model instances ...",
        "static": false,
        "name": "readRecords",
        "owner": "Ext.data.reader.Xml",
        "doc": "<p>Parses an XML document and returns a ResultSet containing the model instances</p>\n",
        "linenr": 284,
        "html_filename": "Xml.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Mixed",
        "deprecated": null,
        "href": "Reader.html#Ext-data-reader-Reader-property-rawData",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Reader.js",
        "private": false,
        "shortDoc": "The raw data object that was last passed to readRecords. ...",
        "static": false,
        "name": "rawData",
        "owner": "Ext.data.reader.Reader",
        "doc": "<p>The raw data object that was last passed to readRecords. Stored for further processing if needed</p>\n",
        "linenr": 268,
        "html_filename": "Reader.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Xml.html#Ext-data-reader-Xml-property-xmlData",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Xml.js",
        "private": false,
        "shortDoc": "DEPRECATED - will be removed in Ext JS 5.0. ...",
        "static": false,
        "name": "xmlData",
        "owner": "Ext.data.reader.Xml",
        "doc": "<p>DEPRECATED - will be removed in <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 5.0. This is just a copy of this.rawData - use that instead</p>\n",
        "linenr": 295,
        "html_filename": "Xml.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Ed Spencer",
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/reader/Xml.js",
  "private": false,
  "alternateClassNames": [
    "Ext.data.XmlReader"
  ],
  "static": false,
  "name": "Ext.data.reader.Xml",
  "doc": "<p>The XML Reader is used by a Proxy to read a server response that is sent back in XML format. This usually\nhappens as a result of loading a Store - for example we might create something like this:</p>\n\n\n\n\n<pre><code>Ext.define('User', {\n    extend: 'Ext.data.Model',\n    fields: ['id', 'name', 'email']\n});\n\nvar store = new Ext.data.Store({\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.xml',\n        reader: {\n            type: 'xml',\n            record: 'user'\n        }\n    }\n});\n</code></pre>\n\n\n\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're\nnot already familiar with them.</p>\n\n\n\n\n<p>We created the simplest type of XML Reader possible by simply telling our <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>'s \n<a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a> that we want a XML Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:\n\n<pre><code>reader: {\n    type : 'xml',\n    model: 'User',\n    record: 'user'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;user&gt;\n    &lt;id&gt;1&lt;/id&gt;\n    &lt;name&gt;Ed Spencer&lt;/name&gt;\n    &lt;email&gt;ed@sencha.com&lt;/email&gt;\n&lt;/user&gt;\n&lt;user&gt;\n    &lt;id&gt;2&lt;/id&gt;\n    &lt;name&gt;Abe Elias&lt;/name&gt;\n    &lt;email&gt;abe@sencha.com&lt;/email&gt;\n&lt;/user&gt;\n</code></pre>\n\n<p>The XML Reader uses the configured <a href=\"#/api/Ext.data.reader.Xml-cfg-record\" rel=\"Ext.data.reader.Xml-cfg-record\" class=\"docClass\">record</a> option to pull out the data for each record - in this case we\nset record to 'user', so each &lt;user&gt; above will be converted into a User model.</p>\n\n<p><u>Reading other XML formats</u></p>\n\n<p>If you already have your XML format defined and it doesn't look quite like what we have above, you can usually\npass XmlReader a couple of configuration options to make it parse your format. For example, we can use the \n<a href=\"#/api/Ext.data.reader.Xml-cfg-root\" rel=\"Ext.data.reader.Xml-cfg-root\" class=\"docClass\">root</a> configuration to parse data that comes back like this:</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;users&gt;\n    &lt;user&gt;\n        &lt;id&gt;1&lt;/id&gt;\n        &lt;name&gt;Ed Spencer&lt;/name&gt;\n        &lt;email&gt;ed@sencha.com&lt;/email&gt;\n    &lt;/user&gt;\n    &lt;user&gt;\n        &lt;id&gt;2&lt;/id&gt;\n        &lt;name&gt;Abe Elias&lt;/name&gt;\n        &lt;email&gt;abe@sencha.com&lt;/email&gt;\n    &lt;/user&gt;\n&lt;/users&gt;\n</code></pre>\n\n<p>To parse this we just pass in a <a href=\"#/api/Ext.data.reader.Xml-cfg-root\" rel=\"Ext.data.reader.Xml-cfg-root\" class=\"docClass\">root</a> configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type  : 'xml',\n    root  : 'users',\n    record: 'user'\n}\n</code></pre>\n\n<p>Note that XmlReader doesn't care whether your <a href=\"#/api/Ext.data.reader.Xml-cfg-root\" rel=\"Ext.data.reader.Xml-cfg-root\" class=\"docClass\">root</a> and <a href=\"#/api/Ext.data.reader.Xml-cfg-record\" rel=\"Ext.data.reader.Xml-cfg-record\" class=\"docClass\">record</a> elements are nested deep inside\na larger structure, so a response like this will still work:\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;deeply&gt;\n    &lt;nested&gt;\n        &lt;xml&gt;\n            &lt;users&gt;\n                &lt;user&gt;\n                    &lt;id&gt;1&lt;/id&gt;\n                    &lt;name&gt;Ed Spencer&lt;/name&gt;\n                    &lt;email&gt;ed@sencha.com&lt;/email&gt;\n                &lt;/user&gt;\n                &lt;user&gt;\n                    &lt;id&gt;2&lt;/id&gt;\n                    &lt;name&gt;Abe Elias&lt;/name&gt;\n                    &lt;email&gt;abe@sencha.com&lt;/email&gt;\n                &lt;/user&gt;\n            &lt;/users&gt;\n        &lt;/xml&gt;\n    &lt;/nested&gt;\n&lt;/deeply&gt;\n</code></pre>\n\n<p><u>Response metadata</u></p>\n\n<p>The server can return additional data in its response, such as the <a href=\"#/api/Ext.data.reader.Xml-cfg-totalProperty\" rel=\"Ext.data.reader.Xml-cfg-totalProperty\" class=\"docClass\">total number of records</a> \nand the <a href=\"#/api/Ext.data.reader.Xml-cfg-successProperty\" rel=\"Ext.data.reader.Xml-cfg-successProperty\" class=\"docClass\">success status of the response</a>. These are typically included in the XML response\nlike this:</p>\n\n<pre><code>&lt;?xml version=\"1.0\" encoding=\"UTF-8\"?&gt;\n&lt;total&gt;100&lt;/total&gt;\n&lt;success&gt;true&lt;/success&gt;\n&lt;users&gt;\n    &lt;user&gt;\n        &lt;id&gt;1&lt;/id&gt;\n        &lt;name&gt;Ed Spencer&lt;/name&gt;\n        &lt;email&gt;ed@sencha.com&lt;/email&gt;\n    &lt;/user&gt;\n    &lt;user&gt;\n        &lt;id&gt;2&lt;/id&gt;\n        &lt;name&gt;Abe Elias&lt;/name&gt;\n        &lt;email&gt;abe@sencha.com&lt;/email&gt;\n    &lt;/user&gt;\n&lt;/users&gt;\n</code></pre>\n\n<p>If these properties are present in the XML response they can be parsed out by the XmlReader and used by the\nStore that loaded it. We can set up the names of these properties by specifying a final pair of configuration \noptions:</p>\n\n<pre><code>reader: {\n    type: 'xml',\n    root: 'users',\n    totalProperty  : 'total',\n    successProperty: 'success'\n}\n</code></pre>\n\n<p>These final options are not necessary to make the Reader work, but can be useful when the server needs to report\nan error or if it needs to indicate that there is a lot of data available of which only a subset is currently being\nreturned.</p>\n\n<p><u>Response format</u></p>\n\n<p><b>Note:</b> in order for the browser to parse a returned XML document, the Content-Type header in the HTTP \nresponse must be set to \"text/xml\" or \"application/xml\". This is very important - the XmlReader will not\nwork correctly otherwise.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Xml.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.data.reader.Reader"
});