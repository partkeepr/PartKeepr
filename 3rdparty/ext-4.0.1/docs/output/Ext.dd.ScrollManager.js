Ext.data.JsonP.Ext_dd_ScrollManager({
  "tagname": "class",
  "name": "Ext.dd.ScrollManager",
  "doc": "<p>Provides automatic scrolling of overflow regions in the page during drag operations.</p>\n\n\n<p>The ScrollManager configs will be used as the defaults for any scroll container registered with it,\nbut you can also override most of the configs per scroll container by adding a\n<tt>ddScrollConfig</tt> object to the target element that contains these properties: <a href=\"#/api/Ext.dd.ScrollManager-property-hthresh\" rel=\"Ext.dd.ScrollManager-property-hthresh\" class=\"docClass\">hthresh</a>,\n<a href=\"#/api/Ext.dd.ScrollManager-property-vthresh\" rel=\"Ext.dd.ScrollManager-property-vthresh\" class=\"docClass\">vthresh</a>, <a href=\"#/api/Ext.dd.ScrollManager-property-increment\" rel=\"Ext.dd.ScrollManager-property-increment\" class=\"docClass\">increment</a> and <a href=\"#/api/Ext.dd.ScrollManager-property-frequency\" rel=\"Ext.dd.ScrollManager-property-frequency\" class=\"docClass\">frequency</a>.  Example usage:\n<pre><code>var el = Ext.get('scroll-ct');\nel.ddScrollConfig = {\n    vthresh: 50,\n    hthresh: -1,\n    frequency: 100,\n    increment: 200\n};\nExt.dd.ScrollManager.register(el);\n</code></pre>\n<b>Note: This class uses \"Point Mode\" and is untested in \"Intersect Mode\".</b>\n\n",
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
      "name": "refreshCache",
      "member": "Ext.dd.ScrollManager",
      "doc": "<p>Manually trigger a cache refresh.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 211,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-method-refreshCache",
      "shortDoc": "<p>Manually trigger a cache refresh.</p>\n"
    },
    {
      "tagname": "method",
      "name": "register",
      "member": "Ext.dd.ScrollManager",
      "doc": "<p>Registers new overflow element(s) to auto scroll</p>\n",
      "params": [
        {
          "type": "Mixed/Array",
          "name": "el",
          "doc": "<p>The id of or the element to be scrolled or an array of either</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 136,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-method-register",
      "shortDoc": "<p>Registers new overflow element(s) to auto scroll</p>\n"
    },
    {
      "tagname": "method",
      "name": "unregister",
      "member": "Ext.dd.ScrollManager",
      "doc": "<p>Unregisters overflow element(s) so they are no longer scrolled</p>\n",
      "params": [
        {
          "type": "Mixed/Array",
          "name": "el",
          "doc": "<p>The id of or the element to be removed or an array of either</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 151,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-method-unregister",
      "shortDoc": "<p>Unregisters overflow element(s) so they are no longer scrolled</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "animDuration",
      "member": "Ext.dd.ScrollManager",
      "type": "Number",
      "doc": "<p>The animation duration in seconds -\nMUST BE less than Ext.dd.ScrollManager.frequency! (defaults to .4)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 197,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animDuration"
    },
    {
      "tagname": "property",
      "name": "animate",
      "member": "Ext.dd.ScrollManager",
      "type": "Boolean",
      "doc": "<p>True to animate the scroll (defaults to true)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 191,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-animate"
    },
    {
      "tagname": "property",
      "name": "ddGroup",
      "member": "Ext.dd.ScrollManager",
      "type": "String",
      "doc": "<p>The named drag drop <a href=\"#/api/Ext.dd.DragSource-cfg-ddGroup\" rel=\"Ext.dd.DragSource-cfg-ddGroup\" class=\"docClass\">group</a> to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then container scrolling will only occur when a dragged object is in the same ddGroup.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 204,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-ddGroup",
      "shortDoc": "The named drag drop group to which this container belongs (defaults to undefined).\nIf a ddGroup is specified, then co..."
    },
    {
      "tagname": "property",
      "name": "frequency",
      "member": "Ext.dd.ScrollManager",
      "type": "Number",
      "doc": "<p>The frequency of scrolls in milliseconds (defaults to 500)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 185,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-frequency"
    },
    {
      "tagname": "property",
      "name": "hthresh",
      "member": "Ext.dd.ScrollManager",
      "type": "Number",
      "doc": "<p>The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 172,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-hthresh",
      "shortDoc": "The number of pixels from the right or left edge of a container the pointer needs to be to\ntrigger scrolling (default..."
    },
    {
      "tagname": "property",
      "name": "increment",
      "member": "Ext.dd.ScrollManager",
      "type": "Number",
      "doc": "<p>The number of pixels to scroll in each scroll increment (defaults to 100)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 179,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-increment"
    },
    {
      "tagname": "property",
      "name": "vthresh",
      "member": "Ext.dd.ScrollManager",
      "type": "Number",
      "doc": "<p>The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (defaults to 25)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
      "linenr": 166,
      "html_filename": "ScrollManager.html",
      "href": "ScrollManager.html#Ext-dd-ScrollManager-property-vthresh",
      "shortDoc": "The number of pixels from the top or bottom edge of a container the pointer needs to be to\ntrigger scrolling (default..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/ScrollManager.js",
  "linenr": 1,
  "html_filename": "ScrollManager.html",
  "href": "ScrollManager.html#Ext-dd-ScrollManager",
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