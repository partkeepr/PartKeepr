Ext.data.JsonP.Ext_data_validations({
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
  "href": "validations.html#Ext-data-validations",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "validations.html#Ext-data-validations-method-exclusion",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is not present in the list</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "shortDoc": "Validates that the given value is present in the configured list ...",
        "static": false,
        "name": "exclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured list</p>\n",
        "linenr": 103,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "validations.html#Ext-data-validations-method-format",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes the format validation</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "shortDoc": "Returns true if the given value passes validation against the configured matcher regex ...",
        "static": false,
        "name": "format",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value passes validation against the configured matcher regex</p>\n",
        "linenr": 84,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "validations.html#Ext-data-validations-method-inclusion",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value is present in the list</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "shortDoc": "Validates that the given value is present in the configured list ...",
        "static": false,
        "name": "inclusion",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present in the configured list</p>\n",
        "linenr": 94,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "validations.html#Ext-data-validations-method-length",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the value passes validation</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "shortDoc": "Returns true if the given value is between the configured min and max values ...",
        "static": false,
        "name": "length",
        "owner": "Ext.data.validations",
        "doc": "<p>Returns true if the given value is between the configured min and max values</p>\n",
        "linenr": 62,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "validations.html#Ext-data-validations-method-presence",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if validation passed</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "shortDoc": "Validates that the given value is present ...",
        "static": false,
        "name": "presence",
        "owner": "Ext.data.validations",
        "doc": "<p>Validates that the given value is present</p>\n",
        "linenr": 48,
        "html_filename": "validations.html"
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
        "type": "String",
        "deprecated": null,
        "href": "validations.html#Ext-data-validations-property-exclusionMessage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "static": false,
        "name": "exclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an exclusion validation fails</p>\n",
        "linenr": 41,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "validations.html#Ext-data-validations-property-formatMessage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "static": false,
        "name": "formatMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a format validation fails</p>\n",
        "linenr": 27,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "validations.html#Ext-data-validations-property-inclusionMessage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "static": false,
        "name": "inclusionMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when an inclusion validation fails</p>\n",
        "linenr": 34,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "validations.html#Ext-data-validations-property-lengthMessage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "static": false,
        "name": "lengthMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a length validation fails</p>\n",
        "linenr": 20,
        "html_filename": "validations.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "validations.html#Ext-data-validations-property-presenceMessage",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
        "private": false,
        "static": false,
        "name": "presenceMessage",
        "owner": "Ext.data.validations",
        "doc": "<p>The default error message used when a presence validation fails</p>\n",
        "linenr": 13,
        "html_filename": "validations.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/validations.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.validations",
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type\nof data. They are most often used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically\nset up and executed.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "validations.html",
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
  "extends": "Object"
});