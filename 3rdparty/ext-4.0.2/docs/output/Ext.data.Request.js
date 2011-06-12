Ext.data.JsonP.Ext_data_Request({
  "allMixins": [

  ],
  "deprecated": null,
  "docauthor": null,
  "members": {
    "cfg": [
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Request.html#Ext-data-Request-cfg-action",
        "shortDoc": "The name of the action this Request represents. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "action",
        "owner": "Ext.data.Request",
        "doc": "<p>The name of the action this Request represents. Usually one of 'create', 'read', 'update' or 'destroy'</p>\n",
        "linenr": 12,
        "html_filename": "Request.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Request.html#Ext-data-Request-cfg-method",
        "shortDoc": "The HTTP method to use on this Request (defaults to 'GET'). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "method",
        "owner": "Ext.data.Request",
        "doc": "<p>The HTTP method to use on this Request (defaults to 'GET'). Should be one of 'GET', 'POST', 'PUT' or 'DELETE'</p>\n",
        "linenr": 22,
        "html_filename": "Request.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Request.html#Ext-data-Request-cfg-params",
        "shortDoc": "HTTP request params. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "params",
        "owner": "Ext.data.Request",
        "doc": "<p>HTTP request params. The Proxy and its Writer have access to and can modify this object.</p>\n",
        "linenr": 17,
        "html_filename": "Request.html"
      },
      {
        "type": "String",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Request.html#Ext-data-Request-cfg-url",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "private": false,
        "name": "url",
        "owner": "Ext.data.Request",
        "doc": "<p>The url to access on this Request</p>\n",
        "linenr": 27,
        "html_filename": "Request.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Request.html#Ext-data-Request-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates the Request object. ...",
        "static": false,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "private": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
        "doc": "<p>Creates the Request object.</p>\n",
        "owner": "Ext.data.Request",
        "name": "Request",
        "html_filename": "Request.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 32
      }
    ],
    "property": [

    ],
    "cssVar": [

    ],
    "cssMixin": [

    ],
    "event": [

    ]
  },
  "singleton": false,
  "alias": null,
  "superclasses": [

  ],
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "href": "Request.html#Ext-data-Request",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Request.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.Request",
  "doc": "<p>Simple class that represents a Request that will be made by any <a href=\"#/api/Ext.data.proxy.Server\" rel=\"Ext.data.proxy.Server\" class=\"docClass\">Ext.data.proxy.Server</a> subclass.\nAll this class does is standardize the representation of a Request as used by any ServerProxy subclass,\nit does not contain any actual logic or perform the request itself.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Request.html",
  "extends": "Object"
});