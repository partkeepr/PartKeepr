Ext.data.JsonP.Ext_Action({
  "tagname": "class",
  "name": "Ext.Action",
  "doc": "<p>An Action is a piece of reusable functionality that can be abstracted out of any particular component so that it\ncan be usefully shared among multiple components.  Actions let you share handlers, configuration options and UI\nupdates across any components that support the Action interface (primarily <a href=\"#/api/Ext.toolbar.Toolbar\" rel=\"Ext.toolbar.Toolbar\" class=\"docClass\">Ext.toolbar.Toolbar</a>, <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">Ext.button.Button</a>\nand <a href=\"#/api/Ext.menu.Menu\" rel=\"Ext.menu.Menu\" class=\"docClass\">Ext.menu.Menu</a> components).</p>\n\n\n<p>Use a single Action instance as the config object for any number of UI Components which share the same configuration. The\nAction not only supplies the configuration, but allows all Components based upon it to have a common set of methods\ncalled at once through a single call to the Action.</p>\n\n\n<p>Any Component that is to be configured with an Action must also support\nthe following methods:<ul>\n<li><code>setText(string)</code></li>\n<li><code>setIconCls(string)</code></li>\n<li><code>setDisabled(boolean)</code></li>\n<li><code>setVisible(boolean)</code></li>\n<li><code>setHandler(function)</code></li></ul>.</p>\n\n\n<p>This allows the Action to control its associated Components.</p>\n\n\n<p>Example usage:<br></p>\n\n<pre><code>// Define the shared Action.  Each Component below will have the same\n// display text and icon, and will display the same message on click.\nvar action = new Ext.Action({\n    <a href=\"#/api/Ext.Action-cfg-text\" rel=\"Ext.Action-cfg-text\" class=\"docClass\">text</a>: 'Do something',\n    <a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a>: function(){\n        Ext.Msg.alert('Click', 'You did something.');\n    },\n    <a href=\"#/api/Ext.Action-cfg-iconCls\" rel=\"Ext.Action-cfg-iconCls\" class=\"docClass\">iconCls</a>: 'do-something',\n    <a href=\"#/api/Ext.Action-cfg-itemId\" rel=\"Ext.Action-cfg-itemId\" class=\"docClass\">itemId</a>: 'myAction'\n});\n\nvar panel = new Ext.panel.Panel({\n    title: 'Actions',\n    width: 500,\n    height: 300,\n    tbar: [\n        // Add the Action directly to a toolbar as a menu button\n        action,\n        {\n            text: 'Action Menu',\n            // Add the Action to a menu as a text item\n            menu: [action]\n        }\n    ],\n    items: [\n        // Add the Action to the panel body as a standard button\n        new Ext.button.Button(action)\n    ],\n    renderTo: Ext.getBody()\n});\n\n// Change the text for all components using the Action\naction.setText('Something else');\n\n// Reference an Action through a container using the itemId\nvar btn = panel.getComponent('myAction');\nvar aRef = btn.baseAction;\naRef.setText('New text');\n</code></pre>\n\n",
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
      "name": "disabled",
      "member": "Ext.Action",
      "type": "Boolean",
      "doc": "<p>True to disable all components configured by this Action, false to enable them (defaults to false).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 85,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-disabled"
    },
    {
      "tagname": "cfg",
      "name": "handler",
      "member": "Ext.Action",
      "type": "Function",
      "doc": "<p>The function that will be invoked by each component tied to this Action\nwhen the component's primary event is triggered (defaults to undefined).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 91,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-handler",
      "shortDoc": "The function that will be invoked by each component tied to this Action\nwhen the component's primary event is trigger..."
    },
    {
      "tagname": "cfg",
      "name": "hidden",
      "member": "Ext.Action",
      "type": "Boolean",
      "doc": "<p>True to hide all components configured by this Action, false to show them (defaults to false).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 88,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-hidden"
    },
    {
      "tagname": "cfg",
      "name": "iconCls",
      "member": "Ext.Action",
      "type": "String",
      "doc": "<p>The CSS class selector that specifies a background image to be used as the header icon for\nall components configured by this Action (defaults to '').</p>\n\n<p>An example of specifying a custom icon class would be something like:\n</p>\n\n\n<pre><code>// specify the property in the config for the class:\n     ...\n     iconCls: 'do-something'\n\n// css class that specifies background image to be used as the icon image:\n.do-something { background-image: url(../images/my-icon.gif) 0 6px no-repeat !important; }\n</code></pre>\n\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 71,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-iconCls",
      "shortDoc": "The CSS class selector that specifies a background image to be used as the header icon for\nall components configured ..."
    },
    {
      "tagname": "cfg",
      "name": "itemId",
      "member": "Ext.Action",
      "type": "String",
      "doc": "<p>See <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>.<a href=\"#/api/Ext.Component-cfg-itemId\" rel=\"Ext.Component-cfg-itemId\" class=\"docClass\">itemId</a>.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 95,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-itemId"
    },
    {
      "tagname": "cfg",
      "name": "scope",
      "member": "Ext.Action",
      "type": "Object",
      "doc": "<p>The scope (<code><b>this</b></code> reference) in which the\n<code><a href=\"#/api/Ext.Action-cfg-handler\" rel=\"Ext.Action-cfg-handler\" class=\"docClass\">handler</a></code> is executed. Defaults to the browser window.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 99,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-scope"
    },
    {
      "tagname": "cfg",
      "name": "text",
      "member": "Ext.Action",
      "type": "String",
      "doc": "<p>The text to set for all components configured by this Action (defaults to '').</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 68,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-cfg-text"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Action",
      "member": "Ext.Action",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The configuration options</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 1,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.Action",
      "doc": "<p>Disables all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 163,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-disable",
      "shortDoc": "<p>Disables all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext.Action",
      "doc": "<p>Executes the specified function once for each Component currently tied to this Action.  The function passed\nin should accept a single argument that will be an object that supports the basic Action config/method interface.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to execute for each component</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the function is executed.  Defaults to the Component.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 220,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-each",
      "shortDoc": "Executes the specified function once for each Component currently tied to this Action.  The function passed\nin should..."
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.Action",
      "doc": "<p>Enables all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 156,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-enable",
      "shortDoc": "<p>Enables all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "execute",
      "member": "Ext.Action",
      "doc": "<p>Executes this Action manually using the handler function specified in the original config object\nor the handler function set with <code><a href=\"#/api/Ext.Action-method-setHandler\" rel=\"Ext.Action-method-setHandler\" class=\"docClass\">setHandler</a></code>.  Any arguments passed to this\nfunction will be passed on to the handler function.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "arg1",
          "doc": "<p>(optional) Variable number of arguments passed to the handler function</p>\n",
          "optional": true
        },
        {
          "type": "Mixed",
          "name": "arg2",
          "doc": "<p>(optional)</p>\n",
          "optional": true
        },
        {
          "type": "Mixed",
          "name": "etc",
          "doc": "<p>... (optional)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 252,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-execute",
      "shortDoc": "Executes this Action manually using the handler function specified in the original config object\nor the handler funct..."
    },
    {
      "tagname": "method",
      "name": "getIconCls",
      "member": "Ext.Action",
      "doc": "<p>Gets the icon CSS class currently used by all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 139,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-getIconCls",
      "shortDoc": "<p>Gets the icon CSS class currently used by all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getText",
      "member": "Ext.Action",
      "doc": "<p>Gets the text currently displayed by all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 122,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-getText",
      "shortDoc": "<p>Gets the text currently displayed by all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "hide",
      "member": "Ext.Action",
      "doc": "<p>Hides all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 194,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-hide",
      "shortDoc": "<p>Hides all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDisabled",
      "member": "Ext.Action",
      "doc": "<p>Returns true if the components using this Action are currently disabled, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 170,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-isDisabled",
      "shortDoc": "<p>Returns true if the components using this Action are currently disabled, else returns false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isHidden",
      "member": "Ext.Action",
      "doc": "<p>Returns true if the components configured by this Action are currently hidden, else returns false.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 201,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-isHidden",
      "shortDoc": "<p>Returns true if the components configured by this Action are currently hidden, else returns false.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDisabled",
      "member": "Ext.Action",
      "doc": "<p>Sets the disabled state of all components configured by this Action.  Shortcut method\nfor <a href=\"#/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "disabled",
          "doc": "<p>True to disable the component, false to enable it</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 146,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-setDisabled",
      "shortDoc": "<p>Sets the disabled state of all components configured by this Action.  Shortcut method\nfor <a href=\"#/api/Ext.Action-method-enable\" rel=\"Ext.Action-method-enable\" class=\"docClass\">enable</a> and <a href=\"#/api/Ext.Action-method-disable\" rel=\"Ext.Action-method-disable\" class=\"docClass\">disable</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setHandler",
      "member": "Ext.Action",
      "doc": "<p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function that will be invoked by the action's components.  The function\nwill be called with no arguments.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The scope (<code>this</code> reference) in which the function is executed. Defaults to the Component firing the event.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 208,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-setHandler",
      "shortDoc": "<p>Sets the function that will be called by each Component using this action when its primary event is triggered.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setHidden",
      "member": "Ext.Action",
      "doc": "<p>Sets the hidden state of all components configured by this Action.  Shortcut method\nfor <code><a href=\"#/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "hidden",
          "doc": "<p>True to hide the component, false to show it</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 177,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-setHidden",
      "shortDoc": "<p>Sets the hidden state of all components configured by this Action.  Shortcut method\nfor <code><a href=\"#/api/Ext.Action-method-hide\" rel=\"Ext.Action-method-hide\" class=\"docClass\">hide</a></code> and <code><a href=\"#/api/Ext.Action-method-show\" rel=\"Ext.Action-method-show\" class=\"docClass\">show</a></code>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setIconCls",
      "member": "Ext.Action",
      "doc": "<p>Sets the icon CSS class for all components configured by this Action.  The class should supply\na background image that will be used as the icon image.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "cls",
          "doc": "<p>The CSS class supplying the icon image</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 129,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-setIconCls",
      "shortDoc": "Sets the icon CSS class for all components configured by this Action.  The class should supply\na background image tha..."
    },
    {
      "tagname": "method",
      "name": "setText",
      "member": "Ext.Action",
      "doc": "<p>Sets the text to be displayed by all components configured by this Action.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "text",
          "doc": "<p>The text to display</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 113,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-setText",
      "shortDoc": "<p>Sets the text to be displayed by all components configured by this Action.</p>\n"
    },
    {
      "tagname": "method",
      "name": "show",
      "member": "Ext.Action",
      "doc": "<p>Shows all components configured by this Action.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
      "linenr": 187,
      "html_filename": "Action.html",
      "href": "Action.html#Ext-Action-method-show",
      "shortDoc": "<p>Shows all components configured by this Action.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/Action.js",
  "linenr": 1,
  "html_filename": "Action.html",
  "href": "Action.html#Ext-Action",
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