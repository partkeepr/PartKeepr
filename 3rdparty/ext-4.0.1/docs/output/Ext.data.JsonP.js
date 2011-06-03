Ext.data.JsonP.Ext_data_JsonP({
  "tagname": "class",
  "name": "Ext.data.JsonP",
  "doc": "<p>This class is used to create JSONP requests. JSONP is a mechanism that allows for making\nrequests for data cross domain. More information is available here:\nhttp://en.wikipedia.org/wiki/JSONP</p>\n",
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
      "name": "abort",
      "member": "Ext.data.JsonP",
      "doc": "<p>Abort a request. If the request parameter is not specified all open requests will\nbe aborted.</p>\n",
      "params": [
        {
          "type": "Object/String",
          "name": "request",
          "doc": "<p>(Optional) The request to abort</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 123,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-method-abort",
      "shortDoc": "<p>Abort a request. If the request parameter is not specified all open requests will\nbe aborted.</p>\n"
    },
    {
      "tagname": "method",
      "name": "request",
      "member": "Ext.data.JsonP",
      "doc": "<p>Makes a JSONP request.</p>\n",
      "params": [
        {
          "type": "Object",
          "name": "options",
          "doc": "<p>An object which may contain the following properties. Note that options will\ntake priority over any defaults that are specified in the class.</p>\n\n<ul>\n<li><b>url</b> : String <div class=\"sub-desc\">The URL to request.</div></li>\n<li><b>params</b> : Object (Optional)<div class=\"sub-desc\">An object containing a series of\nkey value pairs that will be sent along with the request.</div></li>\n<li><b>timeout</b> : Number (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-timeout\" rel=\"Ext.data.JsonP-property-timeout\" class=\"docClass\">timeout</a></div></li>\n<li><b>callbackKey</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-callbackKey\" rel=\"Ext.data.JsonP-property-callbackKey\" class=\"docClass\">callbackKey</a></div></li>\n<li><b>disableCaching</b> : Boolean (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCaching\" rel=\"Ext.data.JsonP-property-disableCaching\" class=\"docClass\">disableCaching</a></div></li>\n<li><b>disableCachingParam</b> : String (Optional) <div class=\"sub-desc\">See <a href=\"#/api/Ext.data.JsonP-property-disableCachingParam\" rel=\"Ext.data.JsonP-property-disableCachingParam\" class=\"docClass\">disableCachingParam</a></div></li>\n<li><b>success</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request succeeds.</div></li>\n<li><b>failure</b> : Function (Optional) <div class=\"sub-desc\">A function to execute if the request fails.</div></li>\n<li><b>callback</b> : Function (Optional) <div class=\"sub-desc\">A function to execute when the request \ncompletes, whether it is a success or failure.</div></li>\n<li><b>scope</b> : Object (Optional)<div class=\"sub-desc\">The scope in\nwhich to execute the callbacks: The \"this\" object for the callback function. Defaults to the browser window.</div></li>\n</ul>\n\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Object",
        "doc": "<p>request An object containing the request details.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 52,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-method-request",
      "shortDoc": "<p>Makes a JSONP request.</p>\n"
    }
  ],
  "property": [
    {
      "tagname": "property",
      "name": "callbackKey",
      "member": "Ext.data.JsonP",
      "type": "String",
      "doc": "<p>Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe request completes. Defaults to <tt>callback</tt>. Thus, a common request will be in the form of\nurl?callback=Ext.data.JsonP.callback1</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 43,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-property-callbackKey",
      "shortDoc": "Specifies the GET parameter that will be sent to the server containing the function name to be executed when\nthe requ..."
    },
    {
      "tagname": "property",
      "name": "disableCaching",
      "member": "Ext.data.JsonP",
      "type": "Boolean",
      "doc": "<p>True to add a unique cache-buster param to requests. Defaults to <tt>true</tt>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 29,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-property-disableCaching"
    },
    {
      "tagname": "property",
      "name": "disableCachingParam",
      "member": "Ext.data.JsonP",
      "type": "String",
      "doc": "<p>Change the parameter which is sent went disabling caching through a cache buster. Defaults to <tt>'_dc'</tt>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 36,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-property-disableCachingParam"
    },
    {
      "tagname": "property",
      "name": "timeout",
      "member": "Ext.data.JsonP",
      "type": "Number",
      "doc": "<p>A default timeout for any JsonP requests. If the request has not completed in this time the\nfailure callback will be fired. The timeout is in ms. Defaults to <tt>30000</tt>.</p>\n",
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
      "linenr": 21,
      "html_filename": "JsonP.html",
      "href": "JsonP.html#Ext-data-JsonP-property-timeout",
      "shortDoc": "A default timeout for any JsonP requests. If the request has not completed in this time the\nfailure callback will be ..."
    }
  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/JsonP.js",
  "linenr": 1,
  "html_filename": "JsonP.html",
  "href": "JsonP.html#Ext-data-JsonP",
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