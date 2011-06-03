Ext.data.JsonP.Ext_state_Manager({
  "tagname": "class",
  "name": "Ext.state.Manager",
  "doc": "<p>This is the global state manager. By default all components that are \"state aware\" check this class\nfor state information if you don't pass them a custom state provider. In order for this class\nto be useful, it must be initialized with a provider when your application initializes. Example usage:</p>\n\n<pre><code>// in your initialization function\ninit : function(){\n   Ext.state.Manager.setProvider(new Ext.state.CookieProvider());\n   var win = new Window(...);\n   win.restoreState();\n}\n </code></pre>\n\n\n<p>This class passes on calls from components to the underlying <a href=\"#/api/Ext.state.Provider\" rel=\"Ext.state.Provider\" class=\"docClass\">Ext.state.Provider</a> so that\nthere is a common interface that can be used without needing to refer to a specific provider instance\nin every component.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Evan Trimboli <evan@sencha.com>",
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "clear",
      "member": "Ext.state.Manager",
      "doc": "<p>Clears a value from the state</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The key name</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
      "linenr": 55,
      "html_filename": "Manager4.html",
      "href": "Manager4.html#Ext-state-Manager-method-clear",
      "shortDoc": "<p>Clears a value from the state</p>\n"
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.state.Manager",
      "doc": "<p>Returns the current value for a key</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The key name</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "defaultValue",
          "doc": "<p>The default value to return if the key lookup does not match</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The state data</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
      "linenr": 36,
      "html_filename": "Manager4.html",
      "href": "Manager4.html#Ext-state-Manager-method-get",
      "shortDoc": "<p>Returns the current value for a key</p>\n"
    },
    {
      "tagname": "method",
      "name": "getProvider",
      "member": "Ext.state.Manager",
      "doc": "<p>Gets the currently configured state provider</p>\n",
      "params": [

      ],
      "return": {
        "type": "Provider",
        "doc": "<p>The state provider</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
      "linenr": 63,
      "html_filename": "Manager4.html",
      "href": "Manager4.html#Ext-state-Manager-method-getProvider",
      "shortDoc": "<p>Gets the currently configured state provider</p>\n"
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.state.Manager",
      "doc": "<p>Sets the value for a key</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The key name</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The state data</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
      "linenr": 46,
      "html_filename": "Manager4.html",
      "href": "Manager4.html#Ext-state-Manager-method-set",
      "shortDoc": "<p>Sets the value for a key</p>\n"
    },
    {
      "tagname": "method",
      "name": "setProvider",
      "member": "Ext.state.Manager",
      "doc": "<p>Configures the default state provider for your application</p>\n",
      "params": [
        {
          "type": "Provider",
          "name": "stateProvider",
          "doc": "<p>The state provider to set</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
      "linenr": 28,
      "html_filename": "Manager4.html",
      "href": "Manager4.html#Ext-state-Manager-method-setProvider",
      "shortDoc": "<p>Configures the default state provider for your application</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/state/Manager.js",
  "linenr": 1,
  "html_filename": "Manager4.html",
  "href": "Manager4.html#Ext-state-Manager",
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