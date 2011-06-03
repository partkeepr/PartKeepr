Ext.data.JsonP.Ext_Error({
  "tagname": "class",
  "name": "Ext.Error",
  "doc": "<p>A wrapper class for the native JavaScript Error object that adds a few useful capabilities for handling\nerrors in an <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> application. When you use <a href=\"#/api/Ext.Error\" rel=\"Ext.Error\" class=\"docClass\">Ext.Error</a> to <a href=\"#/api/Ext.Error-method-raise\" rel=\"Ext.Error-method-raise\" class=\"docClass\">raise</a> an error from within any class that\nuses the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> 4 class system, the Error class can automatically add the source class and method from which\nthe error was raised. It also includes logic to automatically log the eroor to the console, if available,\nwith additional metadata about the error. In all cases, the error will always be thrown at the end so that\nexecution will halt.</p>\n\n<p>Ext.Error also offers a global error <a href=\"#/api/Ext.Error-method-handle\" rel=\"Ext.Error-method-handle\" class=\"docClass\">handling</a> method that can be overridden in order to\nhandle application-wide errors in a single spot. You can optionally <a href=\"#/api/Ext.Error-property-ignore\" rel=\"Ext.Error-property-ignore\" class=\"docClass\">ignore</a> errors altogether,\nalthough in a real application it's usually a better idea to override the handling function and perform\nlogging or some other method of reporting the errors in a way that is meaningful to the application.</p>\n\n<p>At its simplest you can simply raise an error as a simple string from within any code:</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.raise('Something bad happened!');\n</code></pre>\n\n<p>If raised from plain JavaScript code, the error will be logged to the console (if available) and the message\ndisplayed. In most cases however you'll be raising errors from within a class, and it may often be useful to add\nadditional metadata about the error being raised.  The <a href=\"#/api/Ext.Error-method-raise\" rel=\"Ext.Error-method-raise\" class=\"docClass\">raise</a> method can also take a config object.\nIn this form the <code>msg</code> attribute becomes the error description, and any other data added to the config gets\nadded to the error object and, if the console is available, logged to the console for inspection.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.define('Ext.Foo', {\n    doSomething: function(option){\n        if (someCondition === false) {\n            Ext.Error.raise({\n                msg: 'You cannot do that!',\n                option: option,   // whatever was passed into the method\n                'error code': 100 // other arbitrary info\n            });\n        }\n    }\n});\n</code></pre>\n\n<p>If a console is available (that supports the <code>console.dir</code> function) you'll see console output like:</p>\n\n<pre><code>An error was raised with the following data:\noption:         Object { foo: \"bar\"}\n    foo:        \"bar\"\nerror code:     100\nmsg:            \"You cannot do that!\"\nsourceClass:   \"Ext.Foo\"\nsourceMethod:  \"doSomething\"\n\nuncaught exception: You cannot do that!\n</code></pre>\n\n<p>As you can see, the error will report exactly where it was raised and will include as much information as the\nraising code can usefully provide.</p>\n\n<p>If you want to handle all application errors globally you can simply override the static <a href=\"#/api/handle\" rel=\"handle\" class=\"docClass\">handle</a> method\nand provide whatever handling logic you need. If the method returns true then the error is considered handled\nand will not be thrown to the browser. If anything but true is returned then the error will be thrown normally.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.handle = function(err) {\n    if (err.someProperty == 'NotReallyAnError') {\n        // maybe log something to the application here if applicable\n        return true;\n    }\n    // any non-true return value (including none) will cause the error to be thrown\n}\n</code></pre>\n\n<p>Create a new Error object</p>\n",
  "extends": "Error",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Brian Moeskau <brian@sencha.com>",
  "docauthor": "Brian Moeskau <brian@sencha.com>",
  "singleton": false,
  "private": true,
  "cfg": [

  ],
  "method": [
    {
      "tagname": "method",
      "name": "Error",
      "member": "Ext.Error",
      "doc": "\n",
      "params": [
        {
          "type": "String/Object",
          "name": "config",
          "doc": "<p>The error message string, or an object containing the\nattribute \"msg\" that will be used as the error message. Any other data included in\nthe object will be applied to the error instance and logged to the browser console, if available.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 209,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "handle",
      "member": "Ext.Error",
      "doc": "<p>Globally handle any <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> errors that may be raised, optionally providing custom logic to\nhandle different errors individually. Return true from the function to bypass throwing the\nerror to the browser, otherwise the error will be thrown and execution will halt.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.handle = function(err) {\n    if (err.someProperty == 'NotReallyAnError') {\n        // maybe log something to the application here if applicable\n        return true;\n    }\n    // any non-true return value (including none) will cause the error to be thrown\n}\n</code></pre>\n",
      "params": [
        {
          "type": "Ext.Error",
          "name": "err",
          "doc": "<p>The <a href=\"#/api/Ext.Error\" rel=\"Ext.Error\" class=\"docClass\">Ext.Error</a> object being raised. It will contain any attributes\nthat were originally raised with it, plus properties about the method and class from which\nthe error originated (if raised from a class that uses the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> 4 class system).</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 180,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-method-handle",
      "shortDoc": "Globally handle any Ext errors that may be raised, optionally providing custom logic to\nhandle different errors indiv..."
    },
    {
      "tagname": "method",
      "name": "raise",
      "member": "Ext.Error",
      "doc": "<p>Raise an error that can include additional data and supports automatic console logging if available.\nYou can pass a string error message or an object with the <code>msg</code> attribute which will be used as the\nerror message. The object can contain any other name-value attributes (or objects) to be logged\nalong with the error.</p>\n\n<p>Note that after displaying the error message a JavaScript error will ultimately be thrown so that\nexecution will halt.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.raise('A simple string error message');\n\n// or...\n\nExt.define('Ext.Foo', {\n    doSomething: function(option){\n        if (someCondition === false) {\n            Ext.Error.raise({\n                msg: 'You cannot do that!',\n                option: option,   // whatever was passed into the method\n                'error code': 100 // other arbitrary info\n            });\n        }\n    }\n});\n</code></pre>\n",
      "params": [
        {
          "type": "String/Object",
          "name": "err",
          "doc": "<p>The error message string, or an object containing the\nattribute \"msg\" that will be used as the error message. Any other data included in\nthe object will also be logged to the browser console, if available.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 117,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-method-raise",
      "shortDoc": "Raise an error that can include additional data and supports automatic console logging if available.\nYou can pass a s..."
    },
    {
      "tagname": "method",
      "name": "toString",
      "member": "Ext.Error",
      "doc": "<p>Provides a custom string representation of the error object. This is an override of the base JavaScript\n<code>Object.toString</code> method, which is useful so that when logged to the browser console, an error object will\nbe displayed with a useful message instead of <code>[object Object]</code>, the default <code>toString</code> result.</p>\n\n<p>The default implementation will include the error message along with the raising class and method, if available,\nbut this can be overridden with a custom implementation either at the prototype level (for all errors) or on\na particular error instance, if you want to provide a custom description that will show up in the console.</p>\n",
      "params": [

      ],
      "return": {
        "type": "String",
        "doc": "<p>The error message. If raised from within the <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> 4 class system, the error message\nwill also include the raising class and method names, if available.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 228,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-method-toString",
      "shortDoc": "Provides a custom string representation of the error object. This is an override of the base JavaScript\nObject.toStri..."
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "ignore",
      "member": "Ext.Error",
      "type": "Boolean",
      "doc": "<p>Static flag that can be used to globally disable error reporting to the browser if set to true\n(defaults to false). Note that if you ignore <a href=\"#/api/Ext\" rel=\"Ext\" class=\"docClass\">Ext</a> errors it's likely that some other code may fail\nand throw a native JavaScript error thereafter, so use with caution. In most cases it will probably\nbe preferable to supply a custom error <a href=\"#/api/Ext.Error-method-handle\" rel=\"Ext.Error-method-handle\" class=\"docClass\">handling</a> function instead.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.ignore = true;\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 81,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-property-ignore",
      "shortDoc": "Static flag that can be used to globally disable error reporting to the browser if set to true\n(defaults to false). N..."
    },
    {
      "tagname": "property",
      "name": "notify",
      "member": "Ext.Error",
      "type": "Object",
      "doc": "<p>Static flag that can be used to globally control error notification to the user. Unlike\nEx.Error.ignore, this does not effect exceptions. They are still thrown. This value can be\nset to false to disable the alert notification (default is true for IE6 and IE7).</p>\n\n<p>Only the first error will generate an alert. Internally this flag is set to false when the\nfirst error occurs prior to displaying the alert.</p>\n\n<p>This flag is not used in a release build.</p>\n\n<h1>Example usage:</h1>\n\n<pre><code>Ext.Error.notify = false;\n</code></pre>\n",
      "private": false,
      "static": true,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
      "linenr": 97,
      "html_filename": "Error.html",
      "href": "Error.html#Ext-Error-property-notify",
      "shortDoc": "Static flag that can be used to globally control error notification to the user. Unlike\nEx.Error.ignore, this does no..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/core/src/lang/Error.js",
  "linenr": 1,
  "html_filename": "Error.html",
  "href": "Error.html#Ext-Error",
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