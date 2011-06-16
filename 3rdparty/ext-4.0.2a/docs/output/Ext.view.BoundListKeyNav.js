Ext.data.JsonP.Ext_view_BoundListKeyNav({
  "mixedInto": [

  ],
  "superclasses": [
    "Ext.Base",
    "Ext.util.KeyNav"
  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "Ext.view.BoundList",
        "deprecated": null,
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-cfg-boundList",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "shortDoc": "@required\nThe Ext.view.BoundList instance for which key navigation will be managed. ...",
        "static": false,
        "name": "boundList",
        "owner": "Ext.view.BoundListKeyNav",
        "doc": "<p>@required\nThe <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">Ext.view.BoundList</a> instance for which key navigation will be managed. This is required.</p>\n",
        "linenr": 12,
        "html_filename": "BoundListKeyNav.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-defaultEventAction",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "The method to call on the Ext.EventObject after this KeyNav intercepts a key. ...",
        "static": false,
        "name": "defaultEventAction",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>The method to call on the <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> after this KeyNav intercepts a key.  Valid values are\n<a href=\"#/api/Ext.EventObject-method-stopEvent\" rel=\"Ext.EventObject-method-stopEvent\" class=\"docClass\">Ext.EventObject.stopEvent</a>, <a href=\"#/api/Ext.EventObject-method-preventDefault\" rel=\"Ext.EventObject-method-preventDefault\" class=\"docClass\">Ext.EventObject.preventDefault</a> and\n<a href=\"#/api/Ext.EventObject-method-stopPropagation\" rel=\"Ext.EventObject-method-stopPropagation\" class=\"docClass\">Ext.EventObject.stopPropagation</a> (defaults to 'stopEvent')</p>\n",
        "linenr": 110,
        "html_filename": "KeyNav.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-disabled",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "static": false,
        "name": "disabled",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>True to disable this KeyNav instance (defaults to false)</p>\n",
        "linenr": 104,
        "html_filename": "KeyNav.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "KeyNav.html#Ext-util-KeyNav-cfg-forceKeyDown",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Handle the keydown event instead of keypress (defaults to false). ...",
        "static": false,
        "name": "forceKeyDown",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Handle the keydown event instead of keypress (defaults to false).  KeyNav automatically does this for IE since\nIE does not propagate special keys on keypress, but setting this to true will force other browsers to also\nhandle keydown instead of keypress.</p>\n",
        "linenr": 118,
        "html_filename": "KeyNav.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>The element to bind to</p>\n",
            "name": "el"
          },
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>The config</p>\n",
            "name": "config"
          }
        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Creates new KeyNav. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Creates new KeyNav.</p>\n",
        "linenr": 48,
        "html_filename": "KeyNav.html"
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
          {
            "type": "Boolean",
            "optional": false,
            "doc": "<p>True to remove the element associated with this KeyNav.</p>\n",
            "name": "removeEl"
          }
        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Destroy this KeyNav (this is the same as calling disable). ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Destroy this KeyNav (this is the same as calling disable).</p>\n",
        "linenr": 126,
        "html_filename": "KeyNav.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Disable this KeyNav ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Disable this KeyNav</p>\n",
        "linenr": 143,
        "html_filename": "KeyNav.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Enable this KeyNav ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Enable this KeyNav</p>\n",
        "linenr": 135,
        "html_filename": "KeyNav.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "forceKeyDown"
          }
        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-getKeyEvent",
        "return": {
          "type": "String",
          "doc": "<p>The type of event to listen for.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Determines the event to bind to listen for keys. ...",
        "static": false,
        "name": "getKeyEvent",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Determines the event to bind to listen for keys. Depends on the <a href=\"#/api/Ext.view.BoundListKeyNav-cfg-forceKeyDown\" rel=\"Ext.view.BoundListKeyNav-cfg-forceKeyDown\" class=\"docClass\">forceKeyDown</a> setting,\nas well as the useKeyDown option on the EventManager.</p>\n",
        "linenr": 160,
        "html_filename": "KeyNav.html"
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
            "type": "Number",
            "optional": false,
            "doc": "\n",
            "name": "index"
          }
        ],
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-method-highlightAt",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "shortDoc": "Highlights the item at the given index. ...",
        "static": false,
        "name": "highlightAt",
        "owner": "Ext.view.BoundListKeyNav",
        "doc": "<p>Highlights the item at the given index.</p>\n",
        "linenr": 67,
        "html_filename": "BoundListKeyNav.html"
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
            "type": "Object",
            "optional": false,
            "doc": "\n",
            "name": "e"
          }
        ],
        "href": "BoundListKeyNav.html#Ext-view-BoundListKeyNav-method-selectHighlighted",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
        "private": false,
        "shortDoc": "Triggers selection of the currently highlighted item according to the behavior of\nthe configured SelectionModel. ...",
        "static": false,
        "name": "selectHighlighted",
        "owner": "Ext.view.BoundListKeyNav",
        "doc": "<p>Triggers selection of the currently highlighted item according to the behavior of\nthe configured SelectionModel.</p>\n",
        "linenr": 81,
        "html_filename": "BoundListKeyNav.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Boolean",
            "optional": false,
            "doc": "\n",
            "name": "disabled"
          }
        ],
        "href": "KeyNav.html#Ext-util-KeyNav-method-setDisabled",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyNav.js",
        "private": false,
        "shortDoc": "Convenience function for setting disabled/enabled by boolean. ...",
        "static": false,
        "name": "setDisabled",
        "owner": "Ext.util.KeyNav",
        "doc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n",
        "linenr": 151,
        "html_filename": "KeyNav.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/view/BoundListKeyNav.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.view.BoundListKeyNav",
  "doc": "<p>A specialized <a href=\"#/api/Ext.util.KeyNav\" rel=\"Ext.util.KeyNav\" class=\"docClass\">Ext.util.KeyNav</a> implementation for navigating a <a href=\"#/api/Ext.view.BoundList\" rel=\"Ext.view.BoundList\" class=\"docClass\">Ext.view.BoundList</a> using\nthe keyboard. The up, down, pageup, pagedown, home, and end keys move the active highlight\nthrough the list. The enter key invokes the selection model's select action using the highlighted item.</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "BoundListKeyNav.html",
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
  "extends": "Ext.util.KeyNav"
});