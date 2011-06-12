Ext.data.JsonP.Ext_Number({
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
        "href": "Number3.html#Ext-Number-method-constrain",
        "shortDoc": "Checks whether or not the passed number is within a desired range. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to check</p>\n",
            "name": "number"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The minimum number in the range</p>\n",
            "name": "min"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum number in the range</p>\n",
            "name": "max"
          }
        ],
        "name": "constrain",
        "owner": "Ext.Number",
        "doc": "<p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n",
        "linenr": 13,
        "return": {
          "type": "Number",
          "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n"
        },
        "html_filename": "Number3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Number3.html#Ext-Number-method-from",
        "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The value to return if the original value is non-numeric</p>\n",
            "name": "defaultValue"
          }
        ],
        "name": "from",
        "owner": "Ext.Number",
        "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n",
        "linenr": 76,
        "return": {
          "type": "Number",
          "doc": "<p>value, if numeric, defaultValue otherwise</p>\n"
        },
        "html_filename": "Number3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Number3.html#Ext-Number-method-snap",
        "shortDoc": "Snaps the passed number between stopping points based upon a passed increment value. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The unsnapped value.</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The increment by which the value must move.</p>\n",
            "name": "increment"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The minimum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "name": "minValue"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The maximum value to which the returned value must be constrained. Overrides the increment..</p>\n",
            "name": "maxValue"
          }
        ],
        "name": "snap",
        "owner": "Ext.Number",
        "doc": "<p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n",
        "linenr": 34,
        "return": {
          "type": "Number",
          "doc": "<p>The value of the nearest snap target.</p>\n"
        },
        "html_filename": "Number3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Number3.html#Ext-Number-method-toFixed",
        "shortDoc": "Formats a number using fixed-point notation ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number to format</p>\n",
            "name": "value"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of digits to show after the decimal point</p>\n",
            "name": "precision"
          }
        ],
        "name": "toFixed",
        "owner": "Ext.Number",
        "doc": "<p>Formats a number using fixed-point notation</p>\n",
        "linenr": 61,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Number3.html"
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
  "href": "Number3.html#Ext-Number",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Number",
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Number3.html",
  "extends": null
});