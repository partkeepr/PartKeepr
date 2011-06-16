Ext.data.JsonP.Ext_data_Operation({
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
  "href": "Operation.html#Ext-data-Operation",
  "members": {
    "cfg": [
      {
        "inheritable": false,
        "type": "String",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-action",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "The action being performed by this Operation. ...",
        "static": false,
        "name": "action",
        "owner": "Ext.data.Operation",
        "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'</p>\n",
        "linenr": 21,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Ext.data.Batch",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-batch",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "static": false,
        "name": "batch",
        "owner": "Ext.data.Operation",
        "doc": "<p>The batch that this Operation is a part of (optional)</p>\n",
        "linenr": 51,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-filters",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Optional array of filter objects. ...",
        "static": false,
        "name": "filters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n",
        "linenr": 26,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Object",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-group",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Optional grouping configuration. ...",
        "static": false,
        "name": "group",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n",
        "linenr": 36,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-limit",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "The number of records to load. ...",
        "static": false,
        "name": "limit",
        "owner": "Ext.data.Operation",
        "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n",
        "linenr": 46,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Array",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-sorters",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Optional array of sorter objects. ...",
        "static": false,
        "name": "sorters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n",
        "linenr": 31,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Number",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-start",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "static": false,
        "name": "start",
        "owner": "Ext.data.Operation",
        "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n",
        "linenr": 41,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "type": "Boolean",
        "deprecated": null,
        "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
        "protected": false,
        "tagname": "cfg",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). ...",
        "static": false,
        "name": "synchronous",
        "owner": "Ext.data.Operation",
        "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This\nproperty is inspected by a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in\nparallel or not.</p>\n",
        "linenr": 14,
        "html_filename": "Operation.html"
      }
    ],
    "method": [
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Object",
            "optional": true,
            "doc": "<p>(optional) Config object.</p>\n",
            "name": "config"
          }
        ],
        "href": "Operation.html#Ext-data-Operation-method-constructor",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Creates new Operation object. ...",
        "static": false,
        "name": "constructor",
        "owner": "Ext.data.Operation",
        "doc": "<p>Creates new Operation object.</p>\n",
        "linenr": 106,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-allowWrite",
        "return": {
          "type": "Boolean",
          "doc": "<p>Whether the operation should cause a write to occur.</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Checks whether this operation should cause writing to occur. ...",
        "static": false,
        "name": "allowWrite",
        "owner": "Ext.data.Operation",
        "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n",
        "linenr": 225,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getError",
        "return": {
          "type": "Mixed",
          "doc": "<p>The error object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns the error string or object that was set using setException ...",
        "static": false,
        "name": "getError",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n",
        "linenr": 156,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getRecords",
        "return": {
          "type": "Array",
          "doc": "<p>Any loaded Records</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns an array of Ext.data.Model instances as set by the Proxy. ...",
        "static": false,
        "name": "getRecords",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n",
        "linenr": 164,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-getResultSet",
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The ResultSet object</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns the ResultSet object (if set by the Proxy). ...",
        "static": false,
        "name": "getResultSet",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a> instances\nas well as meta data such as number of instances fetched, number available etc</p>\n",
        "linenr": 174,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-hasException",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if there was an exception</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns true if this Operation encountered an exception (see also getError) ...",
        "static": false,
        "name": "hasException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n",
        "linenr": 148,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isComplete",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is complete</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns true if the Operation has been completed ...",
        "static": false,
        "name": "isComplete",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been completed</p>\n",
        "linenr": 200,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isRunning",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is currently running</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns true if the Operation has been started but has not yet completed. ...",
        "static": false,
        "name": "isRunning",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n",
        "linenr": 192,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-isStarted",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation has started</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns true if the Operation has been started. ...",
        "static": false,
        "name": "isStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed,\nsee <a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n",
        "linenr": 183,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setCompleted",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Marks the Operation as completed ...",
        "static": false,
        "name": "setCompleted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as completed</p>\n",
        "linenr": 122,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional error string/object</p>\n",
            "name": "error"
          }
        ],
        "href": "Operation.html#Ext-data-Operation-method-setException",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Marks the Operation as having experienced an exception. ...",
        "static": false,
        "name": "setException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n",
        "linenr": 137,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setStarted",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Marks the Operation as started ...",
        "static": false,
        "name": "setStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as started</p>\n",
        "linenr": 114,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Marks the Operation as successful ...",
        "static": false,
        "name": "setSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as successful</p>\n",
        "linenr": 130,
        "html_filename": "Operation.html"
      },
      {
        "inheritable": false,
        "deprecated": null,
        "params": [

        ],
        "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
        "return": {
          "type": "Boolean",
          "doc": "<p>True if successful</p>\n"
        },
        "protected": false,
        "tagname": "method",
        "alias": null,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "shortDoc": "Returns true if the Operation has completed and was successful ...",
        "static": false,
        "name": "wasSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has completed and was successful</p>\n",
        "linenr": 208,
        "html_filename": "Operation.html"
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
  "singleton": false,
  "protected": false,
  "tagname": "class",
  "mixins": [

  ],
  "alias": null,
  "author": "Ed Spencer",
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
  "private": false,
  "alternateClassNames": [

  ],
  "static": false,
  "name": "Ext.data.Operation",
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>.\nOperation objects are used to enable communication between Stores and Proxies. Application\ndevelopers should rarely need to interact with Operation objects directly.</p>\n\n\n\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n\n",
  "docauthor": null,
  "component": false,
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Operation.html",
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
  "extends": "Object"
});