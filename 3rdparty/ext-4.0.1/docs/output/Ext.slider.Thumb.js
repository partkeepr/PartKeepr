Ext.data.JsonP.Ext_slider_Thumb({
  "tagname": "class",
  "name": "Ext.slider.Thumb",
  "doc": "<p>Represents a single thumb element on a Slider. This would not usually be created manually and would instead\nbe created internally by an <a href=\"#/api/Ext.slider.Multi\" rel=\"Ext.slider.Multi\" class=\"docClass\">Ext.Slider</a>.</p>\n",
  "extends": "Ext.Base",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": false,
  "private": true,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "constrain",
      "member": "Ext.slider.Thumb",
      "type": "Boolean",
      "doc": "<p>True to constrain the thumb so that it cannot overlap its siblings</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 33,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-cfg-constrain"
    },
    {
      "tagname": "cfg",
      "name": "slider",
      "member": "Ext.slider.Thumb",
      "type": "Ext.slider.MultiSlider",
      "doc": "<p>The Slider to render to (required)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 18,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-cfg-slider"
    }
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
      "name": "disable",
      "member": "Ext.slider.Thumb",
      "doc": "<p>Disables the thumb if it is currently enabled</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 104,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-method-disable",
      "shortDoc": "<p>Disables the thumb if it is currently enabled</p>\n"
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.slider.Thumb",
      "doc": "<p>Enables the thumb if it is currently disabled</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 92,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-method-enable",
      "shortDoc": "<p>Enables the thumb if it is currently disabled</p>\n"
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
      "name": "initEvents",
      "member": "Ext.slider.Thumb",
      "doc": "<p>Sets up an <a href=\"#/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a> for this thumb</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 116,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-method-initEvents",
      "shortDoc": "<p>Sets up an <a href=\"#/api/Ext.dd.DragTracker\" rel=\"Ext.dd.DragTracker\" class=\"docClass\">Ext.dd.DragTracker</a> for this thumb</p>\n"
    },
    {
      "tagname": "method",
      "name": "render",
      "member": "Ext.slider.Thumb",
      "doc": "<p>Renders the thumb into a slider</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 45,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-method-render",
      "shortDoc": "<p>Renders the thumb into a slider</p>\n"
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
      "name": "slider",
      "member": "Ext.slider.Thumb",
      "type": "Ext.slider.MultiSlider",
      "doc": "<p>The slider this thumb is contained within</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
      "linenr": 25,
      "html_filename": "Thumb.html",
      "href": "Thumb.html#Ext-slider-Thumb-property-slider"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/slider/Thumb.js",
  "linenr": 1,
  "html_filename": "Thumb.html",
  "href": "Thumb.html#Ext-slider-Thumb",
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