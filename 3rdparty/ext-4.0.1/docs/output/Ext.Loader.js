Ext.data.JsonP.Ext_Loader({
  "tagname": "class",
  "name": "Ext.Loader",
  "doc": "<p>Ext.Loader is the heart of the new dynamic dependency loading capability in <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4+. It is most commonly used\nvia the <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> shorthand. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> supports both asynchronous and synchronous loading\napproaches, and leverage their advantages for the best development flow. We'll discuss about the pros and cons of each approach:</p>\n\n<h1>Asynchronous Loading</h1>\n\n<ul>\n<li><p>Advantages:</p>\n\n<ul>\n<li>Cross-domain</li>\n<li>No web server needed: you can run the application via the file system protocol (i.e: <code>file://path/to/your/index\n.html</code>)</li>\n<li>Best possible debugging experience: error messages come with the exact file name and line number</li>\n</ul>\n</li>\n<li><p>Disadvantages:</p>\n\n<ul>\n<li>Dependencies need to be specified before-hand</li>\n</ul>\n</li>\n</ul>\n\n\n<h3>Method 1: Explicitly include what you need:</h3>\n\n<pre><code>// Syntax\nExt.require({String/Array} expressions);\n\n// Example: Single alias\nExt.require('widget.window');\n\n// Example: Single class name\nExt.require('Ext.window.Window');\n\n// Example: Multiple aliases / class names mix\nExt.require(['widget.window', 'layout.border', 'Ext.data.Connection']);\n\n// Wildcards\nExt.require(['widget.*', 'layout.*', 'Ext.data.*']);\n</code></pre>\n\n<h3>Method 2: Explicitly exclude what you don't need:</h3>\n\n<pre><code>// Syntax: Note that it must be in this chaining format.\nExt.exclude({String/Array} expressions)\n   .require({String/Array} expressions);\n\n// Include everything except Ext.data.*\nExt.exclude('Ext.data.*').require('*'); \n\n// Include all widgets except widget.checkbox*,\n// which will match widget.checkbox, widget.checkboxfield, widget.checkboxgroup, etc.\nExt.exclude('widget.checkbox*').require('widget.*');\n</code></pre>\n\n<h1>Synchronous Loading on Demand</h1>\n\n<ul>\n<li><p><em>Advantages:</em></p>\n\n<ul>\n<li>There's no need to specify dependencies before-hand, which is always the convenience of including ext-all.js\nbefore</li>\n</ul>\n</li>\n<li><p><em>Disadvantages:</em></p>\n\n<ul>\n<li>Not as good debugging experience since file name won't be shown (except in Firebug at the moment)</li>\n<li>Must be from the same domain due to XHR restriction</li>\n<li>Need a web server, same reason as above</li>\n</ul>\n</li>\n</ul>\n\n\n<p>There's one simple rule to follow: Instantiate everything with Ext.create instead of the <code>new</code> keyword</p>\n\n<pre><code>Ext.create('widget.window', { ... }); // Instead of new Ext.window.Window({...});\n\nExt.create('Ext.window.Window', {}); // Same as above, using full class name instead of alias\n\nExt.widget('window', {}); // Same as above, all you need is the traditional `xtype`\n</code></pre>\n\n<p>Behind the scene, <a href=\"#/api/Ext.ClassManager\" rel=\"Ext.ClassManager\" class=\"docClass\">Ext.ClassManager</a> will automatically check whether the given class name / alias has already\n existed on the page. If it's not, <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> will immediately switch itself to synchronous mode and automatic load the given\n class and all its dependencies.</p>\n\n<h1>Hybrid Loading - The Best of Both Worlds</h1>\n\n<p>It has all the advantages combined from asynchronous and synchronous loading. The development flow is simple:</p>\n\n<h3>Step 1: Start writing your application using synchronous approach. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> will automatically fetch all</h3>\n\n<p> dependencies on demand as they're needed during run-time. For example: ###</p>\n\n<pre><code>Ext.onReady(function(){\n    var window = Ext.createWidget('window', {\n        width: 500,\n        height: 300,\n        layout: {\n            type: 'border',\n            padding: 5\n        },\n        title: 'Hello Dialog',\n        items: [{\n            title: 'Navigation',\n            collapsible: true,\n            region: 'west',\n            width: 200,\n            html: 'Hello',\n            split: true\n        }, {\n            title: 'TabPanel',\n            region: 'center'\n        }]\n    });\n\n    window.show();\n})\n</code></pre>\n\n<h3>Step 2: Along the way, when you need better debugging ability, watch the console for warnings like these:</h3>\n\n<pre><code>[Ext.Loader] Synchronously loading 'Ext.window.Window'; consider adding Ext.require('Ext.window.Window') before your application's code\nClassManager.js:432\n[Ext.Loader] Synchronously loading 'Ext.layout.container.Border'; consider adding Ext.require('Ext.layout.container.Border') before your application's code\n</code></pre>\n\n<p>Simply copy and paste the suggested code above <code>Ext.onReady</code>, i.e:</p>\n\n<pre><code>Ext.require('Ext.window.Window');\nExt.require('Ext.layout.container.Border');\n\nExt.onReady(...);\n</code></pre>\n\n<p>Everything should now load via asynchronous mode.</p>\n\n<h1>Deployment</h1>\n\n<p>It's important to note that dynamic loading should only be used during development on your local machines.\nDuring production, all dependencies should be combined into one single JavaScript file. <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> makes\nthe whole process of transitioning from / to between development / maintenance and production as easy as\npossible. Internally <a href=\"#/api/Ext.Loader-property-history\" rel=\"Ext.Loader-property-history\" class=\"docClass\">Ext.Loader.history</a> maintains the list of all dependencies your application\nneeds in the exact loading sequence. It's as simple as concatenating all files in this array into one,\nthen include it on top of your application.</p>\n\n<p>This process will be automated with Sencha Command, to be released and documented towards <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> JS 4 Final.</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "singleton": true,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "disableCaching",
      "member": "Ext.Loader",
      "type": "Boolean",
      "doc": "<p>Appends current timestamp to script files to prevent caching\nDefaults to true</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 234,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-cfg-disableCaching"
    },
    {
      "tagname": "cfg",
      "name": "disableCachingParam",
      "member": "Ext.Loader",
      "type": "String",
      "doc": "<p>The get parameter name for the cache buster's timestamp.\nDefaults to '_dc'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 241,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-cfg-disableCachingParam"
    },
    {
      "tagname": "cfg",
      "name": "enabled",
      "member": "Ext.Loader",
      "type": "Boolean",
      "doc": "<p>Whether or not to enable the dynamic dependency loading feature\nDefaults to false</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 227,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-cfg-enabled"
    },
    {
      "tagname": "cfg",
      "name": "paths",
      "member": "Ext.Loader",
      "type": "Object",
      "doc": "<p>The mapping from namespaces to file paths</p>\n\n<pre><code>{\n    'Ext': '.', // This is set by default, <a href=\"#/api/Ext.layout.container.Container\" rel=\"Ext.layout.container.Container\" class=\"docClass\">Ext.layout.container.Container</a> will be\n                // loaded from ./layout/Container.js\n\n    'My': './src/my_own_folder' // My.layout.Container will be loaded from\n                                // ./src/my_own_folder/layout/Container.js\n}\n</code></pre>\n\n<p>Note that all relative paths are relative to the current HTML document.\nIf not being specified, for example, <code>Other.awesome.Class</code>\nwill simply be loaded from <code>./Other/awesome/Class.js</code></p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 248,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-cfg-paths",
      "shortDoc": "The mapping from namespaces to file paths\n\n{\n    'Ext': '.', // This is set by default, Ext.layout.container.Containe..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "exclude",
      "member": "Ext.Loader",
      "doc": "<p>Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be chained with more <code>require</code> and <code>exclude</code> methods, eg:</p>\n\n<pre><code>Ext.exclude('Ext.data.*').require('*');\n\nExt.exclude('widget.button*').require('widget.*');\n</code></pre>\n",
      "params": [
        {
          "type": "Array",
          "name": "excludes",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>object contains <code>require</code> method for chaining</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 593,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-exclude",
      "shortDoc": "Explicitly exclude files from being loaded. Useful when used in conjunction with a broad include expression.\nCan be c..."
    },
    {
      "tagname": "method",
      "name": "getConfig",
      "member": "Ext.Loader",
      "doc": "<p>Get the config value corresponding to the specified name. If no name is given, will return the config object</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The config property name</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object/Mixed",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 305,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-getConfig",
      "shortDoc": "<p>Get the config value corresponding to the specified name. If no name is given, will return the config object</p>\n"
    },
    {
      "tagname": "method",
      "name": "getPath",
      "member": "Ext.Loader",
      "doc": "<p>Translates a className to a file path by adding the\nthe proper prefix and converting the .'s to /'s. For example:</p>\n\n<pre><code>Ext.Loader.setPath('My', '/path/to/My');\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/path/to/My/awesome/Class.js'\n</code></pre>\n\n<p>Note that the deeper namespace levels, if explicitly set, are always resolved first. For example:</p>\n\n<pre><code>Ext.Loader.setPath({\n    'My': '/path/to/lib',\n    'My.awesome': '/other/path/for/awesome/stuff',\n    'My.awesome.more': '/more/awesome/path'\n});\n\nalert(Ext.Loader.getPath('My.awesome.Class')); // alerts '/other/path/for/awesome/stuff/Class.js'\n\nalert(Ext.Loader.getPath('My.awesome.more.Class')); // alerts '/more/awesome/path/Class.js'\n\nalert(Ext.Loader.getPath('My.cool.Class')); // alerts '/path/to/lib/cool/Class.js'\n\nalert(Ext.Loader.getPath('Unknown.strange.Stuff')); // alerts 'Unknown/strange/Stuff.js'\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>path</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 343,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-getPath",
      "shortDoc": "Translates a className to a file path by adding the\nthe proper prefix and converting the .'s to /'s. For example:\n\nEx..."
    },
    {
      "tagname": "method",
      "name": "onReady",
      "member": "Ext.Loader",
      "doc": "<p>Add a new listener to be executed when all required scripts are fully loaded</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function callback to be executed</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>The execution scope (<code>this</code>) of the callback function</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "withDomReady",
          "doc": "<p>Whether or not to wait for document dom ready as well</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 902,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-onReady",
      "shortDoc": "<p>Add a new listener to be executed when all required scripts are fully loaded</p>\n"
    },
    {
      "tagname": "method",
      "name": "require",
      "member": "Ext.Loader",
      "doc": "<p>Loads all classes by the given names and all their direct dependencies; optionally executes the given callback function when\nfinishes, within the optional scope. This method is aliased by <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">Ext.require</a> for convenience</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "expressions",
          "doc": "<p>Can either be a string or an array of string</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>(Optional) The callback function</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
          "optional": false
        },
        {
          "type": "String/Array",
          "name": "excludes",
          "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 634,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-require",
      "shortDoc": "Loads all classes by the given names and all their direct dependencies; optionally executes the given callback functi..."
    },
    {
      "tagname": "method",
      "name": "setConfig",
      "member": "Ext.Loader",
      "doc": "<p>Set the configuration for the loader. This should be called right after ext-core.js\n(or ext-core-debug.js) is included in the page, i.e:</p>\n\n<pre><code>&lt;script type=\"text/javascript\" src=\"ext-core-debug.js\"&gt;&lt;/script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.Loader.setConfig({\n      enabled: true,\n      paths: {\n          'My': 'my_own_path'\n      }\n  });\n&lt;script&gt;\n&lt;script type=\"text/javascript\"&gt;\n  Ext.require(...);\n\n  Ext.onReady(function() {\n      // application code here\n  });\n&lt;/script&gt;\n</code></pre>\n\n<p>Refer to <a href=\"#/api/Ext.Loader--configs\" rel=\"Ext.Loader--configs\" class=\"docClass\">configs</a> for the list of possible properties</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The config object to override the default values in <a href=\"#/api/Ext.Loader--config\" rel=\"Ext.Loader--config\" class=\"docClass\">config</a></p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "value",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Loader",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 267,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-setConfig",
      "shortDoc": "Set the configuration for the loader. This should be called right after ext-core.js\n(or ext-core-debug.js) is include..."
    },
    {
      "tagname": "method",
      "name": "setPath",
      "member": "Ext.Loader",
      "doc": "<p>Sets the path of a namespace.\nFor Example:</p>\n\n<pre><code>Ext.Loader.setPath('Ext', '.');\n</code></pre>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "name",
          "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "path",
          "doc": "<p>See <a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Loader",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 318,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-setPath",
      "shortDoc": "<p>Sets the path of a namespace.\nFor Example:</p>\n\n<pre><code>Ext.Loader.setPath('Ext', '.');\n</code></pre>\n"
    },
    {
      "tagname": "method",
      "name": "syncRequire",
      "member": "Ext.Loader",
      "doc": "<p>Synchronously loads all classes by the given names and all their direct dependencies; optionally executes the given callback function when finishes, within the optional scope. This method is aliased by <a href=\"#/api/Ext-method-syncRequire\" rel=\"Ext-method-syncRequire\" class=\"docClass\">Ext.syncRequire</a> for convenience</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "expressions",
          "doc": "<p>Can either be a string or an array of string</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>(Optional) The callback function</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The execution scope (<code>this</code>) of the callback function</p>\n",
          "optional": false
        },
        {
          "type": "String/Array",
          "name": "excludes",
          "doc": "<p>(Optional) Classes to be excluded, useful when being used with expressions</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 619,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-method-syncRequire",
      "shortDoc": "Synchronously loads all classes by the given names and all their direct dependencies; optionally executes the given c..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "history",
      "member": "Ext.Loader",
      "type": "Array",
      "doc": "<p>An array of class names to keep track of the dependency loading order.\nThis is not guaranteed to be the same everytime due to the asynchronous\nnature of the Loader.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 212,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-Loader-property-history",
      "shortDoc": "An array of class names to keep track of the dependency loading order.\nThis is not guaranteed to be the same everytim..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
  "linenr": 1,
  "html_filename": "Loader.html",
  "href": "Loader.html#Ext-Loader",
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