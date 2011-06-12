Ext.data.JsonP.Ext_util_Grouper({
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
        "doc": "<p>The property to sort by. Required unless <a href=\"#/api/Ext.util.Grouper-cfg-sorterFn\" rel=\"Ext.util.Grouper-cfg-sorterFn\" class=\"docClass\">sorterFn</a> is provided.\nThe property is extracted from the object directly and compared for sorting using the built in\ncomparison operators.</p>\n",
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
        "doc": "<p>Optional root property. This is mostly useful when sorting a Store, in which case we set the\nroot to 'data' to make the filter pull the <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a> out of the data object of each item</p>\n",
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
        "doc": "<p>A specific sorter function to execute. Can be passed instead of <a href=\"#/api/Ext.util.Grouper-cfg-property\" rel=\"Ext.util.Grouper-cfg-property\" class=\"docClass\">property</a>.\nThis sorter function allows for any kind of custom/complex comparisons.\nThe sorterFn receives two arguments, the objects being compared. The function should return:</p>\n\n<ul>\n<li>-1 if o1 is \"less than\" o2</li>\n<li>0 if o1 is \"equal\" to o2</li>\n<li>1 if o1 is \"greater than\" o2</li>\n</ul>\n\n",
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
        "href": "Grouper.html#Ext-util-Grouper-method-getGroupString",
        "shortDoc": "Returns the value for grouping to be used. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Grouper.js",
        "private": false,
        "params": [
          {
            "type": "Ext.data.Model",
            "optional": false,
            "doc": "<p>The Model instance</p>\n",
            "name": "instance"
          }
        ],
        "name": "getGroupString",
        "owner": "Ext.util.Grouper",
        "doc": "<p>Returns the value for grouping to be used.</p>\n",
        "linenr": 19,
        "return": {
          "type": "String",
          "doc": "<p>The group string for this model</p>\n"
        },
        "html_filename": "Grouper.html"
      },
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
    "Ext.util.Sorter"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Grouper.html#Ext-util-Grouper",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Grouper.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Grouper",
  "doc": "<p>Represents a single grouper that can be applied to a Store. The grouper works\nin the same fashion as the <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a>.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Grouper.html",
  "extends": "Ext.util.Sorter"
});