Ext.data.JsonP.Ext_app_Application({
  "tagname": "class",
  "name": "Ext.app.Application",
  "doc": "<p>Represents an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4 application, which is typically a single page app using a <a href=\"#/api/Ext.container.Viewport\" rel=\"Ext.container.Viewport\" class=\"docClass\">Viewport</a>.\nA typical <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> might look like this:</p>\n\n<pre><code>Ext.application({\n    name: 'MyApp',\n    launch: function() {\n        Ext.create('Ext.container.Viewport', {\n            items: {\n                html: 'My App'\n            }\n        });\n    }\n});\n</code></pre>\n\n<p>This does several things. First it creates a global variable called 'MyApp' - all of your Application's classes (such\nas its Models, Views and Controllers) will reside under this single namespace, which drastically lowers the chances\nof colliding global variables.</p>\n\n<p>When the page is ready and all of your JavaScript has loaded, your Application's <a href=\"#/api/Ext.app.Application-property-launch\" rel=\"Ext.app.Application-property-launch\" class=\"docClass\">launch</a> function is called,\nat which time you can run the code that starts your app. Usually this consists of creating a Viewport, as we do in\nthe example above.</p>\n\n<p><u>Telling Application about the rest of the app</u></p>\n\n<p>Because an <a href=\"#/api/Ext.app.Application\" rel=\"Ext.app.Application\" class=\"docClass\">Ext.app.Application</a> represents an entire app, we should tell it about the other parts of the app - namely\nthe Models, Views and Controllers that are bundled with the application. Let's say we have a blog management app; we\nmight have Models and Controllers for Posts and Comments, and Views for listing, adding and editing Posts and Comments.\nHere's how we'd tell our Application about all these things:</p>\n\n<pre><code>Ext.application({\n    name: 'Blog',\n    models: ['Post', 'Comment'],\n    controllers: ['Posts', 'Comments'],\n\n    launch: function() {\n        ...\n    }\n});\n</code></pre>\n\n<p>Note that we didn't actually list the Views directly in the Application itself. This is because Views are managed by\nControllers, so it makes sense to keep those dependencies there. The Application will load each of the specified\nControllers using the pathing conventions laid out in the <a href=\"../guide/application_architecture\">application\narchitecture guide</a> - in this case expecting the controllers to reside in app/controller/Posts.js and\napp/controller/Comments.js. In turn, each Controller simply needs to list the Views it uses and they will be\nautomatically loaded. Here's how our Posts controller like be defined:</p>\n\n<pre><code>Ext.define('MyApp.controller.Posts', {\n    extend: 'Ext.app.Controller',\n    views: ['posts.List', 'posts.Edit'],\n\n    //the rest of the Controller here\n});\n</code></pre>\n\n<p>Because we told our Application about our Models and Controllers, and our Controllers about their Views, Ext JS will\nautomatically load all of our app files for us. This means we don't have to manually add script tags into our html\nfiles whenever we add a new class, but more importantly it enables us to create a minimized build of our entire\napplication using the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4 SDK Tools.</p>\n\n<p>For more information about writing <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4 applications, please see the <a href=\"../guide/application_architecture\">\napplication architecture guide</a>.</p>\n",
  "extends": "Ext.app.Controller",
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
      "name": "appFolder",
      "member": "Ext.app.Application",
      "type": "String",
      "doc": "<p>The path to the directory which contains all application's classes.\nThis path will be registered via <a href=\"#/api/Ext.Loader-method-setPath\" rel=\"Ext.Loader-method-setPath\" class=\"docClass\">Ext.Loader.setPath</a> for the namespace specified in the <a href=\"#/api/Ext.app.Application-cfg-name\" rel=\"Ext.app.Application-cfg-name\" class=\"docClass\">name</a> config.\nDefaults to 'app'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 101,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-appFolder",
      "shortDoc": "The path to the directory which contains all application's classes.\nThis path will be registered via Ext.Loader.setPa..."
    },
    {
      "tagname": "cfg",
      "name": "autoCreateViewport",
      "member": "Ext.app.Application",
      "type": "Boolean",
      "doc": "<p>True to automatically load and instantiate AppName.view.Viewport\nbefore firing the launch function (defaults to false).</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 108,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-autoCreateViewport"
    },
    {
      "tagname": "cfg",
      "name": "defaultUrl",
      "member": "Ext.app.Application",
      "type": "String",
      "doc": "<p>When the app is first loaded, this url will be redirected to. Defaults to undefined</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 97,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-defaultUrl"
    },
    {
      "tagname": "cfg",
      "name": "enableQuickTips",
      "member": "Ext.app.Application",
      "type": "Boolean",
      "doc": "<p>True to automatically set up <a href=\"#/api/Ext.tip.QuickTip\" rel=\"Ext.tip.QuickTip\" class=\"docClass\">Ext.tip.QuickTip</a> support (defaults to true)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 92,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-enableQuickTips"
    },
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
    },
    {
      "tagname": "cfg",
      "name": "name",
      "member": "Ext.app.Application",
      "type": "String",
      "doc": "<p>The name of your application. This will also be the namespace for your views, controllers\nmodels and stores. Don't use spaces or special characters in the name.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 81,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-name",
      "shortDoc": "The name of your application. This will also be the namespace for your views, controllers\nmodels and stores. Don't us..."
    },
    {
      "tagname": "cfg",
      "name": "scope",
      "member": "Ext.app.Application",
      "type": "Object",
      "doc": "<p>The scope to execute the <a href=\"#/api/Ext.app.Application-property-launch\" rel=\"Ext.app.Application-property-launch\" class=\"docClass\">launch</a> function in. Defaults to the Application\ninstance.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 86,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-cfg-scope"
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Application",
      "member": "Ext.app.Application",
      "doc": "\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 1,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-method-constructor",
      "shortDoc": "\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "launch",
      "member": "Ext.app.Application",
      "type": "Function",
      "doc": "<p>Called automatically when the page has completely loaded. This is an empty function that should be\noverridden by each application that needs to take action on page load</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
      "linenr": 162,
      "html_filename": "Application.html",
      "href": "Application.html#Ext-app-Application-property-launch",
      "shortDoc": "Called automatically when the page has completely loaded. This is an empty function that should be\noverridden by each..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/app/Application.js",
  "linenr": 1,
  "html_filename": "Application.html",
  "href": "Application.html#Ext-app-Application",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.app.Controller"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});