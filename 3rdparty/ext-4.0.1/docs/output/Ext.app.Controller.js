Ext.data.JsonP.Ext_app_Controller({
  "tagname": "class",
  "name": "Ext.app.Controller",
  "doc": "<p>Controllers are the glue that binds an application together. All they really do is listen for events (usually from\nviews) and take some action. Here's how we might create a Controller to manage Users:</p>\n\n<pre><code>Ext.define('MyApp.controller.Users', {\n    extend: 'Ext.app.Controller',\n\n    init: function() {\n        console.log('Initialized Users! This happens before the Application launch function is called');\n    }\n});\n</code></pre>\n\n<p>The init function is a special method that is called when your application boots. It is called before the\n<a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Application</a>'s launch function is executed so gives a hook point to run any code before\nyour Viewport is created.</p>\n\n<p>The init function is a great place to set up how your controller interacts with the view, and is usually used in\nconjunction with another Controller function - <a href=\"#/api/Ext.app.Controller--control\" rel=\"Ext.app.Controller--control\" class=\"docClass\">control</a>. The control function\nmakes it easy to listen to events on your view classes and take some action with a handler function. Let's update\nour Users controller to tell us when the panel is rendered:</p>\n\n<pre><code>Ext.define('MyApp.controller.Users', {\n    extend: 'Ext.app.Controller',\n\n    init: function() {\n        this.control({\n            'viewport &gt; panel': {\n                render: this.onPanelRendered\n            }\n        });\n    },\n\n    onPanelRendered: function() {\n        console.log('The panel was rendered');\n    }\n});\n</code></pre>\n\n<p>We've updated the init function to use this.control to set up listeners on views in our application. The control\nfunction uses the new ComponentQuery engine to quickly and easily get references to components on the page. If you\nare not familiar with ComponentQuery yet, be sure to check out THIS GUIDE for a full explanation. In brief though,\nit allows us to pass a CSS-like selector that will find every matching component on the page.</p>\n\n<p>In our init function above we supplied 'viewport > panel', which translates to \"find me every Panel that is a direct\nchild of a Viewport\". We then supplied an object that maps event names (just 'render' in this case) to handler\nfunctions. The overall effect is that whenever any component that matches our selector fires a 'render' event, our\nonPanelRendered function is called.</p>\n\n<p><u>Using refs</u></p>\n\n<p>One of the most useful parts of Controllers is the new ref system. These use the new <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">Ext.ComponentQuery</a> to\nmake it really easy to get references to Views on your page. Let's look at an example of this now:</p>\n\n<pre><code>Ext.define('MyApp.controller.Users', {\n    extend: 'Ext.app.Controller',\n\n    refs: [\n        {\n            ref: 'list',\n            selector: 'grid'\n        }\n    ],\n\n    init: function() {\n        this.control({\n            'button': {\n                click: this.refreshGrid\n            }\n        });\n    },\n\n    refreshGrid: function() {\n        this.getList().store.load();\n    }\n});\n</code></pre>\n\n<p>This example assumes the existence of a <a href=\"#/api/Ext.grid.Panel\" rel=\"Ext.grid.Panel\" class=\"docClass\">Grid</a> on the page, which contains a single button to\nrefresh the Grid when clicked. In our refs array, we set up a reference to the grid. There are two parts to this -\nthe 'selector', which is a <a href=\"#/api/Ext.ComponentQuery\" rel=\"Ext.ComponentQuery\" class=\"docClass\">ComponentQuery</a> selector which finds any grid on the page and\nassigns it to the reference 'list'.</p>\n\n<p>By giving the reference a name, we get a number of things for free. The first is the getList function that we use in\nthe refreshGrid method above. This is generated automatically by the Controller based on the name of our ref, which\nwas capitalized and prepended with get to go from 'list' to 'getList'.</p>\n\n<p>The way this works is that the first time getList is called by your code, the ComponentQuery selector is run and the\nfirst component that matches the selector ('grid' in this case) will be returned. All future calls to getList will\nuse a cached reference to that grid. Usually it is advised to use a specific ComponentQuery selector that will only\nmatch a single View in your application (in the case above our selector will match any grid on the page).</p>\n\n<p>Bringing it all together, our init function is called when the application boots, at which time we call this.control\nto listen to any click on a <a href=\"#/api/Ext.button.Button\" rel=\"Ext.button.Button\" class=\"docClass\">button</a> and call our refreshGrid function (again, this will\nmatch any button on the page so we advise a more specific selector than just 'button', but have left it this way for\nsimplicity). When the button is clicked we use out getList function to refresh the grid.</p>\n\n<p>You can create any number of refs and control any number of components this way, simply adding more functions to\nyour Controller as you go. For an example of real-world usage of Controllers see the Feed Viewer example in the\nexamples/app/feed-viewer folder in the SDK download.</p>\n\n<p><u>Generated getter methods</u></p>\n\n<p>Refs aren't the only thing that generate convenient getter methods. Controllers often have to deal with Models and\nStores so the framework offers a couple of easy ways to get access to those too. Let's look at another example:</p>\n\n<pre><code>Ext.define('MyApp.controller.Users', {\n    extend: 'Ext.app.Controller',\n\n    models: ['User'],\n    stores: ['AllUsers', 'AdminUsers'],\n\n    init: function() {\n        var User = this.getUserModel(),\n            allUsers = this.getAllUsersStore();\n\n        var ed = new User({name: 'Ed'});\n        allUsers.add(ed);\n    }\n});\n</code></pre>\n\n<p>By specifying Models and Stores that the Controller cares about, it again dynamically loads them from the appropriate\nlocations (app/model/User.js, app/store/AllUsers.js and app/store/AdminUsers.js in this case) and creates getter\nfunctions for them all. The example above will create a new User model instance and add it to the AllUsers Store.\nOf course, you could do anything in this function but in this case we just did something simple to demonstrate the\nfunctionality.</p>\n\n<p><u>Further Reading</u></p>\n\n<p>For more information about writing <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4 applications, please see the <a href=\"../guide/application_architecture\">\napplication architecture guide</a>. Also see the <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> documentation.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": "Ed Spencer",
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "id",
      "member": "Ext.app.Controller",
      "type": "String",
      "doc": "<p>The id of this controller. You can use this id when dispatching.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Controller.js",
      "linenr": 136,
      "html_filename": "Controller.html",
      "href": "Controller.html#Ext-app-Controller-cfg-id"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Controller",
      "member": "Ext.app.Controller",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Controller.js",
      "linenr": 1,
      "html_filename": "Controller.html",
      "href": "Controller.html#Ext-app-Controller-method-constructor",
      "shortDoc": "\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Controller.js",
  "linenr": 1,
  "html_filename": "Controller.html",
  "href": "Controller.html#Ext-app-Controller",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.app.Application"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});