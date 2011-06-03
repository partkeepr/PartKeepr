Ext.data.JsonP.Ext_ClassManager({
  "tagname": "class",
  "name": "Ext.ClassManager",
  "doc": "<p>Ext.ClassManager manages all classes and handles mapping from string class name to\nactual class objects throughout the whole framework. It is not generally accessed directly, rather through\nthese convenient shorthands:</p>\n\n<ul>\n<li><a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></li>\n<li><a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></li>\n<li><a href=\"#/api/Ext-method-widget\" rel=\"Ext-method-widget\" class=\"docClass\">Ext.widget</a></li>\n<li><a href=\"#/api/Ext--getClass\" rel=\"Ext--getClass\" class=\"docClass\">Ext.getClass</a></li>\n<li><a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></li>\n</ul>\n\n",
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "create",
      "member": "Ext.ClassManager",
      "doc": "<p>Defines a class. This is usually invoked via the alias <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a></p>\n\n<pre><code>Ext.ClassManager.create('My.awesome.Class', {\n    someProperty: 'something',\n    someMethod: function() { ... }\n    ...\n\n}, function() {\n    alert('Created!');\n    alert(this === My.awesome.Class); // alerts true\n\n    var myInstance = new this();\n});\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "<p>The class name to create in string dot-namespaced format, for example:\n'My.very.awesome.Class', 'FeedViewer.plugin.CoolPager'\nIt is highly recommended to follow this simple convention:</p>\n\n<ul>\n<li>The root and the class name are 'CamelCased'</li>\n<li>Everything else is lower-cased</li>\n</ul>\n\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "data",
          "doc": "<p>The key - value pairs of properties to apply to this class. Property names can be of any valid\nstrings, except those in the reserved listed below:</p>\n\n<ul>\n<li><code>mixins</code></li>\n<li><code>statics</code></li>\n<li><code>config</code></li>\n<li><code>alias</code></li>\n<li><code>self</code></li>\n<li><code>singleton</code></li>\n<li><code>alternateClassName</code></li>\n</ul>\n\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "createdFn",
          "doc": "<p>Optional callback to execute after the class is created, the execution scope of which\n(<code>this</code>) will be the newly created class itself.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.Base",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 398,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-create",
      "shortDoc": "Defines a class. This is usually invoked via the alias Ext.define\n\nExt.ClassManager.create('My.awesome.Class', {\n    ..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.ClassManager",
      "doc": "<p>Retrieve a class by its name.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Class",
        "doc": "<p>class</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 257,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-get",
      "shortDoc": "<p>Retrieve a class by its name.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getAliasesByName",
      "member": "Ext.ClassManager",
      "doc": "<p>Get the aliases of a class by the class name</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>aliases</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 358,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getAliasesByName",
      "shortDoc": "<p>Get the aliases of a class by the class name</p>\n"
    },
    {
      "tagname": "method",
      "name": "getByAlias",
      "member": "Ext.ClassManager",
      "doc": "<p>Get a reference to the class by its alias.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "alias",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Class",
        "doc": "<p>class</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 328,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getByAlias",
      "shortDoc": "<p>Get a reference to the class by its alias.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getClass",
      "member": "Ext.ClassManager",
      "doc": "<p>Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. This is usually invoked by the shorthand <a href=\"#/api/Ext--getClass\" rel=\"Ext--getClass\" class=\"docClass\">Ext.getClass</a></p>\n\n<pre><code>var component = new Ext.Component();\n\nExt.ClassManager.getClass(component); // returns <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "object",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Class",
        "doc": "<p>class</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 382,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getClass",
      "shortDoc": "Get the class of the provided object; returns null if it's not an instance\nof any class created with Ext.define. This..."
    },
    {
      "tagname": "method",
      "name": "getDisplayName",
      "member": "Ext.ClassManager",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "object",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 1006,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getDisplayName",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "getName",
      "member": "Ext.ClassManager",
      "doc": "<p>Get the name of the class by its reference or its instance;\nusually invoked by the shorthand <a href=\"#/api/Ext-method-getClassName\" rel=\"Ext-method-getClassName\" class=\"docClass\">Ext.getClassName</a></p>\n\n<pre><code>Ext.ClassManager.getName(Ext.Action); // returns \"Ext.Action\"\n</code></pre>\n",
      "params": [
        {
          "type": "Class/Object",
          "name": "object",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>className</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 368,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getName",
      "shortDoc": "Get the name of the class by its reference or its instance;\nusually invoked by the shorthand Ext.getClassName\n\nExt.Cl..."
    },
    {
      "tagname": "method",
      "name": "getNameByAlias",
      "member": "Ext.ClassManager",
      "doc": "<p>Get the name of a class by its alias.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "alias",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>className</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 338,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlias",
      "shortDoc": "<p>Get the name of a class by its alias.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getNameByAlternate",
      "member": "Ext.ClassManager",
      "doc": "<p>Get the name of a class by its alternate name.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "alternate",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>className</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 348,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getNameByAlternate",
      "shortDoc": "<p>Get the name of a class by its alternate name.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getNamesByExpression",
      "member": "Ext.ClassManager",
      "doc": "<p>Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor class names. Expressions support wildcards:</p>\n\n<pre><code> // returns ['Ext.window.Window']\nvar window = Ext.ClassManager.getNamesByExpression('widget.window');\n\n// returns ['widget.panel', 'widget.window', ...]\nvar allWidgets = Ext.ClassManager.getNamesByExpression('widget.*');\n\n// returns ['Ext.data.Store', 'Ext.data.ArrayProxy', ...]\nvar allData = Ext.ClassManager.getNamesByExpression('Ext.data.*');\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "expression",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>classNames</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 769,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-getNamesByExpression",
      "shortDoc": "Converts a string expression to an array of matching class names. An expression can either refers to class aliases\nor..."
    },
    {
      "tagname": "method",
      "name": "instantiate",
      "member": "Ext.ClassManager",
      "doc": "<p>Instantiate a class by either full name, alias or alternate name; usually invoked by the convenient\nshorthand <a href=\"#/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a></p>\n\n<p>If <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<p>For example, all these three lines return the same result:</p>\n\n<pre><code>// alias\nvar window = Ext.ClassManager.instantiate('widget.window', { width: 600, height: 800, ... });\n\n// alternate name\nvar window = Ext.ClassManager.instantiate('Ext.Window', { width: 600, height: 800, ... });\n\n// full class name\nvar window = Ext.ClassManager.instantiate('Ext.window.Window', { width: 600, height: 800, ... });\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "args",
          "doc": "<p>,... Additional arguments after the name will be passed to the class' constructor.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 550,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-instantiate",
      "shortDoc": "Instantiate a class by either full name, alias or alternate name; usually invoked by the convenient\nshorthand Ext.cre..."
    },
    {
      "tagname": "method",
      "name": "instantiateByAlias",
      "member": "Ext.ClassManager",
      "doc": "<p>Instantiate a class by its alias; usually invoked by the convenient shorthand <a href=\"#/api/Ext-method-createByAlias\" rel=\"Ext-method-createByAlias\" class=\"docClass\">Ext.createByAlias</a>\nIf <a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> is <a href=\"#/api/Ext.Loader-method-setConfig\" rel=\"Ext.Loader-method-setConfig\" class=\"docClass\">enabled</a> and the class has not been defined yet, it will\nattempt to load the class via synchronous loading.</p>\n\n<pre><code>var window = Ext.ClassManager.instantiateByAlias('widget.window', { width: 600, height: 800, ... });\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "alias",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "args",
          "doc": "<p>,... Additional arguments after the alias will be passed to the\nclass constructor.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>instance</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 504,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-instantiateByAlias",
      "shortDoc": "Instantiate a class by its alias; usually invoked by the convenient shorthand Ext.createByAlias\nIf Ext.Loader is enab..."
    },
    {
      "tagname": "method",
      "name": "isCreated",
      "member": "Ext.ClassManager",
      "doc": "<p>Checks if a class has already been created.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "className",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>exist</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 70,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-isCreated",
      "shortDoc": "<p>Checks if a class has already been created.</p>\n"
    },
    {
      "tagname": "method",
      "name": "registerPostprocessor",
      "member": "Ext.ClassManager",
      "doc": "<p>Register a post-processor function.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "postprocessor",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "always",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 702,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-registerPostprocessor",
      "shortDoc": "<p>Register a post-processor function.</p>\n"
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.ClassManager",
      "doc": "<p>Sets a name reference to a class.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
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
        "type": "Ext.ClassManager",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 238,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-set",
      "shortDoc": "<p>Sets a name reference to a class.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setAlias",
      "member": "Ext.ClassManager",
      "doc": "<p>Register the alias for a class.</p>\n",
      "params": [
        {
          "type": "Class/String",
          "name": "cls",
          "doc": "<p>a reference to a class or a className</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "alias",
          "doc": "<p>Alias to use when referring to this class</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 289,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-setAlias",
      "shortDoc": "<p>Register the alias for a class.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDefaultPostprocessorPosition",
      "member": "Ext.ClassManager",
      "doc": "<p>Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The post-processor name. Note that it needs to be registered with\n<a href=\"#/api/Ext.ClassManager-method-registerPostprocessor\" rel=\"Ext.ClassManager-method-registerPostprocessor\" class=\"docClass\">registerPostprocessor</a> before this</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "offset",
          "doc": "<p>The insertion position. Four possible values are:\n'first', 'last', or: 'before', 'after' (relative to the name provided in the third argument)</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "relativeName",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.ClassManager",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 730,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessorPosition",
      "shortDoc": "<p>Insert this post-processor at a specific position in the stack, optionally relative to\nany existing post-processor</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDefaultPostprocessors",
      "member": "Ext.ClassManager",
      "doc": "<p>Set the default post processors array stack which are applied to every class.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "The",
          "doc": "<p>name of a registered post processor or an array of registered names.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.ClassManager",
        "doc": "<p>this</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 718,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-setDefaultPostprocessors",
      "shortDoc": "<p>Set the default post processors array stack which are applied to every class.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setNamespace",
      "member": "Ext.ClassManager",
      "doc": "<p>Creates a namespace and assign the <code>value</code> to the created object</p>\n\n<pre><code>Ext.ClassManager.setNamespace('MyCompany.pkg.Example', someObject);\n\nalert(MyCompany.pkg.Example === someObject); // alerts true\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 173,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-ClassManager-method-setNamespace",
      "shortDoc": "Creates a namespace and assign the value to the created object\n\nExt.ClassManager.setNamespace('MyCompany.pkg.Example'..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
  "linenr": 1,
  "html_filename": "ClassManager.html",
  "href": "ClassManager.html#Ext-ClassManager",
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