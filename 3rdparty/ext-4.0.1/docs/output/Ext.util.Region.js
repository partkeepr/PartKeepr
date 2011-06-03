Ext.data.JsonP.Ext_util_Region({
  "tagname": "class",
  "name": "Ext.util.Region",
  "doc": "<p>Represents a rectangular region and provides a number of utility methods\nto compare regions.</p>\n",
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "Region",
      "member": "Ext.util.Region",
      "doc": "\n",
      "params": [
        {
          "type": "Number",
          "name": "top",
          "doc": "<p>Top</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "right",
          "doc": "<p>Right</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "bottom",
          "doc": "<p>Bottom</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "left",
          "doc": "<p>Left</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 39,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "adjust",
      "member": "Ext.util.Region",
      "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "top",
          "doc": "<p>top offset</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "right",
          "doc": "<p>right offset</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "bottom",
          "doc": "<p>bottom offset</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "left",
          "doc": "<p>left offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 115,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-adjust",
      "shortDoc": "<p>Modifies the current region to be adjusted by offsets.</p>\n"
    },
    {
      "tagname": "method",
      "name": "constrainTo",
      "member": "Ext.util.Region",
      "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "targetRegion",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 101,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-constrainTo",
      "shortDoc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n"
    },
    {
      "tagname": "method",
      "name": "contains",
      "member": "Ext.util.Region",
      "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "region",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 54,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-contains",
      "shortDoc": "<p>Checks if this region completely contains the region that is passed in.</p>\n"
    },
    {
      "tagname": "method",
      "name": "copy",
      "member": "Ext.util.Region",
      "doc": "<p>Copy a new instance</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 307,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-copy",
      "shortDoc": "<p>Copy a new instance</p>\n"
    },
    {
      "tagname": "method",
      "name": "copyFrom",
      "member": "Ext.util.Region",
      "doc": "<p>Copy the values of another Region to this Region</p>\n",
      "params": [
        {
          "type": "Region",
          "name": "The",
          "doc": "<p>region to copy from.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Point",
        "doc": "<p>this This point</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 315,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-copyFrom",
      "shortDoc": "<p>Copy the values of another Region to this Region</p>\n"
    },
    {
      "tagname": "method",
      "name": "equals",
      "member": "Ext.util.Region",
      "doc": "<p>Check whether this region is equivalent to the given region</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "region",
          "doc": "<p>The region to compare with</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 374,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-equals",
      "shortDoc": "<p>Check whether this region is equivalent to the given region</p>\n"
    },
    {
      "tagname": "method",
      "name": "from",
      "member": "Ext.util.Region",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>An object with top, right, bottom, left properties</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "<p>region The region constructed based on the passed object</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 27,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-from",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getOutOfBoundOffset",
      "member": "Ext.util.Region",
      "doc": "<p>Get the offset amount of a point outside the region</p>\n",
      "params": [
        {
          "type": "String",
          "name": "axis",
          "doc": "<p>optional</p>\n",
          "optional": false
        },
        {
          "type": "Ext.util.Point",
          "name": "p",
          "doc": "<p>the point</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Offset",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 131,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
      "shortDoc": "<p>Get the offset amount of a point outside the region</p>\n"
    },
    {
      "tagname": "method",
      "name": "getOutOfBoundOffsetX",
      "member": "Ext.util.Region",
      "doc": "<p>Get the offset amount on the x-axis</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "p",
          "doc": "<p>the offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 154,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
      "shortDoc": "<p>Get the offset amount on the x-axis</p>\n"
    },
    {
      "tagname": "method",
      "name": "getOutOfBoundOffsetY",
      "member": "Ext.util.Region",
      "doc": "<p>Get the offset amount on the y-axis</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "p",
          "doc": "<p>the offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Number",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 169,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
      "shortDoc": "<p>Get the offset amount on the y-axis</p>\n"
    },
    {
      "tagname": "method",
      "name": "getRegion",
      "member": "Ext.util.Region",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>A string, DomElement or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> representing an element\non the page.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "<p>region\nRetrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 16,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-getRegion",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "intersect",
      "member": "Ext.util.Region",
      "doc": "<p>Checks if this region intersects the region passed in.</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "region",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Region/Boolean",
        "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 67,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-intersect",
      "shortDoc": "<p>Checks if this region intersects the region passed in.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isOutOfBound",
      "member": "Ext.util.Region",
      "doc": "<p>Check whether the point / offset is out of bound</p>\n",
      "params": [
        {
          "type": "String",
          "name": "axis",
          "doc": "<p>optional</p>\n",
          "optional": false
        },
        {
          "type": "Ext.util.Point/Number",
          "name": "p",
          "doc": "<p>the point / offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 184,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-isOutOfBound",
      "shortDoc": "<p>Check whether the point / offset is out of bound</p>\n"
    },
    {
      "tagname": "method",
      "name": "isOutOfBoundX",
      "member": "Ext.util.Region",
      "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "p",
          "doc": "<p>the offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 203,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
      "shortDoc": "<p>Check whether the offset is out of bound in the x-axis</p>\n"
    },
    {
      "tagname": "method",
      "name": "isOutOfBoundY",
      "member": "Ext.util.Region",
      "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n",
      "params": [
        {
          "type": "Number",
          "name": "p",
          "doc": "<p>the offset</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 212,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
      "shortDoc": "<p>Check whether the offset is out of bound in the y-axis</p>\n"
    },
    {
      "tagname": "method",
      "name": "round",
      "member": "Ext.util.Region",
      "doc": "<p>Round all the properties of this region</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "<p>this This Region</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 360,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-round",
      "shortDoc": "<p>Round all the properties of this region</p>\n"
    },
    {
      "tagname": "method",
      "name": "toString",
      "member": "Ext.util.Region",
      "doc": "<p>Dump this to an eye-friendly string, great for debugging</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 330,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-toString",
      "shortDoc": "<p>Dump this to an eye-friendly string, great for debugging</p>\n"
    },
    {
      "tagname": "method",
      "name": "translateBy",
      "member": "Ext.util.Region",
      "doc": "<p>Translate this region by the given offset amount</p>\n",
      "params": [
        {
          "type": "Ext.util.Offset/Object",
          "name": "offset",
          "doc": "<p>Object containing the <code>x</code> and <code>y</code> properties.\nOr the x value is using the two argument form.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "The",
          "doc": "<p>y value unless using an Offset object.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.util.Region",
        "doc": "<p>this This Region</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 339,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-translateBy",
      "shortDoc": "<p>Translate this region by the given offset amount</p>\n"
    },
    {
      "tagname": "method",
      "name": "union",
      "member": "Ext.util.Region",
      "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n",
      "params": [
        {
          "type": "Ext.util.Region",
          "name": "region",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
      "linenr": 87,
      "html_filename": "Region.html",
      "href": "Region.html#Ext-util-Region-method-union",
      "shortDoc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/util/Region.js",
  "linenr": 1,
  "html_filename": "Region.html",
  "href": "Region.html#Ext-util-Region",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.util.Point"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});