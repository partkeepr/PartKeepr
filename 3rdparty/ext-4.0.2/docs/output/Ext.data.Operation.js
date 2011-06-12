Ext.data.JsonP.Ext_data_Operation({
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
        "href": "Operation.html#Ext-data-Operation-cfg-action",
        "shortDoc": "The action being performed by this Operation. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "action",
        "owner": "Ext.data.Operation",
        "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'</p>\n",
        "linenr": 21,
        "html_filename": "Operation.html"
      },
      {
        "type": "Ext.data.Batch",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-batch",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "batch",
        "owner": "Ext.data.Operation",
        "doc": "<p>The batch that this Operation is a part of (optional)</p>\n",
        "linenr": 51,
        "html_filename": "Operation.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-filters",
        "shortDoc": "Optional array of filter objects. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "filters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n",
        "linenr": 26,
        "html_filename": "Operation.html"
      },
      {
        "type": "Object",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-group",
        "shortDoc": "Optional grouping configuration. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "group",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n",
        "linenr": 36,
        "html_filename": "Operation.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-limit",
        "shortDoc": "The number of records to load. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "limit",
        "owner": "Ext.data.Operation",
        "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n",
        "linenr": 46,
        "html_filename": "Operation.html"
      },
      {
        "type": "Array",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-sorters",
        "shortDoc": "Optional array of sorter objects. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "sorters",
        "owner": "Ext.data.Operation",
        "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n",
        "linenr": 31,
        "html_filename": "Operation.html"
      },
      {
        "type": "Number",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-start",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "start",
        "owner": "Ext.data.Operation",
        "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n",
        "linenr": 41,
        "html_filename": "Operation.html"
      },
      {
        "type": "Boolean",
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "cfg",
        "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
        "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "name": "synchronous",
        "owner": "Ext.data.Operation",
        "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This\nproperty is inspected by a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in\nparallel or not.</p>\n",
        "linenr": 14,
        "html_filename": "Operation.html"
      }
    ],
    "method": [
      {
        "deprecated": null,
        "alias": null,
        "href": "Operation.html#Ext-data-Operation-method-constructor",
        "tagname": "method",
        "protected": false,
        "shortDoc": "Creates new Operation object. ...",
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
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "doc": "<p>Creates new Operation object.</p>\n",
        "owner": "Ext.data.Operation",
        "name": "Operation",
        "html_filename": "Operation.html",
        "return": {
          "type": "Object",
          "doc": "\n"
        },
        "linenr": 106
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-allowWrite",
        "shortDoc": "Checks whether this operation should cause writing to occur. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "allowWrite",
        "owner": "Ext.data.Operation",
        "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n",
        "linenr": 225,
        "return": {
          "type": "Boolean",
          "doc": "<p>Whether the operation should cause a write to occur.</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-getError",
        "shortDoc": "Returns the error string or object that was set using setException ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "getError",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n",
        "linenr": 156,
        "return": {
          "type": "Mixed",
          "doc": "<p>The error object</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-getRecords",
        "shortDoc": "Returns an array of Ext.data.Model instances as set by the Proxy. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "getRecords",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n",
        "linenr": 164,
        "return": {
          "type": "Array",
          "doc": "<p>Any loaded Records</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-getResultSet",
        "shortDoc": "Returns the ResultSet object (if set by the Proxy). ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "getResultSet",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a> instances\nas well as meta data such as number of instances fetched, number available etc</p>\n",
        "linenr": 174,
        "return": {
          "type": "Ext.data.ResultSet",
          "doc": "<p>The ResultSet object</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-hasException",
        "shortDoc": "Returns true if this Operation encountered an exception (see also getError) ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "hasException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n",
        "linenr": 148,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if there was an exception</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-isComplete",
        "shortDoc": "Returns true if the Operation has been completed ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "isComplete",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been completed</p>\n",
        "linenr": 200,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is complete</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-isRunning",
        "shortDoc": "Returns true if the Operation has been started but has not yet completed. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "isRunning",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n",
        "linenr": 192,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation is currently running</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-isStarted",
        "shortDoc": "Returns true if the Operation has been started. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "isStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed,\nsee <a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n",
        "linenr": 183,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if the Operation has started</p>\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-setCompleted",
        "shortDoc": "Marks the Operation as completed ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "setCompleted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as completed</p>\n",
        "linenr": 122,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-setException",
        "shortDoc": "Marks the Operation as having experienced an exception. ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [
          {
            "type": "Mixed",
            "optional": false,
            "doc": "<p>Optional error string/object</p>\n",
            "name": "error"
          }
        ],
        "name": "setException",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n",
        "linenr": 137,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-setStarted",
        "shortDoc": "Marks the Operation as started ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "setStarted",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as started</p>\n",
        "linenr": 114,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
        "shortDoc": "Marks the Operation as successful ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "setSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Marks the Operation as successful</p>\n",
        "linenr": 130,
        "return": {
          "type": "void",
          "doc": "\n"
        },
        "html_filename": "Operation.html"
      },
      {
        "deprecated": null,
        "alias": null,
        "protected": false,
        "tagname": "method",
        "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
        "shortDoc": "Returns true if the Operation has completed and was successful ...",
        "static": false,
        "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
        "private": false,
        "params": [

        ],
        "name": "wasSuccessful",
        "owner": "Ext.data.Operation",
        "doc": "<p>Returns true if the Operation has completed and was successful</p>\n",
        "linenr": 208,
        "return": {
          "type": "Boolean",
          "doc": "<p>True if successful</p>\n"
        },
        "html_filename": "Operation.html"
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
  "href": "Operation.html#Ext-data-Operation",
  "subclasses": [

  ],
  "static": false,
  "author": "Ed Spencer",
  "component": false,
  "filename": "/mnt/ebs/nightly/git/SDK/platform/src/data/Operation.js",
  "private": false,
  "alternateClassNames": [

  ],
  "name": "Ext.data.Operation",
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>.\nOperation objects are used to enable communication between Stores and Proxies. Application\ndevelopers should rarely need to interact with Operation objects directly.</p>\n\n\n\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n\n",
  "mixedInto": [

  ],
  "linenr": 1,
  "xtypes": [

  ],
  "html_filename": "Operation.html",
  "extends": "Object"
});