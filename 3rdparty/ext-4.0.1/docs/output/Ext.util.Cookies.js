Ext.data.JsonP.Ext_util_Cookies({
  "tagname": "class",
  "name": "Ext.util.Cookies",
  "doc": "<p>Utility class for setting/reading values from browser cookies.\nValues can be written using the <a href=\"#/api/Ext.util.Cookies-method-set\" rel=\"Ext.util.Cookies-method-set\" class=\"docClass\">set</a> method.\nValues can be read using the <a href=\"#/api/Ext.util.Cookies-method-get\" rel=\"Ext.util.Cookies-method-get\" class=\"docClass\">get</a> method.\nA cookie can be invalidated on the client machine using the <a href=\"#/api/Ext.util.Cookies-method-clear\" rel=\"Ext.util.Cookies-method-clear\" class=\"docClass\">clear</a> method.</p>\n",
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
      "name": "clear",
      "member": "Ext.util.Cookies",
      "doc": "<p>Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the past.</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The name of the cookie to remove</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "path",
          "doc": "<p>(optional) The path for the cookie. This must be included if you included a path while setting the cookie.</p>\n",
          "optional": true
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Cookies.js",
      "linenr": 80,
      "html_filename": "Cookies.html",
      "href": "Cookies.html#Ext-util-Cookies-method-clear",
      "shortDoc": "Removes a cookie with the provided name from the browser\nif found by setting its expiration date to sometime in the p..."
    },
    {
      "tagname": "method",
      "name": "get",
      "member": "Ext.util.Cookies",
      "doc": "<p>Retrieves cookies that are accessible by the current page. If a cookie\ndoes not exist, <code>get()</code> returns <tt>null</tt>.  The following\nexample retrieves the cookie called \"valid\" and stores the String value\nin the variable <tt>validStatus</tt>.</p>\n\n<pre><code>var validStatus = Ext.util.Cookies.get(\"valid\");\n</code></pre>\n\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The name of the cookie to get</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>Returns the cookie value for the specified name;\nnull if the cookie name does not exist.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Cookies.js",
      "linenr": 48,
      "html_filename": "Cookies.html",
      "href": "Cookies.html#Ext-util-Cookies-method-get",
      "shortDoc": "Retrieves cookies that are accessible by the current page. If a cookie\ndoes not exist, get() returns null.  The follo..."
    },
    {
      "tagname": "method",
      "name": "set",
      "member": "Ext.util.Cookies",
      "doc": "<p>Create a cookie with the specified name and value. Additional settings\nfor the cookie may be optionally specified (for example: expiration,\naccess restriction, SSL).</p>\n",
      "params": [
        {
          "type": "String",
          "name": "name",
          "doc": "<p>The name of the cookie to set.</p>\n",
          "optional": false
        },
        {
          "type": "Mixed",
          "name": "value",
          "doc": "<p>The value to set for the cookie.</p>\n",
          "optional": false
        },
        {
          "type": "Object",
          "name": "expires",
          "doc": "<p>(Optional) Specify an expiration date the\ncookie is to persist until.  Note that the specified Date object will\nbe converted to Greenwich Mean Time (GMT).</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "path",
          "doc": "<p>(Optional) Setting a path on the cookie restricts\naccess to pages that match that path. Defaults to all pages (<tt>'/'</tt>).</p>\n",
          "optional": false
        },
        {
          "type": "String",
          "name": "domain",
          "doc": "<p>(Optional) Setting a domain restricts access to\npages on a given domain (typically used to allow cookie access across\nsubdomains). For example, \"sencha.com\" will create a cookie that can be\naccessed from any subdomain of sencha.com, including www.sencha.com,\nsupport.sencha.com, etc.</p>\n",
          "optional": false
        },
        {
          "type": "Boolean",
          "name": "secure",
          "doc": "<p>(Optional) Specify true to indicate that the cookie\nshould only be accessible via SSL on a page using the HTTPS protocol.\nDefaults to <tt>false</tt>. Note that this will only work if the page\ncalling this code uses the HTTPS protocol, otherwise the cookie will be\ncreated with default options.</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Cookies.js",
      "linenr": 15,
      "html_filename": "Cookies.html",
      "href": "Cookies.html#Ext-util-Cookies-method-set",
      "shortDoc": "Create a cookie with the specified name and value. Additional settings\nfor the cookie may be optionally specified (fo..."
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/extjs/src/util/Cookies.js",
  "linenr": 1,
  "html_filename": "Cookies.html",
  "href": "Cookies.html#Ext-util-Cookies",
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