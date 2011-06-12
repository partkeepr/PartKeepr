Ext.data.JsonP.Ext_XTemplate({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "XTemplate.html#Ext-XTemplate-cfg-codeRe",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "name": "codeRe",
        "owner": "Ext.XTemplate",
        "doc": "<p>The regular expression used to match code variables (default: matches <tt>{[expression]}</tt>).</p>\n",
        "linenr": 359,
        "html_filename": "XTemplate.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Template2.html#Ext-Template-cfg-disableFormats",
        "shortDoc": "true to disable format functions in the template. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "name": "disableFormats",
        "owner": "Ext.Template",
        "doc": "<p>true to disable format functions in the template. If the template doesn't contain format functions, setting\ndisableFormats to true will reduce apply time (defaults to false)</p>\n",
        "linenr": 111,
        "html_filename": "Template2.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-addStatics",
        "shortDoc": "Add / override static properties of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "addStatics",
        "owner": "Ext.Base",
        "doc": "<p>Add / override static properties of this class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.addStatics({\n    someProperty: 'someValue',      // My.cool.Class.someProperty = 'someValue'\n    method1: function() { ... },    // My.cool.Class.method1 = function() { ... };\n    method2: function() { ... }     // My.cool.Class.method2 = function() { ... };\n});\n</code></pre>\n",
        "linenr": 388,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-append",
        "shortDoc": "Applies the supplied values to the template and appends\nthe new node(s) to the specified el. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
            "name": "returnElement"
          }
        ],
        "name": "append",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied <code>values</code> to the template and appends\nthe new node(s) to the specified <code>el</code>.</p>\n\n<p>For example usage see the constructor.</p>\n\n",
        "linenr": 235,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "XTemplate.html#Ext-XTemplate-method-apply",
        "shortDoc": "Alias for applyTemplate\nReturns an HTML fragment of this template with the specified values applied. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          }
        ],
        "name": "apply",
        "owner": "Ext.XTemplate",
        "doc": "<p>Alias for <a href=\"#/api/Ext.XTemplate-method-applyTemplate\" rel=\"Ext.XTemplate-method-applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified values applied.</p>\n",
        "linenr": 488,
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "html_filename": "XTemplate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "XTemplate.html#Ext-XTemplate-method-applyTemplate",
        "shortDoc": "Returns an HTML fragment of this template with the specified values applied. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          }
        ],
        "name": "applyTemplate",
        "owner": "Ext.XTemplate",
        "doc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n",
        "linenr": 471,
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "html_filename": "XTemplate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with <a href=\"#/api/Ext.Base-method-override\" rel=\"Ext.Base-method-override\" class=\"docClass\">Ext.Base.override</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-callParent",
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "XTemplate.html#Ext-XTemplate-method-compile",
        "shortDoc": "Compile the template to a function for optimized performance. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "params": [

        ],
        "name": "compile",
        "owner": "Ext.XTemplate",
        "doc": "<p>Compile the template to a function for optimized performance.  Recommended if the template will be used frequently.</p>\n",
        "linenr": 480,
        "return": {
          "type": "Function",
          "doc": "<p>The compiled function</p>\n"
        },
        "html_filename": "XTemplate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-create",
        "shortDoc": "Create a new instance of this Class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "create",
        "owner": "Ext.Base",
        "doc": "<p>Create a new instance of this Class.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    ...\n});\n\nMy.cool.Class.create({\n    someConfig: true\n});\n</code></pre>\n\n<p>All parameters are passed to the constructor of the class.</p>\n",
        "linenr": 329,
        "return": {
          "type": "Object",
          "doc": "<p>the created instance.</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-createAlias",
        "shortDoc": "Create aliases for existing prototype methods. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The new method name, or an object to set multiple aliases. See\n<a href=\"#/api/Ext.Function-method-flexSetter\" rel=\"Ext.Function-method-flexSetter\" class=\"docClass\">flexSetter</a></p>\n",
            "name": "alias"
          },
          {
            "type": "String/Object",
            "optional": false,
            "doc": "<p>The original method name</p>\n",
            "name": "origin"
          }
        ],
        "name": "createAlias",
        "owner": "Ext.Base",
        "doc": "<p>Create aliases for existing prototype methods. Example:</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    method1: function() { ... },\n    method2: function() { ... }\n});\n\nvar test = new My.cool.Class();\n\nMy.cool.Class.createAlias({\n    method3: 'method1',\n    method4: 'method2'\n});\n\ntest.method3(); // test.method1()\n\nMy.cool.Class.createAlias('method5', 'method3');\n\ntest.method5(); // test.method3() -&gt; test.method1()\n</code></pre>\n",
        "linenr": 648,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "XTemplate.html#Ext-XTemplate-method-from",
        "shortDoc": "Creates a template from the passed element's value (display:none textarea, preferred) or innerHTML. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
        "private": false,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>A DOM element or its id</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "from",
        "owner": "Ext.XTemplate",
        "doc": "<p>Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.</p>\n",
        "linenr": 268,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>The created template</p>\n"
        },
        "html_filename": "XTemplate.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-getName",
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-implement",
        "shortDoc": "Add methods / properties to the prototype of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "implement",
        "owner": "Ext.Base",
        "doc": "<p>Add methods / properties to the prototype of this class.</p>\n\n<pre><code>Ext.define('My.awesome.Cat', {\n    constructor: function() {\n        ...\n    }\n});\n\n My.awesome.Cat.implement({\n     meow: function() {\n        alert('Meowww...');\n     }\n });\n\n var kitty = new My.awesome.Cat;\n kitty.meow();\n</code></pre>\n",
        "linenr": 415,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-initConfig",
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-insertAfter",
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) after el. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
            "name": "returnElement"
          }
        ],
        "name": "insertAfter",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) after el.</p>\n",
        "linenr": 224,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-insertBefore",
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) before el. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
            "name": "returnElement"
          }
        ],
        "name": "insertBefore",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) before el.</p>\n",
        "linenr": 213,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-insertFirst",
        "shortDoc": "Applies the supplied values to the template and inserts the new node(s) as the first child of el. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
            "name": "returnElement"
          }
        ],
        "name": "insertFirst",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and inserts the new node(s) as the first child of el.</p>\n",
        "linenr": 202,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-override",
        "shortDoc": "Override prototype members of this class. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "members"
          }
        ],
        "name": "override",
        "owner": "Ext.Base",
        "doc": "<p>Override prototype members of this class. Overridden methods can be invoked via\n<a href=\"#/api/Ext.Base-method-callOverridden\" rel=\"Ext.Base-method-callOverridden\" class=\"docClass\">Ext.Base.callOverridden</a></p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 518,
        "return": {
          "type": "Ext.Base",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Base3.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-overwrite",
        "shortDoc": "Applies the supplied values to the template and overwrites the content of el with the new node(s). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The context element</p>\n",
            "name": "el"
          },
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) true to return a <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> (defaults to undefined)</p>\n",
            "name": "returnElement"
          }
        ],
        "name": "overwrite",
        "owner": "Ext.Template",
        "doc": "<p>Applies the supplied values to the template and overwrites the content of el with the new node(s).</p>\n",
        "linenr": 256,
        "return": {
          "type": "HTMLElement/Ext.core.Element",
          "doc": "<p>The new node or Element</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-set",
        "shortDoc": "Sets the HTML used as the template and optionally compiles it. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "html"
          },
          {
            "type": "Boolean",
            "optional": true,
            "doc": "<p>(optional) True to compile the template (defaults to undefined)</p>\n",
            "name": "compile"
          }
        ],
        "name": "set",
        "owner": "Ext.Template",
        "doc": "<p>Sets the HTML used as the template and optionally compiles it.</p>\n",
        "linenr": 153,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "method",
        "href": "Base3.html#Ext-Base-method-statics",
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "params": [

        ],
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "html_filename": "Base3.html"
      }
    ],
    "property": [
      {
        "type": "Class",
        "deprecated": null,
        "alias": null,
        "protected": true,
        "tagname": "property",
        "href": "Base3.html#Ext-Base-property-self",
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [
    "Ext.Base",
    "Ext.Template"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "XTemplate.html#Ext-XTemplate",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/XTemplate.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.XTemplate",
  "doc": "<p>A template class that supports advanced functionality like:<div class=\"mdetail-params\"><ul>\n<li>Autofilling arrays using templates and sub-templates</li>\n<li>Conditional processing with basic comparison operators</li>\n<li>Basic math function support</li>\n<li>Execute arbitrary inline code with special built-in template variables</li>\n<li>Custom member functions</li>\n<li>Many special tags and built-in operators that aren't defined as part of\nthe API, but are supported in the templates that can be created</li>\n</ul></div></p>\n\n\n<p>XTemplate provides the templating mechanism built into:<div class=\"mdetail-params\"><ul>\n<li><a href=\"#/api/Ext.view.View\" rel=\"Ext.view.View\" class=\"docClass\">Ext.view.View</a></li>\n</ul></div></p>\n\n\n<p>The <a href=\"#/api/Ext.Template\" rel=\"Ext.Template\" class=\"docClass\">Ext.Template</a> describes\nthe acceptable parameters to pass to the constructor. The following\nexamples demonstrate all of the supported features.</p></p>\n\n<div class=\"mdetail-params\"><ul>\n\n<li><b><u>Sample Data</u></b>\n<div class=\"sub-desc\">\n<p>This is the data object used for reference in each code example:</p>\n<pre><code>var data = {\nname: 'Tommy Maintz',\ntitle: 'Lead Developer',\ncompany: 'Sencha Inc.',\nemail: 'tommy@sencha.com',\naddress: '5 Cups Drive',\ncity: 'Palo Alto',\nstate: 'CA',\nzip: '44102',\ndrinks: ['Coffee', 'Soda', 'Water'],\nkids: [{\n        name: 'Joshua',\n        age:3\n    },{\n        name: 'Matthew',\n        age:2\n    },{\n        name: 'Solomon',\n        age:0\n}]\n};\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Auto filling of arrays</u></b>\n<div class=\"sub-desc\">\n<p>The <b><tt>tpl</tt></b> tag and the <b><tt>for</tt></b> operator are used\nto process the provided data object:\n<ul>\n<li>If the value specified in <tt>for</tt> is an array, it will auto-fill,\nrepeating the template block inside the <tt>tpl</tt> tag for each item in the\narray.</li>\n<li>If <tt>for=\".\"</tt> is specified, the data object provided is examined.</li>\n<li>While processing an array, the special variable <tt>{#}</tt>\nwill provide the current array index + 1 (starts at 1, not 0).</li>\n</ul>\n</p>\n<pre><code>&lt;tpl <b>for</b>=\".\">...&lt;/tpl>       // loop through array at root node\n&lt;tpl <b>for</b>=\"foo\">...&lt;/tpl>     // loop through array at foo node\n&lt;tpl <b>for</b>=\"foo.bar\">...&lt;/tpl> // loop through array at foo.bar node\n </code></pre>\nUsing the sample data above:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Kids: ',\n    '&lt;tpl <b>for</b>=\".\">',       // process the data.kids node\n        '&lt;p>{#}. {name}&lt;/p>',  // use current array index to autonumber\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data.kids); // pass the kids property of the data object\n </code></pre>\n<p>An example illustrating how the <b><tt>for</tt></b> property can be leveraged\nto access specified members of the provided data object to populate the template:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Title: {title}&lt;/p>',\n    '&lt;p>Company: {company}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl <b>for=\"kids\"</b>>',     // interrogate the kids property within the data\n        '&lt;p>{name}&lt;/p>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);  // pass the root node of the data object\n </code></pre>\n<p>Flat arrays that contain values (and not objects) can be auto-rendered\nusing the special <b><tt>{.}</tt></b> variable inside a loop.  This variable\nwill represent the value of the array at the current index:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>{name}\\&#39;s favorite beverages:&lt;/p>',\n    '&lt;tpl for=\"drinks\">',\n        '&lt;div> - {.}&lt;/div>',\n    '&lt;/tpl>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n<p>When processing a sub-template, for example while looping through a child array,\nyou can access the parent object's members via the <b><tt>parent</tt></b> object:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',\n            '&lt;p>{name}&lt;/p>',\n            '&lt;p>Dad: {<b>parent</b>.name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Conditional processing with basic comparison operators</u></b>\n<div class=\"sub-desc\">\n<p>The <b><tt>tpl</tt></b> tag and the <b><tt>if</tt></b> operator are used\nto provide conditional checks for deciding whether or not to render specific\nparts of the template. Notes:<div class=\"sub-desc\"><ul>\n<li>Double quotes must be encoded if used within the conditional</li>\n<li>There is no <tt>else</tt> operator &mdash; if needed, two opposite\n<tt>if</tt> statements should be used.</li>\n</ul></div>\n<pre><code>&lt;tpl if=\"age &gt; 1 &amp;&amp; age &lt; 10\">Child&lt;/tpl>\n&lt;tpl if=\"age >= 10 && age < 18\">Teenager&lt;/tpl>\n&lt;tpl <b>if</b>=\"this.isGirl(name)\">...&lt;/tpl>\n&lt;tpl <b>if</b>=\"id==\\'download\\'\">...&lt;/tpl>\n&lt;tpl <b>if</b>=\"needsIcon\">&lt;img src=\"{icon}\" class=\"{iconCls}\"/>&lt;/tpl>\n// no good:\n&lt;tpl if=\"name == \"Tommy\"\">Hello&lt;/tpl>\n// encode &#34; if it is part of the condition, e.g.\n&lt;tpl if=\"name == &#38;quot;Tommy&#38;quot;\">Hello&lt;/tpl>\n</code></pre>\nUsing the sample data above:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',\n            '&lt;p>{name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Basic math support</u></b>\n<div class=\"sub-desc\">\n<p>The following basic math operators may be applied directly on numeric\ndata values:</p>\n<pre>+ - * /\n</pre>\nFor example:\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"age &amp;gt; 1\">',  // <-- Note that the &gt; is encoded\n            '&lt;p>{#}: {name}&lt;/p>',  // <-- Auto-number each item\n            '&lt;p>In 5 Years: {age+5}&lt;/p>',  // <-- Basic math\n            '&lt;p>Dad: {parent.name}&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>'\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n\n<li><b><u>Execute arbitrary inline code with special built-in template variables</u></b>\n<div class=\"sub-desc\">\n<p>Anything between <code>{[ ... ]}</code> is considered code to be executed\nin the scope of the template. There are some special variables available in that code:\n<ul>\n<li><b><tt>values</tt></b>: The values in the current scope. If you are using\nscope changing sub-templates, you can change what <tt>values</tt> is.</li>\n<li><b><tt>parent</tt></b>: The scope (values) of the ancestor template.</li>\n<li><b><tt>xindex</tt></b>: If you are in a looping template, the index of the\nloop you are in (1-based).</li>\n<li><b><tt>xcount</tt></b>: If you are in a looping template, the total length\nof the array you are looping.</li>\n</ul>\nThis example demonstrates basic row striping using an inline code block and the\n<tt>xindex</tt> variable:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Company: {[values.company.toUpperCase() + \", \" + values.title]}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;div class=\"{[xindex % 2 === 0 ? \"even\" : \"odd\"]}\">',\n        '{name}',\n        '&lt;/div>',\n    '&lt;/tpl>&lt;/p>'\n );\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n<li><b><u>Template member functions</u></b>\n<div class=\"sub-desc\">\n<p>One or more member functions can be specified in a configuration\nobject passed into the XTemplate constructor for more complex processing:</p>\n<pre><code>var tpl = new Ext.XTemplate(\n    '&lt;p>Name: {name}&lt;/p>',\n    '&lt;p>Kids: ',\n    '&lt;tpl for=\"kids\">',\n        '&lt;tpl if=\"this.isGirl(name)\">',\n            '&lt;p>Girl: {name} - {age}&lt;/p>',\n        '&lt;/tpl>',\n         // use opposite if statement to simulate 'else' processing:\n        '&lt;tpl if=\"this.isGirl(name) == false\">',\n            '&lt;p>Boy: {name} - {age}&lt;/p>',\n        '&lt;/tpl>',\n        '&lt;tpl if=\"this.isBaby(age)\">',\n            '&lt;p>{name} is a baby!&lt;/p>',\n        '&lt;/tpl>',\n    '&lt;/tpl>&lt;/p>',\n    {\n        // XTemplate configuration:\n        compiled: true,\n        // member functions:\n        isGirl: function(name){\n           return name == 'Sara Grace';\n        },\n        isBaby: function(age){\n           return age < 1;\n        }\n    }\n);\ntpl.overwrite(panel.body, data);\n </code></pre>\n</div>\n</li>\n\n</ul></div>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "XTemplate.html",
  "extends": "Ext.Template"
});