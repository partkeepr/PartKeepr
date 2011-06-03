Ext.data.JsonP.Ext_Function({
  "tagname": "class",
  "name": "Ext.Function",
  "doc": "<p>A collection of useful static methods to deal with function callbacks</p>\n",
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
      "name": "alias",
      "member": "Ext.Function",
      "doc": "<p>Create an alias to the provided method property with name <code>methodName</code> of <code>object</code>.\nNote that the execution scope will still be bound to the provided <code>object</code> itself.</p>\n",
      "params": [
        {
          "type": "Object/Function",
          "name": "object",
          "doc": "\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "methodName",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>aliasFn</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 134,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-alias",
      "shortDoc": "Create an alias to the provided method property with name methodName of object.\nNote that the execution scope will st..."
    },
    {
      "tagname": "method",
      "name": "bind",
      "member": "Ext.Function",
      "doc": "<p>Create a new function from the provided <code>fn</code>, change <code>this</code> to the provided scope, optionally\noverrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to delegate.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Number",
          "name": "appendArgs",
          "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The new function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 71,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-bind",
      "shortDoc": "Create a new function from the provided fn, change this to the provided scope, optionally\noverrides arguments for the..."
    },
    {
      "tagname": "method",
      "name": "createBuffered",
      "member": "Ext.Function",
      "doc": "<p>Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed function for the configured number of milliseconds.\nIf called again within that period, the impending invocation will be canceled, and the\ntimeout period will begin again.</p>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to invoke on a buffered timer.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "buffer",
          "doc": "<p>The number of milliseconds by which to buffer the invocation of the\nfunction.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) Override arguments for the call. Defaults to the arguments\npassed by the caller.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>A function which invokes the passed function after buffering for the specified time.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 289,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-createBuffered",
      "shortDoc": "Creates a delegate function, optionally with a bound scope which, when called, buffers\nthe execution of the passed fu..."
    },
    {
      "tagname": "method",
      "name": "createDelayed",
      "member": "Ext.Function",
      "doc": "<p>Creates a delegate (callback) which, when called, executes after a specific delay.</p>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function which will be called on a delay when the returned function is called.\nOptionally, a replacement (or additional) argument list may be specified.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "delay",
          "doc": "<p>The number of milliseconds to defer execution by whenever called.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code>this</code> reference) used by the function at execution time.</p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) Override arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Number",
          "name": "appendArgs",
          "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>A function which, when called, executes the original function after the specified delay.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 191,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-createDelayed",
      "shortDoc": "<p>Creates a delegate (callback) which, when called, executes after a specific delay.</p>\n"
    },
    {
      "tagname": "method",
      "name": "createInterceptor",
      "member": "Ext.Function",
      "doc": "<p>Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe original one is not called. The resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\n// create a new function that validates input without\n// directly modifying the original function:\nvar sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){\n    return name == 'Brian';\n});\n\nsayHiToFriend('Fred');  // no alert\nsayHiToFriend('Brian'); // alerts \"Hi, Brian\"\n     </code></pre>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "origFn",
          "doc": "<p>The original function.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "newFn",
          "doc": "<p>The function to call before the original</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the passed function is executed.\n<b>If omitted, defaults to the scope in which the original function is called or the browser window.</b></p>\n",
          "optional": true
        },
        {
          "type": "Mixed",
          "name": "returnValue",
          "doc": "<p>(optional) The value to return if the passed function return false (defaults to null).</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The new function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 148,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-createInterceptor",
      "shortDoc": "Creates an interceptor function. The passed function is called before the original one. If it returns false,\nthe orig..."
    },
    {
      "tagname": "method",
      "name": "createSequence",
      "member": "Ext.Function",
      "doc": "<p>Create a combined function call sequence of the original function + the passed function.\nThe resulting function returns the results of the original function.\nThe passed function is called with the parameters of the original function. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\nsayHi('Fred'); // alerts \"Hi, Fred\"\n\nvar sayGoodbye = Ext.Function.createSequence(sayHi, function(name){\n    alert('Bye, ' + name);\n});\n\nsayGoodbye('Fred'); // both alerts show\n</code></pre>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "origFn",
          "doc": "<p>The original function.</p>\n",
          "optional": false
        },
        {
          "type": "Function",
          "name": "newFn",
          "doc": "<p>The function to sequence</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (this reference) in which the passed function is executed.\nIf omitted, defaults to the scope in which the original function is called or the browser window.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The new function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 251,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-createSequence",
      "shortDoc": "Create a combined function call sequence of the original function + the passed function.\nThe resulting function retur..."
    },
    {
      "tagname": "method",
      "name": "createThrottled",
      "member": "Ext.Function",
      "doc": "<p>Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed function only after a certain interval has elapsed since the\nprevious invocation.</p>\n\n\n\n\n<p>This is useful for wrapping functions which may be called repeatedly, such as\na handler of a mouse move event when the processing is expensive.</p>\n\n",
      "params": [
        {
          "type": "Object",
          "name": "fn",
          "doc": "<p>{Function} The function to execute at a regular time interval.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "interval",
          "doc": "<p>{Number} The interval <b>in milliseconds</b> on which the passed function is executed.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which\nthe passed function is executed. If omitted, defaults to the scope specified by the caller.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>A function which invokes the passed function at the specified interval.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 320,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-createThrottled",
      "shortDoc": "Creates a throttled version of the passed function which, when called repeatedly and\nrapidly, invokes the passed func..."
    },
    {
      "tagname": "method",
      "name": "defer",
      "member": "Ext.Function",
      "doc": "<p>Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:</p>\n\n<pre><code>var sayHi = function(name){\n    alert('Hi, ' + name);\n}\n\n// executes immediately:\nsayHi('Fred');\n\n// executes after 2 seconds:\nExt.Function.defer(sayHi, 2000, this, ['Fred']);\n\n// this syntax is sometimes useful for deferring\n// execution of an anonymous function:\nExt.Function.defer(function(){\n    alert('Anonymous');\n}, 100);\n     </code></pre>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The function to defer.</p>\n",
          "optional": false
        },
        {
          "type": "Number",
          "name": "millis",
          "doc": "<p>The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the function is executed.\n<b>If omitted, defaults to the browser window.</b></p>\n",
          "optional": true
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>(optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)</p>\n",
          "optional": true
        },
        {
          "type": "Boolean/Number",
          "name": "appendArgs",
          "doc": "<p>(optional) if True args are appended to call args instead of overriding,\nif a number the args are inserted at the specified position</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Number",
        "doc": "<p>The timeout id that can be used with clearTimeout</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 214,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-defer",
      "shortDoc": "Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:\n\nvar sa..."
    },
    {
      "tagname": "method",
      "name": "flexSetter",
      "member": "Ext.Function",
      "doc": "<p>A very commonly used method throughout the framework. It acts as a wrapper around another method\nwhich originally accepts 2 arguments for <code>name</code> and <code>value</code>.\nThe wrapped function then allows \"flexible\" value setting of either:</p>\n\n<ul>\n     <li><code>name</code> and <code>value</code> as 2 arguments</li>\n     <li>one single object argument with multiple key - value pairs</li>\n</ul>\n\n\n<p>For example:</p>\n\n<pre><code>var setValue = Ext.Function.flexSetter(function(name, value) {\n    this[name] = value;\n});\n\n// Afterwards\n// Setting a single name - value\nsetValue('name1', 'value1');\n\n// Settings multiple name - value pairs\nsetValue({\n    name1: 'value1',\n    name2: 'value2',\n    name3: 'value3'\n});\n</code></pre>\n\n",
      "params": [
        {
          "type": "Function",
          "name": "setter",
          "doc": "\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>flexSetter</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 10,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-flexSetter",
      "shortDoc": "A very commonly used method throughout the framework. It acts as a wrapper around another method\nwhich originally acc..."
    },
    {
      "tagname": "method",
      "name": "pass",
      "member": "Ext.Function",
      "doc": "<p>Create a new function from the provided <code>fn</code>, the arguments of which are pre-set to <code>args</code>.\nNew arguments passed to the newly created callback when it's invoked are appended after the pre-set ones.\nThis is especially useful when creating callbacks.\nFor example:</p>\n\n<pre><code>var originalFunction = function(){\n    alert(Ext.Array.from(arguments).join(' '));\n};\n\nvar callback = Ext.Function.pass(originalFunction, ['Hello', 'World']);\n\ncallback(); // alerts 'Hello World'\ncallback('by Me'); // alerts 'Hello World by Me'\n</code></pre>\n",
      "params": [
        {
          "type": "Function",
          "name": "fn",
          "doc": "<p>The original function</p>\n",
          "optional": false
        },
        {
          "type": "Array",
          "name": "args",
          "doc": "<p>The arguments to pass to new callback</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "scope",
          "doc": "<p>(optional) The scope (<code><b>this</b></code> reference) in which the function is executed.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "Function",
        "doc": "<p>The new callback function</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
      "linenr": 104,
      "html_filename": "Function.html",
      "href": "Function.html#Ext-Function-method-pass",
      "shortDoc": "Create a new function from the provided fn, the arguments of which are pre-set to args.\nNew arguments passed to the n..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Function.js",
  "linenr": 1,
  "html_filename": "Function.html",
  "href": "Function.html#Ext-Function",
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