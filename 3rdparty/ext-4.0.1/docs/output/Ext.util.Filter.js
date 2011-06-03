Ext.data.JsonP.Ext_util_Filter({
  "tagname": "class",
  "name": "Ext.util.Filter",
  "doc": "<p>Represents a filter that can be applied to a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new Ext.util.MixedCollection();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new Ext.util.Filter({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new Ext.util.Filter({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n",
  "extends": "Object",
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
      "name": "anyMatch",
      "member": "Ext.util.Filter",
      "type": "Boolean",
      "doc": "<p>True to allow any match - no regex start/end line anchors will be added. Defaults to false</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 53,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-anyMatch"
    },
    {
      "tagname": "cfg",
      "name": "caseSensitive",
      "member": "Ext.util.Filter",
      "type": "Boolean",
      "doc": "<p>True to make the regex case sensitive (adds 'i' switch to regex). Defaults to false.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 64,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-caseSensitive"
    },
    {
      "tagname": "cfg",
      "name": "exactMatch",
      "member": "Ext.util.Filter",
      "type": "Boolean",
      "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.\nIgnored if anyMatch is true.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 58,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-exactMatch"
    },
    {
      "tagname": "cfg",
      "name": "filterFn",
      "member": "Ext.util.Filter",
      "type": "Function",
      "doc": "<p>A custom filter function which is passed each item in the <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>\nin turn. Should return true to accept each item or false to reject it</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 48,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-filterFn",
      "shortDoc": "A custom filter function which is passed each item in the Ext.util.MixedCollection\nin turn. Should return true to acc..."
    },
    {
      "tagname": "cfg",
      "name": "property",
      "member": "Ext.util.Filter",
      "type": "String",
      "doc": "<p>The property to filter on. Required unless a <a href=\"#/api/Ext.util.Filter--filter\" rel=\"Ext.util.Filter--filter\" class=\"docClass\">filter</a> is passed</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 44,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-property"
    },
    {
      "tagname": "cfg",
      "name": "root",
      "member": "Ext.util.Filter",
      "type": "String",
      "doc": "<p>Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 69,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-cfg-root",
      "shortDoc": "Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Filter",
      "member": "Ext.util.Filter",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
      "linenr": 1,
      "html_filename": "Filter.html",
      "href": "Filter.html#Ext-util-Filter-method-constructor",
      "shortDoc": "\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Filter.js",
  "linenr": 1,
  "html_filename": "Filter.html",
  "href": "Filter.html#Ext-util-Filter",
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