Ext.data.JsonP.Ext_WindowManager({
  "tagname": "class",
  "name": "Ext.WindowManager",
  "doc": "<p>The default global floating Component group that is available automatically.</p>\n\n\n<p>This manages instances of floating Components which were rendered programatically without\nbeing added to a <a href=\"#/api/Ext.container.Container\" rel=\"Ext.container.Container\" class=\"docClass\">Container</a>, and for floating Components which were added into non-floating Containers.</p>\n\n\n<p><i>Floating</i> Containers create their own instance of ZIndexManager, and floating Components added at any depth below\nthere are managed by that ZIndexManager.</p>\n\n",
  "extends": "Ext.ZIndexManager",
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
      "name": "WindowManager",
      "member": "Ext.ZIndexManager",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 1,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "bringToFront",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Brings the specified Component to the front of any other active Components in this ZIndexManager.</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "comp",
          "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the dialog was brought to the front, else false\nif it was already in front</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 223,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-bringToFront",
      "shortDoc": "<p>Brings the specified Component to the front of any other active Components in this ZIndexManager.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the current Component in the iteration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 343,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-each",
      "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa..."
    },
    {
      "tagname": "method",
      "name": "eachBottomUp",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the bottom and proceeding to the top.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 359,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachBottomUp",
      "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa..."
    },
    {
      "tagname": "method",
      "name": "eachTopDown",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only parameter. Returning false from the function will stop the iteration.\nThe components are passed to the function starting at the top and proceeding to the bottom.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each item</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function\nis executed. Defaults to the current Component in the iteration.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 380,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-eachTopDown",
      "shortDoc": "Executes the specified function once for every Component in this ZIndexManager, passing each\nComponent as the only pa..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Gets a registered Component by id.</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "id",
          "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 214,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-get",
      "shortDoc": "<p>Gets a registered Component by id.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getActive",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Gets the currently-active Component in this ZIndexManager.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>The active Component</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 311,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-getActive",
      "shortDoc": "<p>Gets the currently-active Component in this ZIndexManager.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getBy",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Returns zero or more Components in this ZIndexManager using the custom search function passed to this method.\nThe function should accept a single <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> reference as its only argument and should\nreturn true if the Component matches the search criteria, otherwise it should return false.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The search function</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component being tested.\nthat gets passed to the function if not specified)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>An array of zero or more matching windows</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 319,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-getBy",
      "shortDoc": "Returns zero or more Components in this ZIndexManager using the custom search function passed to this method.\nThe fun..."
    },
    {
      "tagname": "method",
      "name": "hideAll",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Hides all Components managed by this ZIndexManager.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 258,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-hideAll",
      "shortDoc": "<p>Hides all Components managed by this ZIndexManager.</p>\n"
    },
    {
      "tagname": "method",
      "name": "register",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Registers a floating <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> with this ZIndexManager. This should not\nneed to be called under normal circumstances. Floating Components (such as Windows, BoundLists and Menus) are automatically registered\nwith a <a href=\"#/api/Ext.Component-property-zIndexManager\" rel=\"Ext.Component-property-zIndexManager\" class=\"docClass\">zIndexManager</a> at render time.</p>\n\n\n<p>Where this may be useful is moving Windows between two ZIndexManagers. For example,\nto bring the Ext.MessageBox dialog under the same manager as the Desktop's\nZIndexManager in the desktop sample app:</p>\n\n\n<p><code></p>\n\n<pre>MyDesktop.getDesktop().getManager().register(Ext.MessageBox);\n</pre>\n\n\n<p></code></p>\n",
      "params": [
        {
          "type": "Component",
          "name": "comp",
          "doc": "<p>The Component to register.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 174,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-register",
      "shortDoc": "Registers a floating Ext.Component with this ZIndexManager. This should not\nneed to be called under normal circumstan..."
    },
    {
      "tagname": "method",
      "name": "sendToBack",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Sends the specified Component to the back of other active Components in this ZIndexManager.</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "comp",
          "doc": "<p>The id of the Component or a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Component",
        "doc": "<p>The Component</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 245,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-sendToBack",
      "shortDoc": "<p>Sends the specified Component to the back of other active Components in this ZIndexManager.</p>\n"
    },
    {
      "tagname": "method",
      "name": "unregister",
      "member": "Ext.ZIndexManager",
      "doc": "<p>Unregisters a <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> from this ZIndexManager. This should not\nneed to be called. Components are automatically unregistered upon destruction.\nSee <a href=\"#/api/Ext.WindowManager-method-register\" rel=\"Ext.WindowManager-method-register\" class=\"docClass\">register</a>.</p>\n\n",
      "params": [
        {
          "type": "Component",
          "name": "comp",
          "doc": "<p>The Component to unregister.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
      "linenr": 196,
      "html_filename": "ZIndexManager.html",
      "href": "ZIndexManager.html#Ext-ZIndexManager-method-unregister",
      "shortDoc": "Unregisters a Ext.Component from this ZIndexManager. This should not\nneed to be called. Components are automatically ..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/ZIndexManager.js",
  "linenr": 408,
  "html_filename": "ZIndexManager.html",
  "href": "ZIndexManager.html#Ext-WindowManager",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.ZIndexManager"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});