Ext.data.JsonP.Ext_data_JsonP({
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
  "href": "JsonP.html#Ext-data-JsonP",
  "members": {
    "cfg": [

    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object/String",
            "optional": false,
            "doc": "<p>(Optional) The request to abort</p>\n",
            "name": "request"
          }
        ],
        "href": "JsonP.html#Ext-data-JsonP-method-abort",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "Abort a request. ...",
        "static": false,
        "name": "abort",
        "owner": "Ext.data.JsonP",
        "doc": "<p>Abort a request. If the request parameter is not specified all open requests will\nbe aborted.</p>\n",
        "linenr": 128,
        "html_filename": "JsonP.html"
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
          {
            "type": "Object",
            "optional": false,
            "doc": "<p>An object which may contain the following properties. Note that options will\ntake priority over any defaults that are specified in the class.</p>\n\n<ul>\n<li><b>url</b> : String <div class=\"sub-desc\">The URL to request.</div></li>\n<li><b>params</b> : Object (Optional)<div class=\"sub-desc\">An object containing a series of\nkey value pairs that will be sent along with the request.</div></li>\n<li><b>timeout</b> : Number (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-timeout\" rel=\"Ext.data.JsonP-property-timeout\" class=\"docClass\">timeout</a></div></li>\n<li><b>callbackKey</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-callbackKey\" rel=\"Ext.data.JsonP-property-callbackKey\" class=\"docClass\">callbackKey</a></div></li>\n<li><b>callbackName</b> : String (Optional) <div class=\"sub-desc\">The function name to use for this request.\nBy default this name will be auto-generated: Ext.data.JsonP.callback1, Ext.data.JsonP.callback2, etc.\nSetting this option to \"my_name\" will force the function name to be Ext.data.JsonP.my_name.\nUse this if you want deterministic behavior, but be careful - the callbackName should be different\nin each JsonP request that you make.</div></li>\n<li><b>disableCaching</b> : Boolean (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCaching\" rel=\"Ext.data.JsonP-property-disableCaching\" class=\"docClass\">disableCaching</a></div></li>\n<li><b>disableCachingParam</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCachingParam\" rel=\"Ext.data.JsonP-property-disableCachingParam\" class=\"docClass\">disableCachingParam</a></div></li>\n<li><b>success</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request succeeds.</div></li>\n<li><b>failure</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request fails.</div></li>\n<li><b>callback</b> : Function (Optional) <div class=\"sub-desc\">A function to execute when the request \ncompletes, whether it is a success or failure.</div></li>\n<li><b>scope</b> : Object (Optional)<div class=\"sub-desc\">The scope in\nwhich to execute the callbacks: The \"this\" object for the callback function. Defaults to the browser window.</div></li>\n</ul>\n\n",
            "name": "options"
          }
        ],
        "href": "JsonP.html#Ext-data-JsonP-method-request",
        "return": {
          "type": "Object",
          "doc": "<p>request An object containing the request details.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "Makes a JSONP request. ...",
        "static": false,
        "name": "request",
        "owner": "Ext.data.JsonP",
        "doc": "<p>Makes a JSONP request.</p>\n",
        "linenr": 52,
        "html_filename": "JsonP.html"
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
        "type": "String",
        "deprecated": null,
        "href": "JsonP.html#Ext-data-JsonP-property-callbackKey",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe requ...",
        "static": false,
        "name": "callbackKey",
        "owner": "Ext.data.JsonP",
        "doc": "<p>Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe request completes. Defaults to <tt>callback</tt>. Thus, a common request will be in the form of\nurl?callback=Ext.data.JsonP.callback1</p>\n",
        "linenr": 43,
        "html_filename": "JsonP.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "JsonP.html#Ext-data-JsonP-property-disableCaching",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "True to add a unique cache-buster param to requests. ...",
        "static": false,
        "name": "disableCaching",
        "owner": "Ext.data.JsonP",
        "doc": "<p>True to add a unique cache-buster param to requests. Defaults to <tt>true</tt>.</p>\n",
        "linenr": 29,
        "html_filename": "JsonP.html"
      },
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "JsonP.html#Ext-data-JsonP-property-disableCachingParam",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "Change the parameter which is sent went disabling caching through a cache buster. ...",
        "static": false,
        "name": "disableCachingParam",
        "owner": "Ext.data.JsonP",
        "doc": "<p>Change the parameter which is sent went disabling caching through a cache buster. Defaults to <tt>'_dc'</tt>.</p>\n",
        "linenr": 36,
        "html_filename": "JsonP.html"
      },
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
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "JsonP.html#Ext-data-JsonP-property-timeout",
        "protected": false,
        "tagname": "property",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
        "private": false,
        "shortDoc": "A default timeout for any JsonP requests. ...",
        "static": false,
        "name": "timeout",
        "owner": "Ext.data.JsonP",
        "doc": "<p>A default timeout for any JsonP requests. If the request has not completed in this time the\nfailure callback will be fired. The timeout is in ms. Defaults to <tt>30000</tt>.</p>\n",
        "linenr": 21,
        "html_filename": "JsonP.html"
      }
    ]
  },
  "singleton": true,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": null,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/JsonP.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.JsonP",
  "doc": "<p>This class is used to create JSONP requests. JSONP is a mechanism that allows for making\nrequests for data cross domain. More information is available here:\nhttp://en.wikipedia.org/wiki/JSONP</p>\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "JsonP.html",
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