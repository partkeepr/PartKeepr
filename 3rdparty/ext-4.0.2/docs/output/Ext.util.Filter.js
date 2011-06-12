Ext.data.JsonP.Ext_util_Filter({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-anyMatch",
        "shortDoc": "True to allow any match - no regex start/end line anchors will be added. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "anyMatch",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to allow any match - no regex start/end line anchors will be added. Defaults to false</p>\n",
        "linenr": 51,
        "html_filename": "Filter.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-caseSensitive",
        "shortDoc": "True to make the regex case sensitive (adds 'i' switch to regex). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "caseSensitive",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to make the regex case sensitive (adds 'i' switch to regex). Defaults to false.</p>\n",
        "linenr": 62,
        "html_filename": "Filter.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-exactMatch",
        "shortDoc": "True to force exact match (^ and $ characters added to the regex). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "exactMatch",
        "owner": "Ext.util.Filter",
        "doc": "<p>True to force exact match (^ and $ characters added to the regex). Defaults to false.\nIgnored if anyMatch is true.</p>\n",
        "linenr": 56,
        "html_filename": "Filter.html"
      },
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-filterFn",
        "shortDoc": "A custom filter function which is passed each item in the Ext.util.MixedCollection\nin turn. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "filterFn",
        "owner": "Ext.util.Filter",
        "doc": "<p>A custom filter function which is passed each item in the <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>\nin turn. Should return true to accept each item or false to reject it</p>\n",
        "linenr": 46,
        "html_filename": "Filter.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-property",
        "shortDoc": "The property to filter on. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "property",
        "owner": "Ext.util.Filter",
        "doc": "<p>The property to filter on. Required unless a <a href=\"#/api/Ext.util.Filter-cfg-filterFn\" rel=\"Ext.util.Filter-cfg-filterFn\" class=\"docClass\">filterFn</a> is passed</p>\n",
        "linenr": 42,
        "html_filename": "Filter.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Filter.html#Ext-util-Filter-cfg-root",
        "shortDoc": "Optional root property. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "private": false,
        "name": "root",
        "owner": "Ext.util.Filter",
        "doc": "<p>Optional root property. This is mostly useful when filtering a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Filter-cfg-property\" rel=\"Ext.util.Filter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
        "linenr": 67,
        "html_filename": "Filter.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Filter.html#Ext-util-Filter-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Filter. ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
        "doc": "<p>Creates new Filter.</p>\n",
        "owner": "Ext.util.Filter",
        "name": "Filter",
        "html_filename": "Filter.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 72
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
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Filter.html#Ext-util-Filter",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Filter.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Filter",
  "doc": "<p>Represents a filter that can be applied to a <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">MixedCollection</a>. Can either simply\nfilter on a property/value pair or pass in a filter function with custom logic. Filters are always used in the context\nof MixedCollections, though <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Store</a>s frequently create them when filtering and searching on their\nrecords. Example usage:</p>\n\n\n<pre><code>//set up a fictional MixedCollection containing a few people to filter on\nvar allNames = new Ext.util.MixedCollection();\nallNames.addAll([\n    {id: 1, name: 'Ed',    age: 25},\n    {id: 2, name: 'Jamie', age: 37},\n    {id: 3, name: 'Abe',   age: 32},\n    {id: 4, name: 'Aaron', age: 26},\n    {id: 5, name: 'David', age: 32}\n]);\n\nvar ageFilter = new Ext.util.Filter({\n    property: 'age',\n    value   : 32\n});\n\nvar longNameFilter = new Ext.util.Filter({\n    filterFn: function(item) {\n        return item.name.length > 4;\n    }\n});\n\n//a new MixedCollection with the 3 names longer than 4 characters\nvar longNames = allNames.filter(longNameFilter);\n\n//a new MixedCollection with the 2 people of age 24:\nvar youngFolk = allNames.filter(ageFilter);\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Filter.html",
  "extends": "Object"
});