Ext.data.JsonP.Ext_Shadow({
  "tagname": "class",
  "name": "Ext.Shadow",
  "doc": "<p>Simple class that can provide a shadow effect for any element.  Note that the element MUST be absolutely positioned,\nand the shadow does not provide any shimming.  This should be used only in simple cases -- for more advanced\nfunctionality that can also provide the same shadow effect, see the <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> class.</p>\n",
  "extends": null,
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
      "name": "mode",
      "member": "Ext.Shadow",
      "type": "String",
      "doc": "<p>The shadow display mode.  Supports the following options:<div class=\"mdetail-params\"><ul>\n<li><b><tt>sides</tt></b> : Shadow displays on both sides and bottom only</li>\n<li><b><tt>frame</tt></b> : Shadow displays equally on all four sides</li>\n<li><b><tt>drop</tt></b> : Traditional bottom-right drop shadow</li>\n</ul></div></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 84,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-cfg-mode",
      "shortDoc": "The shadow display mode.  Supports the following options:\nsides : Shadow displays on both sides and bottom only\nframe..."
    },
    {
      "tagname": "cfg",
      "name": "offset",
      "member": "Ext.Shadow",
      "type": "String",
      "doc": "<p>The number of pixels to offset the shadow from the element (defaults to <tt>4</tt>)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 92,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-cfg-offset"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Shadow",
      "member": "Ext.Shadow",
      "doc": "<p>Create a new Shadow</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 1,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-constructor",
      "shortDoc": "<p>Create a new Shadow</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.Shadow",
      "doc": "<p>Hides this shadow</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 181,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-hide",
      "shortDoc": "<p>Hides this shadow</p>\n"
    },
    {
      "tagname": "method",
      "name": "isVisible",
      "member": "Ext.Shadow",
      "doc": "<p>Returns true if the shadow is visible, else false</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 126,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-isVisible",
      "shortDoc": "<p>Returns true if the shadow is visible, else false</p>\n"
    },
    {
      "tagname": "method",
      "name": "realign",
      "member": "Ext.Shadow",
      "doc": "<p>Direct alignment when values are already available. Show must be called at least once before\ncalling this method to ensure it is initialized.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "left",
          "doc": "<p>The target element left position</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "top",
          "doc": "<p>The target element top position</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The target element width</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "height",
          "doc": "<p>The target element height</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 133,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-realign",
      "shortDoc": "Direct alignment when values are already available. Show must be called at least once before\ncalling this method to e..."
    },
    {
      "tagname": "method",
      "name": "setZIndex",
      "member": "Ext.Shadow",
      "doc": "<p>Adjust the z-index of this shadow</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "zindex",
          "doc": "<p>The new z-index</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 192,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-setZIndex",
      "shortDoc": "<p>Adjust the z-index of this shadow</p>\n"
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.Shadow",
      "doc": "<p>Displays the shadow under the target element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "targetEl",
          "doc": "<p>The id or element under which the shadow should display</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
      "linenr": 101,
      "html_filename": "Shadow.html",
      "href": "Shadow.html#Ext-Shadow-method-show",
      "shortDoc": "<p>Displays the shadow under the target element</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Shadow.js",
  "linenr": 1,
  "html_filename": "Shadow.html",
  "href": "Shadow.html#Ext-Shadow",
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