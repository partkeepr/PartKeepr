Ext.data.JsonP.Ext_util_KeyMap({
  "tagname": "class",
  "name": "Ext.util.KeyMap",
  "doc": "<p>Handles mapping keys to actions for an element. One key map can be used for multiple actions.\nThe constructor accepts the same config object as defined by <a href=\"#/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>.\nIf you bind a callback function to a KeyMap, anytime the KeyMap handles an expected key\ncombination it will call the function with this signature (if the match is a multi-key\ncombination the callback will still be called only once): (String key, <a href=\"#/api/Ext.EventObject\" rel=\"Ext.EventObject\" class=\"docClass\">Ext.EventObject</a> e)\nA KeyMap can also handle a string representation of keys.<br />\nUsage:</p>\n\n<pre><code>// map one key by key code\nvar map = new Ext.util.KeyMap(\"my-element\", {\n    key: 13, // or Ext.EventObject.ENTER\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to one action by string\nvar map = new Ext.util.KeyMap(\"my-element\", {\n    key: \"a\\r\\n\\t\",\n    fn: myHandler,\n    scope: myObject\n});\n\n// map multiple keys to multiple actions by strings and array of codes\nvar map = new Ext.util.KeyMap(\"my-element\", [\n    {\n        key: [10,13],\n        fn: function(){ alert(\"Return was pressed\"); }\n    }, {\n        key: \"abc\",\n        fn: function(){ alert('a, b or c was pressed'); }\n    }, {\n        key: \"\\t\",\n        ctrl:true,\n        shift:true,\n        fn: function(){ alert('Control + shift + tab was pressed.'); }\n    }\n]);\n</code></pre>\n\n\n<p><b>Note: A KeyMap starts enabled</b></p>\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [
    "Ext.KeyMap"
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
      "name": "KeyMap",
      "member": "Ext.util.KeyMap",
      "doc": "\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The element to bind to</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "binding",
          "doc": "<p>The binding (see <a href=\"#/api/Ext.util.KeyMap-method-addBinding\" rel=\"Ext.util.KeyMap-method-addBinding\" class=\"docClass\">addBinding</a>)</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "eventName",
          "doc": "<p>(optional) The event to bind to (defaults to \"keydown\")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 1,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "addBinding",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Add a new binding to this KeyMap. The following config object properties are supported:</p>\n\n<pre>Property            Type             Description\n----------          ---------------  ----------------------------------------------------------------------\nkey                 String/Array     A single keycode or an array of keycodes to handle\nshift               Boolean          True to handle key only when shift is pressed, False to handle the key only when shift is not pressed (defaults to undefined)\nctrl                Boolean          True to handle key only when ctrl is pressed, False to handle the key only when ctrl is not pressed (defaults to undefined)\nalt                 Boolean          True to handle key only when alt is pressed, False to handle the key only when alt is not pressed (defaults to undefined)\nhandler             Function         The function to call when KeyMap finds the expected key combination\nfn                  Function         Alias of handler (for backwards-compatibility)\nscope               Object           The scope of the callback function\ndefaultEventAction  String           A default action to apply to the event. Possible values are: stopEvent, stopPropagation, preventDefault. If no value is set no action is performed. \n</pre>\n\n\n<p>Usage:</p>\n\n<pre><code>// Create a KeyMap\nvar map = new Ext.util.KeyMap(document, {\n    key: Ext.EventObject.ENTER,\n    fn: handleKey,\n    scope: this\n});\n\n//Add a new binding to the existing KeyMap later\nmap.addBinding({\n    key: 'abc',\n    shift: true,\n    fn: handleKey,\n    scope: this\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object/Array",
          "name": "binding",
          "doc": "<p>A single KeyMap config or an array of configs</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 66,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-addBinding",
      "shortDoc": "Add a new binding to this KeyMap. The following config object properties are supported:\n\nProperty            Type    ..."
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Destroys the KeyMap instance and removes all handlers.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "removeEl",
          "doc": "<p>True to also remove the attached element</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 295,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-destroy",
      "shortDoc": "<p>Destroys the KeyMap instance and removes all handlers.</p>\n"
    },
    {
      "tagname": "method",
      "name": "disable",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Disable this KeyMap</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 273,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-disable",
      "shortDoc": "<p>Disable this KeyMap</p>\n"
    },
    {
      "tagname": "method",
      "name": "enable",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Enables this KeyMap</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 263,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-enable",
      "shortDoc": "<p>Enables this KeyMap</p>\n"
    },
    {
      "tagname": "method",
      "name": "isEnabled",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Returns true if this KeyMap is enabled</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 255,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-isEnabled",
      "shortDoc": "<p>Returns true if this KeyMap is enabled</p>\n"
    },
    {
      "tagname": "method",
      "name": "on",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Shorthand for adding a single key listener</p>\n",
      "params": [
        {
          "type": "Number/Array/Object",
          "name": "key",
          "doc": "<p>Either the numeric key code, array of key codes or an object with the\nfollowing options:\n{key: (number or array), shift: (true/false), ctrl: (true/false), alt: (true/false)}</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to call</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed. Defaults to the browser window.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 227,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-on",
      "shortDoc": "<p>Shorthand for adding a single key listener</p>\n"
    },
    {
      "tagname": "method",
      "name": "setDisabled",
      "member": "Ext.util.KeyMap",
      "doc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "disabled",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
      "linenr": 283,
      "html_filename": "KeyMap.html",
      "href": "KeyMap.html#Ext-util-KeyMap-method-setDisabled",
      "shortDoc": "<p>Convenience function for setting disabled/enabled by boolean.</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/KeyMap.js",
  "linenr": 1,
  "html_filename": "KeyMap.html",
  "href": "KeyMap.html#Ext-util-KeyMap",
  "cssVar": [

  ],
  "cssMixin": [

  ],
  "component": false,
  "superclasses": [

  ],
  "subclasses": [

  ],
  "mixedInto": [

  ],
  "allMixins": [

  ]
});