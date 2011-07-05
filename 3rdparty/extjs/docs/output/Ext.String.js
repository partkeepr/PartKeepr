Ext.data.JsonP.Ext_String({
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
  "href": "String.html#Ext-String",
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
            "doc": "\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-capitalize",
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Capitalize the given string ...",
        "static": false,
        "name": "capitalize",
        "owner": "Ext.String",
        "doc": "<p>Capitalize the given string</p>\n",
        "linenr": 101,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to truncate</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum length to allow before truncating</p>\n",
            "name": "length"
          },
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to try to find a common word break</p>\n",
            "name": "word"
          }
        ],
        "href": "String.html#Ext-String-method-ellipsis",
        "return": {
          "type": "String",
          "doc": "<p>The converted text</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length ...",
        "static": false,
        "name": "ellipsis",
        "owner": "Ext.String",
        "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
        "linenr": 110,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to escape</p>\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-escape",
        "return": {
          "type": "String",
          "doc": "<p>The escaped string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Escapes the passed string for ' and \\ ...",
        "static": false,
        "name": "escape",
        "owner": "Ext.String",
        "doc": "<p>Escapes the passed string for ' and \\</p>\n",
        "linenr": 140,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-escapeRegex",
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Escapes the passed string for use in a regular expression ...",
        "static": false,
        "name": "escapeRegex",
        "owner": "Ext.String",
        "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
        "linenr": 131,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The tokenized string to be formatted</p>\n",
            "name": "string"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to replace token {0}</p>\n",
            "name": "value1"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Etc...</p>\n",
            "name": "value2"
          }
        ],
        "href": "String.html#Ext-String-method-format",
        "return": {
          "type": "String",
          "doc": "<p>The formatted string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens. ...",
        "static": false,
        "name": "format",
        "owner": "Ext.String",
        "doc": "<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
        "linenr": 192,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to decode</p>\n",
            "name": "value"
          }
        ],
        "href": "String.html#Ext-String-method-htmlDecode",
        "return": {
          "type": "String",
          "doc": "<p>The decoded text</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents. ...",
        "static": false,
        "name": "htmlDecode",
        "owner": "Ext.String",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n",
        "linenr": 41,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to encode</p>\n",
            "name": "value"
          }
        ],
        "href": "String.html#Ext-String-method-htmlEncode",
        "return": {
          "type": "String",
          "doc": "<p>The encoded text</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages. ...",
        "static": false,
        "name": "htmlEncode",
        "owner": "Ext.String",
        "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n",
        "linenr": 14,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The original string</p>\n",
            "name": "string"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The total length of the output string</p>\n",
            "name": "size"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n",
            "name": "character"
          }
        ],
        "href": "String.html#Ext-String-method-leftPad",
        "return": {
          "type": "String",
          "doc": "<p>The padded string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Pads the left side of a string with a specified character. ...",
        "static": false,
        "name": "leftPad",
        "owner": "Ext.String",
        "doc": "<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
        "linenr": 170,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The current string</p>\n",
            "name": "string"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to compare to the current string</p>\n",
            "name": "value"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The new value to use if the string already equals the first value passed in</p>\n",
            "name": "other"
          }
        ],
        "href": "String.html#Ext-String-method-toggle",
        "return": {
          "type": "String",
          "doc": "<p>The new value</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Utility function that allows you to easily switch a string between two alternating values. ...",
        "static": false,
        "name": "toggle",
        "owner": "Ext.String",
        "doc": "<p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n",
        "linenr": 149,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The string to escape</p>\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-trim",
        "return": {
          "type": "String",
          "doc": "<p>The trimmed string</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Trims whitespace from either end of a string, leaving spaces within the string intact. ...",
        "static": false,
        "name": "trim",
        "owner": "Ext.String",
        "doc": "<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
        "linenr": 87,
        "html_filename": "String.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The URL to append to.</p>\n",
            "name": "url"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The content to append to the URL.</p>\n",
            "name": "string"
          }
        ],
        "href": "String.html#Ext-String-method-urlAppend",
        "return": {
          "type": "void",
          "doc": "<p>(String) The resulting URL</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
        "private": false,
        "shortDoc": "Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...",
        "static": false,
        "name": "urlAppend",
        "owner": "Ext.String",
        "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
        "linenr": 72,
        "html_filename": "String.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/String.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.String",
  "doc": "<p>A collection of useful static methods to deal with strings</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "String.html",
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