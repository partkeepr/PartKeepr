Ext.data.JsonP.Ext({
  "tagname": "class",
  "name": "Ext",
  "doc": "<p>The <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace (global object) encapsulates all classes, singletons, and utility methods provided by Sencha's libraries.</p>\n Most user interface Components are at a lower level of nesting in the namespace, but many common utility functions are provided\n as direct properties of the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace.</p>\n\n<p> Also many frequently used methods from other classes are provided as shortcuts within the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> namespace.\n For example <a href=\"#/api/Ext-method-getCmp\" rel=\"Ext-method-getCmp\" class=\"docClass\">Ext.getCmp</a> aliases <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n<p> Many applications are initiated with <a href=\"#/api/Ext-method-onReady\" rel=\"Ext-method-onReady\" class=\"docClass\">Ext.onReady</a> which is called once the DOM is ready.\n This ensures all scripts have been loaded, preventing dependency issues. For example</p>\n\n<pre><code> Ext.onReady(function(){\n     new Ext.Component({\n         renderTo: document.body,\n         html: 'DOM ready!'\n     });\n });\n</code></pre>\n\n<p>For more information about how to use the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> classes, see</p>\n\n<ul>\n<li><a href=\"http://www.sencha.com/learn/\">The Learning Center</a></li>\n<li><a href=\"http://www.sencha.com/learn/Ext_FAQ\">The FAQ</a></li>\n<li><a href=\"http://www.sencha.com/forum/\">The forums</a></li>\n</ul>\n\n",
  "extends": null,
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": null,
  "docauthor": null,
  "singleton": true,
  "private": false,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "addBehaviors",
      "member": "Ext",
      "doc": "<p>Applies event listeners to elements by selectors when the document is ready.\nThe event name is specified with an <tt>&#64;</tt> suffix.</p>\n\n<pre><code>Ext.addBehaviors({\n    // add a listener for click on all anchors in element with id foo\n    '#foo a&#64;click' : function(e, t){\n        // do something\n    },\n\n    // add the same listener to multiple selectors (separated by comma BEFORE the &#64;)\n    '#foo a, #bar span.some-class&#64;mouseover' : function(){\n        // do something\n    }\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "obj",
          "doc": "<p>The list of behaviors to apply</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 546,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-addBehaviors",
      "shortDoc": "Applies event listeners to elements by selectors when the document is ready.\nThe event name is specified with an &#64..."
    },
    {
      "tagname": "method",
      "name": "application",
      "member": "Ext",
      "doc": "<p>TBD</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 911,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-application",
      "shortDoc": "<p>TBD</p>\n"
    },
    {
      "tagname": "method",
      "name": "apply",
      "member": "Ext",
      "doc": "<p>Copies all the properties of config to the specified object.\nNote that if recursive merging and cloning without referencing the original objects / arrays is needed, use\n<a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a> instead.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "object",
          "doc": "<p>The receiver of the properties</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The source of the properties</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "defaults",
          "doc": "<p>A different object that will also be applied for default values</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>returns obj</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 34,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-apply",
      "shortDoc": "Copies all the properties of config to the specified object.\nNote that if recursive merging and cloning without refer..."
    },
    {
      "tagname": "method",
      "name": "applyIf",
      "member": "Ext",
      "doc": "<p>Copies all the properties of config to object if they don't already exist.\n@function</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "object",
          "doc": "<p>The receiver of the properties</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The source of the properties</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>returns obj</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 81,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-applyIf",
      "shortDoc": "<p>Copies all the properties of config to object if they don't already exist.\n@function</p>\n"
    },
    {
      "tagname": "method",
      "name": "bind",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 368,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-method-bind",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "callback",
      "member": "Ext",
      "doc": "<p>Execute a callback function in a particular scope. If no function is passed the call is ignored.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "callback",
          "doc": "<p>The callback to execute</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope to execute in</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) The arguments to pass to the function</p>\n",
          "optional": true
        },
        {
          "type": "Number",
          "name": "delay",
          "doc": "<p>(optional) Pass a number to delay the call by a number of milliseconds.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 159,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-callback",
      "shortDoc": "<p>Execute a callback function in a particular scope. If no function is passed the call is ignored.</p>\n"
    },
    {
      "tagname": "method",
      "name": "clean",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array.clean\" rel=\"Ext.Array.clean\" class=\"docClass\">Ext.Array.clean</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 793,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-clean",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-clean\" rel=\"Ext.Array-method-clean\" class=\"docClass\">Ext.Array.clean</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array.clean\" rel=\"Ext.Array.clean\" class=\"docClass\">Ext.Array.clean</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "clone",
      "member": "Ext",
      "doc": "<p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "item",
          "doc": "<p>The variable to clone</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>clone</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 485,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-clone",
      "shortDoc": "<p>Clone almost any type of variable including array, object, DOM nodes and Date without keeping the old reference</p>\n"
    },
    {
      "tagname": "method",
      "name": "copyTo",
      "member": "Ext",
      "doc": "<p>Copies a set of named properties fom the source object to the destination object.</p>\n\n<p>example:\n<pre><code>ImageComponent = Ext.extend(Ext.Component, {\n    initComponent: function() {\n        this.autoEl = { tag: 'img' };\n        MyComponent.superclass.initComponent.apply(this, arguments);\n        this.initialBox = Ext.copyTo({}, this.initialConfig, 'x,y,width,height');\n    }\n});\n</code></pre>\nImportant note: To borrow class prototype methods, use <a href=\"#/api/Ext.Base-property-borrow\" rel=\"Ext.Base-property-borrow\" class=\"docClass\">Ext.Base.borrow</a> instead.\n\n",
      "params": [
        {
          "type": "Object",
          "name": "dest",
          "doc": "<p>The destination object.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "source",
          "doc": "<p>The source object.</p>\n",
          "optional": false
        },
        {
          "type": "Array/String",
          "name": "names",
          "doc": "<p>Either an Array of property names, or a comma-delimited list\nof property names to copy.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "usePrototypeKeys",
          "doc": "<p>(Optional) Defaults to false. Pass true to copy keys off of the prototype as well as the instance.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The modified object.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 616,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-copyTo",
      "shortDoc": "Copies a set of named properties fom the source object to the destination object.\n\nexample:\nImageComponent = Ext.exte..."
    },
    {
      "tagname": "method",
      "name": "create",
      "member": "Ext",
      "doc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 915,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-create",
      "shortDoc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-instantiate\" rel=\"Ext.ClassManager-method-instantiate\" class=\"docClass\">Ext.ClassManager.instantiate</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "createByAlias",
      "member": "Ext",
      "doc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 985,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-createByAlias",
      "shortDoc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "decode",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-decode\" rel=\"Ext.JSON-method-decode\" class=\"docClass\">Ext.JSON.decode</a></p>\n",
      "params": [
        {
          "type": "String",
          "name": "json",
          "doc": "<p>The JSON string</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "safe",
          "doc": "<p>(optional) Whether to return null or throw an exception if the JSON is invalid.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The resulting object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
      "linenr": 166,
      "html_filename": "JSON3.html",
      "href": "JSON3.html#Ext-method-decode",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-decode\" rel=\"Ext.JSON-method-decode\" class=\"docClass\">Ext.JSON.decode</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "defer",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 354,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-method-defer",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "define",
      "member": "Ext",
      "doc": "<p>Convenient shorthand for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>, see detailed <a href=\"#/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">explanation</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 992,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-define",
      "shortDoc": "<p>Convenient shorthand for <a href=\"#/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.ClassManager.create</a>, see detailed <a href=\"#/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">explanation</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "destroy",
      "member": "Ext",
      "doc": "<p>Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicable) and calling their destroy functions (if available).  This method is primarily\nintended for arguments of type <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> and <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, but any subclass of\n<a href=\"#/api/Ext.util.Observable\" rel=\"Ext.util.Observable\" class=\"docClass\">Ext.util.Observable</a> can be passed in.  Any number of elements and/or components can be\npassed into this function in a single call as separate arguments.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "arg1",
          "doc": "<p>An <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>, <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a>, or an Array of either of these to destroy</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "arg2",
          "doc": "<p>(optional)</p>\n",
          "optional": true
        },
        {
          "type": "Mixed",
          "name": "etc",
          "doc": "<p>... (optional)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 129,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-destroy",
      "shortDoc": "Attempts to destroy any objects passed to it by removing all event listeners, removing them from the\nDOM (if applicab..."
    },
    {
      "tagname": "method",
      "name": "destroyMembers",
      "member": "Ext",
      "doc": "<p>Attempts to destroy and then remove a set of named properties of the passed object.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "o",
          "doc": "<p>The object (most likely a Component) who's properties you wish to destroy.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "arg1",
          "doc": "<p>The name of the property to destroy and remove from the object.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "etc",
          "doc": "<p>... More property names to destroy and remove.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "etc",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 647,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-destroyMembers",
      "shortDoc": "<p>Attempts to destroy and then remove a set of named properties of the passed object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "each",
      "member": "Ext",
      "doc": "<p>Convenient alias to <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 739,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-each",
      "shortDoc": "<p>Convenient alias to <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "emptyFn",
      "member": "Ext",
      "doc": "<p>A reusable empty function</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 74,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-emptyFn",
      "shortDoc": "<p>A reusable empty function</p>\n"
    },
    {
      "tagname": "method",
      "name": "encode",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-encode\" rel=\"Ext.JSON-method-encode\" class=\"docClass\">Ext.JSON.encode</a></p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "o",
          "doc": "<p>The variable to encode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The JSON string</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/misc/JSON.js",
      "linenr": 158,
      "html_filename": "JSON3.html",
      "href": "JSON3.html#Ext-method-encode",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.JSON-method-encode\" rel=\"Ext.JSON-method-encode\" class=\"docClass\">Ext.JSON.encode</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "escapeRe",
      "member": "Ext",
      "doc": "<p>Escapes the passed string for use in a regular expression</p>\n",
      "params": [
        {
          "type": "String",
          "name": "str",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>@deprecated 4.0.0 Use <a href=\"#/api/Ext.String-method-escapeRegex\" rel=\"Ext.String-method-escapeRegex\" class=\"docClass\">Ext.String.escapeRegex</a> instead</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 536,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-escapeRe",
      "shortDoc": "<p>Escapes the passed string for use in a regular expression</p>\n"
    },
    {
      "tagname": "method",
      "name": "exclude",
      "member": "Ext",
      "doc": "<p>Convenient shortcut to <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 960,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-method-exclude",
      "shortDoc": "<p>Convenient shortcut to <a href=\"#/api/Ext.Loader-method-exclude\" rel=\"Ext.Loader-method-exclude\" class=\"docClass\">Ext.Loader.exclude</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "extend",
      "member": "Ext",
      "doc": "<p>This method deprecated. Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "superclass",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "overrides",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The subclass constructor from the <tt>overrides</tt> parameter, or a generated one if not provided.\n@deprecated 4.0.0 Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 134,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-extend",
      "shortDoc": "<p>This method deprecated. Use <a href=\"#/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a> instead.</p>\n"
    },
    {
      "tagname": "method",
      "name": "flatten",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 785,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-flatten",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-flatten\" rel=\"Ext.Array-method-flatten\" class=\"docClass\">Ext.Array.flatten</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "fly",
      "member": "Ext",
      "doc": "<p>Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to this element -\nthe dom node can be overwritten by other code. Shorthand of <a href=\"#/api/Ext.core.Element-method-fly\" rel=\"Ext.core.Element-method-fly\" class=\"docClass\">Ext.core.Element.fly</a></p>\n\n\n<p>Use this to make one-time references to DOM elements which are not going to be accessed again either by\napplication code, or by Ext's classes. If accessing an element which will be processed regularly, then <a href=\"#/api/Ext-method-get\" rel=\"Ext-method-get\" class=\"docClass\">Ext.get</a>\nwill be more appropriate to take advantage of the caching provided by the <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> class.</p>\n\n",
      "params": [
        {
          "type": "String/HTMLElement",
          "name": "el",
          "doc": "<p>The dom node or id</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "named",
          "doc": "<p>(optional) Allows for creation of named reusable flyweights to prevent conflicts\n(e.g. internally <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> uses \"_global\")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>The shared Element object (or null if no matching element was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 992,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-method-fly",
      "shortDoc": "Gets the globally shared flyweight Element, with the passed node as the active element. Do not store a reference to t..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext",
      "doc": "<p>Retrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects.</p>\n\n<p><b>This method does not retrieve <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a>s.</b> This method\nretrieves <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> objects which encapsulate DOM elements. To retrieve a Component by\nits ID, use <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.</p>\n\n\n<p>Uses simple caching to consistently return the same object. Automatically fixes if an\nobject was recreated with the same id via AJAX or DOM.</p>\n\n\n<p>Shorthand of <a href=\"#/api/Ext.core.Element-method-get\" rel=\"Ext.core.Element-method-get\" class=\"docClass\">Ext.core.Element.get</a></p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>The id of the node, a DOM Node or an existing Element.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Element",
        "doc": "<p>The Element object (or null if no matching element was found)</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/Element.js",
      "linenr": 977,
      "html_filename": "Element2.html",
      "href": "Element2.html#Ext-method-get",
      "shortDoc": "Retrieves Ext.core.Element objects.\n\nThis method does not retrieve Components. This method\nretrieves Ext.core.Element..."
    },
    {
      "tagname": "method",
      "name": "getBody",
      "member": "Ext",
      "doc": "<p>Returns the current document body as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.core.Element The document body</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 77,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getBody",
      "shortDoc": "<p>Returns the current document body as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getClassName",
      "member": "Ext",
      "doc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 1026,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-getClassName",
      "shortDoc": "<p>Convenient shorthand, see <a href=\"#/api/Ext.ClassManager-method-getClass\" rel=\"Ext.ClassManager-method-getClass\" class=\"docClass\">Ext.ClassManager.getClass</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getCmp",
      "member": "Ext",
      "doc": "<p>This is shorthand reference to <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.\nLooks up an existing <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> by <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The component <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.Component The Component, <tt>undefined</tt> if not found, or <tt>null</tt> if a\nClass was found.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 110,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getCmp",
      "shortDoc": "<p>This is shorthand reference to <a href=\"#/api/Ext.ComponentManager-method-get\" rel=\"Ext.ComponentManager-method-get\" class=\"docClass\">Ext.ComponentManager.get</a>.\nLooks up an existing <a href=\"#/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Component</a> by <a href=\"#/api/Ext.Component-cfg-id\" rel=\"Ext.Component-cfg-id\" class=\"docClass\">id</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getDoc",
      "member": "Ext",
      "doc": "<p>Returns the current HTML document object as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.core.Element The document</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 102,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getDoc",
      "shortDoc": "<p>Returns the current HTML document object as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getDom",
      "member": "Ext",
      "doc": "<p>Return the dom node for the passed String (id), dom node, or <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.\nOptional 'strict' flag is needed for IE since it can return 'name' and\n'id' elements by using getElementById.\nHere are some examples:</p>\n\n<pre><code>// gets dom node based on id\nvar elDom = Ext.getDom('elId');\n// gets dom node based on the dom node\nvar elDom1 = Ext.getDom(elDom);\n\n// If we don&#39;t know if we are working with an\n// <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a> or a dom node use Ext.getDom\nfunction(el){\n    var dom = Ext.getDom(el);\n    // do something with the dom node\n}\n</code></pre>\n\n\n<p><b>Note</b>: the dom node to be found actually needs to exist (be rendered, etc)\nwhen this method is called to be successful.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "strict",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>HTMLElement</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 296,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getDom",
      "shortDoc": "Return the dom node for the passed String (id), dom node, or Ext.core.Element.\nOptional 'strict' flag is needed for I..."
    },
    {
      "tagname": "method",
      "name": "getHead",
      "member": "Ext",
      "doc": "<p>Returns the current document head as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "<p>Ext.core.Element The document head</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 85,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getHead",
      "shortDoc": "<p>Returns the current document head as an <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Ext.core.Element</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getOrientation",
      "member": "Ext",
      "doc": "<p>Returns the current orientation of the mobile device</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>Either 'portrait' or 'landscape'</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 121,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getOrientation",
      "shortDoc": "<p>Returns the current orientation of the mobile device</p>\n"
    },
    {
      "tagname": "method",
      "name": "getScrollBarWidth",
      "member": "Ext",
      "doc": "<p>Utility method for getting the width of the browser scrollbar. This can differ depending on\noperating system settings, such as the theme or font size.</p>\n",
      "params": [
        {
          "type": "Boolean",
          "name": "force",
          "doc": "<p>(optional) true to force a recalculation of the value.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The width of the scrollbar.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 587,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-getScrollBarWidth",
      "shortDoc": "Utility method for getting the width of the browser scrollbar. This can differ depending on\noperating system settings..."
    },
    {
      "tagname": "method",
      "name": "getStore",
      "member": "Ext",
      "doc": "<p>Gets a registered Store by id (shortcut to <a href=\"#/api/Ext--lookup\" rel=\"Ext--lookup\" class=\"docClass\">lookup</a>)</p>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "id",
          "doc": "<p>The id of the Store, or a Store instance</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Store",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/StoreManager.js",
      "linenr": 155,
      "html_filename": "StoreManager.html",
      "href": "StoreManager.html#Ext-method-getStore",
      "shortDoc": "<p>Gets a registered Store by id (shortcut to <a href=\"#/api/Ext--lookup\" rel=\"Ext--lookup\" class=\"docClass\">lookup</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "htmlDecode",
      "member": "Ext",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The string to decode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The decoded text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 187,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-htmlDecode",
      "shortDoc": "<p>Convert certain characters (&amp;, &lt;, >, and ') from their HTML character equivalents.</p>\n"
    },
    {
      "tagname": "method",
      "name": "htmlEncode",
      "member": "Ext",
      "doc": "<p>Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pages.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "value",
          "doc": "<p>The string to encode</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The encoded text</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 178,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-htmlEncode",
      "shortDoc": "Convert certain characters (&amp;, &lt;, >, and ') to their HTML character equivalents for literal display in web pag..."
    },
    {
      "tagname": "method",
      "name": "id",
      "member": "Ext",
      "doc": "<p>Generates unique ids. If the element already has an id, it is unchanged</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "el",
          "doc": "<p>(optional) The element to generate an id for</p>\n",
          "optional": true
        },
        {
          "type": "String",
          "name": "prefix",
          "doc": "<p>(optional) Id prefix (defaults \"ext-gen\")</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The generated Id.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 57,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-id",
      "shortDoc": "<p>Generates unique ids. If the element already has an id, it is unchanged</p>\n"
    },
    {
      "tagname": "method",
      "name": "invoke",
      "member": "Ext",
      "doc": "<p>Invokes a method on each item in an Array.</p>\n\n<pre><code>// Example:\nExt.invoke(Ext.query(\"p\"), \"getAttribute\", \"id\");\n// [el1.getAttribute(\"id\"), el2.getAttribute(\"id\"), ..., elN.getAttribute(\"id\")]\n</code></pre>\n\n",
      "params": [
        {
          "type": "Array|NodeList",
          "name": "arr",
          "doc": "<p>The Array of items to invoke the method on.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "methodName",
          "doc": "<p>The method name to invoke.</p>\n",
          "optional": false
        },
        {
          "type": "...*",
          "name": "args",
          "doc": "<p>Arguments to send into the method invocation.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The results of invoking the method on each item in the array.\n@deprecated 4.0.0 Will be removed in the next major version</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 814,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-invoke",
      "shortDoc": "Invokes a method on each item in an Array.\n\n// Example:\nExt.invoke(Ext.query(\"p\"), \"getAttribute\", \"id\");\n// [el1.get..."
    },
    {
      "tagname": "method",
      "name": "isArray",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "target",
          "doc": "<p>The target to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 349,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isArray",
      "shortDoc": "<p>Returns true if the passed value is a JavaScript Array, false otherwise.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isBoolean",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a boolean.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 436,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isBoolean",
      "shortDoc": "<p>Returns true if the passed value is a boolean.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDate",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "object",
          "doc": "<p>The object to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 360,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isDate",
      "shortDoc": "<p>Returns true if the passed value is a JavaScript Date object, false otherwise.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isDefined",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is defined.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 464,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isDefined",
      "shortDoc": "<p>Returns true if the passed value is defined.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isElement",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is an HTMLElement</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 446,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isElement",
      "shortDoc": "<p>Returns true if the passed value is an HTMLElement</p>\n"
    },
    {
      "tagname": "method",
      "name": "isEmpty",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:</p>\n\n<ul>\n<li><code>null</code></li>\n<li><code>undefined</code></li>\n<li>a zero-length array</li>\n<li>a zero-length string (Unless the <code>allowEmptyString</code> parameter is set to <code>true</code>)</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "allowEmptyString",
          "doc": "<p>(optional) true to allow empty strings (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 332,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isEmpty",
      "shortDoc": "Returns true if the passed value is empty, false otherwise. The value is deemed to be empty if it is either:\n\n\nnull\nu..."
    },
    {
      "tagname": "method",
      "name": "isFunction",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a JavaScript Function, false otherwise.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 394,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isFunction",
      "shortDoc": "<p>Returns true if the passed value is a JavaScript Function, false otherwise.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isIterable",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is iterable, false otherwise</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 473,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isIterable",
      "shortDoc": "<p>Returns true if the passed value is iterable, false otherwise</p>\n"
    },
    {
      "tagname": "method",
      "name": "isNumber",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a number. Returns false for non-finite numbers.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 409,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isNumber",
      "shortDoc": "<p>Returns true if the passed value is a number. Returns false for non-finite numbers.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isNumeric",
      "member": "Ext",
      "doc": "<p>Validates that a value is numeric.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>Examples: 1, '1', '2.34'</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if numeric, false otherwise</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 418,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isNumeric",
      "shortDoc": "<p>Validates that a value is numeric.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isObject",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a JavaScript Object, false otherwise.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 369,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isObject",
      "shortDoc": "<p>Returns true if the passed value is a JavaScript Object, false otherwise.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isPrimitive",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 383,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isPrimitive",
      "shortDoc": "<p>Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isString",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a string.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 427,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isString",
      "shortDoc": "<p>Returns true if the passed value is a string.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isTextNode",
      "member": "Ext",
      "doc": "<p>Returns true if the passed value is a TextNode</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Boolean",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 455,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-isTextNode",
      "shortDoc": "<p>Returns true if the passed value is a TextNode</p>\n"
    },
    {
      "tagname": "method",
      "name": "iterate",
      "member": "Ext",
      "doc": "<p>Iterates either an array or an object. This method delegates to\n<a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> if the given value is iterable, and <a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> otherwise.</p>\n",
      "params": [
        {
          "type": "Object/Array",
          "name": "object",
          "doc": "<p>The object or array to be iterated.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to be called for each iteration. See and <a href=\"#/api/Ext.Array-method-each\" rel=\"Ext.Array-method-each\" class=\"docClass\">Ext.Array.each</a> and\n<a href=\"#/api/Ext.Object-method-each\" rel=\"Ext.Object-method-each\" class=\"docClass\">Ext.Object.each</a> for detailed lists of arguments passed to this function depending on the given object\ntype that is being iterated.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(Optional) The scope (<code>this</code> reference) in which the specified function is executed.\nDefaults to the object being iterated itself.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 102,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-iterate",
      "shortDoc": "Iterates either an array or an object. This method delegates to\nExt.Array.each if the given value is iterable, and Ex..."
    },
    {
      "tagname": "method",
      "name": "log",
      "member": "Ext",
      "doc": "<p>Logs a message. If a console is present it will be used. On Opera, the method\n\"opera.postError\" is called. In other cases, the message is logged to an array\n\"Ext.log.out\". An attached debugger can watch this array and view the log. The\nlog buffer is limited to a maximum of \"Ext.log.max\" entries (defaults to 100).</p>\n\n<p>If additional parameters are passed, they are joined and appended to the message.</p>\n\n<p>This method does nothing in a release build.</p>\n",
      "params": [
        {
          "type": "String|Object",
          "name": "message",
          "doc": "<p>The message to log or an options object with any\nof the following properties:</p>\n\n<ul>\n<li><code>msg</code>: The message to log (required).</li>\n<li><code>level</code>: One of: \"error\", \"warn\", \"info\" or \"log\" (the default is \"log\").</li>\n<li><code>dump</code>: An object to dump to the log as part of the message.</li>\n<li><code>stack</code>: True to include a stack trace in the log.</li>\n</ul>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 660,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-log",
      "shortDoc": "Logs a message. If a console is present it will be used. On Opera, the method\n\"opera.postError\" is called. In other c..."
    },
    {
      "tagname": "method",
      "name": "max",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 761,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-max",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-max\" rel=\"Ext.Array-method-max\" class=\"docClass\">Ext.Array.max</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "mean",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 777,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-mean",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-mean\" rel=\"Ext.Array-method-mean\" class=\"docClass\">Ext.Array.mean</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "merge",
      "member": "Ext",
      "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Object.js",
      "linenr": 490,
      "html_filename": "Object.html",
      "href": "Object.html#Ext-method-merge",
      "shortDoc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-merge\" rel=\"Ext.Object-method-merge\" class=\"docClass\">Ext.Object.merge</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "min",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 753,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-min",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-min\" rel=\"Ext.Array-method-min\" class=\"docClass\">Ext.Array.min</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "namespace",
      "member": "Ext",
      "doc": "<p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>Ext.namespace('Company', 'Company.data');\n\n // equivalent and preferable to the above syntax\nExt.namespace('Company.data');\n\nCompany.Widget = function() { ... };\n\nCompany.data.CustomStore = function(config) { ... };\n</code></pre>\n",
      "params": [
        {
          "type": "String",
          "name": "namespace1",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "namespace2",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "etc",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)\n@function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 1033,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-namespace",
      "shortDoc": "Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node..."
    },
    {
      "tagname": "method",
      "name": "ns",
      "member": "Ext",
      "doc": "<p>Convenient alias for <a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">Ext.namespace</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 1060,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-ns",
      "shortDoc": "<p>Convenient alias for <a href=\"#/api/Ext-method-namespace\" rel=\"Ext-method-namespace\" class=\"docClass\">Ext.namespace</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "num",
      "member": "Ext",
      "doc": "<p>This method is deprecated, please use <a href=\"#/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a> instead</p>\n\n<p>@deprecated 4.0.0 Replaced by Ext.Number.from</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Number.js",
      "linenr": 71,
      "html_filename": "Number3.html",
      "href": "Number3.html#Ext-method-num",
      "shortDoc": "<p>This method is deprecated, please use <a href=\"#/api/Ext.Number-method-from\" rel=\"Ext.Number-method-from\" class=\"docClass\">Ext.Number.from</a> instead</p>\n\n<p>@deprecated 4.0.0 Replaced by Ext.Number.from</p>\n"
    },
    {
      "tagname": "method",
      "name": "onDocumentReady",
      "member": "Ext",
      "doc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-onDocumentReady\" rel=\"Ext.EventManager-method-onDocumentReady\" class=\"docClass\">Ext.EventManager.onDocumentReady</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 845,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-method-onDocumentReady",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.EventManager-method-onDocumentReady\" rel=\"Ext.EventManager-method-onDocumentReady\" class=\"docClass\">Ext.EventManager.onDocumentReady</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "onReady",
      "member": "Ext",
      "doc": "<p>Alias for <a href=\"#/api/Ext.Loader-method-onReady\" rel=\"Ext.Loader-method-onReady\" class=\"docClass\">Ext.Loader.onReady</a> with withDomReady set to true</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "fn",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "options",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/EventManager.js",
      "linenr": 836,
      "html_filename": "EventManager.html",
      "href": "EventManager.html#Ext-method-onReady",
      "shortDoc": "<p>Alias for <a href=\"#/api/Ext.Loader-method-onReady\" rel=\"Ext.Loader-method-onReady\" class=\"docClass\">Ext.Loader.onReady</a> with withDomReady set to true</p>\n"
    },
    {
      "tagname": "method",
      "name": "override",
      "member": "Ext",
      "doc": "<p>Proxy to <a href=\"#/api/Ext.Base-property-override\" rel=\"Ext.Base-property-override\" class=\"docClass\">Ext.Base.override</a>. Please refer <a href=\"#/api/Ext.Base-property-override\" rel=\"Ext.Base-property-override\" class=\"docClass\">Ext.Base.override</a> for further details.</p>\n\n<pre><code>Ext.define('My.cool.Class', {\n    sayHi: function() {\n        alert('Hi!');\n    }\n}\n\nExt.override(My.cool.Class, {\n    sayHi: function() {\n        alert('About to say...');\n\n        this.callOverridden();\n    }\n});\n\nvar cool = new My.cool.Class();\ncool.sayHi(); // alerts 'About to say...'\n              // alerts 'Hi!'\n</code></pre>\n\n<p>Please note that <code>this.callOverridden()</code> only works if the class was previously\ncreated with {@link Ext#define)</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "cls",
          "doc": "<p>The class to override</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "overrides",
          "doc": "<p>The list of functions to add to origClass. This should be specified as an object literal\ncontaining one or more methods.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 203,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-override",
      "shortDoc": "Proxy to Ext.Base.override. Please refer Ext.Base.override for further details.\n\nExt.define('My.cool.Class', {\n    sa..."
    },
    {
      "tagname": "method",
      "name": "partition",
      "member": "Ext",
      "doc": "<p>Partitions the set into two sets: a true set and a false set.\nExample:\nExample2:</p>\n\n<pre><code>// Example 1:\nExt.partition([true, false, true, true, false]); // [[true, true, true], [false, false]]\n\n// Example 2:\nExt.partition(\n    Ext.query(\"p\"),\n    function(val){\n        return val.className == \"class1\"\n    }\n);\n// true are those paragraph elements with a className of \"class1\",\n// false set are those that do not have that className.\n</code></pre>\n\n",
      "params": [
        {
          "type": "Array|NodeList",
          "name": "arr",
          "doc": "<p>The array to partition</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "truth",
          "doc": "<p>(optional) a function to determine truth.  If this is omitted the element</p>\n\n<pre><code>              itself must be able to be evaluated for its truthfulness.\n</code></pre>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>[true<Array>,false<Array>]\n@deprecated 4.0.0 Will be removed in the next major version</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 782,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-partition",
      "shortDoc": "Partitions the set into two sets: a true set and a false set.\nExample:\nExample2:\n\n// Example 1:\nExt.partition([true, ..."
    },
    {
      "tagname": "method",
      "name": "pass",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 361,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-method-pass",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "pluck",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 809,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-pluck",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-pluck\" rel=\"Ext.Array-method-pluck\" class=\"docClass\">Ext.Array.pluck</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "preg",
      "member": "Ext",
      "doc": "<p>Shorthand for <a href=\"#/api/Ext.PluginManager-method-registerType\" rel=\"Ext.PluginManager-method-registerType\" class=\"docClass\">Ext.PluginManager.registerType</a></p>\n",
      "params": [
        {
          "type": "String",
          "name": "ptype",
          "doc": "<p>The ptype mnemonic string by which the Plugin class\nmay be looked up.</p>\n",
          "optional": false
        },
        {
          "type": "Constructor",
          "name": "cls",
          "doc": "<p>The new Plugin class.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/PluginManager.js",
      "linenr": 85,
      "html_filename": "PluginManager.html",
      "href": "PluginManager.html#Ext-method-preg",
      "shortDoc": "<p>Shorthand for <a href=\"#/api/Ext.PluginManager-method-registerType\" rel=\"Ext.PluginManager-method-registerType\" class=\"docClass\">Ext.PluginManager.registerType</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "query",
      "member": "Ext",
      "doc": "<p>Selects an array of DOM nodes by CSS/XPath selector. Shorthand of <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">Ext.DomQuery.select</a></p>\n",
      "params": [
        {
          "type": "String",
          "name": "path",
          "doc": "<p>The selector/xpath query</p>\n",
          "optional": false
        },
        {
          "type": "Node",
          "name": "root",
          "doc": "<p>(optional) The start of the query (defaults to document).</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/DomQuery.js",
      "linenr": 961,
      "html_filename": "DomQuery.html",
      "href": "DomQuery.html#Ext-method-query",
      "shortDoc": "<p>Selects an array of DOM nodes by CSS/XPath selector. Shorthand of <a href=\"#/api/Ext.DomQuery-method-select\" rel=\"Ext.DomQuery-method-select\" class=\"docClass\">Ext.DomQuery.select</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "regModel",
      "member": "Ext",
      "doc": "<p>Creates a new Model class from the specified config object. See <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for full examples.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>A configuration object for the Model you wish to create.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Ext.data.Model",
        "doc": "<p>The newly registered Model</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/ModelManager.js",
      "linenr": 148,
      "html_filename": "ModelManager.html",
      "href": "ModelManager.html#Ext-method-regModel",
      "shortDoc": "<p>Creates a new Model class from the specified config object. See <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for full examples.</p>\n"
    },
    {
      "tagname": "method",
      "name": "regStore",
      "member": "Ext",
      "doc": "<p>Creates a new store for the given id and config, then registers it with the <a href=\"#/api/Ext.data.StoreManager\" rel=\"Ext.data.StoreManager\" class=\"docClass\">Store Mananger</a>. \nSample usage:</p>\n\n\n\n\n<pre><code>    Ext.regStore('AllUsers', {\n        model: 'User'\n    });\n\n    //the store can now easily be used throughout the application\n    new Ext.List({\n        store: 'AllUsers',\n        ... other config\n    });\n    </code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "id",
          "doc": "<p>The id to set on the new store</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>The store config</p>\n",
          "optional": false
        },
        {
          "type": "Constructor",
          "name": "cls",
          "doc": "<p>The new Component class.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/StoreManager.js",
      "linenr": 117,
      "html_filename": "StoreManager.html",
      "href": "StoreManager.html#Ext-method-regStore",
      "shortDoc": "Creates a new store for the given id and config, then registers it with the Store Mananger. \nSample usage:\n\n\n\n\n    Ex..."
    },
    {
      "tagname": "method",
      "name": "removeNode",
      "member": "Ext",
      "doc": "<p>Removes a DOM node from the document.</p>\n\n<p>Removes this element from the document, removes all DOM event listeners, and deletes the cache reference.\nAll DOM event listeners are removed from this element. If <a href=\"#/api/Ext-property-enableNestedListenerRemoval\" rel=\"Ext-property-enableNestedListenerRemoval\" class=\"docClass\">Ext.enableNestedListenerRemoval</a> is\n<code>true</code>, then DOM event listeners are also removed from all child nodes. The body node\nwill be ignored if passed in.</p>\n\n",
      "params": [
        {
          "type": "HTMLElement",
          "name": "node",
          "doc": "<p>The node to remove</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 344,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-removeNode",
      "shortDoc": "Removes a DOM node from the document.\n\nRemoves this element from the document, removes all DOM event listeners, and d..."
    },
    {
      "tagname": "method",
      "name": "require",
      "member": "Ext",
      "doc": "<p>Convenient alias of <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a>. Please see the introduction documentation of\n<a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> for examples.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 944,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-method-require",
      "shortDoc": "<p>Convenient alias of <a href=\"#/api/Ext.Loader-method-require\" rel=\"Ext.Loader-method-require\" class=\"docClass\">Ext.Loader.require</a>. Please see the introduction documentation of\n<a href=\"#/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> for examples.</p>\n"
    },
    {
      "tagname": "method",
      "name": "select",
      "member": "Ext",
      "doc": "<p>Selects elements based on the passed CSS selector to enable <a href=\"#/api/Ext.core.Element\" rel=\"Ext.core.Element\" class=\"docClass\">Element</a> methods\nto be applied to many related elements in one statement through the returned <a href=\"#/api/Ext.CompositeElement\" rel=\"Ext.CompositeElement\" class=\"docClass\">CompositeElement</a> or\n<a href=\"#/api/Ext.CompositeElementLite\" rel=\"Ext.CompositeElementLite\" class=\"docClass\">CompositeElementLite</a> object.</p>\n",
      "params": [
        {
          "type": "String/Array",
          "name": "selector",
          "doc": "<p>The CSS selector or an array of elements</p>\n",
          "optional": false
        },
        {
          "type": "HTMLElement/String",
          "name": "root",
          "doc": "<p>(optional) The root element of the query or id of the root</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "CompositeElementLite/CompositeElement",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/dom/CompositeElementLite.js",
      "linenr": 314,
      "html_filename": "CompositeElementLite.html",
      "href": "CompositeElementLite.html#Ext-method-select",
      "shortDoc": "Selects elements based on the passed CSS selector to enable Element methods\nto be applied to many related elements in..."
    },
    {
      "tagname": "method",
      "name": "sum",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 769,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-sum",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array-method-sum\" rel=\"Ext.Array-method-sum\" class=\"docClass\">Ext.Array.sum</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "syncRequire",
      "member": "Ext",
      "doc": "<p>Synchronous version of <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">require</a>, convenient alias of <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a>.</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/Loader.js",
      "linenr": 952,
      "html_filename": "Loader.html",
      "href": "Loader.html#Ext-method-syncRequire",
      "shortDoc": "<p>Synchronous version of <a href=\"#/api/Ext-method-require\" rel=\"Ext-method-require\" class=\"docClass\">require</a>, convenient alias of <a href=\"#/api/Ext.Loader-method-syncRequire\" rel=\"Ext.Loader-method-syncRequire\" class=\"docClass\">Ext.Loader.syncRequire</a>.</p>\n"
    },
    {
      "tagname": "method",
      "name": "toArray",
      "member": "Ext",
      "doc": "<p>Convenient alias to <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n",
      "params": [
        {
          "type": "Iterable",
          "name": "the",
          "doc": "<p>iterable object to be turned into a true Array.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>array</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 817,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-toArray",
      "shortDoc": "<p>Convenient alias to <a href=\"#/api/Ext.Array-method-toArray\" rel=\"Ext.Array-method-toArray\" class=\"docClass\">Ext.Array.toArray</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "toSentence",
      "member": "Ext",
      "doc": "<p>Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); //'Adama, Tigh and Roslin'\nExt.toSentence(['Adama', 'Tigh', 'Roslin'], 'or'); //'Adama, Tigh or Roslin'</p>\n",
      "params": [
        {
          "type": "Array",
          "name": "items",
          "doc": "<p>The array to create a sentence from</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "connector",
          "doc": "<p>The string to use to connect the last two words. Usually 'and' or 'or' - defaults to 'and'.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "<p>The sentence string\n@deprecated 4.0.0 Will be removed in the next major version</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 880,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-toSentence",
      "shortDoc": "Turns an array into a sentence, joined by a specified connector - e.g.:\nExt.toSentence(['Adama', 'Tigh', 'Roslin']); ..."
    },
    {
      "tagname": "method",
      "name": "type",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 576,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-type",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext-method-typeOf\" rel=\"Ext-method-typeOf\" class=\"docClass\">typeOf</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "typeOf",
      "member": "Ext",
      "doc": "<p>Returns the type of the given variable in string format. List of possible values are:</p>\n\n<ul>\n<li><code>undefined</code>: If the given value is <code>undefined</code></li>\n<li><code>null</code>: If the given value is <code>null</code></li>\n<li><code>string</code>: If the given value is a string</li>\n<li><code>number</code>: If the given value is a number</li>\n<li><code>boolean</code>: If the given value is a boolean value</li>\n<li><code>date</code>: If the given value is a <code>Date</code> object</li>\n<li><code>function</code>: If the given value is a function reference</li>\n<li><code>object</code>: If the given value is an object</li>\n<li><code>array</code>: If the given value is an array</li>\n<li><code>regexp</code>: If the given value is a regular expression</li>\n<li><code>element</code>: If the given value is a DOM Element</li>\n<li><code>textnode</code>: If the given value is a DOM text node and contains something other than whitespace</li>\n<li><code>whitespace</code>: If the given value is a DOM text node and contains only whitespace</li>\n</ul>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "String",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 259,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-typeOf",
      "shortDoc": "Returns the type of the given variable in string format. List of possible values are:\n\n\nundefined: If the given value..."
    },
    {
      "tagname": "method",
      "name": "unique",
      "member": "Ext",
      "doc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array.unique\" rel=\"Ext.Array.unique\" class=\"docClass\">Ext.Array.unique</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Array.js",
      "linenr": 801,
      "html_filename": "Array2.html",
      "href": "Array2.html#Ext-method-unique",
      "shortDoc": "<p>Old alias to <a href=\"#/api/Ext.Array-method-unique\" rel=\"Ext.Array-method-unique\" class=\"docClass\">Ext.Array.unique</a>\n@deprecated 4.0.0 Use <a href=\"#/api/Ext.Array.unique\" rel=\"Ext.Array.unique\" class=\"docClass\">Ext.Array.unique</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "urlAppend",
      "member": "Ext",
      "doc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "url",
          "doc": "<p>The URL to append to.</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "s",
          "doc": "<p>The content to append to the URL.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "<p>(String) The resulting URL</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 196,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-urlAppend",
      "shortDoc": "<p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n"
    },
    {
      "tagname": "method",
      "name": "urlDecode",
      "member": "Ext",
      "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> @deprecated 4.0.0 Use <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Object.js",
      "linenr": 518,
      "html_filename": "Object.html",
      "href": "Object.html#Ext-method-urlDecode",
      "shortDoc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> @deprecated 4.0.0 Use <a href=\"#/api/Ext.Object-method-fromQueryString\" rel=\"Ext.Object-method-fromQueryString\" class=\"docClass\">Ext.Object.fromQueryString</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "urlEncode",
      "member": "Ext",
      "doc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> @deprecated 4.0.0 Use <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> instead</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Object.js",
      "linenr": 498,
      "html_filename": "Object.html",
      "href": "Object.html#Ext-method-urlEncode",
      "shortDoc": "<p>A convenient alias method for <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> @deprecated 4.0.0 Use <a href=\"#/api/Ext.Object-method-toQueryString\" rel=\"Ext.Object-method-toQueryString\" class=\"docClass\">Ext.Object.toQueryString</a> instead</p>\n"
    },
    {
      "tagname": "method",
      "name": "value",
      "member": "Ext",
      "doc": "<p>Utility method for returning a default value if the passed value is empty.</p>\n\n\n<p>The value is deemed to be empty if it is<div class=\"mdetail-params\"><ul>\n<li>null</li>\n<li>undefined</li>\n<li>an empty array</li>\n<li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>\n</ul></div>\n\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "defaultValue",
          "doc": "<p>The value to return if the original value is empty</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "allowBlank",
          "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>value, if non-empty, else defaultValue\n@deprecated 4.0.0 Use {Ext#valueFrom} instead</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 518,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-value",
      "shortDoc": "Utility method for returning a default value if the passed value is empty.\n\n\nThe value is deemed to be empty if it is..."
    },
    {
      "tagname": "method",
      "name": "valueFrom",
      "member": "Ext",
      "doc": "<p>Returns the given value itself if it's not empty, as described in <a href=\"#/api/Ext-method-isEmpty\" rel=\"Ext-method-isEmpty\" class=\"docClass\">isEmpty</a>; returns the default\nvalue (second argument) otherwise.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to test</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "defaultValue",
          "doc": "<p>The value to return if the original value is empty</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "allowBlank",
          "doc": "<p>(optional) true to allow zero length strings to qualify as non-empty (defaults to false)</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>value, if non-empty, else defaultValue</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 246,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-method-valueFrom",
      "shortDoc": "Returns the given value itself if it's not empty, as described in isEmpty; returns the default\nvalue (second argument..."
    },
    {
      "tagname": "method",
      "name": "widget",
      "member": "Ext",
      "doc": "<p>Convenient shorthand to create a widget by its xtype, also see <a href=\"#/api/Ext.ClassManager-method-instantiateByAlias\" rel=\"Ext.ClassManager-method-instantiateByAlias\" class=\"docClass\">Ext.ClassManager.instantiateByAlias</a></p>\n\n<pre><code>var button = Ext.widget('button'); // Equivalent to Ext.create('widget.button')\nvar panel = Ext.widget('panel'); // Equivalent to Ext.create('widget.panel')\n</code></pre>\n",
      "params": [
        {
          "type": "Object",
          "name": "name",
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
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/class/ClassManager.js",
      "linenr": 968,
      "html_filename": "ClassManager.html",
      "href": "ClassManager.html#Ext-method-widget",
      "shortDoc": "Convenient shorthand to create a widget by its xtype, also see Ext.ClassManager.instantiateByAlias\n\nvar button = Ext...."
    },
    {
      "tagname": "method",
      "name": "zip",
      "member": "Ext",
      "doc": "<p>Zips N sets together.</p>\n\n\n<pre><code>// Example 1:\nExt.zip([1,2,3],[4,5,6]); // [[1,4],[2,5],[3,6]]\n// Example 2:\nExt.zip(\n    [ \"+\", \"-\", \"+\"],\n    [  12,  10,  22],\n    [  43,  15,  96],\n    function(a, b, c){\n        return \"$\" + a + \"\" + b + \".\" + c\n    }\n); // [\"$+12.43\", \"$-10.15\", \"$+22.96\"]\n</code></pre>\n\n",
      "params": [
        {
          "type": "Arrays|NodeLists",
          "name": "arr",
          "doc": "<p>This argument may be repeated. Array(s) to contribute values.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "zipper",
          "doc": "<p>(optional) The last item in the argument list. This will drive how the items are zipped together.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Array",
        "doc": "<p>The zipped set.\n@deprecated 4.0.0 Will be removed in the next major version</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 840,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-method-zip",
      "shortDoc": "Zips N sets together.\n\n\n// Example 1:\nExt.zip([1,2,3],[4,5,6]); // [[1,4],[2,5],[3,6]]\n// Example 2:\nExt.zip(\n    [ \"..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "BLANK_IMAGE_URL",
      "member": "Ext",
      "type": "String",
      "doc": "<p>URL to a 1x1 transparent gif image used by <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> to create inline icons with CSS background images.\nIn older versions of IE, this defaults to \"http://sencha.com/s.gif\" and you should change this to a URL on your server.\nFor other browsers it uses an inline data URL.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 510,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-BLANK_IMAGE_URL",
      "shortDoc": "URL to a 1x1 transparent gif image used by Ext to create inline icons with CSS background images.\nIn older versions o..."
    },
    {
      "tagname": "property",
      "name": "SSL_SECURE_URL",
      "member": "Ext",
      "type": "String",
      "doc": "<p>URL to a blank file used by <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content warning (<tt>'about:blank'</tt>, except for IE in secure mode, which is <tt>'javascript:\"\"'</tt>).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 259,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-SSL_SECURE_URL",
      "shortDoc": "URL to a blank file used by Ext when in secure mode for iframe src and onReady src to prevent\nthe IE insecure content..."
    },
    {
      "tagname": "property",
      "name": "USE_NATIVE_JSON",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>Indicates whether to use native browser parsing for JSON methods.\nThis option is ignored if the browser does not support native JSON methods.\n<b>Note: Native JSON methods will not work with objects that have functions.\nAlso, property names must be quoted, otherwise the data will not parse.</b> (Defaults to false)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 287,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-USE_NATIVE_JSON",
      "shortDoc": "Indicates whether to use native browser parsing for JSON methods.\nThis option is ignored if the browser does not supp..."
    },
    {
      "tagname": "property",
      "name": "enableFx",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the <a href=\"#/api/Ext.fx.Anim\" rel=\"Ext.fx.Anim\" class=\"docClass\">Ext.fx.Anim</a> Class is available</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 266,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-enableFx"
    },
    {
      "tagname": "property",
      "name": "enableGarbageCollector",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True to automatically uncache orphaned Ext.core.Elements periodically (defaults to true)</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 45,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-enableGarbageCollector"
    },
    {
      "tagname": "property",
      "name": "enableListenerCollection",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True to automatically purge event listeners during garbageCollection (defaults to true).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 51,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-enableListenerCollection"
    },
    {
      "tagname": "property",
      "name": "enableNestedListenerRemoval",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.\nCurrently not optimized for performance.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 280,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-enableNestedListenerRemoval",
      "shortDoc": "EXPERIMENTAL - True to cascade listener removal to child elements when an element is removed.\nCurrently not optimized..."
    },
    {
      "tagname": "property",
      "name": "enumerables",
      "member": "Ext",
      "type": "Array",
      "doc": "<p>An array containing extra enumerables for old browsers</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext.js",
      "linenr": 28,
      "html_filename": "Ext.html",
      "href": "Ext.html#Ext-property-enumerables"
    },
    {
      "tagname": "property",
      "name": "isChrome",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Chrome.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 390,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isChrome"
    },
    {
      "tagname": "property",
      "name": "isFF3_0",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses FireFox 3.0</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 468,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isFF3_0"
    },
    {
      "tagname": "property",
      "name": "isFF3_5",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses FireFox 3.5</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 474,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isFF3_5"
    },
    {
      "tagname": "property",
      "name": "isFF3_6",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses FireFox 3.6</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 480,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isFF3_6"
    },
    {
      "tagname": "property",
      "name": "isGecko",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses the Gecko layout engine (e.g. Mozilla, Firefox).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 450,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isGecko"
    },
    {
      "tagname": "property",
      "name": "isGecko3",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses a Gecko 1.9+ layout engine (e.g. Firefox 3.x).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 456,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isGecko3"
    },
    {
      "tagname": "property",
      "name": "isGecko4",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses a Gecko 2.0+ layout engine (e.g. Firefox 4.x).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 462,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isGecko4"
    },
    {
      "tagname": "property",
      "name": "isIE",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Internet Explorer.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 420,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isIE"
    },
    {
      "tagname": "property",
      "name": "isIE6",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Internet Explorer 6.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 426,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isIE6"
    },
    {
      "tagname": "property",
      "name": "isIE7",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Internet Explorer 7.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 432,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isIE7"
    },
    {
      "tagname": "property",
      "name": "isIE8",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Internet Explorer 8.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 438,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isIE8"
    },
    {
      "tagname": "property",
      "name": "isIE9",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Internet Explorer 9.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 444,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isIE9"
    },
    {
      "tagname": "property",
      "name": "isLinux",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected platform is Linux.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 486,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isLinux"
    },
    {
      "tagname": "property",
      "name": "isMac",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected platform is Mac OS.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 498,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isMac"
    },
    {
      "tagname": "property",
      "name": "isOpera",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Opera.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 372,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isOpera"
    },
    {
      "tagname": "property",
      "name": "isOpera10_5",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Opera 10.5x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 378,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isOpera10_5"
    },
    {
      "tagname": "property",
      "name": "isReady",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True when the document is fully initialized and ready for action</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 39,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isReady"
    },
    {
      "tagname": "property",
      "name": "isSafari",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Safari.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 396,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isSafari"
    },
    {
      "tagname": "property",
      "name": "isSafari2",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Safari 2.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 414,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isSafari2"
    },
    {
      "tagname": "property",
      "name": "isSafari3",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Safari 3.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 402,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isSafari3"
    },
    {
      "tagname": "property",
      "name": "isSafari4",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser is Safari 4.x.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 408,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isSafari4"
    },
    {
      "tagname": "property",
      "name": "isWebKit",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected browser uses WebKit.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 384,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isWebKit"
    },
    {
      "tagname": "property",
      "name": "isWindows",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True if the detected platform is Windows.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 492,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-isWindows"
    },
    {
      "tagname": "property",
      "name": "scopeResetCSS",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>True to scope the reset CSS to be just applied to <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> components. Note that this wraps root containers\nwith an additional element. Also remember that when you turn on this option, you have to use ext-all-scoped {\nunless you use the bootstrap.js to load your javascript, in which case it will be handled for you.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 272,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-scopeResetCSS",
      "shortDoc": "True to scope the reset CSS to be just applied to Ext components. Note that this wraps root containers\nwith an additi..."
    },
    {
      "tagname": "property",
      "name": "useShims",
      "member": "Ext",
      "type": "Boolean",
      "doc": "<p>By default, <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> intelligently decides whether floating elements should be shimmed. If you are using flash,\nyou may want to set this to true.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 902,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-useShims",
      "shortDoc": "By default, Ext intelligently decides whether floating elements should be shimmed. If you are using flash,\nyou may wa..."
    },
    {
      "tagname": "property",
      "name": "webKitVersion",
      "member": "Ext",
      "type": "Float",
      "doc": "<p>The current version of WebKit (-1 if the browser does not use WebKit).</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
      "linenr": 504,
      "html_filename": "Ext-more.html",
      "href": "Ext-more.html#Ext-property-webKitVersion"
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/Ext-more.js",
  "linenr": 1,
  "html_filename": "Ext-more.html",
  "href": "Ext-more.html#Ext",
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