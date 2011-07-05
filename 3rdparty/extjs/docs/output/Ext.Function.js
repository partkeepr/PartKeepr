Ext.data.JsonP.Ext_Function({
  "mixedInto": [

  ],
  "superclasses": [

  ],
  "inheritable": false,
  "subclasses": [

  ],
  "deprecated": null,
  "allMixins": [

  ],
  "href": "Function.html#Ext-Function",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/Function",
            "optional": false,
            "doc": "\n",
            "name": "object"
          },
          {
            "type": "String",
            "optional": false,
            "doc": "\n",
            "name": "methodName"
          }
        ],
        "href": "Function.html#Ext-Function-method-alias",
        "return": {
          "type": "Function",
          "doc": "<p>aliasFn</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Create an alias to the provided method property with name methodName of object. ...",
        "static": false,
        "name": "alias",
        "owner": "Ext.Function",
        "doc": "<p>Create an alias to the provided method property with name <code>methodName</code> of <code>object</code>.\nNote that the execution scope will still be bound to the provided <code>object</code> itself.</p>\n",
        "linenr": 135,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to delegate.</p>\n",
            "name": "fn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "name": "args"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "name": "appendArgs"
          }
        ],
        "href": "Function.html#Ext-Function-method-bind",
        "return": {
          "type": "Function",
          "doc": "<p>The new function</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Create a new function from the provided fn, change this to the provided scope, optionally\noverrides arguments for the...",
        "static": false,
        "name": "bind",
        "owner": "Ext.Function",
        "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n\n<p><a href=\"#/api/Ext-method-bind\" rel=\"Ext-method-bind\" class=\"docClass\">Ext.bind</a> is alias for <a href=\"#/api/Ext.Function-method-bind\" rel=\"Ext.Function-method-bind\" class=\"docClass\">Ext.Function.bind</a></p>\n",
        "linenr": 68,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to invoke on a buffered timer.</p>\n",
            "name": "fn"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of milliseconds by which to buffer the invocation of the\nfunction.</p>\n",
            "name": "buffer"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Override arguments for the call. Defaults to the arguments\npassed by the caller.</p>\n",
            "name": "args"
          }
        ],
        "href": "Function.html#Ext-Function-method-createBuffered",
        "return": {
          "type": "Function",
          "doc": "<p>A function which invokes the passed function after buffering for the specified time.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed fu...",
        "static": false,
        "name": "createBuffered",
        "owner": "Ext.Function",
        "doc": "<p>Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed function for the configured number of milliseconds.\nIf called again within that period, the impending invocation will be canceled, and the\ntimeout period will begin again.</p>\n",
        "linenr": 292,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function which will be called on a delay when the returned function is called.\nOptionally, a replacement (or additional) argument list may be specified.</p>\n",
            "name": "fn"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of milliseconds to defer execution by whenever called.</p>\n",
            "name": "delay"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) used by the function at execution time.</p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Override arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "name": "args"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position.</p>\n",
            "name": "appendArgs"
          }
        ],
        "href": "Function.html#Ext-Function-method-createDelayed",
        "return": {
          "type": "Function",
          "doc": "<p>A function which, when called, executes the original function after the specified delay.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Creates a delegate (callback) which, when called, executes after a specific delay. ...",
        "static": false,
        "name": "createDelayed",
        "owner": "Ext.Function",
        "doc": "<p>Creates a delegate (callback) which, when called, executes after a specific delay.</p>\n",
        "linenr": 192,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The original function.</p>\n",
            "name": "origFn"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to call before the original</p>\n",
            "name": "newFn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the passed function is executed.\n<strong>If omitted, defaults to the scope in which the original function is called or the browser window.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Mixed",
            "optional": true,
            "doc": "<p>(optional) The value to return if the passed function return false (defaults to null).</p>\n",
            "name": "returnValue"
          }
        ],
        "href": "Function.html#Ext-Function-method-createInterceptor",
        "return": {
          "type": "Function",
          "doc": "<p>The new function</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Creates an interceptor function. ...",
        "static": false,
        "name": "createInterceptor",
        "owner": "Ext.Function",
        "doc": "<p>Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe original one is not called. The resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){\n    return name == 'Brian';\n});\n\nsayHiToFriend('Fred');  // no alert\nsayHiToFriend('Brian'); // alerts \"Hi, Brian\"\n</code></pre>\n",
        "linenr": 149,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The original function.</p>\n",
            "name": "origFn"
          },
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to sequence</p>\n",
            "name": "newFn"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the passed function is executed.\nIf omitted, defaults to the scope in which the original function is called or the browser window.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Function.html#Ext-Function-method-createSequence",
        "return": {
          "type": "Function",
          "doc": "<p>The new function</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Create a combined function call sequence of the original function + the passed function. ...",
        "static": false,
        "name": "createSequence",
        "owner": "Ext.Function",
        "doc": "<p>Create a combined function call sequence of the original function + the passed function.\nThe resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\nvar sayGoodbye = Ext.Function.createSequence(sayHi, function(name){\n    alert('Bye, ' + name);\n});\n\nsayGoodbye('Fred'); // both alerts show\n</code></pre>\n",
        "linenr": 256,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to execute at a regular time interval.</p>\n",
            "name": "fn"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The interval <strong>in milliseconds</strong> on which the passed function is executed.</p>\n",
            "name": "interval"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Function.html#Ext-Function-method-createThrottled",
        "return": {
          "type": "Function",
          "doc": "<p>A function which invokes the passed function at the specified interval.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed func...",
        "static": false,
        "name": "createThrottled",
        "owner": "Ext.Function",
        "doc": "<p>Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed function only after a certain interval has elapsed since the\nprevious invocation.</p>\n\n<p>This is useful for wrapping functions which may be called repeatedly, such as\na handler of a mouse move event when the processing is expensive.</p>\n",
        "linenr": 323,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The function to defer.</p>\n",
            "name": "fn"
          },
          {
            "type": "Number",
            "optional": false,
            "doc": "<p>The number of milliseconds for the setTimeout call\n(if less than or equal to 0 the function is executed immediately)</p>\n",
            "name": "millis"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.\n<strong>If omitted, defaults to the browser window.</strong></p>\n",
            "name": "scope"
          },
          {
            "type": "Array",
            "optional": true,
            "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
            "name": "args"
          },
          {
            "type": "Boolean/Number",
            "optional": true,
            "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
            "name": "appendArgs"
          }
        ],
        "href": "Function.html#Ext-Function-method-defer",
        "return": {
          "type": "Number",
          "doc": "<p>The timeout id that can be used with clearTimeout</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Calls this function after the number of millseconds specified, optionally in a specific scope. ...",
        "static": false,
        "name": "defer",
        "owner": "Ext.Function",
        "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-defer\" rel=\"Ext-method-defer\" class=\"docClass\">Ext.defer</a> is alias for <a href=\"#/api/Ext.Function-method-defer\" rel=\"Ext.Function-method-defer\" class=\"docClass\">Ext.Function.defer</a></p>\n",
        "linenr": 216,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "\n",
            "name": "setter"
          }
        ],
        "href": "Function.html#Ext-Function-method-flexSetter",
        "return": {
          "type": "Function",
          "doc": "<p>flexSetter</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "A very commonly used method throughout the framework. ...",
        "static": false,
        "name": "flexSetter",
        "owner": "Ext.Function",
        "doc": "<p>A very commonly used method throughout the framework. It acts as a wrapper around another method\nwhich originally accepts 2 arguments for <code>name</code> and <code>value</code>.\nThe wrapped function then allows \"flexible\" value setting of either:</p>\n\n<ul>\n<li><code>name</code> and <code>value</code> as 2 arguments</li>\n<li>one single object argument with multiple key - value pairs</li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code>var setValue = Ext.Function.flexSetter(function(name, value) {\n    this[name] = value;\n});\n\n// Afterwards\n// Setting a single name - value\nsetValue('name1', 'value1');\n\n// Settings multiple name - value pairs\nsetValue({\n    name1: 'value1',\n    name2: 'value2',\n    name3: 'value3'\n});\n</code></pre>\n",
        "linenr": 9,
        "html_filename": "Function.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Function",
            "optional": false,
            "doc": "<p>The original function</p>\n",
            "name": "fn"
          },
          {
            "type": "Array",
            "optional": false,
            "doc": "<p>The arguments to pass to new callback</p>\n",
            "name": "args"
          },
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) The scope (<code>this</code> reference) in which the function is executed.</p>\n",
            "name": "scope"
          }
        ],
        "href": "Function.html#Ext-Function-method-pass",
        "return": {
          "type": "Function",
          "doc": "<p>The new callback function</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
        "private": false,
        "shortDoc": "Create a new function from the provided fn, the arguments of which are pre-set to args. ...",
        "static": false,
        "name": "pass",
        "owner": "Ext.Function",
        "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.</p>\n\n<p>For example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n\n<p><a href=\"#/api/Ext-method-pass\" rel=\"Ext-method-pass\" class=\"docClass\">Ext.pass</a> is alias for <a href=\"#/api/Ext.Function-method-pass\" rel=\"Ext.Function-method-pass\" class=\"docClass\">Ext.Function.pass</a></p>\n",
        "linenr": 102,
        "html_filename": "Function.html"
      }
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
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/core/src/lang/Function.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.Function",
  "doc": "<p>A collection of useful static methods to deal with function callbacks</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Function.html",
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
  "extends": null
});