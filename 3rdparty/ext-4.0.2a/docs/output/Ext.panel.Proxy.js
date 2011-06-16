Ext.data.JsonP.Ext_panel_Proxy({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Proxy.html#Ext-panel-Proxy",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Proxy.html#Ext-panel-Proxy-cfg-insertProxy",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true). ...",
        "static": false,
        "name": "insertProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>True to insert a placeholder proxy element\nwhile dragging the panel, false to drag with no proxy (defaults to true).\nMost Panels are not absolute positioned and therefore we need to reserve\nthis space.</p>\n",
        "linenr": 27,
        "html_filename": "Proxy.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Proxy.html#Ext-panel-Proxy-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Creates new panel proxy. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Creates new panel proxy.</p>\n",
        "linenr": 12,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy.html#Ext-panel-Proxy-method-getEl",
        "return": {
          "type": "Element",
          "doc": "<p>The proxy's element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Gets the proxy's element ...",
        "static": false,
        "name": "getEl",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy's element</p>\n",
        "linenr": 42,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy.html#Ext-panel-Proxy-method-getGhost",
        "return": {
          "type": "Panel",
          "doc": "<p>The proxy's ghost Panel</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Gets the proxy's ghost Panel ...",
        "static": false,
        "name": "getGhost",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy's ghost Panel</p>\n",
        "linenr": 50,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy.html#Ext-panel-Proxy-method-getProxy",
        "return": {
          "type": "Element",
          "doc": "<p>The proxy's element</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Gets the proxy element. ...",
        "static": false,
        "name": "getProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Gets the proxy element. This is the element that represents where the\nPanel was before we started the drag operation.</p>\n",
        "linenr": 58,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy.html#Ext-panel-Proxy-method-hide",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Hides the proxy ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Hides the proxy</p>\n",
        "linenr": 67,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
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
        "href": "Proxy.html#Ext-panel-Proxy-method-moveProxy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Moves the proxy to a different position in the DOM. ...",
        "static": false,
        "name": "moveProxy",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Moves the proxy to a different position in the DOM.  This is typically\ncalled while dragging the Panel to keep the proxy sync'd to the Panel's\nlocation.</p>\n",
        "linenr": 108,
        "html_filename": "Proxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Proxy.html#Ext-panel-Proxy-method-show",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "shortDoc": "Shows the proxy ...",
        "static": false,
        "name": "show",
        "owner": "Ext.panel.Proxy",
        "doc": "<p>Shows the proxy</p>\n",
        "linenr": 83,
        "html_filename": "Proxy.html"
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
        "type": "Ext.panel.Panel",
        "deprecated": null,
        "href": "Proxy.html#Ext-panel-Proxy-property-panel",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
        "private": false,
        "static": false,
        "name": "panel",
        "owner": "Ext.panel.Proxy",
        "doc": "\n",
        "linenr": 18,
        "html_filename": "Proxy.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/panel/Proxy.js",
  "private": false,
  "alternateClassNames": [
    "Ext.dd.PanelProxy"
  ],
  "static": false,
  "name": "Ext.panel.Proxy",
  "doc": "<p>A custom drag proxy implementation specific to <a href=\"#/api/Ext.panel.Panel\" rel=\"Ext.panel.Panel\" class=\"docClass\">Ext.panel.Panel</a>s. This class\nis primarily used internally for the Panel's drag drop implementation, and\nshould never need to be created directly.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Proxy.html",
  "statics": {
    "cfg": [

    ],
    "method": [

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