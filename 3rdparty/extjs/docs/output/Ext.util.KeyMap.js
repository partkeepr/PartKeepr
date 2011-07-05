Ext.data.JsonP.Ext_util_KeyMap({
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
  "href": "KeyMap.html#Ext-util-KeyMap",
  "members": {
    "cfg": [

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
            "doc": "<p>The binding (see <a href=\"#/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>)</p>\n",
            "name": "binding"
          },
          {
            "type": "String",
            "optional": true,
            "doc": "<p>(optional) The event to bind to (defaults to \"keydown\")</p>\n",
            "name": "eventName"
          }
        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Creates new KeyMap. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Creates new KeyMap.</p>\n",
        "linenr": 46,
        "html_filename": "KeyMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/Array",
            "optional": false,
            "doc": "<p>A single KeyMap config or an array of configs</p>\n",
            "name": "binding"
          }
        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-addBinding",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Add a new binding to this KeyMap. ...",
        "static": false,
        "name": "addBinding",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Add a new binding to this KeyMap. The following config object properties are supported:</p>\n\n<pre>Property            Type             Description\n----------          ---------------  ----------------------------------------------------------------------\nkey                 String/Array     A single keycode or an array of keycodes to handle\nshift               Boolean          True to handle key only when shift is pressed, False to handle the key only when shift is not pressed (defaults to undefined)\nctrl                Boolean          True to handle key only when ctrl is pressed, False to handle the key only when ctrl is not pressed (defaults to undefined)\nalt                 Boolean          True to handle key only when alt is pressed, False to handle the key only when alt is not pressed (defaults to undefined)\nhandler             Function         The function to call when KeyMap finds the expected key combination\nfn                  Function         Alias of handler (for backwards-compatibility)\nscope               Object           The scope of the callback function\ndefaultEventAction  String           A default action to apply to the event. Possible values are: stopEvent, stopPropagation, preventDefault. If no value is set no action is performed. \n</pre>\n\n\n<p>Usage:</p>\n\n<pre><code>// Create a KeyMap\nvar map = new Ext.util.KeyMap(document, {\n    key: Ext.EventObject.ENTER,\n    fn: handleKey,\n    scope: this\n});\n\n//Add a new binding to the existing KeyMap later\nmap.addBinding({\n    key: 'abc',\n    shift: true,\n    fn: handleKey,\n    scope: this\n});\n</code></pre>\n\n",
        "linenr": 68,
        "html_filename": "KeyMap.html"
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
            "doc": "<p>True to also remove the attached element</p>\n",
            "name": "removeEl"
          }
        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-destroy",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Destroys the KeyMap instance and removes all handlers. ...",
        "static": false,
        "name": "destroy",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Destroys the KeyMap instance and removes all handlers.</p>\n",
        "linenr": 297,
        "html_filename": "KeyMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-disable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Disable this KeyMap ...",
        "static": false,
        "name": "disable",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Disable this KeyMap</p>\n",
        "linenr": 275,
        "html_filename": "KeyMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-enable",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Enables this KeyMap ...",
        "static": false,
        "name": "enable",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Enables this KeyMap</p>\n",
        "linenr": 265,
        "html_filename": "KeyMap.html"
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

        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-isEnabled",
        "return": {
          "type": "Boolean",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Returns true if this KeyMap is enabled ...",
        "static": false,
        "name": "isEnabled",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Returns true if this KeyMap is enabled</p>\n",
        "linenr": 257,
        "html_filename": "KeyMap.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Number/Array/Object",
            "optional": false,
            "doc": "<p>Either the numeric key code, array of key codes or an object with the\nfollowing options:\n{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</p>\n",
            "name": "key"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
            "name": "scope"
          }
        ],
        "href": "KeyMap.html#Ext-util-KeyMap-method-on",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Shorthand for adding a single key listener ...",
        "static": false,
        "name": "on",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Shorthand for adding a single key listener</p>\n",
        "linenr": 229,
        "html_filename": "KeyMap.html"
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
        "href": "KeyMap.html#Ext-util-KeyMap-method-setDisabled",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
        "private": false,
        "shortDoc": "Convenience function for setting disabled/enabled by boolean. ...",
        "static": false,
        "name": "setDisabled",
        "owner": "Ext.util.KeyMap",
        "doc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n",
        "linenr": 285,
        "html_filename": "KeyMap.html"
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
  "filename": "/mnt/ebs/nightly/git/SDK/extjs/src/util/KeyMap.js",
  "private": false,
  "alternateClassNames": [
    "Ext.KeyMap"
  ],
  "static": false,
  "name": "Ext.util.KeyMap",
  "doc": "<p>Handles mapping keys to actions for an element. One key map can be used for multiple actions.\nThe constructor accepts the same config object as defined by <a href=\"#/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>.\nIf you bind a callback function to a KeyMap, anytime the KeyMap handles an expected key\ncombination it will call the function with this signature (if the match is a multi-key\ncombination the callback will still be called only once): (String key, <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> e)\nA KeyMap can also handle a string representation of keys.<br />\nUsage:</p>\n\n<pre><code>// map one key by key code\nvar map = new Ext.util.KeyMap(\"my-element\", {\n    key: 13, // or Ext.EventObject.ENTER\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to one action by string\nvar map = new Ext.util.KeyMap(\"my-element\", {\n    key: \"a\\r\\n\\t\",\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to multiple actions by strings and array of codes\nvar map = new Ext.util.KeyMap(\"my-element\", [\n    {\n        key: [10,13],\n        fn: function(){ alert(\"Return was pressed\"); }\n    }, {\n        key: \"abc\",\n        fn: function(){ alert('a, b or c was pressed'); }\n    }, {\n        key: \"\\t\",\n        ctrl:true,\n        shift:true,\n        fn: function(){ alert('Control + shift + tab was pressed.'); }\n    }\n]);\n</code></pre>\n\n\n<p><b>Note: A KeyMap starts enabled</b></p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "KeyMap.html",
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