Ext.data.JsonP.Ext_util_Region({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [
    "Ext.util.Point"
  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Region.html#Ext-util-Region",
  "members": {
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
            "doc": "<p>Top The topmost pixel of the Region.</p>\n",
            "name": "top"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Right The rightmost pixel of the Region.</p>\n",
            "name": "right"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Bottom The bottom pixel of the Region.</p>\n",
            "name": "bottom"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>Left The leftmost pixel of the Region.</p>\n",
            "name": "left"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Creates a region from the bounding sides. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.Region",
        "doc": "<p>Creates a region from the bounding sides.</p>\n",
        "linenr": 40,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>top offset</p>\n",
            "name": "top"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>right offset</p>\n",
            "name": "right"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>bottom offset</p>\n",
            "name": "bottom"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>left offset</p>\n",
            "name": "left"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-adjust",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Modifies the current region to be adjusted by offsets. ...",
        "static": false,
        "name": "adjust",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n",
        "linenr": 116,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "targetRegion"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-constrainTo",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Modifies the current region to be constrained to the targetRegion. ...",
        "static": false,
        "name": "constrainTo",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n",
        "linenr": 102,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-contains",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Checks if this region completely contains the region that is passed in. ...",
        "static": false,
        "name": "contains",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n",
        "linenr": 55,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Region.html#Ext-util-Region-method-copy",
        "return": {
          "type": "Ext.util.Region",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Create a copy of this Region. ...",
        "static": false,
        "name": "copy",
        "owner": "Ext.util.Region",
        "doc": "<p>Create a copy of this Region.</p>\n",
        "linenr": 308,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Region",
            "optional": false,
            "doc": "<p>region to copy from.</p>\n",
            "name": "The"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-copyFrom",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>This Region</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Copy the values of another Region to this Region ...",
        "static": false,
        "name": "copyFrom",
        "owner": "Ext.util.Region",
        "doc": "<p>Copy the values of another Region to this Region</p>\n",
        "linenr": 316,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "<p>The region to compare with</p>\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-equals",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Check whether this region is equivalent to the given region ...",
        "static": false,
        "name": "equals",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether this region is equivalent to the given region</p>\n",
        "linenr": 374,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>optional</p>\n",
            "name": "axis"
          },
          {
            "type": "Ext.util.Point",
            "optional": false,
            "doc": "<p>the point</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
        "return": {
          "type": "Ext.util.Offset",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Get the offset amount of a point outside the region ...",
        "static": false,
        "name": "getOutOfBoundOffset",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount of a point outside the region</p>\n",
        "linenr": 132,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Get the offset amount on the x-axis ...",
        "static": false,
        "name": "getOutOfBoundOffsetX",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the x-axis</p>\n",
        "linenr": 155,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Get the offset amount on the y-axis ...",
        "static": false,
        "name": "getOutOfBoundOffsetY",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the y-axis</p>\n",
        "linenr": 170,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-intersect",
        "return": {
          "type": "Ext.util.Region/Boolean",
          "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Checks if this region intersects the region passed in. ...",
        "static": false,
        "name": "intersect",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region intersects the region passed in.</p>\n",
        "linenr": 68,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>optional</p>\n",
            "name": "axis"
          },
          {
            "type": "Ext.util.Point/Number",
            "optional": false,
            "doc": "<p>the point / offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBound",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Check whether the point / offset is out of bound ...",
        "static": false,
        "name": "isOutOfBound",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the point / offset is out of bound</p>\n",
        "linenr": 185,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Check whether the offset is out of bound in the x-axis ...",
        "static": false,
        "name": "isOutOfBoundX",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n",
        "linenr": 204,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Check whether the offset is out of bound in the y-axis ...",
        "static": false,
        "name": "isOutOfBoundY",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n",
        "linenr": 213,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Region.html#Ext-util-Region-method-round",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Round all the properties of this region ...",
        "static": false,
        "name": "round",
        "owner": "Ext.util.Region",
        "doc": "<p>Round all the properties of this region</p>\n",
        "linenr": 360,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Offset/Object",
            "optional": false,
            "doc": "<p>Object containing the <code>x</code> and <code>y</code> properties.\nOr the x value is using the two argument form.</p>\n",
            "name": "offset"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>y value unless using an Offset object.</p>\n",
            "name": "The"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-translateBy",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Translate this region by the given offset amount ...",
        "static": false,
        "name": "translateBy",
        "owner": "Ext.util.Region",
        "doc": "<p>Translate this region by the given offset amount</p>\n",
        "linenr": 339,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-union",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Returns the smallest region that contains the current AND targetRegion. ...",
        "static": false,
        "name": "union",
        "owner": "Ext.util.Region",
        "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n",
        "linenr": 88,
        "html_filename": "Region.html"
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
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.util.Region",
  "doc": "<p>This class represents a rectangular region in X,Y space, and performs geometric\ntransformations or tests upon the region.</p>\n\n\n<p>This class may be used to compare the document regions occupied by elements.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Region.html",
  "statics": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object with <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n",
            "name": "o"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-from",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region The Region constructed based on the passed object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Creates a Region from a \"box\" Object which contains four numeric properties top, right, bottom and left. ...",
        "static": true,
        "name": "from",
        "owner": "Ext.util.Region",
        "doc": "<p>Creates a Region from a \"box\" Object which contains four numeric properties <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>\n",
        "linenr": 27,
        "html_filename": "Region.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>An element ID, htmlElement or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> representing an element in the document.</p>\n",
            "name": "el"
          }
        ],
        "href": "Region.html#Ext-util-Region-method-getRegion",
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "shortDoc": "Retrieves an Ext.util.Region for a particular element. ...",
        "static": true,
        "name": "getRegion",
        "owner": "Ext.util.Region",
        "doc": "<p>Retrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n",
        "linenr": 17,
        "html_filename": "Region.html"
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
  "extends": "Object"
});