Ext.data.JsonP.Ext_env_Browser({
  "tagname": "class",
  "name": "Ext.env.Browser",
  "doc": "<p>Provide useful information about the current browser.\nShould not be manually instantiated unless for unit-testing; access the global instance stored in Ext.browser instead. Example:</p>\n\n<pre><code>if (Ext.browser.is.IE) {\n     // IE specific code here\n}\n\nif (Ext.browser.is.WebKit) {\n     // WebKit specific code here\n}\n\nconsole.log(\"Version \" + Ext.browser.version);\n</code></pre>\n\n\n<p>For a full list of supported values, refer to: <a href=\"#/api/Ext.env.Browser-method-is\" rel=\"Ext.env.Browser-method-is\" class=\"docClass\">is</a></p>\n\n<p>@borrows Ext.Base.extend</p>\n",
  "extends": "Ext.Base",
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

  ],
  "method": [
    {
      "tagname": "method",
      "name": "callOverridden",
      "member": "Ext.Base",
      "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-property-override\" rel=\"Ext.Base-property-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
      "params": [
        {
          "type": "Array/Arguments",
          "name": "args",
          "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>Returns the result after calling the overridden method</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 279,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-method-callOverridden",
      "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo..."
    },
    {
      "tagname": "method",
      "name": "getName",
      "member": "Ext.Base",
      "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>className</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 652,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-method-getName",
      "shortDoc": "Get the current class' name in string format.\n\nExt.define('My.cool.Class', {\n    constructor: function() {\n        al..."
    },
    {
      "tagname": "method",
      "name": "is",
      "member": "Ext.env.Browser",
      "doc": "<p>A \"hybrid\" property, can be either accessed as a method call, i.e:</p>\n\n<pre><code>if (Ext.browser.is('IE')) { ... }\n</code></pre>\n\n\n<p>or as an object with boolean properties, i.e:</p>\n\n<pre><code>if (Ext.browser.is.IE) { ... }\n</code></pre>\n\n\n<p>Versions can be conveniently checked as well. For example:</p>\n\n<pre><code>if (Ext.browser.is.IE6) { ... } // Equivalent to (Ext.browser.is.IE && Ext.browser.version.equals(6))\n</code></pre>\n\n\n<p>Note that only <a href=\"#/api/Ext.Version-method-getMajor\" rel=\"Ext.Version-method-getMajor\" class=\"docClass\">major component</a>  and <a href=\"#/api/Ext.Version-method-getShortVersion\" rel=\"Ext.Version-method-getShortVersion\" class=\"docClass\">shortVersion</a>\nvalue of the version are available via direct property checking.</p>\n\n<p>Supported values are: IE, Firefox, Safari, Chrome, Opera, WebKit, Gecko, Presto, Trident and Other</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The OS name to check</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 66,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-method-is",
      "shortDoc": "A \"hybrid\" property, can be either accessed as a method call, i.e:\n\nif (Ext.browser.is('IE')) { ... }\n\n\n\nor as an obj..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "addStatics",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 399,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-addStatics",
      "shortDoc": "Add / override static properties of this class.\n\nExt.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics(..."
    },
    {
      "tagname": "property",
      "name": "borrow",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Borrow another class' members to the prototype of this class.</p>\n\n<pre><code>Ext.define('Bank', {\n    money: '$$$',\n    printMoney: function() {\n        alert('$$$$$$$');\n    }\n});\n\nExt.define('Thief', {\n    ...\n});\n\nThief.borrow(Bank, ['money', 'printMoney']);\n\nvar steve = new Thief();\n\nalert(steve.money); // alerts '$$$'\nsteve.printMoney(); // alerts '$$$$$$$'\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 492,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-borrow",
      "shortDoc": "Borrow another class' members to the prototype of this class.\n\nExt.define('Bank', {\n    money: '$$$',\n    printMoney:..."
    },
    {
      "tagname": "property",
      "name": "create",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 340,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-create",
      "shortDoc": "Create a new instance of this Class.\n\nExt.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfi..."
    },
    {
      "tagname": "property",
      "name": "createAlias",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 670,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-createAlias",
      "shortDoc": "Create aliases for existing prototype methods. Example:\n\nExt.define('My.cool.Class', {\n    method1: function() { ... ..."
    },
    {
      "tagname": "property",
      "name": "engineName",
      "member": "Ext.env.Browser",
      "type": "String",
      "doc": "<p>Read-only - the full name of the current browser's engine\nPossible values are: WebKit, Gecko, Presto, Trident and Other</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 106,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-engineName"
    },
    {
      "tagname": "property",
      "name": "engineVersion",
      "member": "Ext.env.Browser",
      "type": "Ext.Version",
      "doc": "<p>Read-only, refer to <a href=\"#/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 113,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-engineVersion"
    },
    {
      "tagname": "property",
      "name": "implement",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 428,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-implement",
      "shortDoc": "Add methods / properties to the prototype of this class.\n\nExt.define('My.awesome.Cat', {\n    constructor: function() ..."
    },
    {
      "tagname": "property",
      "name": "isSecure",
      "member": "Ext.env.Browser",
      "type": "Boolean",
      "doc": "<p>True if the page is running over SSL</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 54,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-isSecure"
    },
    {
      "tagname": "property",
      "name": "isStrict",
      "member": "Ext.env.Browser",
      "type": "Boolean",
      "doc": "<p>True if the document is in strict mode</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 60,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-isStrict"
    },
    {
      "tagname": "property",
      "name": "name",
      "member": "Ext.env.Browser",
      "type": "String",
      "doc": "<p>Read-only - the full name of the current browser\nPossible values are: IE, Firefox, Safari, Chrome, Opera and Other</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 93,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-name"
    },
    {
      "tagname": "property",
      "name": "override",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 536,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-override",
      "shortDoc": "Override prototype members of this class. Overridden methods can be invoked via\nExt.Base.callOverridden\n\nExt.define('..."
    },
    {
      "tagname": "property",
      "name": "version",
      "member": "Ext.env.Browser",
      "type": "Ext.Version",
      "doc": "<p>Read-only, refer to <a href=\"#/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
      "linenr": 100,
      "html_filename": "Browser.html",
      "href": "Browser.html#Ext-env-Browser-property-version"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/env/Browser.js",
  "linenr": 1,
  "html_filename": "Browser.html",
  "href": "Browser.html#Ext-env-Browser",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [
    "Ext.Base"
  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});