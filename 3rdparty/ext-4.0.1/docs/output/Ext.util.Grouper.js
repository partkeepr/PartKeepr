Ext.data.JsonP.Ext_util_Grouper({
  "tagname": "class",
  "name": "Ext.util.Grouper",
  "doc": "\n",
  "extends": "Ext.util.Sorter",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "direction",
      "member": "Ext.util.Sorter",
      "type": "String",
      "doc": "<p>The direction to sort by. Defaults to ASC</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sorter.js",
      "linenr": 27,
      "html_filename": "Sorter.html",
      "href": "Sorter.html#Ext-util-Sorter-cfg-direction"
    },
    {
      "tagname": "cfg",
      "name": "property",
      "member": "Ext.util.Sorter",
      "type": "String",
      "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Grouper--sorter\" rel=\"Ext.util.Grouper--sorter\" class=\"docClass\">sorter</a> is provided</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sorter.js",
      "linenr": 8,
      "html_filename": "Sorter.html",
      "href": "Sorter.html#Ext-util-Sorter-cfg-property"
    },
    {
      "tagname": "cfg",
      "name": "root",
      "member": "Ext.util.Sorter",
      "type": "String",
      "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sorter.js",
      "linenr": 16,
      "html_filename": "Sorter.html",
      "href": "Sorter.html#Ext-util-Sorter-cfg-root",
      "shortDoc": "Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make t..."
    },
    {
      "tagname": "cfg",
      "name": "sorterFn",
      "member": "Ext.util.Sorter",
      "type": "Function",
      "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sorter.js",
      "linenr": 12,
      "html_filename": "Sorter.html",
      "href": "Sorter.html#Ext-util-Sorter-cfg-sorterFn"
    },
    {
      "tagname": "cfg",
      "name": "transform",
      "member": "Ext.util.Sorter",
      "type": "Function",
      "doc": "<p>A function that will be run on each value before\nit is compared in the sorter. The function will receive a single argument,\nthe value.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sorter.js",
      "linenr": 21,
      "html_filename": "Sorter.html",
      "href": "Sorter.html#Ext-util-Sorter-cfg-transform",
      "shortDoc": "A function that will be run on each value before\nit is compared in the sorter. The function will receive a single arg..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "getGroupString",
      "member": "Ext.util.Grouper",
      "doc": "<p>Function description</p>\n",
      "params": [
        {
          "type": "Ext.data.Model",
          "name": "instance",
          "doc": "<p>The Model instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The group string for this model</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Grouper.js",
      "linenr": 14,
      "html_filename": "Grouper.html",
      "href": "Grouper.html#Ext-util-Grouper-method-getGroupString",
      "shortDoc": "<p>Function description</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Grouper.js",
  "linenr": 1,
  "html_filename": "Grouper.html",
  "href": "Grouper.html#Ext-util-Grouper",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.util.Sorter"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});