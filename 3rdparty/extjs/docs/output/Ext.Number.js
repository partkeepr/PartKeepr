Ext.data.JsonP.Ext_Number({
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
  "href": "Number3.html#Ext-Number",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Number3.html#Ext-Number-method-constrain",
        "return": {
          "type": "Number",
          "doc": "<p>The constrained value if outside the range, otherwise the current value</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "shortDoc": "Checks whether or not the passed number is within a desired range. ...",
        "static": false,
        "name": "constrain",
        "owner": "Ext.Number",
        "doc": "<p>Checks whether or not the passed number is within a desired range.  If the number is already within the\nrange it is returned, otherwise the min or max value is returned depending on which side of the range is\nexceeded. Note that this method returns the constrained value but does not change the current number.</p>\n",
        "linenr": 13,
        "html_filename": "Number3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Number3.html#Ext-Number-method-from",
        "return": {
          "type": "Number",
          "doc": "<p>value, if numeric, defaultValue otherwise</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "shortDoc": "Validate that a value is numeric and convert it to a number if necessary. ...",
        "static": false,
        "name": "from",
        "owner": "Ext.Number",
        "doc": "<p>Validate that a value is numeric and convert it to a number if necessary. Returns the specified default value if\nit is not.</p>\n\n<p>Ext.Number.from('1.23', 1); // returns 1.23\nExt.Number.from('abc', 1); // returns 1</p>\n",
        "linenr": 76,
        "html_filename": "Number3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Number3.html#Ext-Number-method-snap",
        "return": {
          "type": "Number",
          "doc": "<p>The value of the nearest snap target.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "shortDoc": "Snaps the passed number between stopping points based upon a passed increment value. ...",
        "static": false,
        "name": "snap",
        "owner": "Ext.Number",
        "doc": "<p>Snaps the passed number between stopping points based upon a passed increment value.</p>\n",
        "linenr": 34,
        "html_filename": "Number3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Number3.html#Ext-Number-method-toFixed",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
        "private": false,
        "shortDoc": "Formats a number using fixed-point notation ...",
        "static": false,
        "name": "toFixed",
        "owner": "Ext.Number",
        "doc": "<p>Formats a number using fixed-point notation</p>\n",
        "linenr": 61,
        "html_filename": "Number3.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Number.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.Number",
  "doc": "<p>A collection of useful static methods to deal with numbers</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Number3.html",
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