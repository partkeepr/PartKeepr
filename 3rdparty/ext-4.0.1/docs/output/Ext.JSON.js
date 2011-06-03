Ext.data.JsonP.Ext_JSON({
  "tagname": "class",
  "name": "Ext.JSON",
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "decode",
      "member": "Ext.JSON",
      "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "json",
          "doc": "<p>The JSON string</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "safe",
          "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The resulting object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
      "linenr": 129,
      "html_filename": "JSON3.html",
      "href": "JSON3.html#Ext-JSON-method-decode",
      "shortDoc": "Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the sa..."
    },
    {
      "tagname": "method",
      "name": "encode",
      "member": "Ext.JSON",
      "doc": "<p>Encodes an Object, Array or other value</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "o",
          "doc": "<p>The variable to encode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The JSON string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
      "linenr": 112,
      "html_filename": "JSON3.html",
      "href": "JSON3.html#Ext-JSON-method-encode",
      "shortDoc": "<p>Encodes an Object, Array or other value</p>\n"
    },
    {
      "tagname": "method",
      "name": "encodeDate",
      "member": "Ext.JSON",
      "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>     Ext.JSON.encodeDate = function(d) {\n     return d.format('\"Y-m-d\"');\n     };\n     </code></pre>\n\n",
      "params": [
        {
          "type": "Date",
          "name": "d",
          "doc": "<p>The Date to encode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The string literal to use in a JSON string.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
      "linenr": 91,
      "html_filename": "JSON3.html",
      "href": "JSON3.html#Ext-JSON-method-encodeDate",
      "shortDoc": "Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\nThe ..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
  "linenr": 1,
  "html_filename": "JSON3.html",
  "href": "JSON3.html#Ext-JSON",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});