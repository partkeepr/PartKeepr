Ext.data.JsonP.Ext_data_validations({
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
        "href": "validations.html#Ext-data-validations-method-exclusion",
        "shortDoc": "Validates that the given value is present in the configured list ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "name": "exclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured list</p>\n",
        "linenr": 103,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is not present in the list</p>\n"
        },
        "html_filename": "validations.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "validations.html#Ext-data-validations-method-format",
        "shortDoc": "Returns true if the given value passes validation against the configured matcher regex ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "name": "format",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value passes validation against the configured matcher regex</p>\n",
        "linenr": 84,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes the format validation</p>\n"
        },
        "html_filename": "validations.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "validations.html#Ext-data-validations-method-inclusion",
        "shortDoc": "Validates that the given value is present in the configured list ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "value"
          }
        ],
        "name": "inclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured list</p>\n",
        "linenr": 94,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is present in the list</p>\n"
        },
        "html_filename": "validations.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "validations.html#Ext-data-validations-method-length",
        "shortDoc": "Returns true if the given value is between the configured min and max values ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object</p>\n",
            "name": "config"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "name": "length",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value is between the configured min and max values</p>\n",
        "linenr": 62,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes validation</p>\n"
        },
        "html_filename": "validations.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "validations.html#Ext-data-validations-method-presence",
        "shortDoc": "Validates that the given value is present ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>Optional config object</p>\n",
            "name": "config"
          },
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The value to validate</p>\n",
            "name": "value"
          }
        ],
        "name": "presence",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present</p>\n",
        "linenr": 48,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if validation passed</p>\n"
        },
        "html_filename": "validations.html"
      }
    ],
    "property": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "validations.html#Ext-data-validations-property-exclusionMessage",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "exclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an exclusion validation fails</p>\n",
        "linenr": 41,
        "html_filename": "validations.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "validations.html#Ext-data-validations-property-formatMessage",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "formatMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a format validation fails</p>\n",
        "linenr": 27,
        "html_filename": "validations.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "validations.html#Ext-data-validations-property-inclusionMessage",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "inclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an inclusion validation fails</p>\n",
        "linenr": 34,
        "html_filename": "validations.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "validations.html#Ext-data-validations-property-lengthMessage",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "lengthMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a length validation fails</p>\n",
        "linenr": 20,
        "html_filename": "validations.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "validations.html#Ext-data-validations-property-presenceMessage",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "name": "presenceMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a presence validation fails</p>\n",
        "linenr": 13,
        "html_filename": "validations.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "validations.html#Ext-data-validations",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.validations",
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type\nof data. They are most often used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically\nset up and executed.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "validations.html",
  "extends": "Object"
});