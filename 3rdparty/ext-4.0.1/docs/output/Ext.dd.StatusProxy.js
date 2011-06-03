Ext.data.JsonP.Ext_dd_StatusProxy({
  "tagname": "class",
  "name": "Ext.dd.StatusProxy",
  "doc": "<p>A specialized drag proxy that supports a drop status icon, <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> styles and auto-repair.  This is the\ndefault drag proxy used by all Ext.dd components.</p>\n",
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
      "name": "dropAllowed",
      "member": "Ext.dd.StatusProxy",
      "type": "String",
      "doc": "<p>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 32,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropAllowed"
    },
    {
      "tagname": "cfg",
      "name": "dropNotAllowed",
      "member": "Ext.dd.StatusProxy",
      "type": "String",
      "doc": "<p>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 37,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropNotAllowed"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "StatusProxy",
      "member": "Ext.dd.StatusProxy",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
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
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 1,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getEl",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Returns the underlying proxy <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.Layer",
        "doc": "<p>el</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 87,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getEl",
      "shortDoc": "<p>Returns the underlying proxy <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getGhost",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Returns the ghost element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.core.Element",
        "doc": "<p>el</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 95,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getGhost",
      "shortDoc": "<p>Returns the ghost element</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Hides the proxy</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "clear",
          "doc": "<p>True to reset the status and clear the ghost contents, false to preserve them</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 103,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-hide",
      "shortDoc": "<p>Hides the proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "repair",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operation by the item being dragged.</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "xy",
          "doc": "<p>The XY position of the element ([x, y])</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>The function to call after the repair is complete.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 138,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-repair",
      "shortDoc": "Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operat..."
    },
    {
      "tagname": "method",
      "name": "reset",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Resets the status indicator to the default dropNotAllowed value</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "clearGhost",
          "doc": "<p>True to also remove all content from the ghost, false to preserve it</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 56,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-reset",
      "shortDoc": "<p>Resets the status indicator to the default dropNotAllowed value</p>\n"
    },
    {
      "tagname": "method",
      "name": "setStatus",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target element.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cssClass",
          "doc": "<p>The css class for the new drop status indicator image</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 43,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-setStatus",
      "shortDoc": "Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target e..."
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Displays this proxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 123,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-show",
      "shortDoc": "<p>Displays this proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "stop",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Stops the repair animation if it's currently running</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 114,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-stop",
      "shortDoc": "<p>Stops the repair animation if it's currently running</p>\n"
    },
    {
      "tagname": "method",
      "name": "sync",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Force the Layer to sync its shadow and shim positions to the element</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 131,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-sync",
      "shortDoc": "<p>Force the Layer to sync its shadow and shim positions to the element</p>\n"
    },
    {
      "tagname": "method",
      "name": "update",
      "member": "Ext.dd.StatusProxy",
      "doc": "<p>Updates the contents of the ghost element</p>\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "html",
          "doc": "<p>The html that will replace the current innerHTML of the ghost element, or a\nDOM node to append as the child of the ghost element (in which case the innerHTML will be cleared first).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
      "linenr": 68,
      "html_filename": "StatusProxy.html",
      "href": "StatusProxy.html#Ext-dd-StatusProxy-method-update",
      "shortDoc": "<p>Updates the contents of the ghost element</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/dd/StatusProxy.js",
  "linenr": 1,
  "html_filename": "StatusProxy.html",
  "href": "StatusProxy.html#Ext-dd-StatusProxy",
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