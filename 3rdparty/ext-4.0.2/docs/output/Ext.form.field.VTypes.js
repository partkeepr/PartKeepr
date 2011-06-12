Ext.data.JsonP.Ext_form_field_VTypes({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [

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
        "href": "VTypes.html#Ext-form-field-VTypes-method-alpha",
        "shortDoc": "The function used to validate alpha values ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value</p>\n",
            "name": "value"
          }
        ],
        "name": "alpha",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate alpha values</p>\n",
        "linenr": 90,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "html_filename": "VTypes.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "VTypes.html#Ext-form-field-VTypes-method-alphanum",
        "shortDoc": "The function used to validate alphanumeric values ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The value</p>\n",
            "name": "value"
          }
        ],
        "name": "alphanum",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate alphanumeric values</p>\n",
        "linenr": 111,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "html_filename": "VTypes.html"
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
        "href": "VTypes.html#Ext-form-field-VTypes-method-email",
        "shortDoc": "The function used to validate email addresses. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The email address</p>\n",
            "name": "value"
          }
        ],
        "name": "email",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate email addresses.  Note that this is a very basic validation -- complete\nvalidation per the email RFC specifications is very complex and beyond the scope of this class, although\nthis function can be overridden if a more comprehensive validation scheme is desired.  See the validation\nsection of the <a href=\"http://en.wikipedia.org/wiki/E-mail_address\">Wikipedia article on email addresses</a>\nfor additional information.  This implementation is intended to validate the following emails:<tt>\n'barney@example.de', 'barney.rubble@example.com', 'barney-rubble@example.coop', 'barney+rubble@example.com'\n</tt>.</p>\n",
        "linenr": 47,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "html_filename": "VTypes.html"
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
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "VTypes.html#Ext-form-field-VTypes-method-url",
        "shortDoc": "The function used to validate URLs ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The URL</p>\n",
            "name": "value"
          }
        ],
        "name": "url",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The function used to validate URLs</p>\n",
        "linenr": 75,
        "return": {
          "type": "Boolean",
          "doc": "<p>true if the RegExp test passed, and false if not.</p>\n"
        },
        "html_filename": "VTypes.html"
      }
    ],
    "property": [
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaMask",
        "shortDoc": "The keystroke filter mask to be applied on alpha input. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphaMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on alpha input.  Defaults to:\n<tt>/[a-z_]/i</tt></p>\n",
        "linenr": 104,
        "html_filename": "VTypes.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphaText",
        "shortDoc": "The error text to display when the alpha validation function returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphaText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the alpha validation function returns false.  Defaults to:\n<tt>'This field should only contain letters and _'</tt></p>\n",
        "linenr": 98,
        "html_filename": "VTypes.html"
      },
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumMask",
        "shortDoc": "The keystroke filter mask to be applied on alphanumeric input. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphanumMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on alphanumeric input.  Defaults to:\n<tt>/[a-z0-9_]/i</tt></p>\n",
        "linenr": 125,
        "html_filename": "VTypes.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-alphanumText",
        "shortDoc": "The error text to display when the alphanumeric validation function returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "alphanumText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the alphanumeric validation function returns false.  Defaults to:\n<tt>'This field should only contain letters, numbers and _'</tt></p>\n",
        "linenr": 119,
        "html_filename": "VTypes.html"
      },
      {
        "type": "RegExp",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailMask",
        "shortDoc": "The keystroke filter mask to be applied on email input. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "emailMask",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The keystroke filter mask to be applied on email input.  See the <a href=\"#/api/Ext.form.field.VTypes-method-email\" rel=\"Ext.form.field.VTypes-method-email\" class=\"docClass\">email</a> method for\ninformation about more complex email validation. Defaults to:\n<tt>/[a-z0-9_.-@]/i</tt></p>\n",
        "linenr": 67,
        "html_filename": "VTypes.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-emailText",
        "shortDoc": "The error text to display when the email validation function returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "emailText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the email validation function returns false.  Defaults to:\n<tt>'This field should be an e-mail address in the format \"user@example.com\"'</tt></p>\n",
        "linenr": 61,
        "html_filename": "VTypes.html"
      },
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
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "VTypes.html#Ext-form-field-VTypes-property-urlText",
        "shortDoc": "The error text to display when the url validation function returns false. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
        "private": false,
        "name": "urlText",
        "owner": "Ext.form.field.VTypes",
        "doc": "<p>The error text to display when the url validation function returns false.  Defaults to:\n<tt>'This field should be a URL in the format \"http:/'+'/www.example.com\"'</tt></p>\n",
        "linenr": 83,
        "html_filename": "VTypes.html"
      }
    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": true,
  "alias": null,
  "superclasses": [
    "Ext.Base"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "VTypes.html#Ext-form-field-VTypes",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/form/field/VTypes.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.form.field.VTypes",
  "doc": "<p>This is a singleton object which contains a set of commonly used field validation functions.\nThe validations provided are basic and intended to be easily customizable and extended.</p>\n\n\n<p>To add custom VTypes specify the <code><a href=\"#/api/Ext.form.field.Text-cfg-vtype\" rel=\"Ext.form.field.Text-cfg-vtype\" class=\"docClass\">vtype</a></code> validation\ntest function, and optionally specify any corresponding error text to display and any keystroke\nfiltering mask to apply. For example:</p>\n\n\n<pre><code>// custom Vtype for vtype:'time'\nvar timeTest = /^([1-9]|1[0-9]):([0-5][0-9])(\\s[a|p]m)$/i;\nExt.apply(Ext.form.field.VTypes, {\n    //  vtype validation function\n    time: function(val, field) {\n        return timeTest.test(val);\n    },\n    // vtype Text property: The error text to display when the validation function returns false\n    timeText: 'Not a valid time.  Must be in the format \"12:34 PM\".',\n    // vtype Mask property: The keystroke filter mask\n    timeMask: /[\\d\\s:amp]/i\n});\n</code></pre>\n\n\n<p>Another example:</p>\n\n<pre><code>// custom Vtype for vtype:'IPAddress'\nExt.apply(Ext.form.field.VTypes, {\n    IPAddress:  function(v) {\n        return /^\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}$/.test(v);\n    },\n    IPAddressText: 'Must be a numeric IP address',\n    IPAddressMask: /[\\d\\.]/i\n});\n</code></pre>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "VTypes.html",
  "extends": "Ext.Base"
});