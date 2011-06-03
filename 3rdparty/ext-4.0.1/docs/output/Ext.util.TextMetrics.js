Ext.data.JsonP.Ext_util_TextMetrics({
  "tagname": "class",
  "name": "Ext.util.TextMetrics",
  "doc": "<p>\nProvides precise pixel measurements for blocks of text so that you can determine exactly how high and\nwide, in pixels, a given block of text will be. Note that when measuring text, it should be plain text and\nshould not contain any HTML, otherwise it may not be measured correctly.</p>\n\n\n<p></p>\n\n<p>The measurement works by copying the relevant CSS styles that can affect the font related display, \nthen checking the size of an element that is auto-sized. Note that if the text is multi-lined, you must \nprovide a <b>fixed width</b> when doing the measurement.</p>\n\n\n\n\n<p>\nIf multiple measurements are being done on the same element, you create a new instance to initialize \nto avoid the overhead of copying the styles to the element repeatedly.\n</p>\n\n",
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "TextMetrics",
      "member": "Ext.util.TextMetrics",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "bindTo",
          "doc": "<p>The element to bind to.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "fixedWidth",
          "doc": "<p>A fixed width to apply to the measuring element.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 50,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "bind",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Binds this TextMetrics instance to a new element</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 86,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-bind",
      "shortDoc": "<p>Binds this TextMetrics instance to a new element</p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Destroy this instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 127,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-destroy",
      "shortDoc": "<p>Destroy this instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "getHeight",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Returns the measured height of the specified text</p>\n",
      "params": [
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to measure</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>height The height in pixels</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 118,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-getHeight",
      "shortDoc": "<p>Returns the measured height of the specified text</p>\n"
    },
    {
      "tagname": "method",
      "name": "getSize",
      "member": "Ext.util.TextMetrics",
      "doc": "<p><b>Only available on the instance returned from <a href=\"#/api/Ext.util.TextMetrics--createInstance\" rel=\"Ext.util.TextMetrics--createInstance\" class=\"docClass\">createInstance</a>, <u>not</u> on the singleton.</b></p>\n\n\n<p>Returns the size of the specified text based on the internal element's style and width properties</p>\n",
      "params": [
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to measure</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing the text's size {width: (width), height: (height)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 70,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-getSize",
      "shortDoc": "Only available on the instance returned from createInstance, not on the singleton.\n\n\nReturns the size of the specifie..."
    },
    {
      "tagname": "method",
      "name": "getWidth",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Returns the measured width of the specified text</p>\n",
      "params": [
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to measure</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>width The width in pixels</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 108,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-getWidth",
      "shortDoc": "<p>Returns the measured width of the specified text</p>\n"
    },
    {
      "tagname": "method",
      "name": "measure",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Measures the size of the specified text</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The element, dom node or id from which to copy existing CSS styles\nthat can affect the size of the rendered text</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to measure</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "fixedWidth",
          "doc": "<p>(optional) If the text will be multiline, you have to set a fixed width\nin order to accurately measure the text height</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>An object containing the text's size {width: (width), height: (height)}</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 19,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-measure",
      "shortDoc": "<p>Measures the size of the specified text</p>\n"
    },
    {
      "tagname": "method",
      "name": "setFixedWidth",
      "member": "Ext.util.TextMetrics",
      "doc": "<p>Sets a fixed width on the internal measurement element.  If the text will be multiline, you have\nto set a fixed width in order to accurately measure the text height.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "width",
          "doc": "<p>The width to set on the element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
      "linenr": 99,
      "html_filename": "TextMetrics.html",
      "href": "TextMetrics.html#Ext-util-TextMetrics-method-setFixedWidth",
      "shortDoc": "Sets a fixed width on the internal measurement element.  If the text will be multiline, you have\nto set a fixed width..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/TextMetrics.js",
  "linenr": 1,
  "html_filename": "TextMetrics.html",
  "href": "TextMetrics.html#Ext-util-TextMetrics",
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