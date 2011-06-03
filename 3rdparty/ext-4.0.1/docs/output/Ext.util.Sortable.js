Ext.data.JsonP.Ext_util_Sortable({
  "tagname": "class",
  "name": "Ext.util.Sortable",
  "doc": "<p>A mixin which allows a data component to be sorted. This is used by e.g. <a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> and <a href=\"#/api/Ext.data.TreeStore\" rel=\"Ext.data.TreeStore\" class=\"docClass\">Ext.data.TreeStore</a>.</p>\n\n<p>*NOTE**: This mixin is mainly for internal library use and most users should not need to use it directly. It\nis more likely you will want to use one of the component classes that import this mixin, such as\n<a href=\"#/api/Ext.data.Store\" rel=\"Ext.data.Store\" class=\"docClass\">Ext.data.Store</a> or <a href=\"#/api/Ext.data.TreeStore\" rel=\"Ext.data.TreeStore\" class=\"docClass\">Ext.data.TreeStore</a>.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Tommy Maintz <tommy@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "initSortable",
      "member": "Ext.util.Sortable",
      "doc": "<p>Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own initialization.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 37,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-initSortable",
      "shortDoc": "Performs initialization of this mixin. Component classes using this mixin should call this method\nduring their own in..."
    },
    {
      "tagname": "method",
      "name": "sort",
      "member": "Ext.util.Sortable",
      "doc": "<p>Sorts the data in the Store by one or more of its properties. Example usage:</p>\n\n\n<pre><code>//sort by a single field\nmyStore.sort('myField', 'DESC');\n\n//sorting by multiple fields\nmyStore.sort([\n    {\n        property : 'age',\n        direction: 'ASC'\n    },\n    {\n        property : 'name',\n        direction: 'DESC'\n    }\n]);\n</code></pre>\n\n\n<p>Internally, Store converts the passed arguments into an array of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Ext.util.Sorter</a> instances, and delegates the actual\nsorting to its internal <a href=\"#/api/Ext.util.MixedCollection\" rel=\"Ext.util.MixedCollection\" class=\"docClass\">Ext.util.MixedCollection</a>.</p>\n\n\n<p>When passing a single string argument to sort, Store maintains a ASC/DESC toggler per field, so this code:</p>\n\n\n<pre><code>store.sort('myField');\nstore.sort('myField');\n     </code></pre>\n\n\n<p>Is equivalent to this code, because Store handles the toggling automatically:</p>\n\n\n<pre><code>store.sort('myField', 'ASC');\nstore.sort('myField', 'DESC');\n</code></pre>\n\n",
      "params": [
        {
          "type": "String|Array",
          "name": "sorters",
          "doc": "<p>Either a string name of one of the fields in this Store's configured <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a>,\nor an Array of sorter configurations.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "direction",
          "doc": "<p>The overall direction to sort the data by. Defaults to \"ASC\".</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "where",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "doSort",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 59,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-method-sort",
      "shortDoc": "Sorts the data in the Store by one or more of its properties. Example usage:\n\n\n//sort by a single field\nmyStore.sort(..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "defaultSortDirection",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The default sort direction to use if one is not specified (defaults to \"ASC\")</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 20,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-defaultSortDirection"
    },
    {
      "tagname": "property",
      "name": "isSortable",
      "member": "Ext.util.Sortable",
      "type": "Boolean",
      "doc": "<p>Flag denoting that this object is sortable. Always true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 13,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-isSortable"
    },
    {
      "tagname": "property",
      "name": "sortRoot",
      "member": "Ext.util.Sortable",
      "type": "String",
      "doc": "<p>The property in each item that contains the data to sort. (defaults to null)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 31,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sortRoot"
    },
    {
      "tagname": "property",
      "name": "sorters",
      "member": "Ext.util.Sortable",
      "type": "Ext.util.MixedCollection",
      "doc": "<p>The collection of <a href=\"#/api/Ext.util.Sorter\" rel=\"Ext.util.Sorter\" class=\"docClass\">Sorters</a> currently applied to this Store</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
      "linenr": 45,
      "html_filename": "Sortable.html",
      "href": "Sortable.html#Ext-util-Sortable-property-sorters"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Sortable.js",
  "linenr": 1,
  "html_filename": "Sortable.html",
  "href": "Sortable.html#Ext-util-Sortable",
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
    "Ext.data.AbstractStore",
    "Ext.util.MixedCollection"
  ],
  "allMixins": [

  ]
});