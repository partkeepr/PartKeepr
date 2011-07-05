Ext.data.JsonP.Ext_dd_StatusProxy({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "StatusProxy.html#Ext-dd-StatusProxy",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropAllowed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "static": false,
        "name": "dropAllowed",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n",
        "linenr": 34,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "StatusProxy.html#Ext-dd-StatusProxy-cfg-dropNotAllowed",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "static": false,
        "name": "dropNotAllowed",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n",
        "linenr": 39,
        "html_filename": "StatusProxy.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Creates new StatusProxy. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Creates new StatusProxy.</p>\n",
        "linenr": 9,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object</p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callOverridden",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result after calling the overridden method</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the original method that was previously overridden with Ext.Base.override\n\nExt.define('My.Cat', {\n    constructo...",
        "static": false,
        "name": "callOverridden",
        "owner": "Ext.Base",
        "doc": "<p>Call the original method that was previously overridden with Ext.Base.override</p>\n\n<pre><code>Ext.define('My.Cat', {\n    constructor: function() {\n        alert(\"I'm a cat!\");\n\n        return this;\n    }\n});\n\nMy.Cat.override({\n    constructor: function() {\n        alert(\"I'm going to be a cat!\");\n\n        var instance = this.callOverridden();\n\n        alert(\"Meeeeoooowwww\");\n\n        return instance;\n    }\n});\n\nvar kitty = new My.Cat(); // alerts \"I'm going to be a cat!\"\n                          // alerts \"I'm a cat!\"\n                          // alerts \"Meeeeoooowwww\"\n</code></pre>\n",
        "linenr": 269,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array/Arguments",
            "optional": false,
            "doc": "<p>The arguments, either an array or the <code>arguments</code> object\nfrom the current method, for example: <code>this.callParent(arguments)</code></p>\n",
            "name": "args"
          }
        ],
        "href": "Base3.html#Ext-Base-method-callParent",
        "return": {
          "type": "Mixed",
          "doc": "<p>Returns the result from the superclass' method</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Call the parent's overridden method. ...",
        "static": false,
        "name": "callParent",
        "owner": "Ext.Base",
        "doc": "<p>Call the parent's overridden method. For example:</p>\n\n<pre><code>Ext.define('My.own.A', {\n    constructor: function(test) {\n        alert(test);\n    }\n});\n\nExt.define('My.own.B', {\n    extend: 'My.own.A',\n\n    constructor: function(test) {\n        alert(test);\n\n        this.callParent([test + 1]);\n    }\n});\n\nExt.define('My.own.C', {\n    extend: 'My.own.B',\n\n    constructor: function() {\n        alert(\"Going to call parent's overriden constructor...\");\n\n        this.callParent(arguments);\n    }\n});\n\nvar a = new My.own.A(1); // alerts '1'\nvar b = new My.own.B(1); // alerts '1', then alerts '2'\nvar c = new My.own.C(2); // alerts \"Going to call parent's overriden constructor...\"\n                         // alerts '2', then alerts '3'\n</code></pre>\n",
        "linenr": 124,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getEl",
        "return": {
          "type": "Ext.Layer",
          "doc": "<p>el</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Returns the underlying proxy Ext.Layer ...",
        "static": false,
        "name": "getEl",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Returns the underlying proxy <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n",
        "linenr": 89,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-getGhost",
        "return": {
          "type": "Ext.core.Element",
          "doc": "<p>el</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Returns the ghost element ...",
        "static": false,
        "name": "getGhost",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Returns the ghost element</p>\n",
        "linenr": 97,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-getName",
        "return": {
          "type": "String",
          "doc": "<p>className</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the current class' name in string format. ...",
        "static": false,
        "name": "getName",
        "owner": "Ext.Base",
        "doc": "<p>Get the current class' name in string format.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    constructor: function() {\n        alert(this.self.getName()); // alerts 'My.cool.Class'\n    }\n});\n\nMy.cool.Class.getName(); // 'My.cool.Class'\n</code></pre>\n",
        "linenr": 631,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to reset the status and clear the ghost contents, false to preserve them</p>\n",
            "name": "clear"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-hide",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Hides the proxy ...",
        "static": false,
        "name": "hide",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Hides the proxy</p>\n",
        "linenr": 105,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "config"
          }
        ],
        "href": "Base3.html#Ext-Base-method-initConfig",
        "return": {
          "type": "Object",
          "doc": "<p>mixins The mixin prototypes as key - value pairs</p>\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Initialize configuration for this class. ...",
        "static": false,
        "name": "initConfig",
        "owner": "Ext.Base",
        "doc": "<p>Initialize configuration for this class. a typical example:</p>\n\n<pre><code>Ext.define('My.awesome.Class', {\n    // The default config\n    config: {\n        name: 'Awesome',\n        isAwesome: true\n    },\n\n    constructor: function(config) {\n        this.initConfig(config);\n\n        return this;\n    }\n});\n\nvar awesome = new My.awesome.Class({\n    name: 'Super Awesome'\n});\n\nalert(awesome.getName()); // 'Super Awesome'\n</code></pre>\n",
        "linenr": 63,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The XY position of the element ([x, y])</p>\n",
            "name": "xy"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call after the repair is complete.</p>\n",
            "name": "callback"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.</p>\n",
            "name": "scope"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-repair",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Causes the proxy to return to its position of origin via an animation. ...",
        "static": false,
        "name": "repair",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operation by the item being dragged.</p>\n",
        "linenr": 140,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to also remove all content from the ghost, false to preserve it</p>\n",
            "name": "clearGhost"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-reset",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Resets the status indicator to the default dropNotAllowed value ...",
        "static": false,
        "name": "reset",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Resets the status indicator to the default dropNotAllowed value</p>\n",
        "linenr": 58,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String",
            "optional": false,
            "doc": "<p>The css class for the new drop status indicator image</p>\n",
            "name": "cssClass"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-setStatus",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target e...",
        "static": false,
        "name": "setStatus",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target element.</p>\n",
        "linenr": 45,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-show",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Displays this proxy ...",
        "static": false,
        "name": "show",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Displays this proxy</p>\n",
        "linenr": 125,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Base3.html#Ext-Base-method-statics",
        "return": {
          "type": "Class",
          "doc": "\n"
        },
        "protected": true,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the class from which this object was instantiated. ...",
        "static": false,
        "name": "statics",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the class from which this object was instantiated. Note that unlike <a href=\"#/api/Ext.Base-property-self\" rel=\"Ext.Base-property-self\" class=\"docClass\">Ext.Base.self</a>,\n<code>this.statics()</code> is scope-independent and it always returns the class from which it was called, regardless of what\n<code>this</code> points to during run-time</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        totalCreated: 0,\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        var statics = this.statics();\n\n        alert(statics.speciesName);     // always equals to 'Cat' no matter what 'this' refers to\n                                        // equivalent to: My.Cat.speciesName\n\n        alert(this.self.speciesName);   // dependent on 'this'\n\n        statics.totalCreated++;\n\n        return this;\n    },\n\n    clone: function() {\n        var cloned = new this.self;                      // dependent on 'this'\n\n        cloned.groupName = this.statics().speciesName;   // equivalent to: My.Cat.speciesName\n\n        return cloned;\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n\n    statics: {\n        speciesName: 'Snow Leopard'     // My.SnowLeopard.speciesName = 'Snow Leopard'\n    },\n\n    constructor: function() {\n        this.callParent();\n    }\n});\n\nvar cat = new My.Cat();                 // alerts 'Cat', then alerts 'Cat'\n\nvar snowLeopard = new My.SnowLeopard(); // alerts 'Cat', then alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));         // alerts 'My.SnowLeopard'\nalert(clone.groupName);                 // alerts 'Cat'\n\nalert(My.Cat.totalCreated);             // alerts 3\n</code></pre>\n",
        "linenr": 199,
        "html_filename": "Base3.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-stop",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Stops the repair animation if it's currently running ...",
        "static": false,
        "name": "stop",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Stops the repair animation if it's currently running</p>\n",
        "linenr": 116,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-sync",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Force the Layer to sync its shadow and shim positions to the element ...",
        "static": false,
        "name": "sync",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Force the Layer to sync its shadow and shim positions to the element</p>\n",
        "linenr": 133,
        "html_filename": "StatusProxy.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "String/HTMLElement",
            "optional": false,
            "doc": "<p>The html that will replace the current innerHTML of the ghost element, or a\nDOM node to append as the child of the ghost element (in which case the innerHTML will be cleared first).</p>\n",
            "name": "html"
          }
        ],
        "href": "StatusProxy.html#Ext-dd-StatusProxy-method-update",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
        "private": false,
        "shortDoc": "Updates the contents of the ghost element ...",
        "static": false,
        "name": "update",
        "owner": "Ext.dd.StatusProxy",
        "doc": "<p>Updates the contents of the ghost element</p>\n",
        "linenr": 70,
        "html_filename": "StatusProxy.html"
      }
    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [
      {
        "inheritable": false,
        "type": "Class",
        "deprecated": null,
        "href": "Base3.html#Ext-Base-property-self",
        "protected": true,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/class/Base.js",
        "private": false,
        "shortDoc": "Get the reference to the current class from which this object was instantiated. ...",
        "static": false,
        "name": "self",
        "owner": "Ext.Base",
        "doc": "<p>Get the reference to the current class from which this object was instantiated. Unlike <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>,\n<code>this.self</code> is scope-dependent and it's meant to be used for dynamic inheritance. See <a href=\"#/api/Ext.Base-method-statics\" rel=\"Ext.Base-method-statics\" class=\"docClass\">Ext.Base.statics</a>\nfor a detailed comparison</p>\n\n<pre><code>Ext.define('My.Cat', {\n    statics: {\n        speciesName: 'Cat' // My.Cat.speciesName = 'Cat'\n    },\n\n    constructor: function() {\n        alert(this.self.speciesName); / dependent on 'this'\n\n        return this;\n    },\n\n    clone: function() {\n        return new this.self();\n    }\n});\n\n\nExt.define('My.SnowLeopard', {\n    extend: 'My.Cat',\n    statics: {\n        speciesName: 'Snow Leopard'         // My.SnowLeopard.speciesName = 'Snow Leopard'\n    }\n});\n\nvar cat = new My.Cat();                     // alerts 'Cat'\nvar snowLeopard = new My.SnowLeopard();     // alerts 'Snow Leopard'\n\nvar clone = snowLeopard.clone();\nalert(Ext.getClassName(clone));             // alerts 'My.SnowLeopard'\n</code></pre>\n",
        "linenr": 18,
        "html_filename": "Base3.html"
      }
    ]
  },
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/dd/StatusProxy.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.dd.StatusProxy",
  "doc": "<p>A specialized drag proxy that supports a drop status icon, <a href=\"#/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> styles and auto-repair.  This is the\ndefault drag proxy used by all Ext.dd components.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "StatusProxy.html",
  "statics": {
    "cfg": [

    ],
    "method": [

    ],
    "event": [

    ],
    "css_var": [

    ],
    "css_mixin": [

    ],
    "property": [

    ]
  },
  "extends": "Ext.Base"
});