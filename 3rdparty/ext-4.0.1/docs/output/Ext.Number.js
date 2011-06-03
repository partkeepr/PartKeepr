Ext.data.JsonP.Ext_Number({
  "tagname": "class",
  "name": "Ext.Number",
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
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
      "name": "constrain",
      "member": "Ext.Number",
      "doc": "<p>Checks whether or not the current number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "number",
          "doc": "<p>The number to check</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "min",
          "doc": "<p>The minimum number in the range</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "max",
          "doc": "<p>The maximum number in the range</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Number.js",
      "linenr": 13,
      "html_filename": "Number3.html",
      "href": "Number3.html#Ext-Number-method-constrain",
      "shortDoc": "Checks whether or not the current number is within a desired range.  If the number is already within the\nrange it is ..."
    },
    {
      "tagname": "method",
      "name": "from",
      "member": "Ext.Number",
      "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "defaultValue",
          "doc": "<p>The value to return if the original value is non-numeric</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>value, if numeric, defaultValue otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Number.js",
      "linenr": 49,
      "html_filename": "Number3.html",
      "href": "Number3.html#Ext-Number-method-from",
      "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit i..."
    },
    {
      "tagname": "method",
      "name": "toFixed",
      "member": "Ext.Number",
      "doc": "<p>Formats a number using fixed-point notation</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "value",
          "doc": "<p>The number to format</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "precision",
          "doc": "<p>The number of digits to show after the decimal point</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Number.js",
      "linenr": 34,
      "html_filename": "Number3.html",
      "href": "Number3.html#Ext-Number-method-toFixed",
      "shortDoc": "<p>Formats a number using fixed-point notation</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Number.js",
  "linenr": 1,
  "html_filename": "Number3.html",
  "href": "Number3.html#Ext-Number",
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