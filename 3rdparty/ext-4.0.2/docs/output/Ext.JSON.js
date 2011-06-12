Ext.data.JsonP.Ext_JSON({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "JSON.html#Ext-JSON-method-decode",
        "shortDoc": "Decodes (parses) a JSON string to an object. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The JSON string</p>\n",
            "name": "json"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
            "name": "safe"
          }
        ],
        "name": "decode",
        "owner": "Ext.JSON",
        "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "linenr": 129,
        "return": {
          "type": "Object",
          "doc": "<p>The resulting object</p>\n"
        },
        "html_filename": "JSON.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "JSON.html#Ext-JSON-method-encode",
        "shortDoc": "Encodes an Object, Array or other value ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The variable to encode</p>\n",
            "name": "o"
          }
        ],
        "name": "encode",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes an Object, Array or other value</p>\n",
        "linenr": 112,
        "return": {
          "type": "String",
          "doc": "<p>The JSON string</p>\n"
        },
        "html_filename": "JSON.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "JSON.html#Ext-JSON-method-encodeDate",
        "shortDoc": "Encodes a Date. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The Date to encode</p>\n",
            "name": "d"
          }
        ],
        "name": "encodeDate",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>     Ext.JSON.encodeDate = function(d) {\n     return d.format('\"Y-m-d\"');\n     };\n     </code></pre>\n\n",
        "linenr": 91,
        "return": {
          "type": "String",
          "doc": "<p>The string literal to use in a JSON string.</p>\n"
        },
        "html_filename": "JSON.html"
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
  "singleton": true,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "JSON.html#Ext-JSON",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.JSON",
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "JSON.html",
  "extends": null
});