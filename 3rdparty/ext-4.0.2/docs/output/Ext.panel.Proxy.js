Ext.data.JsonP.Ext_panel_Proxy({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Proxy.html#Ext-panel-Proxy-cfg-insertProxy",
        "shortDoc": "True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "name": "insertProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\nMost Panels are not absolute positioned and therefore we need to reserve\nthis space.</p>\n",
        "linenr": 27,
        "html_filename": "Proxy.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Proxy.html#Ext-panel-Proxy-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new panel proxy. ...",
        "static": false,
        "params": [
          {
            "type": "Ext.panel.Panel",
            "optional": false,
            "doc": "<p>The <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a> to proxy for</p>\n",
            "name": "panel"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "doc": "<p>Creates new panel proxy.</p>\n",
        "owner": "Ext.panel.Proxy",
        "name": "Proxy",
        "html_filename": "Proxy.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 12
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-getEl",
        "shortDoc": "Gets the proxy's element ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [

        ],
        "name": "getEl",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy's element</p>\n",
        "linenr": 42,
        "return": {
          "type": "Element",
          "doc": "<p>The proxy's element</p>\n"
        },
        "html_filename": "Proxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-getGhost",
        "shortDoc": "Gets the proxy's ghost Panel ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [

        ],
        "name": "getGhost",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy's ghost Panel</p>\n",
        "linenr": 50,
        "return": {
          "type": "Panel",
          "doc": "<p>The proxy's ghost Panel</p>\n"
        },
        "html_filename": "Proxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-getProxy",
        "shortDoc": "Gets the proxy element. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [

        ],
        "name": "getProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n",
        "linenr": 58,
        "return": {
          "type": "Element",
          "doc": "<p>The proxy's element</p>\n"
        },
        "html_filename": "Proxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-hide",
        "shortDoc": "Hides the proxy ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [

        ],
        "name": "hide",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Hides the proxy</p>\n",
        "linenr": 67,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Proxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-moveProxy",
        "shortDoc": "Moves the proxy to a different position in the DOM. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [
          {
            "type": "HTMLElement",
            "optional": false,
            "doc": "<p>The proxy's parent DOM node</p>\n",
            "name": "parentNode"
          },
          {
            "type": "HTMLElement",
            "optional": true,
            "doc": "<p>(optional) The sibling node before which the\nproxy should be inserted (defaults to the parent's last child if not\nspecified)</p>\n",
            "name": "before"
          }
        ],
        "name": "moveProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the proxy sync'd to the Panel's\nlocation.</p>\n",
        "linenr": 108,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Proxy.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Proxy.html#Ext-panel-Proxy-method-show",
        "shortDoc": "Shows the proxy ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "params": [

        ],
        "name": "show",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Shows the proxy</p>\n",
        "linenr": 83,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Proxy.html"
      }
    ],
    "property": [
      {
        "type": "Ext.panel.Panel",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Proxy.html#Ext-panel-Proxy-property-panel",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "name": "panel",
        "owner": "Ext.panel.Proxy",
        "doc": "\n",
        "linenr": 18,
        "html_filename": "Proxy.html"
      }
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
  "href": "Proxy.html#Ext-panel-Proxy",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
  "private": false,
  "alternateClassNames": [
    "Ext.dd.PanelProxy"
  ],
  "name": "Ext.panel.Proxy",
  "doc": "<p>A custom drag proxy implementation specific to <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>s. This class\nis primarily used internally for the Panel's drag drop implementation, and\nshould never need to be created directly.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Proxy.html",
  "extends": "Object"
});