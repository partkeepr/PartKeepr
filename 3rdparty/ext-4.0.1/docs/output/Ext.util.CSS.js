Ext.data.JsonP.Ext_util_CSS({
  "tagname": "class",
  "name": "Ext.util.CSS",
  "doc": "<p>Utility class for manipulating CSS rules</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "createStyleSheet",
      "member": "Ext.util.CSS",
      "doc": "<p>Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD of the document.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cssText",
          "doc": "<p>The text containing the css rules</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "id",
          "doc": "<p>An id to add to the stylesheet for later removal</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "StyleSheet",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 22,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-createStyleSheet",
      "shortDoc": "Creates a stylesheet from a text blob of rules.\nThese rules will be wrapped in a STYLE tag and appended to the HEAD o..."
    },
    {
      "tagname": "method",
      "name": "getRule",
      "member": "Ext.util.CSS",
      "doc": "<p>Gets an an individual CSS rule by selector(s)</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "selector",
          "doc": "<p>The CSS selector or an array of selectors to try. The first selector that is found is returned.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "refreshCache",
          "doc": "<p>true to refresh the internal cache if you have recently updated any rules or added styles dynamically</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "CSSRule",
        "doc": "<p>The CSS rule or null if one is not found</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 141,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-getRule",
      "shortDoc": "<p>Gets an an individual CSS rule by selector(s)</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRules",
      "member": "Ext.util.CSS",
      "doc": "<p>Gets all css rules for the document</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "refreshCache",
          "doc": "<p>true to refresh the internal cache</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object (hash) of rules indexed by selector</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 118,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-getRules",
      "shortDoc": "<p>Gets all css rules for the document</p>\n"
    },
    {
      "tagname": "method",
      "name": "refreshCache",
      "member": "Ext.util.CSS",
      "doc": "<p>Refresh the rule cache if you have dynamically added stylesheets</p>\n",
      "params": [

      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object (hash) of rules indexed by selector</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 83,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-refreshCache",
      "shortDoc": "<p>Refresh the rule cache if you have dynamically added stylesheets</p>\n"
    },
    {
      "tagname": "method",
      "name": "removeStyleSheet",
      "member": "Ext.util.CSS",
      "doc": "<p>Removes a style or link tag by id</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of the tag</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 56,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-removeStyleSheet",
      "shortDoc": "<p>Removes a style or link tag by id</p>\n"
    },
    {
      "tagname": "method",
      "name": "swapStyleSheet",
      "member": "Ext.util.CSS",
      "doc": "<p>Dynamically swaps an existing stylesheet reference for a new one</p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id of an existing link tag to remove</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "url",
          "doc": "<p>The href of the new stylesheet to include</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 67,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-swapStyleSheet",
      "shortDoc": "<p>Dynamically swaps an existing stylesheet reference for a new one</p>\n"
    },
    {
      "tagname": "method",
      "name": "updateRule",
      "member": "Ext.util.CSS",
      "doc": "<p>Updates a rule property</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "selector",
          "doc": "<p>If it's an array it tries each selector until it finds one. Stops immediately once one is found.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "property",
          "doc": "<p>The css property</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The new value for the property</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>true If a rule was found and updated</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
      "linenr": 160,
      "html_filename": "CSS.html",
      "href": "CSS.html#Ext-util-CSS-method-updateRule",
      "shortDoc": "<p>Updates a rule property</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/CSS.js",
  "linenr": 1,
  "html_filename": "CSS.html",
  "href": "CSS.html#Ext-util-CSS",
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