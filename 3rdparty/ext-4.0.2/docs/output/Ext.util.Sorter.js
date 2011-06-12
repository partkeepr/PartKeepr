Ext.data.JsonP.Ext_util_Sorter({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Sorter.html#Ext-util-Sorter-cfg-direction",
        "shortDoc": "The direction to sort by. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "direction",
        "owner": "Ext.util.Sorter",
        "doc": "<p>The direction to sort by. Defaults to ASC</p>\n",
        "linenr": 87,
        "html_filename": "Sorter.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Sorter.html#Ext-util-Sorter-cfg-property",
        "shortDoc": "The property to sort by. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "property",
        "owner": "Ext.util.Sorter",
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n",
        "linenr": 59,
        "html_filename": "Sorter.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Sorter.html#Ext-util-Sorter-cfg-root",
        "shortDoc": "Optional root property. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "root",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
        "linenr": 76,
        "html_filename": "Sorter.html"
      },
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Sorter.html#Ext-util-Sorter-cfg-sorterFn",
        "shortDoc": "A specific sorter function to execute. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "sorterFn",
        "owner": "Ext.util.Sorter",
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n",
        "linenr": 65,
        "html_filename": "Sorter.html"
      },
      {
        "type": "Function",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Sorter.html#Ext-util-Sorter-cfg-transform",
        "shortDoc": "A function that will be run on each value before\nit is compared in the sorter. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "name": "transform",
        "owner": "Ext.util.Sorter",
        "doc": "<p>A function that will be run on each value before\nit is compared in the sorter. The function will receive a single argument,\nthe value.</p>\n",
        "linenr": 81,
        "html_filename": "Sorter.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Sorter.html#Ext-util-Sorter-method-setDirection",
        "shortDoc": "Set the sorting direction for this sorter. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The direction to sort in. Should be either 'ASC' or 'DESC'.</p>\n",
            "name": "direction"
          }
        ],
        "name": "setDirection",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Set the sorting direction for this sorter.</p>\n",
        "linenr": 152,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Sorter.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Sorter.html#Ext-util-Sorter-method-toggle",
        "shortDoc": "Toggles the sorting direction for this sorter. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "params": [

        ],
        "name": "toggle",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Toggles the sorting direction for this sorter.</p>\n",
        "linenr": 162,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Sorter.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Sorter.html#Ext-util-Sorter-method-updateSortFunction",
        "shortDoc": "Update the sort function for this sorter. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
        "private": false,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>(Optional) A new sorter function for this sorter. If not specified it will use the\ndefault sorting function.</p>\n",
            "name": "fn"
          }
        ],
        "name": "updateSortFunction",
        "owner": "Ext.util.Sorter",
        "doc": "<p>Update the sort function for this sorter.</p>\n",
        "linenr": 171,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Sorter.html"
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
  "href": "Sorter.html#Ext-util-Sorter",
  "subclasses": [
    "Ext.util.Grouper"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Sorter.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Sorter",
  "doc": "<p>Represents a single sorter that can be applied to a Store. The sorter is used\nto compare two values against each other for the purpose of ordering them. Ordering\nis achieved by specifying either:\n- <a href=\"#/api/Ext.util.Sorter-cfg-property\" rel=\"Ext.util.Sorter-cfg-property\" class=\"docClass\">A sorting property</a>\n- <a href=\"#/api/Ext.util.Sorter-cfg-sorterFn\" rel=\"Ext.util.Sorter-cfg-sorterFn\" class=\"docClass\">A sorting function</a></p>\n\n<p>As a contrived example, we can specify a custom sorter that sorts by rank:</p>\n\n<pre><code>Ext.define('Person', {\n    extend: 'Ext.data.Model',\n    fields: ['name', 'rank']\n});\n\nExt.create('Ext.data.Store', {\n    model: 'Person',\n    proxy: 'memory',\n    sorters: [{\n        sorterFn: function(o1, o2){\n            var getRank = function(o){\n                var name = o.get('rank');\n                if (name === 'first') {\n                    return 1;\n                } else if (name === 'second') {\n                    return 2;\n                } else {\n                    return 3;\n                }\n            },\n            rank1 = getRank(o1),\n            rank2 = getRank(o2);\n\n            if (rank1 === rank2) {\n                return 0;\n            }\n\n            return rank1 &lt; rank2 ? -1 : 1;\n        }\n    }],\n    data: [{\n        name: 'Person1',\n        rank: 'second'\n    }, {\n        name: 'Person2',\n        rank: 'third'\n    }, {\n        name: 'Person3',\n        rank: 'first'\n    }] \n});\n</code></pre>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Sorter.html",
  "extends": "Object"
});