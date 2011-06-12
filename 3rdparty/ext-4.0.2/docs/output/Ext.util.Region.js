Ext.data.JsonP.Ext_util_Region({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Region.html#Ext-util-Region-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates a region from the bounding sides. ...",
        "static": false,
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
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "doc": "<p>Creates a region from the bounding sides.</p>\n",
        "owner": "Ext.util.Region",
        "name": "Region",
        "html_filename": "Region.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 40
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-adjust",
        "shortDoc": "Modifies the current region to be adjusted by offsets. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
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
        "name": "adjust",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be adjusted by offsets.</p>\n",
        "linenr": 116,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-constrainTo",
        "shortDoc": "Modifies the current region to be constrained to the targetRegion. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "targetRegion"
          }
        ],
        "name": "constrainTo",
        "owner": "Ext.util.Region",
        "doc": "<p>Modifies the current region to be constrained to the targetRegion.</p>\n",
        "linenr": 102,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-contains",
        "shortDoc": "Checks if this region completely contains the region that is passed in. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "name": "contains",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region completely contains the region that is passed in.</p>\n",
        "linenr": 55,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-copy",
        "shortDoc": "Create a copy of this Region. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [

        ],
        "name": "copy",
        "owner": "Ext.util.Region",
        "doc": "<p>Create a copy of this Region.</p>\n",
        "linenr": 308,
        "return": {
          "type": "Ext.util.Region",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-copyFrom",
        "shortDoc": "Copy the values of another Region to this Region ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Region",
            "optional": false,
            "doc": "<p>region to copy from.</p>\n",
            "name": "The"
          }
        ],
        "name": "copyFrom",
        "owner": "Ext.util.Region",
        "doc": "<p>Copy the values of another Region to this Region</p>\n",
        "linenr": 316,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>This Region</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-equals",
        "shortDoc": "Check whether this region is equivalent to the given region ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "<p>The region to compare with</p>\n",
            "name": "region"
          }
        ],
        "name": "equals",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether this region is equivalent to the given region</p>\n",
        "linenr": 374,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-from",
        "shortDoc": "Creates a Region from a \"box\" Object which contains four numeric properties top, right, bottom and left. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object with <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> properties.</p>\n",
            "name": "o"
          }
        ],
        "name": "from",
        "owner": "Ext.util.Region",
        "doc": "<p>Creates a Region from a \"box\" Object which contains four numeric properties <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code>.</p>\n",
        "linenr": 27,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region The Region constructed based on the passed object</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffset",
        "shortDoc": "Get the offset amount of a point outside the region ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
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
        "name": "getOutOfBoundOffset",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount of a point outside the region</p>\n",
        "linenr": 132,
        "return": {
          "type": "Ext.util.Offset",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetX",
        "shortDoc": "Get the offset amount on the x-axis ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "name": "getOutOfBoundOffsetX",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the x-axis</p>\n",
        "linenr": 155,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-getOutOfBoundOffsetY",
        "shortDoc": "Get the offset amount on the y-axis ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "name": "getOutOfBoundOffsetY",
        "owner": "Ext.util.Region",
        "doc": "<p>Get the offset amount on the y-axis</p>\n",
        "linenr": 170,
        "return": {
          "type": "Number",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-getRegion",
        "shortDoc": "Retrieves an Ext.util.Region for a particular element. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>An element ID, htmlElement or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> representing an element in the document.</p>\n",
            "name": "el"
          }
        ],
        "name": "getRegion",
        "owner": "Ext.util.Region",
        "doc": "<p>Retrieves an <a href=\"#/api/Ext.util.Region\" rel=\"Ext.util.Region\" class=\"docClass\">Ext.util.Region</a> for a particular element.</p>\n",
        "linenr": 17,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>region</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-intersect",
        "shortDoc": "Checks if this region intersects the region passed in. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "name": "intersect",
        "owner": "Ext.util.Region",
        "doc": "<p>Checks if this region intersects the region passed in.</p>\n",
        "linenr": 68,
        "return": {
          "type": "Ext.util.Region/Boolean",
          "doc": "<p>Returns the intersected region or false if there is no intersection.</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-isOutOfBound",
        "shortDoc": "Check whether the point / offset is out of bound ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
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
        "name": "isOutOfBound",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the point / offset is out of bound</p>\n",
        "linenr": 185,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundX",
        "shortDoc": "Check whether the offset is out of bound in the x-axis ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "name": "isOutOfBoundX",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the x-axis</p>\n",
        "linenr": 204,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-isOutOfBoundY",
        "shortDoc": "Check whether the offset is out of bound in the y-axis ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>the offset</p>\n",
            "name": "p"
          }
        ],
        "name": "isOutOfBoundY",
        "owner": "Ext.util.Region",
        "doc": "<p>Check whether the offset is out of bound in the y-axis</p>\n",
        "linenr": 213,
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-round",
        "shortDoc": "Round all the properties of this region ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [

        ],
        "name": "round",
        "owner": "Ext.util.Region",
        "doc": "<p>Round all the properties of this region</p>\n",
        "linenr": 360,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-translateBy",
        "shortDoc": "Translate this region by the given offset amount ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
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
        "name": "translateBy",
        "owner": "Ext.util.Region",
        "doc": "<p>Translate this region by the given offset amount</p>\n",
        "linenr": 339,
        "return": {
          "type": "Ext.util.Region",
          "doc": "<p>this This Region</p>\n"
        },
        "html_filename": "Region.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Region.html#Ext-util-Region-method-union",
        "shortDoc": "Returns the smallest region that contains the current AND targetRegion. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
        "private": false,
        "params": [
          {
            "type": "Ext.util.Region",
            "optional": false,
            "doc": "\n",
            "name": "region"
          }
        ],
        "name": "union",
        "owner": "Ext.util.Region",
        "doc": "<p>Returns the smallest region that contains the current AND targetRegion.</p>\n",
        "linenr": 88,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Region.html"
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
  "href": "Region.html#Ext-util-Region",
  "subclasses": [
    "Ext.util.Point"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/util/Region.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.util.Region",
  "doc": "<p>This class represents a rectangular region in X,Y space, and performs geometric\ntransformations or tests upon the region.</p>\n\n\n<p>This class may be used to compare the document regions occupied by elements.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Region.html",
  "extends": "Object"
});