Ext.data.JsonP.Ext_data_SortTypes({
  "tagname": "class",
  "name": "Ext.data.SortTypes",
  "doc": "<p>This class defines a series of static methods that are used on a\n<a href=\"#/api/Ext.data.Field\" rel=\"Ext.data.Field\" class=\"docClass\">Ext.data.Field</a> for performing sorting. The methods cast the\nunderlying values into a data type that is appropriate for sorting on\nthat particular field.  If a <a href=\"#/api/Ext.data.Field-cfg-type\" rel=\"Ext.data.Field-cfg-type\" class=\"docClass\">Ext.data.Field.type</a> is specified,\nthe sortType will be set to a sane default if the sortType is not\nexplicitly defined on the field. The sortType will make any necessary\nmodifications to the value and return it.</p>\n\n<ul>\n<li><b>asText</b> - Removes any tags and converts the value to a string</li>\n<li><b>asUCText</b> - Removes any tags and converts the value to an uppercase string</li>\n<li><b>asUCText</b> - Converts the value to an uppercase string</li>\n<li><b>asDate</b> - Converts the value into Unix epoch time</li>\n<li><b>asFloat</b> - Converts the value to a floating point number</li>\n<li><b>asInt</b> - Converts the value to an integer number</li>\n</ul>\n\n\n<p>\nIt is also possible to create a custom sortType that can be used throughout\nan application.\n<pre><code>Ext.apply(Ext.data.SortTypes, {\n    asPerson: function(person){\n        // expects an object with a first and last name property\n        return person.lastName.toUpperCase() + person.firstName.toLowerCase();\n    }    \n});\n\nExt.define('Employee', {\n    extend: 'Ext.data.Model',\n    fields: [{\n        name: 'person',\n        sortType: 'asPerson'\n    }, {\n        name: 'salary',\n        type: 'float' // sortType set to asFloat\n    }]\n});\n</code></pre>\n</p>\n\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Evan Trimboli <evan@sencha.com>",
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "asDate",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Date sorting</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 91,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asDate",
      "shortDoc": "<p>Date sorting</p>\n"
    },
    {
      "tagname": "method",
      "name": "asFloat",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Float sorting</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Float",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 106,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asFloat",
      "shortDoc": "<p>Float sorting</p>\n"
    },
    {
      "tagname": "method",
      "name": "asInt",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Integer sorting</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 116,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asInt",
      "shortDoc": "<p>Integer sorting</p>\n"
    },
    {
      "tagname": "method",
      "name": "asText",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Strips all HTML tags to sort on text only</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 64,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asText",
      "shortDoc": "<p>Strips all HTML tags to sort on text only</p>\n"
    },
    {
      "tagname": "method",
      "name": "asUCString",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Case insensitive string</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 82,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asUCString",
      "shortDoc": "<p>Case insensitive string</p>\n"
    },
    {
      "tagname": "method",
      "name": "asUCText",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Strips all HTML tags to sort on text only - Case insensitive</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 73,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-asUCText",
      "shortDoc": "<p>Strips all HTML tags to sort on text only - Case insensitive</p>\n"
    },
    {
      "tagname": "method",
      "name": "none",
      "member": "Ext.data.SortTypes",
      "doc": "<p>Default sort that does nothing</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "s",
          "doc": "<p>The value being converted</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The comparison value</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 48,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-method-none",
      "shortDoc": "<p>Default sort that does nothing</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "stripTagsRE",
      "member": "Ext.data.SortTypes",
      "type": "RegExp",
      "doc": "<p>The regular expression used to strip tags</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
      "linenr": 57,
      "html_filename": "SortTypes.html",
      "href": "SortTypes.html#Ext-data-SortTypes-property-stripTagsRE"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/SortTypes.js",
  "linenr": 1,
  "html_filename": "SortTypes.html",
  "href": "SortTypes.html#Ext-data-SortTypes",
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