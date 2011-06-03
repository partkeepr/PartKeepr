Ext.data.JsonP.Ext_data_validations({
  "tagname": "class",
  "name": "Ext.data.validations",
  "doc": "<p>This singleton contains a set of validation functions that can be used to validate any type\nof data. They are most often used in <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Models</a>, where they are automatically\nset up and executed.</p>\n\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "exclusion",
      "member": "Ext.data.validations",
      "doc": "<p>Validates that the given value is present in the configured <a href=\"#/api/Ext.data.validations--list\" rel=\"Ext.data.validations--list\" class=\"docClass\">list</a></p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is not present in the list</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 103,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-method-exclusion",
      "shortDoc": "<p>Validates that the given value is present in the configured <a href=\"#/api/Ext.data.validations--list\" rel=\"Ext.data.validations--list\" class=\"docClass\">list</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "format",
      "member": "Ext.data.validations",
      "doc": "<p>Returns true if the given value passes validation against the configured <a href=\"#/api/Ext.data.validations--matcher\" rel=\"Ext.data.validations--matcher\" class=\"docClass\">matcher</a> regex</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value passes the format validation</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 84,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-method-format",
      "shortDoc": "<p>Returns true if the given value passes validation against the configured <a href=\"#/api/Ext.data.validations--matcher\" rel=\"Ext.data.validations--matcher\" class=\"docClass\">matcher</a> regex</p>\n"
    },
    {
      "tagname": "method",
      "name": "inclusion",
      "member": "Ext.data.validations",
      "doc": "<p>Validates that the given value is present in the configured <a href=\"#/api/Ext.data.validations--list\" rel=\"Ext.data.validations--list\" class=\"docClass\">list</a></p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value is present in the list</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 94,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-method-inclusion",
      "shortDoc": "<p>Validates that the given value is present in the configured <a href=\"#/api/Ext.data.validations--list\" rel=\"Ext.data.validations--list\" class=\"docClass\">list</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "length",
      "member": "Ext.data.validations",
      "doc": "<p>Returns true if the given value is between the configured min and max values</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the value passes validation</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 62,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-method-length",
      "shortDoc": "<p>Returns true if the given value is between the configured min and max values</p>\n"
    },
    {
      "tagname": "method",
      "name": "presence",
      "member": "Ext.data.validations",
      "doc": "<p>Validates that the given value is present</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to validate</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if validation passed</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 48,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-method-presence",
      "shortDoc": "<p>Validates that the given value is present</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "exclusionMessage",
      "member": "Ext.data.validations",
      "type": "String",
      "doc": "<p>The default error message used when an exclusion validation fails</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 41,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-property-exclusionMessage"
    },
    {
      "tagname": "property",
      "name": "formatMessage",
      "member": "Ext.data.validations",
      "type": "Boolean",
      "doc": "<p>The default error message used when a format validation fails</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 27,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-property-formatMessage"
    },
    {
      "tagname": "property",
      "name": "inclusionMessage",
      "member": "Ext.data.validations",
      "type": "String",
      "doc": "<p>The default error message used when an inclusion validation fails</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 34,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-property-inclusionMessage"
    },
    {
      "tagname": "property",
      "name": "lengthMessage",
      "member": "Ext.data.validations",
      "type": "String",
      "doc": "<p>The default error message used when a length validation fails</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 20,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-property-lengthMessage"
    },
    {
      "tagname": "property",
      "name": "presenceMessage",
      "member": "Ext.data.validations",
      "type": "String",
      "doc": "<p>The default error message used when a presence validation fails</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
      "linenr": 13,
      "html_filename": "validations.html",
      "href": "validations.html#Ext-data-validations-property-presenceMessage"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/validations.js",
  "linenr": 1,
  "html_filename": "validations.html",
  "href": "validations.html#Ext-data-validations",
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