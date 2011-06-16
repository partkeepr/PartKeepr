Ext.data.JsonP.Ext_JSON({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "JSON.html#Ext-JSON",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "JSON.html#Ext-JSON-method-decode",
        "return": {
          "type": "Object",
          "doc": "<p>The resulting object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "shortDoc": "Decodes (parses) a JSON string to an object. ...",
        "static": false,
        "name": "decode",
        "owner": "Ext.JSON",
        "doc": "<p>Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.</p>\n",
        "linenr": 129,
        "html_filename": "JSON.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The variable to encode</p>\n",
            "name": "o"
          }
        ],
        "href": "JSON.html#Ext-JSON-method-encode",
        "return": {
          "type": "String",
          "doc": "<p>The JSON string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "shortDoc": "Encodes an Object, Array or other value ...",
        "static": false,
        "name": "encode",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes an Object, Array or other value</p>\n",
        "linenr": 112,
        "html_filename": "JSON.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Date",
            "optional": false,
            "doc": "<p>The Date to encode</p>\n",
            "name": "d"
          }
        ],
        "href": "JSON.html#Ext-JSON-method-encodeDate",
        "return": {
          "type": "String",
          "doc": "<p>The string literal to use in a JSON string.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
        "private": false,
        "shortDoc": "Encodes a Date. ...",
        "static": false,
        "name": "encodeDate",
        "owner": "Ext.JSON",
        "doc": "<p>Encodes a Date. This returns the actual string which is inserted into the JSON string as the literal expression.\n<b>The returned value includes enclosing double quotation marks.</b></p>\n\n\n<p>The default return format is \"yyyy-mm-ddThh:mm:ss\".</p>\n\n\n<p>To override this:</p>\n\n\n<pre><code>     Ext.JSON.encodeDate = function(d) {\n     return d.format('\"Y-m-d\"');\n     };\n     </code></pre>\n\n",
        "linenr": 91,
        "html_filename": "JSON.html"
      }
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
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/misc/JSON.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.JSON",
  "doc": "<p>Modified version of Douglas Crockford\"s json.js that doesn\"t\nmess with the Object prototype\nhttp://www.json.org/js.html</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "JSON.html",
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
  "extends": null
});