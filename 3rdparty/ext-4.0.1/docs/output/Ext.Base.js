Ext.data.JsonP.Ext_Base({
  "tagname": "class",
  "name": "Ext.Base",
  "doc": "<p>The root of all classes created with <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>\nAll prototype and static members of this class are inherited by any other class</p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Jacky Nguyen <jacky@sencha.com>",
  "docauthor": "Jacky Nguyen <jacky@sencha.com>",
  "singleton": false,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "callOverridden",
      "member": "Ext.Base",
      "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-property-override\" rel=\"Ext.Base-property-override\" class=\"docClass\">override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
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
      "shortDoc": "Call the original method that was previously overridden with override\n\nExt.define('My.Cat', {\n    constructor: functi..."
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
      "name": "override",
      "member": "Ext.Base",
      "type": "Function",
      "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
      "linenr": 536,
      "html_filename": "Base3.html",
      "href": "Base3.html#Ext-Base-property-override",
      "shortDoc": "Override prototype members of this class. Overridden methods can be invoked via\ncallOverridden\n\nExt.define('My.Cat', ..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Base.js",
  "linenr": 1,
  "html_filename": "Base3.html",
  "href": "Base3.html#Ext-Base",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [
    "Ext.form.action.Action",
    "Ext.slider.Thumb",
    "Ext.env.Browser"
  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});