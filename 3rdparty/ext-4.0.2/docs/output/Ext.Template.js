Ext.data.JsonP.Ext_Template({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
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
        "href": "Template2.html#Ext-Template-method-apply",
        "shortDoc": "Alias for applyTemplate\nReturns an HTML fragment of this template with the specified values applied. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)\nor an object (i.e. <code>{foo: 'bar'}</code>).</p>\n",
            "name": "values"
          }
        ],
        "name": "apply",
        "owner": "Ext.Template",
        "doc": "<p>Alias for <a href=\"#/api/Ext.Template-method-applyTemplate\" rel=\"Ext.Template-method-applyTemplate\" class=\"docClass\">applyTemplate</a>\nReturns an HTML fragment of this template with the specified <code>values</code> applied.</p>\n",
        "linenr": 270,
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "html_filename": "Template2.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Template2.html#Ext-Template-method-applyTemplate",
        "shortDoc": "Returns an HTML fragment of this template with the specified values applied. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>The template values. Can be an array if your params are numeric (i.e. {0}) or an object (i.e. {foo: 'bar'})</p>\n",
            "name": "values"
          }
        ],
        "name": "applyTemplate",
        "owner": "Ext.Template",
        "doc": "<p>Returns an HTML fragment of this template with the specified values applied.</p>\n",
        "linenr": 118,
        "return": {
          "type": "String",
          "doc": "<p>The HTML fragment</p>\n"
        },
        "html_filename": "Template2.html"
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
        "href": "Template2.html#Ext-Template-method-compile",
        "shortDoc": "Compiles the template into an internal function, eliminating the RegEx overhead. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
        "private": false,
        "params": [

        ],
        "name": "compile",
        "owner": "Ext.Template",
        "doc": "<p>Compiles the template into an internal function, eliminating the RegEx overhead.</p>\n",
        "linenr": 169,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>this</p>\n"
        },
        "html_filename": "Template2.html"
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
        "href": "Template2.html#Ext-Template-method-from",
        "shortDoc": "Creates a template from the passed element's value (display:none textarea, preferred) or innerHTML. ...",
        "static": true,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
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
            "doc": "<p>A configuration object</p>\n",
            "name": "config"
          }
        ],
        "name": "from",
        "owner": "Ext.Template",
        "doc": "<p>Creates a template from the passed element's value (<i>display:none</i> textarea, preferred) or innerHTML.</p>\n",
        "linenr": 59,
        "return": {
          "type": "Ext.Template",
          "doc": "<p>The created template</p>\n"
        },
        "html_filename": "Template2.html"
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
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Template2.html#Ext-Template",
  "subclasses": [
    "Ext.XTemplate"
  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/Template.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.Template",
  "doc": "<p>Represents an HTML fragment template. Templates may be <a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">precompiled</a>\nfor greater performance.</p>\n\n\n<p>An instance of this class may be created by passing to the constructor either\na single argument, or multiple arguments:</p>\n\n<div class=\"mdetail-params\"><ul>\n<li><b>single argument</b> : String/Array\n<div class=\"sub-desc\">\nThe single argument may be either a String or an Array:<ul>\n<li><tt>String</tt> : </li>\n<pre><code>var t = new Ext.Template(\"&lt;div>Hello {0}.&lt;/div>\");\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', ['foo']);\n   </code></pre>\n<li><tt>Array</tt> : </li>\nAn Array will be combined with <code>join('')</code>.\n<pre><code>var t = new Ext.Template([\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name:trim} {value:ellipsis(10)}&lt;/span&gt;',\n    '&lt;/div&gt;',\n]);\nt.<a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a>();\nt.<a href=\"#/api/Ext.Template-method-append\" rel=\"Ext.Template-method-append\" class=\"docClass\">append</a>('some-element', {id: 'myid', cls: 'myclass', name: 'foo', value: 'bar'});\n   </code></pre>\n</ul></div></li>\n<li><b>multiple arguments</b> : String, Object, Array, ...\n<div class=\"sub-desc\">\nMultiple arguments will be combined with <code>join('')</code>.\n<pre><code>var t = new Ext.Template(\n    '&lt;div name=\"{id}\"&gt;',\n        '&lt;span class=\"{cls}\"&gt;{name} {value}&lt;/span&gt;',\n    '&lt;/div&gt;',\n    // a configuration object:\n    {\n        compiled: true,      // <a href=\"#/api/Ext.Template-method-compile\" rel=\"Ext.Template-method-compile\" class=\"docClass\">compile</a> immediately\n    }\n);\n   </code></pre>\n<p><b>Notes</b>:</p>\n<div class=\"mdetail-params\"><ul>\n<li>For a list of available format functions, see <a href=\"#/api/Ext.util.Format\" rel=\"Ext.util.Format\" class=\"docClass\">Ext.util.Format</a>.</li>\n<li><code>disableFormats</code> reduces <code><a href=\"#/api/Ext.Template-method-apply\" rel=\"Ext.Template-method-apply\" class=\"docClass\">apply</a></code> time\nwhen no formatting is required.</li>\n</ul></div>\n</div></li>\n</ul></div>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Template2.html",
  "extends": "Ext.Base"
});