Ext.data.JsonP.Ext_draw_Color({
  "tagname": "class",
  "name": "Ext.draw.Color",
  "doc": "<p>Represents an RGB color and provides helper functions get\ncolor components in HSL color space.</p>\n",
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
      "name": "lightnessFactor",
      "member": "Ext.draw.Color",
      "type": "Number",
      "doc": "<p>The default factor to compute the lighter or darker color. Defaults to 0.2.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 18,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-cfg-lightnessFactor"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Color",
      "member": "Ext.draw.Color",
      "doc": "\n",
      "params": [
        {
          "type": "Number",
          "name": "red",
          "doc": "<p>Red component (0..255)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "green",
          "doc": "<p>Green component (0..255)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "blue",
          "doc": "<p>Blue component (0..255)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 25,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "fromHSL",
      "member": "Ext.draw.Color",
      "doc": "<p>Create a new color based on the specified HSL values.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "h",
          "doc": "<p>Hue component (0..359)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "s",
          "doc": "<p>Saturation component (0..1)</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "l",
          "doc": "<p>Lightness component (0..1)</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.draw.Color</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 228,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-fromHSL",
      "shortDoc": "<p>Create a new color based on the specified HSL values.</p>\n"
    },
    {
      "tagname": "method",
      "name": "fromString",
      "member": "Ext.draw.Color",
      "doc": "<p>Parse the string and create a new color.</p>\n\n<p>Supported formats: '#rrggbb', '#rgb', and 'rgb(r,g,b)'.</p>\n\n<p>If the string is not recognized, an undefined will be returned instead.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "str",
          "doc": "<p>Color in string.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.draw.Color</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 177,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-fromString",
      "shortDoc": "Parse the string and create a new color.\n\nSupported formats: '#rrggbb', '#rgb', and 'rgb(r,g,b)'.\n\nIf the string is n..."
    },
    {
      "tagname": "method",
      "name": "getBlue",
      "member": "Ext.draw.Color",
      "doc": "<p>Get the blue component of the color, in the range 0..255.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 55,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getBlue",
      "shortDoc": "<p>Get the blue component of the color, in the range 0..255.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDarker",
      "member": "Ext.draw.Color",
      "doc": "<p>Return a new color that is darker than this color.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "factor",
          "doc": "<p>Darker factor (0..1), default to 0.2</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.draw.Color</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 120,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getDarker",
      "shortDoc": "<p>Return a new color that is darker than this color.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getGrayscale",
      "member": "Ext.draw.Color",
      "doc": "<p>Returns the gray value (0 to 255) of the color.</p>\n\n<p>The gray value is calculated using the formula r<em>0.3 + g</em>0.59 + b*0.11.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 216,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getGrayscale",
      "shortDoc": "<p>Returns the gray value (0 to 255) of the color.</p>\n\n<p>The gray value is calculated using the formula r<em>0.3 + g</em>0.59 + b*0.11.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getGreen",
      "member": "Ext.draw.Color",
      "doc": "<p>Get the green component of the color, in the range 0..255.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 47,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getGreen",
      "shortDoc": "<p>Get the green component of the color, in the range 0..255.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getHSL",
      "member": "Ext.draw.Color",
      "doc": "<p>Get the equivalent HSL components of the color.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 72,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getHSL",
      "shortDoc": "<p>Get the equivalent HSL components of the color.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getLighter",
      "member": "Ext.draw.Color",
      "doc": "<p>Return a new color that is lighter than this color.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "factor",
          "doc": "<p>Lighter factor (0..1), default to 0.2</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.draw.Color</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 108,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getLighter",
      "shortDoc": "<p>Return a new color that is lighter than this color.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRGB",
      "member": "Ext.draw.Color",
      "doc": "<p>Get the RGB values.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 63,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getRGB",
      "shortDoc": "<p>Get the RGB values.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRed",
      "member": "Ext.draw.Color",
      "doc": "<p>Get the red component of the color, in the range 0..255.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 39,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-getRed",
      "shortDoc": "<p>Get the red component of the color, in the range 0..255.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toHex",
      "member": "Ext.draw.Color",
      "doc": "<p>Convert a color to hexadecimal format.</p>\n",
      "params": [
        {
          "type": "String|Array",
          "name": "color",
          "doc": "<p>The color value (i.e 'rgb(255, 255, 255)', 'color: #ffffff').\nCan also be an Array, in this case the function handles the first member.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The color in hexadecimal format.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 146,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-toHex",
      "shortDoc": "<p>Convert a color to hexadecimal format.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toString",
      "member": "Ext.draw.Color",
      "doc": "<p>Return the color in the hex format, i.e. '#rrggbb'.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
      "linenr": 130,
      "html_filename": "Color2.html",
      "href": "Color2.html#Ext-draw-Color-method-toString",
      "shortDoc": "<p>Return the color in the hex format, i.e. '#rrggbb'.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/draw/Color.js",
  "linenr": 1,
  "html_filename": "Color2.html",
  "href": "Color2.html#Ext-draw-Color",
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