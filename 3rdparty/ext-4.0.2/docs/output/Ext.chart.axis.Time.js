Ext.data.JsonP.Ext_chart_axis_Time({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-dashSize",
        "shortDoc": "The size of the dash marker. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "dashSize",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The size of the dash marker. Default's 3.</p>\n",
        "linenr": 110,
        "html_filename": "Axis.html"
      },
      {
        "type": "Boolean | Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-grid",
        "shortDoc": "The grid configuration enables you to set a background grid for an axis. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "grid",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The grid configuration enables you to set a background grid for an axis.\nIf set to <em>true</em> on a vertical axis, vertical lines will be drawn.\nIf set to <em>true</em> on a horizontal axis, horizontal lines will be drawn.\nIf both are set, a proper grid with horizontal and vertical lines will be drawn.</p>\n\n<p>You can set specific options for the grid configuration for odd and/or even lines/rows.\nSince the rows being drawn are rectangle sprites, you can set to an odd or even property\nall styles that apply to <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. For more information on all the style\nproperties you can set please take a look at <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>. Some useful style properties are <code>opacity</code>, <code>fill</code>, <code>stroke</code>, <code>stroke-width</code>, etc.</p>\n\n<p>The possible values for a grid option are then <em>true</em>, <em>false</em>, or an object with <code>{ odd, even }</code> properties\nwhere each property contains a sprite style descriptor object that is defined in <a href=\"#/api/Ext.draw.Sprite\" rel=\"Ext.draw.Sprite\" class=\"docClass\">Ext.draw.Sprite</a>.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Numeric',\n    grid: true,\n    position: 'left',\n    fields: ['data1', 'data2', 'data3'],\n    title: 'Number of Hits',\n    grid: {\n        odd: {\n            opacity: 1,\n            fill: '#ddd',\n            stroke: '#bbb',\n            'stroke-width': 1\n        }\n    }\n}, {\n    type: 'Category',\n    position: 'bottom',\n    fields: ['name'],\n    title: 'Month of the Year',\n    grid: true\n}]\n</code></pre>\n",
        "linenr": 56,
        "html_filename": "Axis.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-length",
        "shortDoc": "Offset axis position. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "length",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Offset axis position. Default's 0.</p>\n",
        "linenr": 125,
        "html_filename": "Axis.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-majorTickSteps",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "majorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>If <code>minimum</code> and <code>maximum</code> are specified it forces the number of major ticks to the specified value.</p>\n",
        "linenr": 97,
        "html_filename": "Axis.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-minorTickSteps",
        "shortDoc": "The number of small ticks between two major ticks. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "minorTickSteps",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>The number of small ticks between two major ticks. Default is zero.</p>\n",
        "linenr": 102,
        "html_filename": "Axis.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-position",
        "shortDoc": "Where to set the axis. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "position",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Where to set the axis. Available options are <code>left</code>, <code>bottom</code>, <code>right</code>, <code>top</code>. Default's <code>bottom</code>.</p>\n",
        "linenr": 116,
        "html_filename": "Axis.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Axis.html#Ext-chart-axis-Axis-cfg-width",
        "shortDoc": "Offset axis width. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "name": "width",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Offset axis width. Default's 0.</p>\n",
        "linenr": 131,
        "html_filename": "Axis.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Abstract.html#Ext-chart-axis-Abstract-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Axis. ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config options.</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Abstract.js",
        "doc": "<p>Creates new Axis.</p>\n",
        "owner": "Ext.chart.axis.Abstract",
        "name": "Time",
        "html_filename": "Abstract.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 13
      },
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
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawAxis",
        "shortDoc": "Renders the axis into the screen and updates it's position. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "init"
          }
        ],
        "name": "drawAxis",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders the axis into the screen and updates it's position.</p>\n",
        "linenr": 240,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Axis.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawGrid",
        "shortDoc": "Renders an horizontal and/or vertical grid into the Surface. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "params": [

        ],
        "name": "drawGrid",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders an horizontal and/or vertical grid into the Surface.</p>\n",
        "linenr": 374,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Axis.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Axis.html#Ext-chart-axis-Axis-method-drawLabel",
        "shortDoc": "Renders the labels in the axes. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "params": [

        ],
        "name": "drawLabel",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Renders the labels in the axes.</p>\n",
        "linenr": 688,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Axis.html"
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
        "protected": false,
        "tagname": "method",
        "href": "Axis.html#Ext-chart-axis-Axis-method-setTitle",
        "shortDoc": "Updates the title of this axis. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Axis.js",
        "private": false,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "title"
          }
        ],
        "name": "setTitle",
        "owner": "Ext.chart.axis.Axis",
        "doc": "<p>Updates the title of this axis.</p>\n",
        "linenr": 749,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Axis.html"
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
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-aggregateOp",
        "shortDoc": "Aggregation operation when grouping. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "aggregateOp",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Aggregation operation when grouping. Possible options are 'sum', 'avg', 'max', 'min'. Default's 'sum'.</p>\n",
        "linenr": 75,
        "html_filename": "Time3.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-calculateByLabelSize",
        "shortDoc": "The minimum value drawn by the axis. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "calculateByLabelSize",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>The minimum value drawn by the axis. If not set explicitly, the axis\nminimum will be calculated automatically.</p>\n",
        "linenr": 49,
        "html_filename": "Time3.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-constrain",
        "shortDoc": "If true, the values of the chart will be rendered only if they belong between the fromDate and toDate. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "constrain",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>If true, the values of the chart will be rendered only if they belong between the fromDate and toDate.\nIf false, the time axis will adapt to the new values by adding/removing steps.\nDefault's [Ext.Date.DAY, 1].</p>\n",
        "linenr": 106,
        "html_filename": "Time3.html"
      },
      {
        "type": "String|Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-dateFormat",
        "shortDoc": "Indicates the format the date will be rendered on. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "dateFormat",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Indicates the format the date will be rendered on.\nFor example: 'M d' will render the dates as 'Jan 30', etc.</p>\n",
        "linenr": 57,
        "html_filename": "Time3.html"
      },
      {
        "type": "Date",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-fromDate",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "fromDate",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>The starting date for the time axis.</p>\n",
        "linenr": 83,
        "html_filename": "Time3.html"
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
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-step",
        "shortDoc": "An array with two components: The first is the unit of the step (day, month, year, etc). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "step",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>An array with two components: The first is the unit of the step (day, month, year, etc). The second one is the number of units for the step (1, 2, etc.).\nDefault's [Ext.Date.DAY, 1].</p>\n",
        "linenr": 97,
        "html_filename": "Time3.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-timeUnit",
        "shortDoc": "Indicates the time unit to use for each step. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "timeUnit",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>Indicates the time unit to use for each step. Can be 'day', 'month', 'year' or a comma-separated combination of all of them.\nDefault's 'year,month,day'.</p>\n",
        "linenr": 66,
        "html_filename": "Time3.html"
      },
      {
        "type": "Date",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "property",
        "href": "Time3.html#Ext-chart-axis-Time-property-toDate",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
        "private": false,
        "name": "toDate",
        "owner": "Ext.chart.axis.Time",
        "doc": "<p>The ending date for the time axis.</p>\n",
        "linenr": 90,
        "html_filename": "Time3.html"
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
    "Ext.chart.axis.Abstract",
    "Ext.chart.axis.Axis"
  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Time3.html#Ext-chart-axis-Time",
  "subclasses": [

  ],
  "static": false,
  "author": null,
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/chart/axis/Time.js",
  "private": false,
  "alternateClassNames": [
    "Ext.chart.TimeAxis"
  ],
  "name": "Ext.chart.axis.Time",
  "doc": "<p>A type of axis whose units are measured in time values. Use this axis\nfor listing dates that you will want to group or dynamically change.\nIf you just want to display dates as categories then use the\nCategory class for axis instead.</p>\n\n<p>For example:</p>\n\n<pre><code>axes: [{\n    type: 'Time',\n    position: 'bottom',\n    fields: 'date',\n    title: 'Day',\n    dateFormat: 'M d',\n    groupBy: 'year,month,day',\n    aggregateOp: 'sum',\n\n    constrain: true,\n    fromDate: new Date('1/1/11'),\n    toDate: new Date('1/7/11')\n}]\n</code></pre>\n\n<p>In this example we're creating a time axis that has as title <em>Day</em>.\nThe field the axis is bound to is <code>date</code>.\nThe date format to use to display the text for the axis labels is <code>M d</code>\nwhich is a three letter month abbreviation followed by the day number.\nThe time axis will show values for dates between <code>fromDate</code> and <code>toDate</code>.\nSince <code>constrain</code> is set to true all other values for other dates not between\nthe fromDate and toDate will not be displayed.</p>\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Time3.html",
  "extends": "Ext.chart.axis.Axis"
});