Ext.data.JsonP.Ext_panel_Proxy({
  "tagname": "class",
  "name": "Ext.panel.Proxy",
  "doc": "<p>A custom drag proxy implementation specific to <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>s. This class\nis primarily used internally for the Panel's drag drop implementation, and\nshould never need to be created directly.</p>\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.dd.PanelProxy"
  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "insertProxy",
      "member": "Ext.panel.Proxy",
      "type": "Boolean",
      "doc": "<p>True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\nMost Panels are not absolute positioned and therefore we need to reserve\nthis space.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 25,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-cfg-insertProxy",
      "shortDoc": "True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\n..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Proxy",
      "member": "Ext.panel.Proxy",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "panel",
          "doc": "<p>The <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> to proxy for</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Configuration options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 1,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getEl",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Gets the proxy's element</p>\n",
      "params": [

      ],
      "return": {
        "type": "Element",
        "doc": "<p>The proxy's element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 40,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-getEl",
      "shortDoc": "<p>Gets the proxy's element</p>\n"
    },
    {
      "tagname": "method",
      "name": "getGhost",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Gets the proxy's ghost Panel</p>\n",
      "params": [

      ],
      "return": {
        "type": "Panel",
        "doc": "<p>The proxy's ghost Panel</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 48,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-getGhost",
      "shortDoc": "<p>Gets the proxy's ghost Panel</p>\n"
    },
    {
      "tagname": "method",
      "name": "getProxy",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Element",
        "doc": "<p>The proxy's element</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 56,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-getProxy",
      "shortDoc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Hides the proxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 65,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-hide",
      "shortDoc": "<p>Hides the proxy</p>\n"
    },
    {
      "tagname": "method",
      "name": "moveProxy",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the proxy sync'd to the Panel's\nlocation.</p>\n",
      "params": [
        {
          "type": "HTMLElement",
          "name": "parentNode",
          "doc": "<p>The proxy's parent DOM node</p>\n",
          "optional": false
        },
        {
          "type": "HTMLElement",
          "name": "before",
          "doc": "<p>(optional) The sibling node before which the\nproxy should be inserted (defaults to the parent's last child if not\nspecified)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 106,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-moveProxy",
      "shortDoc": "Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the pr..."
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.panel.Proxy",
      "doc": "<p>Shows the proxy</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 81,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-method-show",
      "shortDoc": "<p>Shows the proxy</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "panel",
      "member": "Ext.panel.Proxy",
      "type": "Ext.panel.Panel",
      "doc": "\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
      "linenr": 16,
      "html_filename": "Proxy.html",
      "href": "Proxy.html#Ext-panel-Proxy-property-panel"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/panel/Proxy.js",
  "linenr": 1,
  "html_filename": "Proxy.html",
  "href": "Proxy.html#Ext-panel-Proxy",
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