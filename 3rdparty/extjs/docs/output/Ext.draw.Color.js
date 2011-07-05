Ext.data.JsonP.Ext_draw_Color({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Color2.html#Ext-draw-Color",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Color2.html#Ext-draw-Color-cfg-lightnessFactor",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "The default factor to compute the lighter or darker color. ...",
        "static": false,
        "name": "lightnessFactor",
        "owner": "Ext.draw.Color",
        "doc": "<p>The default factor to compute the lighter or darker color. Defaults to 0.2.</p>\n",
        "linenr": 15,
        "html_filename": "Color2.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Red component (0..255)</p>\n",
            "name": "red"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Green component (0..255)</p>\n",
            "name": "green"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Blue component (0..255)</p>\n",
            "name": "blue"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Creates new Color. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.draw.Color",
        "doc": "<p>Creates new Color.</p>\n",
        "linenr": 22,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getBlue",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Get the blue component of the color, in the range 0..255. ...",
        "static": false,
        "name": "getBlue",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the blue component of the color, in the range 0..255.</p>\n",
        "linenr": 52,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Darker factor (0..1), default to 0.2</p>\n",
            "name": "factor"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-getDarker",
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Return a new color that is darker than this color. ...",
        "static": false,
        "name": "getDarker",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return a new color that is darker than this color.</p>\n",
        "linenr": 117,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getGrayscale",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Returns the gray value (0 to 255) of the color. ...",
        "static": false,
        "name": "getGrayscale",
        "owner": "Ext.draw.Color",
        "doc": "<p>Returns the gray value (0 to 255) of the color.</p>\n\n<p>The gray value is calculated using the formula r<em>0.3 + g</em>0.59 + b*0.11.</p>\n",
        "linenr": 219,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getGreen",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Get the green component of the color, in the range 0..255. ...",
        "static": false,
        "name": "getGreen",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the green component of the color, in the range 0..255.</p>\n",
        "linenr": 44,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getHSL",
        "return": {
          "type": "[Number]",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Get the equivalent HSL components of the color. ...",
        "static": false,
        "name": "getHSL",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the equivalent HSL components of the color.</p>\n",
        "linenr": 69,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Lighter factor (0..1), default to 0.2</p>\n",
            "name": "factor"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-getLighter",
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Return a new color that is lighter than this color. ...",
        "static": false,
        "name": "getLighter",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return a new color that is lighter than this color.</p>\n",
        "linenr": 105,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getRGB",
        "return": {
          "type": "[Number]",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Get the RGB values. ...",
        "static": false,
        "name": "getRGB",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the RGB values.</p>\n",
        "linenr": 60,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-getRed",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Get the red component of the color, in the range 0..255. ...",
        "static": false,
        "name": "getRed",
        "owner": "Ext.draw.Color",
        "doc": "<p>Get the red component of the color, in the range 0..255.</p>\n",
        "linenr": 36,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Color2.html#Ext-draw-Color-method-toString",
        "return": {
          "type": "String",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Return the color in the hex format, i.e. ...",
        "static": false,
        "name": "toString",
        "owner": "Ext.draw.Color",
        "doc": "<p>Return the color in the hex format, i.e. '#rrggbb'.</p>\n",
        "linenr": 127,
        "html_filename": "Color2.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.draw.Color",
  "doc": "<p>Represents an RGB color and provides helper functions get\ncolor components in HSL color space.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Color2.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Hue component (0..359)</p>\n",
            "name": "h"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Saturation component (0..1)</p>\n",
            "name": "s"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Lightness component (0..1)</p>\n",
            "name": "l"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-fromHSL",
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Create a new color based on the specified HSL values. ...",
        "static": true,
        "name": "fromHSL",
        "owner": "Ext.draw.Color",
        "doc": "<p>Create a new color based on the specified HSL values.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "linenr": 231,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>Color in string.</p>\n",
            "name": "str"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-fromString",
        "return": {
          "type": "void",
          "doc": "<p>Ext.draw.Color</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Parse the string and create a new color. ...",
        "static": true,
        "name": "fromString",
        "owner": "Ext.draw.Color",
        "doc": "<p>Parse the string and create a new color.</p>\n\n<p>Supported formats: '#rrggbb', '#rgb', and 'rgb(r,g,b)'.</p>\n\n<p>If the string is not recognized, an undefined will be returned instead.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "linenr": 177,
        "html_filename": "Color2.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/[String]",
            "optional": false,
            "doc": "<p>The color value (i.e 'rgb(255, 255, 255)', 'color: #ffffff').\nCan also be an Array, in this case the function handles the first member.</p>\n",
            "name": "color"
          }
        ],
        "href": "Color2.html#Ext-draw-Color-method-toHex",
        "return": {
          "type": "String",
          "doc": "<p>The color in hexadecimal format.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/draw/Color.js",
        "private": false,
        "shortDoc": "Convert a color to hexadecimal format. ...",
        "static": true,
        "name": "toHex",
        "owner": "Ext.draw.Color",
        "doc": "<p>Convert a color to hexadecimal format.</p>\n\n<p><strong>Note:</strong> This method is both static and instance.</p>\n",
        "linenr": 143,
        "html_filename": "Color2.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.Base"
});