Ext.data.JsonP.Ext_String({
  "tagname": "class",
  "name": "Ext.String",
  "doc": "<p>A collection of useful static methods to deal with strings</p>\n",
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
      "name": "capitalize",
      "member": "Ext.String",
      "doc": "<p>Capitalize the given string</p>\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 101,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-capitalize",
      "shortDoc": "<p>Capitalize the given string</p>\n"
    },
    {
      "tagname": "method",
      "name": "ellipsis",
      "member": "Ext.String",
      "doc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The string to truncate</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "length",
          "doc": "<p>The maximum length to allow before truncating</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "word",
          "doc": "<p>True to try to find a common word break</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The converted text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 110,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-ellipsis",
      "shortDoc": "<p>Truncate a string and add an ellipsis ('...') to the end if it exceeds the specified length</p>\n"
    },
    {
      "tagname": "method",
      "name": "escape",
      "member": "Ext.String",
      "doc": "<p>Escapes the passed string for ' and \\</p>\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The string to escape</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The escaped string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 140,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-escape",
      "shortDoc": "<p>Escapes the passed string for ' and \\</p>\n"
    },
    {
      "tagname": "method",
      "name": "escapeRegex",
      "member": "Ext.String",
      "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 131,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-escapeRegex",
      "shortDoc": "<p>Escapes the passed string for use in a regular expression</p>\n"
    },
    {
      "tagname": "method",
      "name": "format",
      "member": "Ext.String",
      "doc": "<p>Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken must be unique, and must increment in the format {0}, {1}, etc.  Example usage:</p>\n\n<pre><code>var cls = 'my-class', text = 'Some text';\nvar s = Ext.String.format('&lt;div class=\"{0}\">{1}&lt;/div>', cls, text);\n// s now contains the string: '&lt;div class=\"my-class\">Some text&lt;/div>'\n       </code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The tokenized string to be formatted</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value1",
          "doc": "<p>The value to replace token {0}</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value2",
          "doc": "<p>Etc...</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The formatted string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 192,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-format",
      "shortDoc": "Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each\ntoken ..."
    },
    {
      "tagname": "method",
      "name": "htmlDecode",
      "member": "Ext.String",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The string to decode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The decoded text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 41,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-htmlDecode",
      "shortDoc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n"
    },
    {
      "tagname": "method",
      "name": "htmlEncode",
      "member": "Ext.String",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The string to encode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The encoded text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 14,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-htmlEncode",
      "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pag..."
    },
    {
      "tagname": "method",
      "name": "leftPad",
      "member": "Ext.String",
      "doc": "<p>Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date strings.  Example usage:</p>\n\n<pre><code>var s = Ext.String.leftPad('123', 5, '0');\n// s now contains the string: '00123'\n       </code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The original string</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "size",
          "doc": "<p>The total length of the output string</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "character",
          "doc": "<p>(optional) The character with which to pad the original string (defaults to empty string \" \")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The padded string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 170,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-leftPad",
      "shortDoc": "Pads the left side of a string with a specified character.  This is especially useful\nfor normalizing number and date..."
    },
    {
      "tagname": "method",
      "name": "toggle",
      "member": "Ext.String",
      "doc": "<p>Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compared to the current string, and if they are equal, the other value that was passed in is returned.  If\nthey are already different, the first value passed in is returned.  Note that this method returns the new value\nbut does not change the current string.</p>\n\n<pre><code>    // alternate sort directions\n    sort = Ext.String.toggle(sort, 'ASC', 'DESC');\n\n    // instead of conditional logic:\n    sort = (sort == 'ASC' ? 'DESC' : 'ASC');\n       </code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The current string</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value to compare to the current string</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "other",
          "doc": "<p>The new value to use if the string already equals the first value passed in</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The new value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 149,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-toggle",
      "shortDoc": "Utility function that allows you to easily switch a string between two alternating values.  The passed value\nis compa..."
    },
    {
      "tagname": "method",
      "name": "trim",
      "member": "Ext.String",
      "doc": "<p>Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  foo bar  ';\nalert('-' + s + '-');         //alerts \"- foo bar -\"\nalert('-' + Ext.String.trim(s) + '-');  //alerts \"-foo bar-\"</p>\n",
      "params": [
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The string to escape</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The trimmed string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 87,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-trim",
      "shortDoc": "Trims whitespace from either end of a string, leaving spaces within the string intact.  Example:\n@example\nvar s = '  ..."
    },
    {
      "tagname": "method",
      "name": "urlAppend",
      "member": "Ext.String",
      "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "url",
          "doc": "<p>The URL to append to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "string",
          "doc": "<p>The content to append to the URL.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>(String) The resulting URL</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
      "linenr": 72,
      "html_filename": "String.html",
      "href": "String.html#Ext-String-method-urlAppend",
      "shortDoc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/String.js",
  "linenr": 1,
  "html_filename": "String.html",
  "href": "String.html#Ext-String",
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