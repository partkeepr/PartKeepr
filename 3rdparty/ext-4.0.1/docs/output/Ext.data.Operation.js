Ext.data.JsonP.Ext_data_Operation({
  "tagname": "class",
  "name": "Ext.data.Operation",
  "doc": "<p>Represents a single read or write operation performed by a <a href=\"#/api/Ext.data.proxy.Proxy\" rel=\"Ext.data.proxy.Proxy\" class=\"docClass\">Proxy</a>.\nOperation objects are used to enable communication between Stores and Proxies. Application\ndevelopers should rarely need to interact with Operation objects directly.</p>\n\n\n\n\n<p>Several Operations can be batched together in a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">batch</a>.</p>\n\n",
  "extends": "Object",
  "mixins": [

  ],
  "alternateClassNames": [

  ],
  "xtype": null,
  "author": "Ed Spencer",
  "docauthor": null,
  "singleton": false,
  "private": false,
  "cfg": [
    {
      "tagname": "cfg",
      "name": "action",
      "member": "Ext.data.Operation",
      "type": "String",
      "doc": "<p>The action being performed by this Operation. Should be one of 'create', 'read', 'update' or 'destroy'</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 23,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-action"
    },
    {
      "tagname": "cfg",
      "name": "batch",
      "member": "Ext.data.Operation",
      "type": "Ext.data.Batch",
      "doc": "<p>The batch that this Operation is a part of (optional)</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 53,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-batch"
    },
    {
      "tagname": "cfg",
      "name": "filters",
      "member": "Ext.data.Operation",
      "type": "Array",
      "doc": "<p>Optional array of filter objects. Only applies to 'read' actions.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 28,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-filters"
    },
    {
      "tagname": "cfg",
      "name": "group",
      "member": "Ext.data.Operation",
      "type": "Object",
      "doc": "<p>Optional grouping configuration. Only applies to 'read' actions where grouping is desired.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 38,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-group"
    },
    {
      "tagname": "cfg",
      "name": "limit",
      "member": "Ext.data.Operation",
      "type": "Number",
      "doc": "<p>The number of records to load. Used on 'read' actions when paging is being used.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 48,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-limit"
    },
    {
      "tagname": "cfg",
      "name": "sorters",
      "member": "Ext.data.Operation",
      "type": "Array",
      "doc": "<p>Optional array of sorter objects. Only applies to 'read' actions.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 33,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-sorters"
    },
    {
      "tagname": "cfg",
      "name": "start",
      "member": "Ext.data.Operation",
      "type": "Number",
      "doc": "<p>The start index (offset), used in paging when running a 'read' action.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 43,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-start"
    },
    {
      "tagname": "cfg",
      "name": "synchronous",
      "member": "Ext.data.Operation",
      "type": "Boolean",
      "doc": "<p>True if this Operation is to be executed synchronously (defaults to true). This\nproperty is inspected by a <a href=\"#/api/Ext.data.Batch\" rel=\"Ext.data.Batch\" class=\"docClass\">Batch</a> to see if a series of Operations can be executed in\nparallel or not.</p>\n",
      "private": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 16,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-cfg-synchronous",
      "shortDoc": "True if this Operation is to be executed synchronously (defaults to true). This\nproperty is inspected by a Batch to s..."
    }
  ],
  "method": [
    {
      "tagname": "method",
      "name": "Operation",
      "member": "Ext.data.Operation",
      "doc": "\n",
      "params": [
        {
          "type": "Object",
          "name": "config",
          "doc": "<p>Optional config object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 1,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-constructor",
      "shortDoc": "\n"
    },
    {
      "tagname": "method",
      "name": "allowWrite",
      "member": "Ext.data.Operation",
      "doc": "<p>Checks whether this operation should cause writing to occur.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>Whether the operation should cause a write to occur.</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 223,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-allowWrite",
      "shortDoc": "<p>Checks whether this operation should cause writing to occur.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getError",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n",
      "params": [

      ],
      "return": {
        "type": "Mixed",
        "doc": "<p>The error object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 154,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-getError",
      "shortDoc": "<p>Returns the error string or object that was set using <a href=\"#/api/Ext.data.Operation-method-setException\" rel=\"Ext.data.Operation-method-setException\" class=\"docClass\">setException</a></p>\n"
    },
    {
      "tagname": "method",
      "name": "getRecords",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Array",
        "doc": "<p>Any loaded Records</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 162,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-getRecords",
      "shortDoc": "<p>Returns an array of <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> instances as set by the Proxy.</p>\n"
    },
    {
      "tagname": "method",
      "name": "getResultSet",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns the ResultSet object (if set by the Proxy). This object will contain the <a href=\"#/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">model</a> instances\nas well as meta data such as number of instances fetched, number available etc</p>\n",
      "params": [

      ],
      "return": {
        "type": "Ext.data.ResultSet",
        "doc": "<p>The ResultSet object</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 172,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-getResultSet",
      "shortDoc": "Returns the ResultSet object (if set by the Proxy). This object will contain the model instances\nas well as meta data..."
    },
    {
      "tagname": "method",
      "name": "hasException",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if there was an exception</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 146,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-hasException",
      "shortDoc": "<p>Returns true if this Operation encountered an exception (see also <a href=\"#/api/Ext.data.Operation-method-getError\" rel=\"Ext.data.Operation-method-getError\" class=\"docClass\">getError</a>)</p>\n"
    },
    {
      "tagname": "method",
      "name": "isComplete",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns true if the Operation has been completed</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the Operation is complete</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 198,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-isComplete",
      "shortDoc": "<p>Returns true if the Operation has been completed</p>\n"
    },
    {
      "tagname": "method",
      "name": "isRunning",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the Operation is currently running</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 190,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-isRunning",
      "shortDoc": "<p>Returns true if the Operation has been started but has not yet completed.</p>\n"
    },
    {
      "tagname": "method",
      "name": "isStarted",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns true if the Operation has been started. Note that the Operation may have started AND completed,\nsee <a href=\"#/api/Ext.data.Operation-method-isRunning\" rel=\"Ext.data.Operation-method-isRunning\" class=\"docClass\">isRunning</a> to test if the Operation is currently running.</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if the Operation has started</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 181,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-isStarted",
      "shortDoc": "Returns true if the Operation has been started. Note that the Operation may have started AND completed,\nsee isRunning..."
    },
    {
      "tagname": "method",
      "name": "setCompleted",
      "member": "Ext.data.Operation",
      "doc": "<p>Marks the Operation as completed</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 120,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-setCompleted",
      "shortDoc": "<p>Marks the Operation as completed</p>\n"
    },
    {
      "tagname": "method",
      "name": "setException",
      "member": "Ext.data.Operation",
      "doc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n",
      "params": [
        {
          "type": "Mixed",
          "name": "error",
          "doc": "<p>Optional error string/object</p>\n",
          "optional": false
        }
      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 135,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-setException",
      "shortDoc": "<p>Marks the Operation as having experienced an exception. Can be supplied with an option error message/object.</p>\n"
    },
    {
      "tagname": "method",
      "name": "setStarted",
      "member": "Ext.data.Operation",
      "doc": "<p>Marks the Operation as started</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 112,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-setStarted",
      "shortDoc": "<p>Marks the Operation as started</p>\n"
    },
    {
      "tagname": "method",
      "name": "setSuccessful",
      "member": "Ext.data.Operation",
      "doc": "<p>Marks the Operation as successful</p>\n",
      "params": [

      ],
      "return": {
        "type": "void",
        "doc": "\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 128,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-setSuccessful",
      "shortDoc": "<p>Marks the Operation as successful</p>\n"
    },
    {
      "tagname": "method",
      "name": "wasSuccessful",
      "member": "Ext.data.Operation",
      "doc": "<p>Returns true if the Operation has completed and was successful</p>\n",
      "params": [

      ],
      "return": {
        "type": "Boolean",
        "doc": "<p>True if successful</p>\n"
      },
      "private": false,
      "static": false,
      "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
      "linenr": 206,
      "html_filename": "Operation.html",
      "href": "Operation.html#Ext-data-Operation-method-wasSuccessful",
      "shortDoc": "<p>Returns true if the Operation has completed and was successful</p>\n"
    }
  ],
  "property": [

  ],
  "event": [

  ],
  "filename": "/Users/nick/Projects/sencha/SDK/platform/src/data/Operation.js",
  "linenr": 1,
  "html_filename": "Operation.html",
  "href": "Operation.html#Ext-data-Operation",
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